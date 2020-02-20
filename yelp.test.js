import {Yelp} from "./yelp";

describe('Yelp', () => {
    test('addReview', () => {
        const yelp = new Yelp();

        yelp.addReview(
            'the-bird-san-francisco',
            'dave',
            4,
            'This spicy chicken sandwich is excellent',
        );

        expect(yelp.reviews[0]).toEqual({
            businessId: 'the-bird-san-francisco',
            userId: 'dave',
            rating: 4,
            text: 'This spicy chicken sandwich is excellent',
        })
    });

    test('getReviews', () => {
        const yelp = new Yelp();

        yelp.reviews = [{
            businessId: 'the-bird-san-francisco',
            userId: 'dave',
            rating: 4,
            text: 'This spicy chicken sandwich is excellent',
        }];

        expect(yelp.getReviews('the-bird-san-francisco')).toEqual([{
            businessId: 'the-bird-san-francisco',
            userId: 'dave',
            rating: 4,
            text: 'This spicy chicken sandwich is excellent',
        }])
    });
});
