Ext.define('ExtJmaSample.store.JmaStore', {
    extend: 'Ext.data.Store',
    model: 'ExtJmaSample.model.JmaModel',
    proxy: {
        type: 'ajax',
        url: 'http://api.aitc.jp:80/jmardb/search',
        extraParams: {
            datetime: ['2014-02-14 00:00:00', '2014-02-16 00:00:00'],
            title: '気象特別警報・警報・注意報'
        },
        startParam: 'offset',
        reader: {
            type: 'json',
            root: 'data',
            totalProperty: 'paging.totalCount'
        }
    },
    autoLoad: true,

    searchJma: function(opt) {
        var me = this,
            proxy = me.getProxy(),
            startDate = me.formatDate(opt.start) + ' 00:00:00',
            endDate   = me.formatDate(opt.end) + ' 23:59:59';

        proxy.extraParams = {
            datetime: [startDate, endDate]
        }
        if (opt.title) {
            proxy.extraParams.title = opt.title;
        }
        me.load();
    },

    formatDate: function(date) {
        return Ext.util.Format.date(date, 'Y-m-d');
    }
});

