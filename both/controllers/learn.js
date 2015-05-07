/*
LearnController = AppController.extend({
    waitOn: function() {
        return [
            this.subscribe('publishedCourses'),
            this.subscribe('images')
            // TODO: Consider how to refine the images subscription to return only relevant images
        ];
    },
    data: function () {
        return Resources.find();
    }
});
*/

LearnController = AppController.extend({
    waitOn: function() {
        if (!Meteor.user())
            return [
                this.subscribe('publishedCourses'),
                this.subscribe('images')
                // TODO: Consider how to refine the images subscription to return only relevant images
            ];
        else
            return [
                this.subscribe('courses'),
                this.subscribe('images')
                // TODO: Consider how to refine the images subscription to return only relevant images
            ];
    },
    data: function () {
        return Resources.find();
    }
});
