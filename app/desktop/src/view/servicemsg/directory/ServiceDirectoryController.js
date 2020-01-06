Ext.define('CargoESB.view.servicemsg.directory.ServiceDirectoryController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.servicedirectorycontroller',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },

    onAdd: function () {
        let view=this.getView();
        let grid=view.down('panel').down('servicedirectorytree');
        Ext.create('CargoESB.view.servicemsg.directory.ServiceDirectoryDialog',{
            grid:grid
        }).show();
    },

    onDelete: function () {
        let grid = this.lookup('servicedirectorytree');
        let selection = grid.selection;
        console.log(selection);
    },

    onSubmit: function (btn) {
        let window=btn.up('toolbar').up('dialog');
        let form = window.down('servicedetail');
        let view=this.getView();
        let grid=view.grid;
        form.submit({
            url: domainprefix+'service/save',
            success: function (form, result, data) {
                Ext.Msg.alert(result.msg);
                grid.store.reload();
                window.close();
            },
            failure: function (form, result) {
                if(result.msg){
                    Ext.Msg.alert(result.msg);
                }else {
                    Ext.Msg.alert("后台错误，请联系管理员");
                }
            }
        });
    },

    onChildSingleTap: function (list, location, eOpts) {
        let data = list.getItemAt(location.recordIndex).getRecord().getData();
        let form = this.lookup('servicedetail');
        if (data.leaf == true) {
            form.load({
                url: dominprefix+'service/' + data.id,
                success: function (form, result, data) {
                    form.setValues(result.result);
                }
            });
        }
    }
});
