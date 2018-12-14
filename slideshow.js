

// 初始化
$('#images>img:nth-child(1)').addClass('enter');
$('#images>img:nth-child(2)').addClass('current');
$('#images>img:nth-child(3)').addClass('current');

// setTimeout(() => {
//     $('#images > img:nth-child(1)').removeClass("enter").addClass("leave")
//     .one('transitionend', (e)=>{
//         $(e.currentTarget).removeClass('leave').addClass('current')
//     })
// console.log(1);
//     $('#images > img:nth-child(2)').removeClass("current").addClass("enter");
// }, 3000);

// setTimeout(() => {
//     $('#images >img:nth-child(2)').removeClass('enter').addClass('leave')
//     .one('transitionend', (e)=>{
//         $(e.currentTarget).removeClass('leave').addClass('current');
//     })
//        $('#images >img:nth-child(3)').removeClass('current').addClass('enter');
// }, 6000);

// setTimeout(() => {
//     $('#images >img:nth-child(3)').removeClass('enter').addClass('leave')
//     .one('transitionend', (e)=>{
//         $(e.currentTarget).removeClass('leave').addClass('current');
//     })
   
//     $('#images >img:nth-child(1)').removeClass('current').addClass('enter');
// }, 9000);



let n=1;
setInterval(() => {
    $(`#images > img:nth-child(${x(n)})`).removeClass('enter').addClass('leave')
    .one('transitionend',(e)=>{
        $(e.currentTarget).removeClass('leave').addClass('current')
    })
    $(`#images > img:nth-child(${x(n+1)})`).removeClass('current').addClass('enter');
    n++
}, 3000);

function x(n){
    if(n>3){
        n=n%3
        if(n===0){
            n=3;
        }
    }
    return n;
}