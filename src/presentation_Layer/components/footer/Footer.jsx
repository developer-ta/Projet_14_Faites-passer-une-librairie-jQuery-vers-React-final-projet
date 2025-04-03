import './footer.scss';

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <ul className='footer-list'>
          <li>Home</li>
          <li>Ajouter un employé</li>
          <li>Liste des employés</li>
        </ul>
        <p className="footer-text">Copyright 2025 HRnet</p>
      </footer>
    </>
  );
}
