import Counter from "./features/counter/Counter";
import { Provider } from "react-redux";
import { store } from "./app/store";
import Coin from "./features/Coin/Coin";
import Theme from "./features/theme/Theme";
function App() {
  return (
    <Provider store={store}>
      <Counter />
      <Coin />
      <Theme />
    </Provider>
  );
}

export default App;
