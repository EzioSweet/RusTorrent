import {action, makeObservable, observable} from "mobx";
import {invoke} from "@tauri-apps/api";

type configType={

}
class Store {
    @observable counter:number=0
    @action counterPlus=()=>{
        invoke("addition",{num1:this.counter,num2:1}).then((p:number)=>{
            this.counter=p
        })
    }
    constructor() {
        makeObservable(this)
    }
}

export const store = new Store()