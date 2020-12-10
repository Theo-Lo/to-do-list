import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import TodoList from './components/TodoList.jsx';
import NotFound from './components/NotFound.jsx';
import DoneListContainer from "./containers/DoneListContainer.jsx";
import { Row, Col } from 'antd';
import NavigationContainer from './containers/NavigationContainer.jsx';
import LabelManagerContainer from './containers/LabelManagerContainer.jsx';
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <React.Fragment className="main-container">
      <Layout>
        <Header>
          <header className="App-header">
            <p>Hello User</p>
          </header>
        </Header>
        <Content >
          <BrowserRouter>
            <NavigationContainer />
            <Row>
              <Col span={3}></Col>
              <Col span={18}>
                <Switch >
                  <Route exact path="/done" component={DoneListContainer}></Route>
                  <Route exact path="/label" component={LabelManagerContainer}></Route>
                  <Route exact path="/" component={TodoList}></Route>
                  <Route component={NotFound}></Route>
                </Switch>
              </Col>
              <Col span={3}></Col>
            </Row>
          </BrowserRouter>
        </Content>
      </Layout>
    </React.Fragment>
  );
}

export default App;
