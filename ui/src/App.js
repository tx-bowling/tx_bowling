import React from 'react';
import { Provider } from 'react-redux';
import { Container } from 'react-bootstrap';

import './App.css';

import configureStore from './configureStore';
import RouterComponent from "./components/RouterComponent";
import BreadcrumbsComponent from "./components/BreadcrumbsComponent";
import NavbarComponent from "./components/NavbarComponent";


function App() {
  const store = configureStore({});

  return (
    <Provider store={store}>
      <NavbarComponent />
      <div style={{
        padding: '13px 35px 20px 35px',
        backgroundColor: '#f3f3f3'
      }}>
       <Container fluid>
            <BreadcrumbsComponent />
            <div className="site-layout-content">
              <RouterComponent />
            </div>
         <div style={{textAlign: 'center', paddingTop: '15px'}}>
           <span style={{display: 'inline-block'}}>TX Bowling ©2020</span>
         </div>
       </Container>
      </div>
    </Provider>
  );
}


export default App;
