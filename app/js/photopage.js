"use strict"
/*
 * Just for photo page
 * */
$(document).ready(function(){
    //var enableScroll = true;
    console.log('photo page');
    //Api.galleryList({
    //},function(data){
    //    //enableScroll = true;
    //    if(data.status ==1){
    //        var listData = data.msg.list;
    //        var listHtml = '';
    //    }else{
    //        alert(data.msg);
    //    }
    //
    //});

    $('.btn-like').on('click', function(){
        Api.ballot({
            id:''
        },function(data){
            console.log(data);
        });
    });


});