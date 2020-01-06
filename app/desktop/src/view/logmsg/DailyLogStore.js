Ext.define('CargoESB.view.logmsg.DailyLogStore', {
    extend: 'Ext.data.Store',
    alias: 'store.dailylogstore',
    autoLoad: true,
    fields: [
        'logtime', 'basicdata','flightdata','messagedata'
    ],
    proxy: {
        type: 'ajax',
        url:domainprefix+"/count?type=DAY",
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});