function App() {
  return (
    <div className="container">
      <h1>Career App Prototype</h1>
      <p>This is a simple AI-powered prototype deployed as a static site.</p>
      <button onClick={() => alert("Get Started clicked!")}>Get Started</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
