import Ember from 'ember';

export default Ember.ObjectController.extend({
  message: "",
  actions: {
    create: function(){
      var body = this.get('newBody');
      var title = this.get('newTitle');
      var note = this.store.createRecord('note', {body:body, title:title});
      note.save();
      this.set('newTitle', '');
      this.set('newBody', '');
      this.set('message', "Successfully created a note!");

    },
    deleteNote: function(note){
      var _this = this;
      note.destroyRecord().then(function(){
        _this.set('message', "deleted that note!");
      });
    }
  }
});
