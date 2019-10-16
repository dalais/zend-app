import * as React from 'react';
import * as ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import App from './componets/App';
import {createStore} from 'redux';

const app = (state = {isReady: false, text: ''}, action) => {
    switch (action.type) {
        case 'FETCH_GREETING':
            return Object.assign({}, state, {isReady: true, text: action.text});
    }
    return state;
}

const store = createStore(app);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,

    document.getElementById("root")
);