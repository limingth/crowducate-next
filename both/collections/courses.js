Courses = new Mongo.Collection("courses");

Courses.helpers({
    'lessons': function () {
        // return all lessons related to course
        return Lessons.find({'courseIDs': this._id});
    },
    'coverImage': function() {
        // Get the cover image from Images collection
        var image = Images.findOne(this.coverImageId);

        return image;
    },
    'GetUser': function () {
        var user = Meteor.users.findOne({_id: this.createdById});
        return user;
    },
    'GetUserName': function () {
        console.log('in course helper ', this);
        var user = Meteor.users.findOne({_id: this.createdById});
        console.log(user);
        //console.log(user._id);  can not be used! Why?
        //console.log(user.emails[0]);

        return user.emails[0].address;
    }
});

// During the course creation add user id and a date stamp with dateCreated.
Courses.before.insert(function (userId, document) {
    document.createdById = userId;
    document.dateCreated = new Date();
    document.viewCount = 0;
    document.voteCount = 0;
});

Records = new Mongo.Collection("records");

Records.helpers({
    'GetUser': function () {
        var user = Meteor.users.findOne({_id: this.userId});
        return user;
    },
    GetUserName: function () {
        //console.log(Meteor.users);
        var user = Meteor.users.findOne({_id: this.userId});
        console.log(user);
        //console.log(user._id);  can not be used! Why?
        //console.log(user.emails[0]);
        return user.emails[0].address;
        //return user;
    },
});
