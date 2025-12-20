import { Loader2 } from "lucide-react";
import { CourseCard } from "./course-card";
import { useQuery } from "@tanstack/react-query";
import courseService from "../services/course-service";

type CourseListProps = {
  search: string;
};

export const Courses = ({ search }: CourseListProps) => {
  const { data, isPending, error } = useQuery({
    queryKey: ["courses", search],
    queryFn: () => courseService.findCourses(search),
  });

  if (error != null) {
    return (
      <p className="text-xl text-red-500">
        Houve um error inesperado ({error.message})
      </p>
    );
  }

  if (isPending) {
    return (
      <div>
        <Loader2 className="w-16 h-16 animate-spin" />
      </div>
    );
  }

  return (
    <div className="flex flex-wrap justify-between gap-8">
      {data.length == 0 && (
        <p className="text-xl"> Não foram encontrados resultados. </p>
      )}
      {data.map((course) => (
        <CourseCard
          key={course.id}
          title={course.title}
          imageUrl={course.imageUrl}
          description={course.description}
        />
      ))}
    </div>
  );
};
