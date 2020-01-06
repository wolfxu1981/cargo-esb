Ext.define('CargoESB.view.servicemsg.directory.ServiceDirectoryTreeStore', {
    extend:'Ext.data.TreeStore',
    rootVisible: false,
    proxy:{
        type:'ajax',
        url:domainprefix+'service/menu',
        reader:{
            type:'json',
            rootProperty:'children'
        }
    },
})