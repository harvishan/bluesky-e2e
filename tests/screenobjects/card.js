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

    get mcqRadioButton(){
        return $$('~radioButton');
    }

    get addNote(){
        return $('~cardTurnTapButton');
    }

    get likeCount(){
        return $('~likeCountLabel');
    }

    get bookMark(){
        return $('~bookmarkButton');
    }

    get backButton(){
        return $('~Go back');
    }

}
export default new CardScreen();
