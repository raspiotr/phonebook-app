import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import css from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className={css.Box}>
      <NavLink className={css.Link} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.Link} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
