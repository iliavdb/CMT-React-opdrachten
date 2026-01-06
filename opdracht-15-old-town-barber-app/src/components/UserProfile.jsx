import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'

function UserProfile() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  })