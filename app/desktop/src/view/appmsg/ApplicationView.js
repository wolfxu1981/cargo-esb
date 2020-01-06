Ext.define('CargoESB.view.appmsg.ApplicationView',{
  extend: 'Ext.Panel',
  xtype: 'appsview',
  controller: {type: 'appsviewcontroller'},
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
  },'->',{
    xtype:'textfield',
    reference:'keyword',
    placeholder :'关键字',
  },{
    iconCls:'x-fa fa-search',
    handler:'onSearch'
  }],
  items:[{
    xtype:'appsgrid',
    reference:'appsgrid'
  }]
});