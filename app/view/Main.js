Ext.define('ExtJmaSample.view.Main', {
    extend: 'Ext.container.Container',
    requires:[
        'Ext.tab.Panel',
        'Ext.layout.container.Border',
        'Ext.grid.Panel',
        'Ext.grid.column.Date',
        'Ext.toolbar.Paging',
    ],
    
    xtype: 'app-main',

    layout: {
        type: 'border'
    },

    items: [{
        region: 'west',
        title: 'Search',
        xtype: 'app-searchform',
    },{
        region: 'center',
        xtype: 'tabpanel',
        items:[{
            xtype: 'grid',
            title: 'JMA Grid',
            store: 'JmaStore',
            width: '100%',
            viewConfig: {
                enableTextSelection: true
            },
            columns: [{
                text: 'Title',
                dataIndex: 'title',
                width: 190,
            }, {
                xtype: 'datecolumn',
                format:'Y-m-d H:i:s',
                text: 'Date',
                dataIndex: 'datetime',
                width: 140,
            }, {
                xtype: 'templatecolumn',
                text: 'Headline',
                dataIndex: 'headline',
                tpl: '<a href="{link}" target="_blank">{headline}</a>',
                flex: 1
            }],
            dockedItems: [{
                xtype: 'pagingtoolbar',
                store: 'JmaStore',
                dock: 'bottom',
                displayInfo: true
            }],            
        }, {
            xtype: 'grid',
            title: 'Sample Grid',
            store: 'SampleStore',
            width: '100%',
            columns: [{
                text: 'Name',
                dataIndex: 'name',
                flex: 1
            }, {
                text: 'Age',
                dataIndex: 'age'
            }, {
                text: 'Country',
                dataIndex: 'name'
            }]
        }]
    }]
});