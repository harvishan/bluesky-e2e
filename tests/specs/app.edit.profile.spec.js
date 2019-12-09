import HomeScreen from '../screenobjects/home';
import PScreen from '../screenobjects/edit.profile';
import ProfilePageScreen from "../screenobjects/profile";
import CardScreen from "../screenobjects/card";
import BookmarkScreen from "../screenobjects/bookmark";
import LoginScreen from "../screenobjects/login";


describe('The logged in user,', () => {
    // beforeEach(() => {
    //     TabBar.waitForTabBarShown(true);
    //     TabBar.openLogin();
    //     LoginScreen.waitForIsShown(true);
    // });

    fit('should be able to edit first name or second name or both successfully', () => {
        let z = Math.random();
        console.log(z);
        HomeScreen.profileTab.click();
        ProfilePageScreen.profilepage_editprofileLink.waitForExist();
        ProfilePageScreen.profilepage_editprofileLink.click();
        PScreen.firstNameField.waitForExist();
        PScreen.firstNameField.clearValue();
        PScreen.firstNameField.setValue("CRICKET"+z);
        PScreen.lastNameField.clearValue();
        PScreen.lastNameField.setValue("USER"+z);
        PScreen.firstNameField.touchAction([
            'press',
            {
                action: 'wait', ms: 1000,
            },
            {action: 'moveTo', x: 500, y: -300},
            'release'
        ]);
        PScreen.updateButton.waitForDisplayed();
        PScreen.updateButton.click();
        let isExisiting = PScreen.firstNameField.isExisting();
        console.log(isExisiting);
        CardScreen.backButton.click();
        ProfilePageScreen.profilepage_editprofileLink.waitForExist();
        HomeScreen.bookmarkTab.click();
        BookmarkScreen.noBookmarkText.waitForExist();
        HomeScreen.profileTab.click();
        ProfilePageScreen.profilepage_editprofileLink.waitForExist();
        ProfilePageScreen.profilepage_editprofileLink.click();
        PScreen.firstNameField.waitForExist();
        // expect(PScreen.firstNameField.getText()).toEqual('CRICKET'+z);

        // CardScreen.backButton.click();
        // ProfilePageScreen.profilepage_editprofileLink.waitForExist();

        expect(PScreen.editProfileName.getText()).toEqual('CRICKET'+z+' USER'+z);
        // CRICKET0.8485861262897945 USER0.8485861262897945
    });


    fit('should not be able to update password successfully if user enters an incorrect old password', () => {
        CardScreen.backButton.click();
        ProfilePageScreen.profilepage_editprofileLink.waitForExist();
        ProfilePageScreen.profilepage_editprofileLink.click();
        PScreen.firstNameField.waitForExist();
        // PScreen.oldPasswordField.click();
        PScreen.oldPasswordField.setValue("salpo");
        PScreen.firstNameField.touchAction([
            'press',
            {
                action: 'wait', ms: 1000,
            },
            {action: 'moveTo', x: 500, y: -300},
            'release'
        ]);
        PScreen.newPasswordField.setValue("Salpo@123");
        PScreen.confirmPasswordField.setValue("Salpo@123");
        PScreen.updateButton.click();
        //Message ribbon ID need to be defined to verity this
        let isExisiting = PScreen.firstNameField.isExisting();
        console.log(isExisiting);
    });

    fit('should not be notified of password policy of minimum 8 characters and password conformation matching validation', () => {
        PScreen.newPasswordField.clearValue();
        PScreen.confirmPasswordError.clearValue();
        PScreen.newPasswordField.setValue("Salpo");
        PScreen.confirmPasswordField.setValue("Salpo@123");
        PScreen.updateButton.click();
        expect(PScreen.newPasswordError.getText()).toEqual('New password must be at least 8 characters');
        expect(PScreen.confirmPasswordError.getText()).toEqual('Passwords does not match');

    });

    fit('should be notified of new password should contain a uppercase character', () => {
        PScreen.newPasswordField.clearValue();
        // PScreen.confirmPasswordError.clearValue();
        PScreen.newPasswordField.setValue("12345678");
        // PScreen.confirmPasswordField.setValue("Salpo@123");
        // PScreen.updateButton.click();
        expect(PScreen.newPasswordError.getText()).toEqual('Password should have at least one upper case letter');

    });

    fit('should be notified of new password should contain a lowercase character', () => {
        PScreen.newPasswordField.clearValue();
        PScreen.newPasswordField.setValue("1234567A");
        expect(PScreen.newPasswordError.getText()).toEqual('Password should have at least one lower case letter');

    });

    fit('should be notified of new password should contain a special character', () => {
        PScreen.newPasswordField.clearValue();
        PScreen.newPasswordField.setValue("123456Aa");
        expect(PScreen.newPasswordError.getText()).toEqual('Password should have at least one special character');

    });

    fit('should be notified of new password cannot be old password ', () => {
        PScreen.oldPasswordField.clearValue();
        PScreen.newPasswordField.clearValue();
        PScreen.confirmPasswordError.clearValue();
        PScreen.oldPasswordField.setValue("Click1191@");
        PScreen.newPasswordField.setValue("Click1191@");
        PScreen.confirmPasswordField.setValue("Click1191@");
        PScreen.updateButton.click();
        let isExisiting = PScreen.firstNameField.isExisting();
        console.log(isExisiting);
    });


    fit('should be able to update password successfully', () => {
        PScreen.newPasswordField.clearValue();
        PScreen.confirmPasswordError.clearValue();
        PScreen.oldPasswordField.setValue("Click1191@");
        PScreen.newPasswordField.setValue("Click1191@1");
        PScreen.confirmPasswordField.setValue("Click1191@1");
        PScreen.updateButton.click();
        ProfilePageScreen.LogoutButton.waitForExist();
        ProfilePageScreen.LogoutButton.click();

        LoginScreen.emailAddressField.waitForExist();
        LoginScreen.emailAddressField.setValue("harshanw+1007@salpo.com");
        LoginScreen.passwordField.setValue("Click1191@1");
        LoginScreen.loginButton.click();
        HomeScreen.homeButton.waitForExist();
        let isExisting = HomeScreen.homeButton.isExisting();
        console.log(isExisting);

        HomeScreen.profileTab.click();
        ProfilePageScreen.profilepage_editprofileLink.waitForExist();
        ProfilePageScreen.profilepage_editprofileLink.click();
        PScreen.firstNameField.waitForExist();
        PScreen.oldPasswordField.setValue("Click1191@1");
        PScreen.firstNameField.touchAction([
            'press',
            {
                action: 'wait', ms: 1000,
            },
            {action: 'moveTo', x: 500, y: -300},
            'release'
        ]);
        PScreen.newPasswordField.setValue("Click1191@");
        PScreen.confirmPasswordField.setValue("Click1191@");
        PScreen.updateButton.click();
        ProfilePageScreen.LogoutButton.waitForExist();
        ProfilePageScreen.LogoutButton.click();
        LoginScreen.emailAddressField.waitForExist();    });
});
