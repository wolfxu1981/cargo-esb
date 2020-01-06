Ext.define('CargoESB.view.appmsg.clustermsg.cluster.ClusterGridView',{
    extend: 'Ext.grid.Grid',
    xtype: 'clustergrid',
    id:'clustergrid',
    rowNumbers: true,
    rowLines:true,
    selectable: {
        checkbox: true,
        mode: 'multi'
    },
    columns: [
        {
            text: '集群名',
            dataIndex: 'name',
            flex: 1,
            cell: {userCls: 'bold'}
        },
        {text: '描述',
            dataIndex: 'description',flex: 1
        }
    ],
    store:{
        type: 'clusterviewstore'
    },
    listeners: {
        itemdoubletap: 'onDoubleClick'
    }
});