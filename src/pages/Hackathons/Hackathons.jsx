import './Hackathons.css';

const Hackathons = () => {
  return (
    <div className="hackathons-page">
      <div className="container" style={{ paddingTop: '120px', minHeight: '80vh' }}>
        <h1 className="section-title">Code. Compete. Conquer.</h1>
        <p className="text-center" style={{ fontSize: '1.2rem', marginTop: '2rem' }}>
          Join India's Most Exciting Hackathons
        </p>
        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
          <h3 style={{ marginBottom: '1.5rem' }}>Stats:</h3>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontSize: '3rem', fontWeight: 'bold' }}>50+</div>
              <div>Hackathons Organized</div>
            </div>
            <div>
              <div style={{ fontSize: '3rem', fontWeight: 'bold' }}>10,000+</div>
              <div>Participants</div>
            </div>
            <div>
              <div style={{ fontSize: '3rem', fontWeight: 'bold' }}>₹50L+</div>
              <div>Prize Money</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hackathons;



