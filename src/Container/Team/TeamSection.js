import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const TeamMember = ({
  name,
  position,
  image,
  linkedin,
  twitter,
  instagram,
}) => {
  return (
    <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
      <div className="flex flex-col">
        {/* Avatar */}
        <div className="mx-auto">
          <img
            className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100 w-48 h-48"
            src={image}
            alt={name}
          />
        </div>

        {/* Details */}
        <div className="text-center mt-6">
          {/* Name */}
          <h1 className="text-gray-900 text-2xl font-bold mb-1">{name}</h1>

          {/* Title */}
          <div className="text-gray-700 text-lg font-normal mb-2">
            {position}
          </div>

          {/* Social Icons */}
          {/* <div className="flex items-center justify-center transition-opacity duration-300">
            <a
              href={linkedin}
              className="flex rounded-full text-3xl  h-12 w-12" // Adjusted size to h-12 w-12
            >
              <FaLinkedin className="text-gray-600 hover:text-indigo-600 mx-auto mt-2" />
            </a>

            <a
              href={twitter}
              className="flex  text-3xl  h-12 w-12" // Adjusted size to h-12 w-12
            >
              <FaTwitter className=" text-s-600  hover:text-blue-600 mx-auto mt-2" />
            </a>

            <a
              href={instagram}
              className="flex rounded-full text-xl hover:bg-orange-50 h-12 w-12" // Adjusted size to h-12 w-12
            >
              <FaInstagram className="text-orange-600 mx-auto mt-2" />
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

const TeamSection = () => {
  // Team members array with placeholder images
  const teamMembers = [
    {
      name: "Anshu Pandey",
      position: "MD & CTO",
      image: "anshu.png",
      linkedin: "https://www.linkedin.com/in/johndoe",
      twitter: "https://twitter.com/johndoe",
      instagram: "https://www.instagram.com/johndoe",
    },
    {
      name: "Sun Tze Yun",
      position: "Director",
      image: "mr_sun.png",
      linkedin: "https://www.linkedin.com/in/janesmith",
      twitter: "https://twitter.com/janesmith",
      instagram: "https://www.instagram.com/janesmith",
    },
    {
      name: "Abhishek Pandey",
      position: "CFO",
      image: "abhishek.png",
      linkedin: "https://www.linkedin.com/in/alexjohnson",
      twitter: "https://twitter.com/alexjohnson",
      instagram: "https://www.instagram.com/alexjohnson",
    },
    {
      name: "Aashish Pandey",
      position: "Architect | Consultant | Trainer",
      image: "aashish.png",
      linkedin: "https://www.linkedin.com/in/emilybrown",
      twitter: "https://twitter.com/emilybrown",
      instagram: "https://www.instagram.com/emilybrown",
    },
    {
      name: "Divya Rank",
      position: "Associate Data Scientist",
      image: "divya.png",
      linkedin: "https://www.linkedin.com/in/chriswilson",
      twitter: "https://twitter.com/chriswilson",
      instagram: "https://www.instagram.com/chriswilson",
    },
    {
      name: "Ahmad Zaki",
      position: "Software Engineer",
      image:
        "https://png.pngtree.com/png-clipart/20210915/ourlarge/pngtree-user-avatar-placeholder-black-png-image_3918427.jpg",
      linkedin: "https://www.linkedin.com/in/sophialee",
      twitter: "https://twitter.com/sophialee",
      instagram: "https://www.instagram.com/sophialee",
    },
    {
      name: "Ryan Miller",
      position: "Data Scientist",
      image:
        "https://png.pngtree.com/png-clipart/20210915/ourlarge/pngtree-user-avatar-placeholder-black-png-image_3918427.jpg",
      linkedin: "https://www.linkedin.com/in/ryanmiller",
      twitter: "https://twitter.com/ryanmiller",
      instagram: "https://www.instagram.com/ryanmiller",
    },
    {
      name: "Siti Hajar binti Mustafa",
      position: "Product Manager",
      image:
        "https://png.pngtree.com/png-clipart/20210915/ourlarge/pngtree-user-avatar-placeholder-black-png-image_3918427.jpg",
      linkedin: "https://www.linkedin.com/in/avadavis",
      twitter: "https://twitter.com/avadavis",
      instagram: "https://www.instagram.com/avadavis",
    },
    {
      name: "Lim Wei Jie",
      position: "QA Engineer",
      image:
        "https://png.pngtree.com/png-clipart/20210915/ourlarge/pngtree-user-avatar-placeholder-black-png-image_3918427.jpg",
      linkedin: "https://www.linkedin.com/in/ethantaylor",
      twitter: "https://twitter.com/ethantaylor",
      instagram: "https://www.instagram.com/ethantaylor",
    },
    {
      name: "Wong Chen Yee",
      position: "UX/UI Designer",
      image:
        "https://png.pngtree.com/png-clipart/20210915/ourlarge/pngtree-user-avatar-placeholder-black-png-image_3918427.jpg",
      linkedin: "https://www.linkedin.com/in/oliviamartinez",
      twitter: "https://twitter.com/oliviamartinez",
      instagram: "https://www.instagram.com/oliviamartinez",
    },
    {
      name: "Nurul Amin",
      position: "DevOps Engineer",
      image:
        "https://png.pngtree.com/png-clipart/20210915/ourlarge/pngtree-user-avatar-placeholder-black-png-image_3918427.jpg",
      linkedin: "https://www.linkedin.com/in/williamturner",
      twitter: "https://twitter.com/williamturner",
      instagram: "https://www.instagram.com/williamturner",
    },
    {
      name: "Emma White",
      position: "Content Writer",
      image:
        "https://png.pngtree.com/png-clipart/20210915/ourlarge/pngtree-user-avatar-placeholder-black-png-image_3918427.jpg",
      linkedin: "https://www.linkedin.com/in/emmawhite",
      twitter: "https://twitter.com/emmawhite",
      instagram: "https://www.instagram.com/emmawhite",
    },
  ];

  return (
    <div>
      <Header />
      <section className="bg-white py-6">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col mt-8">
            {/* Meet the Team */}
            <div className="container max-w-7xl px-4">
              {/* Section Header */}
              <div className="flex flex-wrap justify-center text-center mb-24">
                <div className="w-full lg:w-3/4 px-4">
                  {/* Header */}
                  <h1 className="text-gray-900 text-6xl font-bold mb-4">
                    Meet the Team
                  </h1>

                  {/* Description */}
                  <p className="text-gray-600 text-xl font-normal">
                    With over 100 years of combined experience, we've got a
                    well-seasoned team at the helm.
                  </p>
                </div>
              </div>

              {/* Team Members */}
              <div className="flex flex-wrap">
                {teamMembers.map((member, index) => (
                  <TeamMember key={index} {...member} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default TeamSection;
