//表单控件，用于新增和修改
Ext.define('CargoESB.view.errormsg.ErrorPopupView',{
    extend: 'Ext.Dialog',
    xtype: 'errorpopup',
    record:null,
    closable:true,
    layout:'fit',
    width: '50%',
    height: '50%',
    items: [{
        xtype:'errorform',
        reference:'errorform'
    }],
    listeners: {
        show: function( sender){
            let form = sender.down('errorform');
            if(sender.getRecord!=null){
                form.setValues(sender.getRecord().data);
            }
        }
    }
});