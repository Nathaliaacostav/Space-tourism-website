export default function FooterContent() {
  return (
    <footer className="footer-container">
      <div className="left-section">
        <img src="/logo.svg" alt="Logo" className="logo" />
        <ul className="footer-list">
          <li>About</li>
          <li>Careers</li>
          <li>Events</li>
          <li>Products</li>
          <li>Support</li>
        </ul>
      </div>
      <div className="right-section">
        <div className="social-icons">
          <a href="#" className="fab fa-facebook"></a>
          <a href="#" className="fab fa-twitter"></a>
          <a href="#" className="fab fa-pinterest"></a>
          <a href="#" className="fab fa-instagram"></a>
        </div>
        <p className="copyright">
          &copy; 2021 LoopStudios. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
