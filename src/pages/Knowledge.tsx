import React from "react"
import Divider from "../components/Divider"
import MainCard from "../components/MainCard"
import ToolTip from "../components/ToolTip"

const Knowledge: React.FC = () => {
  return (
    <MainCard>
      <h1 className="pb-4 text-5xl lg:text-6xl xl:text-7xl">Knowledge</h1>
      <Divider />
      <div className="mt-4 md:mx-4">
        <p className="text-left text-lg md:text-xl lg:text-2xl mb-2">
          These are the languages I currently know:
        </p>
        <ul className="text-left text-lg md:text-xl list-disc list-outside ml-8 mb-2">
          <li>Python</li>
          <li>Go</li>
          <li>Bash</li>
          <li>SQL</li>
          <li>Terraform</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
        </ul>
        <p className="text-left text-lg md:text-xl lg:text-2xl mb-4">
          Python and Terraform are what I use day in and day in my current
          position with a little Go thrown in at times. I have also picked up
          and used these frameworks and libraries:
        </p>
        <ul className="text-left text-lg md:text-xl list-disc list-outside ml-8 mb-2">
          <li>
            Backend: Node, Express, NestJS, Prisma, Sequelize, Mongoose, Twilio,
            Flask, FastAPI
          </li>
          <li>
            Frontend: React, NextJS, Redux Toolkit, Formik, Jest, React Testing
            Library, React Bootstrap, Mantine UI, CSS (Tailwind, SASS, CSS in
            JS)
          </li>
          <li>AWS: Sagemaker AI, Service Catalog, S3, Lambda </li>
          <li>
            Other services: Vite, Docker, Kubernetes, Mongo, Firebase, Snowflake
            and GitHub Actions
          </li>
        </ul>
        <p className="text-left text-lg md:text-xl lg:text-2xl mb-2">
          Some of my projects and achievements are:
        </p>
        <ul className="text-left text-lg md:text-xl list-disc list-outside ml-8 mb-2">
          <li>
            Wrote the backend portions of 2 major feature releases at my current
            company that opened up new avenues of business in the Aviation and
            Defense sector.
          </li>
          <li>
            Migrated a 19 step Machine Learning pipeline from Gitlab to GitHub
            Actions and created custom solutions to accomodate the needs of our
            data scientists.
          </li>
          <li>
            Site to make my resumes in HTML and CSS made with React and a tool
            to export them as images.
          </li>
          <li>
            API and admin website for an in development app in TypeScript with
            NextJS, Tailwind, Docker, Twilio, Prisma, and MySQL.
          </li>
          <li>
            <ToolTip text="https://github.com/mez32/Calc-Site">
              <a
                href="https://github.com/mez32/Calc-Site"
                target="_blank"
                className="hover:text-neutral-100"
              >
                Site to convert pixels to rem and vice versa along with a
                calculator made with TypeScript and React and being hosted on
                Vercel.
              </a>
            </ToolTip>
          </li>
          <li>
            <ToolTip text="https://github.com/mez32/The-Blogg">
              <a
                href="https://github.com/mez32/The-Blogg"
                target="_blank"
                className="hover:text-neutral-100"
              >
                Blog site made with NextJS, Tailwind CSS, Prisma, MySQL, and
                Docker from scratch.
              </a>
            </ToolTip>
          </li>
          <li>
            <ToolTip text="https://github.com/mez32/TS-Code-Editor">
              <a
                href="https://github.com/mez32/TS-Code-Editor"
                target="_blank"
                className="hover:text-neutral-100"
              >
                Code Editor site using TypeScript, React, Redux Toolkit, and
                Material UI.
              </a>
            </ToolTip>
          </li>
          <li>
            <ToolTip text="https://github.com/mez32/Nest-Car-Value-Tool">
              <a
                href="https://github.com/mez32/Nest-Car-Value-Tool"
                target="_blank"
                className="hover:text-neutral-100"
              >
                A backend API for a simple car estimate tool using TypeScript
                and NestJS.
              </a>
            </ToolTip>
          </li>
          <li>
            <ToolTip text="https://github.com/mez32/Microservices-Ticket-App">
              <a
                href="https://github.com/mez32/Microservices-Ticket-App"
                target="_blank"
                className="hover:text-neutral-100"
              >
                A microservices ticket buying app with Docker, Kubernetes,
                TypeScript, Express, NATS streaming server, Mongo, and NextJS.
              </a>
            </ToolTip>
          </li>
        </ul>
        <p className="text-left text-lg md:text-xl lg:text-2xl mb-4">
          Knowledge was acquired using Udemy.com from a multitude of courses,
          from my current and previous positions, and from personal side
          projects that may not be visible on my Github.
        </p>
      </div>
    </MainCard>
  )
}

export default Knowledge
