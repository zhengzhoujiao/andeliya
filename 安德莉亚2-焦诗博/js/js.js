var data = [{
    img:'../安德莉亚2-焦诗博/img/图层5.png',
    name:'红豆夹心吐司',
    prece:12.80
}, {
    img:'../安德莉亚2-焦诗博/img/图层6.png',
    name:'巧克力酸奶蛋糕',
    prece:25.80
}, {
    img:'../安德莉亚2-焦诗博/img/图层3.png',
    name:'蜜红豆面包',
    prece:10.00
}, {
    img:'../安德莉亚2-焦诗博/img/图层4.png',
    name:'草莓果酱蛋糕 ',
    prece:35.00
}, {
    img:'../安德莉亚2-焦诗博/img/图层7.png',
    name:'多层水果蛋糕',
    prece:39.00
}, {
    img:'../安德莉亚2-焦诗博/img/图层8.png',
    name:'千层脆(夹心)',
    prece:16.00
}]
var bind = document.querySelector('.mid')
data.forEach(function(item){
    bind.insertAdjacentHTML('beforeend','<div><img src="'+item.img+'" alt=""><div class="name">'+item.name+'</div><div class="bot"><span>￥ '+item.prece+'</span><img src="../安德莉亚2-焦诗博/img/图层2.png" alt=""></div></div>')
})