//表单控件，用于新增和修改
Ext.define('CargoESB.view.appmsg.ApplicationFormView',{
  extend: 'Ext.form.Panel',
  border:true,
  xtype: 'appsform',
  defaults: {
    xtype: 'panel',
    labelAlign:'left'
  },
  items: [{
    xtype: 'textfield',
    required:true,
    name: 'name',
    label: '系统名称'
  }, {
    xtype: 'textfield',
    required:true,
    name: 'code',
    label: '系统编码'
  }, {
    xtype: 'textareafield',
    name: 'comments',
    label: '描述说明'
  }]
});