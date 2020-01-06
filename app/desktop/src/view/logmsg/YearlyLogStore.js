Ext.define('CargoESB.view.logmsg.YearlyLogStore', {
    extend: 'Ext.data.Store',
    alias: 'store.yearlylogstore',
    autoLoad: true,
    fields: [
        'logtime', 'basicdata','flightdata','messagedata'
    ],
    proxy: {
        type: 'ajax',
        url:domainprefix+"/count?type=YEAR",
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});