
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
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import { SERVICES, PROMOTIONS } from './constants';
import { UserRank } from './types';

const Logo = () => (
  <div className="flex flex-col items-center gap-0 scale-90">
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
    <div className="fixed inset-0 bg-black z-[100] flex flex-col items-center justify-center">
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
  const [userCuts, setUserCuts] = useState(() => {
    const saved = localStorage.getItem('userCuts');
    return saved ? parseInt(saved) : 0;
  });
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    localStorage.setItem('userCuts', userCuts.toString());
  }, [userCuts]);

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
    <div className="flex flex-col min-h-screen bg-black text-white pb-24 max-w-md mx-auto relative shadow-2xl overflow-x-hidden font-sans">
      
      {showNotification && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-[60] w-[90%] max-w-xs bg-yellow-500 text-black p-4 rounded-2xl shadow-[0_10px_30px_rgba(234,179,8,0.3)] flex items-center gap-3 animate-in slide-in-from-top-10 font-bold border-2 border-black/10">
          <CheckCircle2 size={24} />
          <div className="flex flex-col">
            <span className="text-sm">Selo Adicionado!</span>
            <span className="text-[10px] opacity-80 uppercase">Parabéns, Súdito!</span>
          </div>
        </div>
      )}

      <header className="p-6 pt-10 flex justify-center items-center sticky top-0 bg-black/95 backdrop-blur-md z-40 border-b border-yellow-900/20">
        <Logo />
      </header>

      <main className="flex-1 overflow-y-auto px-6 pt-6">
        {activeTab === 'home' && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <section className="bg-neutral-900/40 p-5 rounded-[2rem] border border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full gold-gradient p-[2px] shadow-lg">
                  <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
                    <User className="text-yellow-500" size={24} />
                  </div>
                </div>
                <div>
                  <h2 className="font-bold text-base">Olá, <span className="gold-text">Súdito</span></h2>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">{currentRank}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-yellow-500 font-black text-2xl leading-none">{userCuts}/5</div>
                <div className="text-[8px] text-gray-500 uppercase tracking-tighter font-bold">Selos Reais</div>
              </div>
            </section>

            <div className="grid grid-cols-2 gap-4">
              <button 
                onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Olá! Gostaria de agendar um horário.`, '_blank')}
                className="gold-gradient p-6 rounded-[1.5rem] flex flex-col items-center gap-3 text-black font-black active:scale-95 transition-all shadow-[0_10px_20px_rgba(170,119,28,0.2)]"
              >
                <div className="bg-black/10 p-2 rounded-xl">
                  <Calendar size={28} />
                </div>
                <span className="text-[10px] uppercase tracking-widest">Agendar</span>
              </button>
              <button 
                onClick={() => setActiveTab('loyalty')}
                className="bg-neutral-900 border border-yellow-500/30 p-6 rounded-[1.5rem] flex flex-col items-center gap-3 text-yellow-500 font-black active:scale-95 transition-all"
              >
                <div className="bg-yellow-500/10 p-2 rounded-xl">
                  <Award size={28} />
                </div>
                <span className="text-[10px] uppercase tracking-widest">Fidelidade</span>
              </button>
            </div>

            <section className="space-y-4">
              <div className="flex justify-between items-end px-1">
                <h3 className="font-royal text-xl gold-text tracking-wide">Decretos Reais</h3>
                <span className="text-[9px] text-gray-500 font-bold uppercase">Promoções</span>
              </div>
              <div className="space-y-3">
                {PROMOTIONS.map((promo) => (
                  <div key={promo.id} className="bg-neutral-900/60 p-5 rounded-2xl border border-white/5 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
                      <Scissors size={40} className="text-yellow-500" />
                    </div>
                    <div className="relative z-10 flex justify-between items-center">
                      <div className="space-y-1">
                        <h4 className="font-bold text-sm text-yellow-500">{promo.title}</h4>
                        <p className="text-[11px] text-gray-400 max-w-[200px] leading-relaxed">{promo.description}</p>
                      </div>
                      {promo.discountPrice && (
                        <div className="bg-yellow-500/10 px-3 py-1 rounded-full border border-yellow-500/20">
                          <span className="text-yellow-500 font-bold text-xs italic">R$ {promo.discountPrice}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {activeTab === 'services' && (
          <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
            <div className="text-center space-y-2">
              <h2 className="font-royal text-3xl gold-text">Cardápio Real</h2>
              <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em]">Serviços & Experiências</p>
            </div>
            <div className="space-y-4 pb-4">
              {SERVICES.map((s) => (
                <div key={s.id} className="bg-neutral-900/30 p-6 rounded-3xl border border-yellow-900/10 group active:bg-neutral-900/50 transition-colors">
                  <div className="flex justify-between items-start mb-3">
                    <div className="space-y-1">
                      <h4 className="text-lg font-bold group-hover:gold-text transition-all">{s.name}</h4>
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1 text-[10px] text-gray-500 font-bold uppercase">
                          <Clock size={12} className="text-yellow-500/50" /> {s.duration}
                        </span>
                        <span className="w-1 h-1 bg-neutral-700 rounded-full"></span>
                        <span className="text-[10px] text-yellow-500/70 font-black italic">TOP SERVIÇO</span>
                      </div>
                    </div>
                    <span className="text-xl font-black gold-text">R$ {s.price}</span>
                  </div>
                  <p className="text-[11px] text-gray-500 mb-5 leading-relaxed">{s.description}</p>
                  <button 
                    onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Olá! Gostaria de agendar: ${s.name}.`, '_blank')}
                    className="w-full py-3 bg-neutral-800/80 hover:bg-yellow-500 hover:text-black rounded-xl text-[10px] font-black uppercase tracking-widest text-gray-300 transition-all flex items-center justify-center gap-2 border border-white/5"
                  >
                    Agendar Horário <ChevronRight size={14} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'loyalty' && (
          <div className="space-y-10 animate-in fade-in slide-in-from-left-4 duration-500">
             <div className="text-center space-y-2">
              <h2 className="font-royal text-3xl gold-text">Império Club</h2>
              <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em]">Sua Recompensa de Rei</p>
            </div>
            
            <div 
              className="bg-gradient-to-br from-neutral-800 to-black p-10 rounded-[2.5rem] border border-yellow-500/20 relative overflow-hidden active:scale-95 transition-transform cursor-pointer shadow-2xl"
              onClick={handleAddStamp}
            >
               {/* Decorações do Cartão */}
               <div className="absolute top-0 right-0 -mr-4 -mt-4 opacity-5">
                 <Crown size={120} />
               </div>

               <div className="flex justify-between items-start mb-12">
                  <div className="space-y-1">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-yellow-500 font-black">Cartão VIP</p>
                    <p className="text-2xl font-bold font-royal tracking-[0.1em]">IMPÉRIO CLUB</p>
                  </div>
                  <div className="w-12 h-12 bg-yellow-500/10 rounded-full flex items-center justify-center border border-yellow-500/20">
                    <Crown className="text-yellow-500 fill-yellow-500" size={24} />
                  </div>
               </div>

               <div className="grid grid-cols-5 gap-4 mb-12">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className={`aspect-square rounded-2xl border-2 flex items-center justify-center transition-all duration-500 ${i < userCuts ? 'bg-yellow-500 border-yellow-500 shadow-[0_0_15px_#EAB308]' : 'border-neutral-700 bg-black/50 opacity-40'}`}>
                    {i < userCuts ? <Scissors size={24} className="text-black" /> : <span className="text-[10px] text-neutral-600 font-black">{i + 1}</span>}
                  </div>
                ))}
               </div>

               <div className="flex justify-between items-end border-t border-white/5 pt-8">
                <div>
                  <p className="text-[9px] text-gray-500 uppercase font-black tracking-widest mb-1">Status Atual</p>
                  <p className="font-bold gold-text text-sm uppercase">{currentRank}</p>
                </div>
                <div className="text-right">
                   <p className="text-[9px] text-gray-500 uppercase font-black tracking-widest mb-1">Progresso</p>
                  <p className="text-4xl font-black font-royal">{userCuts}<span className="text-base text-gray-600">/5</span></p>
                </div>
               </div>
               <p className="text-[8px] text-center text-gray-600 mt-8 uppercase font-bold tracking-[0.2em] animate-pulse">Toque para adicionar selo (Demo)</p>
            </div>
            
            <div className="bg-neutral-900/40 p-6 rounded-3xl border border-white/5 text-center">
               <p className="text-xs text-gray-400 leading-relaxed italic">
                 "A cada 5 serviços realizados, o <span className="gold-text font-bold">Rei do Império</span> recebe o próximo corte totalmente por conta da casa."
               </p>
            </div>
          </div>
        )}

        {activeTab === 'location' && (
          <div className="space-y-8 animate-in fade-in zoom-in-95 duration-500 pb-10">
            <div className="text-center space-y-2">
              <h2 className="font-royal text-3xl gold-text">A Sede</h2>
              <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em]">Onde a Magia Acontece</p>
            </div>

            <div className="rounded-[2.5rem] overflow-hidden border border-yellow-500/20 h-72 shadow-2xl relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31894.28634563968!2d-48.9669651!3d-2.9447321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92965383503f1917%3A0xc68e5470d06f9d3b!2sTail%C3%A2ndia%2C%20PA!5e0!3m2!1spt-BR!2sbr!4v1715622000000!5m2!1spt-BR!2sbr" 
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen={true} loading="lazy" className="grayscale contrast-125"
              ></iframe>
              <div className="absolute inset-0 pointer-events-none border-[12px] border-black/20 rounded-[2.5rem]"></div>
            </div>

            <div className="bg-neutral-900/80 p-8 rounded-[2rem] space-y-6 border border-white/5">
              <div className="flex gap-5">
                <div className="bg-yellow-500/10 p-3 rounded-2xl h-fit">
                  <MapPin className="text-yellow-500" size={24} />
                </div>
                <div>
                  <h4 className="font-black text-sm uppercase tracking-wider">Localização Imperial</h4>
                  <p className="text-xs text-gray-400 mt-1 leading-relaxed">Travessa Mocajuba, 37 - Ao lado do Burguer Garage, Tailândia - PA</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <button 
                  onClick={() => window.open(`https://instagram.com/${instagramHandle}`, '_blank')} 
                  className="bg-neutral-800 p-4 rounded-2xl flex items-center justify-center gap-3 text-[10px] font-black uppercase tracking-widest border border-white/5 active:scale-95 transition-transform"
                >
                  <Instagram size={18} className="text-pink-500" /> Instagram
                </button>
                <button 
                  onClick={() => window.open(`https://wa.me/${whatsappNumber}`, '_blank')} 
                  className="bg-neutral-800 p-4 rounded-2xl flex items-center justify-center gap-3 text-[10px] font-black uppercase tracking-widest border border-white/5 active:scale-95 transition-transform"
                >
                  <MessageSquare size={18} className="text-green-500" /> Contato
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-black/95 border-t border-yellow-900/30 h-24 px-8 flex justify-between items-center z-50 backdrop-blur-xl">
        <NavButton active={activeTab === 'home'} icon={Home} label="Home" onClick={() => setActiveTab('home')} />
        <NavButton active={activeTab === 'services'} icon={Scissors} label="Serviços" onClick={() => setActiveTab('services')} />
        <div className="relative -top-10 px-2">
          <button 
            onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Olá! Vim pelo App e quero marcar um horário.`, '_blank')} 
            className="w-16 h-16 gold-gradient rounded-full flex items-center justify-center text-black shadow-[0_10px_30px_rgba(170,119,28,0.4)] border-4 border-black active:scale-90 transition-all hover:rotate-12"
          >
            <MessageSquare size={30} />
          </button>
        </div>
        <NavButton active={activeTab === 'loyalty'} icon={Award} label="Clube" onClick={() => setActiveTab('loyalty')} />
        <NavButton active={activeTab === 'location'} icon={MapPin} label="Sede" onClick={() => setActiveTab('location')} />
      </nav>
    </div>
  );
}
