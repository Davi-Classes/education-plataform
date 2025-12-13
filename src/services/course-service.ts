import { API_URL } from "../lib/api";

type Course = {
  id: string;
  title: string;
  imageUrl: string;
  description: string;
};

export async function findCourses(search?: string): Promise<Course[]> {
//   await new Promise((resolve) => setTimeout(resolve, 2000));

  const res = await fetch(
    `${API_URL}/courses${search ? "?search=" + search : ""}`
  );

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.detail);
  }

  return res.json();
}
