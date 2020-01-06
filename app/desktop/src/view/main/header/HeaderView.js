Ext.define('CargoESB.view.main.header.HeaderView', {
	extend: 'Ext.Container',
	xtype: 'headerview',
	layout:'hbox',
	requires: [
		'Ext.layout.HBox',
		'Ext.Img'
	],
	items: [
		{
			xtype: 'img',
			// cls: 'headerviewtext',
			style:"background-color:#666666",
			width:200,
			src:Ext.getResourcePath('desktop/logo2.jpg'),
		},
		{
			cls:"headerviewtext",
			html:'北京大兴机场货运ESB管理平台',
			flex:1,
		},
		{
			xtype: 'toolbar',
			border:false,
			style:"background-color:#666666",
			items:['->',{
				iconCls:'x-fa fa-user',
				text:'徐礼应',
				ui: 'plain',
			},{
				xtype: 'spacer',
				width:3
			},{
				iconCls:'x-fa fa-key',
			},{
				xtype: 'spacer',
				width:3
			},{
				text:'退出',
				iconCls:'x-fa fa-sign-out-alt',
			}]
		}
	]
});
