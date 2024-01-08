import React from "react";

const testimonal = () => {
  return (
    <div>
      <div className="py-5 bg-gradient-to-r from-blue-500 to-green-500">
        <div className="container mx-auto">
          <div className="flex justify-center">
            <div className="text-center mb-4 pb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-12 h-12 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div className="w-full md:w-10/12 lg:w-8/12 xl:w-6/12">
              <div className="bg-white rounded-md shadow-lg">
                <div className="p-4 md:p-5">
                  <div className="carousel">
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <div className="flex justify-center">
                          <div className="w-full lg:w-8/12 xl:w-7/12">
                            <div className="flex">
                              <div className="lg:w-4/12">
                                <img
                                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                                  alt="woman avatar"
                                  className="rounded-circle shadow-1 mb-4 mb-lg-0"
                                  width="150"
                                  height="150"
                                />
                              </div>
                              <div className="lg:w-8/12 md:ml-8">
                                <h4 className="mb-4 text-2xl font-bold">
                                  Maria Smantha - Web Developer
                                </h4>
                                <p className="mb-3 text-gray-700">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit. A aliquam amet animi
                                  blanditiis consequatur debitis dicta
                                  distinctio, enim error eum iste libero modi
                                  nam natus perferendis possimus quasi sint sit
                                  tempora voluptatem. Est, exercitationem id
                                  ipsa ipsum laboriosam perferendis.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* ... (similar structure for other carousel items) */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-4 pt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-12 h-12 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default testimonal;
