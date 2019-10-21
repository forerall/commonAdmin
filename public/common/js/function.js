/**
 * Created by Administrator on 2019/10/21.
 */

function test_js() {
    alert('this is js test');
}

//点击放大图片
function showImg(e) {
    var src = $(e).attr('src');
    if (src){
        top.layer.open({
            type: 1,
            title:'查看图片',
            skin: 'layui-layer-rim', //加上边框
            area: ['70%', '80%'], //宽高
            content: '<img width="100%" src="'+src+'"/>'
        });
    }

}
