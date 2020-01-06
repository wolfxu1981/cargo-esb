Ext.define('CargoESB.view.main.MainViewModel', {
	extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.mainviewmodel',
	data: {
		name: '货运ESB',
		navCollapsed:       false,
		navview_max_width:    200,
		navview_min_width:     44,
		topview_height:        75,
		bottomview_height:     50,
		headerview_height:     50,
		footerview_height:     50,
		detailCollapsed:     true,
		detailview_width:      10,
		detailview_max_width: 300,
		detailview_min_width:   0,

	},
	formulas: {
		navview_width: function(get) {
			return get('navCollapsed') ? get('navview_min_width') : get('navview_max_width');
		},
		detailview_width: function(get) {
			return get('detailCollapsed') ? get('detailview_min_width') : get('detailview_max_width');
		}
	},
	stores: {
		menu: {
			"type": "tree",
			"root": {
				"expanded": true,
				"children": [
          { "text": "应用系统管理", "iconCls": "x-fa fa-home", "xtype": "appsview", "leaf": true },
					{ "text": "服务器监控", "iconCls": "x-fa fa-laptop","leaf": false,
						children: [{
							"text": "服务器管理", "iconCls": "x-fa fa-server", "xtype": "serverview","leaf": true},
							{"text": "集群管理", "iconCls": "x-fa fa-sitemap", "xtype": "clusterview","leaf": true},
							{"text": "集群状态监控", "iconCls": "x-fa fa-sitemap", "xtype": "clustermonitor","leaf": true,
							},
						]},
					{ "text": "服务管理", "iconCls": "x-fa fa-cloud","leaf": false,
					  children: [{
						"text": "目录管理", "iconCls": "x-fa fa-list", "xtype": "servicedirectoryview","leaf": true},
						{"text": "服务管理", "iconCls": "x-fa fa-cloud","xtype": "serviceoperationview", "leaf": true}
						]
          },
					{ "text": "日志监控", "iconCls": "x-fa fa-line-chart", "xtype": "logview","leaf": true },
					{ "text": "分析报表", "iconCls": "x-fa fa-bar-chart","leaf": false,
						children:[
							{"text": "年报查询", "iconCls": "x-fa fa-bar-chart", "xtype":"yearlylogview","leaf":true},
							{"text": "月报查询", "iconCls": "x-fa fa-bar-chart", "xtype":"monthlylogview","leaf":true},
							{"text": "日报查询", "iconCls": "x-fa fa-bar-chart", "xtype":"dailylogview","leaf":true},
							{"text": "时报查询", "iconCls": "x-fa fa-bar-chart", "xtype":"hourlylogview","leaf":true},
						]
					},
					{ "text": "异常查询", "iconCls": "x-fa fa-line-chart", "xtype":"errorview","leaf": true },
					//add new items on the next line (from sencha-node generate viewpackage)

				]
			}
		}
	}
});
