import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  ChevronRight, 
  ArrowRight, 
  Check, 
  Info, 
  Ruler, 
  Layers, 
  ShieldCheck,
  ShoppingBag,
  Menu,
  X,
  Truck,
  Award,
  Search,
  ChevronDown,
  Package,
  Home as HomeIcon,
  Zap,
  Factory,
  CheckCircle,
  Home
} from 'lucide-react';
import heroImg from './assets/hero.png';
import diningImg from './assets/dining.png';
import centerTableImg from './assets/center-table.png';
import productHero from './assets/product-hero.png';
import logoImg from './assets/logo.jpg';

// --- COMPONENTS ---

const Navbar = ({ setPage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState(null);

  const menuItems = [
    { id: 'builder', label: 'Sofa Builder', icon: <Zap size={14}/> },
    { id: 'shop', label: 'Collections', icon: <Package size={14}/>, hasMega: true },
    { id: 'booking', label: 'Book Visit', icon: <HomeIcon size={14}/> },
  ];

  return (
    <>
      <nav className="nav-apple">
        <div className="nav-content">
          <button onClick={() => { setPage('home'); setIsMobileMenuOpen(false); }} className="flex items-center gap-2 nav-logo-btn">
            <img src={logoImg} alt="Furniso Logo" className="nav-logo-img" />
            <span className="font-bold text-lg tracking-tighter">FURNISO</span>
          </button>

          <div className="hidden md:flex nav-links-desktop">
            {menuItems.map(item => (
              <div key={item.id} className="relative h-full flex items-center" onMouseEnter={() => item.hasMega && setActiveMegaMenu(item.id)} onMouseLeave={() => setActiveMegaMenu(null)}>
                <button onClick={() => setPage(item.id)} className="nav-link-item flex items-center gap-1">
                  {item.label} {item.hasMega && <ChevronDown size={10} />}
                </button>
                <AnimatePresence>
                  {activeMegaMenu === item.id && (
                    <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="mega-menu" style={{ top: '64px' }}>
                      <div className="container-apple grid grid-cols-4 gap-12">

                        <div><h4 className="text-xs font-bold text-muted uppercase mb-4">Seating</h4><ul className="space-y-3 text-sm"><li className="hover:text-apple-blue cursor-pointer">L-Shape Sofas</li><li className="hover:text-apple-blue cursor-pointer">Linear Sets</li></ul></div>
                        <div className="col-span-2 bg-apple-gray rounded-3xl p-6 flex gap-6"><img src={productHero} className="w-32 object-contain" /><div><span className="bg-apple-blue text-white text-[10px] px-2 py-1 rounded-full font-bold">NEW</span><h5 className="font-bold mt-2">Lounge 1 Pro</h5><button onClick={() => setPage('builder')} className="cta-link text-xs mt-3">Design yours <ChevronRight size={12}/></button></div></div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
          <button className="md:hidden nav-link-item" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>{isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}</button>
        </div>
      </nav>
      <AnimatePresence>{isMobileMenuOpen && (
        <motion.div initial={{ opacity: 0, x: '100%' }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: '100%' }} className="mobile-menu-overlay">
          {menuItems.map((item, i) => (<button key={item.id} onClick={() => { setPage(item.id); setIsMobileMenuOpen(false); }} className="mobile-menu-link"><span>{item.label}</span></button>))}
        </motion.div>
      )}</AnimatePresence>
    </>
  );
};

const ValueChain = () => (
  <section className="snap-section section-padding container-apple bg-white">
    <div className="text-center mb-16">
      <h2 className="mb-4">Factory-to-Home Chain</h2>
      <p className="text-muted lead">Why our prices are the lowest in the market.</p>
    </div>
    <div className="chain-container">
      <div className="chain-connector"></div>
      {[
        { title: "Direct Factory", icon: <Factory />, desc: "We design & build in-house." },
        { title: "Quality Check", icon: <CheckCircle />, desc: "12-stage precision testing." },
        { title: "Direct Logistics", icon: <Truck />, desc: "Our own delivery fleet." },
        { title: "Client House", icon: <Home />, desc: "Direct setup & installation." }
      ].map((item, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.2 }}
          className="chain-item"
        >
          <div className="chain-icon-circle">{item.icon}</div>
          <h4 className="font-bold mb-2">{item.title}</h4>
          <p className="text-xs text-muted">{item.desc}</p>
        </motion.div>
      ))}
    </div>
    <div className="mt-16 bg-apple-gray p-8 rounded-[40px] text-center">
      <p className="text-sm font-medium">By eliminating the showroom, retail markups, and middle-men, we save you up to <b>40%</b> on luxury furniture.</p>
    </div>
  </section>
);

const TiledShop = ({ setPage }) => {
  const products = [
    { id: 1, name: 'Lounge 1 Pro', price: '₹34,500', img: productHero, cat: 'Sofa' },
    { id: 2, name: 'Teak Dining Table', price: '₹42,000', img: diningImg, cat: 'Dining' },
    { id: 3, name: 'Velvet Ottoman', price: '₹4,500', img: heroImg, cat: 'Sofa' },
    { id: 4, name: 'Marble Center Table', price: '₹12,000', img: centerTableImg, cat: 'Table' },
    { id: 5, name: 'L-Shape Luxe', price: '₹56,000', img: productHero, cat: 'Sofa' },
    { id: 6, name: 'Nesting Tables', price: '₹9,500', img: centerTableImg, cat: 'Table' },
    { id: 7, name: 'Executive Sofa', price: '₹38,000', img: productHero, cat: 'Sofa' },
    { id: 8, name: 'Classic Dining', price: '₹32,000', img: diningImg, cat: 'Dining' },
    { id: 9, name: 'Round Ottoman', price: '₹3,800', img: heroImg, cat: 'Sofa' }
  ];

  return (
    <section className="snap-section section-padding container-apple">
      <div className="mb-12">
        <h2 className="mb-2">Signature Collections</h2>
        <p className="text-muted">Direct from our factory floor.</p>
      </div>
      <div className="product-tile-grid">
        {products.map(product => (
          <motion.div 
            key={product.id}
            whileHover={{ y: -5 }}
            className="product-tile"
          >
            <div>
              <span className="text-xs font-bold text-apple-blue uppercase tracking-widest">{product.cat}</span>
              <h3 className="text-xl mt-2">{product.name}</h3>
              <p className="text-muted text-sm mt-1">Starting at {product.price}</p>
            </div>
            <img src={product.img} alt={product.name} className="product-tile-img" />
            <div className="flex gap-4">
              <button onClick={() => setPage('builder')} className="btn-apple btn-apple-primary text-xs w-full">Configure</button>
              <button onClick={() => setPage('booking')} className="btn-apple btn-apple-secondary text-xs w-full">Book Visit</button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const SofaBuilder = ({ setPage }) => {
  const [step, setStep] = useState(1);
  const [config, setConfig] = useState('Linear'); 
  const [seats, setSeats] = useState('3+2');
  const [upsells, setUpsells] = useState([]); 

  const calculateTotal = () => {
    const seatCount = seats === 'Custom' ? 3 : seats.split('+').reduce((a, b) => parseInt(a) + parseInt(b), 0) || 3;
    let total = seatCount * 8000;
    if (config === 'L-Shape') total += 5000;
    if (upsells.includes('Ottoman')) total += 4500;
    if (upsells.includes('Center Table')) total += 9000;
    return total;
  };

  return (
    <div className="section-padding container-apple min-h-screen">
      <div className="text-center mb-12"><h2 className="mb-2">Design Your Sofa</h2><p className="text-muted">Step {step} of 3</p></div>
      <div className="progress-bar">{[1, 2, 3].map(s => (<div key={s} className={`progress-step ${step >= s ? 'active' : ''}`} />))}</div>
      <AnimatePresence mode="wait">
        {step === 1 && (<motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="option-grid"><div className={`option-card ${config === 'Linear' ? 'selected' : ''}`} onClick={() => setConfig('Linear')}><h3>Linear</h3></div><div className={`option-card ${config === 'L-Shape' ? 'selected' : ''}`} onClick={() => setConfig('L-Shape')}><h3>L-Shape</h3></div></motion.div>)}
        {step === 2 && (<motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="option-grid">{['3+2', '3+1+1', '3+2+1', 'Custom'].map(s => (<div key={s} className={`option-card ${seats === s ? 'selected' : ''}`} onClick={() => setSeats(s)}><span>{s}</span></div>))}</motion.div>)}
        {step === 3 && (<motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="option-grid">{[{ name: 'Ottoman', p: '₹4,500', img: heroImg }, { name: 'Center Table', p: '₹9,000', img: centerTableImg }].map(item => (<div key={item.name} className={`option-card ${upsells.includes(item.name) ? 'selected' : ''}`} onClick={() => setUpsells(prev => prev.includes(item.name) ? prev.filter(u => u !== item.name) : [...prev, item.name])}><img src={item.img} className="w-full h-32 object-contain mb-4" /><h4>{item.name}</h4><p>{item.p}</p></div>))}</motion.div>)}
      </AnimatePresence>
      <motion.div initial={{ y: 100 }} animate={{ y: 0 }} className="pricing-bar"><div><span className="text-xs text-muted font-medium uppercase">Estimated Total</span><span className="text-xl font-bold ml-4">₹{calculateTotal().toLocaleString()}</span></div><div className="flex gap-4">{step > 1 && (<button onClick={() => setStep(step - 1)} className="btn-apple btn-apple-secondary">Back</button>)}<button onClick={() => step < 3 ? setStep(step + 1) : setPage('booking')} className="btn-apple btn-apple-primary">{step === 3 ? 'Review' : 'Continue'}</button></div></motion.div>
    </div>
  );
};

const ImmersiveHero = ({ setPage }) => (
  <section className="snap-section hero-immersive">
    <div className="hero-overlay-text"><h1>Luxury Seating. <br />Factory Pricing.</h1><p className="lead">Customized by you. Crafted by us.</p>
    <div className="flex gap-4 justify-center mt-8"><button onClick={() => setPage('builder')} className="btn-apple btn-apple-primary">Design Your Sofa</button><button onClick={() => setPage('booking')} className="btn-apple btn-apple-secondary">Book Visit</button></div></div>
    <div className="hero-visual-container flex items-center justify-center"><img src={productHero} alt="Luxury Sofa" className="hero-floating-img" /></div>
  </section>
);

const BookingPage = ({ setPage }) => {
  const [done, setDone] = useState(false);
  return (
    <div className="section-padding container-apple min-h-screen flex flex-col items-center">
      {!done ? (
        <div className="builder-card max-w-xl w-full"><h2 className="text-center mb-10">Book Site Visit</h2><form onSubmit={(e) => { e.preventDefault(); setDone(true); }} className="space-y-4"><input className="apple-input" placeholder="Full Name" required /><input className="apple-input" placeholder="Phone" required /><div className="bg-apple-gray p-6 rounded-2xl mb-8"><div className="flex justify-between items-center"><span>Booking Fee</span><span className="font-bold">₹1,000</span></div></div><button type="submit" className="btn-apple btn-apple-primary w-full py-5">Proceed to Pay ₹1,000</button></form></div>
      ) : (<div className="text-center pt-24"><h1>Confirmed.</h1><button onClick={() => setPage('home')} className="btn-apple btn-apple-primary mt-12">Home</button></div>)}
    </div>
  );
};

const Footer = ({ setPage }) => (
  <footer className="bg-apple-gray pt-20 pb-12 border-t border-gray-200">
    <div className="container-apple">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-20">
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <img src={logoImg} className="nav-logo-img" alt="Furniso" />
            <span className="font-bold text-lg tracking-tighter">FURNISO</span>
          </div>
          <p className="text-sm text-muted max-w-xs">
            Direct-from-factory custom furniture manufacturer. 
            Redefining luxury through manufacturing transparency and direct delivery.
          </p>
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider mb-6">Collections</h4>
          <ul className="space-y-3 text-xs text-muted">
            <li><button onClick={() => setPage('shop')} className="hover:text-apple-blue">Sofas & Sectionals</button></li>
            <li><button onClick={() => setPage('shop')} className="hover:text-apple-blue">Dining Sets</button></li>
            <li><button onClick={() => setPage('shop')} className="hover:text-apple-blue">Center Tables</button></li>
            <li><button onClick={() => setPage('shop')} className="hover:text-apple-blue">Ottomans</button></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider mb-6">Services</h4>
          <ul className="space-y-3 text-xs text-muted">
            <li><button onClick={() => setPage('booking')} className="hover:text-apple-blue">Site Visit Booking</button></li>
            <li><button onClick={() => setPage('builder')} className="hover:text-apple-blue">Sofa Configurator</button></li>
            <li><button className="hover:text-apple-blue">Corporate Orders</button></li>
            <li><button className="hover:text-apple-blue">Factory Tour</button></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider mb-6">Legal & SEO</h4>
          <ul className="space-y-3 text-xs text-muted">
            <li><button onClick={() => setPage('privacy')} className="hover:text-apple-blue">Privacy Policy</button></li>
            <li><button onClick={() => setPage('terms')} className="hover:text-apple-blue">Terms & Conditions</button></li>
            <li><button onClick={() => setPage('shipping')} className="hover:text-apple-blue">Shipping Policy</button></li>
            <li><button onClick={() => setPage('refund')} className="hover:text-apple-blue">Refund Policy</button></li>
          </ul>
        </div>
      </div>
      
      <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] text-muted">Copyright © 2026 Furniso Inc. All rights reserved. Mumbai, India.</p>
        <div className="flex gap-8">
           <a href="#" className="text-[10px] text-muted hover:text-apple-blue">Instagram</a>
           <a href="#" className="text-[10px] text-muted hover:text-apple-blue">Facebook</a>
           <a href="#" className="text-[10px] text-muted hover:text-apple-blue">LinkedIn</a>
        </div>
      </div>
    </div>
  </footer>
);

const LegalPage = ({ title, content, setPage }) => (
  <div className="section-padding container-apple min-h-screen">
    <h1 className="mb-8">{title}</h1>
    <div className="prose prose-sm text-muted max-w-3xl">
      <p className="lead mb-8">Effective Date: May 2026</p>
      <div className="space-y-6">
        <p>This {title.toLowerCase()} document outlines the standards and policies of Furniso.in regarding your interaction with our direct-from-factory platform.</p>
        <h3 className="text-jet-black">1. Overview</h3>
        <p>Furniso.in is a custom furniture brand. All orders are manufactured specifically for the client. We maintain a high standard of data privacy and transaction security.</p>
        <h3 className="text-jet-black">2. Site Visit Fee</h3>
        <p>The ₹1000 booking fee is a non-refundable service charge for site measurements, which is fully adjustable against any final furniture order exceeding ₹25,000.</p>
      </div>
    </div>
    <button onClick={() => setPage('home')} className="btn-apple btn-apple-primary mt-12">Back to Home</button>
  </div>
);

function App() {
  const [page, setPage] = useState('home');
  useEffect(() => { window.scrollTo(0, 0); }, [page]);
  return (
    <div className="min-h-screen">
      <Navbar setPage={setPage} />
      <AnimatePresence mode="wait">
        {page === 'home' && (
          <motion.div key="home">
            <ImmersiveHero setPage={setPage} />
            <TiledShop setPage={setPage} />
            <ValueChain />
          </motion.div>
        )}
        {page === 'builder' && <motion.div key="builder"><SofaBuilder setPage={setPage} /></motion.div>}
        {page === 'shop' && <motion.div key="shop"><TiledShop setPage={setPage} /></motion.div>}
        {page === 'booking' && <motion.div key="booking"><BookingPage setPage={setPage} /></motion.div>}
        
        {/* Legal Pages */}
        {page === 'privacy' && <motion.div key="privacy"><LegalPage title="Privacy Policy" setPage={setPage} /></motion.div>}
        {page === 'terms' && <motion.div key="terms"><LegalPage title="Terms & Conditions" setPage={setPage} /></motion.div>}
        {page === 'shipping' && <motion.div key="shipping"><LegalPage title="Shipping Policy" setPage={setPage} /></motion.div>}
        {page === 'refund' && <motion.div key="refund"><LegalPage title="Refund Policy" setPage={setPage} /></motion.div>}
      </AnimatePresence>
      <Footer setPage={setPage} />
    </div>
  );
}


export default App;
