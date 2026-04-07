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

const demands = [
  'তিস্তা নদীর স্থায়ী ভাঙনরোধে কার্যকর ও টেকসই ব্যবস্থা গ্রহণ',
  'অবৈধ বালু উত্তোলন দ্রুত বন্ধ করা',
  'জিও ব্যাগ চুরি, অনিয়ম ও চাঁদাবাজির বিরুদ্ধে কঠোর ব্যবস্থা',
  'ক্ষতিগ্রস্ত পরিবারগুলোর পুনর্বাসন ও আর্থিক সহায়তা',
  'নদীপাড় রক্ষায় স্বচ্ছ ও জবাবদিহিমূলক প্রকল্প বাস্তবায়ন',
]

const activities = [
  'স্থানীয় জনগণকে সংগঠিত করা',
  'মতবিনিময় সভা ও আলোচনা অনুষ্ঠান',
  'মানববন্ধন ও গণসচেতনতা কার্যক্রম',
  'প্রশাসনের কাছে স্মারকলিপি প্রদান',
  'ক্ষতিগ্রস্ত এলাকার তথ্য ও ছবি সংগ্রহ',
]

const notices = [
  {
    title: 'আগামী শুক্রবার জরুরি মতবিনিময় সভা',
    date: '১২ এপ্রিল ২০২৬',
    text: 'থেতরাই উচ্চ বিদ্যালয় মাঠে বিকাল ৪টায় সকল সদস্য ও সচেতন নাগরিকদের উপস্থিত থাকার অনুরোধ করা হচ্ছে।',
  },
  {
    title: 'ভাঙনকবলিত এলাকা পরিদর্শন কর্মসূচি',
    date: '১৫ এপ্রিল ২০২৬',
    text: 'সংগঠনের প্রতিনিধি দল ক্ষতিগ্রস্ত পরিবারগুলোর সাথে কথা বলবে এবং তথ্য সংগ্রহ করবে।',
  },
  {
    title: 'ছবি ও ভিডিও সংগ্রহ চলছে',
    date: 'চলমান',
    text: 'যাদের কাছে তিস্তা নদী ভাঙনের সাম্প্রতিক ছবি বা ভিডিও আছে, সংগঠনের সাথে যোগাযোগ করুন।',
  },
]

const members = [
  { name: 'সভাপতি', person: 'আপনার নাম / পরে বসাবেন' },
  { name: 'সাধারণ সম্পাদক', person: 'আপনার নাম / পরে বসাবেন' },
  { name: 'আহ্বায়ক', person: 'আপনার নাম / পরে বসাবেন' },
  { name: 'যুগ্ম আহ্বায়ক', person: 'আপনার নাম / পরে বসাবেন' },
]

const galleryImages = [
  'https://scontent.fdac146-1.fna.fbcdn.net/v/t1.15752-9/658962971_728770956990407_7773722764193212609_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=9f807c&_nc_ohc=eMQz1gwNNtQQ7kNvwGwLAVj&_nc_oc=AdriIUT17c7fAsShQofU8oeY0YrvCSbl0bQgBpTTCEchFQMERh7Ehgn19Ea8CkQk69E&_nc_zt=23&_nc_ht=scontent.fdac146-1.fna&_nc_ss=7a3a8&oh=03_Q7cD5AHcc8ZpIWvUA538wU1OWRTmSsPaShp1Ehy7S62bpc-B0Q&oe=69FBDA99',
  'https://scontent.fdac146-1.fna.fbcdn.net/v/t1.15752-9/657439400_946264747812951_6985388724800187583_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=9f807c&_nc_ohc=EVeSOnfFiC0Q7kNvwFxpNK4&_nc_oc=AdrQf2Pf-OR-UrAM7IkIjKsRpl5fLQ9di1YBdheUu9mVczXou_K8ZpvoQiqFKsL_nT8&_nc_zt=23&_nc_ht=scontent.fdac146-1.fna&_nc_ss=7a3a8&oh=03_Q7cD5AGR1WdG-jNwSptqtKpZl-TYAZJLnp5SPepexqZUj6zKFQ&oe=69FBDAA7',
  'https://scontent.fdac146-1.fna.fbcdn.net/v/t1.15752-9/661646901_960665896406719_6111716489866440374_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=9f807c&_nc_ohc=8wmUeeUjaokQ7kNvwFREgBl&_nc_oc=AdpGnOksr7FiiB2LMbqUVH9KJZzx7lonWLnen9yYfaepO7ciTh1zdRJkWk0oe1Vwjqc&_nc_zt=23&_nc_ht=scontent.fdac146-1.fna&_nc_ss=7a3a8&oh=03_Q7cD5AHYn8lq7KCONpwu9o6aEneyexiY-haZNZ6z_8PPgYOGFg&oe=69FC0EBC',
  'https://scontent.fdac146-1.fna.fbcdn.net/v/t1.15752-9/646137380_1457179909150349_2051163973851363628_n.jpg?stp=dst-jpg_s2048x2048_tt6&_nc_cat=109&ccb=1-7&_nc_sid=9f807c&_nc_ohc=Y_LvRxs8eIAQ7kNvwFM20Bq&_nc_oc=Adpk_N6kjKmQ8nmbj8cY--BYtSZh1KLF-eOfte9-JtOh1--beQzMLiGaOQqoTDFzNlo&_nc_zt=23&_nc_ht=scontent.fdac146-1.fna&_nc_ss=7a3a8&oh=03_Q7cD5AHHgKpFouvF8xadY8v0V8I_fDvfVQRiymcKlRVB4ze4dg&oe=69FC108A',
]

