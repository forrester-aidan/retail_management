import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Main from './routes/Main'
import Customers from './routes/Customers'
import Inventory from './routes/Inventory'
import Employees from './routes/Employees'
import Login from './routes/Login'

interface Props {
  // define your props here
}

const ComponentName: React.FC<Props> = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Main} />
        <Route path="/customers" Component={Customers} />
        <Route path="/inventory" Component={Inventory} />
        <Route path="/employees" Component={Employees} />
        <Route path="/login" Component={Login} />
      </Routes>
    </Router>
  )
}

export default ComponentName
