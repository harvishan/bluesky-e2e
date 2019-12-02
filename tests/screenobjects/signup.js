import NativeAlert from '../helpers/NativeAlert';
import AppScreen from './app.screen';
class SignupScreen extends AppScreen{
    get firstNameField() {
        return $('~firstNameSignup');
    }
    get lastNameField (){
        return $('~lastNameSignup');
    }
    get emailAddressField (){
            return $('~emailSignup');
        }
    get passwordField (){
            return $('~passwordSignup');
        }
    get confirmPasswordField (){
            return $('~passwordConfirmSignup');
        }
    get signupButton (){
        return $('~signupCommand');
    }
    get LoginLink(){
        return $('~loginCommand');
    }
}
export default new SignupScreen();
