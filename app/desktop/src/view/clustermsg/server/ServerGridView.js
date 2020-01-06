//表单控件

Ext.define('CargoESB.view.appmsg.server.ServerGridView', {
    extend: 'Ext.grid.Grid',
    xtype: 'servergrid',
    rowNumbers: true,
    rowLines: true,
    selectable: {
        checkbox: true,
        mode: 'multi'
    },
    columns: [
        {
            text: '机器名',
            dataIndex: 'name',
            flex: 1,
            cell: {userCls: 'bold'}
        },
        {
            text: 'IP地址',
            dataIndex: 'ip', flex: 1
        },
        {
            text: 'MAC地址',
            dataIndex: 'mac',
            flex: 1
        },
        {
            text: 'CPU',
            dataIndex: 'cpu',
            flex: 1
        },
        {
            text: '内存',
            dataIndex: 'ram',
            flex: 1
        },
        {
            text: '存储大小',
            dataIndex: 'memory',
            flex: 1
        },
        {
            text: '端口号',
            dataIndex: 'port',
            flex: 1
        },
        {
            text: '所属集群',
            dataIndex: 'cluster',
            flex: 1
        },
        {
            text: '说明',
            dataIndex: 'description',
            flex: 1
        }
    ],
    store: {
        type: 'serverviewstore',
    },
    listeners: {
        itemdoubletap: 'onDoubleClick'
    }
});