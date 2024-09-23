# Mobile App - Leads Tracker 

Leads Tracker is a mobile web application that allows users to save and track leads (such as URLs or text). Users can manually input a lead or delete all saved leads. Leads are displayed dynamically on the app and persist across sessions and devices.

## Features
1. **Save Lead Manually:** Enter a lead (URL or text) in the input field and save it to the list.
2. **Delete All Leads:** Double-click the "DELETE ALL" button to remove all saved leads.
3. **Persistent Storage with Firebase:** Leads are stored in a Firebase database, ensuring they persist across sessions and devices.

## Installation

### Running the Web App

1. **Access the Web App**  
   Open the Leads Tracker app by visiting the following link on your mobile browser:  
   [Leads Tracker](https://leadstrackerthabo.netlify.app)

2. **Add to Home Screen (Mobile)**  
   To access the app like a native mobile app, follow the steps below to add it to your home screen:

   - **Android (Chrome):**
     1. Open the app in Chrome: [leadstrackerthabo.netlify.app](https://leadstrackerthabo.netlify.app)
     2. Tap the three-dot menu in the top-right corner.
     3. Select **"Add to Home screen."**
     4. Confirm the name (optional) and tap **"Add."**
     5. The app will now appear on your home screen like a native app.

   - **iOS (Safari):**
     1. Open the app in Safari: [leadstrackerthabo.netlify.app](https://leadstrackerthabo.netlify.app)
     2. Tap the **share** icon (square with an arrow).
     3. Scroll down and select **"Add to Home Screen."**
     4. Confirm the name (optional) and tap **"Add."**
     5. The app will now appear on your home screen like a native app.

## How to Use

- **Enter a Lead:**  
  Type a lead (URL or text) into the input field and click the `SAVE INPUT` button to add it to the list.

- **Delete All Leads:**  
  Double-click the "DELETE ALL" button to clear all saved leads from both the UI and the Firebase database.

- **View Saved Leads:**  
  Leads are displayed as clickable links in an unordered list. Clicking on a lead will take you to the associated URL.

## Technologies Used
- **HTML/CSS:** For the structure and styling of the app.
- **JavaScript:** Core functionality for adding, displaying, and deleting leads.
- **Firebase:** For real-time database storage and synchronization.