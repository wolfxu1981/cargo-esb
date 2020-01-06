Ext.define('CargoESB.view.clustermsg.cluster.ClusterViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.clusterviewcontroller',

    onActivate:function(sender, eOpts){
        updateState=function () {
            sender.fireEvent('painted');
        }
        let delaytask=new Ext.util.DelayedTask(function () {
            Ext.TaskManager.start({
                run:updateState,
                interval:600000
            });
        })
        delaytask.delay(600000);
    },

    getServerStatus: function (serverArray) {
        for (let i = 0; i < serverArray.length; i++) {
            let start = new Date().getTime();
            let server = serverArray[i];
            let ip = server.ip;
            Ext.Ajax.request({
                url: "http://" + ip + "/" + (new Date()).getTime() + ".html",

                success: function (response, opt) {
                    let end = new Date().getTime();
                    let ping = Math.abs(start - end);
                    if (ping < 15000) {
                        server.ind0 = "green";
                    } else {
                        server.ind0 = "yellow";
                    }
                },

                failure: function (response, opt) {
                    server.ind0 = "red";
                }

            });
        }
        return serverArray;
    },


    onDelete: function (sender, record) {
        let grid = this.lookup('clustergrid');
        let selection = grid.getSelectable().getSelections();
        let data = [];
        for (let i = 0; i < selection.length; i++) {
            data += selection[i].id + ',';
        }
        Ext.Ajax.request({
            url: domainprefix + '/cluster/delete',
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
    },

    onAdd: function (sender, record) {
        Ext.create({
            xtype: 'clusterpopup',
            title: '新增集群',
            record: record
        }).show();
    },

    onOk: function () {
        let clusterform = Ext.getCmp('clusterform');
        let clusterpopup = Ext.getCmp('clusterpopup');
        let clustergrid = Ext.getCmp('clustergrid');
        if (clusterform.validate()) {
            clusterform.submit({
                url: domainprefix + "/cluster/save",
                success: function (form, result, data) {
                    if (result.success) {
                        if (result.msg) {
                            Ext.Msg.alert('Info', result.msg);
                        } else {
                            Ext.Msg.alert('Info', '提交成功');
                        }
                    } else {
                        Ext.Msg.alert('Error', '后台错误，请联系管理员');
                    }
                    clustergrid.getStore().reload();
                    clusterpopup.close();
                },
                failure: function (form, result, data) {
                    Ext.Msg.alert('error', '请求失败');
                }
            })
        } else {
            Ext.Msg.alert('Info', '请完善表单');
        }
    },

    onDoubleClick: function (grid, index, target, record) {
        Ext.create({
            xtype: 'clusterpopup',
            title: '修改集群',
            record: record,
            grid: grid
        }).show();
    },


    onPainted: function (sender, element, eOpts) {
        let clusterContainer=Ext.getCmp('clustermonitor');
        clusterContainer.removeAll();
        let mainContainer = Ext.create('Ext.Container', {
            layout: 'vbox',
            scrollable:true,
        });

        Ext.Ajax.request({
            url:domainprefix+'/cluster/all',
            success:function(response){
                let result=Ext.decode(response.responseText);
                let data=result.items;
                for (let i = 0; i < data.length; i++) {
                    let cluster = data[i];
                    let servers=cluster.server;
                    let childContainer = Ext.create('Ext.Container', {
                        layout: 'fit',
                        flex: 2,
                        minHeight:'50%',
                        items: [{
                            xtype: 'panel',
                            layout: 'fit',
                            flex: 2,
                            title: cluster.name,
                            items: [{
                                xtype: 'panel',
                                border: true,
                                listeners: {
                                    painted: function (sender) {
                                        // common styling for each indicator

                                        function makeIndicator(propName) {  // the data property name
                                            return $(go.Shape,
                                                "Ellipse",
                                                {
                                                    width: 12, height: 12, column: 0, strokeWidth: 2, margin: 4,
                                                    // but disallow drawing links from or to this shape:
                                                    fromLinkable: false, toLinkable: false
                                                },
                                                new go.Binding("fill", propName));
                                        }

                                        let lastStroked = null;
                                        let dom = Ext.getDom(sender.el.dom);
                                        let $ = go.GraphObject.make;

                                        myDiagram =
                                            $(go.Diagram, dom,
                                                {
                                                    "linkingTool.direction": go.LinkingTool.ForwardsOnly,
                                                    "undoManager.isEnabled": false,
                                                    allowHorizontalScroll: false,
                                                    allowVerticalScroll: false,
                                                    padding:15,
                                                    layout:$(go.GridLayout,{
                                                        spacing:new go.Size(80,50)
                                                    }),
                                                    contentAlignment: go.Spot.Center,  // content is always centered in the viewport
                                                    autoScale: go.Diagram.Uniform,  // scale always has all content fitting in the viewport
                                                    "toolManager.hoverDelay": 10,  // how quickly tooltips are shown
                                                    isReadOnly: true,  // don't let users modify anything
                                                });
                                        myDiagram.nodeTemplate =
                                            $(go.Node, "Vertical",
                                                new go.Binding("location", "loc", go.Point.parse),
                                                $(go.Panel, "Auto",
                                                    {name:"SHAPE"},  // this whole panel acts as the only port for the node
                                                    // $(go.Shape,  // the border
                                                    //     {fill: "transparent", stroke: "lightgray"}),
                                                    $(go.Panel, "Vertical",  // everything within the border
                                                        $(go.Panel, "Horizontal",  // the row of status indicators
                                                            makeIndicator("ind0")
                                                        ),  // end Horizontal Panel
                                                        $(go.Picture,
                                                            {width: 80, height: 80, margin: 4, source: "./images/server.png"}),
                                                        $(go.TextBlock,
                                                            {stretch: go.GraphObject.Horizontal,
                                                                textAlign: "center",
                                                                font: "Normal small-caps bold 12px sans-serif",
                                                            margin: 3},
                                                            new go.Binding("text", "ip")),
                                                        $(go.TextBlock,
                                                            {stretch: go.GraphObject.Horizontal,
                                                                textAlign: "center",
                                                                font: "Normal small-caps bold 10px sans-serif",
                                                            margin: 2},
                                                            new go.Binding("text", "text"))
                                                    )  // end Vertical Panel
                                                ),  // end Auto Panel
                                            );
                                        myDiagram.linkTemplate =
                                            $(go.Link, go.Link.Orthogonal,
                                                {corner: 5, relinkableFrom: true, relinkableTo: true},
                                                $(go.Shape, {strokeWidth: 4, stroke: "#00a4a4"}));
                                        // create the model data that will be represented by Nodes and Links
                                        myDiagram.model = new go.GraphLinksModel(
                                            cluster.server
                                            ,
                                            []);
                                        for(let j=0;j<servers.length-1;j++){
                                            myDiagram.startTransaction("make new link");
                                            myDiagram.model.addLinkData({from:servers[j].key,to:servers[j+1].key});
                                            myDiagram.commitTransaction("make new link");
                                        }
                                    }
                                }
                            }]
                        }]
                    });

                    mainContainer.add(childContainer);
                }

                clusterContainer.add(mainContainer);

            },
            failure:function (response) {

            }
        })


    }

})