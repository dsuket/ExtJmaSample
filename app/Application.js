Ext.define('ExtJmaSample.Application', {
    name: 'ExtJmaSample',

    extend: 'Ext.app.Application',

    views: [
        'SearchForm'
    ],

    controllers: [
        'Main',
        'Search'
    ],

    stores: [
        'SampleStore',
        'JmaStore'
    ],

    models: [
        'JmaModel'
    ]
});
