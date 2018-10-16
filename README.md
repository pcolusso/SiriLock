# SiriLock

A very simple script to listen for a web request from Siri Shortcuts.

## Getting Started

Configure server.js for your own needs, a very basic passphrase exists to prevent random passers-by from locking your machine.

I've chosen to launch a screensaver that automatically locks my screen, if you prefer to properly lock, call `lock();` instead.

## Loading at startup

My plist for launching on login is included as well. You will need to configure this for your own environment.

## The Shortcut

Create a simple Get Contents of URL shortcut with the parameters action and passphrase matching in `server.js`. You can then bind this to a siri command.
