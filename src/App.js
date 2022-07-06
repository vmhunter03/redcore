import "./App.css";
import logo from "./assets/image001.png";
function App() {
  const showFile = () => {
    const preview = document.getElementById("text");
    const file = document.querySelector("input[type=file]").files[0];
    const reader = new FileReader();

    const textFile = /text.*/;

    if (file.type.match(textFile)) {
      reader.onload = function (e) {
        preview.innerHTML = e.target.result;
      };
    }
    reader.readAsText(file);
  };

  return (
    <div className="App">
      <img src={logo} alt="logo" />
      <h1>INITIAL STAGE for React</h1>
      <span>Select a Book File : </span>
      <div>
        <input type="file" onChange={showFile} />
        <div id="text">Choose text File</div>
      </div>
    </div>
  );
}

export default App;
