/**
 * Created by Carry on 2017/10/19.
 */

app.directive('zy',function($timeout){
    return {
        'restrict':'EA',
        'templateUrl':'App/View/zy.html',
        link:function(scope, ele, attr){
            $timeout(function(){
                //swiper
                var myswiper = new Swiper(".swiper-container",{
                    autoplay:1000,
                    loop:true,
                    effect:"fade",
                    pagination:".swiper-pagination",
                    paginationType:"bullets",
                    paginationClickable:true,
                    autoplayDisableOnInteraction:false,
                    keyboardControl:true,
                    mousewheelControl:true
                });
                var myScroll = new IScroll('.sec-isc',{
                    scrollX : true
                });
            },10)

        }
    }
});