Template.course.rendered = function () {
    //modify inline editor buttons style
    $.fn.editableform.buttons =
        '<button type="submit" class="btn btn-success editable-submit btn-mini"><i class="fa fa-check"></i></button>' +
        '<button type="button" class="btn btn-danger editable-cancel"><i class="fa fa-times"></i></button>';
};

Template.course.helpers({
  /*
    admin: function () {
        return Meteor.userId() == "feKnQQv5w4b6hkisX" || Meteor.userId() == "5Fp9XzMhyDEjfnipt" || Meteor.userId() == "6ryZES3ZPJeeYs8YY" || Meteor.userId() == "xgoJBP5wo2drCtKBb";
    }
  */
  admin: function (argument) {
      return Meteor.userId() == "t8Xf8xSjmiHDKGxEF" || Meteor.userId() == "feKnQQv5w4b6hkisX" || Meteor.userId() == "5Fp9XzMhyDEjfnipt" || Meteor.userId() == "6ryZES3ZPJeeYs8YY" || Meteor.userId() == "xgoJBP5wo2drCtKBb";
  }
});
