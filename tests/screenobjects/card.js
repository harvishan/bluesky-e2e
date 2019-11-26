import NativeAlert from '../helpers/NativeAlert';
import AppScreen from './app.screen';

class CardScreen extends AppScreen{

    get cardNo() {
        return $('~cardNumber');
    }
    get cardFrontTitle(){
        return $('~textCardTitleText');
    }
    get cardFrontBody(){
        return $('~textCardBodyText');
    }
    get likeButton(){
        return $('~likeButton');
    }
    get mcqQuestion(){
        return $('~mcqCardQuestion');
    }

    get imageCard(){
        return $('~imageCardBackgroundImage');
    }

    get textCardImage(){
        return $('~textCardBackgroundImage');
    }

    get QnAQuestion(){
        return $('~questionCardQuestionAnswer');
    }
    get linkTitle(){
        return $('~linkTitle');
    }

    get membeddedLink(){
        return $('~lickClick');
    }

    get mcqCardQuestion(){
        return $('~mcqCardQuestion');
    }


}
export default new CardScreen();
