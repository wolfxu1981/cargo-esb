Ext.define('CargoESB.view.servicemsg.opt.ServiceOperationStore', {
    extend: 'Ext.data.Store',
    alias: 'store.serviceoperationstore',
    groupField: 'servicetypename',
    autoLoad: true,
    fields: [
        'servicetypename','servicetype', 'name','code', 'provider','providername','consumer','consumername','version','status','lastupdatetime'
    ],
    /*proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }*/
    proxy: {
        type: 'ajax',
        url: domainprefix+'servicequery',
    }
});
/*var store = Ext.create('Ext.data.Store', {
    //model: 'CargoESB.view.servicemsg.opt.ServiceOperationStore',
    alias: 'store.serviceoperationstore',
    proxy: {
        type: 'jsonp',
        url: 'http://localhost:8095/query',
        callbackKey: 'jsonPCallback'
    }
});

store.load();*/
