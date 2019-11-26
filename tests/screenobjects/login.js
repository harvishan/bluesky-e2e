import NativeAlert from '../helpers/NativeAlert';
import AppScreen from './app.screen';

class LoginScreen extends AppScreen{

    get emailAddressField() {
        return $('~emailLogin');
    }

    get passwordField (){
        return $('~passwordLogin');
    }

    get loginButton (){
        // return $('//android.view.ViewGroup[3]');
        return $('~loginButton');
    }

    get forgotPasswordLink(){
        return $('~forgotPasswordLogin');
    }
}

export default new LoginScreen();
