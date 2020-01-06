//表单控件

Ext.define('CargoESB.view.appmsg.ApplicationGridView',{
  extend: 'Ext.grid.Grid',
  xtype: 'appsgrid',
  rowNumbers: true,
  rowLines:true,
  selectable: {
    checkbox: true,
    mode: 'multi'
  },
  columns: [
    {text: 'id',dataIndex: 'id',flex: 1},
    {
      text: '系统名称',
      dataIndex: 'name',
      flex: 1,
      cell: {userCls: 'bold'}
    },
    {text: '系统编码',dataIndex: 'code',flex: 1},
    {
      text: '说明',
      dataIndex: 'comments',
      flex: 1
    }
  ],
  store:{
    type: 'appsviewstore'
  },
  listeners: {
    itemdoubletap: 'onDoubleClick'
  }
});