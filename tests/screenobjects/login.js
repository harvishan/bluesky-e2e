import NativeAlert from '../helpers/NativeAlert';
import AppScreen from './app.screen';


class LoginScreen extends AppScreen{


    // get emailAddressField() {
    //     return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.EditText');
    // }

    get emailAddressField() {
        return $('(//android.widget.EditText)[1]');
    }

    // get passwordField (){
    //     return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.EditText');
    // }

    get passwordField (){
        return $('(//android.widget.EditText)[2]');
    }

    get loginButton (){
        return $('//android.view.ViewGroup[3]');
    }
}

export default new LoginScreen();
