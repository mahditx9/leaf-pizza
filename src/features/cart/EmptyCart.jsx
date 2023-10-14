import { Link } from 'react-router-dom';

function EmptyCart() {
  return (
    <div className="mx-auto mt-8 w-4/5 rounded-lg bg-slate-800 px-4 py-6 text-yellow-50 shadow-black drop-shadow-md">
      <Link to="/menu">&larr; Back to menu</Link>
      <p>Your cart is still empty. Start adding some pizzas :)</p>
    </div>
  );
}

export default EmptyCart;
