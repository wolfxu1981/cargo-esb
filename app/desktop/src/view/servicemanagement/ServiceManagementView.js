Ext.define('CargoESB.view.servicemanagement.ServiceManagementView',{
    extend: 'Ext.Panel',

    xtype: 'servicemanagementview',
    layout:'fit',
    tbar: {
        reference: 'tbar',
        items: [{
            text: '部署新服务',
            ui:'action',
            handler: 'onAddData',
            iconCls: 'x-fa fa-plus'
        }]
    },
    controller: {type: 'servicemanagementcontroller'},
    items:[{
        xtype:'grid',
        reference: 'grid',
        columnLines: true,
        // viewModel: {type: 'personnelviewmodel'},
        store: {type: 'servicemanagementviewStore'},
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
                dataIndex: 'user',
                width: '20%',
                //xtype: 'actioncolumn',
               /* tdCls: 'action',
                items: [{
                    tooltip: '启动',
                    iconCls: 'x-fa fa-check green',
                    handler: 'onStart'
                }, {
                    tooltip: '停止',
                    iconCls: 'x-fa fa-stop red',
                    handler: 'onStop'
                }]*/
                hideable: false,

                cell: {
                    tools: {
                        approve: {
                            tooltip: '上线',
                            iconCls: 'x-fa fa-check green',
                            handler: 'onStart'
                        },sell: {
                            tooltip: '下线',
                            iconCls: 'x-fa fa-stop red',
                            handler: 'onStop',
                            width: '30px'
                        },
                        refresh: {
                            tooltip: '重新上线',
                            iconCls: 'x-fa fa-refresh red',
                            handler: 'onRefresh',
                            width: '20px'
                        },
                        remove: {
                            tooltip: '注销',
                            iconCls: 'x-fa fa-minus red',
                            handler: 'onRemove',
                            width: '30px'
                        }
                    }
                }
            }
        ]
    }]

});
