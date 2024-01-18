import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
// import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

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
      name: "John Doe",
      position: "Founder & CEO",
      image: "https://placekitten.com/400/400",
      linkedin: "https://www.linkedin.com/in/johndoe",
      twitter: "https://twitter.com/johndoe",
      instagram: "https://www.instagram.com/johndoe",
    },
    {
      name: "Jane Smith",
      position: "CTO",
      image: "https://placekitten.com/401/401",
      linkedin: "https://www.linkedin.com/in/janesmith",
      twitter: "https://twitter.com/janesmith",
      instagram: "https://www.instagram.com/janesmith",
    },
    {
      name: "Alex Johnson",
      position: "Lead Developer",
      image: "https://placekitten.com/402/402",
      linkedin: "https://www.linkedin.com/in/alexjohnson",
      twitter: "https://twitter.com/alexjohnson",
      instagram: "https://www.instagram.com/alexjohnson",
    },
    {
      name: "Emily Brown",
      position: "Designer",
      image: "https://placekitten.com/403/403",
      linkedin: "https://www.linkedin.com/in/emilybrown",
      twitter: "https://twitter.com/emilybrown",
      instagram: "https://www.instagram.com/emilybrown",
    },
    {
      name: "Chris Wilson",
      position: "Marketing Specialist",
      image: "https://placekitten.com/404/404",
      linkedin: "https://www.linkedin.com/in/chriswilson",
      twitter: "https://twitter.com/chriswilson",
      instagram: "https://www.instagram.com/chriswilson",
    },
    {
      name: "Sophia Lee",
      position: "Software Engineer",
      image: "https://placekitten.com/405/405",
      linkedin: "https://www.linkedin.com/in/sophialee",
      twitter: "https://twitter.com/sophialee",
      instagram: "https://www.instagram.com/sophialee",
    },
    {
      name: "Ryan Miller",
      position: "Data Scientist",
      image: "https://placekitten.com/406/406",
      linkedin: "https://www.linkedin.com/in/ryanmiller",
      twitter: "https://twitter.com/ryanmiller",
      instagram: "https://www.instagram.com/ryanmiller",
    },
    {
      name: "Ava Davis",
      position: "Product Manager",
      image: "https://placekitten.com/407/407",
      linkedin: "https://www.linkedin.com/in/avadavis",
      twitter: "https://twitter.com/avadavis",
      instagram: "https://www.instagram.com/avadavis",
    },
    {
      name: "Ethan Taylor",
      position: "QA Engineer",
      image: "https://placekitten.com/408/408",
      linkedin: "https://www.linkedin.com/in/ethantaylor",
      twitter: "https://twitter.com/ethantaylor",
      instagram: "https://www.instagram.com/ethantaylor",
    },
    {
      name: "Olivia Martinez",
      position: "UX/UI Designer",
      image: "https://placekitten.com/409/409",
      linkedin: "https://www.linkedin.com/in/oliviamartinez",
      twitter: "https://twitter.com/oliviamartinez",
      instagram: "https://www.instagram.com/oliviamartinez",
    },
    {
      name: "William Turner",
      position: "DevOps Engineer",
      image: "https://placekitten.com/410/410",
      linkedin: "https://www.linkedin.com/in/williamturner",
      twitter: "https://twitter.com/williamturner",
      instagram: "https://www.instagram.com/williamturner",
    },
    {
      name: "Emma White",
      position: "Content Writer",
      image: "https://placekitten.com/411/411",
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
