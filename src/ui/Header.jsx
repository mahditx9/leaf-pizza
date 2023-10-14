import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username';
import { useSelector } from 'react-redux';

function Header() {
  const username = useSelector((store) => store.user.username);
  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-yellow-400 px-4 py-3 uppercase sm:px-6">
      <Link to="/" className="tracking-widest">
        Leaf Pizza
      </Link>

      <SearchOrder />
      {username && <Username />}
    </header>
  );
}

export default Header;
