Ext.define('CargoESB.view.servicemsg.directory.AppSystemStore', {
    extend:'Ext.data.Store',
    alias:'store.appsystemstore',
    autoLoad:true,
    fields:['id','code','name','comments','lastupdatetime'],
    proxy:{
        type:'ajax',
        url:domainprefix+'systemservicequery',
        reader:{
            type:'json',
            // rootProperty:'children'
        }
    },
})