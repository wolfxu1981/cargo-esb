Ext.define('CargoESB.view.auth.LoginController',{
    extend: 'Ext.app.ViewController',
    alias: 'controller.authlogin',

    init: function() {
        this.callParent(arguments);
        this.lookup('form').setValues({
            username: 'norma.flores',
            password: 'wvyrEDvxI'
        });
    },

    onLoginTap: function() {
        var me = this,
            form = me.lookup('form'),
            values = form.getValues();

        form.clearErrors();

        Ext.Viewport.setMasked({ xtype: 'loadmask' });
        sessionStorage.setItem("user",values);
        Ext.Viewport.removeAll();
        Ext.Viewport.add([{xtype: 'mainview'}])
        Ext.Viewport.setMasked(false);
    }
})