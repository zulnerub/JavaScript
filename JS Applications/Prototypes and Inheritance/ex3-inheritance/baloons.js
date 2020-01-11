function solve() {
    class Balloon {
        color;
        gasWeight;
        constructor(col, gasW){
            this.color = col;
            this.gasWeight = gasW;
        }


    }

    class PartyBalloon extends Balloon{
        _ribbon;
        constructor(col, gasW, ribCol, ribLen){
            super(col, gasW);
            this._ribbon = {
                color: ribCol,
                length: ribLen
            }
        }

        get ribbon(){
            return this._ribbon;
        }
    }

    class BirthdayBalloon extends PartyBalloon{
        _text;
        constructor(col, gasW, ribCol, ribLen, text){
            super(col, gasW, ribCol, ribLen);
            this._text = text;
        }

        get text(){
            return this._text;
        }
    }
    return {
        Balloon: Balloon,
        PartyBalloon: PartyBalloon,
        BirthdayBalloon: BirthdayBalloon
    }
}
