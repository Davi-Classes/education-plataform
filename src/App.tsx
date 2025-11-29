import { Courses } from "./components/courses";
import { Header } from "./components/header";

// App.tsx
export function App() {
  return (
    <div className="pb-20">
      <Header />
      <Courses />
    </div>
  );
}
