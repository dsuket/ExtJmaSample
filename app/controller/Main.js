Ext.define('ExtJmaSample.controller.Main', {
    extend: 'Ext.app.Controller',

    refs: [{
      ref: 'btn1',
      selector: 'app-main #button-1'
    }],

    init: function() {
      this.control({
          'app-main #button-1': {
            click: this.onClick
          }
        });
    },

    onClick: function(){
      Ext.Msg.alert('Info', 'Button1 clicked!');
    }
});
