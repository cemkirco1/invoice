import Link from "next/link";
import Logo from "../../assets/logo.png";
import { useTranslation } from "next-i18next";
const Header = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <header className="flex items-center justify-between p-4 bg-gray-200">
      <div>
        <img src={Logo.src} alt="Logo" className="h-8" />
      </div>
      <nav className="flex items-center justify-center">
        <Link className="mr-5" href="/">
          {t("header.bills")}
        </Link>
        <Link className="mr-5" href="/new-bills">
          {t("header.newBills")}
        </Link>
      </nav>
      <div>
        <button onClick={() => changeLanguage("tr")} className="mr-2">
          TR
        </button>
        <button onClick={() => changeLanguage("en")} className="mr-2">
          EN
        </button>
        <button onClick={() => changeLanguage("fr")}>FR</button>
      </div>
    </header>
  );
};

export default Header;
