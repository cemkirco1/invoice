import Link from "next/link";
import Logo from "../../assets/logo.png";
const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-200">
      <div>
        <img src={Logo.src} alt="Logo" className="h-8" />
      </div>
      <nav className="flex items-center justify-center">
        <Link className="mr-5" href="/">
          Bills
        </Link>
        <Link className="mr-5" href="/new-bills">
          New Bills
        </Link>
      </nav>
      <div>
        <button className="mr-2">TR</button>
        <button className="mr-2">EN</button>
        <button>FR</button>
      </div>
    </header>
  );
};

export default Header;
