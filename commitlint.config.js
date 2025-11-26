const isCI = process.env.CI === "true";

module.exports = {
  extends: ["@commitlint/config-conventional"],
  plugins: [
    {
      rules: {
        "skip-ci-only-in-wip": (parsed) => {
          const { type, raw } = parsed;
          if (raw.includes("skip ci") || raw.includes("ci skip")) {
            if (type !== "wip") {
              return [false, "skipping ci is allowed only in wip type commit"];
            }
          }

          return [true];
        },
      },
    },
  ],
  rules: {
    "type-enum": [
      2,
      "always",
      isCI
        ? ["feat", "fix", "docs", "test", "chore"] // wipなし
        : ["feat", "fix", "docs", "test", "chore", "wip"], // wip許可
    ],
    "skip-ci-only-in-wip": [2, "always"],
  },
};
