/* ═══════════════════════════════════════════════════════════════
   TRADING Spark ACADEMY - Main JavaScript
   Animations, Chart, Navigation, Interactivity
   ═══════════════════════════════════════════════════════════════ */

// ─── Navbar Scroll Effect ───
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// ─── Mobile Menu Toggle ───
const mobileToggle = document.getElementById('mobileToggle');
if (mobileToggle) {
  mobileToggle.addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) {
      navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
      navLinks.style.position = 'fixed';
      navLinks.style.top = '70px';
      navLinks.style.left = '0';
      navLinks.style.right = '0';
      navLinks.style.background = 'rgba(10,10,10,0.98)';
      navLinks.style.flexDirection = 'column';
      navLinks.style.padding = '30px';
      navLinks.style.gap = '20px';
      navLinks.style.borderBottom = '1px solid rgba(255,255,255,0.1)';
      navLinks.style.zIndex = '999';
    }
  });
}

// ─── Scroll Animations (Intersection Observer) ───
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, index * 100);
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.animate-in').forEach(el => {
  observer.observe(el);
});

// ─── Hero Chart (Canvas Trading Chart) ───
const heroChart = document.getElementById('heroChart');
if (heroChart) {
  const ctx = heroChart.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  
  function resizeChart() {
    const rect = heroChart.parentElement.getBoundingClientRect();
    heroChart.width = rect.width * dpr;
    heroChart.height = rect.height * dpr;
    heroChart.style.width = rect.width + 'px';
    heroChart.style.height = rect.height + 'px';
    ctx.scale(dpr, dpr);
    drawChart();
  }
  
  function drawChart() {
    const w = heroChart.width / dpr;
    const h = heroChart.height / dpr;
    
    ctx.clearRect(0, 0, w, h);
    
    // Grid lines
    ctx.strokeStyle = 'rgba(255,255,255,0.03)';
    ctx.lineWidth = 1;
    for (let i = 0; i < 5; i++) {
      const y = (h / 5) * i + 20;
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }
    
    // Generate candlestick data
    const candles = [];
    let price = 67000;
    const candleCount = 35;
    const candleWidth = (w - 40) / candleCount;
    
    for (let i = 0; i < candleCount; i++) {
      const change = (Math.random() - 0.45) * 800;
      const open = price;
      const close = price + change;
      const high = Math.max(open, close) + Math.random() * 400;
      const low = Math.min(open, close) - Math.random() * 400;
      candles.push({ open, close, high, low });
      price = close;
    }
    
    // Find price range
    const allPrices = candles.flatMap(c => [c.high, c.low]);
    const minPrice = Math.min(...allPrices);
    const maxPrice = Math.max(...allPrices);
    const priceRange = maxPrice - minPrice;
    
    function priceToY(p) {
      return h - 20 - ((p - minPrice) / priceRange) * (h - 40);
    }
    
    // Draw candles
    candles.forEach((candle, i) => {
      const x = 20 + i * candleWidth + candleWidth / 2;
      const isGreen = candle.close > candle.open;
      
      // Wick
      ctx.strokeStyle = isGreen ? '#00c853' : '#ff1744';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(x, priceToY(candle.high));
      ctx.lineTo(x, priceToY(candle.low));
      ctx.stroke();
      
      // Body
      const bodyTop = priceToY(Math.max(candle.open, candle.close));
      const bodyBottom = priceToY(Math.min(candle.open, candle.close));
      const bodyHeight = Math.max(bodyBottom - bodyTop, 2);
      
      ctx.fillStyle = isGreen ? 'rgba(0,200,83,0.8)' : 'rgba(255,23,68,0.8)';
      ctx.fillRect(x - candleWidth * 0.35, bodyTop, candleWidth * 0.7, bodyHeight);
    });
    
    // Moving average line
    ctx.strokeStyle = 'rgba(212,175,55,0.6)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    const maPeriod = 7;
    for (let i = maPeriod; i < candles.length; i++) {
      let sum = 0;
      for (let j = i - maPeriod; j < i; j++) {
        sum += candles[j].close;
      }
      const ma = sum / maPeriod;
      const x = 20 + i * candleWidth + candleWidth / 2;
      const y = priceToY(ma);
      
      if (i === maPeriod) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    ctx.stroke();
    
    // Volume bars (subtle)
    candles.forEach((candle, i) => {
      const x = 20 + i * candleWidth + candleWidth / 2;
      const isGreen = candle.close > candle.open;
      const volume = Math.random() * 30 + 5;
      
      ctx.fillStyle = isGreen ? 'rgba(0,200,83,0.15)' : 'rgba(255,23,68,0.15)';
      ctx.fillRect(x - candleWidth * 0.3, h - volume, candleWidth * 0.6, volume);
    });
  }
  
  resizeChart();
  window.addEventListener('resize', resizeChart);
  
  // Animate chart redraw
  setInterval(() => {
    drawChart();
  }, 3000);
}

// ─── Counter Animation ───
function animateCounters() {
  const counters = document.querySelectorAll('.hero-stat-value, [data-count]');
  counters.forEach(counter => {
    const text = counter.textContent;
    const hasPlus = text.includes('+');
    const hasDollar = text.includes('$');
    const hasPercent = text.includes('%');
    const hasM = text.includes('M');
    
    let target = parseFloat(text.replace(/[^0-9.]/g, ''));
    if (!target) return;
    
    let current = 0;
    const increment = target / 60;
    const duration = 2000;
    const stepTime = duration / 60;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      
      let display = '';
      if (hasDollar) display += '$';
      if (hasM) {
        display += current.toFixed(1) + 'M';
      } else if (hasPercent) {
        display += Math.floor(current) + '%';
      } else if (target > 1000) {
        display += Math.floor(current).toLocaleString();
      } else {
        display += Math.floor(current);
      }
      if (hasPlus) display += '+';
      
      counter.textContent = display;
    }, stepTime);
  });
}

