Ext.define('CargoESB.view.logmsg.YearlyLogView',{
    extend: 'Ext.Panel',
    xtype: 'yearlylogview',
    scrollable: true,
    controller:'logcontroller',
    layout:'vbox',
    requires: ['Ext.chart.axis.Numeric',
        'Ext.chart.axis.Category',
        'Ext.chart.grid.HorizontalGrid',
        'Ext.chart.grid.VerticalGrid',
        'Ext.chart.series.Bar',
        'Ext.data.summary.Average',
        'Ext.data.summary.Sum',
        'Ext.grid.plugin.SummaryRow',
        'Ext.chart.plugin.ItemEvents'
    ],
    tbar:[{
        xtype:'datefield',
        label: '开始:',
        reference:'yearly_startdate',
        editable:false,
        dateFormat:'Y年',
        labelAlign:'left',
        labelWidth:'auto'
    },{
        xtype:'spacer',
        width:5,
    },{
        xtype:'datefield',
        label: '结束:',
        reference:'yearly_enddate',
        editable:false,
        dateFormat:'Y年',
        labelAlign:'left',
        labelWidth:'auto'
    },{
        xtype:'spacer',
        width:5,
    },{
        xtype:'button',
        text:'查询',
        ui:'action',
        handler:'onYearlyLogSearch'
    }],
    items:[{
        flex:1,
        layout:'fit',
        xtype: 'cartesian',
        reference:'yearly_cart',
        legend: {
            type: 'sprite',
            docked: 'right'
        },
        store: Ext.create('CargoESB.view.logmsg.YearlyLogStore'),
        axes: [{
            type: 'numeric',
            position: 'left',
            grid:true,
            title: {
                text: '条数',
                fontSize: 15
            },
            fields: ['name','flightdata','basicdata']
        }, {
            type: 'category',
            position: 'bottom',
            title: {
                fontSize: 15
            },
            fields: 'logtime'
        }],
        series: {
            type: 'bar',
            stacked:false,
            colors:['#6495ED','#48D1CC','#d2d2a0'],
            title:['航班数据','基础数据','报文数据'],
            xField: 'logtime',
            yField: ['flightdata','basicdata','messagedata']
        }
    },{
        xtype:'grid',
        reference:'yearly_grid',
        flex:1,
        store: Ext.create('CargoESB.view.logmsg.YearlyLogStore'),
        columns: [
            {
                text: '日志时间',
                dataIndex: 'logtime',
                flex: 1,
                cell: {userCls: 'bold'}
            },
            {text: '航班数据',
                dataIndex: 'flightdata',flex: 1
            },
            {
                text: '基础数据',
                dataIndex: 'basicdata',
                flex: 1
            },
            {
                text: '报文数据',
                dataIndex: 'messagedata',
                flex: 1
            }
        ],
    }]
});