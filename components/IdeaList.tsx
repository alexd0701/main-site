"use client";
import { useEffect, useState } from "react";
import { useLocale } from "@/context/LocaleContext";
import { getIdeas, voteIdea } from "@/lib/supabaseClient";

interface Idea {
  id: string;
  idea: string;
  votes: number;
  created_at: string;
}

export default function IdeaList() {
  const { t } = useLocale();
  const [ideas, setIdeas] = useState<Idea[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchIdeas = async () => {
    setLoading(true);
    const { data, error } = await getIdeas();
    if (error) {
      console.error("Error fetching ideas:", error);
    } else {
      setIdeas(data as unknown as Idea[]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchIdeas();
  }, []);

  const handleVote = async (id: string) => {
    const { error } = await voteIdea(id);
    if (error) {
      console.error("Error voting idea:", error);
    } else {
      fetchIdeas();
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="space-y-4">
      {ideas.map((idea) => (
        <div
          key={idea.id}
          className="bg-gray-800 p-4 rounded flex justify-between items-center"
        >
          <div>
            <p>{idea.idea}</p>
            <p className="text-sm text-gray-400">Votes: {idea.votes}</p>
          </div>
          <button
            onClick={() => handleVote(idea.id)}
            className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-1 rounded"
          >
            Vote
          </button>
        </div>
      ))}
    </div>
  );
}
