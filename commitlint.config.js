const isCI = process.env.CI === "true";

module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      isCI
        ? ["feat", "fix", "docs", "test", "chore"] // wipなし
        : ["feat", "fix", "docs", "test", "chore", "wip"], // wip許可
    ],
  },
};
