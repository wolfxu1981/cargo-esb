Ext.define('CargoESB.view.servicemanagement.ServiceManagementViewStore', {
	extend: 'Ext.data.Store',
	alias: 'store.servicemanagementviewStore',
	//model: 'User',

	fields: [
		'name', 'email', 'phone'
	],
	data: { items: [
		{ name: 'datapushservice_cosys',    serviceSupplier: "zhenghao.zhou", version: "1.0", status:"正常"},
		{ name: 'flightserviceinput',   serviceSupplier: "zhenghao.zhou", version: "1.0", status:"正常"},
		{ name: 'flightserviceinputmock',   serviceSupplier: "zhenghao.zhou", version: "1.0", status:"正常"},
		{ name: 'flightservicekafka',   serviceSupplier: "zhenghao.zhou", version: "1.0", status:"正常"},
		{ name: 'mockDataPush_CODB',   serviceSupplier: "zhenghao.zhou", version: "1.0", status:"正常"}
	]},

proxy: {
		type: 'memory',
		reader: {
			type: 'json',
			rootProperty: 'items'
		}
	}
});
