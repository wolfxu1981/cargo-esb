Ext.define('CargoESB.Application', {
	extend: 'Ext.app.Application',
	name: 'CargoESB',
	requires: ['CargoESB.*'],
	defaultToken: 'authlogin',
	removeSplash: function () {
		Ext.getBody().removeCls('launching')
		var elem = document.getElementById("splash")
		elem.parentNode.removeChild(elem)
	},

	launch: function () {
		this.removeSplash()
		var whichView = 'mainview';
		//设置baseURL调用后台服务
		localStorage.setItem("baseurl","http://192.168.31.116:8080/");

		if(sessionStorage.getItem("user")){
			Ext.Viewport.add([{xtype: whichView}])
		}else{
			Ext.Viewport.add([{xtype: 'authlogin'}])
		}

	},

	destroy: function() {
		this.setQuickTips(false);
		sessionStorage.removeItem("user");
		this.callParent();
	},

	onAppUpdate: function () {
		Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
			function (choice) {
				if (choice === 'yes') {
					window.location.reload();
				}
			}
		);
	}
});
