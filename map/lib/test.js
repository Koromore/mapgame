
/**
 * [SceneManager description]
 */
function SceneManager() {
    this.currentNode = null;  //当前节点
    this.senceObject = {}; //
    this.stage = null
}
SceneManager.prototype.constructor = SceneManager;
SceneManager.prototype.loadScene = function(t) {

    if (this.senceArray[t]) {
        this.currentScene = this.senceArray[t];
    }else{
        this.currentScene = new window[t];
        this.senceArray[t] = this.currentScene;
    }

    this.currentScene.init();
    this.stage.addChild(this.currentScene);
    console.log(t + " add to stage!")
}


function Scene() {
    PIXI.Container.call(this);
    this.create();
}
Scene.prototype = Object.create(PIXI.Container.prototype);
Scene.prototype.constructor = Scene;
Scene.prototype.create = function(){};

var cc = {};
    cc.create = function(name){
        let obj = {};
            obj[name] = new Scene();
        return obj;
    }



console.log(cc)
console.log(cc.create('ok'))

var sceneModel = new SceneManager();
console.log(sceneModel)


var annie = {};

  /**
     * 判断一个场景是否已经被加载
     * @method annie.isLoadedScene
     * @public
     * @static
     * @since 1.0.0
     * @param {string} sceneName
     * @return {boolean}
     */
    function isLoadedScene(sceneName) {
        if (annie.res[sceneName] != undefined && annie.res[sceneName] != null && annie.res[sceneName]._f2x_had_loaded_scene) {
            return true;
        }
        else {
            return false;
        }
    }
    annie.isLoadedScene = isLoadedScene;
    /**
     * 删除一个场景资源,以方便系统垃圾回收
     * @method annie.unLoadScene
     * @public
     * @static
     * @since 1.0.2
     * @param {string} sceneName
     */
    function unLoadScene(sceneName) {
        delete annie.res[sceneName];
        var w = window;
        var scene = w[sceneName];
        for (var i in scene) {
            delete scene[i];
        }
        delete w[sceneName];
        scene = null;
    }
    annie.unLoadScene = unLoadScene;
