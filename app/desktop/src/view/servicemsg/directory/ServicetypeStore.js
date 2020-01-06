Ext.define('CargoESB.view.servicemsg.directory.ServicetypeStore', {
    extend:'Ext.data.Store',
    alias:'store.servicetypestore',
    autoLoad:true,
    fields:['id','name'],
    proxy:{
        type:'ajax',
        url:domainprefix+'servicetype/all',
        reader:{
            type:'json'
        }
    },
})