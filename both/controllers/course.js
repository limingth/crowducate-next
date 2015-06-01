CourseController = AppController.extend({
    waitOn: function() {
        // course ID
        var courseID = this.params._id;

        // Course subscriptions
        return [
             // Wait for the course to be available
            this.subscribe("singleCourse", courseID),
            // subscribe only to lessons in this course
            this.subscribe("courseLessons", courseID),
            this.subscribe("completedLessons", Meteor.userId()),
        ];
    },
    data: function () {
        // Return the course
        return Courses.findOne();
    },
    onAfterAction: function () {
        // Get the course ID from the URL parameters
        var courseID = this.params._id;

        // TODO: uncomment the following and figure out why it is generating a browser console error

        // Get the course from the database
        var course  = Courses.find(courseID).fetch()[0]; // select the zeroeth array item
        console.log('course ', course);


        var title = course? course.title : "";
        console.log('course title ', title);
        
        // Set the site title for SEO
        Meta.setTitle(title);
    }
});
