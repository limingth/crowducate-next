Meteor.publish('courses', function () {
    return Courses.find();
});

Meteor.publish('myCourses', function (userId) {
    console.log('myCourses id is ', userId);
    console.log(Courses.find({"createdById": userId}).fetch());
    return Courses.find({"createdById": userId});
});

/*
Meteor.publish('courseRecords', function (courseId) {
    console.log('publish courseId ' + courseId);
    console.log(Records.find({"courseId": courseId}).fetch());
    return Records.find({"courseId": courseId});
});
*/

Meteor.publishComposite('courseRecords', function(courseId) {
  return {
    find: function() {
      return Records.find({"courseId": courseId});
    },
    children: [
      {
        find: function(record) {
          return Meteor.users.find({_id: record.userId});
        }
      },
      {
        find: function(record) {
          return Courses.find({_id: record.courseId});
        },
        children: [
          {
            find: function(course) {
              return Meteor.users.find({_id: course.createdById});
            }
          }
        ]
      }
    ]
  };
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
