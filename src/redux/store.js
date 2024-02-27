import serviceListSlice from "./slice/serviceListSlice";
import serviceSlice from "./slice/serviceSlice";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import saga from "./saga/saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    serviceList: serviceListSlice,
    service: serviceSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(saga);

export default store;