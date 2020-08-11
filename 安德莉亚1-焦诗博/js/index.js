var data = [
    {
        title:'巧克力千层蛋糕',
        price:'￥25.00',
        imgsrc:'img/5.png'
    }, {
        title:'松软牛角面包(纯手工)',
        price:'￥7.00',
        imgsrc:'img/4.png'
    }, {
        title:'蜜红豆面包',
        price:'￥10.00',
        imgsrc:'img/2.png'
    }, {
        title:'草莓果酱蛋糕',
        price:'￥35.00',
        imgsrc:'img/1.png'
    }]
var list = document.querySelector('.tbd')
setdata(data)
function setdata(mydata){
    mydata.forEach(function(value){
        list.insertAdjacentHTML('beforeend','<div><img src="'+value.imgsrc+'"><div><div class="ttt">'+value.title+'</div><div class="fff"><span>'+value.price+'</span><div></div></div></div></div>')
    })
}