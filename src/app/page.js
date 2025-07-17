import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Form from "./components/Form";
import Vehicle from "./components/Vehicle";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Vehicle />
      <Form />
    </>
  );
}
