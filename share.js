const { spawn } = require('child_process');
const net = require('net');

const PORT = process.env.PORT || 3000;
const LOCAL_URL = `http://localhost:${PORT}`;

// Helper: Check if local port is active
function checkPort(port) {
  return new Promise((resolve) => {
    const socket = new net.Socket();
    socket.setTimeout(800);
    socket.once('connect', () => {
      socket.destroy();
      resolve(true);
    });
    socket.once('timeout', () => {
      socket.destroy();
      resolve(false);
    });
    socket.once('error', () => {
      socket.destroy();
      resolve(false);
    });
    socket.connect(port, '127.0.0.1');
  });
}

// Helper: Wait until port is ready
async function waitForPort(port, timeoutMs = 30000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    const isUp = await checkPort(port);
    if (isUp) return true;
    await new Promise((r) => setTimeout(r, 600));
  }
  return false;
}

// Pretty print banner
function printBanner(publicUrl) {
  const line = '═'.repeat(66);
  console.log('\n' + '\x1b[32m' + '╔' + line + '╗' + '\x1b[0m');
  console.log('\x1b[32m║\x1b[0m' + '\x1b[1m\x1b[36m' + '   🚀 CLOUDFLARE SHAREABLE LINK READY!                            ' + '\x1b[0m\x1b[32m║\x1b[0m');
  console.log('\x1b[32m║\x1b[0m' + ' '.repeat(66) + '\x1b[32m║\x1b[0m');
  console.log('\x1b[32m║\x1b[0m' + `   🔗 Public URL:  \x1b[1m\x1b[33m${publicUrl.padEnd(46)}\x1b[0m \x1b[32m║\x1b[0m`);
  console.log('\x1b[32m║\x1b[0m' + `   🏠 Local URL:   \x1b[90m${LOCAL_URL.padEnd(46)}\x1b[0m \x1b[32m║\x1b[0m`);
  console.log('\x1b[32m║\x1b[0m' + ' '.repeat(66) + '\x1b[32m║\x1b[0m');
  console.log('\x1b[32m║\x1b[0m' + '   ✨ Anyone worldwide can open this link to view your site!      ' + '\x1b[32m║\x1b[0m');
  console.log('\x1b[32m║\x1b[0m' + '   🛑 Press Ctrl + C to stop the tunnel and server.               ' + '\x1b[32m║\x1b[0m');
  console.log('\x1b[32m╚' + line + '╝\x1b[0m\n');
}

async function main() {
  console.log('\x1b[36m[Cloudflare Share]\x1b[0m Initializing sharable tunnel...');
  let devProcess = null;
  let tunnelProcess = null;

  // Cleanup handler
  const cleanup = () => {
    console.log('\n\x1b[33m[Cloudflare Share] Stopping processes...\x1b[0m');
    const killProc = (proc) => {
      if (!proc || !proc.pid) return;
      if (process.platform === 'win32') {
        try {
          const { execSync } = require('child_process');
          execSync(`taskkill /pid ${proc.pid} /f /t`, { stdio: 'ignore' });
        } catch (e) {}
      } else {
        try { proc.kill('SIGINT'); } catch (e) {}
      }
    };

    killProc(tunnelProcess);
    killProc(devProcess);
    process.exit(0);
  };

  process.on('SIGINT', cleanup);
  process.on('SIGTERM', cleanup);

  // 1. Check if Next.js dev server is running
  const isServerRunning = await checkPort(PORT);
  if (!isServerRunning) {
    console.log(`\x1b[33m[1/2] ⏳ Port ${PORT} is free. Starting Next.js dev server automatically...\x1b[0m`);
    const isWin = process.platform === 'win32';
    const npmCmd = isWin ? 'npm.cmd' : 'npm';
    
    devProcess = spawn(npmCmd, ['run', 'dev'], {
      stdio: 'pipe',
      shell: true,
      env: { ...process.env, PORT: String(PORT) },
    });

    devProcess.stdout.on('data', (data) => {
      // Optional: keep terminal clean, or forward if needed
    });

    devProcess.stderr.on('data', (data) => {
      // Output errors if any
      const str = data.toString();
      if (str.includes('Error')) {
        console.error('\x1b[31m[Next.js Error]\x1b[0m', str);
      }
    });

    const isReady = await waitForPort(PORT, 30000);
    if (!isReady) {
      console.error('\x1b[31m[Error] Next.js dev server failed to start within 30 seconds.\x1b[0m');
      cleanup();
      return;
    }
    console.log(`\x1b[32m[1/2] ✅ Next.js dev server is running at ${LOCAL_URL}\x1b[0m`);
  } else {
    console.log(`\x1b[32m[1/2] ✅ Detected already running server on ${LOCAL_URL}\x1b[0m`);
  }

  // 2. Start Cloudflare Tunnel
  console.log('\x1b[36m[2/2] 🌐 Creating Cloudflare public tunnel...\x1b[0m');
  const isWin = process.platform === 'win32';
  const npxCmd = isWin ? 'npx.cmd' : 'npx';

  tunnelProcess = spawn(npxCmd, ['--yes', 'cloudflared', 'tunnel', '--url', LOCAL_URL], {
    stdio: ['ignore', 'pipe', 'pipe'],
    shell: true,
  });

  let urlFound = false;
  const urlRegex = /https:\/\/[a-zA-Z0-9-]+\.trycloudflare\.com/i;

  const handleData = (chunk) => {
    const text = chunk.toString();
    const match = text.match(urlRegex);
    if (match && !urlFound) {
      urlFound = true;
      const publicUrl = match[0];
      printBanner(publicUrl);
    }
  };

  tunnelProcess.stdout.on('data', handleData);
  tunnelProcess.stderr.on('data', handleData);

  tunnelProcess.on('close', (code) => {
    if (!urlFound) {
      console.log(`\x1b[31m[Cloudflare Tunnel closed with code ${code}]\x1b[0m`);
    }
    cleanup();
  });
}

main().catch((err) => {
  console.error('\x1b[31m[Error]\x1b[0m', err);
  process.exit(1);
});
