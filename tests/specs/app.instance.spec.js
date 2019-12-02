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

    fit('should be able join instance successfully from all Instances', () => {
        HomeScreen.profileTab.click();
        ProfilePageScreen.selectInstanceLink.click();
        InstanceScreen.AllInstanceLink.waitForExist();
        InstanceScreen.AllInstanceLink.click();
        InstanceScreen.InvitationCodeField.waitForExist();
        InstanceScreen.instancesFromList[0].click();
        CardScreen.backButton.click();
        ProfilePageScreen.selectInstanceLink.waitForExist();
        ProfilePageScreen.selectInstanceLink.click();
        InstanceScreen.MyInstancesLink.click();
        expect(InstanceScreen.instancesFromList.length).toEqual(2);
    });

    fit('should be able remove instance successfully from all Instances', () => {
        InstanceScreen.InstanceDeleteButton[0].click();
        CardScreen.backButton.click();
        ProfilePageScreen.selectInstanceLink.waitForExist();
        ProfilePageScreen.selectInstanceLink.click();
        InstanceScreen.MyInstancesLink.click();
        expect(InstanceScreen.instancesFromList.length).toEqual(1);
        CardScreen.backButton.click();

    });

    // fit('should not be able to join invite only instance using an invalid code', () => {
    //     ProfilePageScreen.LogoutButton.click();
    //     LoginScreen.emailAddressField.waitForExist();
    //     LoginScreen.emailAddressField.setValue("harshanw+1008@salpo.com");
    //     LoginScreen.passwordField.setValue("Click1191@");
    //     LoginScreen.loginButton.click();
    //     HomeScreen.homeButton.waitForExist();
    //     let isExisting = HomeScreen.homeButton.isExisting();
    //     console.log(isExisting);
    //     HomeScreen.profileTab.click();
    //     profilePageScreen.badgesLink.waitForExist();
    //     ProfilePageScreen.selectInstanceLink.click();
    //     InstanceScreen.AllInstanceLink.waitForExist();
    //     InstanceScreen.AllInstanceLink.click();
    //     InstanceScreen.InvitationCodeField.waitForExist();
    //     InstanceScreen.InvitationCodeField.setValue('xxx');
    //     InstanceScreen.InstanceJoinButton.click();
    //     InstanceScreen.InvitationCodeField.waitForExist();
    //
    // });
    //
    // fit('should not be able to join invite only instance using an valid code', () => {
    //     InstanceScreen.InvitationCodeField.clearValue('');
    //     InstanceScreen.InvitationCodeField.setValue('88e75f7eb159d9ce');
    //     InstanceScreen.InstanceJoinButton.click();
    //
    // });



    xit('should be able to add instance to My instances from All list', () => {
        InstanceScreen.AllInstanceLink.click();
        InstanceScreen.AllInstancesListLink.click();
        InstanceScreen.AllInstancesListLink.waitForExist();
        let isExisiting = InstanceScreen.AllInstancesListLink.isExisting();
        console.log(isExisiting);
    });

    xit('should be able to join with invite only instance', () => {
        InstanceScreen.AllInstanceLink.click();
        InstanceScreen.InvitationCodeField.click();
        InstanceScreen.InvitationCodeField.setValue(" ");
        InstanceScreen.InstanceJoinButton.click();
        InstanceScreen.AllInstancesListLink.waitForExist();
        let isExisiting = InstanceScreen.AllInstancesListLink.isExisting();
        console.log(isExisiting);
    });

    xit('should be display error message if user enters an incorrect invitation code', () => {
        InstanceScreen.AllInstanceLink.click();
        InstanceScreen.InvitationCodeField.click();
        InstanceScreen.InvitationCodeField.setValue(" ");
        InstanceScreen.InstanceJoinButton.click();
        //InstanceScreen.AllInstancesListLink.waitForExist();
        //let isExisiting = InstanceScreen.AllInstancesListLink.isExisting();
        //console.log(isExisiting);
    });


    });