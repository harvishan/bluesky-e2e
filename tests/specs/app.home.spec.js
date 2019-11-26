import LoginScreen from '../screenobjects/login';
import HomeScreen from '../screenobjects/home';
import ResetPasswordScreen from '../screenobjects/reset_password';
import CardScreen from '../screenobjects/card';

describe('Logged in user whose default instance is cricket,', () => {
    // beforeEach(() => {
    //     TabBar.waitForTabBarShown(true);
    //     TabBar.openLogin();
    //     LoginScreen.waitForIsShown(true);
    // });

    it('should be able to see the first image by tapping on the first deck', () => {
        // LoginScreen.emailAddressField.setValue("harshan+1111@salpo.com");
        // LoginScreen.passwordField.setValue("Click1191@");
        // LoginScreen.loginButton.click();
        HomeScreen.homeButton.waitForExist();
        HomeScreen.deck.waitForExist();
        HomeScreen.deck.click();
        HomeScreen.card.waitForExist();
        CardScreen.imageCard.waitForExist();
    });

    it('should be able to see the video card by swiping', () => {
        CardScreen.likeButton.touchAction([
            'press',
            {
                action: 'wait', ms: 1000,
            },
            {action: 'moveTo', x: -700, y: 227},
            'release'
        ]);
    });

    it('should be able to flip the video card by tapping', () => {
        CardScreen.likeButton.touchAction([
            {action: 'press', x: 368, y: 1440},
            {
                action: 'wait', ms: 1000,
            },
            'release'
        ]);
        let isExisting = CardScreen.textCardImage.waitForExist();
        console.log(isExisting);
    });

    it('should be able to see the question cards by swiping and see the answer on the back of the card', () => {
        CardScreen.likeButton.touchAction([
            'press',
            {
                action: 'wait', ms: 1000,
            },
            {action: 'moveTo', x: -700, y: 227},
            'release'
        ]);
        expect(CardScreen.QnAQuestion.getText()).toEqual('What is the favorite shot ?');

        CardScreen.likeButton.touchAction([
            {action: 'press', x: 368, y: 1440},
            {
                action: 'wait', ms: 1000,
            },
            'release'
        ]);
        expect(CardScreen.QnAQuestion.getText()).toEqual('Pullshot');
    });

    it('should be able to see a link card and flip', () => {
        CardScreen.likeButton.touchAction([
            'press',
            {
                action: 'wait', ms: 1000,
            },
            {action: 'moveTo', x: -700, y: 227},
            'release'
        ]);
        expect(CardScreen.linkTitle.getText()).toEqual('pullshotz');
        let isExisting = CardScreen.membeddedLink.waitForExist();
        console.log(isExisting);

        CardScreen.likeButton.touchAction([
            {action: 'press', x: 368, y: 1440},
            {
                action: 'wait', ms: 1000,
            },
            'release'
        ]);
        CardScreen.cardFrontTitle.waitForExist();
        expect(CardScreen.cardFrontTitle.getText()).toEqual('pullshot');
        expect(CardScreen.cardFrontBody.getText()).toEqual('pullshot');
    });

    it('should be able to see a audio card by swiping and flip to see the back side', () => {
        CardScreen.likeButton.touchAction([
            'press',
            {
                action: 'wait', ms: 1000,
            },
            {action: 'moveTo', x: -700, y: 227},
            'release'
        ]);
        let isExisting = HomeScreen.card.waitForExist();
        console.log(isExisting);

        CardScreen.likeButton.touchAction([
            {action: 'press', x: 368, y: 1440},
            {
                action: 'wait', ms: 1000,
            },
            'release'
        ]);
        CardScreen.cardFrontTitle.waitForExist();
        expect(CardScreen.cardFrontTitle.getText()).toEqual('pullshot 1');
        expect(CardScreen.cardFrontBody.getText()).toEqual('pullshot 2');
    });

    it('should be able to see a image card by swiping and flip to see the back side', () => {
        CardScreen.likeButton.touchAction([
            'press',
            {
                action: 'wait', ms: 1000,
            },
            {action: 'moveTo', x: -700, y: 227},
            'release'
        ]);
        // let isExisting = CardScreen.imageCard.waitForExist();
        // console.log(isExisting);
        CardScreen.cardFrontTitle.waitForExist();
        expect(CardScreen.cardFrontTitle.getText()).toEqual('Pullshot');
        expect(CardScreen.cardFrontBody.getText()).toEqual('body descrioption');

        CardScreen.likeButton.touchAction([
            {action: 'press', x: 368, y: 1440},
            {
                action: 'wait', ms: 1000,
            },
            'release'
        ]);
        CardScreen.cardFrontTitle.waitForExist();
        expect(CardScreen.cardFrontTitle.getText()).toEqual('Pullshot back');
        expect(CardScreen.cardFrontBody.getText()).toEqual('body descrioption');
    });

    // fit('should be able to see a MCQ card by swiping and flip to see the back side', () => {
    //     CardScreen.likeButton.touchAction([
    //         'press',
    //         {
    //             action: 'wait', ms: 1000,
    //         },
    //         {action: 'moveTo', x: -700, y: 227},
    //         'release'
    //     ]);
    //     let isExisting = CardScreen.mcqQuestion.waitForExist();
    //     console.log(isExisting);
    //     // CardScreen.cardFrontTitle.waitForExist();
    //     expect(CardScreen.mcqQuestion.getText()).toEqual('Pull shot');
    //     // expect(CardScreen.cardFrontBody.getText()).toEqual('body descrioption');
    //
    //     CardScreen.likeButton.touchAction([
    //         {action: 'press', x: 368, y: 1440},
    //         {
    //             action: 'wait', ms: 1000,
    //         },
    //         'release'
    //     ]);
    //     CardScreen.cardFrontTitle.waitForExist();
    //     expect(CardScreen.cardFrontTitle.getText()).toEqual('Pullshot back');
    //     expect(CardScreen.cardFrontBody.getText()).toEqual('body descrioption');
    // });
});
