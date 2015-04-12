Sections = new Mongo.Collection("sections");

Sections.helpers({
    'sections': function() {
        // Return all sections of a course
        // return all lessons related to course
        return Sections.find({'courseIDs': this._id});
    }
})