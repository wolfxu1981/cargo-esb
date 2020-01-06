Ext.define('CargoESB.view.servicemsg.directory.ServiceDirectoryDialog',{
    extend:'Ext.Dialog',
    alias:'servicedialog',
    controller:'servicedirectorycontroller',
    reference:'servicedialog',
    layout:'fit',
    width:600,
    height:500,
    closable:true,
    title:'注册服务',
    items:{
        xtype:'servicedetail'
    },
    buttons:[{
        xtype:'button',
        iconCls:'x-fa fa-arrow-circle-up',
        ui:'action',
        text:'提交',
        handler: 'onSubmit'
    }]
})