

import Link from "next/link";

function Home() {
  return (
    <div>
          <h1>Home</h1>
          <h2>teste</h2>
      <Link href="/tempo">
        <a>Acessar página Sobre</a>
      </Link>
    </div>
    );
    
}

export default Home;
