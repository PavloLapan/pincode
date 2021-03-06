import 'App.css';
import React from "react";
import PinGuess from 'components/PinGuess';
import { Provider } from 'react-redux'
import store from 'store'

function App() {
  return (
    <Provider store={store}>
      <PinGuess/>
    </Provider>
  );
}

export default App;
