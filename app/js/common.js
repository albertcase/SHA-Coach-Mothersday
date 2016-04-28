function gotoPin(i) {
	var $pin = $('.wrapper .pin');
	$pin.removeClass('current').eq(i).addClass('current');
};
$(document).ready(function(){
	$('body').on('touchstart','.btn-alert-ok', function(){
		Common.alertBox.remove();
	});
});

;(function(){
	var ua = navigator.userAgent.toLowerCase();
	var Common = {
		goIndexpage:function(id){
			//go index.tpl.php
			if(id){
				window.location.href='/index.html?id='+id;
			}else{
				window.location.href='/index.html';
			}
		},
		goReloadHomePage:function(id){
			if(id){
				window.location.href='/home?id='+id;
			}else{
				window.location.href='/home';
			}
		},
		goFirstPage:function(){
			gotoPin(0);
		},
		goWriteGreetingPage:function(){
			//home
			gotoPin(0);
		},
		goPhotoPage:function(id){
			if(id){
				window.location.href='/photo?id='+id;
			}else{
				window.location.href='/photo';
			}
		},
		goGallerypage:function(id){
			if(id){
				window.location.href='/gallery?id='+id;
			}else{
				window.location.href='/gallery';
			}
		},
		goMobilePage:function(){
			gotoPin(1);
		},
		goInfoPage:function(){
			gotoPin(2);
		},
		goCouponPage:function(){
			gotoPin(3);
		},
		isWx:function(){
			return (/micromessenger/.test(ua)) ? true:false;
		},
		queryString:function(name){

			var name,value,i;
			var str=location.href;
			var num=str.indexOf("?");
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
		alertBox:{
			add:function(msg){
				$('body').append('<div class="alertpop msgbox"><div class="inner"><div class="msg">'+msg+'</div><div class="btn-alert-ok">是</div></div></div>');
			},
			remove:function(){
				$('.alertpop').remove();
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