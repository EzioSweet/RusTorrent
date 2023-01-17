//@ts-nocheck
import React from 'react';
import Navigation from "./component/Navigation";
import {store} from "./store/store";
import {Provider} from './store/context'
import {Layout} from "@feb-team/legao-react";
const App = () => {
    const { Header, Content, Footer, Sider } = Layout
    return (
        <Provider value={store}>
            <Layout hasSider style={{height:"100vh",width:"100vw",background:"white"}}>
                <Sider className='' width={200}><Navigation/></Sider>
                <Layout>
                    <Header className=''></Header>
                </Layout>
            </Layout>
        </Provider>

    );
};

export default App;