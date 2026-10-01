import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from '../components/layout/Layout'

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
        <Route path="/login" element={<Login />} />

        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/ocorrencias" element={<Occurrences />} />
          <Route path="/mapa" element={<Map />} />
          <Route path="/obras" element={<Works />} />
          <Route path="/interdicoes" element={<RoadBlocks />} />
          <Route path="/relatorios" element={<Reports />} />
          <Route path="/usuarios" element={<Users />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes