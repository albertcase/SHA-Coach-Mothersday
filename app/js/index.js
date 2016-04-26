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
            baseurl + '/images/logo.png',
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
                    Common.goGallerypage();
                });

                //write your message
                $('.btn-filltext').on('click',function(){
                    //ifplay,if not, go page pin-2,else go myphoto page
                    Api.isFollow(function(datafollow){
                        if(datafollow.status==1){
                            //    followed
                            Api.isLogin(function(data){
                                console.log(data);
                                if(data.status==1){
                                    //    logged
                                    if(data.msg.background){
                                        //has submit image
                                        Common.goPhotoPage(data.msg.id);
                                    }else{
                                        //not submit your image,go canvas page
                                        Common.goHomepage(data.msg.id);
                                    }
                                }else{
                                    alert(data.msg);
                                }

                            });
                        }else{
                            //not follow,show qrcode pop
                            $('.qrcode-pop').removeClass('hide');
                        }
                    });

                });


            }
        })
    }

    init();


});