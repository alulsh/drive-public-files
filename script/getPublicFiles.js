function getPublicFiles() {

  var files = DriveApp.searchFiles('visibility = "anyoneWithLink" or visibility = "anyoneCanFind"');
  var currentUser = Session.getActiveUser().getEmail();
  
  while (files.hasNext()) {
    var file = files.next();

    try {
      var fileOwner = file.getOwner().getEmail();
    } catch(e) {
      Logger.log('Error retrieving file owner email address for file ' + file.getName() + ' with the error: ' + e.message);
    }
    
    if (fileOwner === currentUser) {
      try {
        var access = file.getSharingAccess(); 
      } catch(e) {
        Logger.log('Error retrieving access permissions for file ' + file.getName() + ' with the error: ' + e.message);
      }
        
      try {
        var permission = file.getSharingPermission();
      } catch(e) {
        Logger.log('Error retrieving sharing permissions for file ' + file.getName() + ' with the error: ' + e.message);
      }
      
      var url = file.getUrl();
      var html = HtmlService.createHtmlOutput('Google Drive document <a href="' + url + '"> ' + file.getName() 
        + '</a> is public and ' + access + ' can ' + permission + ' the document<br/>');
      Logger.log(html.getContent()); 
    }
  }
  
  var body = Logger.getLog();
  MailApp.sendEmail({
    to: currentUser,
    subject: 'Your public Google Drive files',
    htmlBody: body
  });
}