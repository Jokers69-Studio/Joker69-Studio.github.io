import next from "eslint-config-next";

export default [
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "dist/**",
      "public/**",
      "next-env.d.ts",
    ],
  },
  ...next,
];
