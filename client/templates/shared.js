// set default options for x-editable inline editors
// accessible in sub templates
defaultEditableOptions = {
    // Make sure text doesn't display twice after saving
    // since title will update reactively from database
    display: false,
    showbuttons: false
};


Template.registerHelper('canEdit', function() {
  return Meteor.userId() == "znNB43xrYAWRXKtWe" || Meteor.userId() == "feKnQQv5w4b6hkisX" || Meteor.userId() == "5Fp9XzMhyDEjfnipt" || Meteor.userId() == "6ryZES3ZPJeeYs8YY" || Meteor.userId() == "xgoJBP5wo2drCtKBb";
});
