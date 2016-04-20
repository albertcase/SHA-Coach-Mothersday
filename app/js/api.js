/*All the api collection*/
API = {
    //{"status":1,"msg":{"id":"1","openid":"oKCDxjivJ92ky4dxLT8dt1jcXtn4","nickname":"nickname","headimgurl":"headimgurl","greeting":false,"background":false,"ballot":"1”}}
    isLogin:function(callback){
        $.ajax({
            url:'/api/islogin',
            type:'POST',
            dataType:'json',
            success:function(data){
                return callback(data);
            }
        });
    },
    // greeting  background
    writeGreeting:function(obj,callback){
        $.ajax({
            url:'/api/islogin',
            type:'POST',
            dataType:'json',
            data:obj,
            success:function(data){
                return callback(data);
            }
        });
    },
    //id
    ballot:function(obj,callback){
        $.ajax({
            url:'/api/ballot',
            type:'POST',
            dataType:'json',
            data:obj,
            success:function(data){
                return callback(data);
            }
        });
    },
    //mobile
    sendVerifycode:function(obj,callback){
        $.ajax({
            url:'/api/sendverifycode',
            type:'POST',
            dataType:'json',
            data:obj,
            success:function(data){
                return callback(data);
            }
        });
    },
    //mobile verifycode
    customerBind:function(obj,callback){
        $.ajax({
            url:'/api/customerbind',
            type:'POST',
            dataType:'json',
            data:obj,
            success:function(data){
                return callback(data);
            }
        });
    },
    // firstname lastname mobile email gender openid
    customerRegister:function(obj,callback){
        $.ajax({
            url:'/api/customerregister',
            type:'POST',
            dataType:'json',
            data:obj,
            success:function(data){
                return callback(data);
            }
        });
    }

};