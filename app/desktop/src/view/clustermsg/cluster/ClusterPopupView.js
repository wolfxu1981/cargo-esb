Ext.define('CargoESB.view.clustermsg.cluster.ClusterPopupView', {
    extend: 'Ext.Dialog',
    xtype: 'clusterpopup',
    controller: 'clusterviewcontroller',
    id:'clusterpopup',
    record: null,
    closable: true,
    layut: 'fit',
    items: [{
        xtype: 'clusterform',
        reference: 'clusterform'
    }],
    buttons: {
        ok: {
            text: '提交', handler: 'onOk', ui: 'action'
        }
    },
    listeners: {
        show: function (sender) {
            let form = sender.down('clusterform');
            if (sender.getRecord() != null) {
                form.setValues(sender.getRecord().data);
            }
        }
    }
});