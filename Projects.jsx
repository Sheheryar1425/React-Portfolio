import React, { useState } from 'react';

function Projects() {
  const projects = [
    {
      title: 'Online Calculator',
      description: 'A simple web-based calculator built with HTML, CSS, and JavaScript.',
    },
    {
      title: 'To-Do List App',
      description: 'A task manager app using React for organizing daily activities.',
    },
    {
      title: 'Weather App',
      description: 'Displays live weather data using an external API.',
    },
  ];

  // Track hovered card for smooth hover effect
  const [hovered, setHovered] = useState(null);

  return (
    <div
      style={{
        background:
          'linear-gradient(135deg, rgba(24, 24, 48, 0.9), rgba(40, 40, 90, 0.9))',
        padding: '50px 20px',
        minHeight: '100vh',
        fontFamily: "'Poppins', sans-serif",
        color: '#eee',
        textAlign: 'center',
      }}
    >
      <h2
        style={{
          fontSize: '3rem',
          marginBottom: '50px',
          position: 'relative',
          fontWeight: '700',
          letterSpacing: '4px',
          color: '#ff4081',
          cursor: 'default',
        }}
      >
        My Projects
        <span
          style={{
            display: 'block',
            width: '120px',
            height: '4px',
            background:
              'linear-gradient(90deg, #ff4081, #ff79a7, #ff4081)',
            margin: '10px auto 0',
            borderRadius: '2px',
            animation: 'underlineMove 2.5s ease-in-out infinite',
          }}
        />
      </h2>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '30px',
          maxWidth: '1000px',
          margin: '0 auto',
        }}
      >
        {projects.map((project, idx) => (
          <div
            key={idx}
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
            style={{
              background:
                hovered === idx
                  ? 'linear-gradient(135deg, #ff6f91, #ff94a8)'
                  : 'linear-gradient(135deg, #292c4a, #383c70)',
              boxShadow:
                hovered === idx
                  ? '0 10px 30px rgba(255, 64, 129, 0.7)'
                  : '0 6px 18px rgba(0, 0, 0, 0.4)',
              borderRadius: '20px',
              color: '#fff',
              padding: '30px 25px',
              width: '280px',
              cursor: 'pointer',
              transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
              transform: hovered === idx ? 'scale(1.1)' : 'scale(1)',
              userSelect: 'none',
              textAlign: 'left',
            }}
          >
            <h3
              style={{
                fontSize: '1.8rem',
                marginBottom: '15px',
                fontWeight: '700',
                textShadow: '0 2px 8px rgba(0,0,0,0.6)',
              }}
            >
              {project.title}
            </h3>
            <p
              style={{
                fontSize: '1.1rem',
                lineHeight: '1.6',
                textShadow: '0 1px 4px rgba(0,0,0,0.5)',
              }}
            >
              {project.description}
            </p>
          </div>
        ))}
      </div>

      {/* Keyframes for underline animation */}
      <style>
        {`
          @keyframes underlineMove {
            0%, 100% {
              background-position: 0% 0;
            }
            50% {
              background-position: 100% 0;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Projects;
