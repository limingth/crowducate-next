
Meteor.subscribe('lessons');  

Template.search.helpers({
  lessons: function () {
    return Lessons.find();
  },
});