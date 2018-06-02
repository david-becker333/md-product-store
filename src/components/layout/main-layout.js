import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Sidebar from './sidebar';
import Header from './header';
import Footer from './footer';
import { Views } from '../view/views';


export default class MainLayout extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {/** Header component */}
                <Header></Header>

                {/** Main content component */}
                <main>
                    <div className="container-fluid main-container">
                        <div className="side-nav-container">
                            <Sidebar />
                        </div>
                        <div className="main-content col">
                            <Route path="/ui/:content" exact component={Views} />
                        </div>
                    </div>
                </main>

                {/** Footer component */}
                <Footer></Footer>
            </div>
        );
    }
}



