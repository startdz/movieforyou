import { useState } from "react";
import InitialBackgroundImage from "/bg.jpg";
import Main from "../../components/Main";
import ImageFluid from "../../components/widgets/ImageFluid";
import Navbar from "../../components/Navbar";
import Logo from "../../components/widgets/Logo";
import Links from "../../components/widgets/Links";
import Navlink from "../../components/widgets/Navlink";

const Home = () => {
  const [initalImage, setInitialImage] = useState(InitialBackgroundImage);

  return (
    <Main className={"w-full relative bg-slate-900 min-h-screen z-0"}>
      <Navbar
        className={
          "flex justify-between px-2 py-3 opacity-80 bg-opacity-90 items-center"
        }>
        <Logo />
        <Links className="font-bold text-white">
          <Navlink />
        </Links>
      </Navbar>

      <ImageFluid
        src={initalImage}
        alt={initalImage}
        className={"absolute top-0 z-[-9999] bg-opacity-60"}
      />
    </Main>
  );
};

export default Home;
