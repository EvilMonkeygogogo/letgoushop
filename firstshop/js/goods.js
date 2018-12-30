$(function(){
    // 头部轮播图
    $(".pptSlider").slider({
        boxh: 400,//盒子的高度
        w:1000,//盒子的宽度
        h: 400,//图片的高度
        isShow: true,//是否显示控制器
        isShowBtn: true,//是否显示左右按钮
        controltop: 0,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20,//控制按钮宽度
        controlsH: 20,//控制按钮高度
        radius: 10,//控制按钮圆角度数
        controlsColor: "#d7d7d7",//普通控制按钮的颜色
        controlsCurrentColor: "#ff6600",//当前控制按钮的颜色
        isShowNum: true //是否显示数字
    });

    // 手风琴
    $(".newbookright>ul>li").mouseenter(function(){
        $(".newbookright ul li").css({"backgroundColor":""});
        $(".newbookright ul li .like").show();
        $(".newbookright ul li .fuckyou").hide();
        // $(this).css({"backgroundColor":"#fff"});
        $(this).find(".like").hide();
        $(this).find(".fuckyou").show();
    
    })

    //书轮播
    $(".bannerInner").slider({
		boxh: 456, //盒子的高度
		w: 1170, //盒子的宽度
		h: 400, //图片的高度
		isShow: true, //是否显示控制器
		isShowBtn: true, //是否显示左右按钮
		controltop: 0, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
		controlsW: 16, //控制按钮宽度
		controlsH: 16, //控制按钮高度
		radius: 8, //控制按钮圆角度数
		controlsColor: "#ccc", //普通控制按钮的颜色
		controlsCurrentColor: "#ff6600", //当前控制按钮的颜色
		isShowNum: true //是否显示数字
    });
    
    var num = 0;

	// 猜你喜欢 换一批 交互
	$("#changePro").click(function () {
		// num自增
		num++;

		// 判断 如果num 大于2 那么 重置为0
		if (num > 2) {
			num = 0;
		}
		// num %= 3;

		// 点击 父盒子向上滑动
		$(".guessContentBox").animate({
			"top": -num * 400
		}, 150);

    })
    
    // 轮播手风琴
    $(".rightshoufeng>ul>li").mouseenter(function(){
        $(".rightshoufeng>ul>li").css({"backgroundColor":""});
        $(".rightshoufeng>ul>li .shoubook").show();
        $(".rightshoufeng>ul>li .bookcontent").hide();
        // $(this).css({"backgroundColor":"#fff"});
        $(this).find(".shoubook").hide();
        $(this).find(".bookcontent").show();
    
    })

    $(".supplyTitle>ul>li").click(function(){
        let index = $(this).index();
        $(".supplyTitle>ul>li").removeClass("active");
        $(this).addClass("active");
        $(".supplyContent").hide();
        $(".supplyContent").eq(index).show();
    })
})