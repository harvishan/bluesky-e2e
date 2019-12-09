import NativeAlert from '../helpers/NativeAlert';
import AppScreen from './app.screen';
import Carousel from './components/carousel';
import HomeScreen from '../screenobjects/home';
import ProfileScreen from '../screenobjects/profile';
import LoginScreen from '../screenobjects/login';


class LogoutHelper{

    public static Logout() {
        HomeScreen.profileTab.click();
        ProfileScreen.LogoutButton.waitForExist();
        ProfileScreen.LogoutButton.click();
        LoginScreen.emailAddressField.waitForExist();
    }





}

export default LogoutHelper();
