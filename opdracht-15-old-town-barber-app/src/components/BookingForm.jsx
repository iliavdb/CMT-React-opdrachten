// BookingForm Component - datum input voorbeeld
// de rest van het formulier en component maak je zelf
import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { getFromStorage, saveToStorage } from '../utils/localStorage'

function BookingForm({ selectedService, onNewBooking }) {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
  })

  useEffect(() => {
    const profile = getFromStorage('userProfile')
    if (!profile) {
      toast.info('Vul eerst je profiel in')
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!selectedService || !formData.date || !formData.time) {
      toast.error('Vul alles in')
      return
    }

    const booking = {
      service: selectedService.name,
      price: selectedService.price,
      date: formData.date,
      time: formData.time,
    }

    const existing = getFromStorage('appointments') || []
    saveToStorage('appointments', [...existing, booking])

    toast.success('Afspraak geboekt')
    onNewBooking()
  }

  return (
    <section className="mb-6">
      <h2 className="text-xl font-bold mb-2">Afspraak maken</h2>

      {selectedService && (
        <p className="mb-2">
          Gekozen service: <strong>{selectedService.name}</strong>
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label className="block mb-1">Datum *</label>
          <input
            type="date"
            value={formData.date}
            min={new Date().toISOString().split('T')[0]}
            onChange={(e) =>
              setFormData({ ...formData, date: e.target.value })
            }
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block mb-1">Tijd *</label>
          <select
            value={formData.time}
            onChange={(e) =>
              setFormData({ ...formData, time: e.target.value })
            }
            className="w-full p-2 border rounded"
          >
            <option value="">Selecteer tijd</option>
            <option>09:00</option>
            <option>10:00</option>
            <option>11:00</option>
            <option>13:00</option>
            <option>14:00</option>
            <option>15:00</option>
          </select>
        </div>

        <button className="bg-black text-white px-4 py-2 rounded">
          Boeken
        </button>
      </form>
    </section>
  )
}

export default BookingForm
