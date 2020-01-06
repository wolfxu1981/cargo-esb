Ext.define('CargoESB.view.main.MainView', {
	extend: 'Ext.Container',
	xtype: 'mainview',
	controller: 'mainviewcontroller',
	viewModel: {
		type: 'mainviewmodel'
	},
	// plugins: 'viewport',
  requires: [
    'Ext.layout.Fit'
  ],

	layout: 'vbox',
	items: [
		{ xtype: 'headerview', reference: 'headerview',height:80 },
		{xtype:'container',padding:'1px 0px 0px 0px',layout:'fit',flex:1,items:[{ xtype: 'navview',   padding:'1px 0px 0px 0px', reference: 'navview',    docked: 'left',   bind: {width:  '{navview_width}'}, listeners: { select: "onMenuViewSelectionChange"} },

				//{ xtype: 'footerview', reference: 'footerview', docked: 'bottom', bind: {height: '{footerview_height}'} },
				{ xtype: 'centerview', reference: 'centerview' },
				{ xtype: 'detailview', reference: 'detailview', docked: 'right',  bind: {width:  '{detailview_width}'}  }]}

	]
});
