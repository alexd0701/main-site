"use client";
import { useState } from "react";
import { useLocale } from "@/context/LocaleContext";
import { createIdea } from "@/lib/supabaseClient";

interface IdeaFormProps {
  onIdeaAdded: () => void;
}

export default function IdeaForm({ onIdeaAdded }: IdeaFormProps) {
  const { t } = useLocale();
  const [ideaText, setIdeaText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!ideaText) return;
    setLoading(true);
    const { error } = await createIdea(ideaText);
    if (!error) {
      setIdeaText("");
      onIdeaAdded();
    } else {
      console.error("Error adding idea:", error);
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <textarea
        value={ideaText}
        onChange={(e) => setIdeaText(e.target.value)}
        placeholder={t("ideas.submitPlaceholder")}
        className="w-full p-4 bg-gray-700 rounded mb-4"
        rows={3}
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded"
      >
        {t("ideas.submitButton")}
      </button>
    </form>
  );
}
