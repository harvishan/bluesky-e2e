import NativeAlert from '../helpers/NativeAlert';
import AppScreen from './app.screen';

class profilePageScreen extends AppScreen{

    get badgesLink() {
        return $('~profileBadgesCommand');
    }

    get activitiesLink (){
        return $('~profileActivityCommand');
    }
    get selectInstanceLink (){
        // return $('//android.view.ViewGroup[3]');
        return $('~profileInstanceCommand');
    }
    get profilepage_editprofileLink(){
        return $('~profileEditCommand');
    }

    get LogoutButton(){
    return $('~profileLogoutCommand');
    }
}
export default new profilePageScreen();
