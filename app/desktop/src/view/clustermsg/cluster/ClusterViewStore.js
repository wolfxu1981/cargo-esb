Ext.define('CargoESB.view.clustermsg.cluster.ClusterViewStore', {
    extend: 'Ext.data.Store',
    alias: 'store.clusterviewstore',
    autoLoad: true,
    fields: [
        'id','name','description'
    ],
    proxy: {
        url:domainprefix+'/cluster/all',
        type: 'ajax',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});