Ext.define('CargoESB.view.clustermsg.server.ServerViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.serverviewcontroller',

    onDelete: function (sender, record) {
        let grid = this.lookup('servergrid');
        let selection = grid.getSelectable().getSelections();
        let data = [];
        if (selection.length > 0) {
            for (let i = 0; i < selection.length; i++) {
                data += selection[i].id + ',';
            }
            Ext.Ajax.request({
                url: domainprefix + "/server/delete",
                params: {
                    data: data
                },
                success: function (response, opts) {
                    let result = Ext.decode(response.responseText);
                    if (result.success) {
                        Ext.Msg.alert('Info', '删除成功');
                    } else {
                        Ext.Msg.alert('Error', '后台错误，请联系管理员');
                    }
                    grid.getStore().reload();
                },
                failure: function (response, opts) {
                    Ext.Msg.alert('Error', '请求失败');
                }
            })
        } else {
            Ext.Msg.alert('Info', '请勾选需要删除的数据');
        }
        grid.getStore().remove(selection);
    },

    onAdd: function (sender, record) {
        let view = this.getView();
        let grid = view.down('servergrid');
        Ext.create({
            xtype: 'serverpopup',
            title: '新增服务器',
            record: record,
            grid: grid
        }).show();
    },

    onAddToCluster: function (sender, record) {
        let grid = this.lookup('servergrid');
        let selection = grid.getSelectable().getSelections();
        let data = [];
        if (selection.length > 0) {
            for (let i = 0; i < selection.length; i++) {
                data += selection[i].id + ',';
            }
            let dialog = Ext.create({
                xtype: 'dialog',
                title: '添加到集群',
                items: [{
                    xtype: 'combobox',
                    label: '请选择集群',
                    store: Ext.create('CargoESB.view.clustermsg.cluster.ClusterViewStore'),
                    required: true,
                    displayField: 'name',
                    valueField: 'id',
                    autoLoadOnValue: true
                }],
                closable: true,
                buttons: {
                    ok: {
                        text: '提交', handler: function (btn) {
                            let value = dialog.items.items[0].getValue();
                            if (dialog.items.items[0].validate()) {
                                Ext.Ajax.request({
                                    url: domainprefix + "/server/bind",
                                    params: {
                                        cluster: value,
                                        server: data
                                    },
                                    success: function (response, opts) {
                                        let result = Ext.decode(response.responseText);
                                        if (result.success) {
                                            Ext.Msg.alert("Info", "绑定成功");
                                        } else {
                                            Ext.Msg.alert("Error", "后台错误，请联系管理员");
                                        }
                                        dialog.close();
                                        grid.getStore().reload();
                                    },
                                    failure: function (response, opts) {
                                        Ext.Msg.alert("Error", "请求失败");
                                    }
                                })
                            }
                        }, ui: 'action'
                    }
                },
            }).show();
        } else {
            Ext.Msg.alert('Info', '请勾选需要绑定的服务器');
        }

    },

    onDoubleClick: function (grid, index, target, record) {
        Ext.create({
            xtype: 'serverpopup',
            title: '修改服务器',
            record: record,
            grid: grid
        }).show();
    },

    onServerSubmit: function (btn) {
        let serverform = this.lookup('serverform');
        let window = serverform.getParent();
        let view = this.getView();
        let grid = view.grid;
        if (serverform.validate()) {
            serverform.submit({
                url: domainprefix + "/server/save",
                success: function (form, result) {
                    if (result.success) {
                        if (result.msg) {
                            Ext.Msg.alert("Info", result.msg);
                        } else {
                            Ext.Msg.alert("Info", "提交成功");
                            grid.store.reload();
                            window.close();
                        }
                    } else {
                        Ext.Msg.alert("Error", "后台错误，请联系管理员");
                    }
                },
                failure: function (form, result) {
                    Ext.Msg.alert("Error", "请求失败");
                }
            })
        } else {
            Ext.Msg.alert("Info", "请完善表单");
        }
    }
});
