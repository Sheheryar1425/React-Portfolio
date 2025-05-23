import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const heroStyle = {
    height: '100vh',
    background: 'linear-gradient(270deg, #1e3c72, #2a5298, #1e3c72)',
    backgroundSize: '600% 600%',
    animation: 'gradientShift 15s ease infinite',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '20px',
    fontFamily: "'Montserrat', sans-serif",
  };

  const containerStyle = {
    background: 'rgba(0, 0, 0, 0.3)',
    padding: '40px 60px',
    borderRadius: '20px',
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.4)',
    maxWidth: '700px',
    animation: 'fadeIn 1.5s ease forwards',
  };

  const titleStyle = {
    fontSize: '3.5rem',
    fontWeight: '900',
    marginBottom: '20px',
    textShadow: '3px 3px 10px rgba(0,0,0,0.7)',
  };

  const subtitleStyle = {
    fontSize: '1.75rem',
    lineHeight: '1.5',
    marginBottom: '30px',
    textShadow: '2px 2px 6px rgba(0,0,0,0.5)',
  };

  const buttonStyle = {
    background: '#ff4081',
    color: '#fff',
    padding: '14px 36px',
    border: 'none',
    borderRadius: '35px',
    fontSize: '1.2rem',
    fontWeight: '700',
    cursor: 'pointer',
    boxShadow: '0 6px 20px rgba(255, 64, 129, 0.6)',
    transition: 'all 0.35s ease',
  };

  const buttonHoverStyle = {
    background: '#e73370',
    boxShadow: '0 10px 30px rgba(231, 51, 112, 0.8)',
    transform: 'translateY(-3px)',
  };

  // State to handle hover effect for button
  const [hovered, setHovered] = React.useState(false);

  return (
    <>
      <style>
        {`
          @keyframes gradientShift {
            0% { background-position: 0% 50% }
            50% { background-position: 100% 50% }
            100% { background-position: 0% 50% }
          }
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(15px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>

      <div style={heroStyle}>
        <div style={containerStyle}>
          <h1 style={titleStyle}>Hi, I'm Sheheryar Ahmed</h1>
          <p style={subtitleStyle}>
            A passionate <strong>Software Engineering</strong> student at <em>Centennial College</em> crafting clean, intuitive web experiences.
          </p>
          <Link to="/about">
            <button
              style={hovered ? { ...buttonStyle, ...buttonHoverStyle } : buttonStyle}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
