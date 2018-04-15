# drive-public-files

A [Google Apps Script](https://developers.google.com/apps-script/) that audits all of your Google Drive files for any publicly shared files and sends you an email with the results.

## Public Google Drive documents

Public Google Drive documents can be viewed or edited by anyone with the link. These documents can even show up in Google searches if they are "Public on the web." Public sharing is useful for crowd sourcing information or publishing content, but it's not appropriate for sensitive information. 

Often people create public Google Drive files because they're not aware they can share with other Google users directly. Public sharing is also the default sharing option in the Google Drive UI.

## Auditing public Google Drive documents

The Google Drive UI does not let you search for your publicly shared files. G Suite Admins or security teams may need to help users identify their public Google Drive files.

I created this project to solve this problem. It uses the [Google Drive SDK search feature](https://developers.google.com/drive/v3/web/search-parameters) via the [`searchFiles()`](https://developers.google.com/apps-script/reference/drive/drive-app#searchfilesparams) method in Google Apps Script DriveApp to find files with a visibility of `anyoneCanFind` or `anyoneWithLink`. The script then emails the user the names and URLs of their public Drive files.

## Running the script

I publicly shared this script so that anybody can view or run it. You will see warnings from Google that this script is unsafe. This because I have not published it the Chrome Web Store as a Google-reviewed add-on or web app.

To run the script:

1. Visit https://script.google.com/d/1BfmF_Iw728kZdTugkzDrH4FmTo0S_i78Fgt61QF55P9uuym8rPIrKIlU/.
1. Click on the triangle run button (next to the spider debugger).
1. Click "Review Permissions" when asked for authorization.
1. Sign in to your Google account.
1. Click on "Advanced" under "This app isn't verified."
1. Click on "Go to Public Google Drive files audit (unsafe)."
1. Click "Allow."
1. The script will start to run. You should see a yellow banner with "Running function getPublicFiles..."
1. You will receive an email report of your public Drive files when the script finishes.

## Creating a copy

If you'd like to make a copy of this script in your own Google account:

1. Visit https://script.google.com/d/1BfmF_Iw728kZdTugkzDrH4FmTo0S_i78Fgt61QF55P9uuym8rPIrKIlU/.
2. Click on "File" then "Make a copy..."

## Cloning a local copy with clasp

I used [clasp](https://github.com/google/clasp) to develop this script locally with git source control. If you'd like to clone this script locally with clasp:

1. Globally install clasp - `npm install -g @google/clasp`.
1. Login to your Google account with clasp - `clasp login`.
1. Enable the Google Apps Script API on your Google account - https://script.google.com/home/usersettings.
1. Create a copy of the script in your own account.
1. Create a folder for the App Script files and change in to that directory.
1. Run `clasp clone <script ID>`. The script ID is in the URL of your copy of the script.