# Mobile App - Leads Tracker 

Leads Tracker is a mobile web application that allows users to save and track leads (such as URLs or text). Users can manually input a lead or delete all saved leads. Leads are displayed dynamically on the app and are persisted using Firebase, ensuring they are available across sessions and devices.

## Features
1. **Save Lead Manually:** Enter a lead (URL or text) in the input field and save it to the list.
2. **Delete All Leads:** Double-click the "DELETE ALL" button to remove all saved leads.
3. **Persistent Storage with Firebase:** Leads are stored in a Firebase database, ensuring they persist across sessions and devices.

## Installation

### Running the Web App on Mobile

1. **Clone the Repository**  
   Download the repository to your local machine:
   ```bash
   git clone https://github.com/ThaboChauke/Mobile_App.git
   ```

2. **Open on Mobile Browser**  
   Open the web app in a mobile browser by navigating to the hosted link or by opening `index.html` in your local mobile browser.

<!-- 3. **Deploying as a Mobile App**  
   Use a framework like Cordova, Ionic, or any other web-to-mobile platform to package the web app into a mobile app if needed. -->

## How to Use

- **Enter a Lead:**  
  Type a lead (URL or text) into the input field and click the "SAVE INPUT" button to add it to the list.

- **Delete All Leads:**  
  Double-click the "DELETE ALL" button to clear all saved leads from both the UI and the Firebase database.

- **View Saved Leads:**  
  Leads are displayed as clickable links in an unordered list. Clicking on a lead will take you to the associated URL.

## Technologies Used
- **HTML/CSS:** For the structure and styling of the app.
- **JavaScript:** Core functionality for adding, displaying, and deleting leads.
- **Firebase:** For real-time database storage and synchronization.