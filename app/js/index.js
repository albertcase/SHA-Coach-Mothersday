"use strict"
/*
 * Just for photo page
 * */
$(document).ready(function(){

    function init(){
        //loading all the resourse, such as css,js,image
        var self = this;
        //    loading first
        $('.loading-wrap').addClass('show');
        var baseurl = ''+'/app';
        var imagesArray = [
            baseurl + '/images/loading-logo.png',
            baseurl + '/images/logo.png',
            baseurl + '/images/p1-1.png',
            baseurl + '/images/p1-t1.png',
            baseurl + '/images/p3-1.png',
            baseurl + '/images/p4-1.png',
            baseurl + '/images/qrcode-follow-text.png',
            baseurl + '/images/qrcode-follow.png',
            baseurl + '/images/share-tips.png',
            baseurl + '/images/share-tips.png',
            baseurl + '/images/btn-sprite.png',
            baseurl + '/images/coupon.png',
            baseurl + '/images/form-btn.png',
            baseurl + '/images/icon-sprite.png',
            baseurl + '/images/kv.png',
            baseurl + '/images/show-1.png',
            baseurl + '/images/show-2.png',
            baseurl + '/images/show-3.png',
            baseurl + '/images/show-4.png',
            baseurl + '/images/title.png'
        ];
        var i = 0;
        new preLoader(imagesArray, {
            onProgress: function(){

            },
            onComplete: function(){
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
                    Api.isFollow(function(datafollow){
                        if(datafollow.status==1){
                            //    followed
                            Api.isLogin(function(data){
                                if(data.status==1){
                                    //    logged
                                    if(data.msg.background){
                                        //has submit image
                                        Common.goPhotoPage(data.msg.id);
                                    }else{
                                        //not submit your image,go canvas page
                                        Common.goReloadHomePage();
                                    }
                                }else if(data.status==0){
                                    //not login
                                    Common.goIndexpage();
                                }else{
                                    Common.alertBox.add(data.msg);
                                }

                            });
                        }else{
                            //not follow,show qrcode pop
                            $('.qrcode-pop').removeClass('hide');
                        }
                    });

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
        })
    }

    init();


});