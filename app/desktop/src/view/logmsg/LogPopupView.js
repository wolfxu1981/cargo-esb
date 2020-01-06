//表单控件，用于新增和修改
Ext.define('CargoESB.view.logmsg.LogPopupView',{
    extend: 'Ext.Dialog',
    xtype: 'logpopup',
    record:null,
    closable:true,
    layout:'fit',
    width: '50%',
    height: '50%',
    items: [{
        xtype:'logform',
        reference:'logform'
    }],
    listeners: {
        show: function( sender){
            let form = sender.down('logform');
            if(sender.getRecord!=null){
                form.setValues(sender.getRecord().data);
            }
        }
    }
});