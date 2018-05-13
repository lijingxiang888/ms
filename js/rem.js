~function () {
    var desW = 750;
    function refreshRem() {
        var doc = document.documentElement;
        var winW = doc.clientWidth; // 设备宽度
        doc.style.fontSize = winW / desW * 100 + 'px'; //设置根字体大小
    }
    refreshRem();//在进入页面时就刷新一次
    // 改变窗口大小时也要重新计算一次 比如由竖屏切换到横屏
    window.addEventListener('resize', refreshRem);
}();