Meteor.publish('courses', function () {
    return Courses.find();
});

Meteor.publish('myCourses', function (userId) {
    console.log('myCourses id is ', userId);
    console.log(Courses.find({"createdById": userId}).fetch());
    return Courses.find({"createdById": userId});
});

Meteor.publish('publishedCourses', function () {
    return Courses.find({"published": "true"});
});

Meteor.publish('taggedCourses', function (tag) {
    return Courses.find({"keywords": tag});
});

Meteor.publish('singleCourse', function (courseID) {
    return Courses.find({"_id": courseID});
});

Meteor.publish('completedLessons', function (userId) {
    return CompletedLessons.find({"userId": userId});
});
