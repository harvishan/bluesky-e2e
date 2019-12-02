import AppScreen from './app.screen';

class InstanceScreen extends AppScreen{

    get MyInstancesLink() {
        return $('~myInstanceChip');
    }

    get MyInstancesListLink() {
        return $('~myInstanceList');
    }

    get AllInstanceLink() {
        return $('~allInstanceChip');
    }

    get InstanceJoinButton() {
        return $('~instanceJoinButton');
    }
    get AllInstancesListLink() {
        return $('~allInstanceList');
    }
    get InvitationCodeField() {
        return $('~instanceInvitationCode');
    }

    get instancesFromList(){
        return $$('~instanceListItem');
    }

    get InstanceDeleteButton(){
        return $$('~instanceItemDeleteButton');
    }


}

export default new InstanceScreen();