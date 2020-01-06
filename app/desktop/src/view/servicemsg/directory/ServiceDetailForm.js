Ext.define('CargoESB.view.servicemsg.directory.ServiceDetailForm', {
  extend: 'Ext.form.Panel',
  xtype: 'servicedetail',
  reference:'servicedetail',
  items: [{
    xtype: 'textfield',
    name: 'name',
    label: '服务名称'
  },{
    xtype:'textfield',
    name:'code',
    label:'服务Code'
  },{
    xtype: 'combobox',
    label: '服务类别',
    name:'servicetype',
    store:Ext.create('CargoESB.view.servicemsg.directory.ServicetypeStore'),
    displayField:'name',
    valueField:'id',
    autoLoadOnValue:true
  }, {
    xtype: 'combobox',
    label: '服务提供商',
    name:'provider',
    store:Ext.create('CargoESB.view.servicemsg.directory.AppSystemStore'),
    displayField:'name',
    valueField:'id',
    autoLoadOnValue:true
  }, {
    xtype: 'combobox',
    label: '服务消费者',
    name:'consumer',
    store:Ext.create('CargoESB.view.servicemsg.directory.AppSystemStore'),
    displayField:'name',
    valueField:'id',
    autoLoadOnValue:true
  },{
    xtype: 'textfield',
    name:'version',
    label: '服务版本'
  },{
    xtype:'textfield',
    name:'comments',
    label:'备注'
  }]
});