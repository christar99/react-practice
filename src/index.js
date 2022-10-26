import React from "react";
import ReactDOM from "react-dom/client";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import rootReducer from "store";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import App from "App";
import { rootSaga } from "store";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(
            sagaMiddleware,
            logger
        )
    )
);

sagaMiddleware.run(rootSaga);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);

