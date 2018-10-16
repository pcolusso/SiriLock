#!/usr/bin/env node

const http = require('http');
const lock = require('lock-system');
const { exec } = require('child_process');

http.createServer((req, res) => {
  let h = req.headers
  if (h.action == 'lock' && h.passphrase == 'justdoit') {
    res.write("Computer locked");
    exec("/System/Library/CoreServices/ScreenSaverEngine.app/Contents/MacOS/ScreenSaverEngine", (err, stdout, stdin) => {
      if (err) {
        console.log("Unable to launch subprocess.")
      }
    })
  } else {
    res.write("Unable to lock computer.");
  }
  
  res.end();
}).listen(1337);