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
        return $('~signupButton');
    }
    get LoginLink(){
        return $('~loginCommand');
    }

    get emptyFirstNameField(){
        return $('~firstNameSignupError');          //user keep first name empty
    }
    get emptyLastNameField(){
        return $('~lastNameSignupError');          //user keep last name empty
    }
    get emptyEmailField(){
        return $('~emailSignupError');          //user keep email address empty
    }
    get emptyPasswordField(){
        return $('~emailSignupError');          //user keep password field empty
    }
    get mismatchConfirmPasswordField(){
        return $('~passwordConfirmSignupError');     //user enter password and confirm password incorrectly
    }

    get alreadyRegisteredEmailField(){
        return $('~');                          //user keep confirm password field empty  - toast message
    }
    get passwordSignupErrorField(){
        return $('~passwordSignupError');                          //user keep confirm password field empty  - toast message
    }


}
export default new SignupScreen();

