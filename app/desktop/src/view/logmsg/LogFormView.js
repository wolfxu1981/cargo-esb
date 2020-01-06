//表单控件，用于新增和修改
Ext.define('CargoESB.view.logmsg.LogFormView',{
    extend: 'Ext.form.Panel',
    border:true,
    xtype: 'logform',
    //heigth: 300,
    defaults: {
        xtype: 'panel',
        labelAlign:'left'
    },
    items: [{
        xtype: 'textfield',
        name: 'logtime',
        label: '发送时间',format:'Y-m-d H:i:s',

    }, {
        xtype: 'textfield',
        name: 'sender',
        label: '发送者'
    }, {
        xtype: 'textfield',
        name: 'receiver',
        label: '接收者'
    }, {
        xtype: 'textfield',
        name: 'messagetype',
        label: '消息类别'
    }, {
        xtype: 'textareafield',
        name: 'content',
        label: '消息内容',
        height: '50%',
    }]
});