import React from 'react';

function AboutMe() {
  return (
    <div
      style={{
        maxWidth: '650px',
        margin: '50px auto',
        padding: '35px 40px',
        borderRadius: '20px',
        background: 'linear-gradient(135deg, #1e3c72, #2a5298)', // same blue gradient vibe
        color: '#fff',
        boxShadow: '0 15px 40px rgba(42, 82, 152, 0.5)',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        lineHeight: '1.6',
      }}
    >
      <h2
        style={{
          textAlign: 'center',
          fontSize: '2.8rem',
          marginBottom: '25px',
          letterSpacing: '2.5px',
          fontWeight: '700',
          textShadow: '3px 3px 8px rgba(0, 0, 0, 0.5)',
          color: '#ff80ab',
        }}
      >
        About Me
      </h2>

      <p style={{ fontSize: '1.3rem', marginBottom: '18px' }}>
        <strong>Name:</strong> Sheheryar Ahmed
      </p>

      <p style={{ fontSize: '1.15rem', marginBottom: '20px' }}>
        I am a dedicated <strong>Software Engineering</strong> student at <em>Centennial College</em> passionate about building clean, efficient, and user-friendly applications. I strive to continuously learn and apply the latest technologies to solve real-world problems.
      </p>

      <p style={{ fontSize: '1.15rem', marginBottom: '20px' }}>
        During my studies, I have worked on various projects including web applications using React, Java-based applications, and mobile app prototyping. I enjoy debugging complex problems and optimizing code for better performance.
      </p>

      <p style={{ fontSize: '1.15rem', marginBottom: '20px' }}>
        Beyond coding, I’m enthusiastic about technology trends, open-source collaboration, and mentoring peers. In my free time, I enjoy reading tech blogs, exploring new programming languages, and contributing to community projects.
      </p>

      <a
        href="#"
        style={{
          display: 'inline-block',
          padding: '14px 32px',
          backgroundColor: '#ff4081',
          color: '#fff',
          borderRadius: '30px',
          textDecoration: 'none',
          fontWeight: '700',
          fontSize: '1.1rem',
          boxShadow: '0 7px 20px rgba(255, 64, 129, 0.5)',
          transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
          textAlign: 'center',
          marginTop: '10px',
          userSelect: 'none',
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = '#e73370';
          e.target.style.boxShadow = '0 10px 30px rgba(231, 51, 112, 0.7)';
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = '#ff4081';
          e.target.style.boxShadow = '0 7px 20px rgba(255, 64, 129, 0.5)';
        }}
      >
        Download Resume
      </a>
    </div>
  );
}

export default AboutMe;
