Ext.define('CargoESB.view.servicemsg.opt.ServiceOperationView', {
  extend: 'Ext.Panel',
  xtype: 'serviceoperationview',
  controller: {type: 'serviceoperationcontroller'},
  layout:'fit',
  tbar:[{
    text:'部署',
    iconCls:'x-fa fa-arrow-circle-up',
    ui:'action',
    handler:'onDeploy'
  },{
    xtype:'spacer',
    width:5,
  },{
    text:'启动',
    iconCls:'x-fa fa-angle-double-up',
    ui:'action',
    handler:'onStart'
  },{
    xtype:'spacer',
    width:5,
  },{
    text:'停止',
    iconCls:'x-fa fa-angle-double-down',
    ui:'action',
    handler:'onStop'
  },{
    xtype:'spacer',
    width:5,
  },{
    text:'卸载',
    iconCls:'x-fa fa-arrow-circle-down',
    ui:'action',
    handler:'onUndeploy'
  },'->',{
    xtype:'textfield',
    reference:'keyword',
    placeholder :'关键字',
  },{
    iconCls:'x-fa fa-search',
    handler:'onSearch'
  }],
  items:[{
    xtype:'serviceoperationgrid',
    reference:'serviceoperationgrid'
  }]
});