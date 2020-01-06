Ext.define('CargoESB.view.clustermsg.server.ServerView',{
  extend: 'Ext.Panel',
  xtype: 'serverview',
  controller: {type: 'serverviewcontroller'},
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
  },{
    xtype:'spacer',
    width:5,
  },{
    text:'添加到集群',
    iconCls:'x-fa fa-plus-square',
    ui:'action',
    handler:'onAddToCluster'
  }],
  items:[{
    xtype:'servergrid',
    reference:'servergrid'
  }]
});