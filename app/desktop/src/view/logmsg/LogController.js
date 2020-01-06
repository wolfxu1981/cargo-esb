Ext.define('CargoESB.view.logmsg.LogController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.logcontroller',


    onSearch: function (grid, selected) {
        var starttime = grid.getParent().innerItems[0].getValue();
        console.log(starttime);
        var endtime = grid.getParent().innerItems[2].getValue();
        console.log(endtime);
        var sender = grid.getParent().innerItems[4].getValue();
        console.log(sender);
        var recriver = grid.getParent().innerItems[6].getValue();
        console.log(recriver);
        var messagetype = grid.getParent().innerItems[8].getValue();
        console.log(messagetype);
        var content = grid.getParent().innerItems[10].getValue();
        console.log(content);

        let store = grid.getParent().getParent().lookup('loggrid').store;
        console.log(store);
        let filters = store.getFilters();
        filters.removeAll();
        if (messagetype) {
            // starttime = starttime+" 00:00:00";
            filters.add(new Ext.util.Filter({
                property: 'messagetype',
                value: messagetype,
            }))
        }
        if (starttime) {
            // starttime = starttime+" 00:00:00";
            filters.add(new Ext.util.Filter({
                property: 'starttime',
                value: starttime,
            }))
        }
        if (endtime) {
            // endtime = endtime+" 23:59:59";
            filters.add(new Ext.util.Filter({
                property: 'endtime',
                value: endtime,
            }))
        }
        if (sender) {
            filters.add(new Ext.util.Filter({
                property: 'sender',
                value: sender,
            }))
        }
        if (recriver) {
            filters.add(new Ext.util.Filter({
                property: 'recriver',
                value: recriver,
            }))
        }
        if (content) {
            filters.add(new Ext.util.Filter({
                property: 'content',
                value: content,
            }))
        }
        store.loadPage(1);
    },
    onDoubleClick: function (grid, index, target, record) {
        Ext.create({
            xtype: 'logpopup',
            title: '日志详情',
            record: record
        }).show();
    },
    onDailyLogSearch: function () {
        let startdate = this.lookup('daily_startdate');
        let enddate = this.lookup('daily_enddate');
        let dailyLogCartesian = this.lookup('daily_cart');
        let dailyGrid = this.lookup('daily_grid');
        let gridStore = dailyGrid.getStore();
        let store = dailyLogCartesian.getStore();
        let s = Ext.util.Format.date(startdate.getValue(), 'Y-m-d');
        let e = Ext.util.Format.date(enddate.getValue(), 'Y-m-d');
        let start = new Date(s);
        let end = new Date(e);
        let elapsed = Math.round((end - start) / 86400000);
        console.log(elapsed);
        if (elapsed > 15) {
            alert('仅可查询15天内数据');
        } else {
            store.reload({
                params: {
                    startdate: startdate.getValue(),
                    enddate: enddate.getValue(),
                    // type:'DAY'
                }
            });
            gridStore.reload({
                params: {
                    startdate: startdate.getValue(),
                    enddate: enddate.getValue(),
                    // type:'DAY'
                }
            });
            //   Ext.Ajax.request({
            //     url:domainprefix+"/countdaily",
            //     params: {
            //       startdate:startdate.getValue(),
            //       enddate:enddate.getValue()
            //     },
            //     success:function (response) {
            //       let res=Ext.decode(response.responseText);
            //       let items=res.items;
            //       console.log(items)
            //     },
            //     failure:function () {
            //
            //     }
            //   })
        }
    },

    onHourlyLogSearch: function () {
        let startdate = this.lookup('hourly_startdate');
        let enddate = this.lookup('hourly_enddate');
        let starttime = this.lookup('hourly_starttime');
        let endtime = this.lookup('hourly_endtime');
        let dailyLogCartesian = this.lookup('hourly_cart');
        let dailyGrid = this.lookup('hourly_grid');
        let gridStore = dailyGrid.getStore();
        let store = dailyLogCartesian.getStore();
        let s = Ext.util.Format.date(startdate.getValue(), 'Y-m-d');
        let e = Ext.util.Format.date(enddate.getValue(), 'Y-m-d');
        let start = new Date(s);
        let end = new Date(e);
        let elapsed = Math.round((end - start) / 86400000);
        console.log(elapsed);
        if (elapsed > 15) {
            alert('仅可查询15天内数据');
        } else {
            store.reload({
                params: {
                    startdate: startdate.getValue(),
                    enddate: enddate.getValue(),
                    starttime: starttime.getValue(),
                    endtime: endtime.getValue(),
                    // type: 'HOUR'
                }
            });
            gridStore.reload({
                params: {
                    startdate: startdate.getValue(),
                    enddate: enddate.getValue(),
                    starttime: starttime.getValue(),
                    endtime: endtime.getValue(),
                    // type: 'HOUR'
                }
            });
        }
    },

    onMonthlyLogSearch: function () {
        let startdate = this.lookup('monthly_startdate');
        let enddate = this.lookup('monthly_enddate');
        let dailyLogCartesian = this.lookup('monthly_cart');
        let dailyGrid = this.lookup('monthly_grid');
        let gridStore = dailyGrid.getStore();
        let store = dailyLogCartesian.getStore();
        store.reload({
            params: {
                startdate: startdate.getValue(),
                enddate: enddate.getValue(),
            }
        });
        gridStore.reload({
            params: {
                startdate: startdate.getValue(),
                enddate: enddate.getValue(),
            }
        });
    },

    onYearlyLogSearch: function () {
        let startdate = this.lookup('yearly_startdate');
        let enddate = this.lookup('yearly_enddate');
        let dailyLogCartesian = this.lookup('yearly_cart');
        let dailyGrid = this.lookup('yearly_grid');
        let gridStore = dailyGrid.getStore();
        let store = dailyLogCartesian.getStore();
        if (startdate.validate() && enddate.validate()) {
            store.reload({
                params: {
                    startdate: startdate.getValue(),
                    enddate: enddate.getValue(),
                }
            });
            gridStore.reload({
                params: {
                    startdate: startdate.getValue(),
                    enddate: enddate.getValue(),
                }
            });
        }
    },

    onSelect: function (combo, newValue, eOpts) {
        console.log(newValue);
        let startdate = this.lookup('daily_startdate');
        let enddate = this.lookup('daily_enddate');
        let value = newValue.data.value;
        if (value == '年') {
            startdate.setDateFormat('Y');
            enddate.setDateFormat('Y');
        } else if (value == '月') {
            startdate.setDateFormat('Y-m');
            enddate.setDateFormat('Y-m');
        } else if (value == '日') {
            startdate.setDateFormat('Y-m-d');
            enddate.setDateFormat('Y-m-d');
        }

    }
});