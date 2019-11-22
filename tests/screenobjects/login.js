import NativeAlert from '../helpers/NativeAlert';
import AppScreen from './app.screen';

class LoginScreen extends AppScreen{

    get emailAddressField() {
        return $('~emailLoginFrom');
    }

    get passwordField (){
        return $('~passwordLoginFrom');
    }

    get loginButton (){
        // return $('//android.view.ViewGroup[3]');
        return $('~Login');
    }
}

export default new LoginScreen();
