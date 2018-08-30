import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import {routerReducer, syncHistoryWithStore} from 'react-router-redux';
import {Route, Router} from "react-router-dom";
import reducers from './reducers/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import {RoutesContainer} from "./containers";

// Create a history of your choosing (we're using a browser history in this case)
// Build the middleware for intercepting and dispatching navigation actions
// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = createStore(
	combineReducers({
		...reducers,
		routing: routerReducer
	}),
	applyMiddleware(thunkMiddleware)
);

const history = syncHistoryWithStore(createHistory(), store);
// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/foo'))

ReactDOM.render(
<Provider store={store}>
	{/* ConnectedRouter will use the store from Provider automatically */}
	<Router history={history} >
		<div className='container-fluid'>
			<Route component={RoutesContainer} />
		</div>
	</Router>
</Provider>,
document.getElementById('root')
);
