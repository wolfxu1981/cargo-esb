Ext.define('CargoESB.view.errormsg.ErrorStore', {
  extend: 'Ext.data.Store',
  alias: 'store.errorstore',
  pageSize: 200,
  autoLoad:true,
  idProperty: 'uuid',
  remoteFilter:true,
  fields: [
     'messagetype','content'
      //'logtime', 'sender', 'receiver','msgtype','content'
  ],
  //groupField: 'logtime',
  proxy: {
    type: 'ajax',
    //url: localStorage.getItem("baseurl")+'statistic/log/all',
    url: domainprefix+'logquery',
    reader: {
      type: 'json',
      rootProperty: 'list',
      totalProperty: 'total'
    }
  },
});
