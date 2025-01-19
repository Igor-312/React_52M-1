import "./App.css";
import Lesson02 from "./lessons/Lesson02/lesson02";
//импорт по умолчанию (название компонента можно заменить на любое другое)
// import MyButton from "./components/Button/Button";
// import Button from "./components/Button/Button";

function App() {
  return (
    <div className="app">
      {/* <Button />
      <Button />
      <Button /> */}
      <Lesson02/>
    </div>
  );
}

export default App;
