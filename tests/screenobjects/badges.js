import NativeAlert from '../helpers/NativeAlert';
import AppScreen from './app.screen';
import Carousel from './components/carousel';

class BadgesScreen extends AppScreen{

    get badgesContainer() {
        return $('~badgeContainer');
    }

}

export default new BadgesScreen();
