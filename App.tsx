
import React, { useState, useEffect } from 'react';
import { 
  Scissors, 
  Calendar, 
  Award, 
  MapPin, 
  MessageSquare, 
  Home, 
  Crown,
  Clock,
  Instagram,
  User,
  CheckCircle2
} from 'lucide-react';
import { SERVICES, PROMOTIONS } from './constants';
import { UserRank } from './types';

const Logo = () => (
  <div className="flex flex-col items-center gap-0">
    <Crown className="w-12 h-12 text-yellow-500 fill-yellow-500 drop-shadow-[0_0_10px_rgba(234,179,8,0.5)]" />
    <h1 className="font-royal text-3xl font-bold tracking-[0.2em] gold-text -mt-2">IMPÉRIO</h1>
    <div className="h-[2px] w-24 gold-gradient rounded-full mt-1"></div>
    <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mt-1 font-semibold">Barbearia & Club</p>
  </div>
);

const NavButton = ({ active, icon: Icon, label, onClick }: any) => (
  <button 
    onClick={onClick}
    className={`flex flex-col items-center justify-center gap-1 w-full h-full transition-all duration-300 relative ${active ? 'text-yellow-500' : 'text-gray-500'}`}
  >
    {active && (
      <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-yellow-500 rounded-full shadow-[0_0_8px_#EAB308]"></span>
    )}
    <Icon size={22} className={`${active ? 'scale-110' : ''}`} />
    <span className="text-[9px] font-bold uppercase tracking-tighter">{label}</span>
  </button>
);

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center scale-150 gap-4 animate-pulse">
        <Crown className="w-20 h-20 text-yellow-500 fill-yellow-500" />
        <h1 className="font-royal text-5xl font-bold tracking-widest gold-text">IMPÉRIO</h1>
      </div>
    </div>
  );
};

