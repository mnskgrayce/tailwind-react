import "./index.css";
import "./App.css";
import { Form } from "./components/Form";

function App() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-center tracking-wider mb-4 md:mb-6 text-4xl md:text-5xl ">
        Components
      </h1>
      <p className="text-center font-light mb-4 md:mb-6">
        A collection of Tailwind CSS components integrated with React Hook Form
        v.7
      </p>

      <div className="grid grid-cols-1 space-y-8 divide-y">
        <div className="pt-8">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default App;
