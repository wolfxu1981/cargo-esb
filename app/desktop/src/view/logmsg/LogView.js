Ext.define('CargoESB.view.logmsg.LogView',{
    extend: 'Ext.Panel',
    xtype: 'logview',
    controller: {type: 'logcontroller'},
    layout:'fit',
    tbar:[{
        xtype:'datefield',
        dateFormat: 'Y-m-d',
        label: '开始:',
        labelAlign:'left',
        value: new Date(),
        labelWidth:'auto'
    },{
        xtype:'spacer',
        width:1,
    },{
        xtype:'datefield',
        dateFormat: 'Y-m-d',
        label: '结束:',
        labelAlign:'left',
        value: new Date(),
        labelWidth:'auto'
    },{
        xtype:'spacer',
        width:1,
    },{
        xtype:'textfield',
        label :'发送方:',
        id: 'sender',
        labelAlign:'left',
        labelWidth:'auto'
    },{
        xtype:'spacer',
        width:1,
    },{
        xtype:'textfield',
        label :'接收方:',
        id: 'receiver',
        name: 'receiver',
        labelAlign:'left',
        labelWidth:'auto'
    },{
        xtype:'spacer',
        width:1,
    },{
        xtype:'textfield',
        label :'消息类别:',
        id: 'messagetype',
        name: 'messagetype',
        labelAlign:'left',
        labelWidth:'auto'
    },{
        xtype:'spacer',
        width:1,
    },{//'->',
        xtype: 'textfield',
        label :'关键字:',
        //placeholder:'请输入查询关键字',
        //reference:'keyword',
        id: 'keyword',
        name: 'keyword',
        labelAlign:'left',
        labelWidth:'auto'
    },{
        iconCls:'x-fa fa-search',
        handler:'onSearch'
    }],
    // listeners: {
    //   select: 'onUnselect'
    // },
    listeners: {
        beforestorechange: 'beforeLoad'
    },
    items:[{
        xtype:'loggrid',
        reference:'loggrid'
    }]

});
