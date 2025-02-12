import { useLocale } from "@/context/LocaleContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Navbar() {
  const { t } = useLocale();
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center fixed top-0 w-full z-10">
      <div className="flex space-x-4">
        <a href="#about" className="hover:text-blue-400">
          {t("navbar.about")}
        </a>
        <a href="#projects" className="hover:text-blue-400">
          {t("navbar.projects")}
        </a>
        <a href="#ideas" className="hover:text-blue-400">
          {t("navbar.ideas")}
        </a>
      </div>
      <LanguageSwitcher />
    </nav>
  );
}
