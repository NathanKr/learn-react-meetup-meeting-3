import Link from "next/link";
import React from "react";

const Pokemons = () => {
  return (
    <div>
      <Link href="/about">About</Link>
      <Link href="/">Home</Link>
      <h1>Pokemons page</h1>
    </div>
  );
};

export default Pokemons;
