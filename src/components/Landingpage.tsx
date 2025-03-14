"use client";
import * as React from "react";
import { HeroSection } from "./Hero";
import { FeatureCard } from "./FeatureCard";
import { TechnologySection } from "./TechnologySection";
import { AboutSection } from "./AboutSection";
import { BusinessFeatures } from "./BusinessFeatures";
import { PageBreaker } from "./PageBreaker";
import BusinessBenefits from "./BusinessBenifits";
import Tables from "./Tables";
import { Layout } from "./Layout";
import { CaseStudy } from "./CaseStudy";

export default function Landingpage() {
  return (
    <Layout>
      <HeroSection />
      {/* <FeatureCard /> */}
      <PageBreaker className="my-20" />
      <BusinessFeatures />
      <PageBreaker className="my-20" />
      <BusinessBenefits />
      <Tables />
      <TechnologySection />
      <PageBreaker className="my-20" />
      <AboutSection />
      <PageBreaker className="my-20" />
      <CaseStudy />
      <PageBreaker className="my-20" />
    </Layout>
  );
}
