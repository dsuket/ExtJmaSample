Ext.define('ExtJmaSample.view.SearchForm', {
  extend: 'Ext.form.Panel',
  alias: 'widget.app-searchform',
  requires:[
    'Ext.layout.container.Form',
    'Ext.form.field.Date',
    'Ext.ux.DataTip'
  ],

  // layout: 'form',
  bodyPadding: '5 5 0',
  fieldDefaults: {
      msgTarget: 'side',
      labelWidth: 45
  },
  plugins: {
      ptype: 'datatip'
  },

  items: [{
      fieldLabel: 'Title',
      itemId: 'title',
      xtype: 'textfield',
      value: '気象特別警報・警報・注意報'
  }, {
      fieldLabel: 'Start',
      itemId: 'startdate',
      xtype: 'datefield',
      format: 'Y-m-d',
      value: '2014-02-14'
  }, {
      fieldLabel: 'End',
      itemId: 'enddate',
      xtype: 'datefield',
      format: 'Y-m-d',
      value: '2014-02-16'
  }],

  buttons: [{
    text: 'Submit',
    itemId: 'submitbtn'
  }]
});
