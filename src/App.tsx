import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Main from './routes/Main'
import Customers from './routes/Customers'

interface Props {
  // define your props here
}

const ComponentName: React.FC<Props> = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Main} />
        <Route path="/customers" Component={Customers} />
      </Routes>
    </Router>
  )
}

export default ComponentName
