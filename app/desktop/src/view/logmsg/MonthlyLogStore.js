Ext.define('CargoESB.view.logmsg.MonthlyLogStore', {
    extend: 'Ext.data.Store',
    alias: 'store.monthlylogstore',
    autoLoad: true,
    fields: [
        'logtime', 'basicdata','flightdata','messagedata'
    ],
    proxy: {
        type: 'ajax',
        url:domainprefix+"/count?type=MONTH",
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});