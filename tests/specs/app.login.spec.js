import LoginScreen from '../screenobjects/login';
import HomeScreen from '../screenobjects/home';
import ResetPasswordScreen from '../screenobjects/reset_password';

describe('WebdriverIO and Appium, when interacting with a login form,', () => {
    // beforeEach(() => {
    //     TabBar.waitForTabBarShown(true);
    //     TabBar.openLogin();
    //     LoginScreen.waitForIsShown(true);
    // });


    fit('should not be allowed to proceed if the email does not exist in the system', () => {
        LoginScreen.forgotPasswordLink.click();
        ResetPasswordScreen.emailAddressField.waitForExist();
        // ResetPasswordScreen.emailAddressField.clearValue();
        ResetPasswordScreen.emailAddressField.setValue("harshanw+10000000000@salpo.com");
        ResetPasswordScreen.resetPasswordButton.click();
        ResetPasswordScreen.resetPasswordButton.waitForExist();
        let isExisting = ResetPasswordScreen.resetPasswordButton.isExisting();
        console.log(isExisting);
    });

    fit('should be notified to enter an email if user tried to send request without inserting an email address', () => {
        // LoginScreen.forgotPasswordLink.click();
        // ResetPasswordScreen.emailAddressField.waitForExist();
        ResetPasswordScreen.emailAddressField.clearValue();
        ResetPasswordScreen.resetPasswordButton.click();
        ResetPasswordScreen.resetEmailFieldError.waitForExist();
        expect(ResetPasswordScreen.resetEmailFieldError.getText()).toEqual('Please enter email');
    });

    fit('should be able send reset password request', () => {
        // LoginScreen.forgotPasswordLink.click();
        // ResetPasswordScreen.emailAddressField.waitForExist();
        ResetPasswordScreen.emailAddressField.clearValue();
        ResetPasswordScreen.emailAddressField.setValue("harshanw+1006@salpo.com");
        ResetPasswordScreen.resetPasswordButton.click();
        ResetPasswordScreen.resetSuccessHeader.waitForExist();
        let isExisting = ResetPasswordScreen.resetSuccessHeader.isExisting();
        console.log(isExisting);
        ResetPasswordScreen.backToLoginButton.click();
        LoginScreen.forgotPasswordLink.waitForExist();
    });

    fit('should be able to login successfully', () => {
        LoginScreen.emailAddressField.setValue("harshanw+1006@salpo.com");
        LoginScreen.passwordField.setValue("Click1191@");
        LoginScreen.loginButton.click();
        HomeScreen.homeButton.waitForExist();
        let isExisting = HomeScreen.homeButton.isExisting();
        console.log(isExisting);
    });

});
