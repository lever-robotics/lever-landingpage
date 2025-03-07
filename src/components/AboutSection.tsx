import React from "react";
import { TeamMember } from "./TeamMember";
import { Button } from "./Button";
import mark_photo from '../assets/mark_photo.jpg';
import jared from '../assets/jared.jpg';


export const AboutSection = () => {
  return (
    <section className="mt-24 text-5xl font-medium leading-none text-center text-black max-md:mt-10" id="about">
      <h2>About</h2>
      <div className="mt-24 ml-4 w-full max-w-[1215px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-[62%] max-md:w-full">
            <article className="text-base leading-8 text-[var(--accent-700)]">
              <p>
                Lever is a startup with a mission to help small to medium size
                business be competitive in a data driven economy. Because of the
                accessibility of technology the same data collection and
                analysis used by large enterprises can also be used by smaller
                companies. Big data analytics for small business.
              </p>
              <p className="mt-8">
                Our story began with a Non Profit named Common Grounds who
                mission is to enhances the lives of youths and adults with
                disabilities through quality outdoor recreation. Looking to
                enhance the to maximize experience they can give to individuals
                they wanted their data more accessible to make beneficial
                decisions. By giving more visibility into their data they could
                more easily tailor experiences directly to the individuals they
                work with.
              </p>
            </article>
          </div>
          <div className="ml-5 w-[38%] max-md:ml-0 max-md:w-full mt-20">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/7cbfb130182046beab226ee58fb45705/86c8fd25c6f2b79461c969200762b3d0c4c53fdd1acfcbbf9b4751f0a89cd531?placeholderIfAbsent=true"
              alt="About Us Illustration"
              className="object-contain self-stretch my-auto w-full aspect-[3.66]"
            />
          </div>
        </div>
      </div>
      <div className="mt-48 max-w-full w-[676px] max-md:mt-10 mx-auto">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-6/12 max-md:w-full">
            <TeamMember
              name="Mark Soulier"
              role="Data Analyst"
              email="mark.soulier@usu.com"
              linkedin="www.linkedin.com/in/marksoulier"
              image={mark_photo}
            />
          </div>
          <div className="w-6/12 max-md:w-full">
            <TeamMember
              name="Jared Smith"
              role="Developer"
              email="smithvjared@gmail.com"
              linkedin="www.linkedin.com/in/jared-smith-07baab229"
              image={jared}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-20">
        <Button variant="outline" href="https://cal.com/lever-ai/lever-ai-demo">Contact Us</Button>
      </div>
    </section>
  );
};
