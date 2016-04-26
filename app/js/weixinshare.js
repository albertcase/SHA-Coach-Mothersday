
function weixinshare(sharelink,successcallback){
    wx.ready(function() {
        wx.onMenuShareTimeline({
            title: '大神说出对妈妈的爱，赢取全新Saddle手袋！',
            link: sharelink,
            imgUrl: window.location.origin+'/app/images/kv.png',
            success: function () {
                successcallback();
            },
            cancel: function () {
            }
        });
        wx.onMenuShareAppMessage({
            title: '大神说出对妈妈的爱，赢取全新Saddle手袋！',
            desc: '大神说出对妈妈的爱，赢取全新Saddle手袋！',
            link: sharelink,
            imgUrl: window.location.origin+'/app/images/kv.png',
            type: '',
            dataUrl: '',
            success: function () {
                successcallback();
            },
            cancel: function () {
            }
        });

    });
};

$(document).ready(function(){
    var sharepath = 'http://coach-mom.samesamechina.com/';
    weixinshare(sharepath,function(){

    });

});