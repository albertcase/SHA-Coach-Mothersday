"use strict"
/*
 * Just for photo page
 * */
$(document).ready(function(){
    var qsid = Common.queryString('id'),
        uid;
    Api.isLogin(function(data){
        if(data.status==1){

            //loading the page content
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
                    uid = data.uid;
                }else{
                    //alert(data.msg);
                }

            });
            //    logged
            if(data.msg.background){
                $('.btn-sprite').eq(0).removeClass('btn-joinplay').addClass('btn-gogallery');
            }else{
                //not submit your image
                $('.btn-sprite').eq(0).addClass('btn-joinplay').removeClass('btn-gogallery');
            }
        }else{
            //alert(data.msg);
        }
    });

    //like
    var enabled = true;
    $('.btn-like').on('click', function(){
        if(!enabled) return;
        enabled = false;
        Api.ballot({
            id:uid
        },function(data){
            enabled = true;
            if(data.status==1){
                var voteNum = parseInt($('.icon-good').html());
                $('.icon-good').html(voteNum++);
            }else{
                alert(data.msg);
            }
        });
    });


});