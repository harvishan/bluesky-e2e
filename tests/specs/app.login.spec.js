import LoginScreen from '../screenobjects/login';
import HomeScreen from '../screenobjects/home';

describe('WebdriverIO and Appium, when interacting with a login form,', () => {
    // beforeEach(() => {
    //     TabBar.waitForTabBarShown(true);
    //     TabBar.openLogin();
    //     LoginScreen.waitForIsShown(true);
    // });

    it('should be able login successfully', () => {
        LoginScreen.emailAddressField.setValue("harshanw@salpo.com");
        LoginScreen.passwordField.setValue("Click1191@");
        LoginScreen.loginButton.click();
        HomeScreen.instanceDropdown.waitForExist();
        let isExisiting = HomeScreen.instanceDropdown.isExisting();
        console.log(isExisiting);
    });

    xit('should be able sign up successfully', () => {

    });
});
