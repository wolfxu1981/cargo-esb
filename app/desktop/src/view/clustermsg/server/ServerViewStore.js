Ext.define('CargoESB.view.clustermsg.server.ServerViewStore', {
  extend: 'Ext.data.Store',
  alias: 'store.serverviewstore',
  pageSize:5,
    autoLoad:true,
  groupField: 'name',
  fields: [
    'name', 'ip', 'mac','cpu','memory','harddisk','port','comments','cluster'
  ],
  // data: { items: [
  //     { name: '数据库服务器',   ip: "10.255.37.105", mac: "",cpu:'4 Core', memory:'8G',harddisk:'150G',port:'1521',comments:'数据库端口',cluster:'数据库集群'},
  //     { name: '应用服务器1',   ip: "10.255.37.103", mac: "",cpu:'4 Core', memory:'8G',harddisk:'150G',port:'8080',comments:'Ngix服务端口',cluster:'应用服务器集群'},
  //     { name: '应用服务器1',   ip: "10.255.37.103", mac: "",cpu:'4 Core', memory:'8G',harddisk:'150G',port:'8081',comments:'Tomcat服务端口',cluster:'应用服务器集群'},
  //     { name: '应用服务器1',   ip: "10.255.37.103", mac: "",cpu:'4 Core', memory:'8G',harddisk:'150G',port:'5672',comments:'RabbitMQ AMOP协议端口',cluster:'应用服务器集群'},
  //     { name: '应用服务器1',   ip: "10.255.37.103", mac: "",cpu:'4 Core', memory:'8G',harddisk:'150G',port:'1833',comments:'RabbitMQ MQTT协议端口',cluster:'应用服务器集群'},
  //     { name: '应用服务器2',   ip: "10.255.37.104", mac: "",cpu:'4 Core', memory:'8G',harddisk:'150G',port:'8080',comments:'Ngix服务端口',cluster:'应用服务器集群'},
  //     { name: '应用服务器2',   ip: "10.255.37.104", mac: "",cpu:'4 Core', memory:'8G',harddisk:'150G',port:'8081',comments:'Tomcat服务端口',cluster:'应用服务器集群'},
  //     { name: '应用服务器2',   ip: "10.255.37.104", mac: "",cpu:'4 Core', memory:'8G',harddisk:'150G',port:'5672',comments:'RabbitMQ AMOP协议端口',cluster:'应用服务器集群'},
  //     { name: '应用服务器2',   ip: "10.255.37.104", mac: "",cpu:'4 Core', memory:'8G',harddisk:'150G',port:'1833',comments:'RabbitMQ MQTT协议端口',cluster:'应用服务器集群'},
  //     { name: '应用服务器3',   ip: "10.255.37.110", mac: "",cpu:'4 Core', memory:'8G',harddisk:'150G',port:'8080',comments:'Ngix服务端口',cluster:'应用服务器集群'},
  //     { name: '应用服务器3',   ip: "10.255.37.110", mac: "",cpu:'4 Core', memory:'8G',harddisk:'150G',port:'8081',comments:'Tomcat服务端口',cluster:'应用服务器集群'},
  //     { name: '应用服务器3',   ip: "10.255.37.110", mac: "",cpu:'4 Core', memory:'8G',harddisk:'150G',port:'5672',comments:'RabbitMQ AMOP协议端口',cluster:'应用服务器集群'},
  //     { name: '应用服务器3',   ip: "10.255.37.110", mac: "",cpu:'4 Core', memory:'8G',harddisk:'150G',port:'1833',comments:'RabbitMQ MQTT协议端口',cluster:'应用服务器集群'},
  //   ]},
  proxy: {
    type: 'ajax',
      url:domainprefix+"/server/all",
    reader: {
      type: 'json',
      rootProperty: 'items'
    }
  }
});