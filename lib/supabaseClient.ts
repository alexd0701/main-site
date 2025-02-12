import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const createIdea = async (ideaText: string) => {
  const { data, error } = await supabase
    .from("ideas")
    .insert([{ idea: ideaText }]);
  return { data, error };
};

export const getIdeas = async () => {
  const { data, error } = await supabase
    .from("ideas")
    .select("*")
    .order("votes", { ascending: false });
  return { data, error };
};

export const voteIdea = async (id: string) => {
  const { data: idea, error: fetchError } = await supabase
    .from("ideas")
    .select("votes")
    .eq("id", id)
    .single();

  if (fetchError) return { data: null, error: fetchError };

  const newVotes = (idea.votes || 0) + 1;

  const { data, error } = await supabase
    .from("ideas")
    .update({ votes: newVotes })
    .eq("id", id);
  return { data, error };
};
