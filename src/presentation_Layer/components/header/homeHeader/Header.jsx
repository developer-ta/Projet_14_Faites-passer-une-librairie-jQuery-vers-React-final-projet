import { Link, useLocation } from 'react-router-dom';
import './header.scss';


export default function Header() {


  const { pathname } = useLocation();


  return (
    <div className="header">
      <Link className="header-nav-logo" to="/">
        <img
          className="header-nav-logo-image"
          src="src/presentation_Layer/assets/img/LogoHRnet.png"
          alt="HRnet Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <nav className="header-nav">
        <Link
          className={`${pathname == '/AddEmployee' ? 'active' : 'header-nav-item '}`}
          to="/AddEmployee"
        >
          Ajouter un employé
        </Link>
        <Link
          className={` ${pathname == '/ListEmployees' ? 'active' : 'header-nav-item'}`}
          to="/ListEmployees"
        >
          Liste des employés
        </Link>
      </nav>
    </div>
  );
}
