module.exports = {
    roots: ['<rootDir>/src'],
    testMatch: ['**/__tests__/**/*.+ts', '**/?(*.)+(spec|test).ts'],
    setupFiles: ['dotenv/config'],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
    },
};
