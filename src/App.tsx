import React from 'react';
import './App.less';
import Common from './views/common';
import Layout from './views/layout';
import Counter from './views/counter';
import MyForm from './views/form3';
import MyForm5 from './views/form5';
import Food from './views/form6';
import Parent from './views/parent';
import Rule from './views/rule';
import AppUpload from './views/upload';
import MySelect from './views/select';
import MySelect2 from './views/select2';
import MyCheck from './views/checkbox';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";

const App: React.FC = () => (
    <Router>
        <div className="app">
            <nav>
                <ul>
                    <li>
                        <Link to="/common">Common</Link>
                    </li>
                    <li>
                        <Link to="/layout">Layout</Link>
                    </li>
                    <li>
                        <Link to="/counter">Redux</Link>
                    </li>
                    <li>
                        <Link to="/form">form</Link>
                    </li>
                    <li>
                        <Link to="/parent">parent</Link>
                    </li>
                    <li>
                        <Link to="/rule">rule</Link>
                    </li>
                    <li>
                        <Link to="/upload">upload</Link>
                    </li>
                    <li>
                        <Link to="/form5">form里放组件</Link>
                    </li>
                    <li>
                        <Link to="/form6">form6</Link>
                    </li>
                    <li>
                        <Link to="/select">select</Link>
                    </li>
                    <li>
                        <Link to="/select2">select2</Link>
                    </li>
                    <li>
                        <Link to="/checkbox">checkbox</Link>
                    </li>
                </ul>
            </nav>

            <Switch>
                <Route path="/common" render={props => <Common/>}/>
                <Route path="/counter" render={props => <Counter/>}/>
                <Route path="/form" render={props => <MyForm/>}/>
                <Route path="/parent" render={props => <Parent/>}/>
                <Route path="/rule" render={props => <Rule/>}/>
                <Route path="/upload" render={props => <AppUpload/>}/>
                <Route path="/form5" render={props => <MyForm5/>}/>
                <Route path="/form6" render={props => <Food/>}/>
                <Route path="/select" render={props => <MySelect/>}/>
                <Route path="/select2" render={props => <MySelect2/>}/>
                <Route path="/checkbox" render={props => <MyCheck/>}/>
                <Route path="/layout">
                    <Layout/>
                </Route>
            </Switch>
        </div>
    </Router>
);


export default App;