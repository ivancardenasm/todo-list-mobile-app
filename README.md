# To Do List Mobile App &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/facebook/react/blob/main/LICENSE)

A simple To Do List app build in [Expo](https://github.com/expo/expo).

## Setting up the project

Download the required packages of the project by running the following command:
```
npm i
```

## Starting the development server

Start the development server by running the following command:
```
npx expo start
```

## Opening the app on your phone/tablet

To open the app:

- On your Android device, press "Scan QR Code" on the "Home" tab of the Expo Go app and scan the QR code you see in the terminal.
- On your iPhone or iPad, open the default Apple "Camera" app and scan the QR code you see in the terminal.

You can open the project on multiple devices simultaneously. Go ahead and try it on an iPhone and Android phone at the same time if you have both handy.
First, make sure you are on the same Wi-Fi network on your computer and your device.
If it still doesn't work, it may be due to the router configuration — this is common for public networks. You can work around this by choosing the "Tunnel" connection type when starting the development server, then scanning the QR code again.

### Is the app not loading on your device?

npx expo start --tunnel
Using the "Tunnel" connection type will make app reloads considerably slower than on "LAN" or "Local", so it's best to avoid tunnel when possible. You may want to install a simulator/emulator to speed up development if "Tunnel" is required for accessing your machine from another device on your network.

### Using a simulator or emulator?

If you are using a simulator or emulator, you may find the following Expo CLI keyboard shortcuts to be useful to open the app on any of the following platforms:
- Pressing `a` will open in an Android Emulator or connected device.
- Pressing `ì` will open in an iOS simulator.
- Pressing `w` will open in a web browser. Expo supports all major browsers.





