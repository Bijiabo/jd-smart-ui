define(function(){
    var APP = {
        Device_Id: null,
        Feed_Id: null,
        Trans_Data: {},
        Device_Status: null,
        totalCount:0,
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
                console.log("get state =======> ", res);
                if(res){
                    console.log(res)
                    _.render();
                }
            })
        },
        bindPushData:function(){
            var _ = this;
            pJD.bindPushData(function(res){
                console.log("get state =======> ", res);
                if(res.status === 'on'){
                    console.log('在线');
                }else{
                    console.log('不在线');
                }
                _.render()
            })
        },
        render:function(){
            // bla bla bla ....~~~~
        }
    }
    return APP;
})
    