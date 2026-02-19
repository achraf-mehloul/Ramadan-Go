import { Moon, Star, Sparkles, Zap } from 'lucide-react';

function App() {
  return (
    <div dir="rtl" className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 1000 1000">
        <defs>
          <pattern id="islamic-pattern" patternUnits="userSpaceOnUse" width="200" height="200">
            <circle cx="100" cy="100" r="50" fill="none" stroke="currentColor" strokeWidth="2"/>
            <path d="M 50 100 Q 100 50 150 100" fill="none" stroke="currentColor" strokeWidth="1"/>
            <path d="M 100 50 L 100 150" stroke="currentColor" strokeWidth="1"/>
          </pattern>
        </defs>
        <use href="#islamic-pattern" fill="white"/>
      </svg>

      {/* Animated stars */}
      <div className="absolute top-10 left-12 animate-pulse">
        <Star className="w-6 h-6 text-yellow-300 opacity-70" fill="currentColor" />
      </div>
      <div className="absolute top-20 right-20 animate-pulse delay-300">
        <Star className="w-4 h-4 text-yellow-200 opacity-60" fill="currentColor" />
      </div>
      <div className="absolute bottom-40 left-16 animate-pulse delay-500">
        <Star className="w-5 h-5 text-yellow-400 opacity-50" fill="currentColor" />
      </div>
      <div className="absolute top-1/2 right-10 animate-pulse delay-700">
        <Star className="w-3 h-3 text-yellow-300 opacity-60" fill="currentColor" />
      </div>
      <div className="absolute bottom-1/3 right-1/4 animate-pulse delay-500">
        <Sparkles className="w-6 h-6 text-yellow-200 opacity-40" />
      </div>

      {/* Ornamental dividers */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-30"></div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-8 md:py-12 flex flex-col items-center justify-center min-h-screen">
        <div className="text-center space-y-8 max-w-5xl">
          {/* Decorative moon section */}
          <div className="animate-fade-in">
            <div className="flex justify-center items-center gap-6 mb-12">
              <div className="hidden md:block w-px h-20 bg-gradient-to-b from-transparent via-amber-400 to-transparent"></div>
              <div className="relative">
                <div className="absolute inset-0 animate-pulse bg-amber-300/20 rounded-full blur-3xl"></div>
                <Moon className="w-32 h-32 md:w-40 md:h-40 text-amber-300 drop-shadow-[0_0_40px_rgba(251,191,36,0.6)] animate-glow relative z-10" fill="currentColor" />
              </div>
              <div className="hidden md:block w-px h-20 bg-gradient-to-b from-transparent via-amber-400 to-transparent"></div>
            </div>
          </div>

          {/* Main title */}
          <div className="space-y-4 animate-fade-in delay-300">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-amber-300 drop-shadow-[0_0_20px_rgba(251,191,36,0.3)] leading-tight">
              رمضان
            </h1>
            <h2 className="text-4xl md:text-6xl text-amber-200 font-light tracking-widest">
              كريم
            </h2>
          </div>

          {/* Decorative line */}
          <div className="flex justify-center items-center gap-4 my-8">
            <div className="flex-grow h-px bg-gradient-to-l from-transparent to-amber-400/50 max-w-[80px]"></div>
            <Zap className="w-5 h-5 text-amber-400 opacity-70" fill="currentColor" />
            <div className="flex-grow h-px bg-gradient-to-r from-transparent to-amber-400/50 max-w-[80px]"></div>
          </div>

          {/* Subtitle */}
          <p className="text-2xl md:text-4xl text-amber-100 font-light leading-relaxed tracking-wide animate-fade-in delay-500">
            شهر الرحمة والمغفرة والعتق من النار
          </p>

          {/* Three pillar cards */}
          <div className="grid md:grid-cols-3 gap-8 mt-20 animate-fade-in delay-700">
            {/* Card 1 - Prayer */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative backdrop-blur-xl bg-slate-800/40 rounded-3xl p-8 md:p-10 border border-amber-400/30 hover:border-amber-400/60 transition-all duration-500 hover:bg-slate-800/60 shadow-2xl">
                <div className="text-6xl mb-6">📿</div>
                <h3 className="text-2xl md:text-3xl font-bold text-amber-300 mb-4">الصلاة</h3>
                <p className="text-amber-100/80 text-lg leading-relaxed font-light">
                  عمود الدين والقرب من الخالق، استقيموا عليها في كل وقت
                </p>
              </div>
            </div>

            {/* Card 2 - Quran */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative backdrop-blur-xl bg-slate-800/40 rounded-3xl p-8 md:p-10 border border-amber-400/30 hover:border-amber-400/60 transition-all duration-500 hover:bg-slate-800/60 shadow-2xl">
                <div className="text-6xl mb-6">🌙</div>
                <h3 className="text-2xl md:text-3xl font-bold text-amber-300 mb-4">القرآن الكريم</h3>
                <p className="text-amber-100/80 text-lg leading-relaxed font-light">
                  كلام الله الشريف، اغتنموا الفرصة لتدبره وختمه بقلب خاشع
                </p>
              </div>
            </div>

            {/* Card 3 - Supplication */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative backdrop-blur-xl bg-slate-800/40 rounded-3xl p-8 md:p-10 border border-amber-400/30 hover:border-amber-400/60 transition-all duration-500 hover:bg-slate-800/60 shadow-2xl">
                <div className="text-6xl mb-6">🤲</div>
                <h3 className="text-2xl md:text-3xl font-bold text-amber-300 mb-4">الدعاء</h3>
                <p className="text-amber-100/80 text-lg leading-relaxed font-light">
                  سلاح المؤمن، تضرعوا إلى الله فشهر رمضان شهر استجابة الدعاء
                </p>
              </div>
            </div>
          </div>

          {/* Quranic verse section */}
          <div className="mt-20 relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-yellow-400/10 to-amber-500/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative backdrop-blur-2xl bg-slate-800/30 rounded-3xl p-8 md:p-16 border-2 border-amber-400/40 shadow-2xl hover:border-amber-400/70 transition-all duration-500">
              <div className="text-4xl md:text-5xl text-amber-300 mb-6 text-center">❝</div>
              <p className="text-2xl md:text-3xl text-amber-50 leading-relaxed font-light mb-2">
                شهر رمضان الذي أنزل فيه القرآن هدى للناس وبينات من الهدى والفرقان
              </p>
              <div className="text-right mt-8">
                <p className="text-amber-400 text-lg md:text-xl font-light">سورة البقرة - آية 185</p>
              </div>
            </div>
          </div>

          {/* Blessing messages */}
          <div className="mt-16 flex flex-wrap justify-center gap-4 text-amber-100 text-sm md:text-base">
            <span className="backdrop-blur-lg bg-amber-900/30 px-6 py-3 rounded-full border border-amber-400/40 hover:border-amber-400/70 transition-all duration-300 hover:bg-amber-900/50 cursor-default shadow-lg">
              تقبل الله صيامكم
            </span>
            <span className="backdrop-blur-lg bg-amber-900/30 px-6 py-3 rounded-full border border-amber-400/40 hover:border-amber-400/70 transition-all duration-300 hover:bg-amber-900/50 cursor-default shadow-lg">
              وقيامكم وطاعتكم
            </span>
            <span className="backdrop-blur-lg bg-amber-900/30 px-6 py-3 rounded-full border border-amber-400/40 hover:border-amber-400/70 transition-all duration-300 hover:bg-amber-900/50 cursor-default shadow-lg">
              كل عام وأنتم بألف خير
            </span>
          </div>

          {/* Footer message */}
          <div className="mt-12 text-amber-200/60 text-sm md:text-base font-light">
            <p>اللهم بلغنا رمضان وأعنا على صيامه وقيامه</p>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent pointer-events-none"></div>

      {/* Top gradient accent */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-slate-900/20 via-transparent to-transparent pointer-events-none"></div>
    </div>
  );
}

export default App;
