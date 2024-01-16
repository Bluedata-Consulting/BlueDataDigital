import React from "react";
import { Link } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import image from "../../Assets/image-1.jpg";
import Testimonal from "../../Container/Homepage/testimonal";

const AboutUs = () => {
  return (
    <div>
      <Header />

      {/* Section - 1*/}
      <div className="bg-gray-100 flex items-center  n justify-center overflow-hidden z-50 ">
        <div className="relative mx-auto h-full px-4  pb-20   md:pb-10 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
          <div className="flex flex-col items-center justify-between lg:flex-row py-16">
            <div className=" relative ">
              <div className="lg:max-w-xl lg:pr-5 relative z-40">
                <p className="flex text-2xl uppercase text-g1  ">Our Story</p>
                <h2 className="mb-6 max-w-lg text-5xl font-light leading-snug tracking-tight text-g1 sm:text-7xl sm:leading-snug">
                  We make you look
                  <span className="my-1 inline-block border-b-8 border-gray-400 px-4 font-bold text-g4 animate__animated animate__flash">
                    different
                  </span>
                </h2>
                <p className="text-base text-gray-700">
                  Discover the magic that happens when passion meets dentistry.
                </p>
                <div className="mt-10 flex flex-col items-center md:flex-row">
                  <Link
                    to="/contact"
                    aria-label=""
                    className="group inline-flex items-center font-semibold text-g1"
                    onClick={() => {
                      window.scroll({
                        top: 0,
                        left: 0,
                        behavior: "smooth",
                      });
                    }}
                  >
                    BE A PART IN OUR JOURNEY
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-4 h-6 w-6 transition-transform group-hover:translate-x-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative hidden lg:ml-32 lg:block lg:w-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="my-6 mx-auto h-10 w-10 animate-bounce rounded-full bg-white p-2 lg:hidden"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16 17l-4 4m0 0l-4-4m4 4V3"
                ></path>
              </svg>
              <div className="abg-orange-400 mx-auto w-fit overflow-hidden rounded-[6rem] rounded-br-none rounded-tl-none">
                <img src={image} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="hidden text-9xl varien absolute top-6 left-1/4 text-g/10 z-40    ">
          Our Story
        </div>

        <div className=" absolute -bottom-0 left-3/4 z-0  opacity-10 ">
          <svg
            width="800px"
            height="800px"
            viewBox="0 0 256 256"
            xmlns="http://www.w3.org/2000/svg"
            className="w-48 z-0  h-full -rotate-90   object-fill fill-red-300 text-red-300"
          >
            <path
              d="M32 225h12.993A4.004 4.004 0 0 0 49 220.997V138.01c0-4.976.724-5.04 1.614-.16l12.167 66.708c.397 2.177 2.516 3.942 4.713 3.942h8.512a3.937 3.937 0 0 0 3.947-4S79 127.5 80 129s14.488 52.67 14.488 52.67c.559 2.115 2.8 3.83 5.008 3.83h8.008a3.993 3.993 0 0 0 3.996-3.995v-43.506c0-4.97 1.82-5.412 4.079-.965l10.608 20.895c1.001 1.972 3.604 3.571 5.806 3.571h9.514a3.999 3.999 0 0 0 3.993-4.001v-19.49c0-4.975 2.751-6.074 6.155-2.443l6.111 6.518c1.51 1.61 4.528 2.916 6.734 2.916h7c2.21 0 5.567-.855 7.52-1.92l9.46-5.16c1.944-1.06 5.309-1.92 7.524-1.92h23.992a4.002 4.002 0 0 0 4.004-3.992v-7.516a3.996 3.996 0 0 0-4.004-3.992h-23.992c-2.211 0-5.601.823-7.564 1.834l-4.932 2.54c-4.423 2.279-12.028 3.858-16.993 3.527l2.97.198c-4.962-.33-10.942-4.12-13.356-8.467l-11.19-20.14c-1.07-1.929-3.733-3.492-5.939-3.492h-7c-2.21 0-4 1.794-4 4.001v19.49c0 4.975-1.14 5.138-2.542.382l-12.827-43.535c-.625-2.12-2.92-3.838-5.127-3.838h-8.008c-2.207 0-3.916 1.784-3.817 4.005l1.92 42.998c.221 4.969-.489 5.068-1.585.224l-15.13-66.825c-.488-2.155-2.681-3.902-4.878-3.902h-8.512a3.937 3.937 0 0 0-3.947 4s.953 77-.047 75.5-13.937-92.072-13.937-92.072C49.252 34.758 47.21 33 45 33H31.999"
              fill-rule="evenodd"
            ></path>
          </svg>
        </div>
        <div className=" absolute top-10 left-3/4 z-0  opacity-10 ">
          <svg
            fill="#000000"
            width="800px"
            height="800px"
            viewBox="0 0 256 256"
            xmlns="http://www.w3.org/2000/svg"
            className="w-96 z-0  h-full    object-fill fill-blue-300 text-blue-300"
          >
            <path
              d="M230.704 99.2a4.004 4.004 0 0 0-4.01-3.995h-50.981c-2.215 0-5.212-1.327-6.693-2.964L155.289 77.08c-17.795-19.65-41.628-16.256-53.234 7.58l-38.736 79.557C60.42 170.172 52.705 175 46.077 175H29.359a3.996 3.996 0 0 0-3.994 3.995v10.01A4 4 0 0 0 29.372 193h24.7c8.835 0 19.208-6.395 23.174-14.293l43.645-86.914c3.964-7.894 12.233-9.228 18.473-2.974l17.184 17.219c3.123 3.13 9.242 5.667 13.647 5.667H226.7a4.005 4.005 0 0 0 4.004-3.994v-8.512z"
              fill-rule="evenodd"
            ></path>
          </svg>
        </div>
      </div>

      {/*Section - 2*/}
      <div className="py-16 bg-white">
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="md:5/12 lg:w-5/12">
              <img
                src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                alt=""
                loading="lazy"
                width=""
                height=""
              />
            </div>
            <div className="md:7/12 lg:w-6/12">
              <h2 className="text-3xl text-gray-900 font-bold md:text-5xl">
                Empowering Businesses Through Technology
              </h2>
              <p className="mt-6 text-lg text-gray-700">
                At Blue Data Digital, we are on a mission to empower businesses
                through cutting-edge technology solutions. Our team of dedicated
                professionals is passionate about delivering results that exceed
                expectations.
              </p>
              <p className="mt-4 text-lg text-gray-700">
                {" "}
                With a focus on innovation and client satisfaction, we provide a
                range of services including web development, software solutions,
                and technology consulting. Partner with us for a transformative
                journey towards success.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section - 3*/}
      <section className=" bg-gray-100 relative my-16 py-24">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-78">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-gray-400 shadow-lg  rounded-lg">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=700&amp;q=80"
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-my-orange fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-2xl font-bold text-black">
                    Fueling Innovation with Technology
                  </h4>
                  <p className="text-lg font-normal mt-2 text-black">
                    Embark on a journey of innovation with Blue Data Digital. We
                    are passionate about leveraging cutting-edge technologies to
                    fuel creativity and drive transformative solutions. Let us
                    turn your ideas into reality.
                  </p>
                </blockquote>
              </div>
            </div>

            <div className="w-full md:w-6/12 px-4">
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-gray-400 shadow-lg rounded-full bg-white">
                        <i className="fas fa-sitemap"></i>
                      </div>
                      <h6 className="text-2xl mb-1 font-semibold">
                        Tech-Driven Solutions
                      </h6>
                      <p className="mb-4 text-lg text-gray-500">
                        Explore a realm of possibilities with our tech-driven
                        solutions. From advanced web technologies to emerging
                        trends, we harness the power of innovation to build
                        robust and scalable solutions for your business.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-gray-400 shadow-lg  rounded-full bg-white">
                        <i className="fas fa-drafting-compass"></i>
                      </div>
                      <h6 className="text-2xl mb-1 font-semibold">
                        Collaborative Excellence
                      </h6>
                      <p className="mb-4 text-lg text-gray-500">
                        Experience the power of collaborative excellence. Our
                        teams work seamlessly to bring together diverse skill
                        sets, fostering an environment where great ideas
                        flourish and technological innovations thrive.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col min-w-0 mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-gray-400 shadow-lg  rounded-full bg-white">
                        <i className="fas fa-newspaper"></i>
                      </div>
                      <h6 className="text-2xl mb-1 font-semibold">
                        Result-Driven Approach
                      </h6>
                      <p className="mb-4 text-lg text-gray-500">
                        Our focus extends beyond technology; it's about
                        delivering tangible results. From conceptualization to
                        execution, we ensure our solutions align with your
                        business goals, driving success and fostering
                        innovation.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-gray-400 shadow-lg rounded-full bg-white">
                        <i className="fas fa-file-alt"></i>
                      </div>
                      <h6 className="text-2xl mb-1 font-semibold">
                        Customer-Centric Innovation
                      </h6>
                      <p className="mb-4 text-lg text-gray-500">
                        Your success is at the heart of what we do. We follow a
                        customer-centric approach, tailoring innovative
                        solutions to your unique requirements. Join us in the
                        pursuit of transformative and customer-focused
                        innovation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <Testimonal /> */}
      <Testimonal />
      <Footer />
    </div>
  );
};

export default AboutUs;
