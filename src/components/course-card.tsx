import { useNavigate } from "react-router";

type CourseCardProps = {
  title: string;
  imageUrl: string;
  description: string;
};

const generateSlug = (text: string) => {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .split(" ")
    .join("-");
};

export const CourseCard = ({
  title,
  imageUrl,
  description,
}: CourseCardProps) => {
  const navigate = useNavigate();
  const slug = generateSlug(title);
  
  return (
    <div className="w-72 border bg-white border-zinc-300 rounded-xl shadow-md duration-300 hover:scale-105">
      <img
        alt=""
        className="w-full h-40 rounded-t-xl object-cover"
        src={imageUrl}
      />
      <div className="h-56 p-4 flex flex-col gap-4 justify-between">
        <h3 className="text-xl">{title}</h3>
        <p>{description}</p>
        <button
          onClick={() => navigate(`/curso/${slug}`)}
          className="bg-indigo-600 text-white rounded-lg px-8 py-1 mt-8 duration-300 hover:cursor-pointer hover:bg-indigo-500"
        >
          Ver
        </button>
      </div>
    </div>
  );
};
