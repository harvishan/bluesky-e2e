import NativeAlert from '../helpers/NativeAlert';
import AppScreen from './app.screen';

class HomeScreen extends AppScreen{

    get homeButton() {
        return $('~home');
    }

    get deck() {
        return $('~deckContainer');
    }

    get bookmarksLink() {
        return $('~bookmark');
    }

    get notificationsLink() {
        return $('~notification');
    }

    get card(){
        return $('~cardContainer');
    }

    get bookmarkTab(){
        return $('~bookmark');
    }

    get profileTab() {
        return $('~profile');
    }

}

export default new HomeScreen();
