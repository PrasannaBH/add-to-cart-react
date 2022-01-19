import './App.css';
import Home from './components/Home';
import { CartProvider } from "react-use-cart";



function App() {

  // const [isToggled, setToggled] = useState(false);

  return (
    <>
      <CartProvider>
        <Home />
      </CartProvider>
    </>
  );
}

export default App;
