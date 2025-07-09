import { Suspense } from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Layout from './components/shared/Layout'
import { routesData } from './components/shared/Routes'

function App() {
  return (
    <>
      <Layout>
        <Suspense fallback={null}>
          <Routes>
            {routesData().map((route, idx) => (
              <Route key={idx} path={route.path} element={route.component} />
            ))}
          </Routes>
        </Suspense>
      </Layout>
    </>
  )
}

export default App
