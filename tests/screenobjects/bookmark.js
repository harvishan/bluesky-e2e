import NativeAlert from '../helpers/NativeAlert';
import AppScreen from './app.screen';
import Carousel from './components/carousel';

class BookmarkScreen extends AppScreen{

    get bookmarkCardTitle() {
        return $('~bookmarkCardTitle');
    }

    get noBookmarkText(){
        return $('~noBookmarkText');
    }

}

export default new BookmarkScreen();
