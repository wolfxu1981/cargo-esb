Ext.define('CargoESB.view.errormsg.ErrorController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.errorcontroller',


  onSearch:function(grid,selected){
    var messagetype = grid.getParent().innerItems[0].getValue();
    console.log(messagetype);
    var content = grid.getParent().innerItems[2].getValue();
    console.log(content);

    let store = grid.getParent().getParent().lookup('errorgrid').store;
    console.log(store);
    let filters = store.getFilters();
    filters.removeAll();
    if(messagetype){
      // starttime = starttime+" 00:00:00";
      filters.add(new Ext.util.Filter({
        property: 'messagetype',
        value: messagetype,
      }))
    }
    if(content){
      filters.add(new Ext.util.Filter({
        property: 'content',
        value: content,
      }))
    }
    store.loadPage(1);
  },
  onDoubleClick:function(grid,index,target,record){
    Ext.create({
      xtype:'errorpopup',
      title:'日志详情',
      record:record
    }).show();
  }
});