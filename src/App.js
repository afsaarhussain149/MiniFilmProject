import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './modules/Home';
import MoviesZone from './MoviesZone/MoviesZone';
import FirstApi from './modules/Api/FirstApi';
import Form from './modules/Home/Form';
import ImanageEmployeeApi from './modules/Api/ImanageEmployeeApi';
import MultiColumn from './modules/Home/MultiColumn';
import Food from './Food/Food';


function App() {
  return (
    <>
      {/* <Home />  */}
      <MoviesZone /> 
      {/* <FirstApi />
      <Form />
      <ImanageEmployeeApi />
      <MultiColumn />
      <Food /> */}
    </>
  );
}
export default App;
