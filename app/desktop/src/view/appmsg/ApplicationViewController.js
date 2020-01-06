Ext.define('CargoESB.view.appmsg.ApplicationViewController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.appsviewcontroller',

	onDelete: function (sender, record) {
	  let grid = this.lookup('appsgrid');
	  let selection = grid.getSelectable().getSelections();
	  let id=[];
	  if(selection.length>0) {
		  for (let i = 0; i < selection.length; i++) {
			  id += selection[i].id + ',';
		  }
		  Ext.Ajax.request({
			  url: domainprefix + 'systemservicedelete',
			  contentType: 'application/json;charset=utf-8',
			  method: 'DELETE',
			  params: {id: id},
			  success: function (response, options) {
				  //请求返回成功
				  if (response.status = 200) {
					  let obj = eval('(' + response.responseText + ')');
					  console.log(obj);
					  if (obj.error_code == 200 && obj.status == true) {
						  //删除成功
						  Ext.Msg.alert('Info', '删除成功');
						  grid.getStore().reload();
					  } else {
						  Ext.Msg.alert('Error', '删除失败,请检查服务是否被第三方使用！');
					  }
				  }
			  },
			  failure: function () {
				  Ext.Msg.alert('Error', '请求失败');
			  }
		  })
	  }else{
	  	Ext.Msg.alert('Info','请勾选数据')
	  }
	},

	onAdd: function (sender) {
     Ext.create({
			 xtype:'appspopup',
			 title:'新增系统'
		 }).show();
	},

	onOK: function (sender) {
		let dialog = sender.parent.parent;
		let form = dialog.down('appsform');
		let grid = Ext.ComponentQuery.query('appsgrid')[0];
		// console.log(form);
		// console.log(form.getValues());
		// console.log(grid);
		//grid.getStore().insert(0,form.getValues());
		let name = form.getValues().name;
		let code = form.getValues().code;
		let comments = form.getValues().comments;
		let url = '';
		let id = '';
		let method = '';
		if(form.validate()) {
			Ext.Ajax.request({
				url: domainprefix + 'systemservicequery',
				contentType: 'application/json;charset=utf-8',
				method: 'GET',
				params: {code: code,},
				success: function (response, options) {
					//请求返回成功
					if (response.status = 200) {
						let obj = eval('(' + response.responseText + ')');
						console.log(obj);
						if (obj.length > 0) {
							//数据库存在记录，执行修改
							url = domainprefix + 'systemserviceupdate';
							id = obj[0].id;
							method = 'PUT';
						} else {
							//数据库不存在记录，执行添加
							url = domainprefix + 'systemservicesave;'
							method = 'POST';
						}
						Ext.Ajax.request({
							url: url,
							contentType: 'application/json;charset=utf-8',
							method: method,
							params: {
								id: id,
								name: name,
								code: code,
								comments: comments
							},
							success: function (response, options) {
								//请求返回成功
								if (response.status = 200) {
									let obj = eval('(' + response.responseText + ')');
									console.log(obj);
									if (obj.error_code == 200 && obj.status == true) {
										//删除成功
										Ext.Msg.alert('Info','新增成功');
										dialog.close()
										grid.getStore().load()
									} else {
										Ext.Msg.alert('Error','新增失败，请联系管理员');
									}
								}
							},
							failure: function () {
								Ext.Msg.alert('Error','请求失败');
							}
						})
					}
				},
				failure: function () {
					Ext.Msg.alert('Error','请求失败');
				}
			})
		}else{
			Ext.Msg.alert('Info','请完善表单');
		}

		/*Ext.Ajax.request({
			url:'http://localhost:8095/systemservicesave',
			contentType:'application/json;charset=utf-8',
			method:'POST',
			params: { name: name,
					  code: code,
					  comments: comments},
			success: function(response,options) {
				//请求返回成功
				if(response.status = 200){
					let obj = eval('(' + response.responseText + ')');
					console.log(obj);
					if(obj.error_code==200 && obj.status == true){
						//删除成功
						console.log('添加成功');
						dialog.close()
					}else{
						console.log('添加失败,请联系系统管理员！');
					}
				}
			},
			failure:function() {
				console.log('请求失败');
			}
		})*/
	},

	onSearch: function (sender) {
		let keyword = this.lookup("keyword").getValue();
		let grid = Ext.ComponentQuery.query('appsgrid')[0];
		let store = grid.getStore();
		if(keyword !=null && keyword !=''){
			store.filter([
				{
					property : 'name',
					value    : keyword
				}
			]);
		}else{
			grid.getStore().load();
		}

	},

	onDoubleClick:function(grid,index,target,record){
		Ext.create({
			xtype:'appspopup',
			title:'修改系统',
			record:record
		}).show();
	}
});
