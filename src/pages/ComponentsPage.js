import { Form } from "../components/Form";
import { Table } from "../components/Table";

export function ComponentsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-center tracking-wider mb-4 md:mb-6 text-4xl md:text-5xl ">
        Components
      </h1>
      <p className="text-center font-light mb-4 md:mb-6">
        A collection of React components using Tailwind CSS and React Hook Form
        v.7
      </p>

      <div className="flex flex-col space-y-8 divide-y divide-gray-300">
        <div className="pt-8">
          <Form />
        </div>

        <div className="pt-8">
          <Table />
        </div>
      </div>
    </div>
  );
}
