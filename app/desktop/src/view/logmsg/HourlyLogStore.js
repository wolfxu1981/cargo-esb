Ext.define('CargoESB.view.logmsg.HourlyLogStore', {
    extend: 'Ext.data.Store',
    alias: 'store.hourlylogstore',
    autoLoad: true,
    fields: [
        'logtime', 'basicdata','flightdata','messagedata'
    ],
    proxy: {
        type: 'ajax',
        url:domainprefix+"/count?type=HOUR",
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});