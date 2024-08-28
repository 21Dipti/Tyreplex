import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const reviews = [
  {
    name: "John Doe",
    review: "Excellent service from start to finish. 100% satisfaction with the job, professionalism and overall service.We were delighted with your courteous , prompt and professional",
    rating: 5,
    date: "2024-08-20",
  },
  {
    name: "Jane Smith",
    review: "Went for Tyre change . Ultimate service by shoppe boys. Owner behavior very cool. Guide as per ur budget. Highly recommend",
    rating: 4,
    date: "2024-08-18",
  },
  {
    name: "Michael Johnson",
    review: "Best tyre shop in Indirapuram. Good dealing with customer. All types tyre available here. Price also responsible. Overall good experience",
    rating: 5,
    date: "2024-08-15",
  },
  {
    name: "Emily Davis",
    review: "Best shoppe in Indirapuram. Good customer service. After sale service amazing. Overall nice experience",
    rating: 5,
    date: "2024-08-12",
  },
  {
    name: "Robert Brown",
    review: "Genuine and Authorized Tyre shop in indirapuram having latest manufactured stock. Well equipped workshop with professional staff. I change my care Tyre there, highly",
    rating: 4,
    date: "2024-08-10",
  },
];

const ReviewCarousel = () => {
  return (
    <div className="review-carousel-container">
      <div className="carousel-content">
        <Carousel autoPlay infiniteLoop showThumbs={false} showArrows={true} showStatus={false}>
          {reviews.map((review, index) => (
            <div key={index} className="review-slide">
              <h3>{review.name}</h3>
              <p>"{review.review}"</p>
              <p>Rating: {`${"⭐".repeat(review.rating)}`} ({review.rating}/5)</p>
              <p>Date: {review.date}</p>
            </div>
          ))}
        </Carousel>
      </div>
      <div className="review-title-container">
        <p className='review-title'>What our customers say</p>
      </div>
    </div>
  );
};

export default ReviewCarousel;