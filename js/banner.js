$(document).ready(function(){
	// 任意数量图片动态添加轮播序列号
	var size=$(".slider_contnet>li").size();

	$(".slider_contnet>li").first().show();
	// 手动轮播

	// 自动轮播
	var i=0;
	var t=setInterval(move,10000);

	// 触发/禁止自动轮播
	$(".banner").hover(function(){
		clearInterval(t);
	},function(){
		t=setInterval(move,10000);
	});

	// 核心向左运动函数
	function moveL(){
		i--;
		if(i==-1){
			i=size-1;
		}
		$(".slider_contnet>li").eq(i).slideDown(300).siblings().slideUp(300);
	};

	// 核心向右运动函数
	function move(){
		i++;
		if(i==size){
			i=0;
		}
		$(".slider_contnet>li").eq(i).slideDown(300).siblings().slideUp(300);
	};

	// 左边按钮轮播
	$(".left").click(function(){
		moveL();
	})

	// 右边按钮轮播
	$(".right").click(function(){
		move();
	});
    
	

});