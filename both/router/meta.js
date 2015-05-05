Meteor.startup(function() {
  if(Meteor.isClient) {
    Meta.config({
      options: {
        //Meteor.settings[Meteor.settings.environment].public.meta.title,
        title: '毛豆网微课堂',
        suffix: 'Crowducate'
      }
    });
  }
});
