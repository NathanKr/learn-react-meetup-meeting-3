import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <Link href="/about">About</Link>
      <Link href="/pokemons">Pokemons</Link>
      <h1>
        Home Page
        <Image
          width="800"
          height="800"
          src="/images/home-domenico-loia-hGV2TfOh0ns-unsplash.jpg"
          alt="pic"
        />
      </h1>
    </div>
  );
};

export default Home;
