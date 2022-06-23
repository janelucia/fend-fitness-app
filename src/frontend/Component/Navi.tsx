import { ReactComponent as Home } from '../styles/images/navi-svg/home.svg';
import { ReactComponent as Dumbbell } from '../styles/images/navi-svg/dumbbell.svg';
import { ReactComponent as Profile } from '../styles/images/navi-svg/profil.svg';
import NavMenu from './NavMenu';

const Navi = () => {
  return (
    <nav className="w-full rounded-tl-3xl rounded-tr-3xl flex justify-around gap-x-12 fixed bottom-0 bg-dark bg-opacity-70 px-5 py-2 text-medium text-opacity-100">
      <NavMenu to="/">
        <Home />
      </NavMenu>
      <NavMenu
        to="/browse"
        className={({ isActive }) => (isActive ? 'text-light' : '')}
      >
        <Dumbbell />
      </NavMenu>
      <NavMenu
        to="/profile"
        className={({ isActive }) => (isActive ? 'text-light' : '')}
      >
        <Profile />
      </NavMenu>
    </nav>
  );
};

export default Navi;
