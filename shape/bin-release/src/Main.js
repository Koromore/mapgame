/**
 * https://github.com/flash2x/AnnieJS
 */
window.A2xExtend=__extends;
window.addEventListener("load",function(){
    annie.debug=false;
    <!--测试用，正式时不用写-->
    if(annie.osType=="pc"){
        annie.devicePixelRatio=2;
    }
    /**
     * 因为这是个文件是入口文件,加载时间越短越好,那么就需要这个文件里代码量越少越好，尽量在其他文件写项目逻辑
     * 装载引擎的Canvas的div的id,可以在一个页面同时放多个stage.
     * 设计尺寸的宽
     * 设计尺寸的高
     * FPS刷新率
     * 缩放模式
     * 渲染模式
     */
    var stage=new annie.Stage("annieEngine",640,1040,30,annie.StageScaleMode.FIXED_HEIGHT,0);
    //默认关闭自动旋转和自动resize
    //stage.autoResize=true;
    //stage.autoSteering=true;
    stage.addEventListener(annie.Event.ON_INIT_STAGE,function (e) {
    	//想要同时加载多个场景的话，Annie2x.loadScene的第一个参数可以传数组如 ["scene1","scene2",...]
        annie.loadScene("loading", function () {
            //加载进度
        }, function () {
            var loadObj=new loading.Loading();
            stage.addChild(loadObj);
            annie.loadScene("shape",function (per) {
                loadObj.per_txt.text=per+"%";
            },function (result) {
                if(result.sceneId==result.sceneTotal){
                    stage.removeChild(loadObj);

                    <!--测试用，正式时不用写-->
                    annie.Eval(window.customScript);


                    stage.addChild(new shape.Shape());
                }
            })
        });
    })
});