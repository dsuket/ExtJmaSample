Ext.define('ExtJmaSample.store.SampleStore', {
    extend: 'Ext.data.Store',
    fields: [
         {name: 'name',    type: 'string'},
         {name: 'age',     type: 'int'},
         {name: 'country', type: 'string'}
    ],
    data: [
        {name: 'Takaoka', age: 35, country: 'Japan'},
        {name: 'Suga',    age: 36, country: 'Japan'},
        {name: 'Ugaji',   age: 33, country: 'India'},
        {name: 'Jayadip', age: 27, country: 'India'}
    ],
    proxy: {
        type: 'memory',
        reader: {
            type: 'json'
        }
    }
});

