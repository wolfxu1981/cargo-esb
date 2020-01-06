Ext.define('CargoESB.view.clustermsg.cluster.ClusterView',{
    extend: 'Ext.Panel',
    xtype: 'clusterview',
    controller: {type: 'clusterviewcontroller'},
    layout:'fit',
    border:true,
    tbar:[{
        text:'添加',
        iconCls:'x-fa fa-plus-circle',
        ui:'action',
        handler:'onAdd'
    },{
        xtype:'spacer',
        width:5,
    },{
        text:'删除',
        iconCls:'x-fa fa-minus-circle',
        ui:'action',
        handler:'onDelete'
    }],
    items:[{
        xtype:'clustergrid',
        reference:'clustergrid'
    }]
});