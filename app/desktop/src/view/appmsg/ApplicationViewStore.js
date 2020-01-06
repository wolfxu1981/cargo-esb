Ext.define('CargoESB.view.appmsg.ApplicationViewStore', {
  extend: 'Ext.data.Store',
  alias: 'store.appsviewstore',
  autoLoad: true,
  fields: [
    'name', 'code', 'comments','id'
  ],
    proxy: {
        type: 'ajax',
        url: domainprefix+'systemservicequery',
        //callbackKey: 'jsonPCallback'
    }
});