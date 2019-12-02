import profilePageScreen from '../screenobjects/profile';
import InstanceScreen from '../screenobjects/select.instance';
import LoginScreen from '../screenobjects/login';
import PScreen from '../screenobjects/edit.profile';
import HomeScreen from '../screenobjects/home';


describe('WebdriverIO and Appium, when interacting with a signup form,', () => {
    // beforeEach(() => {
    //     TabBar.waitForTabBarShown(true);
    //     TabBar.openLogin();
    //     LoginScreen.waitForIsShown(true);
    // });

    it('should be able to navitage to badges page', () => {
        HomeScreen.profileTab.click();
        let isExisiting = profilePageScreen.badgesLink.isExisting(); //badges pade screen objects
        console.log(isExisiting);
    });

    it('should be able to navigate to the activities page', () => {
        let isExisiting = profilePageScreen.activitiesLink.isExisting(); //activities page screen objects
        console.log(isExisiting);
    });

    it('should be able to navigate to select instance page', () => {
        // HomeScreen.profileTab.click();
        profilePageScreen.selectInstanceLink.waitForExist();
        let isExisiting = profilePageScreen.selectInstanceLink.isExisting(); //select insatance page screen objects
        console.log(isExisiting);
    });

    it('should be able to logout from the app', () => {
        let isExisiting = profilePageScreen.LogoutButton.isExisting(); //Login screen objects
        console.log(isExisiting);
    });

    it('should be able to edit user profile', () => {
        let isExisiting = profilePageScreen.profilepage_editprofileLink.waitForExist();
        console.log(isExisiting);

    });


});

