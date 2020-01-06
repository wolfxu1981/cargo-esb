//表单控件，用于新增和修改
Ext.define('CargoESB.view.appmsg.ApplicationPopupView',{
  extend: 'Ext.Dialog',
  xtype: 'appspopup',
  controller: {type: 'appsviewcontroller'},
  record:null,
  closable:true,
  layut:'fit',
  items: [{
    xtype:'appsform',
    reference:'appsform'
  }],
  buttons: {
    ok: {text: '提交', handler: 'onOK',ui:'action'}
  },
  listeners: {
    show: function( sender){
      let form = sender.down('appsform');
      if(sender.getRecord()!=null){
        form.setValues(sender.getRecord().data);
      }
    }
  }
});