// Trigger counter animation when hero is visible
const heroSection = document.querySelector('.hero');
if (heroSection) {
  const heroObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      setTimeout(animateCounters, 500);
      heroObserver.unobserve(heroSection);
    }
  }, { threshold: 0.3 });
  heroObserver.observe(heroSection);
}

// ─── Sidebar Navigation (Dashboard) ───
const sidebarLinks = document.querySelectorAll('.sidebar-nav a');
sidebarLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    sidebarLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

// ─── Form Submissions ───
const forms = document.querySelectorAll('form');
forms.forEach(form => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.innerHTML;
    
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
    btn.disabled = true;
    
    setTimeout(() => {
      btn.innerHTML = '<i class="fas fa-check"></i> Success!';
      btn.style.background = 'var(--green)';
      
      setTimeout(() => {
        btn.innerHTML = originalText;
        btn.style.background = '';
        btn.disabled = false;
      }, 2000);
    }, 1500);
  });
});

// ─── Smooth Scroll for Anchor Links ───
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ─── Parallax effect on hero ───
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  const heroGrid = document.querySelector('.hero-grid');
  if (heroGrid) {
    heroGrid.style.transform = `translate(${scrolled * 0.02}px, ${scrolled * 0.02}px)`;
  }
});

// ─── Pricing Card Hover Sound Effect (Visual) ───
const pricingCards = document.querySelectorAll('.pricing-card');
pricingCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
  });
});

// ─── Dynamic Year in Footer ───
document.querySelectorAll('.footer-bottom p').forEach(p => {
  if (p.textContent.includes('2024')) {
    p.textContent = p.textContent.replace('2024', new Date().getFullYear());
  }
});

// ─── Typewriter effect for badge ───
const heroBadge = document.querySelector('.hero-badge span');
if (heroBadge) {
  const text = heroBadge.textContent;
  heroBadge.textContent = '';
  let i = 0;
  
  function typeWriter() {
    if (i < text.length) {
      heroBadge.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 50);
    }
  }
  
  setTimeout(typeWriter, 1000);
}

// ─── Course Progress Animation ───
const progressBars = document.querySelectorAll('.course-progress-bar');
const progressObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const bar = entry.target;
      const width = bar.style.width;
      bar.style.width = '0%';
      setTimeout(() => {
        bar.style.width = width;
      }, 300);
      progressObserver.unobserve(bar);
    }
  });
}, { threshold: 0.5 });

progressBars.forEach(bar => progressObserver.observe(bar));

// ─── Notification Badge ───
function showNotification(message) {
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 90px;
    right: 30px;
    background: rgba(26, 26, 26, 0.95);
    border: 1px solid rgba(212,175,55,0.3);
    border-radius: 12px;
    padding: 16px 24px;
    display: flex;
    align-items: center;
    gap: 12px;
    z-index: 9999;
    animation: fadeInRight 0.4s ease-out;
    box-shadow: 0 8px 30px rgba(0,0,0,0.4);
    backdrop-filter: blur(10px);
  `;
  notification.innerHTML = `
    <span style="width:8px;height:8px;background:#00c853;border-radius:50;"></span>
    <span style="font-size:0.85rem;color:rgba(255,255,255,0.9);">${message}</span>
  `;
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.opacity = '0';
    notification.style.transform = 'translateX(30px)';
    notification.style.transition = 'all 0.3s ease';
    setTimeout(() => notification.remove(), 300);
  }, 4000);
}

// Show welcome notification after 2s on dashboard
if (window.location.pathname.includes('dashboard')) {
  setTimeout(() => {
    showNotification('New VIP Signal: BUY EUR/USD @ 1.0875');
  }, 2000);
  
  setTimeout(() => {
    showNotification('Live trading session starting in 30 minutes');
  }, 6000);
}

// ─── Ticker Price Simulation ───
function updateTickerPrices() {
  const tickerItems = document.querySelectorAll('.ticker-item .price');
  tickerItems.forEach(item => {
    const currentPrice = parseFloat(item.textContent.replace(/,/g, ''));
    if (currentPrice) {
      const change = (Math.random() - 0.5) * currentPrice * 0.001;
      const newPrice = currentPrice + change;
      if (newPrice > 1000) {
        item.textContent = newPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      } else {
        item.textContent = newPrice.toFixed(4);
      }
    }
  });
}

setInterval(updateTickerPrices, 5000);

// ─── Admin Panel Quick Access (Hidden) ───
let adminSequence = '';
document.addEventListener('keydown', (e) => {
  adminSequence += e.key;
  if (adminSequence.includes('admin')) {
    adminSequence = '';
    showNotification('Admin Panel: Coming Soon');
  }
  if (adminSequence.length > 10) {
    adminSequence = adminSequence.slice(-5);
  }
});

console.log('%c DF Trading Academy ', 'background: linear-gradient(135deg, #d4af37, #f5d769); color: #0a0a0a; font-size: 24px; font-weight: bold; padding: 10px 20px; border-radius: 4px;');
console.log('%c Premium Trading Education Platform ', 'color: #d4af37; font-size: 12px;');
