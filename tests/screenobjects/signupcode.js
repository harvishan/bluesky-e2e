import NativeAlert from '../helpers/NativeAlert';
import AppScreen from './app.screen';
// import SignupScreen from './app.signupcode';

class SignupCodeScreen extends AppScreen{


    get signupCodeField() {
        return $('~signupCode');
    }
    get signupCodeButton (){
        return $('~signupConfirmButton');
    }
    get emptyCodeField() {
        return $('~signupCodeError')  //Please enter verification code error message
    }

    get signUpBackButton(){
        return $('~signupBackButton');
    }
}

export default new SignupCodeScreen();
