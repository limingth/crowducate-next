
Template.courseMeta.helpers({
  records: function (argument) {
    return Records.find({}, {sort: {date: -1}});
  },
  GetEmail: function (user) {
    // console.log(user);
    return user.emails[0].address;
  }
});