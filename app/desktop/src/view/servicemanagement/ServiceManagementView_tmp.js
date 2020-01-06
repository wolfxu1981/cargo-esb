Ext.define('CargoESB.view.servicemanagement.ServiceManagementView',{
	extend: 'Ext.grid.Grid',

	xtype: 'servicemanagementview',
	cls: 'servicemanagementview',
	title:'服务器管理',
	requires: [],
	columnLines: true,
	// controller: {type: 'personnelviewcontroller'},
	// viewModel: {type: 'personnelviewmodel'},
	store: {type: 'servicemanagementviewStore'},

	tbar: {
		reference: 'tbar',
		items: [{
			text: 'Expand All',
			handler: 'onExpandAllClick'
		}, {
			text: 'Collapse All',
			handler: 'onCollapseAllClick'
		}]
	},
	columns: [
		{
			text: '服务名称',
			dataIndex: 'name',
			width: '20%',
			cell: {userCls: 'bold'}
		},
		{text: '服务提供者',dataIndex: 'serviceSupplier',width: '20%'},
		{
			text: '版本号',
			dataIndex: 'version',
			width: '20%'
		},
		{
			text: '状态',
			dataIndex: 'status',
			width: '20%'
		},
		{
			text: '操作',
			dataIndex: 'operation',
			width: '20%',
			hideable: false,

			cell: {
				tools: {
					approve: {
						iconCls: 'x-fa fa-check green',
						handler: 'onApprove'
					},sell: {
						iconCls: 'x-fa fa-stop red',
						handler: 'onDecline'
					},
					refresh: {
						iconCls: 'x-fa fa-refresh red',
						handler: 'onRefresh'
					},
					remove: {
						iconCls: 'x-fa fa-remove red',
						handler: 'onRemove'
					}
				}
			}
		}
	],
	listeners: {
		select: 'onSelectionChange'
	}
});
