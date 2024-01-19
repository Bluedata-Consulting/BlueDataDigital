import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

const Article3 = () => {
  return (
    <div>
      <Header />
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">
        <div
          className="bg-cover bg-center text-center overflow-hidden"
          style={{
            minHeight: "500px",
            backgroundImage:
              "url('https://www.bluedataconsulting.in/wp-content/uploads/2021/11/corporate_training_Blue_data_consulting-project_based_training-768x432.jpg')",
          }}
          title="Woman holding a mug"
        ></div>
        <div className="max-w-5xl mx-auto">
          <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
            <div className="bg-white relative top-0 -mt-32 p-5 sm:p-10">
              <h1 className="text-gray-900 font-bold text-6xl mb-8">
                Scaling Teams
              </h1>
              {/* <p className="flex text-gray-700 text-xs mt-2">
                Written By:
                <div className="text-indigo-600 ml-1 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
                  Ahmad Sultani
                </div>{" "}
                <span className="ml-1 font-medium">In</span>
                <div className="text-xs ml-1 text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
                  Election
                </div>
                <div
                  href="#"
                  className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
                >
                  Politics
                </div>
              </p> */}

              <p className="text-xl my-5">
                We help our clients in upskilling their existing workforce to
                fill gaps in their skillsets by providing corporate training in
                technologies such as Artificial Intelligence, Machine Learning,
                Deep Learning, Robotics Process Automation, Internet of Things,
                Dev ops, etc. <br />
                With the help of internationally certified and experienced
                instructors, we provide successful learning and development
                solutions to IT & non-IT clients.
              </p>

              <h3 className="text-3xl font-bold mt-5 mb-2">
                Why companies choose us for their upskilling needs?
              </h3>

              <p className="text-lg mb-5">
                <span className="font-semibold text-xl">
                  E2E managed Service:
                </span>{" "}
                We do not limit ourselves to providing skilled and experienced
                consultant/Instructor, rather we contribute by providing managed
                learning solution which includes talent assessment, blended
                learning, self-paced pre-learning, LMS-based learning
                management, cloud labs for hands-on, case studies, datasets,
                etc.
                <br />
                <span className="font-semibold text-xl">Quality: </span>Highly
                rated courseware and manuals, certified instructors with
                real-time industry experience.
                <br />
                <span className="font-semibold text-xl">Flexibility: </span>With
                the help of experienced SMEs and learning consultants, we
                provide tailored learning programs to fit the need of the
                client.
                <br />
                <span className="font-semibold text-xl">
                  {" "}
                  Multiple modalities:
                </span>{" "}
                It includes classroom-based learning, instructor-led online
                learning, self-paced learning, onsite corporate training, and
                e-learning
              </p>

              <h3 className="text-3xl font-bold mt-5 mb-2">
                Talent assessment
              </h3>
              <p className="text-xl mb-5">
                Along with providing corporate training services we also provide
                services to get the analytical assessment of candidates by
                evaluating them on different technologies and at various levels
                of experience. <br />
                We have served over 30 clients from the Asia Pacific and the
                Middle East region for talent assessment and analytics while
                delivering multiple corporate training programs.
              </p>

              <h3 className="text-3xl font-bold mt-5 mb-2">
                Certification from technology providers
              </h3>
              <p className="text-xl mb-5">
                We help our clients in scaling up the skillsets of the existing
                workforce with capabilities related to new and disrupting
                technologies to get them certified by technology providers.
                <br />
                So far, we have served 50+ clients to get their workforce
                certified on different tools from Microsoft azure, IBM cloud,
                AWS, UiPath, Automation Anywhere, etc.
              </p>

              <h3 className="text-3xl font-bold mt-5 mb-2">
                Project based customized training
              </h3>
              <p className="text-xl mb-5">
                We help our clients in scaling up their teams with technical and
                non-technical skill sets needed for a specific project. As a
                result, the team delivers the project within the timeline
                successfully.
                <br />
                Technology vendors such as Microsoft, AWS, IBM, and Google cloud
                bring new versions of their products and tools into the markets
                while following their path of continuous innovation. We help in
                providing corporate training programs to help our customers use
                these products and tools efficiently in the project
                implementation.
              </p>

              <div className="flex space-x-2 my-5">
                <div className="text-md text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
                  #Scaling
                </div>

                <div className="text-md text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
                  #upskilling
                </div>

                <div className="text-md text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
                  #Talent
                </div>

                <div className="text-md text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
                  #technology
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Article3;
