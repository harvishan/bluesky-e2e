import HomeScreen from '../screenobjects/home';
// import Profilepage_editprofileScreen from '../screenobjects/profilepage_editProfile';
import PScreen from '../screenobjects/edit.profile';
import ProfilePageScreen from "../screenobjects/profile";
import CardScreen from "../screenobjects/card";
import BookmarkScreen from "../screenobjects/bookmark";


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


    it('should be able to update password successfully', () => {
        ProfilePageScreen.profilepage_editprofileLink.click();
        PScreen.firstNameField.waitForExist();
        PScreen.oldPasswordField.click();
        PScreen.oldPasswordField.setValue("Asd123++");
        PScreen.newPasswordField.click();
        PScreen.newPasswordField.setValue("Salpo@123");
        PScreen.confirmPasswordField.click();
        PScreen.confirmPasswordField.setValue("Salpo@123");
        PScreen.updateButton.scrollIntoView()
        PScreen.updateButton.click();
        let isExisiting = PScreen.firstNameField.isExisting();
        console.log(isExisiting);
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

    fit('should not be notified of password policy', () => {
        PScreen.newPasswordField.clearValue();
        PScreen.confirmPasswordError.clearValue();
        PScreen.newPasswordField.setValue("Salpo");
        PScreen.confirmPasswordField.setValue("Salpo@123");
        PScreen.updateButton.click();
        expect(PScreen.newPasswordError.getText()).toEqual('New password must be at least 8 characters');
        expect(PScreen.confirmPasswordError.getText()).toEqual('Passwords does not match');


    });



        it('should not be able to update password if user enters incorrect password combination for password field and confirm password field', () => {
        PScreen.oldPasswordField.click();
        PScreen.oldPasswordField.setValue("Asd123++");
        PScreen.newPasswordField.click();
        PScreen.newPasswordField.setValue("Salpo@123");
        PScreen.confirmPasswordField.click();
        PScreen.confirmPasswordField.setValue("Salpo@");
        PScreen.updateButton.click();
        let isExisiting = PScreen.firstNameField.isExisting();
        console.log(isExisiting);
    });

    it('should not be able to update password if user enters incorrect character combination for new password', () => {
    PScreen.oldPasswordField.click();
    PScreen.oldPasswordField.setValue("Asd123++");
    PScreen.newPasswordField.click();
    PScreen.newPasswordField.setValue("12345678");
    PScreen.confirmPasswordField.click();
    PScreen.confirmPasswordField.setValue("12345678");
    let isExisiting = PScreen.firstNameField.isExisting();
    console.log(isExisiting);
    });
});
