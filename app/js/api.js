/*All the api collection*/
API = {
    //{"status":1,"msg":{"id":"1","openid":"oKCDxjivJ92ky4dxLT8dt1jcXtn4","nickname":"nickname","headimgurl":"headimgurl","greeting":false,"background":false,"ballot":"1”}}
    //api/status
    isFollow:function(callback){
        $.ajax({
            url:'/api/status',
            type:'POST',
            dataType:'json',
            success:function(data){
                return callback(data);
            }
        });
    },
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
            url:'/api/greeting',
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

//test api
(function(){
    //API.isFollow(function(data){
    //    console.log(data);
    //});

    //API.writeGreeting({greeting:'happy',background:2},function(data){
    //    console.log(data);
    //});

    //API.ballot({id:'123'},function(data){
    //    console.log(data);
    //});

    //API.sendVerifycode({mobile:'18502130583'},function(data){
    //    console.log(data);
    //});

    //API.customerBind({mobile:'18502130583',verifycode:'76j8'},function(data){
    //    console.log(data);
    //});

    //API.customerRegister({
    //    firstname:'zhang',
    //    lastname:'ya',
    //    mobile :'18502130583',
    //    email:'1@qq.com',
    //    gender:'女',
    //    openid:'123',
    //},
    //function(data){
    //    console.log(data);
    //});

})();