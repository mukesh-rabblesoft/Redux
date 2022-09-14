import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AllRoutes from './AllRoutes/AllRoutes';
import { useDispatch } from "react-redux";
import { setProduct } from './Redux/Actions/ProductAction';
import { useEffect } from 'react';


function App() {

  const store = useDispatch();

  const getProducts = async (store) => {
    const reponse = await fetch("https://jsonplaceholder.typicode.com/users").then((respone) =>
    respone.json()
    )
    store(setProduct(reponse));
}

useEffect(() => {
  
  getProducts(store)
  
}, [store]);

  return (
    <AllRoutes/>
  );
}

export default App;
