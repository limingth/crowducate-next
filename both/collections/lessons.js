Lessons = new Mongo.Collection('lessons');

CompletedLessons = new Mongo.Collection('completedLessons');

// name is the field of the documents to search over
//Lessons.initEasySearch('name');
//Lessons.initEasySearch('text');

Lessons.initEasySearch(['name', 'text']);



