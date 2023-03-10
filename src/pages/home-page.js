import React from "react";
import { Carcarefeatures } from "../components/Carcarefeatures";
import { HeroBanner } from "../components/hero-banner";
import { PageLayout } from "../components/page-layout";

export const HomePage = () => (
  <PageLayout>
    <HeroBanner />
    <Carcarefeatures />
  </PageLayout>
);
