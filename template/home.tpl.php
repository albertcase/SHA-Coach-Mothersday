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

    <script src="http://coach.samesamechina.com/api/v1/js/c102fde9-634a-4c9a-8936-6d8a0faf156e/wechat"></script>
    <!--<script src="http://coach.samesamechina.com/api/v1/js/c102fde9-634a-4c9a-8936-6d8a0faf156e/wechat"></script>-->
    <script>
        var _hmt = _hmt || [];
        (function() {
            var hm = document.createElement("script");
            hm.src = "//hm.baidu.com/hm.js?9c84d6099c01177fed7ca6656361f139";
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(hm, s);
        })();
    </script>

    <!-- inject:js -->
    <script src="/app/js/widget/widget_home.js"></script>
    <!-- endinject -->
</head>
<body>
<!--start content-->
<div class="wrapper">
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
            <div class="btn-share">
                朋友圈分享
            </div>
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
    <!-- popup terms-pop-->
    <div class="popup terms-pop hide">
        <div class="inner">
            <div class="btn-close"></div>
            <h3 class="title">
                隐私协议
            </h3>
            <div class="content">
                <p>Coach十分重视您对我们品牌的信任。为了给您带来更满意的购物体验，也为了更好地与您展开就我们产品和服务的沟通，当您浏览我们的网站 www.coach.com（以下简称"网站"）时，我们会收集一定的信息。本隐私政策旨在帮助您理解我们在您浏览网站时所收集的信息种类、用途以及我们相应的信息保护措施。本隐私政策仅针对我们通过 www.coach.com所收集的信息。</p>
                <p>如果您使用并向我们的网站递交信息，即说明您已同意我们依据本政策中所定义的目的和用途收集、使用或披露收集到的信息。有关您使用我们网站的其他条款和条件，请参阅我们的法律声明（点此进入）</p>
                <p>
                    我们在线收集的信息
                </p>

                <h4>
                    个人信息
                </h4>
                <p>
                    本隐私政策所指的"个人信息"是指任何可以确定个人身份的信息，包括姓名、地址、电话号码、电子邮件，以及提供商品或服务时附带的其他信息。Coach仅会在您自愿提供的情况下（例如您在我们网站进行注册、参加竞赛、参与调研、向我们提出评论或问题、索取目录或订阅我们产品与服务的更新邮件等）收集您的个人信息。
                </p>
                <h4>浏览信息；Cookie</h4>
                <p>
                    当您访问我们的网站时，我们的服务器会自动识别某些关于您的非个人可识别信息，如您的域名、互联网接入商、IP地址、浏览器语言等。我们的网站还利用浏览器的cookie信息，并将其作为您电脑的唯一标识。从cookie中收集到的信息可使我们为您提供更优质的客户服务，并给我们的网站带来诸多方面的改进，其中包括判断您是否曾经访问过我们的网站以及您曾经浏览了哪些页面等。我们还可能利用cookie和/或一种被称为"网络信标"(Clear GIFS)的技术，来帮助确认您是否收到我们的邮件以及您的回应，从而为您提供更具个性化的体验。请注意，如果cookie关闭，您可能无法正常打开我们网站中的某些页面。请参阅您所使用的浏览器的帮助文档以获得更多如何开启或关闭cookie的信息。
                </p>
                <p>我们可能通过第三方广告公司在我们的网站或其他您可能访问的网站上投放Coach的广告。为做到这一点，这些公司可能会在页面中设置匿名的cookie信息以及动作标识（亦称单点图或网络信标）来衡量广告的效果以及识别您对我们网站或其他网站的访问。这些指定的广告公司也会提供我们相关信息，以满足我们市场营销活动所需。</p>
                <p>此外，Coach还选择了一家名为Omniture的公司协助我们掌握您对我们网站的使用情况。Omniture可能会在您的计算机上安置cookie，以获取您在我们网站上的浏览以及购买活动的信息，帮助我们为您打造更个性化的购物体验。</p>
                <p>我们如何使用您的信息</p>
                <p>Coach会将网站收集的个人信息用于以下目的：<br>
                    某些出于自愿的特定目的（例如及时获得特惠信息，新产品信息、购买产品、处理退货或是为您提供礼物提醒备忘服务等或是为您提供礼物提醒备忘服务等）；<br>
                    用于了解您的需求和偏好；<br>
                    用于开发、推广、销售或提供产品和服务；<br>
                    用于调研和评估；<br>
                    用于管理并发展我们的业务和经营及管理客户等；<br>
                    用于探测并保护Coach和其他第三方免受疏忽、欺诈、盗窃及其他非法行为所导致的损害；<br>
                    任何法律、监管规定、程序或条款所许可，并应遵照执行的要求；<br>
                    如果您在线提交了简历，您所提供的信息将只被用于应聘者的评估以及就可能的雇佣事宜与您取得联系。<br>
                    为向您提供更好的服务，我们可能会将您通过网站所提供的信息与您通过零售商店等其他途径所提供的信息整理合并，此外我们还将整合由第三方提供的信息，包括人口统计信息以及公共信息等。</p>
                <p>我们将如何共享您的信息</p>
                <p>Coach可能会与国内外分支机构或关联公司共享我们从网站收集的关于您的信息。</p>
                <p>Coach也可能将您的信息与为我们提供服务的指定供应商共享，这些服务包括处理支付业务、提供电子在线投资者信息、监控网站运行状况、提供网站内容、帮助维护客户数据库、管理及提供电子邮件，手机短信及直邮业务、调查或竞赛，以及管理维护应聘信息等。这些第三方服务商可能会接入、存储并处理您的个人信息，以便代表我们在美国或美国之外的其他国家为您提供服务。除提供合同所规定的服务外，我们的服务供应商无权将您的个人信息用于其他任何目的。</p>
                <p>为对包括执法要求在内的司法程序做出回应，以及为保障网站用户、Coach和其关联公司与其他第三方的安全、财产或法律权益需要，按照法律规定，我们还必须保留披露您个人信息的权利。</p>
                <p>为对包括执法要求在内的司法程序做出回应，以及为保障网站用户、Coach和其关联公司与其他第三方的安全、财产或法律权益需要，按照法律规定，我们还必须保留披露您个人信息的权利。</p>
                <p>万一因兼并、重组或破产清算而导致Coach或其几乎所有资产被其他公司收购，Coach所拥有的客户信息也将同样作为资产转移给新公司。除非经由您同意，否则您的个人信息仍将受制于原先的隐私政策。</p>
                <p>儿童的隐私</p>
                <p>Coach非常关注儿童使用互联网时的安全问题。我们不会有意要求或在线收集十三岁以下儿童的个人可识别信息。</p>
                <p>安全
                    Coach采用诸多安全措施，以保护您提交给我们网站的个人信息的安全。例如，您提供任何订单信息时，我们将采用安全套接字层(SSL)技术，该技术是一种加密工具，为信息在互联网传递时提供了安全保障。此外，在网站的维护中，我们还采用了防火墙技术、密码控制以及其他各种技术上和程序上的安全手段。虽然我们已经为网站实施了上述安全措施，但是要达到100%的安全是不可能的，对此我们也希望您能意识到。</p>
                <p>管理您的个人信息
                    为使我们能更好地为您服务，我们希望您能定期检查并更新您的个人信息。
                    Coach会根据您的要求提供一份我们记录的关于您个人信息的汇总。您也可以要求Coach更正任何您的个人信息，或将任何信息从营销数据库中移除。此外您还可以要求Coach删除您部分或全部个人信息。</p>
                <p>如您有任何上述需求，请联系任意一家Coach商店的经理，或者发送邮件至contactus@coach.com。<br>
                    当您联系我们时，请务必提供我们您确切的电子邮件地址、姓名、邮寄地址和/或电话号码等信息，以便我们能正确处理您的请求。<br>
                    为使我们能够通过网站处理您尚未结算的交易、跟进某项请求、解决争议或出于其他类似原因，在您提出任何请求后，您的部分信息可能仍会被保存一段时间。此外，由于财务、法律或技术等方面的原因，我们还可能将部分个人信息作为备份文件储存。<br>
                    本政策的更新，通知 ：Coach保留在任何时候自行变更、修改、添加或删除本隐私政策中任意部分的权利。您应定期访问本页面以检查更新。在本隐私政策的变更发布后，如您仍继续使用本网站，我们将认为您已同意我们所作出的更改。万一我们认为我们拥有或控制的您的个人信息已处于危险之中，我们会设法通知您这一情况。如有必要进行通知，且我们有您的电子邮件地址，我们将以电子邮件的形式通知您。</p>
                <p>生效日期
                    本政策自2009年3月19日起生效。
                    本隐私权保护政策的适用范围？</p>
                <p>本隐私保护政策适用Coach所收集的与其所提供的服务有关的任何个人信息。个人信息既包括我们通过 www.coach.com、第三方平台之上的品牌页面、以及Coach或其代表所运营的网站或第三方平台所访问或使用的程序等线上渠道(以上统称“Coach网站”)所收集的个人信息。所有有关使用Coach网站的条款和条件中均应当包括作为其组成部分的本隐私保护政策。请参阅下述您的隐私权及如何联系我们。</p>
                <p>本隐私保护政策不适用于：
                    我们没有控制权的第三方网站、平台和/或应用程序（以下简称为“第三方网站”）所收集的信息；您通过Coach网站的链接所访问的第三方网站所收集的信息；或我们可能在第三方网站上主办或参与的广告通栏、抽奖以及其他广告或促销。该等第三方网站可能有其自己的隐私保护政策以及使用条款与条件。我们鼓励您在使用该等第三方网站之前仔细阅读该等政策和条款。</p>
            </div>
        </div>
    </div>


</div>
</body>
</html>