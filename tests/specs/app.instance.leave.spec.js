import InstanceScreen from '../screenobjects/select.instance';
import ProfilePageScreen from "../screenobjects/profile";
import HomeScreen from "../screenobjects/home";
import CardScreen from "../screenobjects/card";
import LoginScreen from "../screenobjects/login";
import profilePageScreen from "../screenobjects/profile";

describe('The logged in user,', () => {
// beforeEach(() => {
//     TabBar.waitForTabBarShown(true);
//     TabBar.openLogin();
//     LoginScreen.waitForIsShown(true);
// });
    fit('should be able remove instance successfully from all Instances', () => {
        HomeScreen.profileTab.click();
        ProfilePageScreen.selectInstanceLink.click();
        InstanceScreen.AllInstanceLink.waitForExist();
        InstanceScreen.AllInstanceLink.click();
        InstanceScreen.InvitationCodeField.waitForExist();
        InstanceScreen.MyInstancesLink.click();
        CardScreen.backButton.waitForExist();
        InstanceScreen.InstanceDeleteButton[0].waitForExist();
        InstanceScreen.InstanceDeleteButton[0].click();
        InstanceScreen.AllInstanceLink.waitForExist();
        // InstanceScreen.instancesFromList[0].waitForExist();
        // InstanceScreen.AllInstanceLink.click();
        // InstanceScreen.InvitationCodeField.waitForExist();
        // InstanceScreen.MyInstancesLink.click();
        // CardScreen.backButton.waitForExist();
        // CardScreen.backButton.click();
        // ProfilePageScreen.selectInstanceLink.waitForExist();
        // ProfilePageScreen.selectInstanceLink.click();
        // InstanceScreen.MyInstancesLink.click();
        expect(InstanceScreen.instancesFromList.length).toEqual(1);
        CardScreen.backButton.click();

});
});