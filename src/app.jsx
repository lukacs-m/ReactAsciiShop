import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import MainApp from "MainApp";
let store = require('configureStore').configure();


ReactDOM.render(
    <Provider store={store}>
        <MainApp />
    </Provider>,
    document.getElementById('app')
);