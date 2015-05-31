
//Meteor.subscribe('lessons');  

Template.search.helpers({
  lessons: function () {
    return Lessons.find();
  },
  courseName: function (courseID) {
    // body...
    // console.log('courseID is '+ courseID);
    // console.log(Courses.findOne(courseID));
    return Courses.findOne(courseID)? Courses.findOne(courseID).title : "";
  },
  courseAuthor: function (courseID) {
    // body...
    return Courses.findOne(courseID).author;
  }
});

Template.courseCard.rendered = function() {
  var container = document.querySelector('.container');
  var msnry = new Masonry(container, {
    itemSelector: '.col-xs-6',
    isAnimated: true,
     columnWidth: 200,
    animationOptions: {
      duration: 400
    }
  });
};
