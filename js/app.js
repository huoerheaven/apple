$(function(){
	//点击查询
$('.nav .search').on('click',function(){
	$('body').css({'overflow-Y':'hidden'});
	$('.search-box .shoula').removeClass("active")
	$(".nav").addClass('active')
	$('.search-box').addClass('active')
	if(parseInt($(".nav").innerWidth())<=768){
		$('.nav-phone .logo').animate({top:-50},500)
	}

})
//点击查询完的X
$(".nav .chahao").on('click',function(){
	$('body').css({'overflow-Y':'auto'});
	$(".nav").removeClass('active')
	$('.search-box').removeClass('active')
	$('#zhegai').attr('checked',false);
})
$(".heisezhegai").on('click',function(){
	$(".nav .chahao").trigger('click');
})
//点击手机下的菜单
$('.nav-phone .phone-meau').on('click',function(){
	$('body').css({'overflow-Y':'hidden'});
    $('.nav-phone').toggleClass('active')
    if( !$('.nav-phone').hasClass('active')){
     $('body').css({'overflow-Y':'auto'});
    }
})
// 点击手机下 的菜单下 查询出来的下拉 
$('.search-box .shoula').on('click',function(){
	$(this).toggleClass("active")
	if(parseInt($(".nav").innerWidth())<=768){
		$('.nav-phone .logo').delay(200).animate({top:0},500)
		$(".nav .chahao").trigger('click');
	}
})
//双下标轮播图
// var next=0;
// var num=0;
//  $(".banner .pic-box li:gt(0)").css({left:'100%'});
// function left(){
// 	next++;
// 	if(next>=$(".banner .pic-box li").length){
// 		next=0;
// 	}
//   $(".banner .lunbo-box li").removeClass('active');	
//   $(".banner .lunbo-box li").eq(next).addClass('active');
//   $(".banner .pic-box li").eq(next).css({left:'100%'});	
//   $(".banner .pic-box li").eq(num).animate({left:'-100%'},1000,'linear');
//   $(".banner .pic-box li").eq(next).animate({left:0},1000,'linear');
//   num=next;  
// }
// function right(){
// 	next--;
// 	if(next<-3){
// 		next=0;
// 	}
//   $(".banner .lunbo-box li").removeClass('active');	
//   $(".banner .lunbo-box li").eq(next).addClass('active');
//   $(".banner .pic-box li").eq(next).css({left:'-100%'});	
//   $(".banner .pic-box li").eq(num).animate({left:'100%'},1000);
//   $(".banner .pic-box li").eq(next).animate({left:0},1000);
//   num=next;  
// }
// var t=setInterval(left,2000);
// $(".banner").on('mouseenter',function(){
// 	clearInterval(t);
// })
// $(".banner").on('mouseleave',function(){
// 	t=setInterval(left,2000);
// })
// $('.anniu .aleft').on('click',function(){
// 	left();
// })
// $('.anniu .aright').on('click',function(){
// 	right();
// })
// $(".banner .lunbo-box li").on('click',function(){
// 	var shu=$(this).index();
// 	if(shu==num){
// 		return;
// 			};
//     $(".banner .lunbo-box li").removeClass('active');	
//     $(".banner .lunbo-box li").eq(shu).addClass('active');
// 	$(".banner .pic-box li").eq(shu).css({left:'100%'});
// 	$(".banner .pic-box li").eq(num).animate({left:'-100%'},1000);
// 	$(".banner .pic-box li").eq(shu).animate({left:0},1000);
// 	next=shu;
// 	num=shu;
// })
//无缝的轮播图
// n代表下一个，方向代表移动的方向
var $items=$(".banner .pic-box  ul li")
var $picul=$(".banner .pic-box  ul ")
var $aleft=$('.anniu .aleft')
var $aright=$('.anniu .aright')
var $lunbo=$(".banner .lunbo-box ul")
var $dianlist=$(".banner .lunbo-box li")
var $str=".banner .pic-box  ul";
var moving=false;
var t=setInterval(function(){
   $aleft.trigger('click')

},3000)
 magicmove=function(n,dir){
 	moving=true;
	//先判断有active的类
	var $active=$($str+" "+" .active")
	$active.addClass(dir)
	.delay(1000)
	.queue(function(){
		moving=false;
		$(this).removeClass(dir)
		.removeClass('active')
		.dequeue();
	})
	// 处理下一张
	var $dir= dir==='left'?'right':'left';
	$(n).addClass($dir).addClass(' active')
	$(n).get(0).offsetWidth;
	$(n).removeClass($dir);
	// 处理轮播点
    $dianlist.removeClass('active');
    $dianlist.eq($(n).index()).addClass('active')
}
   
   // 点击左按钮
    $aleft.on('click',function(){
    	if(moving){return};
	var $active=$($str+" "+" .active");
	if($active.prev().length===0){
		magicmove($items.eq(-1),'left')
	}else{
		magicmove($active.prev(),'left')
	}
	
   })
     // 点击右按钮
    $aright.on('click',function(){
    	if(moving){return};    	
	var $active=$($str+" "+" .active");
	if($active.next().length===0){
		magicmove($items.eq(0),'right')
	}else{
		magicmove($active.next(),'right')
	}
	
})
    
    $dianlist.on('click',function(){     	
	var $active=$($str+" "+" .active");
	var $n=$items.eq($(this).index());
	//判断点击小点的方向
	if($(this).index() === $items.index($active) || moving){return}
	if($(this).index()>$items.index($active)){
		magicmove($n,'right')
	}else{
		magicmove($n,'left')

	}
	
})

    // 滚轮事件
    // document.onmousewheel=function(e){
    //   e.preventDefault()
    //   if(e.wheelDelta>0 || e.detail<0){$aleft.trigger('click');}
    //   else{$aright.trigger('click');}
    //   console.log(1)
    // }




















//底部
$('.footer .row2 .col dt').on('click',function(){
	$(this).parent().toggleClass('active');

})



































})