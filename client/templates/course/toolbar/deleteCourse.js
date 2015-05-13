Template.deleteCourse.events({
  'click #delete-course': function () {
    if (window.confirm("删除后数据将无法恢复，确认删除这门课程?")) {
      Courses.remove(this._id);
      Router.go('/learn');
    }
  }
});
