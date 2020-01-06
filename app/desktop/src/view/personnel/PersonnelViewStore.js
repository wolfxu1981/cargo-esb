Ext.define('CargoESB.view.personnel.PersonnelViewStore', {
	extend: 'Ext.data.Store',
	alias: 'store.personnelviewstore',
	fields: [
		'name', 'code', 'comments'
	],
	data: { items: [
		{ name: 'Jean Luc',   code: "jeanluc.picard@enterprise.com", comments: "555-111-1111" },
		{ name: 'ModernWorf', code: "worf.moghsson@enterprise.com",  comments: "555-222-2222" },
		{ name: 'Deanna',     code: "deanna.troi@enterprise.com",    comments: "555-333-3333" },
		{ name: 'Data',       code: "mr.data@enterprise.com",        comments: "555-444-4444" }
	]},
	proxy: {
		type: 'memory',
		reader: {
			type: 'json',
			rootProperty: 'items'
		}
	}
});
