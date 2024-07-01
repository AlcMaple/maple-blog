L2Dwidget.init({
    // 指定live2d模型
    model: {
        jsonPath: '../js/live2d/tororo/z16/assets/z16.model.json',
    },
    // 控制live2d的大小及其位置
    display: {
        superSample: 2,
        width: 150,
        height: 260,
        position: 'right',
        // 水平偏移
        hOffset: 0,
        // 垂直偏移
        vOffset: 0,
    },
    // 控制手机是否显示
    mobile: {
        show: false
    },
    // 控制显示透明度
    react: {
        opacityDefault: 0.8
    }
})