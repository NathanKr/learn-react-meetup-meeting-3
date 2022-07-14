import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/pokemons">Pokemons</Link>
      <h1>About Page</h1>
    </div>
  );
};

export default About;
