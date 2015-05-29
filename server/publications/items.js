Meteor.publishComposite("items", function() {
  return {
    find: function() {
      return Items.find({});
    }
    // ,
    // children: [
    //   {
    //     find: function(item) {
    //       return [];
    //     }
    //   }
    // ]
  }
});

Meteor.publishComposite("records", function(userId) {
  return {
    find: function() {
      return Records.find({uid: userId});
    }
    ,
    children: [
      {
        find: function(item) {
          return Courses.find(item.courseId);
        }
      }
    ]
  }
});
