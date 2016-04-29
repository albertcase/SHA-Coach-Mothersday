"use strict"
/*
* Just for gallery page
* */
$(document).ready(function(){
	var pagenum=1;
	var enableScroll = true,
		totalPage;

	Api.galleryList({
		nowpage:pagenum,
		rowcount:6
	},function(data){
		enableScroll = true;
		if(data.status ==1){
			var listData = data.msg.list;
			var listHtml = '';
			totalPage = parseInt(data.msg.totalpage);
			for(var i=0;i<listData.length;i++){
				listHtml = listHtml+'<li class="item">'+
					'<div class="top-banner">'+
					'<span class="user-name">'+listData[i].nickname+'</span>'+
					'<span class="icon-good">'+listData[i].ballot+'</span>'+
					'</div>'+
					'<div class="photo-wrap">'+
					'<div class="photo-frame photo photo-1">'+
					'<div class="block-photo">'+
					'<div class="p-inner">'+
					'<img src="'+listData[i].image+'" alt=""/>'+
					'</div>'+
					'</div>'+
					'<div class="leave-words writing-words">'+listData[i].greeting+
					'</div>'+
					'</div>'+
					'</div>'+
					'</li>'
			}
			$('.gallery-list').append(listHtml);
		}else if(data.status==0){
			//not login
			Common.goIndexpage();
		}else{
			Common.alertBox.add(data.msg);
		}

	});


	$(window).on('scroll', function(){
		if($(document).height()-$(window).height() <= $(window).scrollTop()+100){
			if(!enableScroll) return;
			enableScroll = false;
			pagenum++;
			if(pagenum>totalPage) return;
			Api.galleryList({
				nowpage:pagenum,
				rowcount:6
			},function(data){
				enableScroll = true;
				if(data.status ==1){
					var listData = data.msg.list;
					var listHtml = '';
					for(var i=0;i<listData.length;i++){
						listHtml = '<li class="item">'+
							'<div class="top-banner">'+
							'<span class="user-name">'+listData[i].nickname+'</span>'+
							'<span class="icon-good">'+listData[i].ballot+'</span>'+
							'</div>'+
							'<div class="photo-wrap">'+
							'<div class="photo-frame photo photo-'+ listData[i].background +'">'+
							'<div class="block-photo">'+
							'<div class="p-inner">'+
							'<img src='+listData[i].image+' alt=""/>'+
							'</div>'+
							'</div>'+
							'<div class="leave-words writing-words">'+listData[i].greeting+
							'</div>'+
							'</div>'+
							'</div>'+
							'</li>'
					}
					$('.gallery-list').append(listHtml);
				}else if(data.status==0){
					//not login
					Common.goIndexpage();
				}else{
					Common.alertBox.add(data.msg);
				}

			});
		}
	});


});