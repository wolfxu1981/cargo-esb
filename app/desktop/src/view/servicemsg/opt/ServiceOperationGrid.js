
Ext.define('CargoESB.view.servicemsg.opt.ServiceOperationGrid', {
  extend: 'Ext.grid.Grid',
  xtype: 'serviceoperationgrid',
  rowNumbers: true,
  rowLines:true,
  controller: {type: 'serviceoperationcontroller'},
  selectable: {
    checkbox: true,
    mode: 'single'
  },
  columns: [
    {
      text: '服务类型',
      dataIndex: 'servicetypename',
      flex: 1
    },
    {text: '服务名称',
      dataIndex: 'name',
      flex: 1
    },{text: '服务名称代码',
      dataIndex: 'code',
      flex: 1
    },
    {
      text: '服务提供者',
      dataIndex: 'providername',
      flex: 1
    },
    {
      text: '服务消费者',
      dataIndex: 'consumername',
      flex: 1
    },
    {
      text: '服务版本号',
      dataIndex: 'version',
      flex: 1
    },
    {
      text: '状态',
      dataIndex: 'status',
      flex: 1
    },
    // {
    //   text: '最后更新时间',
    //   dataIndex: 'lastupdatetime',
    //   flex: 1
    // }
  ],

  store: {
    type:'serviceoperationstore'
  },
  listeners:{
    select:'onSelect',
    deselect:'onUnselect'
  }
});