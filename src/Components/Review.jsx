import React from "react";

const Review = () => {
  return (
    <div className="pt-20  bg-[#F1F6F2] dark:bg-gray-900  dark:shadow-sm text-black dark:text-white pb-16">
      <h2 className="text-3xl font-bold text-center text-success mb-10">
        Client <span className="text-black dark:text-white ">Review</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 ">
        <div className="bg-white rounded-xl shadow-md p-6 text-center w-full max-w-sm mx-auto  dark:bg-gray-800 dark:text-white ">
          <img
            src="https://i.ibb.co.com/PsG9MrBZ/close-up-portrait-curly-handsome-european-male.jpg"
            alt=""
            className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
          />
          <span className="text-sm text-white bg-blue-600 px-3 py-1 rounded-full inline-block mb-2">
            Salam
          </span>
          <br />
          <span className="text-sm text-white bg-blue-600 px-3 py-1 rounded-full inline-block mb-2">
            Client
          </span>
          <p className="text-gray-600 dark:text-white  italic mt-2 mb-4">
            "Great platform! I found a skilled freelancer and got my task done
            within a day. Super easy to use."
          </p>
          <div className="text-yellow-500 text-lg">★★★★★</div>
        </div>
        {/* card 2 */}
        <div className="bg-white rounded-xl shadow-md p-6 text-center w-full max-w-sm mx-auto dark:bg-gray-800 dark:text-white ">
          <img
            src="https://i.ibb.co.com/sd4hhqkR/portrait-white-man-isolated.jpg"
            alt=""
            className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
          />
          <span className="text-sm text-white bg-blue-600 px-3 py-1 rounded-full inline-block mb-2">
            Osman Goni
          </span>
          <br />
          <span className="text-sm text-white bg-blue-600 px-3 py-1 rounded-full inline-block mb-2">
            Freelancer
          </span>
          <p className="text-gray-600 italic dark:text-white  mt-2 mb-4">
            "This site helped me land regular gigs. The bidding system is fair
            and support is responsive."
          </p>
          <div className="text-yellow-500 text-lg">★★★★★</div>
        </div>
        {/* card 3 */}
        <div className="bg-white rounded-xl shadow-md p-6 text-center w-full max-w-sm mx-auto dark:bg-gray-800 dark:text-white ">
          <img
            src="https://i.ibb.co.com/8LtdxbbM/closeup-young-female-professional-making-eye-contact-against-colored-background.jpg"
            alt=""
            className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
          />
          <span className="text-sm text-white bg-blue-600 px-3 py-1 rounded-full inline-block mb-2">
            Nusrat Jahan
          </span>
          <br />
          <span className="text-sm text-white bg-blue-600 px-3 py-1 rounded-full inline-block mb-2">
            Client
          </span>
          <p className="text-gray-600 dark:text-white  italic mt-2 mb-4">
            "I posted a task and got multiple bids within an hour. The
            freelancer delivered great work."
          </p>
          <div className="text-yellow-500 text-lg">★★★★★</div>
        </div>
        {/* card 4 */}
        <div className="bg-white rounded-xl shadow-md p-6 text-center w-full max-w-sm mx-auto dark:bg-gray-800 dark:text-white ">
          <img
            src="https://i.pravatar.cc/100?img=4"
            alt=""
            className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
          />
          <span className="text-sm text-white bg-blue-600 px-3 py-1 rounded-full inline-block mb-2">
            Lima S.
          </span>
          <br />
          <span className="text-sm text-white bg-blue-600 px-3 py-1 rounded-full inline-block mb-2">
            Freelancer
          </span>
          <p className="text-gray-600 dark:text-white italic mt-2 mb-4">
            "Perfect for beginners! I’ve completed 15+ tasks and received
            payments on time."
          </p>
          <div className="text-yellow-500 text-lg">★★★★★</div>
        </div>
      </div>
    </div>
  );
};

export default Review;
