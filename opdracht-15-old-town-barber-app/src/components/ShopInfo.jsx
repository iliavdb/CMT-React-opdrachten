const services = [
  { name: 'Haircut', price: 20, duration: 30 },
  { name: 'Beard Trim', price: 15, duration: 20 },
  { name: 'Haircut + Beard', price: 30, duration: 45 },
]

function ShopInfo({ onSelectService }) {
  return (
    <section className="mb-6">
      <h2 className="text-xl font-bold mb-2">Old Town Barber</h2>
      <p className="mb-4">Openingstijden: Ma - Za | 09:00 - 18:00</p>

      <h3 className="font-semibold mb-2">Services</h3>
      <ul className="space-y-2">
        {services.map((service, index) => (
          <li
            key={index}
            className="border p-3 rounded cursor-pointer hover:bg-gray-100"
            onClick={() => onSelectService(service)}
          >
            {service.name} – €{service.price} ({service.duration} min)
          </li>
        ))}
      </ul>
    </section>
  )
}

export default ShopInfo
