import React from 'react';

function Contact() {
  const containerStyle = {
    maxWidth: '600px',
    margin: '40px auto',
    padding: '30px 40px',
    borderRadius: '20px',
    background: 'linear-gradient(135deg, #1e3c72, #2a5298)',
    color: 'white',
    boxShadow: '0 15px 40px rgba(42, 82, 152, 0.5)',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  };

  const headingStyle = {
    textAlign: 'center',
    fontSize: '2.5rem',
    fontWeight: '700',
    marginBottom: '20px',
    borderBottom: '3px solid #ff4081',
    paddingBottom: '8px',
  };

  const subHeadingStyle = {
    fontSize: '1.5rem',
    marginTop: '30px',
    marginBottom: '15px',
    fontWeight: '600',
    color: '#ff80ab',
  };

  const contactInfoStyle = {
    fontSize: '1.1rem',
    marginBottom: '10px',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
  };

  const inputStyle = {
    padding: '12px 15px',
    marginBottom: '20px',
    borderRadius: '12px',
    border: 'none',
    fontSize: '1rem',
    outline: 'none',
    transition: 'box-shadow 0.3s ease',
  };

  const textareaStyle = {
    ...inputStyle,
    minHeight: '100px',
    resize: 'vertical',
  };

  const buttonStyle = {
    backgroundColor: '#ff4081',
    border: 'none',
    padding: '14px',
    borderRadius: '30px',
    color: 'white',
    fontWeight: '700',
    fontSize: '1.1rem',
    cursor: 'pointer',
    boxShadow: '0 6px 18px rgba(255, 64, 129, 0.6)',
    transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
  };

  // Add focus styles dynamically using React state (optional)
  // or use inline onFocus/onBlur handlers

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Contact Me</h2>

      <p style={contactInfoStyle}><strong>Email:</strong> Sheheryar.ahmed98@gmail.com</p>
      <p style={contactInfoStyle}><strong>Phone:</strong> 647-761-0617</p>

      <h3 style={subHeadingStyle}>Send a Message</h3>

      <form style={formStyle}>
        <input
          type="text"
          placeholder="First Name"
          required
          style={inputStyle}
          onFocus={e => (e.target.style.boxShadow = '0 0 8px 2px #ff80ab')}
          onBlur={e => (e.target.style.boxShadow = 'none')}
        />
        <input
          type="text"
          placeholder="Last Name"
          required
          style={inputStyle}
          onFocus={e => (e.target.style.boxShadow = '0 0 8px 2px #ff80ab')}
          onBlur={e => (e.target.style.boxShadow = 'none')}
        />
        <input
          type="tel"
          placeholder="Contact Number"
          style={inputStyle}
          onFocus={e => (e.target.style.boxShadow = '0 0 8px 2px #ff80ab')}
          onBlur={e => (e.target.style.boxShadow = 'none')}
        />
        <input
          type="email"
          placeholder="Email Address"
          required
          style={inputStyle}
          onFocus={e => (e.target.style.boxShadow = '0 0 8px 2px #ff80ab')}
          onBlur={e => (e.target.style.boxShadow = 'none')}
        />
        <textarea
          placeholder="Your Message"
          required
          style={textareaStyle}
          onFocus={e => (e.target.style.boxShadow = '0 0 8px 2px #ff80ab')}
          onBlur={e => (e.target.style.boxShadow = 'none')}
        />
        <button
          type="submit"
          style={buttonStyle}
          onMouseEnter={e => {
            e.target.style.backgroundColor = '#e73370';
            e.target.style.boxShadow = '0 8px 25px rgba(231, 51, 112, 0.8)';
          }}
          onMouseLeave={e => {
            e.target.style.backgroundColor = '#ff4081';
            e.target.style.boxShadow = '0 6px 18px rgba(255, 64, 129, 0.6)';
          }}
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default Contact;
