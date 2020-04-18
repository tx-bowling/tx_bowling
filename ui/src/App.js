import React from 'react';
import { Provider } from 'react-redux';
import { Layout, Menu, Breadcrumb } from 'antd';

import './App.css';
import configureStore from './configureStore';
import RouterComponent from "./components/RouterComponent";
import Title from "antd/lib/typography/Title";
import BreadcrumbsComponent from "./components/BreadcrumbsComponent";

const { Header, Content, Footer } = Layout;

function App() {
  const store = configureStore({});

  return (
    <Provider store={store}>
      <Layout className="layout">
        <Header>
          <img src="/images/logo.svg" alt="TX Bowling" height={'54px'} style={{float: 'left'}}/>
          <Title style={{float: 'left', color: 'white'}}>TX Bowling</Title>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <BreadcrumbsComponent />
          <div className="site-layout-content" style={{'text-align': 'center'}}>
            <RouterComponent />
          </div>
         </Content>
        <Footer style={{ textAlign: 'center' }}>
          TX Bowling ©2020
        </Footer>
      </Layout>
    </Provider>
  );
}


export default App;
