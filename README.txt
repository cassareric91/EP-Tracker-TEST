EP Tracker (TEST) - stand-alone app
======================================

This is the test copy of the EP Tracker, with its fictitious data (350 EPs, 2020 to 2026, plus
To-Do jobs, agenda items and map sites). It needs no Claude account and no internet. Everything
you change is saved in the browser on the device you use it on.

Quickest way (computer)
  Open EP-Tracker-TEST.html (sent with this folder) in Chrome, Edge or Safari.

Installed app with its own icon (phone or computer)
  A phone can only install an app from a web address, so put this folder online once:
  1. Create a free GitHub account, then a new PUBLIC repository called ep-tracker-test.
  2. Upload these files themselves (not the folder): index.html, sw.js, manifest.webmanifest,
     README.txt and the four icon .png files. Click "Commit changes".
  3. Settings > Pages > Branch: main, folder / (root) > Save. Wait a minute or two.
  4. Open https://YOUR-USERNAME.github.io/ep-tracker-test/ on your phone or computer.
     - Android (Chrome): menu > Install app (or use Install app in the tracker's own menu).
     - iPhone (Safari): Share > Add to Home Screen.
     - Computer (Chrome or Edge): the install icon at the right of the address bar.
  After the first visit it opens from its icon and works with no connection.
  Netlify Drop (drag the unzipped folder onto app.netlify.com/drop) works too.

The tracker's menu (three dots, top right)
  Export data            saves everything in a .json file
  Import data            replaces what is on this device with an exported file
  Reset to sample data   back to the fictitious data the app came with
  Install / Uninstall    install it, or the steps to remove it
  Erase all data         empties the tracker on this device

Each device keeps its own copy. To move your work between devices, Export on one and Import on
the other. This copy has nothing to do with the real EP Tracker on claude.ai.

Updating: replace index.html and sw.js in the repository with the new ones, then open the app
once while online.