const sliderImages = [
  'https://scontent.fdac146-1.fna.fbcdn.net/v/t1.15752-9/644721244_2392989944498763_5104183655260587931_n.jpg?stp=dst-jpg_s640x640_tt6&_nc_cat=108&ccb=1-7&_nc_sid=0024fc&_nc_ohc=vmSVe1FD-SMQ7kNvwH_UNYn&_nc_oc=AdqN7RNQ51j7jOkWIBWZ9h7t2W1CGlkz8tJl_ywKfeys1UQzacikHp-JJG3SQAewbJ8&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fdac146-1.fna&_nc_ss=7a32e&oh=03_Q7cD5AFG3CE-6PKVUQa8votaVSEopOIUup7VPAKOmcpBuD9mPA&oe=69FBCB3F',
  'https://scontent.fdac146-1.fna.fbcdn.net/v/t1.15752-9/658962971_728770956990407_7773722764193212609_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=9f807c&_nc_ohc=eMQz1gwNNtQQ7kNvwGwLAVj&_nc_oc=AdriIUT17c7fAsShQofU8oeY0YrvCSbl0bQgBpTTCEchFQMERh7Ehgn19Ea8CkQk69E&_nc_zt=23&_nc_ht=scontent.fdac146-1.fna&_nc_ss=7a3a8&oh=03_Q7cD5AHcc8ZpIWvUA538wU1OWRTmSsPaShp1Ehy7S62bpc-B0Q&oe=69FBDA99',
  'https://scontent.fdac146-1.fna.fbcdn.net/v/t1.15752-9/657439400_946264747812951_6985388724800187583_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=9f807c&_nc_ohc=EVeSOnfFiC0Q7kNvwFxpNK4&_nc_oc=AdrQf2Pf-OR-UrAM7IkIjKsRpl5fLQ9di1YBdheUu9mVczXou_K8ZpvoQiqFKsL_nT8&_nc_zt=23&_nc_ht=scontent.fdac146-1.fna&_nc_ss=7a3a8&oh=03_Q7cD5AGR1WdG-jNwSptqtKpZl-TYAZJLnp5SPepexqZUj6zKFQ&oe=69FBDAA7',
  'https://scontent.fdac146-1.fna.fbcdn.net/v/t1.15752-9/661646901_960665896406719_6111716489866440374_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=9f807c&_nc_ohc=8wmUeeUjaokQ7kNvwFREgBl&_nc_oc=AdpGnOksr7FiiB2LMbqUVH9KJZzx7lonWLnen9yYfaepO7ciTh1zdRJkWk0oe1Vwjqc&_nc_zt=23&_nc_ht=scontent.fdac146-1.fna&_nc_ss=7a3a8&oh=03_Q7cD5AHYn8lq7KCONpwu9o6aEneyexiY-haZNZ6z_8PPgYOGFg&oe=69FC0EBC',
]

