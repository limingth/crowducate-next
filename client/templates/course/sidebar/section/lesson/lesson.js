Template.sectionLesson.events({
  'click .sidebar-lesson-link': function (event) {
    event.preventDefault();

    // Check if user is editing lesson text
    if (editingLessonText.get()) {
      // if so, alert them that changes might be lost
      if (window.confirm("Changes may be lost! Proceed?")) {
        // Remove rich text and set edit mode to false
        lessonEditCleanup();

        // set active lesson ID reactive variable
        // to the value of clicked lesson
        activeLessonID.set(this._id);
      }
    } else {
      // set active lesson ID reactive variable
      // to the value of clicked lesson
      activeLessonID.set(this._id);
    }
  },
  'click .editable-submit': function (event, template) {
    // Get the new name from the inline editor
    var newName = template.find('input').value;

    // update the lesson in database
    Lessons.update(this._id, {$set: {'name': newName}});
  },
  'click .lesson-mark-done': function(event, template) {
    var CompletedLessonId = CompletedLessons.insert({
      lessonId: this._id,
      userId: Meteor.userId(),
      createdAt: new Date()
    });
  },
  'click #delete-lesson': function() {
    if (window.confirm("删除后数据将无法恢复，确认删除?")) {
      Lessons.remove(this._id);
    }
  }
});

Template.sectionLesson.helpers({
  isCompleted: function() {
    if(!Meteor.userId()) return "";

    var userCompletedlesson = CompletedLessons.findOne({
      lessonId: this._id,
      userId: Meteor.userId()
    });
    return userCompletedlesson ? "completed" : "";
  },
  'editingThisCourse': function () {
      // Get the course ID from parent template
      /*var courseID = Template.parentData();*/
      /*var courseID = controller.params._id;*/
      // Get the current router object
      var controller = Router.current();

      // Get course ID from router object
      var courseID = controller.params._id;

      // Get the lesson ID from reactive var
      var lessonID = activeLessonID.get();

      console.log('lessonID ' + lessonID);
      //console.log('activeLessonID ' + activeLessonID);

      // return true if editing this course
      return (Session.get('editingCourseID') === courseID);
  }
});
