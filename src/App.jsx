import { useEffect, useState } from 'react'

const navItems = [
  { label: 'হোম', href: '#home' },
  { label: 'পরিচিতি', href: '#about' },
  { label: 'সমস্যা', href: '#problem' },
  { label: 'দাবি', href: '#demands' },
  { label: 'কার্যক্রম', href: '#activities' },
  { label: 'গ্যালারি', href: '#gallery' },
  { label: 'যোগাযোগ', href: '#contact' },
]

const sliderImages = [
  'https://images.unsplash.com/photo-1505761671935-60b3a7427bad',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
  'https://images.unsplash.com/photo-1441974231531-c6227db76b6e',
]

function App() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const goPrev = () => {
    setCurrentSlide((prev) =>
      (prev - 1 + sliderImages.length) % sliderImages.length
    )
  }

  const goNext = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length)
  }

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Navbar */}
      <div className="bg-white p-4 flex justify-between items-center shadow sticky top-0 z-50">
        <h1 className="font-bold text-lg">তিস্তা আন্দোলন</h1>

        <button onClick={() => setMobileOpen(!mobileOpen)}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="bg-white p-4 space-y-2">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="block">
              {item.label}
            </a>
          ))}
        </div>
      )}

      {/* 🔥 FULL WIDTH SLIDER */}
      <section
        id="home"
        className="relative w-full h-[70vh] md:h-[90vh] overflow-hidden"
      >
        <img
          src={sliderImages[currentSlide]}
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h2 className="text-3xl md:text-6xl font-bold">
            তিস্তা ভাঙনরোধ আন্দোলন
          </h2>

          <p className="mt-4 max-w-xl">
            তিস্তা নদীর ভাঙন থেকে মানুষকে রক্ষা করতে আমরা ঐক্যবদ্ধ।
          </p>
        </div>

        {/* Buttons */}
        <button
          onClick={goPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded"
        >
          ◀
        </button>

        <button
          onClick={goNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded"
        >
          ▶
        </button>

        {/* Dots */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
          {sliderImages.map((_, i) => (
            <div
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-2 rounded-full cursor-pointer ${
                currentSlide === i ? 'w-6 bg-white' : 'w-2 bg-white/50'
              }`}
            ></div>
          ))}
        </div>
      </section>

      {/* About */}
      <div id="about" className="p-6">
        <h2 className="text-xl font-bold">আমাদের পরিচিতি</h2>
        <p className="mt-2">
          এটি একটি সামাজিক আন্দোলন যা তিস্তা নদী ভাঙন রোধে কাজ করছে।
        </p>
      </div>

      {/* Problem */}
      <div id="problem" className="p-6">
        <h2 className="text-xl font-bold">সমস্যা</h2>
        <p className="mt-2">
          তিস্তা নদীর ভয়াবহ ভাঙন মানুষকে ক্ষতিগ্রস্ত করছে।
        </p>
      </div>

      {/* Demands */}
      <div id="demands" className="p-6">
        <h2 className="text-xl font-bold">আমাদের দাবি</h2>
        <ul className="mt-2 space-y-1">
          <li>✔ স্থায়ী ভাঙনরোধ</li>
          <li>✔ বালু উত্তোলন বন্ধ</li>
          <li>✔ পুনর্বাসন</li>
        </ul>
      </div>

      {/* Gallery */}
      <div id="gallery" className="p-6">
        <h2 className="text-xl font-bold">গ্যালারি</h2>
        <div className="grid grid-cols-2 gap-2 mt-3">
          <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" />
          <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e" />
        </div>
      </div>

      {/* Contact */}
      <div id="contact" className="p-6">
        <h2 className="text-xl font-bold">যোগাযোগ</h2>
        <p>মোবাইল: 01XXXXXXXXX</p>
      </div>

    </div>
  )
}

export default App