function SectionTitle({ small, title, center = false }) {
  return (
    <div className={center ? 'text-center mb-8' : 'mb-8'}>
      <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700 mb-2">
        {small}
      </p>
      <h2 className="text-2xl md:text-4xl font-bold text-slate-900">
        {title}
      </h2>
    </div>
  )
}

function App() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [showAdminModal, setShowAdminModal] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const goPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length)
  }

  const goNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length)
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="h-16 flex items-center justify-between">
            <a href="#home" className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-emerald-700 text-white flex items-center justify-center font-bold">
                তি
              </div>
              <div>
                <h1 className="text-sm sm:text-base font-bold leading-tight">
                  তিস্তা ভাঙনরোধ গণ আন্দোলন
                </h1>
                <p className="text-xs text-slate-500">থেতরাই</p>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-slate-700 hover:text-emerald-700 transition"
                >
                  {item.label}
                </a>
              ))}
              <button
                onClick={() => setShowAdminModal(true)}
                className="bg-emerald-700 hover:bg-emerald-800 text-white px-4 py-2 rounded-xl text-sm font-semibold transition"
              >
                Admin Login
              </button>
            </nav>

            <button
              className="md:hidden inline-flex items-center justify-center rounded-xl border border-slate-300 px-3 py-2 text-sm font-medium"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? 'বন্ধ' : 'মেনু'}
            </button>
          </div>

          {mobileOpen && (
            <div className="md:hidden pb-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
                <div className="flex flex-col gap-2">
                  {navItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
                    >
                      {item.label}
                    </a>
                  ))}
                  <button
                    onClick={() => {
                      setShowAdminModal(true)
                      setMobileOpen(false)
                    }}
                    className="mt-2 rounded-xl bg-emerald-700 px-4 py-3 text-sm font-semibold text-white"
                  >
                    Admin Login
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      <section
        id="home"
        className="relative overflow-hidden bg-gradient-to-br from-emerald-800 via-emerald-700 to-teal-700 text-white"
      >
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_white,_transparent_40%)]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 relative">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="inline-block bg-white/15 border border-white/20 rounded-full px-4 py-2 text-sm mb-5">
                জনগণের কণ্ঠ, নদীপাড়ের অধিকার
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight">
                তিস্তা ভাঙনরোধ গণ আন্দোলন, থেতরাই
              </h2>
              <p className="mt-5 text-base sm:text-lg text-emerald-50 leading-8">
                তিস্তা নদীর ভয়াবহ ভাঙন থেকে মানুষ, বসতভিটা, কৃষিজমি ও ভবিষ্যৎকে
                রক্ষার দাবিতে আমরা ঐক্যবদ্ধ। আমাদের লক্ষ্য সচেতনতা, সংগঠন, দাবি
                আদায় এবং স্থায়ী সমাধান।
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="#about"
                  className="inline-flex justify-center rounded-2xl bg-white text-emerald-800 px-6 py-3 font-bold shadow-lg hover:bg-emerald-50 transition"
                >
                  আমাদের সম্পর্কে জানুন
                </a>
                <a
                  href="#contact"
                  className="inline-flex justify-center rounded-2xl border border-white/30 bg-white/10 px-6 py-3 font-semibold hover:bg-white/20 transition"
                >
                  যোগাযোগ করুন
                </a>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-3">
                <div className="rounded-2xl bg-white/10 border border-white/15 p-4">
                  <h3 className="text-2xl font-bold">১+</h3>
                  <p className="text-sm text-emerald-100 mt-1">ঐক্যবদ্ধ আন্দোলন</p>
                </div>
                <div className="rounded-2xl bg-white/10 border border-white/15 p-4">
                  <h3 className="text-2xl font-bold">অনেক</h3>
                  <p className="text-sm text-emerald-100 mt-1">ক্ষতিগ্রস্ত পরিবার</p>
                </div>
                <div className="rounded-2xl bg-white/10 border border-white/15 p-4">
                  <h3 className="text-2xl font-bold">জরুরি</h3>
                  <p className="text-sm text-emerald-100 mt-1">স্থায়ী সমাধান</p>
                </div>
              </div>
            </div>

            <div>
              <div className="rounded-3xl bg-white/10 border border-white/15 p-4 shadow-2xl">
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={sliderImages[currentSlide]}
                    alt={`স্লাইড ${currentSlide + 1}`}
                    className="h-[260px] sm:h-[360px] md:h-[460px] w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                  <button
                    onClick={goPrevSlide}
                    className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/45 text-white text-lg hover:bg-black/60 transition"
                    aria-label="আগের ছবি"
                  >
                    ‹
                  </button>

                  <button
                    onClick={goNextSlide}
                    className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/45 text-white text-lg hover:bg-black/60 transition"
                    aria-label="পরের ছবি"
                  >
                    ›
                  </button>

                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {sliderImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-2.5 rounded-full transition-all ${
                          currentSlide === index
                            ? 'w-8 bg-white'
                            : 'w-2.5 bg-white/60 hover:bg-white/80'
                        }`}
                        aria-label={`স্লাইড ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionTitle small="আমাদের পরিচিতি" title="কেন এই সংগঠন" />

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold mb-4">আমরা কারা</h3>
              <p className="text-slate-600 leading-8">
                তিস্তা ভাঙনরোধ গণ আন্দোলন, থেতরাই হলো এলাকার সচেতন নাগরিক, যুবসমাজ
                এবং ভাঙনকবলিত মানুষের সম্মিলিত একটি সামাজিক প্ল্যাটফর্ম। আমরা
                তিস্তা নদীর ভয়াবহ ভাঙনের বিরুদ্ধে শান্তিপূর্ণ, সংগঠিত ও
                জনমুখী আন্দোলন গড়ে তুলতে কাজ করছি।
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold mb-4">আমাদের লক্ষ্য</h3>
              <p className="text-slate-600 leading-8">
                নদীভাঙন রোধে স্থায়ী ব্যবস্থা, ক্ষতিগ্রস্ত মানুষের অধিকার প্রতিষ্ঠা,
                অবৈধ বালু উত্তোলন বন্ধ, অনিয়ম ও চাঁদাবাজির বিরুদ্ধে সোচ্চার হওয়া
                এবং জনগণের পক্ষ থেকে জবাবদিহিমূলক উন্নয়ন দাবি করা।
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="problem" className="py-16 md:py-24 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionTitle small="সমস্যার চিত্র" title="তিস্তা নদী ভাঙনের প্রভাব" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              'বসতভিটা হারিয়ে অনিশ্চিত জীবন',
              'কৃষিজমি ও ফসলি জমির ক্ষতি',
              'রাস্তা, শিক্ষা প্রতিষ্ঠান ও অবকাঠামো ঝুঁকিতে',
              'মানুষের জীবিকা, নিরাপত্তা ও ভবিষ্যৎ হুমকির মুখে',
            ].map((item) => (
              <div
                key={item}
                className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200"
              >
                <div className="h-12 w-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center text-xl font-bold mb-4">
                  !
                </div>
                <p className="text-slate-700 leading-7 font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="demands" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionTitle small="আমাদের দাবি" title="জনগণের ন্যায্য দাবি" />

          <div className="grid gap-4">
            {demands.map((item, index) => (
              <div
                key={item}
                className="flex gap-4 bg-white rounded-2xl p-5 border border-slate-200 shadow-sm"
              >
                <div className="shrink-0 h-10 w-10 rounded-full bg-emerald-700 text-white flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <p className="text-slate-700 leading-7 font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="activities" className="py-16 md:py-24 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionTitle small="চলমান কার্যক্রম" title="আমরা কী করছি" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {activities.map((item) => (
              <div
                key={item}
                className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm"
              >
                <div className="mb-4 inline-flex rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700">
                  কার্যক্রম
                </div>
                <h3 className="text-lg font-bold leading-8">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionTitle small="নোটিশ ও আপডেট" title="সাম্প্রতিক ঘোষণা" />

          <div className="grid lg:grid-cols-3 gap-5">
            {notices.map((notice) => (
              <div
                key={notice.title}
                className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm"
              >
                <p className="text-sm text-emerald-700 font-semibold mb-3">
                  {notice.date}
                </p>
                <h3 className="text-xl font-bold leading-8 mb-3">
                  {notice.title}
                </h3>
                <p className="text-slate-600 leading-7">{notice.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-16 md:py-24 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionTitle small="গ্যালারি" title="ছবি ও কার্যক্রম" />

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((src, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
              >
                <img
                  src={src}
                  alt={`গ্যালারি ${index + 1}`}
                  className="h-40 sm:h-52 md:h-64 w-full object-cover hover:scale-105 transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionTitle small="সদস্য ও নেতৃত্ব" title="সংগঠনের দায়িত্বশীলরা" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {members.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm text-center"
              >
                <div className="h-20 w-20 mx-auto rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-2xl font-bold mb-4">
                  {member.name[0]}
                </div>
                <h3 className="text-lg font-bold">{member.name}</h3>
                <p className="text-slate-600 mt-2">{member.person}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-emerald-800 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl md:text-4xl font-extrabold leading-tight">
            তিস্তা নদী ভাঙনরোধে ঐক্যবদ্ধ হোন
          </h2>
          <p className="mt-4 text-emerald-50 leading-8 max-w-3xl mx-auto">
            আমাদের এলাকা, আমাদের মানুষ, আমাদের ভবিষ্যৎ রক্ষার এই আন্দোলনে সবাইকে
            পাশে দাঁড়ানোর আহ্বান জানাই।
          </p>
          <a
            href="#contact"
            className="inline-flex mt-8 rounded-2xl bg-white px-6 py-3 text-emerald-800 font-bold hover:bg-emerald-50 transition"
          >
            যোগাযোগ করুন
          </a>
        </div>
      </section>

      <section id="contact" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionTitle small="যোগাযোগ" title="আমাদের সাথে যোগাযোগ করুন" />

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold mb-4">যোগাযোগের তথ্য</h3>
              <div className="space-y-4 text-slate-700">
                <p>
                  <span className="font-semibold">সংগঠনের নাম:</span> তিস্তা
                  ভাঙনরোধ গণ আন্দোলন, থেতরাই
                </p>
                <p>
                  <span className="font-semibold">ঠিকানা:</span> থেতরাই,
                  কুড়িগ্রাম, বাংলাদেশ
                </p>
                <p>
                  <span className="font-semibold">মোবাইল:</span> 01755255293
                </p>
                <p>
                  <span className="font-semibold">ইমেইল:</span> info@tistamovement.com
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold mb-4">বার্তা দিন</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="আপনার নাম"
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-emerald-600"
                />
                <input
                  type="text"
                  placeholder="মোবাইল নম্বর"
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-emerald-600"
                />
                <textarea
                  rows="5"
                  placeholder="আপনার বার্তা"
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-emerald-600"
                ></textarea>
                <button
                  type="button"
                  className="w-full rounded-2xl bg-emerald-700 px-5 py-3 font-bold text-white hover:bg-emerald-800 transition"
                  onClick={() => alert('স্ট্যাটিক ভার্সনে ফর্ম সাবমিট যুক্ত করা হয়নি।')}
                >
                  পাঠান
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-slate-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <p className="text-sm text-center md:text-left">
              © 2026 তিস্তা ভাঙনরোধ গণ আন্দোলন, থেতরাই। সর্বস্বত্ব সংরক্ষিত।
            </p>
            <div className="flex gap-4 text-sm">
              <a href="#home" className="hover:text-white">
                হোম
              </a>
              <a href="#about" className="hover:text-white">
                পরিচিতি
              </a>
              <a href="#contact" className="hover:text-white">
                যোগাযোগ
              </a>
            </div>
          </div>
        </div>
      </footer>

      {showAdminModal && (
        <div className="fixed inset-0 z-[100] bg-black/50 px-4 flex items-center justify-center">
          <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold">Admin Login</h3>
                <p className="text-sm text-slate-500 mt-1">
                  এটি আপাতত স্ট্যাটিক ডেমো অপশন।
                </p>
              </div>
              <button
                onClick={() => setShowAdminModal(false)}
                className="rounded-xl border border-slate-300 px-3 py-1.5 text-sm"
              >
                বন্ধ
              </button>
            </div>

            <div className="mt-5 space-y-4">
              <input
                type="text"
                placeholder="Admin Username"
                className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-emerald-600"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-emerald-600"
              />
              <button
                type="button"
                onClick={() => alert('এখনো backend যুক্ত করা হয়নি। পরে real admin login করা যাবে।')}
                className="w-full rounded-2xl bg-emerald-700 px-5 py-3 font-bold text-white hover:bg-emerald-800 transition"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App