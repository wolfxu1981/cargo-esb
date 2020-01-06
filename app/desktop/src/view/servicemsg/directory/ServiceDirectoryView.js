Ext.define('CargoESB.view.servicemsg.directory.ServiceDirectoryView', {
  extend: 'Ext.Panel',
  xtype: 'servicedirectoryview',
  controller:{type:'servicedirectorycontroller'},
  layout:'hbox',
    tbar:[{
        text:'注册服务',
        iconCls:'x-fa fa-arrow-circle-up',
        ui:'action',
        handler:'onAdd'
    },{
        xtype:'spacer',
        width:5,
    },{
        text:'删除服务',
        iconCls:'x-fa fa-arrow-circle-down',
        ui:'action',
        handler:'onDelete'
    }],
  items:[{
     xtype:'panel',
     width:350,
    layout:'fit',
    items:[{
       xtype:'servicedirectorytree'
    }],
    border:true,
  },{
    xtype:'servicedetail',

    flex:1,
  }]
});