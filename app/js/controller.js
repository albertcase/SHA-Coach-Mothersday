//redpacket
;(function(){
    'use strict';
    var controller = function(){
        this.curPage = 0;
        this.selectedColor = '';

        //init the canvas
        this.canvas = new fabric.Canvas('c');
        this.canvas.setWidth($('.block-photo .p-inner').width());
        this.canvas.setHeight($('.block-photo .p-inner').height());
        this.curBackground=1;
    };
    controller.prototype = {
        init:function(){
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
                    //Api.isFollow(function(data){
                    //    console.log(data);
                    //    if(!data.status){
                    //        $('.qrcode-pop').removeClass('hide');
                    //    }
                    //});
                    //Common.goHomepage();
                    //Common.goMobilePage();

                    //test now
                    self.LoadingGreetingPage();

                    //	go gallery page
                    $('.btn-gogallery').on('click',function(e){
                        Common.goGallerypage();
                    });

                    //write your message
                    $('.btn-filltext').on('click',function(){
                        //ifplay,if not, go page pin-2,else go myphoto page
                        Api.isLogin(function(data){
                            console.log(data);
                            if(data.status==1){
                                 //    logged
                                if(data.msg.background){
                                    Common.goMyPhotoPage();
                                }else{
                                    self.LoadingGreetingPage();
                                }
                            }else{
                                alert(data.msg);
                            }

                        });
                    });

                    /*
                    *  Get Key code
                    * */
                    self.SubmitKeycodeForm();
                    self.randomGreetingBg();

                    /*Submit the register information*/
                    self.SubmitInformationForm();

                    var labelRadio = $('.form-info .radio-inline');
                        //select the radio
                    labelRadio.on('click',function(){
                        labelRadio.removeClass('actived');
                        $(this).addClass('actived');
                    });

                }
            })
        },
        randomGreetingBg:function(){
            var self = this;
            var bgName =  Math.round(Math.random() * (4 - 1) + 1);
            $('.photo-frame').attr('class','photo-frame photo photo-'+bgName);
            this.curBackground = bgName;
        },
        LoadingGreetingPage:function(){
            var self = this,
                canvas = self.canvas,
                words = $('#input-tomom').val();
            /*
             *  Input your words and then sent them to server
             *  submit words and photo number
             *  If submit success, show the share-pop
             */
            Common.goWriteGreetingPage();
            self.randomGreetingBg();
            $('.btn-camera').on('click', function(){
                $('#capture').trigger('click');
            });
            //input file change
            $('#capture').on('change', function(e){
                var canvaswidth = $('.block-photo').width();;
                self.uploadPhoto(e.target,canvaswidth)
            });
            //submit your message
            var enable = true;
            $('.pin-2 .btn-submit').on('click', function(){

                /*
                 *  Input your words and then sent them to server
                 *  submit words and photo number
                 *  If submit success, show the share-pop
                 */
                if(!enable) return;
                enable = false;

                //render new picture
                var renderPic = canvas.toDataURL({
                    format: 'png',
                    quality: 1
                });
                $('.photo-wrap').append('<img src="'+renderPic+'">');;
                //    submit writeGreeting
                Api.writeGreeting({
                    greeting:words,
                    background:self.curBackground,
                    image:renderPic
                },function(data){
                    console.log(data);
                    enable = true;
                    if(data.status==1){
                        //    success
                        $('.share-pop').removeClass('hide');
                    }else{
                        alert(data.msg);
                    }

                });
            });

            $('.pin-2 .btn-back').on('click', function(){
                Common.goHomepage();
            });
        },
        uploadPhoto:function(ele,canvaswidth){
            var self = this;

            lrz(ele.files[0],{width:canvaswidth*2},{quality:1})
                .then(function (rst) {
                    // 处理成功会执行
                    //step=1;
                    fabric.Image.fromURL(rst.base64,function(imgobj){
                        imgobj.scale(0.5);
                        imgobj.set({
                            selectable:true,
                            //hasControls:false,
                            //hasBorders:false
                        });
                        self.canvas.add(imgobj);

                    });
                    $('.btn-camera').addClass('hide');
                })
                .catch(function (err) {
                    // 处理失败会执行
                })
                .always(function () {
                    // 不管是成功失败，都会执行
                });

        },
        MobileValidate:function(){
            var validate = true,
                inputMobile = $('.form-validate .input-phone');
            if(!inputMobile.val()){
                Common.errorMsg.add(inputMobile.parent(),'手机号码不能为空');
                validate = false;
            }else{
                var reg=/^1\d{10}$/;
                if(!(reg.test(inputMobile.val()))){
                    validate = false;
                    Common.errorMsg.add(inputMobile.parent(),'手机号格式错误，请重新输入');
                }else{
                    Common.errorMsg.remove(inputMobile.parent());
                }
            }
            if(validate){
                return true;
            }else{
                return false;
            }
        },
        FormKeycodeValidate:function(){
            var validate = true,
            inputMobile = $('.form-validate .input-phone'),
            inputKeyCode = $('.form-validate .input-keycode');
            if(!inputMobile.val()){
                Common.errorMsg.add(inputMobile.parent(),'手机号码不能为空');
                validate = false;
            }else{
                var reg=/^1\d{10}$/;
                if(!(reg.test(inputMobile.val()))){
                    validate = false;
                    Common.errorMsg.add(inputMobile.parent(),'手机号格式错误，请重新输入');
                }else{
                    Common.errorMsg.remove(inputMobile.parent());
                }
            }
            //for keycode
            if(!inputKeyCode.val()){
                Common.errorMsg.add(inputKeyCode.parent(),'验证码不能为空');
                validate = false;
            }else{
                Common.errorMsg.remove(inputKeyCode.parent());
            }

            if(validate){
                return true;
            }else{
                return false;
            }
        },
        FormInforValidate:function(){
            var validate = true,
                inputSurname = $('.form-info .input-surname'),
                inputName = $('.form-info .input-name'),
                radioGender =$("input[type='radio'][name='gender']:checked"),
                inputMobile = $('.form-info .input-mobile'),
                inputEmailPrev = $('.form-info .input-email-pre'),
                inputEmailAfter = $('.form-info .input-email-after');

            //姓
            if(!inputSurname.val()){
                Common.errorMsg.add(inputSurname.parent(),'姓不能为空');
                validate = false;
            }else{
                Common.errorMsg.remove(inputSurname.parent());
            }
            //名
            if(!inputName.val()){
                Common.errorMsg.add(inputName.parent(),'名不能为空');
                validate = false;
            }else{
                Common.errorMsg.remove(inputName.parent());
            }

            //邮箱
            if(!inputEmailPrev.val() || !inputEmailAfter.val()){
                Common.errorMsg.add(inputEmailPrev.parent(),'邮箱不能为空');
                validate = false;
            }else{
                Common.errorMsg.remove(inputEmailPrev.parent());
            }

            if(validate){
                return true;
            }else{
                return false;
            }
        },
        SubmitKeycodeForm:function(){
            var self = this;

            /*
            *click get keycode button, validate mobile first and then connect api to sent user message
            */
            $('.btn-getkeycode').on('click',function(e){
                e.preventDefault();
                if($('.countdown').length>0) return;
                if(self.MobileValidate()){
                    //    start to get keycode
                    console.log('validate phone number');
                    var mobile = $('.input-phone').val();
                    Api.sendVerifycode({
                        mobile:mobile
                    },function(data){

                    });
                    //self.countDown();
                    //var xhr = $.ajax({
                    //    type:'POST',
                    //    url:'/api/check',
                    //    data:{mobile:mobile},
                    //    dataType:'json',
                    //    success:function(data){
                    //        console.log(data);
                    //        //status:1 success
                    //        //0,12 msg
                    //        if(data.status==1){
                    //            console.log('短信发送成功');
                    //        }else{
                    //            alert(data.msg);
                    //        }
                    //    }
                    //});
                };
            });

            /*
             * Submit the Form, so we need FormKeycodeValidate first and then api
             */
            var enableSubmit = true;
            $('.form-validate .form-btn-submit').on('click',function(){
                if(self.FormKeycodeValidate()){
                    if(!enableSubmit) return;
                    enableSubmit = false;
                    //    start to get keycode
                    var phonenumber = $('.input-phone').val();
                    var keycode = $('.input-keycode').val();
                    console.log(phonenumber+'phonenumber'+keycode);
                    Common.msgBox('loading...');
                    var xhr_submit = $.ajax({
                        type:'POST',
                        url:'/api/submit',
                        data:{mobile:phonenumber,code:keycode},
                        dataType:'json',
                        success:function(data){
                            enableSubmit = true;
                            $('.ajaxpop').remove();
                            console.log('do something...');
                        }
                    });
                };
            });
            //show the privacy pop
            $('.privacy-term').on('click',function(){
                $('.term-pop').removeClass('hide').addClass('animate fade');
            });

        //    close the pop
            self.closePop();
            self.toMoneyPage();
        },
        SubmitInformationForm:function(){
            /*
            * Submit the register information form
            * */
            var self = this;
            $('.form-info .form-btn-submit').on('click',function(){
                if(self.FormInforValidate()){
                    console.log('validate success');
                }
            });

        },
        countDown:function(){
            var countdownTime = 59;
            var countdownline = setInterval(function(){
                countdownTime--;
                $('.btn-getkeycode').addClass('countdown').html(countdownTime);
                if(countdownTime<=0){
                    clearInterval(countdownline);
                    $('.btn-getkeycode').removeClass('countdown').html('');
                }
            },1000);


        },
        closePop:function(){
            $('.btn-close').on('click', function(){
                $(this).parent().addClass('hide');
            })
        },
        toMoneyPage:function(){
            var self = this;
            //    close the pop
            self.closePop();
            $('.btn-get').on('click', function(){
               $('.qrcode-pop').removeClass('hide').addClass('animate fade');
            });
            $('.btn-share').on('click',function(){
                $('.share-pop').removeClass('hide').addClass('animate fade');
            });
        }


    };

    if (typeof define === 'function' && define.amd){
        // we have an AMD loader.
        define(function(){
            return controller;
        });
    }
    else {
        this.controller = controller;
    }


}).call(this);

$(document).ready(function($){
    //load for home page
    var redpacket = new controller();
    redpacket.init();
});