import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    this.setState({
      error,
      errorInfo
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          padding: '20px',
          fontFamily: 'Arial, sans-serif',
          maxWidth: '800px',
          margin: '50px auto',
          background: '#fff',
          border: '1px solid #e0e0e0',
          borderRadius: '8px'
        }}>
          <h1 style={{ color: '#d32f2f' }}>Something went wrong</h1>
          <p>The application encountered an error. Please check the browser console for details.</p>
          <details style={{ marginTop: '20px' }}>
            <summary style={{ cursor: 'pointer', color: '#666' }}>Error Details</summary>
            <pre style={{
              background: '#f5f5f5',
              padding: '10px',
              overflow: 'auto',
              marginTop: '10px',
              fontSize: '12px'
            }}>
              {this.state.error && this.state.error.toString()}
              <br />
              {this.state.errorInfo.componentStack}
            </pre>
          </details>
          <button
            onClick={() => window.location.reload()}
            style={{
              marginTop: '20px',
              padding: '10px 20px',
              background: '#1976d2',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;


