import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'

// layouts and pages
import RootLayout from './layouts/RootLayout'
import Dashboard, { tasksLoader } from './pages/Dashboard'
import Create, { createAction } from './pages/Create'
import Profile from './pages/Profile'
import ClinicalConsultationForm from './pages/ClinicalConsultationForm'
import ShopLoginForce from './pages/ShopLoginForce'

// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<ShopLoginForce />} />
      <Route element={<RootLayout />}>
        <Route path="dashboard" element={<Dashboard />} loader={tasksLoader} />
        <Route path="create" element={<Create />} action={createAction} />
        <Route path="clinicalconsultationform" element={<ClinicalConsultationForm />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
