$(function(){
    // 绑定点击事件
    $(".add").on("click", function () {
        var num = $(this).siblings("input").val();
        num ++;
        $(this).siblings("input").val(num);
    })
    
    /**
     * 减少功能
     */
    // 绑定点击事件
    $(".reduce").on("click", function () {
        var num = $(this).siblings("input").val();
        num --;
        num = num < 1 ? 1 : num;
        $(this).siblings("input").val(num);
    })

    magnifier({
		magnifier : "#magnifier1",//最外层的大容器
		width : 370,//承载容器宽
		height : 348,//承载容器高
		moveWidth : null,//如果设置了移动盒子的宽度，则不计算缩放比例
		zoom : 5//缩放比例
	})

})