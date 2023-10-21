import { defineConfig } from "orval";

export default defineConfig({
  api: {
    output: {
      mode: "tags-split",
      target: "./src/api",
      schemas: "./src/api/types",
      client: "react-query",
      prettier: true,
    },
    input: {
      target: "./openapi.yaml",
    },
  },
});
