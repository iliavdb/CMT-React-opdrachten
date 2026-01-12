import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { saveToStorage, getFromStorage } from '../utils/localStorage'

function UserProfile() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  })

  useEffect(() => {
    const savedProfile = getFromStorage('userProfile')
    if (savedProfile) {
      setFormData(savedProfile)
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.phone) {
      toast.error('Vul alle velden in')
      return
    }

    saveToStorage('userProfile', formData)
    toast.success('Profiel opgeslagen')
  }

  return (
    <section className="mb-6">
      <h2 className="text-xl font-bold mb-2">Jouw gegevens</h2>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          placeholder="Naam"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full p-2 border rounded"
        />

        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full p-2 border rounded"
        />

        <input
          type="tel"
          placeholder="Telefoon"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full p-2 border rounded"
        />

        <button className="bg-black text-white px-4 py-2 rounded">
          Opslaan
        </button>
      </form>
    </section>
  )
}

export default UserProfile
