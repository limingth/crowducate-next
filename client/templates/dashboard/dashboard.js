Template.dashboard.rendered = function() {

};

Template.dashboard.helpers({
    'courseName': function (courseId) {
        console.log(courseId);
        return Courses.findOne(courseId).title;
    },
});
