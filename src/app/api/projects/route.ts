import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function GET() {
  try {
    const { data, error } = await supabase
      .from("projects")
      .select("*");

    if (error) throw error;

    const projects = data.map((p) => ({
      id: p.id,
      title: p.title,
      description: p.description,
      tech: p.tech,
      image: p.image,
      githubFront: p.github_front,
      githubBack: p.github_back,
    }));

    return NextResponse.json(projects);
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || "Erreur lors de la récupération des projets" },
      { status: 500 }
    );
  }
}

