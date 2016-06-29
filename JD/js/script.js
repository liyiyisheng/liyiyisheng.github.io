//slider
$(function() {
	var $pics = $("#slider-main li");
	//给每个轮播的图片添加index属性
	$pics.each(function(index, element) {
		$(this).attr('index', index);
	});
	var curPicIndex = $(".curPic:eq(0)").attr("index");
	//给leftbtn添加点击事件
	$("#slider-leftbtn").click(function(event) {
		event.preventDefault();
		$pics.css({"opacity": 0});
		$(".slider-btn").removeClass("curBtn");
		if(curPicIndex > 0) {
			curPicIndex = parseInt(curPicIndex) - 1;
		} else {
			curPicIndex = 4;
		}
		$pics.eq(curPicIndex).animate({
			"opacity": 1
		},400);
		$(".slider-btn").eq(curPicIndex).addClass("curBtn");
	});
	//给rightbtn添加点击事件
	$("#slider-rightbtn").click(function(event) {
		event.preventDefault();
		$pics.css({"opacity": 0});
		$(".slider-btn").removeClass("curBtn");
		if(curPicIndex < 4) {
			curPicIndex = parseInt(curPicIndex) + 1;
		} else {
			curPicIndex = 0;
		}
		$pics.eq(curPicIndex).animate({
			"opacity": 1
		},400);
		$(".slider-btn").eq(curPicIndex).addClass("curBtn");
	});
	//给小按钮添加点击事件
	$(".slider-btn").click(function() {
		$pics.css({"opacity": 0});
		$(".slider-btn").removeClass("curBtn");
		curPicIndex = $(this).html() - 1;
		$pics.eq(curPicIndex).animate({
			"opacity": 1
		},400);
		$(this).addClass("curBtn");
	});
	//自动播放
	var timer = null;
	function startMove() {
		timer = setInterval(function() {
			$("#slider-rightbtn").trigger('click');
		},2000);
	}
	//鼠标悬停在slider上停止自动播放
	$('.slider').eq(0).mouseover(function() {
		clearInterval(timer);
	});
	//鼠标在slider移开继续播放
	$('.slider').eq(0).mouseout(function() {
		startMove();
	});
});

//sm slider
$(function() {
	var page = 1;
	var $sliderMainbody = $("#slider-mainbody");
	//给左按钮绑定事件
	$("#leftbtn").click(function(event) {
		event.preventDefault();
		$(".smbtn").removeClass("curBtn");
		if(!$sliderMainbody.is(":animated")) {
			if (page === 1) {
				page = 5;
				$sliderMainbody.css({
					left: '-2195px'
				});
			}

			$sliderMainbody.animate({
				left: "+=439px"
			}, 300);
			page --;
			$(".smbtn").eq((page-1)).addClass("curBtn");
	    }
	});
	//给右按钮绑定事件
	$("#rightbtn").click(function(event) {
		event.preventDefault();
		$(".smbtn").removeClass("curBtn");
		if(!$sliderMainbody.is(":animated")) {
			if (page === 4) {
				page = 0;
				$sliderMainbody.css({
					left: '0'
				});
			}

			$sliderMainbody.animate({
				left: "-=439px"
			}, 300);
			page ++;
			$(".smbtn").eq((page-1)).addClass("curBtn");
	    }
	});
	//给小按钮绑定事件
	$(".smbtn").click(function() {
		$(".smbtn").removeClass("curBtn");
		$sliderMainbody.animate({
			left: -439 * $(this).attr("index") + "px"
		}, 300);
		page = $(this).attr("index");
		$(".smbtn").eq((page-1)).addClass("curBtn");
	});
	//自动播放
	var timer = null;
	function startMove() {
		timer = setInterval(function() {
			$("#rightbtn").trigger("click");
		}, 2000);
	}
	startMove();
	//鼠标移到slider停止播放
	$(".maincontent .slider").mouseover(function() {
		clearInterval(timer);
	});
	//鼠标移开slider继续播放
	$(".maincontent .slider").mouseout(function() {
		startMove();
	});
});

//tab
$(function() {
	$(".tab1-title").mouseover(function() {
		var $that = $(this);
		setTimeout(function() {
			$(".tab1-title").removeClass('curTitle');
			$that .addClass('curTitle');
			$(".maincontent").hide();
			$(".maincontent").css({"z-index": "100"});
			var index = $that .attr('index');
			$(".maincontent").eq(index).show();
			$(".maincontent").eq(index).css({"z-index": "1000"});
		}, 300);
	});
})