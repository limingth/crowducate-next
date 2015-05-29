Template.course.rendered = function () {
  $('input').garlic();

    //modify inline editor buttons style
    $.fn.editableform.buttons =
        '<button type="submit" class="btn btn-success editable-submit btn-mini"><i class="fa fa-check"></i></button>' +
        '<button type="button" class="btn btn-danger editable-cancel"><i class="fa fa-times"></i></button>';

  // Get the current router object
  var controller = Router.current();

  // Get course ID from router object
  var courseId = controller.params._id;

  console.log('courseID ' + courseId);

  var uid = Meteor.userId();

  Courses.update(courseId, {$inc: {viewCount: 1}});
  Records.insert({uid: uid, courseId: courseId,  date:new Date()});
};

Template.course.helpers({
  /*
    admin: function () {
        return Meteor.userId() == "feKnQQv5w4b6hkisX" || Meteor.userId() == "5Fp9XzMhyDEjfnipt" || Meteor.userId() == "6ryZES3ZPJeeYs8YY" || Meteor.userId() == "xgoJBP5wo2drCtKBb";
    }
  */
  admin: function (argument) {
      return Meteor.userId() == "Sfkj3c3bT2RLiE2jc" || Meteor.userId() == "Sfkj3c3bT2RLiE2jc" || Meteor.userId() == "feKnQQv5w4b6hkisX" || Meteor.userId() == "5Fp9XzMhyDEjfnipt" || Meteor.userId() == "6ryZES3ZPJeeYs8YY" || Meteor.userId() == "xgoJBP5wo2drCtKBb";
  }
});
