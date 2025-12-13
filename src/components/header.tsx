import { useNavigate } from "react-router";

export function Header() {
  const navigate = useNavigate();

  return (
    <header className="shadow-sm shadow-indigo-100 px-16">
      <div className="py-4 max-w-[1400px] w-full m-auto flex justify-between items-center">
        <section
          onClick={() => navigate("/")}
          className="flex gap-4 items-center hover:cursor-pointer"
        >
          <img
            src="/free-education-logo.webp"
            alt="education-logo"
            className="w-16"
          />
          <h1 className="text-2xl">Education Plataform</h1>
        </section>
        <section className="flex gap-4 items-center">
          <button className="bg-indigo-600 text-white rounded-2xl px-8 py-2 duration-300 hover:cursor-pointer hover:bg-indigo-500 w-42 font-medium">
            Cadastre-se
          </button>
          <button
            onClick={() => navigate("/entrar")}
            className="bg-indigo-600 text-white rounded-2xl px-8 py-2 duration-300 hover:cursor-pointer hover:bg-indigo-500 w-42 font-medium"
          >
            Entrar
          </button>
        </section>
      </div>
    </header>
  );
}
