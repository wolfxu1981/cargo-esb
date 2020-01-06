Ext.define('CargoESB.view.servicemsg.opt.ServiceOperationController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.serviceoperationcontroller',

  onSelect:function(grid,selected){
    //alert(selected)
    let status = selected.get('status');
    let toolbar = grid.parent.down('toolbar');
    let deploy = toolbar.down('[text="部署"]');
    let online = toolbar.down('[text="启动"]');
    let offline = toolbar.down('[text="停止"]');
    let undeloy = toolbar.down('[text="卸载"]');
    deploy.enable();
    online.enable();
    offline.enable();
    undeloy.enable();
    //alert(status)
    //如果是运行中，则不能直接卸载、部署和上线
    if(status=='运行中'){
      deploy.disable();
      online.disable();
      undeloy.disable();
    }else if(status=="已停止"){
      //如果服务已停止，则可以启动和卸载
      offline.disable();
      deploy.disable();
    }else if (status=="已部署"){
      //部署以后，服务是处于运行状态，可以停止和卸载
      deploy.disable();
      online.disable();
    }else{
      //服务卸载，只能先部署
      online.disable();
      offline.disable();
      undeloy.disable();
    }
  },

  onUnselect:function(grid,selected){
    let toolbar = grid.parent.down('toolbar');
    let deploy = toolbar.down('[text="部署"]');
    let online = toolbar.down('[text="启动"]');
    let offline = toolbar.down('[text="停止"]');
    let undeloy = toolbar.down('[text="卸载"]');
    deploy.enable();
    online.enable();
    offline.enable();
    undeloy.enable();
  },

  onDeploy:function(){
    let grid = this.lookup('serviceoperationgrid');
    let selected = grid.getSelection();
    //selected.set('status',"已部署");
    let  dialog = Ext.create({
      xtype: 'dialog',
      html: '服务部署中...',
    });
      var code = selected.data.code;
      var status = selected.data.status;
      console.log(selected.data.status)
      Ext.Ajax.request({
          url:domainprefix+'servicedeploy',
          contentType:'application/json;charset=utf-8',
          method:'GET',
          params: { code: code,
              status: status},
          success: function(response,options) {
              //请求返回成功
              if(response.status = 200){
                  let obj = eval('(' + response.responseText + ')');
                  console.log(obj);
                  if(obj.error_code==200 && obj.status == true){
                      //删除成功
                      console.log('部署成功');
                      grid.getStore().load()
                  }else{
                      console.log('部署失败,请检联系管理员！');
                  }
              }
          },
          failure: function(result) {
              //启动失败
              console.log(result);
              //win.destroy();
          }
      });
  },

  onStart:function(){
    let grid = this.lookup('serviceoperationgrid');
    let selected = grid.getSelection();
    let  dialog = Ext.create({
      xtype: 'dialog',
      html: '服务启动中...',
    });
      dialog.show();
      var code = selected.data.code;
      Ext.Ajax.request({
          url:domainprefix+'servicestart',
          contentType:'application/json;charset=utf-8',
          method:'GET',
          params: { code: code },
          success: function(response,options) {
              dialog.close();
              //请求返回成功
              if(response.status = 200){
                  let obj = eval('(' + response.responseText + ')');
                  console.log(obj);
                  if(obj.error_code==200 && obj.status == true){
                      //删除成功
                      console.log('启动成功');
                      grid.getStore().load()
                  }else{
                      console.log('启动失败,请检联系管理员！');
                  }
              }
          },
          failure: function(result) {
              //启动失败
              console.log(result);
              //win.destroy();
          }
      });
  },

  onStop:function(){
    let grid = this.lookup('serviceoperationgrid');
    console.log(grid);
    let selected = grid.getSelection();

      console.log(selected);
    let  dialog = Ext.create({
      xtype: 'dialog',
      html: '服务停止中...',
    });
      dialog.show();
    var code = selected.data.code;
    Ext.Ajax.request({
      url:domainprefix+'servicestop',
      contentType:'application/json;charset=utf-8',
      method:'GET',
      params: { code: code },
        success: function(response,options) {
            dialog.close();
            //请求返回成功
            if(response.status = 200){
                let obj = eval('(' + response.responseText + ')');
                console.log(obj);
                if(obj.error_code==200 && obj.status == true){
                    //删除成功
                    console.log('停止成功');
                    grid.getStore().load()
                }else{
                    //alert('停止失败,请检联系管理员！');

                    grid.getStore().load()
                    grid.setSelection(null)
                    console.log('停止失败,请检联系管理员！');
                }
            }
        },
      failure: function(result) {
        //启动失败
        console.log(result);
        //win.destroy();
      }
    });
    console.log(selected);
    //dialog.show();
    // const sleep = (milliseconds) => {
    //   return new Promise(resolve => setTimeout(resolve, milliseconds))
    // };
    // sleep(2000).then(()=>{
    //   this.updatestatus(dialog,selected,"已停止");
    // });
    //grid.deselect(selected);
    //setTimeout(this.updatestatus(dialog,selected,"已停止"),5000);
   // Ext.toast('服务停止中...', 5000);
   // selected.set('status',"已停止");
  },

  updatestatus:function(dialog,selected,status){
    dialog.close();
    selected.set('status',status);
  },

  onUndeploy:function () {
    let grid = this.lookup('serviceoperationgrid');
    let selected = grid.getSelection();

    let  dialog = Ext.create({
      xtype: 'dialog',
      html: '服务卸载中...',
    });
      dialog.show();
      var code = selected.data.code;
      Ext.Ajax.request({
          url:domainprefix+'serviceremove',
          contentType:'application/json;charset=utf-8',
          method:'DELETE',
          //timeout: 300000,
          //waitMsg : '正在提交数据,请稍后... ...',
          params: { code: code },
          success: function(response,options) {
              dialog.close();
              //请求返回成功
              if(response.status = 200){
                  let obj = eval('(' + response.responseText + ')');
                  console.log(obj);
                  if(obj.error_code==200 && obj.status == true){
                      //删除成功
                      console.log('卸载成功');
                      grid.getStore().load()
                  }else{
                      console.log('卸载失败,请检联系管理员！');
                  }
              }
          },
          failure:function() {
              console.log('请求失败');
          }
      });
  }

});
