/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './styles.scss';

const Header = ({ categories, zenMode, setZenMode }) => (
  <header className="menu">
    <nav>
      {
        categories.map(
          (category) => (
            <NavLink
              key={category.label}
              className={
                ({ isActive }) => (isActive ? 'menu-link menu-link--selected' : 'menu-link')
              }
              to={category.route}
            >
              {category.label}
            </NavLink>
          ),
        )
      }
      <button
        className="menu-btn"
        type="button"
        onClick={() => setZenMode(!zenMode)}
      >
        {zenMode ? 'Désactiver' : 'Activer'} le mode zen
      </button>
    </nav>
  </header>
);

Header.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      route: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  zenMode: PropTypes.bool.isRequired,
  setZenMode: PropTypes.func.isRequired,
};

export default Header;
