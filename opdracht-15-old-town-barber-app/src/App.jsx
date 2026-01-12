import { useState } from 'react'
import ShopInfo from './components/ShopInfo'
import UserProfile from './components/UserProfile'
import BookingForm from './components/BookingForm'
import BookingsList from './components/BookingsList'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const [selectedService, setSelectedService] = useState(null)
  const [refresh, setRefresh] = useState(false)

  return (
    <div className="max-w-xl mx-auto p-4">
      <ShopInfo onSelectService={setSelectedService} />
      <UserProfile />
      <BookingForm
        selectedService={selectedService}
        onNewBooking={() => setRefresh(!refresh)}
      />
      <BookingsList key={refresh} />

      <ToastContainer position="bottom-right" />
    </div>
  )
}

export default App
