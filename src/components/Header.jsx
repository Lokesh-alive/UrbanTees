function Header({ cartCount }) {
  return (
    <header>
      <h1>UrbanTees</h1>
      <nav>
        <a href="#">Home</a>
        <a href="#">Shop</a>
        <a href="#">Cart ({cartCount})</a>
      </nav>
    </header>
  );
}

export default Header;