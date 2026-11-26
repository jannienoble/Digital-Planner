# Digital Life Planner

**Plan. Focus. Achieve.**

A simple planner for goals, tasks, habits, money, ideas and daily check-ins. It runs in your browser and can be added to your phone's home screen. No planner account is needed.

**Open the app:** https://jannienoble.github.io/Digital-Planner/

## Features

- **Dashboard:** goal progress, this week's habits, tasks and a daily quote
- **Goals:** set goals and update their progress
- **Tasks:** add due dates and reminder times, tick off tasks, spot overdue ones and create calendar reminders
- **Habits:** track habits for the current week
- **Money:** record this month's income, expenses and savings in naira (₦)
- **Ideas:** save notes and ideas
- **Wellness:** record your mood, what went well, where you got stuck and what matters tomorrow
- **Settings:** change your name, remove examples, and back up or restore your data

## Install on your phone

- **Android (Chrome):** open the app link, tap **⋮**, then **Install app** or **Add to Home screen**.
- **iPhone (Safari):** open the app link, tap **Share**, then **Add to Home Screen**.

The app is designed to work offline after you have opened it once while online. Fonts may look different offline. It is not an app store download.

## Calendar reminders

1. Add a task with a future date and reminder time.
2. Tap **Add to calendar**.
3. Open the downloaded file, save the event, and check that its alert is on.

Your calendar app handles the reminder, and may sync the task name with your calendar account. Later changes in the planner do not update or remove the event, so change it in your calendar too. Import steps and alert settings differ between devices.

## Your data

- Your entries are saved in the browser on your device. The app does not upload them to GitHub.
- Devices do not sync automatically.
- Clearing browser or site data can delete your planner.
- The app has no password, so anyone using your unlocked browser may see your entries.
- On iPhone, the home screen app may not share data with Safari. Use the home screen icon consistently.

## Backup and restore

1. Go to **Settings → Download backup**.
2. Keep the file somewhere private. It is not password protected.
3. To restore, choose the file under **Restore from a backup file**, then tap **Replace with backup**.

Restoring replaces the current planner. It does not combine the two.

## Limitations

- No notifications from the planner itself
- No automatic sync between devices

## Built with

HTML, CSS and JavaScript, with a web app manifest and a service worker. No build step is required.

| File | Purpose |
|---|---|
| `index.html` | The app |
| `manifest.webmanifest` | Installation settings |
| `sw.js` | Offline support |
| `icon.svg` | App icon |