export default function App() {
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('home');
  const [userCuts, setUserCuts] = useState(3);
  const [showNotification, setShowNotification] = useState(false);

  const currentRank = userCuts >= 5 ? UserRank.KING : userCuts >= 3 ? UserRank.NOBLE : UserRank.SOLDIER;
  const whatsappNumber = "5591993039037";
  const instagramHandle = "imperio_barbearia2.000";

  const handleAddStamp = () => {
    if (userCuts < 5) {
      setUserCuts(prev => prev + 1);
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000);
    } else {
      setUserCuts(0);
    }
  };

  if (loading) return <SplashScreen onComplete={() => setLoading(false)} />;

  return (
    <div className="flex flex-col min-h-screen bg-black text-white pb-24 max-w-md mx-auto relative shadow-2xl overflow-x-hidden">
      
      {showNotification && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-[60] w-[90%] max-w-xs bg-yellow-500 text-black p-3 rounded-xl shadow-2xl flex items-center gap-3 animate-bounce font-bold">
          <CheckCircle2 size={24} />
          <span>Selo adicionado ao cartão!</span>
        </div>
      )}

      <header className="p-6 pt-8 flex justify-center items-center sticky top-0 bg-black/95 backdrop-blur-md z-40 border-b border-yellow-900/30">
        <Logo />
      </header>

      <main className="flex-1 overflow-y-auto px-5 pt-6">
        {activeTab === 'home' && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4">
            <section className="flex items-center justify-between bg-neutral-900/50 p-4 rounded-2xl border border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full gold-gradient p-[2px]">
                  <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                    <User className="text-yellow-500" size={20} />
                  </div>
                </div>
                <div>
                  <h2 className="font-bold text-sm">Olá, <span className="gold-text">Súdito</span></h2>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">{currentRank}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-yellow-500 font-bold text-lg leading-none">{userCuts}/5</div>
                <div className="text-[8px] text-gray-500 uppercase tracking-tighter">Selos</div>
              </div>
            </section>

            <div className="grid grid-cols-2 gap-4">
              <button 
                onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Olá! Quero agendar um horário na Império Barbearia.`, '_blank')}
                className="gold-gradient p-5 rounded-2xl flex flex-col items-center gap-3 text-black font-black active:scale-95 transition-all"
              >
                <Calendar size={28} />
                <span className="text-xs uppercase">Agendar</span>
              </button>
              <button 
                onClick={() => setActiveTab('loyalty')}
                className="bg-neutral-900 border border-yellow-500/30 p-5 rounded-2xl flex flex-col items-center gap-3 text-yellow-500 font-black active:scale-95 transition-all"
              >
                <Award size={28} />
                <span className="text-xs uppercase">Fidelidade</span>
              </button>
            </div>

            <section className="space-y-4">
              <h3 className="font-royal text-lg gold-text tracking-wide">Promoções do Império</h3>
              <div className="space-y-3">
                {PROMOTIONS.map((promo) => (
                  <div key={promo.id} className="bg-neutral-900/80 p-4 rounded-xl border-l-4 border-yellow-500 flex justify-between items-center">
                    <div>
                      <h4 className="font-bold text-sm">{promo.title}</h4>
                      <p className="text-[10px] text-gray-400">{promo.description}</p>
                    </div>
                    {promo.discountPrice && (
                      <div className="text-right">
                        <div className="text-yellow-500 font-bold text-sm">R$ {promo.discountPrice}</div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {activeTab === 'services' && (
          <div className="space-y-6">
            <h2 className="font-royal text-3xl text-center gold-text mb-8">Cardápio Real</h2>
            <div className="space-y-4">
              {SERVICES.map((s) => (
                <div key={s.id} className="bg-neutral-900/40 p-5 rounded-2xl border border-yellow-900/10 group">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-lg font-bold group-hover:gold-text">{s.name}</h4>
                      <div className="flex items-center gap-2 text-[10px] text-gray-500 font-bold uppercase">
                        <Clock size={12} /> {s.duration}
                      </div>
                    </div>
                    <span className="text-xl font-bold gold-text">R$ {s.price}</span>
                  </div>
                  <p className="text-[11px] text-gray-400 mb-4">{s.description}</p>
                  <button 
                    onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Olá! Quero agendar: ${s.name}.`, '_blank')}
                    className="w-full py-2 bg-neutral-800 rounded-lg text-xs font-bold uppercase text-gray-300 hover:bg-yellow-500 hover:text-black transition-colors"
                  >
                    Agendar Agora
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'loyalty' && (
          <div className="space-y-8">
            <h2 className="font-royal text-3xl text-center gold-text">Império Club</h2>
            <div 
              className="bg-gradient-to-br from-neutral-800 to-black p-8 rounded-[2rem] border border-yellow-500/20 relative overflow-hidden active:scale-95 transition-transform cursor-pointer"
              onClick={handleAddStamp}
            >
               <div className="flex justify-between items-start mb-10">
                  <div className="space-y-1">
                    <p className="text-[9px] uppercase tracking-widest text-yellow-500 font-black">Membro VIP</p>
                    <p className="text-xl font-bold font-royal tracking-widest">IMPÉRIO CLUB</p>
                  </div>
                  <Crown className="text-yellow-500 fill-yellow-500 opacity-40" size={28} />
               </div>

               <div className="grid grid-cols-5 gap-3 mb-10">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className={`aspect-square rounded-full border-2 flex items-center justify-center transition-all ${i < userCuts ? 'bg-yellow-500 border-yellow-500 shadow-lg' : 'border-neutral-700 bg-black/50'}`}>
                    {i < userCuts ? <Scissors size={20} className="text-black" /> : <span className="text-[10px] text-neutral-600 font-bold">{i + 1}</span>}
                  </div>
                ))}
               </div>

               <div className="flex justify-between items-end">
                <div>
                  <p className="text-[8px] text-gray-500 uppercase font-black">Nível</p>
                  <p className="font-bold gold-text text-sm">{currentRank}</p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-black font-royal">{userCuts}/5</p>
                </div>
               </div>
               <p className="text-[8px] text-center text-gray-600 mt-4 uppercase">Toque para adicionar selo (Simulação)</p>
            </div>
            <p className="text-xs text-center text-gray-400 px-6 italic">A cada 5 cortes, o Rei ganha o próximo serviço por conta da casa!</p>
          </div>
        )}

        {activeTab === 'location' && (
          <div className="space-y-8 pb-10">
            <h2 className="font-royal text-3xl text-center gold-text">Base do Império</h2>
            <div className="rounded-3xl overflow-hidden border border-yellow-500/20 h-64 shadow-2xl">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31894.28634563968!2d-48.9669651!3d-2.9447321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92965383503f1917%3A0xc68e5470d06f9d3b!2sTail%C3%A2ndia%2C%20PA!5e0!3m2!1spt-BR!2sbr!4v1715622000000!5m2!1spt-BR!2sbr" 
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen={true} loading="lazy" className="grayscale"
              ></iframe>
            </div>

            <div className="bg-neutral-900/60 p-6 rounded-3xl space-y-4 border border-white/5">
              <div className="flex gap-4">
                <MapPin className="text-yellow-500" size={24} />
                <div>
                  <h4 className="font-bold">Travessa Mocajuba, 37</h4>
                  <p className="text-xs text-gray-500">Ao lado do Burguer Garage, Tailândia - PA</p>
                </div>
              </div>
              <div className="flex gap-3">
                <button onClick={() => window.open(`https://instagram.com/${instagramHandle}`, '_blank')} className="flex-1 bg-neutral-800 p-3 rounded-xl flex items-center justify-center gap-2 text-xs font-bold uppercase border border-white/10">
                  <Instagram size={16} /> Instagram
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-black/95 border-t border-yellow-900/30 h-20 px-6 flex justify-between items-center z-50">
        <NavButton active={activeTab === 'home'} icon={Home} label="Home" onClick={() => setActiveTab('home')} />
        <NavButton active={activeTab === 'services'} icon={Scissors} label="Serviços" onClick={() => setActiveTab('services')} />
        <div className="relative -top-6 px-2">
          <button onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Olá! Quero marcar um horário.`, '_blank')} className="w-16 h-16 gold-gradient rounded-full flex items-center justify-center text-black shadow-lg border-4 border-black active:scale-90 transition-transform">
            <MessageSquare size={28} />
          </button>
        </div>
        <NavButton active={activeTab === 'loyalty'} icon={Award} label="Clube" onClick={() => setActiveTab('loyalty')} />
        <NavButton active={activeTab === 'location'} icon={MapPin} label="Onde" onClick={() => setActiveTab('location')} />
      </nav>
    </div>
  );
}
