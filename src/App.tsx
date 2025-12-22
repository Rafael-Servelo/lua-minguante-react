import Header from "./components/header";

function App() {
  return (
<<<<<<< HEAD
    <div className="text-center w-screen h-screen flex flex-col justify-center items-center gap-8 bg-primary">
      <h1 className="text-9xl" style={{ fontFamily: "var(--font-header)" }}>
        Lua Minguante
      </h1>
      <p className="text-6xl" style={{ fontFamily: "var(--font-title)" }}>
        Lua Minguante
      </p>
      <p className="text-3xl" style={{ fontFamily: "var(--font-body)" }}>
        Lua Minguante
      </p>
=======
    <div className="select-none flex flex-col items-center justify-center min-h-screen gap-4 w-screen h-screen bg-purple">
      <Header></Header>
      <div className="text-3xl text-rose text-title">Lua Minguante</div>
      <div className="text-slate-200">Lua Minguante</div>
>>>>>>> b18a32e654f02b2bbb4e6f6a6d02feaca7b730ad
    </div>
  );
}

export default App;
