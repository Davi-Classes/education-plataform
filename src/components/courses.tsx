import { Search } from "lucide-react";
import { CourseCard } from "./course-card";
import { useState } from "react";

type Course = {
  id: string;
  title: string;
  imageUrl: string;
  description: string;
};

const coursesMock: Course[] = [
  {
    id: crypto.randomUUID(),
    title: "Curso de ReactJS",
    imageUrl: "https://wallpapercave.com/wp/wp2465923.jpg",
    description: "Aprenda a biblioteca de frontend mais utilizada do mercado.",
  },
  {
    id: crypto.randomUUID(),
    title: "APIs com FastAPI",
    imageUrl:
      "https://dkrn4sk0rn31v.cloudfront.net/uploads/2022/03/o-que-e-fastapi.png",
    description: "Desenvolvimento APIs assíncronas com FastAPI", 
  },
  {
    id: crypto.randomUUID(),
    title: "NextJS",
    imageUrl:
      "https://dkrn4sk0rn31v.cloudfront.net/uploads/2021/01/conhecendo-o-next-js.png",
    description: "Todo o poder de server side rendering e cache com NextJS",
  },
  {
    id: crypto.randomUUID(),
    title: "Langchain",
    imageUrl:
      "https://framerusercontent.com/images/wBIfkv9ElvdBDjilQHkMwNuNegI.webp?width=2400&height=1260",
    description:
      "Aprenda o framework mais utilizado para criar agentes de inteligência artificial",
  },
];

export const Courses = () => {
  const [search, setSearch] = useState("");
  const [courses] = useState<Course[]>(coursesMock);

  const filteredCourses = courses.filter((course) =>
    course.title.includes(search)
  );

  return (
    <main className="px-16">
      <div className="max-w-[1400px] m-auto flex flex-col gap-16">
        <section className="flex flex-col items-center gap-8 mt-32">
          <h1 className="text-3xl"> O que você busca? </h1>
          <div className="flex bg-white shadow-lg shadow-indigo-200 max-w-[600px] w-full p-4 rounded-3xl border border-zinc-300 items-center">
            <Search />
            <input
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              className="w-full pl-4 outline-0 text-lg"
            />
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-8">Cursos</h2>
          <div className="flex flex-wrap justify-between gap-8">
            {filteredCourses.length == 0 && (
              <p className="text-lg">Não foram encontrados cursos.</p>
            )}
            {filteredCourses.map((course) => (
              <CourseCard
                key={course.id}
                title={course.title}
                imageUrl={course.imageUrl}
                description={course.description}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};
