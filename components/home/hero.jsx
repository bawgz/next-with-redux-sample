import React from 'react';
import Link from 'next/link';
import Button from '@material-ui/core/Button';

const Hero = () => (
  <div className="hero">
    <Link href="/order">
      <Button variant="contained" color="primary">
        Order Now
      </Button>
    </Link>
    <style jsx>
      {`
        .hero {
          background: #fefefe url('/static/ElJarocho2smaller.png') no-repeat
            center top;
          color: white;
          height: 500px;
          display: flex;
          align-items: flex-end;
          justify-content: center;
        }
      `}
    </style>
  </div>
);

export default Hero;
