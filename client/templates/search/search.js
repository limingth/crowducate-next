
//Meteor.subscribe('lessons');  

Template.search.helpers({
  lessons: function () {
    return Lessons.find();
  },
  courseName:function(courseID){
  	console.log('courseID is'+ courseID);
  	console.log(Courses.findOne(courseID));
  	return Courses.findOne(courseID).title;
  },
  courseAuthor:function(courseID){
  	return Courses.findOne(courseID).author;
  }
});