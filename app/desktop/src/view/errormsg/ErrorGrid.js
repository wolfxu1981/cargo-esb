Ext.define('CargoESB.view.errormsg.ErrorGrid',{
  extend: 'Ext.grid.Grid',
  xtype: 'errorgrid',
  requires: [
      'Ext.grid.plugin.PagingToolbar',
      'Ext.grid.filters.*'
  ],
  store:{
    type:'errorstore'
  },
  plugins: {
    pagingtoolbar: true,
    //gridfilters:true,
  },
  rowNumbers: {
    text: '行号'
  },


  columns: [
    /*{ text: '日志时间',  dataIndex: 'logtime', width: 200,xtype:'datecolumn',format:'Y-m-d H:i:s',
      filter: {
        type: 'date',
        menu: {
          items: {
            lt: {
              label: 'Custom Less than',
              placeholder: 'Custom Less than...',
              dateFormat: 'd-m-y'
            },
            gt: {
              label: 'Custom Greater than',
              placeholder: 'Custom Greater than...',
              dateFormat: 'd-m-y'
            },
            eq: {
              label: 'Custom On',
              placeholder: 'Custom On...',
              dateFormat: 'd-m-y'
            }
          }
        }
      }},
    {text: '发送方',
      dataIndex: 'sender',width: 100
    },
    {
      text: '接收方',
      dataIndex: 'receiver',
      width: 100
    },*/
    {
      text: '接口名称',
      dataIndex: 'interfacename',
      width: 100
    },{
      text: '接口描述',
      dataIndex: 'mocid',
      width: 100
    },{
      text: '队列名',
      dataIndex: 'mqname',
      width: 100
    },
    {
      text: '消息类别',
      dataIndex: 'messagetype',
      width: 100
    },
    {
      text: '处理流程',
      dataIndex: 'content',
      flex: 1
    },
  ],
    listeners: {
    itemdoubletap: 'onDoubleClick'
  }
});