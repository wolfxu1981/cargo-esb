Ext.define('CargoESB.view.servicemsg.directory.ServiceDirectoryTree', {
  extend: 'Ext.grid.Tree',
  xtype: 'servicedirectorytree',
  layout:'fit',
  reference:'servicedirectorytree',
  columnLines:true,
  rowLines:true,
  rootVisible:false,
  store:Ext.create(CargoESB.view.servicemsg.directory.ServiceDirectoryTreeStore),
  listeners:[{
    childsingletap:'onChildSingleTap'
  }]
  //     Ext.create('Ext.data.TreeStore', {
  //   rootVisible: false,
  //   root: {
  //     text: 'Genre',
  //     expanded: true,
  //     children: [
  //       {
  //         text: '航班服务',
  //         children: [
  //           { leaf: true, text: '货运物流综合服务平台航班服务' },
  //           { leaf: true, text: 'BCS货站生产系统航班服务' },
  //           { leaf: true, text: '货运智能安检系统航班服务' }
  //         ]
  //       },
  //       {
  //         text: '基础数据服务',
  //         children: [
  //           { leaf: true, text: '货运物流综合服务平台基础数据服务' },
  //           { leaf: true, text: 'BCS货站生产系统基础数据服务' },
  //           { leaf: true, text: '货运智能安检系统基础数据服务' }
  //         ]
  //       },
  //       {
  //         text: '报文服务',
  //         children: [
  //           { leaf: true, text: '货运物流综合服务平台-BCS货站' },
  //           { leaf: true, text: 'BCS货站-货运物流综合服务平台' },
  //           { leaf: true, text: '货运物流综合服务平台-单一窗口' },
  //           { leaf: true, text: '单一窗口-货运物流综合服务平台' },
  //           { leaf: true, text: '货运物流综合服务平台-货运智能安检系统' },
  //           { leaf: true, text: '货运智能安检系统-货运物流综合服务平台' },
  //           { leaf: true, text: 'BCS货站-单一窗口' },
  //           { leaf: true, text: '单一窗口-BCS货站' },
  //           { leaf: true, text: '厦航货运系统-BCS货站' },
  //           { leaf: true, text: '厦航货运系统-货运物流综合服务平台' },
  //           { leaf: true, text: 'BCS货站-ULD' },
  //         ]
  //       },
  //     ]
  //   }
  // })
});