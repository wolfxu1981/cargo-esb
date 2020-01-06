Ext.define('CargoESB.view.clustermsg.cluster.ClusterFormView',{
    extend: 'Ext.form.Panel',
    border:true,
    xtype: 'clusterform',
    id:'clusterform',
    reference:'clusterform',
    defaults: {
        xtype: 'panel',
        labelAlign:'left'
    },
    items: [{
        xtype:'textfield',
        name:'id',
        label:'ID',
        hidden:true,
        value:null,
    },{
        xtype: 'textfield',
        placeholder: '请输入集群名',
        name: 'name',
        required: true,
        label: '集群名',
        value:null,
    }, {
        xtype: 'textfield',
        placeholder: '请输入描述',
        name: 'description',
        value:null,
        label: '描述 '
    }]
});