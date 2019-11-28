import NativeAlert from '../helpers/NativeAlert';
import AppScreen from './app.screen';
import Carousel from './components/carousel';

const SELECTORS = {
    SWIPE_SCREEN: '~cardContainer'
};
class HomeScreen extends AppScreen{

    get homeButton() {
        return $('~home');
    }

    get deck(){
        return $('~deckContainer');
    }

    get card(){
        return $('~cardContainer');
    }

    get bookmarkTab(){
        return $('~bookmark');
    }




}

export default new HomeScreen();
