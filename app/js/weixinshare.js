function wxshare(sharepath){
    wx.ready(function(){
        wx.onMenuShareTimeline({
            title: '大声说出对妈妈的爱，赢取全新Saddle手袋！',
            link: sharepath,
            imgUrl: window.location.origin+'/app/images/kv.png',
            success:function(){
                _hmt.push(['_trackEvent', 'buttons', 'share', 'Share to Moments']);
            },
            cancel:function(){
            }
        });
        wx.onMenuShareAppMessage({
            title: 'COACH致爱母亲节',
            desc: '大声说出对妈妈的爱，赢取全新Saddle手袋！',
            link: sharepath,
            imgUrl: window.location.origin+'/app/images/kv.png',
            type: '',
            dataUrl: '',
            success:function(){
                _hmt.push(['_trackEvent', 'buttons', 'share', 'Share to friends']);
            },
            cancel:function(){
            }
        });

    });
}

$(document).ready(function(){

    var sharepath = 'http://coach-mom.samesamechina.com/';
    wxshare(sharepath);

});