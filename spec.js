describe("Add User Test Cases Assignment", function()
    {

     it("Register New User to application", function () {
         browser.get("http://www.way2automation.com/angularjs-protractor/webtables")
         browser.driver.manage().window().maximize()
         browser.findElement(by.buttonText('Add User')).click();
         browser.sleep(4000)
         browser.findElement(by.name('FirstName')).sendKeys('FName1')
         browser.findElement(by.name('LastName')).sendKeys('LName1')
         browser.findElement(by.name('UserName')).sendKeys('User1')
         browser.findElement(by.name('Password')).sendKeys('Pass1')
         
        
         browser.findElement(by.name('Email')).sendKeys('admin@mail.com')
         browser.findElement(by.name('Mobilephone')).sendKeys('082555')
         browser.findElement(by.className('btn btn-success')).click();
         browser.findElement(by.className('btn btn-danger')).click();
         browser.sleep(4000)
         
        
       });
        
         it("Add New User to application", function () {
         browser.findElement(by.name('FirstName')).sendKeys('FName2')
         browser.findElement(by.name('LastName')).sendKeys('LName2')
         browser.findElement(by.name('UserName')).sendKeys('User2')
         browser.findElement(by.name('Password')).sendKeys('Pass2')

    
         browser.findElement(by.name('Email')).sendKeys('cusomter@mail.com')
         browser.findElement(by.name('Mobilephone')).sendKeys('083444')
         browser.findElement(by.className('btn btn-success')).click();
         browser.findElement(by.className('btn btn-danger')).click();
         browser.sleep(4000)
       
        });

     });