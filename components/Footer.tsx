import { useLocale } from "@/context/LocaleContext";

export default function Footer() {
  const { t } = useLocale();
  return (
    <footer className="bg-gray-800 p-4 text-center">
      <div className="flex justify-center space-x-4 mb-2">
        <a
          href="https://github.com/alexd0701"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400"
        >
          {t("footer.github")}
        </a>
        <a
          href="bitcoin:your-bitcoin-address"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400"
        >
          {t("footer.donate")}
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} AlexD. All rights reserved.</p>
    </footer>
  );
}
