import { Search } from "lucide-react";
import { Header } from "./components/header";
import { CourseCard } from "./components/course-card";

// App.tsx
export function App() {
  return (
    <div className="pb-20">
      <Header />
      <main className="px-16">
        <div className="max-w-[1400px] m-auto flex flex-col gap-16">
          <section className="flex flex-col items-center gap-8 mt-32">
            <h1 className="text-3xl"> O que você busca? </h1>
            <div className="flex bg-white shadow-lg shadow-indigo-200 max-w-[600px] w-full p-4 rounded-3xl border border-zinc-300 items-center">
              <Search />
              <input type="text" className="w-full pl-4 outline-0 text-lg" />
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-8">Cursos</h2>
            <div className="flex flex-wrap justify-between gap-8">
              <CourseCard
                title="Curso de ReactJS"
                imageUrl="https://wallpapercave.com/wp/wp2465923.jpg"
                description="Aprenda a biblioteca de frontend mais utilizada do mercado."
              />

              <CourseCard
                title="APIs com FastAPI"
                imageUrl="https://dkrn4sk0rn31v.cloudfront.net/uploads/2022/03/o-que-e-fastapi.png"
                description="Desenvolvimento APIs assíncronas com FastAPI"
              />

              <CourseCard
                title="NextJS"
                imageUrl="https://dkrn4sk0rn31v.cloudfront.net/uploads/2021/01/conhecendo-o-next-js.png"
                description="Todo o poder de server side rendering e cache com NextJS"
              />

              <CourseCard
                title="Langchain"
                imageUrl="https://framerusercontent.com/images/wBIfkv9ElvdBDjilQHkMwNuNegI.webp?width=2400&height=1260"
                description="Aprenda o framework mais utilizado para criar agentes de inteligência artificial"
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
