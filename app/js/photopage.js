"use strict"
/*
 * Just for photo page
 * */
$(document).ready(function(){
    var qsid = Common.queryString('id'),
        uid;
    Api.isLogin(function(datalogin){
        if(datalogin.status==1){

            //loading the page content
            Api.getGreeting({
                id:qsid
            },function(data){
                console.log(data);
                var listdata = data.msg;
                //enableScroll = true;
                if(data.status==1){
                    console.log(111);
                    $('.photo-frame').attr('class','photo-frame photo photo-'+listdata.background);
                    $('.p-inner img').attr('src',listdata.image);
                    $('.leave-words').html(listdata.greeting);
                    $('.user-name').html(listdata.nickname);
                    $('.icon-good').html(listdata.ballot);
                    uid = listdata.id;
                }else{
                    //alert(data.msg);
                }
                //    logged
                if(listdata.background){
                    $('.btn-sprite').eq(0).removeClass('btn-joinplay').addClass('btn-gogallery');
                }else{
                    //not submit your image
                    $('.btn-sprite').eq(0).addClass('btn-joinplay').removeClass('btn-gogallery');
                }
            });

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

    //
    $('.btn-joinplay').on('click', function(){
        Api.isFollow(function(data){
            if(data.status==1){
                //    followed
                Common.goIndexpage(uid);
            }else{
                //not follow,show qrcode pop
                $('.qrcode-pop').removeClass('hide');
            }
        });
    });



});