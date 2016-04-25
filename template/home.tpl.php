<!DOCTYPE html>
<html>
<head lang="en">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title>Coach-母亲节</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui" >
    <meta name="msapplication-tap-highlight" content="no">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <!-- inject:css -->
    <link rel="stylesheet" href="/app/css/style.css">
    <!-- endinject -->

    <!-- inject:js -->
    <script src="/app/js/widget/widget_home.js"></script>
    <!-- endinject -->
</head>
<body>
<!--preloading-->
<div class="preloading">
    <div class="inner">
        <div class="l-logo">
            <img src="../app/images/loading-logo.png" alt=""/>
        </div>
        <div class="icon-loading">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <p class="des-loading">
            目前涌入的小伙伴过多<br>
            页面正在跳转中，请耐心等待。
        </p>
    </div>
</div>
<!--start content-->
<div class="wrapper">
    <section class="pin pin-1">
        <div class="slogan">
            <img src="../app/images/p1-1.png" alt=""/>
        </div>
        <div class="kv">
            <img src="../app/images/kv.png" alt=""/>
        </div>
        <div class="p1-t1">
            <img src="../app/images/p1-t1.png" alt=""/>
        </div>
        <div class="btn-sprite btn-gogallery"></div>
        <div class="btn-sprite btn-filltext"></div>
    </section>
    <!-- photopage-->
    <section class="pin pin-2">
        <div class="slogan">
            <img src="../app/images/p1-1.png" alt=""/>
        </div>
        <div class="photo-wrap">
            <div class="photo-frame photo photo-1">
                <div class="block-photo">
                    <div class="p-inner">
                        <div class="btn-camera">
                            <span class="icon"></span>
                            拍摄或上传一张照片
                        </div>
                        <input type="file" accept="image/*" id="capture" capture="camera">
                        <canvas id="c"></canvas>
                    </div>
                </div>
                <textarea name="" id="input-tomom" class="leave-words" cols="20" rows="2"  maxlength="50" >
世界上最好的妈妈
值得世界上最好的礼物
妈妈，祝你母亲节快乐
我爱你
                </textarea>
            </div>
        </div>
        <div class="buttons">
            <div class="btn-sprite btn-back"></div>
            <div class="btn-sprite btn-submit"></div>
        </div>
    </section>
    <!-- mobile validate-->
    <section class="pin pin-3">
        <div class="logo">
            <img src="../app/images/logo.png" alt=""/>
        </div>
        <hr class="line-1"/>
        <div class="info">
            <img src="../app/images/p3-1.png" alt=""/>
        </div>
        <hr class="line-2"/>
        <form action="" class="form-validate">
            <div class="input-box input-box-phone">
                <label for="" class="file-title fill-phone"></label>
                <input type="tel" class="input-phone" name="phone"/>
                <div class="btn-getkeycode form-btn"></div>
            </div>
            <div class="input-box input-box-keycode">
                <label for="" class="file-title fill-keycode"></label>
                <input type="text" class="input-keycode"/>
            </div>
            <div class="form-btn-submit form-btn"></div>
        </form>
    </section>
    <!-- leave information -->
    <section class="pin pin-4">
        <div class="logo">
            <img src="../app/images/logo.png" alt=""/>
        </div>
        <hr class="line-1"/>
        <div class="info">
            <img src="../app/images/p4-1.png" alt=""/>
        </div>
        <hr class="line-2"/>
        <form action="" class="form-info">
            <label for="" class="file-title"></label>
            <div class="input-box input-box-surname required">
                <label for="" class="label-surname">姓 <span class="icon-require">*</span> </label>
                <input type="text" class="input-surname" name="surname" />
            </div>
            <div class="input-box input-box-name">
                <label for="" class="label-name">名<span class="icon-require">*</span></label>
                <input type="text" class="input-name" name="name"/>
            </div>
            <div class="input-box input-box-gender">
                <label for="" class="label-gender">性别<span class="icon-require">*</span></label>
                <!--<input type="radio" class="input-gender" name="gender" value="男"/>-->
                <div class="radio-collection">
                    <label class="radio-inline radio-inline-1 actived">
                        <input type="radio" name="gender" value="男" checked>男
                    </label>
                    <label class="radio-inline radio-inline-2">
                        <input type="radio" name="gender" value="女">女
                    </label>
                </div>
                <!--<input type="radio" class="input-gender" name="gender" value="女"/>-->
            </div>
            <div class="input-box input-box-mobile">
                <label for="" class="label-mobile">手机 <span class="icon-require">*</span></label>
                <input type="text" class="input-mobile" name="mobile" disabled/>
            </div>
            <div class="input-box input-box-email">
                <label for="" class="label-email">邮箱 <span class="icon-require">*</span></label>
                <input type="text" class="input-email-pre" name="email-pre"/>
                @
                <input type="text" class="input-email-after" name="email-after"/>
            </div>
            <div class="form-btn-submit form-btn"></div>
        </form>
        <div class="terms">
            提交即代表您同意COACH的<a href="#">隐私协议</a>
        </div>
    </section>
    <!-- coupon page-->
    <section class="pin pin-5">
        <div class="coupon" href="#">
            <img src="../app/images/coupon.png" alt=""/>
        </div>
    </section>
    <!-- popup share-pop-->
    <div class="popup share-pop hide">
        <div class="share-1">
            <img src="../app/images/share-tips.png" alt=""/>
        </div>
    </div>
    <!-- popup-->
    <div class="popup qrcode-pop hide">
        <div class="inner">
            <div class="qrcode">
                <img src="../app/images/qrcode-follow.png" alt=""/>
            </div>
            <div class="qrcode-text">
                <img src="../app/images/qrcode-follow-text.png" alt=""/>
            </div>
        </div>
    </div>


</div>
</body>
</html>