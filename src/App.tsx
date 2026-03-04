import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/Page/Login'
import { DashboardMobile } from './components/Page/DashboardMobile'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<DashboardMobile />} />
      </Routes>
    </Router>
  )
}

export default App
