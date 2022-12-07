import React from 'react';
import data from './data';
function App() {
  return (
    <dev className="grid-container">
<header className="row">
 <div>
    <a className="brand" href="/"> Bravo Ecommerce</a>
</div>
<div>
<a href="/cart">Cart</a>
<a href="/signin">Sign In</a>
</div>
</header>
<main>
<div className="row center">
  {
    data.products.map(products => (
      <div key={products._id} className="card">
        <a href={`/products/${products._id}`}>
          
            <img className="medium" src={products.image} alt={products.name}/>
        </a>
        <div className="card-body">
        <a href={`/products/${products._id}`}>
                <h2>{products.name}</h2>
            </a>
            <div className="rating">
             <span><i className="fa fa-star"></i></span>
             <span><i className="fa fa-star"></i></span>
             <span> <i className="fa fa-star"></i></span>
             <span><i className="fa fa-star"></i></span>
            <span><i className="fa fa-star"></i></span>
            </div>
<div className="price">৳ {products.price}</div>
      </div>
    </div>
    ))
  }
   
  </div>

</main>
<footer className="row center">All Rights Reserved</footer>
</dev>
  );
}

export default App;
