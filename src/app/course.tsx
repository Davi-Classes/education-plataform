import { useParams } from "react-router";

export function Course() {
  const { slug } = useParams();

  console.log(slug);

  return (
    <div>
      <p className="text-xl">Detalhamento do Curso</p>
    </div>
  );
}
