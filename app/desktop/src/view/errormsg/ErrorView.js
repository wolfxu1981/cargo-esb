Ext.define('CargoESB.view.errormsg.ErrorView',{
    extend: 'Ext.Panel',
    xtype: 'errorview',
    //controller: {type: 'errorcontroller'},
    layout:'fit',
    tbar:[
    {
        xtype:'textfield',
        label :'接口名称:',
        id: 'itfname',
        name: 'itfname',
        labelAlign:'left',
        labelWidth:'auto'
    },{
        xtype:'spacer',
        width:1,
    },
    {
        xtype:'textfield',
        label :'MQ队列:',
        id: 'mqname',
        name: 'mqname',
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
        xtype:'errorgrid',
        reference:'errorgrid'
    }]

});
