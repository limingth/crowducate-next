
Template.courseMeta.helpers({
  records: function (argument) {
    return Records.find({}, {sort: {date: -1}});
  },
});