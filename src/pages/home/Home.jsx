import React from "react";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Work from "../../components/Work";
import Team from "../../components/Team";
import Form from "../../components/Form";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Work />
        <Team />
        <Form />
      </main>
    </>
  );
}
