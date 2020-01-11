let result = (function () {
    const faces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    let validSuits = ['♠', '♥', '♦', '♣'];
    const Suits = {
        SPADES: "♠",
        HEARTS: "♥",
        DIAMONDS: "♦",
        CLUBS: "♣"
    };

    class Card {
        constructor(face, suit){
            this.face = face;
            this.suit = suit;
        }



        get face(){
            return this._face;
        }

        set face(value){
            if (faces.includes(value)){
                this._face = value;
            }else{
                throw new TypeError("Face did not match!");
            }

        }

        get suit(){
            return this._suit;
        }

        set suit(value){
            if (validSuits.includes(value)){
                this._suit = value;
            }else{
                throw new TypeError("Suit did not match!");
            }
        }

    }

    return {
        Suits:Suits,
        Card:Card
    }
}());

let Card = result.Card;
let Suits = result.Suits;

//let card = new Card("1", Suits.CLUBS);
let card2 = new Card("2", Suits.HEARTS);
//let card3 = new Card("3", 'hearts');