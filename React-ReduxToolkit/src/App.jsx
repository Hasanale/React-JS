import { Provider } from "react-redux";
import { store } from "./app/store";
import Coin from "./features/Coin/Coin";
import Theme from "./features/theme/Theme";
import Counter from "./features/Counter/Counter";
import { useSelector } from "react-redux";

function AppContent() {
  const bgcolor = useSelector((state) => state.colorchanger.colorone);

  return (
    <div
      style={{ background: bgcolor }}
      className="h-screen flex justify-center flex-col p-10"
    >
      <Counter />
      <Coin />
      <Theme />
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

export default App;
