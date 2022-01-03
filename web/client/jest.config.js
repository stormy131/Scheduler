module.exports = {
  testEnvironment: 'jsdom',
  collectCoverage: true,
  collectCoverageFrom: ['**/*.{js,vue}', '!**/node_modules/**', '!**/dist/**', '!**/coverage/**', '!**/*.config.js'],
  moduleFileExtensions: ['js', 'jsx', 'json', 'vue'],
  transform: {
    '.*\\.(vue)$': require.resolve('vue-jest'),
    '^.+\\.js$': require.resolve('babel-jest'),
  },
};
