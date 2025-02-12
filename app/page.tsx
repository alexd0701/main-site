"use client";

import { useState } from "react";
import { useLocale } from "@/context/LocaleContext";
import IdeaForm from "@/components/IdeaForm";
import IdeaList from "@/components/IdeaList";

const projects = [
  {
    id: 1,
    title: "Realtime OBS Translator",
    description:
      "This project is a real-time translation app that integrates with OBS Studio to display translated subtitles live. It uses OpenAI's GPT-4o Realtime API for speech-to-text translation and updates OBS text sources dynamically.",
    github: "https://github.com/alexd0701/obs-translator",
  },
];

export default function LandingPage() {
  const { t } = useLocale();
  const [refresh, setRefresh] = useState(0);
  const handleIdeaAdded = () => {
    setRefresh((prev) => prev + 1);
  };

  return (
    <div>
      <section
        id="home"
        className="flex flex-col items-center justify-center min-h-screen"
      >
        <h1 className="text-4xl font-bold mb-4">{t("home.welcome")}</h1>
        <p className="text-lg text-center max-w-2xl">{t("home.description")}</p>
      </section>
      <section
        id="about"
        className="min-h-screen flex flex-col items-center justify-center py-16"
      >
        <div
          className="w-full h-64 bg-cover bg-center mb-8"
          style={{ backgroundImage: "url(/your-background.jpg)" }}
        ></div>
        <h2 className="text-4xl font-bold mb-4">{t("about.title")}</h2>
        <p className="text-lg text-center max-w-2xl">
          {t("about.description")}
        </p>
      </section>
      <section id="projects" className="min-h-screen py-16">
        <h2 className="text-4xl font-bold mb-8 text-center">
          {t("projects.title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 p-6 rounded shadow hover:shadow-lg transition"
            >
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="mb-4">{project.description}</p>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                GitHub
              </a>
            </div>
          ))}
        </div>
      </section>
      <section id="ideas" className="min-h-screen py-16">
        <h2 className="text-4xl font-bold mb-8 text-center">
          {t("ideas.title")}
        </h2>
        <p className="mb-4 text-center">{t("ideas.description")}</p>
        <IdeaForm onIdeaAdded={handleIdeaAdded} />
        <IdeaList key={refresh} />
      </section>
    </div>
  );
}
