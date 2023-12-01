import React from "react";
import Divider from "../components/Divider";
import MainCard from "../components/MainCard";
import ToolTip from "../components/ToolTip";

const AboutMe: React.FC = () => {
  return (
    <MainCard>
      <h1 className="pb-4 text-5xl lg:text-6xl xl:text-7xl">About Me</h1>
      <Divider />
      <blockquote className="md:text-md lg:text-lg my-6">
        "A computer lets you make more mistakes faster than any other invention
        with the possible exceptions of handguns and Tequila." <br /> - Mitch
        Ratcliffe
      </blockquote>
      <div className="md:mx-4">
        <p className="text-left text-lg md:text-xl lg:text-2xl mb-4">
          &emsp; Hi there, my name is Alex Mesmer and I currently live here in
          Lexington, KY and work as a backend Software Engineer at Xometry. At
          the onset of the pandemic I began to teach myself JavaScript and
          related frameworks as a way to grow myself, personally and
          professionally, for the future and beyond. I have always been
          intrigued in building things and knowing how they work under the hood
          so I decided to take it on in the digital realm. In my current role I
          have also picked up Python to continue my pursuit for new knowledge
          where I now work heavily around Machine Learning and the data science
          that goes along with it.
        </p>
        <p className="text-left text-lg md:text-xl lg:text-2xl mb-4">
          &emsp; I had a desire to break into the field of tech on my own terms
          and set my own course for success. With the help of friends who are
          already professionals in these areas, I was able to become proficient
          in only a year and a half. From a complete novice to where I am now, I
          have already demonstrated a wealth of knowledge acquired from online
          courses and valuable skills picked up from working along side the
          awesome teams I have had the privelege to be apart of. Thanks for
          visiting my site, feel free to look around and learn more about me and
          reach out to me with any kind of inquiries.
        </p>
        <p className="text-left text-lg md:text-xl lg:text-2xl mb-4">
          &emsp; This site was built entirely by me using TypeScript, Vite,
          React, and Tailwind and is being hosted on Vercel.{" "}
          <ToolTip text="github.com/mez32/PersonalWebsite">
            <a
              href="https://github.com/mez32/PersonalWebsite"
              target="_blank"
              className="italic hover:text-zinc-100 hover:underline"
            >
              Here
            </a>
          </ToolTip>{" "}
          is the Github repo for it. Both of my resumes were created on a React
          site only using HTML and CSS and a tool to export the page into a PDF
          and come in both a dark and light theme and can be found on my Contact
          Me page.
        </p>
      </div>
    </MainCard>
  );
};

export default AboutMe;
