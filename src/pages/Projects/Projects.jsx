import './Projects.css';

const Projects = () => {
  return (
    <div className="projects-page">
      <div className="container" style={{ paddingTop: '120px', minHeight: '80vh' }}>
        <h1 className="section-title">Project Development</h1>
        <p className="text-center" style={{ fontSize: '1.2rem', marginTop: '2rem' }}>
          From Concept to Implementation
        </p>
        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
          <h3 style={{ marginBottom: '1.5rem' }}>Project Categories:</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', maxWidth: '800px', margin: '0 auto' }}>
            <div>📚 IEEE Projects</div>
            <div>🎓 Final Year Projects</div>
            <div>🔬 Research Projects</div>
            <div>💻 Live Projects</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;



