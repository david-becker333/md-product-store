import React from 'react';
import { Provider } from 'react-redux';
import { addLocaleData, IntlProvider } from 'react-intl';
import { HashRouter as Router, history } from 'react-router-dom';
import { Route, Link, IndexRoute, Redirect } from 'react-router-dom';

//import localeData from 'locale-data';
import Main from './components/layout/main-layout';
import { configureStore, combineReducers } from './shared/store';

// configure the redux store
const store = configureStore();

// adds the locale messages
//addLocaleData(localeData);

// get the locale and messages props
//const { locale, messages } = __I18N__ || 'en_US';


export default class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Provider store={store}>
              {/* <IntlProvider
                    locale={locale}
                    messages={messages}> */} 
                    <Router history={history}>
                        <div>
                            <Route path="/" exact component={Default}/>
                            <Route path="/" component={Main}/>
                        </div>
                    </Router>
               {/* </IntlProvider> */} 
            </Provider>
        )
    }
}

export const Default = (props) => {
    return (<Redirect to="/ui/dashboard" />);
}
