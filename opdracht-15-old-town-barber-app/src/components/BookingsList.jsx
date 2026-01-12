import { useEffect, useState } from 'react'
import { getFromStorage } from '../utils/localStorage'

function BookingsList() {
  const [appointments, setAppointments] = useState([])

  useEffect(() => {
    const data = getFromStorage('appointments') || []
    data.sort((a, b) => new Date(a.date) - new Date(b.date))
    setAppointments(data)
  }, [])

  return (
    <section>
      <h2 className="text-xl font-bold mb-2">Afspraken</h2>

      {appointments.length === 0 && <p>Geen afspraken</p>}

      <ul className="space-y-2">
        {appointments.map((a, index) => (
          <li key={index} className="border p-3 rounded">
            {a.service} – {a.date} om {a.time} (€{a.price})
          </li>
        ))}
      </ul>
    </section>
  )
}

export default BookingsList
