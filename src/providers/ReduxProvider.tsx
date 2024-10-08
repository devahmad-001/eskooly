"use client";

import { Provider } from "react-redux";
import { store } from "../store/store";

export function ReduxProviders({ children }: any) {
  return (
    <>
      <Provider store={store}>{children}</Provider>
    </>
  );
}
