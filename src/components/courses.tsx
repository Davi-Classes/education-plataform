import { Search } from "lucide-react";
import { CourseCard } from "./course-card";
import { useCallback, useEffect, useState } from "react";

type Course = {
  id: string;
  title: string;
  imageUrl: string;
  description: string;
};

const API_URL = "https://education-plataform-api.onrender.com";

export const Courses = () => {
  const [search, setSearch] = useState("");
  const [courses, setCourses] = useState<Course[]>([]);

  // Função "fetchCourses"
  const fetchCourses = useCallback(async () => {
    const res = await fetch(`${API_URL}/courses?search=${search}`);
    return res.json();
  }, [search]);

  // useEffect chamando o "fetchCourses"
  useEffect(() => {
    fetchCourses().then((data) => setCourses(data));
  }, [fetchCourses]);

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
            {courses.length == 0 && (
              <p className="text-lg">Não foram encontrados cursos.</p>
            )}
            {courses.map((course) => (
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
