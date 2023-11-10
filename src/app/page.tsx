'use client';

import Head from 'next/head';
import { Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

export default function Home() {
  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
}

function Header() {
  return (
    <header>
      <nav>
        <Link to={''}>
          <h1>My Name</h1>
        </Link>
      </nav>
      <p>Session Musician</p>
    </header>
  );
}
