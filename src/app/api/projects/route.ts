// src/app/api/projects/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch("http://localhost:3000/projects"); // ton backend NestJS
    if (!res.ok) {
      return NextResponse.json(
        { message: "Erreur lors de la récupération des projets" },
        { status: 500 }
      );
    }
    const data = await res.json();
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json({ message: "Erreur serveur" }, { status: 500 });
  }
}
