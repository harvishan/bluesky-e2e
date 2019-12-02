import SignupScreen from '../screenobjects/signup';
import HomeScreen from '../screenobjects/home';
import LoginScreen from '../screenobjects/l

describe('WebdriverIO and Appium, when interacting with a signup form,', () => {
    // beforeEach(() => {
    //     TabBar.waitForTabBarShown(true);
    //     TabBar.openLogin();
    //     LoginScreen.waitForIsShown(true);
    // });

    it('should be able signup successfully', () => {
        LoginScreen.signUpLink.click();
        SignupScreen.firstNameField.waitForExist();
        SignupScreen.firstNameField.setValue("pamoda");
        SignupScreen.lastNameField.setValue("sooriyaarachchi");
        SignupScreen.emailAddressField.setValue("pamodas+23@salpo.com");
        SignupScreen.passwordField.setValue("Salpo@123");
        SignupScreen.confirmPasswordField.setValue("Salpo@123");
        SignupScreen.signupButton.click();
        //LoginScreen.instanceDropdown.waitForExist();
        //let isExisiting = HomeScreen.instanceDropdown.isExisting();
        //console.log(isExisiting);
    });

    it('should be able sign up successfully', () => {

    });
});
