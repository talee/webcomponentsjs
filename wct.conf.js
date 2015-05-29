module.exports = {
  verbose: true,
  //persistent: true,
  suites: ['tests/ShadowDOM/**/*.js'],
  // Test htmlTest loading
  //suites: ['tests/ShadowDOM/js/Document.js'],
  extraScripts: [
    '/tests/tools/mocha-htmltest.js',
    'tests/ShadowDOM/tests.js',
    '/dist/ShadowDOM.js'
  ],
  testTimeout: 200 * 1000,
  plugins: {
    local: {
      disabled: true,
      browsers: ['canary']
    },
    sauce: {
      //browsers: ['default']
      browsers: [
        {
          browserName: 'chrome',
          platform:    'Windows 8.1',
          version:     'beta'
        },
        {
          browserName: 'internet explorer',
          platform:     'Windows 8',
          version:      '10.0'
        },
        {
          browserName: 'internet explorer',
          platform:     'Windows 8.1',
          version:      '11.0'
        },
        {
          browserName: 'firefox',
          platform:    'Windows 8.1',
          version:     ''
        },
        //{
        //  browserName: 'safari',
        //  platform:    'OS X 10.10',
        //  version:     '8'
        //},
        {
          browserName: 'safari',
          platform:    'OS X 10.9',
          version:     '7'
        }
      ]
    }
  }
};
