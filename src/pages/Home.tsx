import React from "react";
import {
  IconCode,
  IconBriefcase,
  IconPhoneIncoming,
  IconUser,
} from "@tabler/icons";
import GridCard from "../components/GridCard";
import Footer from "../components/Footer";
import Divider from "../components/Divider";

const Home: React.FC = () => {
  return (
    <>
      <div className="relative h-screen w-screen">
        <div className="flex justify-center items-center min-h-full pt-4">
          <div className="w-11/12 lg:w-10/12 lg:max-w-6xl 3xl:max-w-7xl">
            <div className="grid md:grid-cols-2 md:my-4">
              <GridCard>
                <div className="justify-center flex p-4">
                  <img
                    className="rounded-[60px] h-auto w-40 md:w-32 lg:w-40 2xl:w-44 3xl:w-48 shadow-md"
                    src="assets/alexImage.webp"
                    alt="A picture of me"
                  />
                </div>
              </GridCard>
              <GridCard>
                <div className="justify-center items-center text-center p-4 md:p-5">
                  <h2 className="pb-4 text-4xl xl:text-5xl 3xl:text-6xl">
                    Alex Mesmer
                  </h2>
                  <Divider />
                  <h3 className="py-4 text-2xl lg:text-3xl 3xl:text-4xl">
                    Software Engineer
                  </h3>
                  <h4 className="text-xl 3xl:text-2xl">Lexington, KY</h4>
                </div>
              </GridCard>
              <GridCard routeId="about">
                <IconUser className="mr-2 align-middle" size={34} />
                <h3>About Me</h3>
              </GridCard>
              <GridCard routeId="knowledge">
                <IconCode className="mr-2 align-middle" size={38} />
                <h3>Knowledge</h3>
              </GridCard>
              <GridCard routeId="experience">
                <IconBriefcase className="mr-2 align-middle" size={32} />
                <h3>Experience</h3>
              </GridCard>
              <GridCard routeId="contact">
                <IconPhoneIncoming className="mr-2 align-middle" size={32} />
                <h3>Contact Me</h3>
              </GridCard>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
