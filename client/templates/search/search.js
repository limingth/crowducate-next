
//Meteor.subscribe('lessons');  

Template.search.helpers({
  lessons: function () {
    return Lessons.find();
  },
  courseName: function (courseID) {
    // body...
    console.log('courseID is '+ courseID);
    console.log(Courses.findOne(courseID));
    return Courses.findOne(courseID).title;
  },
  courseAuthor: function (courseID) {
    // body...
    return Courses.findOne(courseID).author;
  }
});