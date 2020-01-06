Ext.define('CargoESB.view.logmsg.LogStore', {
  extend: 'Ext.data.Store',
  alias: 'store.logstore',
  pageSize: 200,
  autoLoad:true,
  idProperty: 'uuid',
  remoteFilter:true,
  fields: [
    {name:'logtime',type:'date'}, 'sender', 'receiver', 'messagetype','content'
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
