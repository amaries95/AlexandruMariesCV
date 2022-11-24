import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./login";
import referencesReducer from "./reference";
import routesReducer from "./routes";

const store = configureStore({
    reducer: 
        { 
          login: loginReducer,
          reference: referencesReducer,
          routes: routesReducer
        }
});

export default store;