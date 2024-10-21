function Header() {
  return (
    <header className="header">
      <img src="https://commons.wikimedia.org/wiki/File:Little_lemon_logo.png" alt="Little Lemon Logo" className="logo" />
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/book">Book Table</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;