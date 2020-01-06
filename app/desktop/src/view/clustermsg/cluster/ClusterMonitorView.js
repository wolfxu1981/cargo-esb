Ext.define('CargoESB.view.clustermsg.cluster.ClusterMonitorView',{
  extend: 'Ext.Container',
  xtype: 'clustermonitor',
  reference:'clustermonitor',
  id:'clustermonitor',
  layout:'fit',
  scrollable:true,
  border:true,
    controller: {type: 'clusterviewcontroller'},
  listeners:{
    painted:'onPainted',
    activate:'onActivate'
  }

  //   items:[{
  //   xtype:'container',
  //   layout: 'vbox',
  //   items:[{
  //     xtype:'container',
  //     flex:1,
  //     layout:'hbox',
  //     items:[{
  //       xytpe:'panel',
  //       flex:1,
  //       layout:'fit',
  //       title:'应用服务器集群',
  //       items:[{
  //         xtype:'panel',
  //         layout:'fit',
  //         title:'应用服务器集群',
  //         items:[{
  //           xtype:'panel',
  //           border:true,
  //           listeners:{
  //             painted:function(sender){
  //               // common styling for each indicator
  //               function makeIndicator(propName) {  // the data property name
  //                 return $(go.Shape,
  //                     "Circle",
  //                     { width: 20, height: 20, fill: "white", strokeWidth: 0, margin: 5 },
  //                     new go.Binding("fill", propName));
  //               }
  //
  //               function makeImagePath(icon) {
  //
  //                 return "./images/";
  //               }
  //
  //               let dom = Ext.getDom(sender.el.dom);
  //               var $ = go.GraphObject.make;
  //               //初始化
  //               myDiagram =
  //                   $(go.Diagram, dom,
  //                       {
  //                         "linkingTool.direction": go.LinkingTool.ForwardsOnly,
  //                         "undoManager.isEnabled": false
  //                       });
  //
  //               // define a simple Node template
  //               myDiagram.nodeTemplate =
  //                   $(go.Node, "Vertical",
  //                       new go.Binding("location", "loc", go.Point.parse),
  //                       $(go.Panel, "Auto",
  //                           { background: "white" },
  //                           { portId: "" },  // this whole panel acts as the only port for the node
  //                           $(go.Shape,  // the border
  //                               { fill: "transparent", stroke: "lightgray" }),
  //                           $(go.Panel, "Vertical",  // everything within the border
  //                               $(go.Panel, "Horizontal",  // the row of status indicators
  //                                   makeIndicator("ind0")
  //                               ),  // end Horizontal Panel
  //                               $(go.Picture,
  //                                   { width: 80, height: 80, margin: 4 },
  //                                   new go.Binding("source", "img")),
  //                               $(go.TextBlock,
  //                                   { stretch: go.GraphObject.Horizontal, textAlign: "center" },
  //                                   new go.Binding("text", "ip"),
  //                                   new go.Binding("background", "ind0"))
  //                           )  // end Vertical Panel
  //                       ),  // end Auto Panel
  //                   );
  //
  //               // but use the default Link template, by not setting Diagram.linkTemplate
  //               myDiagram.linkTemplate =
  //                   $(go.Link, go.Link.Orthogonal,
  //                       { corner: 5, relinkableFrom: true, relinkableTo: true },
  //                       $(go.Shape, { strokeWidth: 4, stroke: "#00a4a4" }));
  //               // create the model data that will be represented by Nodes and Links
  //               myDiagram.model = new go.GraphLinksModel(
  //                   [
  //                     { key: 1, text: "Device Type A", ip: '10.131.11.222', img: "./images/server.png", color: "moccasin",
  //                       ind0: "green", ind1: "orange", ind2: "mediumspringgreen" ,loc:"30 50"},
  //                     { key: 2, text: "Device Type B", ip: '10.131.11.211', img: "./images/server.png", color: "green",
  //                       ind0: "green", ind1: "orange", ind2: "green",loc:"200 50" },
  //                     { key: 3, text: "Device Type B", ip: '10.131.11.147', img: "./images/server.png", color: "green",
  //                       ind0: "green", ind1: "oran1ge", ind2: "green",loc:"370 50" },
  //                   ],
  //                   [
  //                     {from:1,to:2},
  //                     {from:2,to:3}
  //                   ]);
  //
  //             }
  //           }
  //         }]
  //
  //       },{
  //         xtype:'panel',
  //         layout:'fit',
  //         border:true,
  //         title:'消息中间件集群',
  //         items:[{
  //           xtype:'panel',
  //           border:true,
  //           listeners:{
  //             painted:function(sender){
  //               // common styling for each indicator
  //               function makeIndicator(propName) {  // the data property name
  //                 return $(go.Shape,
  //                     "Circle",
  //                     { width: 20, height: 20, fill: "white", strokeWidth: 0, margin: 5 },
  //                     new go.Binding("fill", propName));
  //               }
  //
  //               function makeImagePath(icon) {
  //
  //                 return "./images/";
  //               }
  //
  //               let dom = Ext.getDom(sender.el.dom);
  //               var $ = go.GraphObject.make;
  //               //初始化
  //               myDiagram =
  //                   $(go.Diagram, dom,
  //                       {
  //                         "linkingTool.direction": go.LinkingTool.ForwardsOnly,
  //                         "undoManager.isEnabled": false
  //                       });
  //
  //               // define a simple Node template
  //               myDiagram.nodeTemplate =
  //                   $(go.Node, "Vertical",
  //                       new go.Binding("location", "loc", go.Point.parse),
  //                       $(go.Panel, "Auto",
  //                           { background: "white" },
  //                           { portId: "" },  // this whole panel acts as the only port for the node
  //                           $(go.Shape,  // the border
  //                               { fill: "transparent", stroke: "lightgray" }),
  //                           $(go.Panel, "Vertical",  // everything within the border
  //                               $(go.Panel, "Horizontal",  // the row of status indicators
  //                                   makeIndicator("ind0")
  //                               ),  // end Horizontal Panel
  //                               $(go.Picture,
  //                                   { width: 80, height: 80, margin: 4 },
  //                                   new go.Binding("source", "img")),
  //                               $(go.TextBlock,
  //                                   { stretch: go.GraphObject.Horizontal, textAlign: "center" },
  //                                   new go.Binding("text", "ip"),
  //                                   new go.Binding("background", "ind0"))
  //                           )  // end Vertical Panel
  //                       ),  // end Auto Panel
  //                   );
  //
  //               // but use the default Link template, by not setting Diagram.linkTemplate
  //               myDiagram.linkTemplate =
  //                   $(go.Link, go.Link.Orthogonal,
  //                       { corner: 5, relinkableFrom: true, relinkableTo: true },
  //                       $(go.Shape, { strokeWidth: 4, stroke: "#00a4a4" }));
  //               // create the model data that will be represented by Nodes and Links
  //               myDiagram.model = new go.GraphLinksModel(
  //                   [
  //                     { key: 1, text: "Device Type A", ip: '10.131.11.222', img: "./images/server.png", color: "moccasin",
  //                       ind0: "green", ind1: "orange", ind2: "mediumspringgreen" ,loc:"30 50"},
  //                     { key: 2, text: "Device Type B", ip: '10.131.11.211', img: "./images/server.png", color: "green",
  //                       ind0: "green", ind1: "orange", ind2: "green",loc:"200 50" },
  //                     { key: 3, text: "Device Type B", ip: '10.131.11.147', img: "./images/server.png", color: "green",
  //                       ind0: "green", ind1: "orange", ind2: "green",loc:"370 50" },
  //                   ],
  //                   [
  //                     {from:1,to:2},
  //                     {from:2,to:3}
  //                   ]);
  //
  //             }
  //           }
  //         }]
  //
  //       },]
  //     }]
  //   },{
  //     xtype:'container',
  //     flex:1,
  //
  //     layout:'fit',
  //     items:[{
  //       xtype:'panel',
  //       layout:'fit',
  //
  //       title:'数据库服务器集群',
  //       items:[{
  //         xtype:'panel',
  //         border:true,
  //         listeners:{
  //           painted:function(sender){
  //             // common styling for each indicator
  //             function makeIndicator(propName) {  // the data property name
  //               return $(go.Shape,
  //                   "Circle",
  //                   { width: 20, height: 20, fill: "white", strokeWidth: 0, margin: 5 },
  //                   new go.Binding("fill", propName));
  //             }
  //
  //             function makeImagePath(icon) {
  //
  //               return "./images/";
  //             }
  //
  //             let dom = Ext.getDom(sender.el.dom);
  //             var $ = go.GraphObject.make;
  //             //初始化
  //             myDiagram =
  //                 $(go.Diagram, dom,
  //                     {
  //                       "linkingTool.direction": go.LinkingTool.ForwardsOnly,
  //                       "undoManager.isEnabled": false
  //                     });
  //
  //             // define a simple Node template
  //             myDiagram.nodeTemplate =
  //                 $(go.Node, "Vertical",
  //                     new go.Binding("location", "loc", go.Point.parse),
  //                     $(go.Panel, "Auto",
  //                         { background: "white" },
  //                         { portId: "" },  // this whole panel acts as the only port for the node
  //                         $(go.Shape,  // the border
  //                             { fill: "transparent", stroke: "lightgray" }),
  //                         $(go.Panel, "Vertical",  // everything within the border
  //                             $(go.Panel, "Horizontal",  // the row of status indicators
  //                                 makeIndicator("ind0")
  //                             ),  // end Horizontal Panel
  //                             $(go.Picture,
  //                                 { width: 80, height: 80, margin: 4 },
  //                                 new go.Binding("source", "img")),
  //                             $(go.TextBlock,
  //                                 { stretch: go.GraphObject.Horizontal, textAlign: "center" },
  //                                 new go.Binding("text", "ip"),
  //                                 new go.Binding("background", "ind0"))
  //                         )  // end Vertical Panel
  //                     ),
  //                     { // this tooltip Adornment is shared by all groups
  //                       toolTip:
  //                           $("ToolTip",
  //                               $(go.Panel, "Table",
  //                                   { defaultAlignment: go.Spot.Left, margin: 4 },
  //                                   $(go.RowColumnDefinition, { column: 1, width: 4 }),
  //                                   $(go.TextBlock, "IP: ",
  //                                       { row: 1, column: 0 }),
  //                                   $(go.TextBlock,
  //                                       { row: 1, column: 2 },
  //                                       new go.Binding("text", "ip")),
  //                                   $(go.TextBlock, "CPU: ",
  //                                       { row: 2, column: 0 }),
  //                                   $(go.TextBlock,
  //                                       { row: 2, column: 2 },
  //                                       new go.Binding("text", "cpu")),
  //                                   $(go.TextBlock, "内存: ",
  //                                       { row: 3, column: 0 }),
  //                                   $(go.TextBlock,
  //                                       { row: 3, column: 2 },
  //                                       new go.Binding("text", "memory"))
  //                               )
  //                           ),
  //                     }// end Auto Panel
  //                 );
  //
  //             // but use the default Link template, by not setting Diagram.linkTemplate
  //             myDiagram.linkTemplate =
  //                 $(go.Link, go.Link.Orthogonal,
  //                     { corner: 5, relinkableFrom: true, relinkableTo: true },
  //                     $(go.Shape, { strokeWidth: 4, stroke: "#00a4a4" }));
  //             // create the model data that will be represented by Nodes and Links
  //             myDiagram.model = new go.GraphLinksModel(
  //                 [
  //                   { key: 1, text: "Device Type A", ip: '10.255.37.110', img: "./images/server.png", color: "moccasin",
  //                     ind0: "green", ind1: "orange", comments: "IP:20.255.37.110",
  //                        cpu:"4 Core" ,memory:'8G',loc:"30 50"}
  //                 ],
  //                 [
  //                   {from:1,to:2},
  //                   {from:2,to:3}
  //                 ]);
  //
  //           }
  //         }
  //       }]
  //
  //     }]
  //   }]
  // }]
});