import React, { useState } from 'react';
import {
  Tv,
  Monitor,
  Smartphone,
  Apple,
  Globe,
  Download,
  Play,
  Sparkles,
  ShieldCheck,
  Film,
  Layers,
  Sliders,
  CheckCircle2,
  ChevronRight,
  ExternalLink,
  Laptop,
  Check,
  HelpCircle,
  Clock,
  ArrowRight,
  Share2
} from 'lucide-react';

export const App: React.FC = () => {
  const [copiedLink, setCopiedLink] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.origin);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const faqs = [
    {
      q: '¿Qué es IPTV Nova Plus?',
      a: 'IPTV Nova Plus es un reproductor multimedia moderno, ultra rápido y de alto rendimiento diseñado para Smart TVs (Samsung Tizen, LG webOS), dispositivos Android, PC con Windows y navegadores web. Permite reproducir tus propias listas de reproducción digitales mediante la API Xtream Codes.'
    },
    {
      q: '¿La aplicación incluye canales de televisión o películas?',
      a: 'No. IPTV Nova Plus es exclusivamente un software de reproducción multimedia. No incluye, aloja ni comercializa ningún tipo de canal de televisión, película o transmisión. Los usuarios deben suministrar sus propias listas y credenciales provistas por sus proveedores autorizados.'
    },
    {
      q: '¿Qué es la función de Agrupación de Calidades y Sagas?',
      a: 'Nuestra tecnología analiza los títulos en tu catálogo y agrupa automáticamente aquellas películas que están subidas en múltiples resoluciones (4K, Full HD, HD, SD) en una sola portada con selector de calidad. Además, te sugiere automáticamente precuelas, secuelas y entregas de la misma franquicia (como Sonic 1, 2 y 3).'
    },
    {
      q: '¿Cómo funciona el Modo Demo?',
      a: 'Al abrir el reproductor, puedes hacer clic en el botón "Probar en MODO DEMO" para explorar la interfaz al instante con canales de señal abierta y contenido de prueba legal sin necesidad de ingresar ninguna cuenta.'
    },
    {
      q: '¿Cómo protejo el contenido para adultos?',
      a: 'La aplicación cuenta con Control Parental nativo con código PIN personalizable (por defecto 0000). Todas las categorías clasificadas para adultos quedan bloqueadas hasta que se ingrese el PIN correcto.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-white">
      {/* Background Ambient Glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-600/15 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-purple-600/15 rounded-full blur-[160px]" />
        <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-pink-600/10 rounded-full blur-[150px]" />
      </div>

      {/* Navigation Bar */}
      <header className="relative z-20 border-b border-slate-800/80 bg-slate-950/70 backdrop-blur-xl sticky top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-pink-500 p-0.5 shadow-lg shadow-cyan-500/20">
              <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                <Tv className="w-6 h-6 text-cyan-400" />
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
                  IPTV NOVA
                </span>
                <span className="text-xs font-black tracking-widest px-1.5 py-0.5 rounded-md bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 text-white shadow-sm">
                  PLUS
                </span>
              </div>
              <p className="text-[10px] text-slate-400 tracking-wider font-semibold uppercase">Smart TV & Media Player</p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-semibold text-slate-300">
            <a href="#features" className="hover:text-cyan-400 transition-colors">Características</a>
            <a href="#downloads" className="hover:text-cyan-400 transition-colors">Descargas</a>
            <a href="#devices" className="hover:text-cyan-400 transition-colors">Dispositivos</a>
            <a href="#faq" className="hover:text-cyan-400 transition-colors">Preguntas</a>
          </nav>

          {/* Action CTA */}
          <div className="flex items-center space-x-3">
            <a
              href="#downloads"
              className="px-5 py-2.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 shadow-lg shadow-cyan-500/25 transition-all transform hover:scale-[1.03] active:scale-[0.98] flex items-center space-x-2"
            >
              <Download className="w-4 h-4" />
              <span>Descargas</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Release Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold mb-8 backdrop-blur-md animate-pulse">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Versión Oficial 1.0.2 • Multiplataforma</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-5xl mx-auto leading-[1.15]">
            El reproductor IPTV definitivo para{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Smart TV, PC y Móvil
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Disfruta de tus canales en vivo, películas y series con resolución 4K Ultra HD, agrupación inteligente de calidades, recomendaciones de sagas y navegación fluida con control remoto.
          </p>

          {/* Hero CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#downloads"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl font-extrabold text-base text-slate-950 bg-white hover:bg-slate-200 shadow-xl shadow-white/10 transition-all transform hover:scale-105 flex items-center justify-center space-x-2.5"
            >
              <Download className="w-5 h-5" />
              <span>Ver Descargas Disponibles</span>
            </a>

            <a
              href="#features"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl font-extrabold text-base text-white bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 shadow-lg transition-all transform hover:scale-105 flex items-center justify-center space-x-2.5"
            >
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <span>Conocer Características</span>
            </a>
          </div>

          {/* App Preview / TV Mockup */}
          <div className="mt-16 max-w-5xl mx-auto relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-indigo-600 to-pink-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition duration-1000" />
            <div className="relative rounded-2xl bg-slate-900 border border-slate-700/80 shadow-2xl overflow-hidden aspect-video">
              <img
                src="/images/screenshot1.png"
                alt="IPTV Nova Plus Dashboard"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/20 pointer-events-none" />
              
              {/* Overlay Callout */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-left backdrop-blur-md bg-slate-900/80 p-4 rounded-xl border border-slate-700/60">
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400">
                    <Tv className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-white">Experiencia de Cine en Pantalla Gigante</h3>
                    <p className="text-xs text-slate-400">Diseñado especialmente para mando a distancia con navegación espacial</p>
                  </div>
                </div>
                <a
                  href="#downloads"
                  className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center space-x-1.5 transition-colors"
                >
                  <span>Descargar</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 py-20 bg-slate-900/40 border-y border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-black tracking-widest uppercase text-cyan-400 mb-3">POTENCIA Y RENDIMIENTO</h2>
            <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Todo lo que necesitas para tu entretenimiento
            </p>
            <p className="mt-4 text-slate-400 text-base">
              Diseñado desde cero pensando en la comodidad del usuario, rapidez de carga y soporte para todos tus dispositivos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-7 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Agrupación 4K & Calidades</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Olvídate de ver la misma película repetida 4 veces en el catálogo. IPTV Nova Plus las combina en una sola ficha con selector de resolución (4K, 1080p, 720p).
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-7 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-purple-500/50 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Film className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Recomendador de Sagas</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Al ver los detalles de una película, te recomienda automáticamente las precuelas y secuelas de la misma franquicia (ej. Sonic 1, 2 y 3) para maratonear al instante.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-7 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-pink-500/50 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-pink-500/10 text-pink-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Control Parental con PIN</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Protege a toda la familia bloqueando automáticamente los canales y categorías para adultos con un código PIN personalizable de 4 dígitos.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="p-7 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-amber-500/50 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Tv className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">100% Control Remoto TV</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Navegación espacial fluida con D-Pad (flechas, OK y botón Atrás). Auto-ocultamiento inteligente de controles y puntero tras 3.5 segundos de inactividad.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="p-7 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/50 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Contador de Elementos</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Insignias en tiempo real en cada carpeta que te muestran exactamente cuántos canales, películas y series existen en cada género.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="p-7 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/50 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Sliders className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Audio, Subtítulos y Ratio</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Cambia entre pistas de audio en español/inglés, activa subtítulos integrados y ajusta el aspecto de pantalla (16:9, Zoom, Estirar) durante la reproducción.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Downloads Section (All Platforms) */}
      <section id="downloads" className="relative z-10 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-black tracking-widest uppercase text-pink-400 mb-3">DESCARGAS & DISPOSITIVOS</h2>
            <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Disponible en todas tus pantallas
            </p>
            <p className="mt-4 text-slate-400 text-base">
              Descarga la aplicación nativa para tu plataforma preferida o utiliza el reproductor web directamente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 1. Android APK */}
            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between hover:border-emerald-500/60 transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400">
                    <Smartphone className="w-7 h-7" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300">
                    v1.0.2 • APK
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white">Android TV & Móvil</h3>
                <p className="text-xs text-slate-400 mt-1 mb-4">
                  Smartphones, Tablets, Android TV, Google TV, TV Box y Amazon Firestick.
                </p>
                <ul className="space-y-2 text-xs text-slate-300 mb-6">
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Instalación directa en formato APK</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Soporte para control remoto y táctil</span>
                  </li>
                </ul>
              </div>
              <a
                href="/downloads/IPTV_Nova_Plus.apk"
                download="IPTV_Nova_Plus.apk"
                className="w-full py-3 px-4 rounded-xl font-bold text-sm text-slate-950 bg-emerald-400 hover:bg-emerald-300 flex items-center justify-center space-x-2 shadow-lg shadow-emerald-500/20 transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Descargar APK (5.3 MB)</span>
              </a>
            </div>

            {/* 2. Windows PC */}
            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between hover:border-blue-500/60 transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400">
                    <Laptop className="w-7 h-7" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-blue-500/20 text-blue-300">
                    v1.0.2 • 64-bit
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white">Windows Desktop</h3>
                <p className="text-xs text-slate-400 mt-1 mb-4">
                  PC de escritorio y laptops con Windows 10 u 11.
                </p>
                <ul className="space-y-2 text-xs text-slate-300 mb-6">
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>Versión portable con aceleración gráfica</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>Modo pantalla completa y atajos de teclado</span>
                  </li>
                </ul>
              </div>
              <a
                href="https://github.com/chrisdev0712/iptv-nova-plus-web/releases/download/v1.0.2/IPTV_Nova_Plus_Setup.exe"
                className="w-full py-3 px-4 rounded-xl font-bold text-sm text-white bg-blue-600 hover:bg-blue-500 flex items-center justify-center space-x-2 shadow-lg shadow-blue-500/20 transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Descargar para Windows</span>
              </a>
            </div>

            {/* 3. Samsung Smart TV */}
            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between hover:border-cyan-500/60 transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400">
                    <Tv className="w-7 h-7" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-cyan-500/20 text-cyan-300">
                    Tizen OS
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white">Samsung Smart TV</h3>
                <p className="text-xs text-slate-400 mt-1 mb-4">
                  Modelos Samsung Smart TV desde 2016 hasta 2026.
                </p>
                <ul className="space-y-2 text-xs text-slate-300 mb-6">
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Enviado a certificación oficial Samsung Apps</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>100% integrado al Smart Hub</span>
                  </li>
                </ul>
              </div>
              <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 text-center">
                <p className="text-xs font-bold text-cyan-300">⏳ En Certificación Oficial</p>
                <p className="text-[11px] text-slate-400 mt-0.5">Pronto disponible en la tienda de tu TV</p>
              </div>
            </div>

            {/* 4. LG Smart TV */}
            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between hover:border-pink-500/60 transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-pink-500/10 text-pink-400">
                    <Tv className="w-7 h-7" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-pink-500/20 text-pink-300">
                    webOS
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white">LG Smart TV</h3>
                <p className="text-xs text-slate-400 mt-1 mb-4">
                  Televisores LG OLED, QNED, NanoCell y UHD (webOS 3.0+).
                </p>
                <ul className="space-y-2 text-xs text-slate-300 mb-6">
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-pink-400 shrink-0" />
                    <span>Enviado a certificación LG Content Store</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-pink-400 shrink-0" />
                    <span>Soporte completo para Magic Remote</span>
                  </li>
                </ul>
              </div>
              <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 text-center">
                <p className="text-xs font-bold text-pink-300">⏳ En Certificación Oficial</p>
                <p className="text-[11px] text-slate-400 mt-0.5">Pronto disponible en LG Content Store</p>
              </div>
            </div>

            {/* 5. Web App (Online Player) */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-indigo-950/40 to-slate-900 border border-indigo-500/40 flex flex-col justify-between hover:border-indigo-400 transition-all relative overflow-hidden">
              <div className="absolute top-0 right-0 transform translate-x-3 -translate-y-3 w-20 h-20 bg-indigo-500/20 rounded-full blur-xl pointer-events-none" />
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-indigo-500/20 text-indigo-400">
                    <Globe className="w-7 h-7" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-indigo-500/30 text-indigo-200">
                    Sin Instalación
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white">Web Player Online</h3>
                <p className="text-xs text-slate-400 mt-1 mb-4">
                  Chrome, Firefox, Edge, Safari en Mac, Linux o cualquier navegador.
                </p>
                <ul className="space-y-2 text-xs text-slate-300 mb-6">
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-indigo-400 shrink-0" />
                    <span>Acceso instantáneo con 1 solo clic</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-indigo-400 shrink-0" />
                    <span>Guarda tus cuentas en tu navegador</span>
                  </li>
                </ul>
              </div>
              <a
                href="https://app.iptvnovaplus.com"
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 px-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 flex items-center justify-center space-x-2 shadow-lg shadow-indigo-500/25 transition-all"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>Acceder al Web Player</span>
              </a>
            </div>

            {/* 6. Apple iOS / tvOS (Humorous Coming Soon) */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 flex flex-col justify-between opacity-85 hover:opacity-100 transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-slate-800 text-slate-400">
                    <Apple className="w-7 h-7" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-slate-800 text-slate-400">
                    Próximamente
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-200">Apple iOS & tvOS</h3>
                <p className="text-xs text-slate-400 mt-1 mb-4">
                  Para iPhone, iPad y Apple TV.
                </p>
                <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 text-slate-300 text-xs leading-relaxed my-4">
                  <span className="font-bold text-purple-400">En desarrollo activo:</span>
                  <p className="mt-1 text-slate-400">
                    Próximamente... ¡algún día lo haremos! 😉 Mientras tanto, puedes usar el Web Player directamente desde el navegador Safari.
                  </p>
                </div>
              </div>
              <div className="w-full py-3 px-4 rounded-xl font-bold text-xs text-slate-500 bg-slate-800/50 border border-slate-700/40 text-center flex items-center justify-center space-x-2 cursor-not-allowed">
                <Clock className="w-4 h-4" />
                <span>Próximamente</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="relative z-10 py-20 bg-slate-900/40 border-t border-slate-800/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-xs font-black tracking-widest uppercase text-cyan-400 mb-3">RESOLVIENDO DUDAS</h2>
            <p className="text-3xl font-extrabold tracking-tight text-white">Preguntas Frecuentes</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-slate-900/80 border border-slate-800 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full p-5 text-left font-bold text-base text-white flex items-center justify-between hover:text-cyan-400 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronRight
                    className={`w-5 h-5 text-slate-400 transform transition-transform ${
                      activeFaq === idx ? 'rotate-90 text-cyan-400' : ''
                    }`}
                  />
                </button>
                {activeFaq === idx && (
                  <div className="px-5 pb-5 pt-1 text-sm text-slate-400 border-t border-slate-800/60 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-800/80 bg-slate-950 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-500 to-pink-500 flex items-center justify-center">
              <Tv className="w-4 h-4 text-white" />
            </div>
            <span className="font-extrabold text-sm text-white">IPTV NOVA PLUS</span>
            <span className="text-xs text-slate-500">© 2026 Todos los derechos reservados.</span>
          </div>

          <div className="flex items-center space-x-6 text-xs text-slate-400">
            <a href="/privacy.html" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">
              Política de Privacidad
            </a>
            <button onClick={handleShare} className="hover:text-cyan-400 transition-colors flex items-center space-x-1">
              <span>{copiedLink ? '¡Enlace copiado!' : 'Compartir Proyecto'}</span>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

