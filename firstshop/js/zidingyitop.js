// 空中搜索框
$(function () {
    window.searchObj = {
        searchtop: function () {
            $(`<div class="searchtop">
            <div class="searchinput clear">
            < input type = "text" class= "searchinputed fl" >
            <input type="text" class="searchbtn fl">
            </div>
            </div>`).appendTo($("body"));
            $(window).on('scroll',function(){
                var juli=$(this).scrollTop();
                if(juli>300){
                    $(".searchtop").slideDown();
                }else{
                    $(".searchtop").slideUp();
                }
            })
        }
    }

})


$(function () {
    // 顶部搜索框
    window.searchObj = {
        // 搜索框对象
        topSearchInput: function () {
            $(`<div class="topSearchInput">
            <div class="topSearchInputWrapper clear">
                <input class="searchInput fl" placeholder="创意文具" type="text">
                <input class="searchBtn fl" type="text">
            </div>
            </div>`).appendTo($("body"))
            // 顶部搜索栏交互效果
            // 监听窗口的滚动事件
            $(window).on('scroll', function () {
                // 获取当前窗口到顶部的距离
                var distanceTop = $(this).scrollTop();
            
                // 如果当前窗口到顶部的距离大于300
                if (distanceTop > 300) {
                    // 那么顶部的搜索栏 就 掉（慢慢的）下来
                    $(".topSearchInput").slideDown();
                } else {
                    // 那么顶部的搜索栏 就 收上去（慢慢的）下来
                    $(".topSearchInput").slideUp();
                }
            })
        }
    }
})


