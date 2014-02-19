Ext.define('ExtJmaSample.controller.Search', {
    extend: 'Ext.app.Controller',

    refs: [{
        ref: 'titleForm',
        selector: 'app-searchform #title'
    }, {
        ref: 'startForm',
        selector: 'app-searchform #startdate'
    }, {
        ref: 'endForm',
        selector: 'app-searchform #enddate'
    }],

    init: function() {
        var me = this;
        me.control({
            'app-searchform #submitbtn': {
                click: me.doSearch
            }
        });
    },

    onLaunch: function() {
        var me = this;
        new Ext.util.KeyNav({
            target: me.getTitleForm().getEl(),
            enter: me.doSearch,
            scope: me
        });

    },

    doSearch: function() {
        var me = this,
            store = Ext.getStore('JmaStore');

        store.searchJma({
            title: me.getTitleForm().getValue(),
            start: me.getStartForm().getValue(),
            end: me.getEndForm().getValue()
        });
    }
});
