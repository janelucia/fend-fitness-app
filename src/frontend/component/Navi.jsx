import { NavLink } from 'react-router-dom';
import { ReactComponent as Home } from '../styles/images/navi-svg/home.svg';
import { ReactComponent as Dumbbell } from '../styles/images/navi-svg/dumbbell.svg';
import { ReactComponent as Profile } from '../styles/images/navi-svg/profil.svg';

const MeinNavLink = ({ children, ...props }) => {
  return (
    <NavLink
      className={({ isActive }) => (isActive ? 'text-light' : '')}
      {...props}
    >
      {children}
    </NavLink>
  );
};

const Navi = () => {
  return (
    <nav className="w-full rounded-tl-3xl rounded-tr-3xl flex justify-around gap-x-12 fixed bottom-0 bg-dark bg-opacity-70 px-5 py-2 text-medium text-opacity-100">
      <MeinNavLink to="/">
        <Home />
      </MeinNavLink>
      <NavLink
        to="/browse"
        className={({ isActive }) => (isActive ? 'text-light' : '')}
      >
        <Dumbbell />
      </NavLink>
      <NavLink
        to="/profile"
        className={({ isActive }) => (isActive ? 'text-light' : '')}
      >
        <Profile />
      </NavLink>
    </nav>
  );
};

export default Navi;
