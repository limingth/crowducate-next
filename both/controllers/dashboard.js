DashboardController = AppController.extend({
  waitOn: function() {
    return [
    this.subscribe('items'),
    this.subscribe('records', Meteor.userId()),
    ]
  },
  data: {
    items: Items.find({}),
    records: Records.find({}, {sort: {date: -1}}),
    courses: Courses.find({})
  },
  onBeforeAction: function (pause) {
    AccountsTemplates.ensureSignedIn.call(this, pause);
  },
  onAfterAction: function () {
    Meta.setTitle('Dashboard');
  }
});

DashboardController.events({
  'click [data-action=doSomething]': function (event, template) {
    event.preventDefault();
  }
});
