$(function () {
    $(".allSelect").on("change", function () {
        var selectState = $(this).prop("checked");
        $(".allSelect").prop("checked", selectState);
        $(".singleSelect").prop("checked", selectState);
        total();
    })

     $(".singleSelect").on("change", function () {
        var flag = true;
        $(".singleSelect").each(function (index, input) {
           if (!$(input).prop("checked")) {
            flag = false;
            return;
           }
        })

        $(".allSelect").prop("checked", flag);
        total();
     })

      $(".add").on("click", function () {
        var num =  $(this).next().val();
        num++;
        $(this).next().val(num);
        subTotal(this, num);
        total();
      })

      $(".reduce").on("click", function () {
        var num = $(this).prev().val();
        // 自减
        num--;
        num = num < 1 ? 1 : num;
        $(this).prev().val(num);
        subTotal(this, num);
         total();
      })

      $(".num").on("blur", function () {
        subTotal(this, $(this).val())
         total();
      })

      function subTotal (obj, num) {
        var singlePrice = $(obj).closest("tr").find(".singlePrice").text();
        var subTotal = (singlePrice * num).toFixed(2);
        $(obj).closest("tr").find(".subTotal").text(subTotal);
      }

      function total () {
        var allNum = 0, 
            allPrice = 0;
        $(".singleSelect").each(function (index, input) {
            if ($(input).prop("checked")) {
                allNum += parseFloat($(this).closest("tr").find(".num").val());
                allPrice += parseFloat($(this).closest("tr").find(".subTotal").text());
            }
        })


        $(".allNum").text(allNum);
        $(".allPrice").text(allPrice.toFixed(2))
       
      }
})