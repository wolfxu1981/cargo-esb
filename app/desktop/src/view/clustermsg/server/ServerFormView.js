//表单控件，用于新增和修改
Ext.define('CargoESB.view.clustermsg.server.ServerFormView',{
  extend: 'Ext.form.Panel',
  border:true,
  xtype: 'serverform',
  reference:'serverform',
  defaults: {
    xtype:'panel',
    labelAlign:'left'
  },
  items: [{
    xtype:'textfield',
    name:'id',
    hidden:true,
    value:null,
    label:'ID'
  },{
    xtype: 'textfield',
    name: 'name',
    value:null,
    required:true,
    requiredMessage:'请输入机器名',
    label: '机器名'
  }, {
    xtype: 'textfield',
    value:null,
    required:true,
    name: 'ip',
    label: 'IP地址'
  }, {
    xtype: 'textfield',
    value:null,
    required:true,
    name: 'mac',
    label: 'MAC地址'
  }, {
    xtype: 'textfield',
    value:null,
    required:true,
    name: 'cpu',
    label: 'CPU'
  }, {
    xtype: 'textfield',
    value:null,
    required:true,
    name: 'ram',
    label: '内存'
  }, {
    xtype: 'textfield',
    value:null,
    required:true,
    name: 'memory',
    label: '存储大小'
  }, {
    xtype: 'textfield',
    value:null,
    required:true,
    name: 'port',
    label: '端口号'
  }, {
    xtype:'textareafield',
    name: 'description',
    value:null,
    label: '说明'
  }]
});