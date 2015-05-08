Template.togglePublish.events({
  'click label:first-child': function (event, template) {
    Courses.update(this._id, {$set: {'published': 'true'}});
    console.log(this.published);
  },
  'click label:last-child': function (event, template) {
    Courses.update(this._id, {$set: {'published': 'false'}});
    console.log(this.published);
  }
});

Template.togglePublish.helpers({
  publish_active: function () {
    return this.published == "true" ? "active" : "";;
  },
  unpublish_active: function () {
    return this.published == "false" ? "active" : "";
  }
});
