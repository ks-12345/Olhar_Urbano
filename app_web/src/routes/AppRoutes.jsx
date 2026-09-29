import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'
import Occurrences from '../pages/Occurrences'
import Map from '../pages/Map'
import Works from '../pages/Works'
import RoadBlocks from '../pages/RoadBlocks'
import Reports from '../pages/Reports'
import Users from '../pages/Users'

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ocorrencias" element={<Occurrences />} />
        <Route path="/mapa" element={<Map />} />
        <Route path="/obras" element={<Works />} />
        <Route path="/interdicoes" element={<RoadBlocks />} />
        <Route path="/relatorios" element={<Reports />} />
        <Route path="/usuarios" element={<Users />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes