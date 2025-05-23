import React from 'react';

function Services() {
  const containerStyle = {
    maxWidth: '700px',
    margin: '40px auto',
    padding: '30px 40px',
    borderRadius: '20px',
    background: 'linear-gradient(135deg, #2a5298, #1e3c72)',
    boxShadow: '0 15px 40px rgba(42, 82, 152, 0.4)',
    color: 'white',
    fontFamily: "'Montserrat', sans-serif",
  };

  const headingStyle = {
    fontSize: '2.8rem',
    fontWeight: '900',
    marginBottom: '20px',
    borderBottom: '4px solid #ff4081',
    paddingBottom: '8px',
    letterSpacing: '1.2px',
  };

  const listStyle = {
    listStyleType: 'none',
    paddingLeft: 0,
  };

  const listItemStyle = {
    position: 'relative',
    fontSize: '1.3rem',
    paddingLeft: '30px',
    marginBottom: '18px',
    cursor: 'default',
    transition: 'color 0.3s ease',
  };

  const bulletStyle = {
    position: 'absolute',
    left: 0,
    top: '50%',
    transform: 'translateY(-50%)',
    width: '14px',
    height: '14px',
    borderRadius: '50%',
    background: '#ff4081',
  };

  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Services I Offer</h2>
      <ul style={listStyle}>
        {[
          'Web Application Development',
          'Java Application Development',
          'Mobile App Prototyping',
          'API Integration',
          'Debugging and Code Optimization',
        ].map((service, index) => (
          <li
            key={index}
            style={{
              ...listItemStyle,
              color: hoveredIndex === index ? '#ff80ab' : 'white',
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <span style={bulletStyle}></span>
            {service}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Services;
