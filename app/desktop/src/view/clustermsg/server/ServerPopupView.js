//表单控件，用于新增和修改
Ext.define('CargoESB.view.clustermsg.server.ServerPopupView',{
  extend: 'Ext.Dialog',
  xtype: 'serverpopup',
  controller:'serverviewcontroller',
  record:null,
  closable:true,
  layout:'fit',
  items: [{
    xtype:'serverform',
    reference:'serverform'
  }],
  buttons: {
    ok: {text: '提交', handler: 'onServerSubmit',ui:'action'}
  },
  listeners: {
    show: function( sender){
      let form = sender.down('serverform');
      if(sender.getRecord()!=null){
        form.setValues(sender.getRecord().data);
      }
    }
  }
});