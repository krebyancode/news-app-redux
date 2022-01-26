import React from "react";
import { Provider as StoreProvider } from "react-redux";
import News from "./pages/News";
import store from "./redux/store";

function App() {
  return (
    <StoreProvider store={store}>
      <News />
    </StoreProvider>
  );
}

export default App;
