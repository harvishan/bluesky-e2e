import NativeAlert from '../helpers/NativeAlert';
import AppScreen from './app.screen';

class ResetPasswordScreen extends AppScreen{

    get emailAddressField() {
        return $('~resetEmail');
    }

    get resetPasswordButton() {
        return $('~passwordResetButton');
    }

    get resetSuccessHeader(){
        return $('~resetSuccessHeader');
    }

    get popupMessage(){
        return $('~Please enter valid email');
    }

    get backButton(){
        return $('~passwordResetBackButton');
    }

    get resetEmailFieldError(){
        return $('~resetEmailError');
    }

    get backToLoginButton(){
        return $('~resetPasswordLoginBack');
    }

}



export default new ResetPasswordScreen();
