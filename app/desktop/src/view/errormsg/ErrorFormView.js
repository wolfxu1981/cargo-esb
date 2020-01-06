//表单控件，用于新增和修改
Ext.define('CargoESB.view.errormsg.ErrorFormView',{
    extend: 'Ext.form.Panel',
    border:true,
    xtype: 'errorform',
    //heigth: 300,
    defaults: {
        xtype: 'panel',
        labelAlign:'left'
    },
    items: [ {
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