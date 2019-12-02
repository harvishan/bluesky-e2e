import Pscreen from './edit.profile';
import AppScreen from './app.screen';


class EditProfileScreen extends AppScreen{

    get firstNameField() {
        return $('~editProfileFirstName');
    }

    get lastNameField (){
        return $('~editProfileLastName');
    }
    get oldPasswordField (){
            return $('~editProfileOldPassword');
        }
    get newPasswordField (){
            return $('~editProfileNewPassword');
        }
    get confirmPasswordField (){
                return $('~editProfileConfirmPassword');
            }
    get updateButton (){
        return $('~editProfileUpdateButton');
    }

    get editProfileName(){
        return $('~editProfileShowName');
    }

    get newPasswordError(){
        return $('~editProfileNewPasswordError');
    }

    get confirmPasswordError(){
        return $('~editProfileConfirmPasswordError');
    }

}
export default new EditProfileScreen();
