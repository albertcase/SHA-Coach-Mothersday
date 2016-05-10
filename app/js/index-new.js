"use strict"
/*
 * Just for photo page
 * */
$(document).ready(function(){

    function init(){
        //loading all the resourse, such as css,js,image
        var self = this;
        //remove the loading and show the first pin
        $('.preloading').remove(1000);

        Common.goFirstPage();
        //	go gallery page
        $('.btn-gogallery').on('click',function(e){
            _hmt.push(['_trackEvent', 'buttons', 'click', 'Gallery']);
            Common.goGallerypage();
        });

        //write your message
        $('.btn-filltext').on('click',function(){
            //ifplay,if not, go page pin-2,else go myphoto page
            _hmt.push(['_trackEvent', 'buttons', 'click', 'Play1']);
            Common.alertBox.add('活动已结束');

            //Api.isFollow(function(datafollow){
            //    if(datafollow.status==1){
            //        //    followed
            //        Api.isLogin(function(data){
            //            if(data.status==1){
            //                //    logged
            //                if(data.msg.background){
            //                    //has submit image
            //                    Common.goPhotoPage(data.msg.id);
            //                }else{
            //                    //not submit your image,go canvas page
            //                    Common.goReloadHomePage();
            //                }
            //            }else if(data.status==0){
            //                //not login
            //                Common.goIndexpage();
            //            }else{
            //                Common.alertBox.add(data.msg);
            //            }
            //
            //        });
            //    }else{
            //        //not follow,show qrcode pop
            //        $('.qrcode-pop').removeClass('hide');
            //    }
            //});

        });

        // show the policy terms
        $('.terms').on('click', function(){
            $('.terms-pop').removeClass('hide');
        });
        //    close pop
        $('.btn-close').on('click',function(){
            $('.terms-pop').addClass('hide');
        });
    }

    init();


});