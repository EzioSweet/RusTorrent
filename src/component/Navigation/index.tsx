import React from 'react';
import {observer, useObserver} from "mobx-react";
import {useStore} from "../../store/context";
import {Button} from "@feb-team/legao-react"

const Navigation = () => {

    const store = useStore()
    return useObserver(()=><div>
        <span>{store.counter}</span>
        <Button onClick={store.counterPlus}>plus</Button>
    </div>)
};

export default Navigation;