define(function(){
    var APP = {
        Device_Id: null,
        Feed_Id: null,
        Trans_Data: {},
        Device_Status: null,
        /**
         * 初始化
         */
        init:function(){
            var _ = this;
            JDSMART.ready(function() {
                _.getDeviceStatus()
                _.bindPushData()
            });
        },
        getDeviceStatus:function(){
            var _ = this;
            pJD.getDeviceStatus(function(res){
                if(res){
                    console.log(res)
                    _.render();
                }
            })
        },
        bindPushData:function(){
            var _ = this;
            pJD.bindPushData(function(res){
                console.log(res)
                _.render()
            })
        },
        render:function(){
            // bla bla bla ....~~~~
        }
    }
    return APP;
})
    