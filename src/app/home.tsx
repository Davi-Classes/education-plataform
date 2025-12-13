import { useState } from "react";
import { Search } from "lucide-react";
import { Courses } from "../components/courses";

// App.tsx
export function Home() {
  const [search, setSearch] = useState("");

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
          <Courses search={search} />
        </section>
      </div>
    </main>
  );
}
