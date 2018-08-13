var XLineData = [{
    name: "5月",
    value: .60,
    color: 'red'
}, {
    name: "6月",
    value: .4,
    color: "red"
}, {
    name: "7月",
    value: 1,
    color: "red"
}];


var YLineData = [1,2,3,4,5];

// var width = document.getElementById("box").clientWidth;
// var height = document.getElementById("box").clientHeight;

var width = window.innerWidth;
var height = document.getElementsByClassName("main")[0].clientHeight;

console.log(height);

var konvaColumnar = new konvaColumnar({
    containerID: 'box',
    containerWidth: width,
    containerHeight: height,
    XLineData: XLineData,
    YLineData: YLineData
});
