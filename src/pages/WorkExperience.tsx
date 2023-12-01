import React from "react";
import Divider from "../components/Divider";
import MainCard from "../components/MainCard";

const WorkExperience: React.FC = () => {
  return (
    <MainCard>
      <h1 className="pb-4 text-5xl lg:text-6xl xl:text-7xl">Work Experience</h1>
      <Divider />
      <div className="md:mx-4 text-left">
        <h2 className="mt-4 mb-1 md:mb-2 text-xl md:text-2xl lg:text-3xl">
          Software Engineer I | Xometry
        </h2>
        <h4 className="ml-2 md:ml-4 mb-1 md:mb-2 text-lg md:text-xl lg:text-2xl">
          May 2023 - Current
        </h4>
        <p className="ml-2 md:ml-4 text-md md:text-lg lg:text-xl mb-2">
          &emsp; Currently on the Cost Prediction and ModelOps team where I work
          along side data scientists and other engineers to develop and train
          Machine Learning models that predict costs for most of our offered
          manufacturing processes as well as create and optimize formulas for
          the others. Also, develop and maintain tools for our custom Machine
          Learning pipelines that are our at the core of our ModelOps concept.
        </p>
        <ul className="ml-7 md:ml-10 text-md md:text-lg lg:text-xl list-disc list-outside mb-2">
          <li>
            Migrated a 19 step Machine Learning pipeline from Gitlab to GitHub
            Actions and implemented a large number of custom solutions to
            increase data scientists' ease of use and overcome major differences
            betweeen the 2 services.
          </li>

          <li>
            Added the ability for a manufacturing certification to automatically
            be quoted that opened up a broader avenue of business from the
            Aviation and Defense sectors. (This certification used to have to go
            through a person to receive a quote.)
          </li>
          <li>
            Conformed all forms to have the same logic, validation and
            appearance with Formik and SASS.
          </li>
        </ul>
        <h2 className="mt-4 mb-1 md:mb-2 text-xl md:text-2xl lg:text-3xl">
          Software Engineer | Cosmic Software Solutions
        </h2>
        <h4 className="ml-2 md:ml-4 mb-1 md:mb-2 text-lg md:text-xl lg:text-2xl">
          March 2022 - February 2023
        </h4>

        <p className="ml-2 md:ml-4 text-md md:text-lg lg:text-xl mb-2">
          &emsp;Primarily working on the frontend of web applications as a
          contract engineer using TypeScript, React, React Bootstrap, SASS,
          Formik, and Redux Toolkit.
        </p>
        <ul className="ml-7 md:ml-10 text-md md:text-lg lg:text-xl list-disc list-outside mb-2">
          <li>
            Used Jest and React Testing Library to cover 31 components with 163
            tests, achieving over 65% coverage.
          </li>

          <li>
            Fixed multiple bugs found while creating mentioned testing suite.
          </li>
          <li>
            Conformed all forms to have the same logic, validation and
            appearance with Formik and SASS.
          </li>
        </ul>
        <h2 className="mt-4 mb-1 md:mb-2 text-xl md:text-2xl lg:text-3xl">
          Disease Investigator | LFCHD
        </h2>
        <h4 className="ml-2 md:ml-4 mb-1 md:mb-2 text-lg md:text-xl lg:text-2xl">
          September 2021 - April 2022
        </h4>

        <p className="ml-2 md:ml-4 text-md md:text-lg lg:text-xl mb-2">
          &emsp;Worked on the Data Team of the Lexington-Fayette County Health
          Department primarily working in the CDC&apos;s National Electronic
          Disease Surveillance System (NEDSS) to create and close investigations
          as well as process, clean, and verify data sent to the state and
          national government.
        </p>
        <ul className="ml-7 md:ml-10 text-md md:text-lg lg:text-xl list-disc list-outside mb-2">
          <li>HIPAA Certified by the State of Kentucky.</li>

          <li>NEDSS Maintenance certified by the CDC.</li>
        </ul>
        <h2 className="mt-4 mb-1 md:mb-2 text-xl md:text-2xl lg:text-3xl">
          Retail Sales Consultant | AT&T
        </h2>
        <h4 className="ml-2 md:ml-4 mb-1 md:mb-2 text-lg md:text-xl lg:text-2xl">
          June 2015 - September 2021
        </h4>

        <p className="ml-2 md:ml-4 text-md md:text-lg lg:text-xl mb-2">
          &emsp;Sales person for company owned stores and authorized dealers.
          Achieved Business Expert and FirstNet Expert (healthcare and first
          responder accounts) status during my tenure.
        </p>
        <ul className="ml-7 md:ml-10 text-md md:text-lg lg:text-xl list-disc list-outside mb-4">
          <li>CPNI Certified yearly.</li>
          <li>
            Switched over an entire city&apos;s Emergency Management Department
            to FirstNet.
          </li>
          <li>
            Achieved Business Expert and FirstNet Expert in multiple years.
          </li>
        </ul>
      </div>
    </MainCard>
  );
};

export default WorkExperience;
