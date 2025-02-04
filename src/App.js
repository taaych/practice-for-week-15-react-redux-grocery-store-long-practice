import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Cart from './components/Cart';
import ProduceList from './components/ProduceList';
// import { addToCart } from './store/cartReducer';
import { populateProduce } from './store/produceReducer';

function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(populateProduce());
    }, [dispatch]);

  // useEffect(() => {
  //   dispatch(addToCart(3));
  // }, [dispatch]);
  
    const [showCart, setShowCart] = useState(false);
  

  return (
    <>
      <nav>
        <h1>Grocery Store</h1>
        <button className="checkout-button" onClick={() => setShowCart(true)}>
          <i className="fas fa-shopping-bag" />
          Checkout
        </button>
      </nav>
      <main style={showCart ? { marginRight: '300px' } : {}} >
        <ProduceList />
      </main>
      <div
        className="sidebar"
        style={showCart ? { transform: 'translateX(-100%)' } : {}}
      >
        <div className="sidebar-header">
          <button className="arrow-button" onClick={() => setShowCart(false)}>
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
        <Cart />
      </div>
    </>
  );
}

export default App;