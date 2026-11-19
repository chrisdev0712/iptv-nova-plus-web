import React, { useState } from 'react';
import {
  Tv,
  Globe,
  KeyRound,
  User,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  RefreshCw,
  Send,
  Trash2,
  Laptop,
  Check,
  Copy,
  Sparkles
} from 'lucide-react';

export const ActivationSection: React.FC = () => {
  const [mac, setMac] = useState('');
  const [deviceKey, setDeviceKey] = useState('');
  const [playlistName, setPlaylistName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [serverUrl, setServerUrl] = useState('');
  const [serverPort, setServerPort] = useState('');

  const [loading, setLoading] = useState(false);
  const [testingXtream, setTestingXtream] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    type: 'success' | 'error' | 'info';
    text: string;
  } | null>(null);

  const [activeTab, setActiveTab] = useState<'upload' | 'check'>('upload');
  const [searchMac, setSearchMac] = useState('');
  const [searchResult, setSearchResult] = useState<any | null>(null);
  const [searchLoading, setSearchLoading] = useState(false);

  // Format MAC input as user types
  const handleMacChange = (val: string) => {
    const raw = val.replace(/[^a-fA-F0-9]/g, '').toUpperCase();
    const parts: string[] = [];
    for (let i = 0; i < raw.length && i < 12; i += 2) {
      parts.push(raw.substring(i, i + 2));
    }
    setMac(parts.join(':'));
  };

  // Resolve API Base (localhost:3000 or same origin)
  const getApiUrl = (endpoint: string) => {
    // If running standalone on port 3002, use port 3000 where the API is hosted or relative proxy
    return endpoint;
  };

  // Test Xtream Codes credentials before assigning
  const handleTestConnection = async () => {
    if (!serverUrl || !username || !password) {
      setStatusMessage({
        type: 'error',
        text: 'Completa Usuario, Contraseña y Servidor para probar la conexión.'
      });
      return;
    }

    setTestingXtream(true);
    setStatusMessage(null);

    let fullServer = serverUrl.trim();
    if (!fullServer.startsWith('http://') && !fullServer.startsWith('https://')) {
      fullServer = 'http://' + fullServer;
    }
    fullServer = fullServer.replace(/\/+$/, '');
    if (serverPort && !fullServer.split('://')[1]?.includes(':')) {
      fullServer = `${fullServer}:${serverPort.trim()}`;
    }

    try {
      const testUrl = `${fullServer}/player_api.php?username=${encodeURIComponent(
        username.trim()
      )}&password=${encodeURIComponent(password.trim())}`;

      const res = await fetch(testUrl, { method: 'GET' });
      const auth = await res.json();

      if (auth && auth.user_info) {
        setStatusMessage({
          type: 'success',
          text: `¡Credenciales Xtream Válidas! Estado: ${auth.user_info.status || 'Activo'} • Usuario: ${auth.user_info.username}`
        });
      } else {
        setStatusMessage({
          type: 'error',
          text: 'El servidor respondió pero no devolvió información válida de usuario.'
        });
      }
    } catch (err: any) {
      setStatusMessage({
        type: 'info',
        text: 'No se pudo contactar directamente por CORS del navegador, pero se guardará para que la TV lo pruebe directamente.'
      });
    } finally {
      setTestingXtream(false);
    }
  };

  // Submit Playlist to API
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMessage(null);

    const cleanMac = mac.replace(/[^a-fA-F0-9]/g, '');
    if (cleanMac.length !== 12) {
      setStatusMessage({
        type: 'error',
        text: 'La dirección MAC de la TV debe tener 12 caracteres hexadecimales (ej: 00:1A:79:B4:92:01).'
      });
      return;
    }

    if (!serverUrl || !username || !password) {
      setStatusMessage({
        type: 'error',
        text: 'Por favor completa todos los campos requeridos (Usuario, Contraseña y Servidor).'
      });
      return;
    }

    setLoading(true);

    try {
      const targetEndpoint = window.location.port === '3002' ? 'http://localhost:3000/api/playlist' : '/api/playlist';
      const res = await fetch(targetEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          mac,
          key: deviceKey,
          name: playlistName || 'Mi Suscripción IPTV',
          username,
          password,
          server: serverUrl,
          port: serverPort
        })
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || 'Error al comunicarse con la API');
      }

      setStatusMessage({
        type: 'success',
        text: `¡Cuenta cargada con éxito a la TV (${mac})! Enciende tu Smart TV o pulsa "Sincronizar" en IPTV Nova Plus para comenzar.`
      });

      setPassword('');
    } catch (err: any) {
      setStatusMessage({
        type: 'error',
        text: err.message || 'Error al enviar la playlist a la API.'
      });
    } finally {
      setLoading(false);
    }
  };

  // Check existing playlist by MAC
  const handleCheckMac = async () => {
    const cleanMac = searchMac.replace(/[^a-fA-F0-9]/g, '');
    if (cleanMac.length !== 12) {
      alert('Ingresa una MAC válida de 12 dígitos.');
      return;
    }

    setSearchLoading(true);
    setSearchResult(null);

    try {
      const targetEndpoint = window.location.port === '3002' ? 'http://localhost:3000/api/playlist' : '/api/playlist';
      const res = await fetch(`${targetEndpoint}?mac=${encodeURIComponent(searchMac)}`);
      const data = await res.json();
      if (res.ok && data.success && data.playlist) {
        setSearchResult(data.playlist);
      } else {
        setSearchResult({ notFound: true, message: data.message || 'No se encontró lista.' });
      }
    } catch (e: any) {
      setSearchResult({ error: true, message: e.message });
    } finally {
      setSearchLoading(false);
    }
  };

  return (
    <section id="activate" className="relative z-10 py-16 sm:py-24 border-t border-slate-800/80 bg-slate-950/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Activación Remota Instantánea</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Cargar Lista por{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              MAC a tu Smart TV
            </span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            Asigna tu suscripción Xtream Codes a cualquier Smart TV o dispositivo sin tener que escribir usuario y contraseña con el control remoto.
          </p>
        </div>

        {/* Tab switch */}
        <div className="flex space-x-2 mb-6 p-1.5 rounded-2xl bg-slate-900/90 border border-slate-800 max-w-xs mx-auto">
          <button
            onClick={() => setActiveTab('upload')}
            className={`flex-1 py-2 px-4 rounded-xl text-xs font-extrabold transition-all flex items-center justify-center space-x-2 ${
              activeTab === 'upload'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Send className="w-3.5 h-3.5" />
            <span>Cargar a TV</span>
          </button>
          <button
            onClick={() => setActiveTab('check')}
            className={`flex-1 py-2 px-4 rounded-xl text-xs font-extrabold transition-all flex items-center justify-center space-x-2 ${
              activeTab === 'check'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Laptop className="w-3.5 h-3.5" />
            <span>Consultar</span>
          </button>
        </div>

        {/* Tab 1: Cargar Lista */}
        {activeTab === 'upload' && (
          <div className="bg-slate-900/90 backdrop-blur-xl border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl">
            {/* Status Alert */}
            {statusMessage && (
              <div
                className={`mb-6 p-4 rounded-2xl border flex items-start space-x-3 text-xs sm:text-sm font-semibold transition-all ${
                  statusMessage.type === 'success'
                    ? 'bg-emerald-950/60 border-emerald-500/50 text-emerald-200'
                    : 'bg-red-950/60 border-red-500/50 text-red-200'
                }`}
              >
                {statusMessage.type === 'success' ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                )}
                <div className="flex-1">{statusMessage.text}</div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Row 1: TV MAC Address & Device Key */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="sm:col-span-2 space-y-1.5">
                  <label className="text-xs font-black uppercase tracking-wider text-cyan-400 flex items-center space-x-1.5">
                    <Tv className="w-3.5 h-3.5" />
                    <span>TV MAC Address *</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="00:1A:79:B4:92:01"
                    maxLength={17}
                    value={mac}
                    onChange={e => handleMacChange(e.target.value)}
                    className="w-full bg-slate-950/90 border border-slate-700/80 focus:border-cyan-400 rounded-xl px-4 py-3 text-sm font-mono font-bold text-white tracking-widest placeholder:text-slate-600 outline-none transition-all"
                  />
                  <span className="text-[10px] text-slate-400 block">
                    Dirección MAC mostrada en la pantalla de IPTV Nova Plus en el televisor.
                  </span>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-black uppercase tracking-wider text-slate-300 flex items-center space-x-1.5">
                    <KeyRound className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Device Key (PIN)</span>
                  </label>
                  <input
                    type="text"
                    maxLength={6}
                    placeholder="482910"
                    value={deviceKey}
                    onChange={e => setDeviceKey(e.target.value.replace(/\D/g, ''))}
                    className="w-full bg-slate-950/90 border border-slate-700/80 focus:border-cyan-400 rounded-xl px-4 py-3 text-sm font-mono font-bold text-white tracking-widest placeholder:text-slate-600 outline-none transition-all"
                  />
                  <span className="text-[10px] text-slate-400 block">PIN de 6 dígitos mostrado en la TV.</span>
                </div>
              </div>

              {/* Row 2: Nombre de la Playlist */}
              <div className="space-y-1.5">
                <label className="text-xs font-black uppercase tracking-wider text-slate-300">
                  Nombre de la Playlist (Identificador)
                </label>
                <input
                  type="text"
                  placeholder="Ej: Plan Familiar VIP / Cuenta Reseller 1 Mes"
                  value={playlistName}
                  onChange={e => setPlaylistName(e.target.value)}
                  className="w-full bg-slate-950/90 border border-slate-700/80 focus:border-cyan-400 rounded-xl px-4 py-3 text-sm font-bold text-white placeholder:text-slate-600 outline-none transition-all"
                />
              </div>

              {/* Row 3: Usuario & Contraseña (PRIMERO) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-black uppercase tracking-wider text-cyan-400 flex items-center space-x-1.5">
                    <User className="w-3.5 h-3.5" />
                    <span>Usuario (Username) *</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="usuario123"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    className="w-full bg-slate-950/90 border border-slate-700/80 focus:border-cyan-400 rounded-xl px-4 py-3 text-sm font-bold text-white placeholder:text-slate-600 outline-none transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-black uppercase tracking-wider text-cyan-400 flex items-center space-x-1.5">
                    <KeyRound className="w-3.5 h-3.5" />
                    <span>Contraseña (Password) *</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="••••••••"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className="w-full bg-slate-950/90 border border-slate-700/80 focus:border-cyan-400 rounded-xl px-4 py-3 text-sm font-bold text-white placeholder:text-slate-600 outline-none transition-all"
                  />
                </div>
              </div>

              {/* Row 4: Server Address & Port (DESPUÉS) */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                <div className="sm:col-span-3 space-y-1.5">
                  <label className="text-xs font-black uppercase tracking-wider text-cyan-400 flex items-center space-x-1.5">
                    <Globe className="w-3.5 h-3.5" />
                    <span>Server Address (URL del Servidor) *</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="http://line.ottprovider.com"
                    value={serverUrl}
                    onChange={e => setServerUrl(e.target.value)}
                    className="w-full bg-slate-950/90 border border-slate-700/80 focus:border-cyan-400 rounded-xl px-4 py-3 text-sm font-mono text-white placeholder:text-slate-600 outline-none transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-black uppercase tracking-wider text-slate-300">
                    Puerto (Port)
                  </label>
                  <input
                    type="text"
                    placeholder="8080"
                    value={serverPort}
                    onChange={e => setServerPort(e.target.value)}
                    className="w-full bg-slate-950/90 border border-slate-700/80 focus:border-cyan-400 rounded-xl px-4 py-3 text-sm font-mono text-white placeholder:text-slate-600 outline-none transition-all"
                  />
                </div>
              </div>

              {/* Actions Button Row */}
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="button"
                  onClick={handleTestConnection}
                  disabled={testingXtream || loading}
                  className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-600 text-slate-200 hover:text-white font-extrabold text-xs sm:text-sm flex items-center justify-center space-x-2 transition-all disabled:opacity-50"
                >
                  <RefreshCw className={`w-4 h-4 ${testingXtream ? 'animate-spin text-cyan-400' : ''}`} />
                  <span>{testingXtream ? 'Probando Xtream...' : 'Probar Conexión'}</span>
                </button>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex-1 py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-black text-sm uppercase tracking-wider shadow-lg shadow-cyan-500/25 flex items-center justify-center space-x-2 transition-all disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin text-white" />
                      <span>Cargando a la TV...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-white" />
                      <span>Cargar Cuenta a la Smart TV</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Tab 2: Check Existing Playlist by MAC */}
        {activeTab === 'check' && (
          <div className="bg-slate-900/90 backdrop-blur-xl border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center space-x-2">
              <Laptop className="w-5 h-5 text-cyan-400" />
              <span>Consultar Playlist Asignada a una MAC</span>
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Verifica los datos cargados en el servidor para cualquier televisor o dispositivo.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <input
                type="text"
                placeholder="00:1A:79:B4:92:01"
                value={searchMac}
                onChange={e => {
                  const raw = e.target.value.replace(/[^a-fA-F0-9]/g, '').toUpperCase();
                  const parts = [];
                  for (let i = 0; i < raw.length && i < 12; i += 2) {
                    parts.push(raw.substring(i, i + 2));
                  }
                  setSearchMac(parts.join(':'));
                }}
                className="flex-1 bg-slate-950/90 border border-slate-700 focus:border-cyan-400 rounded-xl px-4 py-3 text-sm font-mono font-bold text-white tracking-widest placeholder:text-slate-600 outline-none"
              />
              <button
                onClick={handleCheckMac}
                disabled={searchLoading}
                className="px-6 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-extrabold text-sm flex items-center justify-center space-x-2 transition-all disabled:opacity-50"
              >
                <RefreshCw className={`w-4 h-4 ${searchLoading ? 'animate-spin' : ''}`} />
                <span>Buscar</span>
              </button>
            </div>

            {searchResult && (
              <div className="mt-4 p-5 rounded-2xl bg-slate-950 border border-slate-800">
                {searchResult.notFound ? (
                  <p className="text-sm text-amber-300 font-semibold">{searchResult.message}</p>
                ) : searchResult.error ? (
                  <p className="text-sm text-red-400 font-semibold">{searchResult.message}</p>
                ) : (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                      <div>
                        <span className="text-[10px] text-slate-400 uppercase font-black tracking-widest block">
                          Playlist Activa
                        </span>
                        <h4 className="text-base font-bold text-white">{searchResult.name}</h4>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div>
                        <span className="text-slate-400 block font-medium">Servidor:</span>
                        <span className="font-mono text-cyan-300 truncate block">
                          {searchResult.serverUrl}
                        </span>
                      </div>
                      <div>
                        <span className="text-slate-400 block font-medium">Usuario:</span>
                        <span className="font-bold text-white">{searchResult.username}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

