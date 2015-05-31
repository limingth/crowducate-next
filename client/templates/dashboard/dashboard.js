Template.dashboard.rendered = function() {

};

Template.dashboard.helpers({
    'courseName': function (courseId) {
        return Courses.findOne(courseId).title;
    },
});
