export default {
    roots: [
        "<rootDir>/src"
    ],
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    testMatch: ["**/integration/**/*.spec.+(ts|tsx|js)", "**/*.spec.+(ts|tsx)"],
    moduleFileExtensions: [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
        "node"
    ],
    snapshotSerializers: ["enzyme-to-json/serializer"],
    setupTestFrameworkScriptFile: "<rootDir>/src/setupEnzyme.ts",
    // setupFiles: ["<rootDir>/tools/jest/setup-react-adapter.js"],
};