Ext.define('ExtJmaSample.model.JmaModel', {
    extend: 'Ext.data.Model',
    fields: [
         {name: 'title',    type: 'string'},
         {name: 'datetime', type: 'date'},
         {name: 'headline', type: 'auto'},
         {name: 'link', type: 'string'},
    ]
});

