import Header from "./components/header";

function App() {
  return (
    <div className="select-none flex flex-col items-center justify-center min-h-screen gap-4 w-screen h-screen bg-purple">
      <Header></Header>
      <div className="text-3xl text-rose text-title">Lua Minguante</div>
      <div className="text-slate-200">Lua Minguante</div>
    </div>
  );
}

export default App;
