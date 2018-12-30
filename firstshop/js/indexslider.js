$(function(){
    jQuery(function($){
        $('#demo1').slideBox();
        $('#demo2').slideBox({
            direction : 'top',//left,top#方向
            duration : 0.3,//滚动持续时间，单位：秒
            easing : 'linear',//swing,linear//滚动特效
            delay : 5,//滚动延迟时间，单位：秒
            startIndex : 1//初始焦点顺序
        });
        $('#demo3').slideBox({
            duration : 0.3,//滚动持续时间，单位：秒
            easing : 'linear',//swing,linear//滚动特效
            delay : 5,//滚动延迟时间，单位：秒
            hideClickBar : false,//不自动隐藏点选按键
            clickBarRadius : 10,
            width:1000,
            height:434,
        });
        $('#demo4').slideBox({
            hideBottomBar : true//隐藏底栏
        });
    });


    // 图书部分轮播
    $(".pptSlider").slider({
        boxh: 217,//盒子的高度
        w: 332,//盒子的宽度
        h: 216,//图片的高度
        isShow: true,//是否显示控制器
        isShowBtn: true,//是否显示左右按钮
        controltop: 2,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20,//控制按钮宽度
        controlsH: 5,//控制按钮高度
        radius: 0,//控制按钮圆角度数
        controlsColor: "#d7d7d7",//普通控制按钮的颜色
        controlsCurrentColor: "#ff6600",//当前控制按钮的颜色
        isShowNum: true //是否显示数字
    });


    // 还是轮播图
    $(".pptSlider2").slider({
        boxh: 350,//盒子的高度
        w:430,//盒子的宽度
        h: 350,//图片的高度
        isShow: true,//是否显示控制器
        isShowBtn: true,//是否显示左右按钮
        controltop: 2,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20,//控制按钮宽度
        controlsH: 5,//控制按钮高度
        radius: 0,//控制按钮圆角度数
        controlsColor: "#d7d7d7",//普通控制按钮的颜色
        controlsCurrentColor: "#ff6600",//当前控制按钮的颜色
        isShowNum: true //是否显示数字
    });

    // 手风琴
    $(".rightbox>ul>li").mouseenter(function(){
        $(".rightbox ul li").css({"backgroundColor":""});
        $(".rightbox ul li .like").show();
        $(".rightbox ul li .fuckyou").hide();
        // $(this).css({"backgroundColor":"#fff"});
        $(this).find(".like").hide();
        $(this).find(".fuckyou").show();
    
    })
    //切换页
    $(".dianzibook .leftbox .lefttop ul .dianji").mouseenter(function(){
        let index = $(this).index();
        console.log(index)
        $(".dianzibook .leftbox .lefttop>ul>li").css({"backgroundColor":"","color":"#ff6600"})
        $(this).css({"backgroundColor":"#ff6600","color":"#fff"})
        $(".leftboxr>ul").hide();
        $(".leftboxr>ul").hide().eq(index).show();
    })

    // 切换圆点换药
    $(".toubu>div").click(function(){
        $(".toubu>div").css({"backgroundColor":"#ccc"});
        $(this).css({"backgroundColor":"#ff6600"});
        let index = $(this).index();
        $(".tuiguang>ul").hide().eq(index).fadeIn();
        
    })


    $('.floor > ul > li').hover(function () {
		// 鼠标移入
		// 定义颜色数组
		var bgColor = ["red", "green", "blue", "yellow", "orange", "pink", "deeppink"];
		// 获取索引
		var index = $(this).index();
		// 移入效果
		// 背景色改变 背景图改变
		$(this).css({
			"background-color": bgColor[index],
			"background-position-x": -40
		})
		// 让li的宽度 慢慢增加 增加到 100px
		$(this).animate({
			"width": 100
		}, 150)
	}, function () {
		// 鼠标移出效果
		// 让li的宽度 慢慢的变为 40px
		$(this).animate({
			"width": 40
		}, 150, function () {
			// 背景颜色清空
			// 背景图回到原来的位置
			$(this).css({
				"background-color": "",
				"background-position-x": 0
			})
		})
	}).click(function () {
		// 点击左侧楼层li 
		// 获取当前点击的li的索引
		var index = $(this).index();
		// 获取当前点击的版块到顶部的距离
		var distanceTop = $('.foolterwrapper').eq(index).offset().top;
        // 让整个页面 滚动到这个位置 （滚动条向下滚动相同的距离）
        console.log(distanceTop);
		$("html, body").animate({
			"scrollTop": distanceTop - 60
		}, 1000)
	})

})