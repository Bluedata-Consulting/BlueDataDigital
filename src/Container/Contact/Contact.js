import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Form from "./Form";

const Contact = () => {
  return (
    <div>
      <Header />

      {/*Hero Section */}
      <div className="flex flex-col space-y-8 pb-10 pt-12 mb-8 md:pt-24">
        <p className="text-center text-3xl font-bold text-gray-900 md:text-5xl md:leading-10">
          Love to hear from you
        </p>
        <p className="mx-auto max-w-3xl text-center text-base text-gray-600 md:text-xl">
          Contact us to learn more about the exciting opportunities we can
          create together. <br />
          Your questions and proposals are the stepping stones to great
          achievements.
          <br />
          Let's begin our journey towards innovation and success today!
        </p>
      </div>

      {/* Map Section */}
      <section className="bg-white">
        <div className="container px-6 py-12 mx-auto">
          <div>
            <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl ">
              Get in touch
            </h1>

            <p className="mt-3 text-lg text-gray-600 ">
              Our friendly team would love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-3">
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-1">
              <div>
                <span className="inline-block p-3 text-gray-900 rounded-full bg-blue-100/60 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </span>

                <h2 className="mt-2 text-lg font-medium text-gray-800 ">
                  Email
                </h2>
                <p className="mt-2 text-md text-gray-500 ">
                  Our friendly team is here to help.
                </p>
                <p className="text-lg font-medium text-blue-500 ">
                  info@bluedatadigital.my
                </p>
              </div>

              <div>
                <span className="inline-block p-3 text-gray-900 rounded-full bg-blue-100/80 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </span>

                <h2 className="mt-2 text-lg font-medium text-gray-800 ">
                  Office
                </h2>
                <p className="mt-2 text-md text-gray-500 ">
                  Come say hello at our office HQ.
                </p>
                <p className="text-lg font-medium text-blue-500 ">
                  T10, 4th Floor, Atlanta Business Hub, VIP Road, beside Offira,
                  Vesu, Surat, Gujarat 395007
                </p>
              </div>

              <div>
                <span className="inline-block p-3 text-gray-900  rounded-full bg-blue-100/80 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </span>

                <h2 className="mt-2 text-lg font-medium text-gray-800 ">
                  Phone
                </h2>
                <p className="mt-2 text-md text-gray-500 ">
                  Mon-Fri from 8 AM to 5 PM.
                </p>
                <p className="text-lg font-medium text-blue-500 ">
                  +60 17-221-5153
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg lg:col-span-2 h-96 lg:h-auto">
              <iframe
                width="100%"
                height="100%"
                frameborder="0"
                title="map"
                marginheight="0"
                marginwidth="0"
                scrolling="no"
                loading="lazy"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14884.813603759028!2d72.7893611!3d21.1443022!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0533566cf49dd%3A0xdcb844e8eb1d921f!2sBlue%20Data%20Consulting!5e0!3m2!1sen!2sin!4v1704365547215!5m2!1sen!2sin"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <Form />

      {/* NewsLetter */}
      {/* <section className="mx-auto max-w-7xl px-2 md:my-24 lg:my-32 lg:px-0">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="w-full md:w-2/3 lg:w-1/2">
            <h2 className="text-3xl font-bold text-black">
              Subscribe to Our Newsletter
            </h2>
            <p className="mt-4 text-gray-600">
              Stay updated with our latest news, events, and offerings.
              Subscribe now!
            </p>
            <div className="mt-2">
              <p className="font-semibold text-gray-800">
                Trusted by businesses and individuals.
              </p>
            </div>
            <form className="mt-3">
              <div className="flex w-full max-w-md flex-col space-y-4">
                <input
                  className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="email"
                  placeholder="Email"
                ></input>
                <button
                  type="button"
                  className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <p className="mt-2">
              <span className="text-sm text-gray-600">
                By signing up, you agree to our terms of service and privacy
                policy.
              </span>
            </p>
          </div>
          <div className="mt-10 w-full md:w-2/3 lg:mt-0 lg:w-1/2">
            <img
              className="h-full w-full rounded-md object-cover"
              src="https://images.unsplash.com/photo-1541560052-77ec1bbc09f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG5ld3NsZXR0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
              alt="Newsletter"
            />
          </div>
        </div>
      </section> */}
      <Footer />
    </div>
  );
};

export default Contact;
