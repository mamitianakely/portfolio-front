// app/api/projects/route.ts
import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

// GET /api/projects
export async function GET() {
  try {
    const projects = await prisma.project.findMany({
      orderBy: { createdAt: "desc" },
    })
    return NextResponse.json(projects)
  } catch (error) {
    return NextResponse.json(
      { error: "Erreur lors de la récupération des projets" },
      { status: 500 }
    )
  }
}

// // POST /api/projects
// export async function POST(req: Request) {
//   try {
//     const body = await req.json()
//     const { title, description, techs, githubUrl, demoUrl } = body

//     if (!title || !description) {
//       return NextResponse.json(
//         { error: "Champs obligatoires manquants" },
//         { status: 400 }
//       )
//     }

//     const project = await prisma.project.create({
//       data: {
//         title,
//         description,
//         tech,
//         githubUrl,
//         demoUrl,
//       },
//     })

//     return NextResponse.json(project, { status: 201 })
//   } catch (error) {
//     return NextResponse.json(
//       { error: "Erreur lors de la création du projet" },
//       { status: 500 }
//     )
//   }
// }
