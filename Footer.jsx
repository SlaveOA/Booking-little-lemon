
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>123 Main St, City</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@littlelemon.com</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <p><a href="#">Facebook</a></p>
          <p><a href="#">Instagram</a></p>
          <p><a href="#">Twitter</a></p>
        </div>
        <div className="footer-section">
          <h3>Newsletter</h3>
          <p>Subscribe to our newsletter for updates and special offers!</p>
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Little Lemon Restaurant. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;