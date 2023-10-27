import { IndexPage } from "./forms/page";

function App() {
  return (
    <main className="max-w-[960px] mx-auto p-20">
      <div className="">
        <h1 className="text-3xl font-bold">
          React Hook Formで非同期の値を扱う
        </h1>
        <p className="my-4 text-gray-600">
          {" "}
          <a
            href="https://react-hook-form.com/"
            className="text-primary underline"
          >
            React Hook Form
          </a>{" "}
          と{" "}
          <a href="" className="text-primary underline">
            Zod
          </a>{" "}
          を用いて非同期の値を扱うフォームのサンプルです。
        </p>
        <div className="mt-4 min-h-[350px] w-full p-10">
          <IndexPage />
        </div>
      </div>
    </main>
  );
}

export default App;
