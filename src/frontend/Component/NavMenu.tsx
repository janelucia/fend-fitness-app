import { NavLink, NavLinkProps } from 'react-router-dom';

const NavMenu = ({ children, ...props }: NavLinkProps) => {
  return (
    <NavLink
      className={({ isActive }) => (isActive ? 'text-light' : '')}
      {...props}
    >
      {children}
    </NavLink>
  );
};

export default NavMenu;
