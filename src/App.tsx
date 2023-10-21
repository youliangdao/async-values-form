import { AsyncForm } from "./forms/async-form";

function App() {
  return (
    <main className="max-w-[960px] mx-auto p-20">
      <div className="">
        <h1 className="text-3xl font-bold">Class Variance Authority</h1>
        <p className="mt-2 text-lg text-gray-600">
          A utility for managing class variance in React components.
        </p>
      </div>
      <div>
        <h2 className="text-2xl font-bold mt-8">Examples</h2>
        <div className="mt-4">
          <h3 className="text-xl font-bold">Async Form</h3>
          <p className="mt-2 text-gray-600">
            An async form using{" "}
            <a
              href="https://react-hook-form.com/"
              className="text-primary underline"
            >
              React Hook Form
            </a>{" "}
            and{" "}
            <a href="" className="text-primary underline">
              Zod
            </a>
          </p>
          <div className="mt-4 border-2 min-h-[350px] w-full p-10">
            <AsyncForm />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
