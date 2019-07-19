exports.config = {
      seleniumAddress: 'http://localhost:4444/wd/hub',
      specs: ['spec.js'],
     framework: 'jasmine2' ,
      onPrepare: function() {
          var jasmineReporters = require('C:/Users/Hamza/Desktop/QA-FOLDERS/Assessment-QA-TESTER/node_modules/jasmine-reporters');
          jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter(null, true, true)
          );
     }
   };