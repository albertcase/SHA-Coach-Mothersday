function wxshare(sharepath){
    wx.ready(function(){
        wx.onMenuShareTimeline({
            title: '母亲节，为妈妈赢取全新Saddle手袋',
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
            desc: '母亲节，为妈妈赢取全新Saddle手袋',
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