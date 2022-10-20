import BlockiTheme from "./components/BlockiTheme/ BlockiTheme";
import ButtonContainer from "./components/ButtonContainer/ButtonContainer";
import { ColorOptions } from "./components/BlockiTheme/ BlockiTheme";

const colors: ColorOptions = {
  light: {},
  dark: {},
};

function App() {
  return (
    <div className="App">
      <BlockiTheme mode="light" colors={colors}>
        <ButtonContainer />
        <ButtonContainer />
        <ButtonContainer />
        <ButtonContainer />
      </BlockiTheme>
    </div>
  );
}

export default App;
