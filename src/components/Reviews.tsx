import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

type Props = {
  review: {
    name: string;
    review: string;
    rating: number;
    profession: string;
    image: string;
  };
};

const ReviewCard = ({ review }: Props) => {
  const { name, rating, profession, image, review: clientReview } = review;

  // Create star rating display
  const renderStars = () => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar
        key={index}
        className={`text-lg ${
          index < rating ? "text-yellow-400" : "text-gray-600"
        }`}
      />
    ));
  };

  return (
    <div className="group relative rounded-xl bg-gradient-to-b from-gray-900 via-teal-900 to-teal-700 p-8 shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]  ">
      {/* Decorative quotation marks */}
      <div className="absolute top-0 left-8 opacity-20 ">
        <svg
          className="h-24 w-24 text-purple-400"
          fill="currentColor"
          viewBox="0 0 32 32"
        >
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
        </svg>
      </div>

      {/* Review Content */}
      <div className="relative z-10">
        <p className="mb-6 text-lg italic leading-relaxed text-gray-300">
          {clientReview}
        </p>

        {/* Rating Stars */}
        <div className="mb-8 flex items-center space-x-2">
          {renderStars()}
          <span className="ml-2 text-sm font-medium text-gray-400">
            ({rating}/5)
          </span>
        </div>

        {/* User Info */}
        <div className="flex items-center border-t border-purple-900/50 pt-6">
          <div className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-full">
            <Image
              src={image}
              alt={name}
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
          <div className="ml-4">
            <h3 className="text-xl font-semibold text-white">{name}</h3>
            <p className="text-md text-purple-300">{profession}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;