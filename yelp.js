export class Yelp {
    constructor() {
        this.reviews = [];
    }

    addReview(businessId, userId, rating, text) {
        this.reviews.push({
            businessId,
            userId,
            rating,
            text,
        });
    }

    getReviews(businessId) {
        return this.reviews.filter(review => review.businessId === businessId);
    }
}


