import SignupScreen from '../screenobjects/signup';
// import SignupCodeScreen from '../screenobjects/signupcode';
import LoginScreen from '../screenobjects/login';
import SignupCodeScreen from '../screenobjects/signupcode';
import PScreen from "../screenobjects/edit.profile";

describe('WebdriverIO and Appium, when interacting with a signup form,', () => {
    // beforeEach(() => {
    //     TabBar.waitForTabBarShown(true);
    //     TabBar.openLogin();
    //     LoginScreen.waitForIsShown(true);
    // });


    it('should display an error message if user keep first name and last name fields empty', () => { //first name,last name empty //1
        // LoginScreen.signUpLink.waitForExist();
        //LoginScreen.signUpLink.click();
        //LoginScreen.signUpLink.click();
        //SignupScreen.firstNameField.waitForExist();
        SignupScreen.firstNameField.click();
        SignupScreen.firstNameField.setValue("");
        SignupScreen.lastNameField.touchAction([
            'press',
            {
                action: 'wait', ms: 1000,
            },
            {action: 'moveTo', x: 500, y: -700},
            'release'
        ]);
        SignupScreen.lastNameField.click();
        SignupScreen.lastNameField.setValue("");
        SignupScreen.emailAddressField.click();
        SignupScreen.emailAddressField.setValue("pamodas+23@salpo.com");
        SignupScreen.passwordField.click();
        SignupScreen.passwordField.setValue("Salpo@123");
        SignupScreen.confirmPasswordField.click();
        SignupScreen.confirmPasswordField.setValue("Salpo@123");
        SignupScreen.confirmPasswordField.touchAction([
            'press',
            {
                action: 'wait', ms: 1000,
            },
            {action: 'moveTo', x: 500, y: -300},
            'release'
        ]);
        SignupScreen.signupButton.click();
        SignupScreen.signupButton.click();
        //SignupScreen.lastNameField.waitForExist();
        //SignupScreen.lastNameField.waitForExist();
        SignupScreen.emptyFirstNameField.waitForExist();
        expect(SignupScreen.emptyFirstNameField.getText()).toEqual('Please enter first name')
        expect(SignupScreen.emptyLastNameField.getText()).toEqual('Please enter last name')

        // let isExisiting = SignupScreen.emptyFirstNameField.isExisting();
        // //let isExisiting = SignupScreen.emptyLastNameField.isExisting();
        // console.log(isExisiting);
    });

    it('should display an error message if user keep email field empty', () => { //email field empty //2
        //LoginScreen.signUpLink.waitForExist();
        //LoginScreen.signUpLink.click();
        //SignupScreen.firstNameField.waitForExist();
        SignupScreen.firstNameField.click();
        SignupScreen.firstNameField.setValue("pamoda");
        SignupScreen.firstNameField.touchAction([
            'press',
            {
                action: 'wait', ms: 1000,
            },
            {action: 'moveTo', x: 500, y: -700},
            'release'
        ]);
        SignupScreen.lastNameField.click();
        SignupScreen.lastNameField.setValue("pamoda");
        SignupScreen.emailAddressField.click();
        SignupScreen.emailAddressField.setValue("");
        SignupScreen.passwordField.click();
        SignupScreen.passwordField.setValue("Salpo@123");
        SignupScreen.confirmPasswordField.click();
        SignupScreen.confirmPasswordField.setValue("Salpo@123");
        SignupScreen.confirmPasswordField.touchAction([
            'press',
            {
                action: 'wait', ms: 1000,
            },
            {action: 'moveTo', x: 500, y: -300},
            'release'
        ]);
        SignupScreen.signupButton.click();
        SignupScreen.signupButton.click();
        //SignupScreen.emptyFirstNameField.waitForExist();
        //SignupScreen.emptyLastNameField.waitForExist();
        SignupScreen.emptyEmailField.waitForExist();
        expect(SignupScreen.emptyEmailField.getText()).toEqual('Please enter email');
        // let isExisiting = SignupScreen.emptyEmailField.isExisting();
        // console.log(isExisiting);
    });


    it('should display an error message if user enter an invalid email address/ wrong email format', () => { //enter incorrect email format //3
        //LoginScreen.signUpLink.click();
        //SignupScreen.firstNameField.waitForExist();
        SignupScreen.firstNameField.click();
        SignupScreen.firstNameField.setValue("pamoda");
        SignupScreen.lastNameField.click();
        SignupScreen.lastNameField.setValue("pamoda");
        SignupScreen.emailAddressField.click();
        SignupScreen.emailAddressField.setValue("pamodas+23salpo")
        SignupScreen.emailAddressField.touchAction([
            'press',
            {
                action: 'wait', ms: 1000,
            },
            {action: 'moveTo', x: 500, y: -700},
            'release'
        ]);
        SignupScreen.passwordField.click();
        SignupScreen.passwordField.setValue("Salpo@123");
        SignupScreen.confirmPasswordField.click();
        SignupScreen.confirmPasswordField.setValue("Salpo@123");
        SignupScreen.confirmPasswordField.touchAction([
            'press',
            {
                action: 'wait', ms: 1000,
            },
            {action: 'moveTo', x: 500, y: -300},
            'release'
        ]);
        SignupScreen.signupButton.click();
        SignupScreen.signupButton.click();
        SignupScreen.emptyPasswordField.waitForExist();
        expect(SignupScreen.emptyPasswordField.getText()).toEqual('Please provide a valid email');

        // let isExisting = SignupScreen.invalidEmailField.isExisting();
        // console.log(isExisting);
        // let isExisiting = SignupScreen.invalidEmailField.isExisting();
        // console.log(isExisiting);
    });

    it('should display an error message if user enter an already registered email address', () => {  //enter already registered email address //4
        //LoginScreen.signUpLink.click();
        //SignupScreen.firstNameField.waitForExist();
        SignupScreen.firstNameField.click();
        SignupScreen.firstNameField.setValue("pamoda");
        SignupScreen.lastNameField.click();
        SignupScreen.lastNameField.setValue("pamoda");
        SignupScreen.emailAddressField.click();
        SignupScreen.emailAddressField.setValue("pamodas@salpo.com");
        SignupScreen.emailAddressField.touchAction([
            'press',
            {
                action: 'wait', ms: 1000,
            },
            {action: 'moveTo', x: 500, y: -700},
            'release'
        ]);
        SignupScreen.passwordField.click();
        SignupScreen.passwordField.setValue("Salpo@123");
        SignupScreen.confirmPasswordField.click();
        SignupScreen.confirmPasswordField.setValue("Salpo@123");
        SignupScreen.confirmPasswordField.touchAction([
            'press',
            {
                action: 'wait', ms: 1000,
            },
            {action: 'moveTo', x: 500, y: -300},
            'release'
        ]);
        SignupScreen.signupButton.click();
        SignupScreen.signupButton.click();
        SignupScreen.signupButton.waitForExist();
        //SignupScreen.alreadyRegisteredEmailField.waitForExist();
        let isExisiting = SignupScreen.signupButton.isExisting(); //this email was already taken
        console.log(isExisiting);
    });


    it('should display an error message if user enter confirm password incorrectly', () => { //enter confirm password incorrectly(incorrect password combination) //5
        //LoginScreen.signUpLink.click();
        //SignupScreen.firstNameField.waitForExist();
        SignupScreen.firstNameField.click();
        SignupScreen.firstNameField.setValue("pamoda");
        SignupScreen.lastNameField.click();
        SignupScreen.lastNameField.setValue("pamoda");
        SignupScreen.emailAddressField.click();
        SignupScreen.emailAddressField.setValue("pamodas+130@salpo.com");
        SignupScreen.emailAddressField.touchAction([
            'press',
            {
                action: 'wait', ms: 1000,
            },
            {action: 'moveTo', x: 500, y: -700},
            'release'
        ]);
        SignupScreen.passwordField.click();
        SignupScreen.passwordField.setValue("Salpo@123");
        SignupScreen.confirmPasswordField.click();
        SignupScreen.confirmPasswordField.setValue("Salpo12");
        SignupScreen.confirmPasswordField.touchAction([
            'press',
            {
                action: 'wait', ms: 1000,
            },
            {action: 'moveTo', x: 500, y: -300},
            'release'
        ]);
        SignupScreen.signupButton.click();
        SignupScreen.signupButton.click();
        SignupScreen.mismatchConfirmPasswordField.waitForExist();
        expect(SignupScreen.mismatchConfirmPasswordField.getText()).toEqual('Passwords does not match');

        //SignupScreen.mismatchConfirmPasswordField.waitForExist();
        let isExisiting = SignupScreen.mismatchConfirmPasswordField.isExisting();
        console.log(isExisiting);
    });


    it('should display an error message if user use incorrect character combination for the password', () => { //8 charactors, upper case, lower case, special character  //6
        //LoginScreen.signUpLink.click();
        //SignupScreen.firstNameField.waitForExist();
        SignupScreen.firstNameField.click();
        SignupScreen.firstNameField.setValue("pamoda");
        SignupScreen.lastNameField.click();
        SignupScreen.lastNameField.setValue("sooriyaarachchi");
        SignupScreen.emailAddressField.click();
        SignupScreen.emailAddressField.setValue("pamodas+129@salpo.com");
        SignupScreen.emailAddressField.touchAction([
            'press',
            {
                action: 'wait', ms: 1000,
            },
            {action: 'moveTo', x: 500, y: -700},
            'release'
        ]);
        SignupScreen.passwordField.click();
        SignupScreen.passwordField.setValue("12345");
        SignupScreen.confirmPasswordField.click();
        SignupScreen.confirmPasswordField.setValue("12345");
        SignupScreen.confirmPasswordField.touchAction([
            'press',
            {
                action: 'wait', ms: 1000,
            },
            {action: 'moveTo', x: 500, y: -300},
            'release'
        ]);
        SignupScreen.signupButton.click();
        SignupScreen.signupButton.click();
        //SignupScreen.passwordSignupErrorField.waitForExist();
        let isExisiting = SignupScreen.passwordSignupErrorField.isExisting();
        console.log(isExisiting);
    });

    it('should display an error message if user use incorrect character combination for the password', () => { //8 charactors, upper case, lower case, special character  //6
        //LoginScreen.signUpLink.click();
        //SignupScreen.firstNameField.waitForExist();
        SignupScreen.firstNameField.click();
        SignupScreen.firstNameField.setValue("pamoda");
        SignupScreen.lastNameField.click();
        SignupScreen.lastNameField.setValue("sooriyaarachchi");
        SignupScreen.emailAddressField.click();
        SignupScreen.emailAddressField.setValue("pamodas+129@salpo.com");
        SignupScreen.emailAddressField.touchAction([
            'press',
            {
                action: 'wait', ms: 1000,
            },
            {action: 'moveTo', x: 500, y: -700},
            'release'
        ]);
        SignupScreen.passwordField.click();
        SignupScreen.passwordField.setValue("123456789");
        SignupScreen.confirmPasswordField.click();
        SignupScreen.confirmPasswordField.setValue("123456789");
        SignupScreen.confirmPasswordField.touchAction([
            'press',
            {
                action: 'wait', ms: 1000,
            },
            {action: 'moveTo', x: 500, y: -300},
            'release'
        ]);
        SignupScreen.signupButton.click();
        SignupScreen.signupButton.click();
        //SignupScreen.passwordSignupErrorField.waitForExist();
        let isExisiting = SignupScreen.passwordSignupErrorField.isExisting();
        console.log(isExisiting);
    });

    it('should display an error message if user use incorrect character combination for the password', () => { //8 charactors, upper case, lower case, special character  //6
        //LoginScreen.signUpLink.click();
        //SignupScreen.firstNameField.waitForExist();
        SignupScreen.firstNameField.click();
        SignupScreen.firstNameField.setValue("pamoda");
        SignupScreen.lastNameField.click();
        SignupScreen.lastNameField.setValue("sooriyaarachchi");
        SignupScreen.emailAddressField.click();
        SignupScreen.emailAddressField.setValue("pamodas+129@salpo.com");
        SignupScreen.emailAddressField.touchAction([
            'press',
            {
                action: 'wait', ms: 1000,
            },
            {action: 'moveTo', x: 500, y: -700},
            'release'
        ]);
        SignupScreen.passwordField.click();
        SignupScreen.passwordField.setValue("123456789S");
        SignupScreen.confirmPasswordField.click();
        SignupScreen.confirmPasswordField.setValue("123456789S");
        SignupScreen.confirmPasswordField.touchAction([
            'press',
            {
                action: 'wait', ms: 1000,
            },
            {action: 'moveTo', x: 500, y: -300},
            'release'
        ]);
        SignupScreen.signupButton.click();
        SignupScreen.signupButton.click();
        //SignupScreen.passwordSignupErrorField.waitForExist();
        let isExisiting = SignupScreen.passwordSignupErrorField.isExisting();
        console.log(isExisiting);
    });

    it('should display an error message if user use incorrect character combination for the password', () => { //8 charactors, upper case, lower case, special character  //6
        //LoginScreen.signUpLink.click();
        //SignupScreen.firstNameField.waitForExist();
        SignupScreen.firstNameField.click();
        SignupScreen.firstNameField.setValue("pamoda");
        SignupScreen.lastNameField.click();
        SignupScreen.lastNameField.setValue("sooriyaarachchi");
        SignupScreen.emailAddressField.click();
        SignupScreen.emailAddressField.setValue("pamodas+129@salpo.com");
        SignupScreen.emailAddressField.touchAction([
            'press',
            {
                action: 'wait', ms: 1000,
            },
            {action: 'moveTo', x: 500, y: -700},
            'release'
        ]);
        SignupScreen.passwordField.click();
        SignupScreen.passwordField.setValue("123456789Ss");
        SignupScreen.confirmPasswordField.click();
        SignupScreen.confirmPasswordField.setValue("123456789Ss");
        SignupScreen.confirmPasswordField.touchAction([
            'press',
            {
                action: 'wait', ms: 1000,
            },
            {action: 'moveTo', x: 500, y: -300},
            'release'
        ]);
        SignupScreen.signupButton.click();
        SignupScreen.signupButton.click();
        //SignupScreen.passwordSignupErrorField.waitForExist();
        let isExisiting = SignupScreen.passwordSignupErrorField.isExisting();
        console.log(isExisiting);
    });

    it('should be able to signup successfully', () => { //user can successfully sign up to the system  //7
        //LoginScreen.signUpLink.click();
        //SignupScreen.firstNameField.waitForExist();
        SignupScreen.firstNameField.click();
        SignupScreen.firstNameField.setValue("pamoda");
        SignupScreen.lastNameField.click();
        SignupScreen.lastNameField.setValue("sooriyaarachchi");
        SignupScreen.emailAddressField.click();
        SignupScreen.emailAddressField.setValue("pamodas+142@salpo.com");
        SignupScreen.emailAddressField.touchAction([
            'press',
            {
                action: 'wait', ms: 1000,
            },
            {action: 'moveTo', x: 500, y: -700},
            'release'
        ]);
        SignupScreen.passwordField.click();
        SignupScreen.passwordField.setValue("Salpo@123");
        SignupScreen.confirmPasswordField.click();
        SignupScreen.confirmPasswordField.setValue("Salpo@123");
        SignupScreen.confirmPasswordField.touchAction([
            'press',
            {
                action: 'wait', ms: 1000,
            },
            {action: 'moveTo', x: 500, y: -300},
            'release'
        ]);
        SignupScreen.signupButton.click();
        SignupScreen.signupButton.click();
        SignupCodeScreen.signupCodeField.waitForExist();
        let isExisiting = SignupCodeScreen.signupCodeField.isExisting();
        console.log(isExisiting);
    });

    //after signup successfully user navigates to sign up code screen

    it('should display Please enter verification code error message', () => {   //if user keep sign up code field empty and tap on sign up button.
        SignupCodeScreen.signupCodeField.waitForExist();
        SignupCodeScreen.signupCodeField.click();
        SignupCodeScreen.signupCodeField.setValue("");                              //Please enter verification code error message displays
        SignupCodeScreen.signupCodeButton.click();
        SignupCodeScreen.emptyCodeField.waitForExist();
        let isExisiting = SignupCodeScreen.emptyCodeField.isExisting();
        console.log(isExisiting);
    });

    it('should display invalid verification toast message if user enter incorrect sign up code', () => {   //if user enters an incorrect sign up code.
        SignupCodeScreen.signupCodeField.waitForExist();
        SignupCodeScreen.signupCodeField.click();
        SignupCodeScreen.signupCodeField.setValue("444");                              //invalid verification error message displays
        SignupCodeScreen.signupCodeButton.click();
        SignupCodeScreen.signupCodeButton.waitForExist();
        let isExisting = SignupCodeScreen.signupCodeButton.isExisting();
        console.log(isExisting);
    });

    it('should be able navigate to sign up page by tapping back button', () => {   //if user enter the correct sign up code.
        SignupCodeScreen.signupCodeField.waitForExist();
        SignupCodeScreen.signUpBackButton.click();
        SignupScreen.emailAddressField.waitForExist();
        // SignupCodeScreen.signupCodeField.click();
        // SignupCodeScreen.signupCodeField.setValue("");
        // SignupCodeScreen.signupCodeField.waitForExist();
        // SignupCodeScreen.signupCodeField.waitForExist();
        // var delayInMilliseconds = 10000000; //10 second
        //
        // setTimeout(function() {
        //     //your code to be executed after 10 seconds
        // }, delayInMilliseconds);
        // SignupCodeScreen.signupCodeButton.waitForExist();
        // SignupCodeScreen.signupCodeButton.click();
        // LoginScreen.loginButton.waitForExist();
        let isExisting = LoginScreen.emailAddressField.isExisting();
        console.log(isExisting);
    });


});


// user tap on login link of the sign up page and navigate to login page
