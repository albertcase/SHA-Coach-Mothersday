"use strict"
/*
 * Just for photo page
 * */
$(document).ready(function(){
    //var enableScroll = true;
    console.log('photo page');
    var qsid = Common.queryString('id'),
        imgid;
    Api.getGreeting({
        id:qsid
    },function(data){
        //enableScroll = true;
        if(data.status ==1){
            var data = data.msg;
            var Html = '';
            $('.photo-frame').attr('class','photo-frame photo photo-'+data.background);
            $('.p-inner img').attr('src',data.image);
            $('.leave-words').html(data.greeting);
            $('.user-name').html(data.nickname);
            $('.icon-good').html(data.ballot);
            imgid = data.id;
        }else{
            alert(data.msg);
        }

    });

    $('.btn-like').on('click', function(){
        Api.ballot({
            id:imgid
        },function(data){
            console.log(data);
        });
    });


});