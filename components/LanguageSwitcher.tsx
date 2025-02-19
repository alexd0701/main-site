import { useLocale } from "@/context/LocaleContext";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();

  return (
    <div className="flex space-x-4">
      <button
        onClick={() => setLocale("en")}
        className={`px-3 py-1 rounded-3xl ${
          locale === "en" ? "bg-blue-600 text-white" : "bg-gray-300 text-black"
        }`}
      >
        English
      </button>
      <button
        onClick={() => setLocale("ko")}
        className={`px-3 py-1 rounded-3xl ${
          locale === "ko" ? "bg-blue-600 text-white" : "bg-gray-300 text-black"
        }`}
      >
        한국어
      </button>
    </div>
  );
}
