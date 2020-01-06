Ext.define('CargoESB.view.logmsg.LogGrid',{
  extend: 'Ext.grid.Grid',
  xtype: 'loggrid',
  requires: [
      'Ext.grid.plugin.PagingToolbar',
      'Ext.grid.filters.*'
  ],
  store:{
    type:'logstore'
  },
  plugins: {
    pagingtoolbar: true,
    //gridfilters:true,
  },
  rowNumbers: {
    text: '行号'
  },


  columns: [
    { text: '日志时间',  dataIndex: 'logtime', width: 200,xtype:'datecolumn',format:'Y-m-d H:i:s',
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
    },
    {
      text: '消息类别',
      dataIndex: 'messagetype',
      width: 100
    },
    {
      text: '消息内容',
      dataIndex: 'content',
      flex: 1
    },
  ],
    listeners: {
    itemdoubletap: 'onDoubleClick'
  }
});