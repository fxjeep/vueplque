module.exports = {  
    moduleFileExtensions: [
    "js",
    "vue"
  ],
  modulePaths: [
    "src",
    "node_modules"
  ],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/resources/assets/js/components/$1",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
  },
  transform: {
    "^.+\\.js$": "babel-jest",
    ".*\\.(vue)$": "<rootDir>/node_modules/@vue/vue3-jest"
  },
  snapshotSerializers: [
    "<rootDir>/node_modules/jest-serializer-vue"
  ],
  testEnvironment: "jsdom"
};