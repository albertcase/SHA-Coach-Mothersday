function gotoPin(i) {
	var $pin = $('.wrapper .pin');
	$pin.removeClass('current').eq(i).addClass('current');
}

;(function(){
	var ua = navigator.userAgent.toLowerCase();
	var Common = {
		goHomepage:function(){
			gotoPin(0);
		},
		goReloadHomePage:function(){
			window.location.href='home.html';
		},
		goWriteGreetingPage:function(){
			gotoPin(1);
		},
		goPhotoPage:function(){
			window.location.href='photo.html';
		},
		goGallerypage:function(){
			window.location.href='gallery.html';
		},
		goMobilePage:function(){
			gotoPin(2);
		},
		goInfoPage:function(){
			gotoPin(3);
		},
		goCouponPage:function(){
			gotoPin(4);
		},
		isWx:function(){
			return (/micromessenger/.test(ua)) ? true:false;
		},
		queryString:function(name){
			//var curUrl = window.location.search;
			var name,value,i;
			var str=location.href;
			var num=str.indexOf("?")
			str=str.substr(num+1);
			var arrtmp=str.split("&");
			for(i=0;i < arrtmp.length;i++) {
				num=arrtmp[i].indexOf("=");
				if(num>0)
				{
					name=arrtmp[i].substring(0,num);
					value=arrtmp[i].substr(num+1);
					return value;
				}
			}

		},
		msgBox:{
			add:function(msg,long){
				if(long){
					$('body').append('<div class="ajaxpop msgbox minwidthbox"><div class="loading">'+msg+'</div></div>');
				}else{
					$('body').append('<div class="ajaxpop msgbox"><div class="loading"><div class="icon-loading"></div>'+msg+'</div></div>');
				}
			},
			remove:function(){
				$('.ajaxpop').remove();
			}
		},
		errorMsg : {
			add:function(ele,msg){
				if(!ele.find('.error').length){
					ele.append('<div class="error">'+msg+'</div>');
				}else{
					ele.find('.error').html(msg);
				}
			},
			remove:function(ele){
				if(ele.find('.error').length){
					ele.find('.error').remove();
				}
			}
		},


	};

	this.Common = Common;

}).call(this);
