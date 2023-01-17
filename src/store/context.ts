import {createContext, useContext} from "react";
import {store} from "./store";

const storeContext = createContext(store)
export const {Provider} = storeContext
export const useStore = () => {
    return useContext(storeContext);
}