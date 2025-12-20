import { useNavigate } from "react-router";
import { Button } from "./button";

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
          <Button>
            Cadastre-se
          </Button>
          <Button onClick={() => navigate("/entrar")}>
            Entrar
          </Button>
        </section>
      </div>
    </header>
  );
}
