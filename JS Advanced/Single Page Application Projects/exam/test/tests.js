const SkiResort = require('../solution.js');
const { expect } = require("chai");
const { beforeEach } = require("mocha");


describe('SkiResort', function () {
    let resort = new SkiResort("name");

    describe("initialization", function () {
        it('should check initialization', function () {
            expect(resort.name).to.equal("name");
            expect(resort.voters).to.equal(0);
            expect(resort.hotels).to.deep.equal([]);
        });

    });

    describe("bestHotel", function () {
        it('should return "No votes yet"', function () {
            resort = new SkiResort('newName');
            resort.build("hotelTwo", 1);
            expect(resort.bestHotel).to.equal("No votes yet");
        });

        it('should return "No votes yet"', function () {
            resort = new SkiResort('newName');
            resort.build("hotelTwo", 1);
            resort.book("hotelTwo", 1);
            expect(resort.bestHotel).to.equal("No votes yet");
        });

        it('should return Number of voters !', function () {            ////
            resort = new SkiResort('newName');
            resort.build("hotelOne", 1);
            resort.build("hotelTwo", 1);
            resort.book("hotelTwo", 1);
            resort.leave("hotelTwo", 1, 10);

            expect(resort.bestHotel).to.equal(`Best hotel is hotelTwo with grade 10. Available beds: 1`);
        });
    });

    describe("build()", function () {
        it('should name ""', function () {
            let emptyName = () => resort.build("", 1);
            let zeroBeds = () => resort.build("hotel", 0);

            expect(emptyName).to.throw(Error,"Invalid input");
            expect(zeroBeds).to.throw(Error,"Invalid input");

        });

        it('should add hotel to hotels', function () {
            resort = new SkiResort('name');
            resort.build("hotel", 1);
            expect(resort.hotels.length).to.equal(1);
        });

        it('should return message', function () {
            resort = new SkiResort('name');
            expect(resort.build("hotel", 1)).to.equal(`Successfully built new hotel - hotel`);
        });
    });

    describe("book()", function () {
        it('should throw if no name or no beds', function () {
            let emptyName = () => resort.book("", 1);
            let zeroBeds = () => resort.book("hotel", 0);

            expect(emptyName).to.throw(Error,"Invalid input");
            expect(zeroBeds).to.throw(Error,"Invalid input");
        });
        it('should throw if no hotel', function () {
            resort.build("hotel", 1);
            let noHotel = () => resort.book("none", 1);

            expect(noHotel).to.throw(Error,"There is no such hotel");
        });

        it('should throw if no beds', function () {
            resort.build("hotel", 1);
            let noHotel = () => resort.book("hotel", 10);

            expect(noHotel).to.throw(Error,"There is no free space");
        });

        it('should book and remove beds', function () {
            resort.build("hotel", 1);


            expect(resort.book("hotel", 1)).to.equal("Successfully booked");
            expect(resort.hotels[0].beds).to.equal(0);
        });
    });

    describe("leave()", function () {
        it('should invalid input', function () {
            let emptyName = () => resort.leave("", 1, 1);
            let zeroBeds = () => resort.leave("hotel", 0, 1);

            expect(emptyName).to.throw(Error,"Invalid input");
            expect(zeroBeds).to.throw(Error,"Invalid input");
        });

        it('should no hotel', function () {
            resort.build("hotel", 1);
            let noHotel = () => resort.leave("none", 1, 1);

            expect(noHotel).to.throw(Error,"There is no such hotel");
        });

        it('should add points on leave', function () {
            resort = new SkiResort("name");
            resort.build("hotel", 1);
            resort.book("hotel", 1);
            resort.leave("hotel", 1, 2);

            expect(resort.hotels[0].beds).to.equal(1);
            expect(resort.hotels[0].points).to.equal(2);
            expect(resort.voters).to.equal(1);
        });

        it('should return message left', function () {
            resort = new SkiResort("name");
            resort.build("hotel", 1);
            resort.book("hotel", 1);

            expect(resort.leave("hotel", 1, 2))
                .to.equal("1 people left hotel hotel")

        });
    });

    describe("averageGrade()", function () {
        it('should throw if voters 0', function () {
            resort = new SkiResort("name");
            expect(resort.averageGrade()).to.equal( "No votes yet");
        });

        it('should retrun average', function () {
            resort = new SkiResort("name");
            resort.build("hotelTwo", 1);
            resort.book("hotelTwo", 1);
            resort.leave("hotelTwo", 1, 10);

            expect(resort.averageGrade()).to.equal( "Average grade: 10.00");
        });
    })


});
