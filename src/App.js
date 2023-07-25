import './App.css'
import Mensaje from './Mensaje.js'

const Descripcion = () => {
  return <p>esta es la app del full stack</p>
}
///importante----los cpomponentes se crean afuera no dentro de otro componente--//
const App = () => {
  return (
    <div className="App">
      <Mensaje color="red" message="estamos trabajando" />
      <Mensaje color="blue" message="en un curso" />
      <Mensaje color="green" message="de React" />
      <Descripcion />
    </div>
  )
}

export default App
