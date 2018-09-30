/*
 * @Author: AK-12 
 * @Date: 2018-09-30 20:20:21 
 * @Last Modified by:   AK-12 
 * @Last Modified time: 2018-09-30 20:20:21 
 */
import SceneMediatorInterface from './SceneMediatorInterface'

/**
 *单例类
 *
 * @class Singleton
 */
export default class Singleton {
    static _instance: SceneMediator;
    /**
     *获取静态实例
     *
     * @static
     * @returns {SceneMediator}
     * @memberof Singleton
     */
    static getInstance(): SceneMediator {
        if(this._instance === undefined){
            this._instance = new SceneMediator();
            return this._instance;
        }else{
            return this._instance;
        }
    }
}
/**
 *管理场景切换的类
 *
 * @export
 * @class SceneMediator
 * @extends {Singleton}
 * @implements {SceneMediatorInterface}
 */
class SceneMediator implements SceneMediatorInterface {
    gotoStartScene(): void{
        cc.director.loadScene("StartScene")
    }
    gotoPlayScene(): void{
        cc.director.loadScene("PlayScene");
    }
    gotoOverScene(): void{
        cc.director.loadScene("OverScene");
    }
}