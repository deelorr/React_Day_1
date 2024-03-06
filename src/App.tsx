import './index.css'
import Carousel from './Carousel'
import Nav from './Nav'
import Quote from './Quote'
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <div>
      <Nav />
      <Quote />
      <Carousel />
    </div>
  )
}

export default App