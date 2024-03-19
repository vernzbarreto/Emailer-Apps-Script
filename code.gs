function main() {

// access
var formResponses = getSheetById(1069665103);

// collect data
var formData = formResponses.getRange(1, 1, formResponses.getLastRow(), formResponses.getLastColumn()) .getDisplayValue();

//collect ?
var formQuestions = formResponses.getRange(1, 2, 1, formResponses.getLastColumn()).getDisplayValues();
 
 //collect recent
 var recentResponse = formResponses.getRange(formResponses.getLastRow(), 1, 1, formResponses.getLastColumn()).getDisplayValues();

 //response
 var emailRecipient = recentResponse[0][5]
 

 //template
 var htmlTemplate = HtmlService.createTemplateFromFile('email')

 //define html variables questions
 htmlTemplate.questionOne = formQuestions [0][0];
 htmlTemplate.questionTwo = formQuestions [0][1];
 htmlTemplate.questionThree = formQuestions [0][2];
 htmlTemplate.questionFour = formQuestions [0][3];
 htmlTemplate.questionFive = formQuestions [0][4];
 htmlTemplate.questionSix = formQuestions [0][5];
 htmlTemplate.questionSeven = formQuestions [0][6];
 htmlTemplate.questionEight = formQuestions [0][7];
 htmlTemplate.questionNine = formQuestions [0][8];
 htmlTemplate.questionNine = formQuestions [0][9];


 //define html variable answers
 htmlTemplate.answerOne = recentResponse[0][1];
 htmlTemplate.answerTwo = recentResponse[0][2];
 htmlTemplate.answerThree = recentResponse[0][3];
 htmlTemplate.answerFour = recentResponse[0][4];
 htmlTemplate.answerFive = recentResponse[0][5];
 htmlTemplate.answerSix = recentResponse[0][6];
 htmlTemplate.answerSeven = recentResponse[0][7];
 htmlTemplate.answerEight = recentResponse[0][8];
 htmlTemplate.answerNine = recentResponse[0][9];


 //evaluate and return html output
 var htmlForEmail = htmlTemplate.evaluate().getContent();

 //send email
 GmailApp.sendEmail(
  emailRecipient,
  'Response notification', 
  'Check Qr for access',
  {htmlBody: htmlForEmail}
 );

}



