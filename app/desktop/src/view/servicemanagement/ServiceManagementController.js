Ext.define('CargoESB.view.servicemanagement.ServiceManagementController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.servicemanagementcontroller',

    onAddData: function () {
        //var store = this.lookup('grid').getMatrix().store;
        //console.log(this.lookup('grid'));
        var uploadForm = Ext.create('Ext.form.Panel', {
            width:400,
            height: 110,
            items: [
                {
                    xtype: 'filefield',
                    fieldLabel: '文件上传',
                    labelWidth: 80,
                    msgTarget: 'side',
                    allowBlank: false,
                    //margin: '-10,0,0,0',
                    anchor: '100%',
                    id:'warfile',
                    name:'warfile',
                    buttonText:'选择文件',

                }],
             buttons:[
                 {
                     text: '上传',
                     handler: function() {
                         console.log(uploadForm);
                         console.log(Ext.getCmp('warfile'));

                         console.log(Ext.getCmp('warfile').innerElement);
                         console.log(Ext.getCmp('warfile').parent.ariaEl.dom);
                         var domFileItem = document.getElementById(this.up('filefield').fileInputEl.id);
                         console.log(domFileItem);
                         var  fileEl = Ext.getCmp('warfile').el.dom;
                         //console.log(fileEl.files[0]);
                         var fd =new FormData();
                         fd.append('file',uploadForm.getFields());
                         Ext.Ajax.request({
                             url:'http://localhost:3456/upload',
                             cors:true,
                             useDefaultXhrHeader:false,
                             method:'POST',
                             rawData:fd,
                             headers: {
                                 "Content-Type":null   /* 最重要的部分，将Content-Type设置成null，ExtJs则会由内部的XMLHTTPRequest自动生成包含boundary的Content-Type，否则在使用rawData的情况下，ExtJs会将Content-Type设置成text/plain */
                             },
                             success:function (res,opts) {
                                 alert('success');
                             },
                             failure:function (res,opts) {
                                 alert('failure');
                             }
                         });

                         /*Ext.Ajax.request({
                             url:'http://localhost:3456/upload',
                             cors:true,
                             useDefaultXhrHeader:false,
                             method:'POST',
                             rawData:fd,
                             dataType:"jsonp",  //数据格式设置为jsonp
                             jsonp:"callback",  //Jquery生成验证参数的名称

                             headers: {
                                 "Content-Type":null   /!* 最重要的部分，将Content-Type设置成null，ExtJs则会由内部的XMLHTTPRequest自动生成包含boundary的Content-Type，否则在使用rawData的情况下，ExtJs会将Content-Type设置成text/plain *!/
                             },
                             success:function (res,opts) {
                                 alert('success');
                             },
                             failure:function (res,opts) {
                                 alert('failure');
                             }
                         });*/
                     }
                 }, {
                     text: '取消',
                     handler: function() {
                         uploadForm.destroy();
                         //win.hide();
                     }
                 }],
            buttonAlign:'center'

        });
        var uploadForm2 =Ext.create('Ext.form.Panel', {
            //title: 'File Upload Form',
            width:400,
            height: 110,
            items: [{
                xtype: 'filefield',
                emptyText: 'Select an image',
                fieldLabel: 'Image-File',
                name: 'photo-path',
                buttonText: 'Select',
            }],

            buttons: [{
                text: 'Upload',
                handler: function(){
                    var form = this.up('panel').down('form');

                        var domFileItem = document.getElementById(this.up('filefield').fileInputEl.id);
                        if(domFileItem.files.length == 1) {
                            var uploadFile = domFileItem.files[0];
                            var formData = new FormData();
                            formData.append('file', uploadFile, uploadFile.name);

                            //send formData with an Ajax-request to the Target-Url
                            xhr = new XMLHttpRequest();
                            xhr.open('POST', 'TARGET-URL', true);
                            xhr.onload = function() {
                                if (xhr.status === 200) {
                                    console.log('Upload Done', xhr.responseText);
                                } else {
                                    alert('An error occurred!');
                                }
                            };
                            xhr.send(formData);

                        }
                    }

            }]
        });
        var uploadForm3 = Ext.create('Ext.form.Panel', {
            width:400,
            height: 100,
            items: [
                {
                    xtype: 'filefield',
                    fieldLabel: '文件上传',
                    labelWidth: 80,
                    msgTarget: 'side',
                    allowBlank: false,
                    margin: '10,10,10,10',
                    anchor: '100%',
                    buttonText:'选择文件'
                }],
            buttons:[
                {
                    text: '上传',
                    handler: function() {
                        /*console.log(uploadForm3);
                        //var form = this.getView();
                        var form = this.up('toolbar').up('formpanel');
                        //var form1 = Ext.getCmp('warfile1');
                        form.submit({
                            url: 'http://10.25.66.230:8080/manager/html/deploy?org.apache.catalina.filters.CSRF_NONCE=609C8E78DD1A7277DD0DCF7A126E9B7F',
                           
                            success: function(form, action) {
                                var jsonResult = Ext.JSON.decode(action.response.responseText);
                                if (jsonResult.success) {

                                }
                                Ext.Msg.alert('提示', jsonResult.Msg);
                            }

                        });*/
                        alert('部署成功');
                        uploadForm.destroy();
                    }
                }, {
                    text: '取消',
                    handler: function() {
                        uploadForm.destroy();
                    }
                }],
            buttonAlign:'center'

        });
        var win = new Ext.Window({
            layout:'fit',       //弹出窗口内布局会充满整个窗口;
            width:400,          //设置窗口大小;
            height:180,
            closeAction:'destroy', //点击右上角关闭按钮后会执行的操作;
            closable:true,     //关闭按钮;
            draggable:true,     //窗口可拖动;
            items:[uploadForm3]
        });
        win.show();
        //store.add(KitchenSink.data.PivotData.getData(1));
    },
    onStart: function(){
        alert('上线成功');
        //项目名称
        //var name = recIndex.record.data.name;
        //状态
        //var status = recIndex.record.data.status;

      /*  var loding = new Ext.Window({
            layout:'fit',       //弹出窗口内布局会充满整个窗口;
            width:400,          //设置窗口大小;
            height:180,
            closeAction:'destroy', //点击右上角关闭按钮后会执行的操作;
            closable:false,     //关闭按钮;
            draggable:true,     //窗口可拖动;
            items:[""]
        });*/

        loding.show();
       /* Ext.data.JsonP.request({
            url:'http://localhost:8095/start',
            timeout: 300000,
            waitMsg : '正在提交数据,请稍后... ...',
            params: { name: name },
            callbackKey: "jsonPCallback",
            success: function(result) {
                console.log(result);
                win.destroy();
                //启动成功
                /!* var grid = view;
                    grid.store.reload();*!/
            },
            failure: function(result) {
                //启动失败
                console.log(result);
                win.destroy();

            }
        });*/
        // Ext.msg.alert('Message', '启动成功');
    },
    onStop: function(view, recIndex, cellIndex, item, e, record){
        alert('下线成功')
        //项目名称
       /* var name = recIndex.record.data.name;
        //状态
        var status = recIndex.record.data.status;
        //如果状态正常，则只能停止或刷新。

        Ext.data.JsonP.request({
            url:'http://localhost:8095/stop',
            timeout: 300000,
            //method : "PUT",
            params: { name: name },
            callbackKey: "jsonPCallback",
            success: function(result) {
                console.log(result);
                //启动成功
                /!* var grid = view;
                    grid.store.reload();*!/
            },
            failure: function(result) {
                //启动失败
                console.log(result);
            }
        });*/
        // Ext.msg.alert('Message', '启动成功');
    },
    onRefresh: function(view, recIndex, cellIndex, item, e, record){
        //项目名称
        alert('重新上线成功');
        /*var name = recIndex.record.data.name;
        //状态
        var status = recIndex.record.data.status;
        //如果状态正常，则只能停止或刷新。

        Ext.data.JsonP.request({
            url:'http://localhost:8095/refresh',
            timeout: 300000,
            params: { name: name },
            callbackKey: "jsonPCallback",
            success: function(result) {
                console.log(result);
                //启动成功
                /!* var grid = view;
                    grid.store.reload();*!/
            },
            failure: function(result) {
                //启动失败
                console.log(result);
            }
        });*/
        // Ext.msg.alert('Message', '启动成功');
    },
    onRemove: function(view, recIndex, cellIndex, item, e, record){
        alert('注销成功');
        //项目名称
       /* var name = recIndex.record.data.name;
        //状态
        var status = recIndex.record.data.status;
        //如果状态正常，则只能停止或刷新。

        Ext.data.JsonP.request({
            url:'http://localhost:8095/remove',
            timeout: 300000,
            params: { name: name },
            callbackKey: "jsonPCallback",
            success: function(result) {
                console.log(result);
                //启动成功
                /!* var grid = view;
                    grid.store.reload();*!/
            },
            failure: function(result) {
                //启动失败
                console.log(result);
            }
        });*/
        // Ext.msg.alert('Message', '启动成功');
    }
});
