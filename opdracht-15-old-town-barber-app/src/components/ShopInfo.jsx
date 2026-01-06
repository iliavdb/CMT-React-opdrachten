const services = [
  { name: 'Haircut', price: 20, duration: 30 },
  { name: 'Beard Trim', price: 15, duration: 20 },
  { name: 'Haircut + Beard', price: 30, duration: 45 },
]

function ShopInfo() {
  return (
    <section>
      <h2>Old Town Barber</h2>
      <p>Openingstijden: Ma - Za | 09:00 - 18:00</p>

      <h3>Services</h3>
      <ul>
        {services.map((service, index) => (
          <li key={index}>
            {service.name} – €{service.price} ({service.duration} min)
          </li>
        ))}
      </ul>
    </section>
  )
}

export default ShopInfo
