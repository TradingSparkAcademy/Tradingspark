/* ═══════════════════════════════════════════════════════════════
   DF TRADING ACADEMY - Internationalization System
   Automatic language detection + manual switcher
   Default: Spanish | Supported: es, en
   ═══════════════════════════════════════════════════════════════ */

const translations = {
  // ─── Navigation ───
  "nav.home": {  es: "Inicio" },
  "nav.about": {  es: "Nosotros" },
  "nav.courses": {  es: "Cursos" },
  "nav.pricing": {  es: "Precios" },
  "nav.reviews": {  es: "Reseñas" },
  "nav.contact": {  es: "Contacto" },
  "nav.signin": {  es: "Iniciar Sesión" },
  "nav.getstarted": {  es: "Comenzar" },

  // ─── Hero Section ───
  "hero.badge": {  es: "Señales de Trading en Vivo" },
  "hero.title1": { es: "Opera Como un" },
  "hero.title2": { es: "Profesional" },
  "hero.subtitle": { es: "Únete a la comunidad élite de traders que dominan forex, cripto y acciones con nuestras señales premium, mentoría y estrategias comprobadas." },
  "hero.cta1": {  es: "Comienza a Operar" },
  "hero.cta2": {  es: "Ver Demo" },
  "hero.stat1.value": {  es: "500+" },
  "hero.stat1.label": {  es: "Traders Activos" },
  "hero.stat2.value": {  es: "89%" },
  "hero.stat2.label": {  es: "Tasa de Éxito" },
  "hero.stat3.value": {  es: "$2.4M" },
  "hero.stat3.label": {  es: "Ganancias" },

  // ─── Features Section ───
  "features.label": {  es: "Por Qué Elegirnos" },
  "features.title": {  es: "Todo Lo Que Necesitas Para" },
  "features.title2": {  es: "Triunfar" },
  "features.desc": { es: "Nuestra plataforma proporciona todas las herramientas, educación y soporte que necesitas para ser un trader consistentemente rentable." },
  
  "feature1.title": { , es: "Señales VIP de Trading" },
  "feature1.desc": {  es: "Recibe señales de compra/venta en tiempo real de nuestros analistas expertos con niveles precisos de entrada, stop-loss y take-profit." },
  "feature2.title": { en: "Premium Courses", es: "Cursos Premium" },
  "feature2.desc": {  es: "Accede a más de 100 horas de contenido en video estructurado sobre análisis técnico, gestión de riesgo y estrategias avanzadas." },
  "feature3.title": {  es: "Comunidad Élite" },
  "feature3.desc": {  "Únete a nuestros grupos exclusivos de Discord y Telegram traders compartiendo análisis y setups." },
  "feature4.title": {  es: "Sesiones de Trading en Vivo" },
  "feature4.desc": {  es: "Observa a nuestros mentores operar en vivo cada día, explicando su proceso de toma de decisiones en tiempo real." },
  "feature5.title": { , es: "Gestión de Riesgo" },
  "feature5.desc": {  es: "Domina técnicas profesionales de gestión de riesgo que protegen tu capital y maximizan la rentabilidad a largo plazo." },
  "feature6.title": {  es: "Mentoría Personalizada" },
  "feature6.desc": {  es: "Obtén guía personalizada " },

  // ─── Stats Banner ───
  "stats.members": {  es: "Miembros Activos" },
  "stats.accuracy": {  es: "Precisión de Señales" },
  "stats.lessons": {  es: "Video Lecciones" },
  "stats.support": {  es: "Soporte Disponible" },

  // ─── Pricing Section ───
  "pricing.label": {  es: "Membresía" },
  "pricing.title": {  es: "Elige Tu" },
  "pricing.title2": {  es: "Camino" },
  "pricing.desc": {  es: "Planes flexibles diseñados para todo nivel de trader. Cancela cuando quieras." },
  "pricing.basic": {  es: "Básico" },
  "pricing.pro": {  "Pro" },
  "pricing.vip": {  es: "VIP" },
  "pricing.popular": {  es: "Más Popular" },
  "pricing.monthly": { , es: "Facturación mensual" },
  "pricing.cancel": {  es: "Facturación mensual • Cancela cuando quieras" },
  "pricing.subscribe": {  es: "Suscríbete Ahora" },
  "pricing.getstarted": {  es: "Comenzar" },

  // Pricing features
  "pf.basic1": {  es: "Análisis Diario del Mercado" },
  "pf.basic2": {  es: "Señales Básicas de Trading" },
  "pf.basic3": {  es: "Acceso a la Comunidad" },
  "pf.basic4": {  es: "10 Video Cursos" },
  "pf.basic5": {  es: "Señales VIP" },
  "pf.basic6": {  es: "Mentoría Personalizada" },
  "pf.pro1": { , es: "Todo lo del Plan Básico" },
  "pf.pro2": {  es: "Señales Premium de Trading" },
  "pf.pro3": {  es: "Sesiones de Trading en Vivo" },
  "pf.pro4": {  es: "Todos los Video Cursos" },
  "pf.pro5": {  es: "Canal VIP de Discord" },
  "pf.pro6": {  es: "Mentoría Personalizada" },
  "pf.vip1": {  es: "Todo lo del Plan Pro" },
  "pf.vip2": {  es: "Señales VIP Élite" },
  "pf.vip3": {  es: "Mentoría Personalizada" },
  "pf.vip4": {  es: "Grupo Privado de Telegram" },
  "pf.vip5": {  es: "Soporte Prioritario" },
  "pf.vip6": { , es: "Acceso a Copy Trading" },

  // ─── Testimonials Section ───
  "testimonials.label": {  es: "Testimonios" },
  "testimonials.title": {  es: "La Confianza de" },
  "testimonials.title2": {  es: "Miles" },
  "testimonials.desc": {  es: "Descubre lo que dicen nuestros miembros sobre su experiencia en DF Trading Academy." },
  "testimonial1.text": {  es: "\"Pasé de perder dinero cada mes a ganar consistentemente $3,000-5,000. Las señales VIP son increíblemente precisas y el soporte de la comunidad es inigualable.\"" },
  "testimonial1.role": {  es: "Miembro VIP • 8 meses" },
  "testimonial2.text": {  es: "\"Los cursos estructurados me llevaron de principiante total a trader seguro en solo 3 meses. Los mentores realmente se preocupan por tu éxito.\"" },
  "testimonial2.role": {  es: "Miembro Pro • 5 meses" },
  "testimonial3.text": { es: "\"La mejor educación en trading que he pagado. Solo las sesiones en vivo valen 10x la membresía. Mi tasa de éxito subió del 45% al 82%.\"" },
  "testimonial3.role": {  es: "Miembro VIP • 1 año" },

  // ─── CTA Section ───
  "cta.label": {  es: "¿Listo Para Empezar?" },
  "cta.title": {  es: "Únete a la" },
  "cta.title2": {  es: "Élite" },
  "cta.title3": { e es: "Hoy" },
  "cta.desc": {  es: "Comienza tu camino hacia la libertad financiera con nuestras estrategias probadas y mentoría experta." },
  "cta.join": {  es: "Únete Ahora" },
  "cta.talk": {  es: "Contáctanos" },

  // ─── Footer ───
  "footer.desc": {  es: "Educación premium en trading y señales para traders que exigen excelencia. Domina los mercados con confianza." },
  "footer.platform": {  es: "Plataforma" },
  "footer.company": {  es: "Empresa" },
  "footer.legal": {  es: "Legal" },
  "footer.courses": {  es: "Cursos" },
  "footer.pricing": { es: "Precios" },
  "footer.dashboard": { es: "Panel" },
  "footer.signals": {  es: "Señales" },
  "footer.about": {  es: "Nosotros" },
  "footer.reviews": {  es: "Reseñas" },
  "footer.contact": {  es: "Contacto" },
  "footer.careers": {  es: "Empleos" },
  "footer.terms": {  es: "Términos de Servicio" },
  "footer.privacy": {  es: "Política de Privacidad" },
  "footer.risk": {  es: "Aviso de Riesgo" },
  "footer.refund": {  es: "Política de Reembolso" },
  "footer.rights": {  es: "© 2024 DF Trading Academy. Todos los derechos reservados." },
  "footer.disclaimer": { es: "El trading implica riesgo. Los resultados pasados no garantizan resultados futuros." },

  // ─── About Page ───
  "about.label": {  es: "Nuestra Historia" },
  "about.title1": {  es: "Creado por Traders," },
  "about.title2": {  es: "Para Traders" },
  "about.hero.desc": { en: "Trading Spark Academy fue creada en 2021 enfocada en brindar educación profesional sobre Forex, Oro e Índices utilizando análisis institucional y gestión de riesgo." },
  "about.mission.label": {  es: "Nuestra Misión" },
  "about.mission.title": {  es: "Empoderando Traders" },
  "about.mission.title2": {  es: "a Nivel Mundial" },
  "about.mission.p1": { es: "Creemos que los mercados financieros deben ser accesibles para todos, no solo para los insiders de Wall Street. Por eso creamos Trading Spark Academy - para cerrar la brecha entre el trading retail e institucional." },
  "about.mission.p2": { es: "Nuestro enfoque combina estrategias probadas con tecnología moderna, dando a nuestros miembros una ventaja en los mercados actuales. Nos enfocamos en rentabilidad sostenible y consistente, no en esquemas de dinero fácil." },
  "about.mission.founded": {  es: "Fundada" },
  "about.mission.experience": {  es: "Años de Experiencia" },
  "about.mission.countries": {  es: "Países Atendidos" },
  "about.image.text": {  es: "Excelencia en Trading Desde 2021" },
  "about.values.label": {  es: "Nuestros Valores" },
  "about.values.title": {  es: "Lo Que Nos" },
  "about.values.title2": {  es: "Impulsa" },
  "about.val1.title": {  es: "Transparencia" },
  "about.val1.desc": { es: "Compartimos nuestros resultados reales, incluyendo pérdidas. Cada señal es rastreada y verificada con total responsabilidad." },
  "about.val2.title": {  es: "Excelencia" },
  "about.val2.desc": { es: "Constantemente perfeccionamos nuestras estrategias y materiales educativos para entregar el contenido de mayor calidad en la industria." },
  "about.val3.title": {  es: "Comunidad" },
  "about.val3.desc": {  es: "Construimos un ambiente de apoyo donde los traders se ayudan mutuamente a crecer, aprender y alcanzar sus metas financieras." },
  "about.team.label": {  es: "Trading Spark Academy" },
  "about.team.title": {  es: "Conoce a los" },
  "about.team.title2": {  es: "Expertos" },
  "about.team.desc": {  es: "Nuestro equipo está formado por traders profesionales, analistas y educadores dedicados a tu éxito." },
  "about.team1.role": {  es: "Fundador y Trader Principal" },
  "about.team1.desc": es: Trader especializado en Forex, Oro e Índices con experiencia desde 2021 enfocado en análisis institucional, gestión de riesgo y educación de trading. },
    "about.cta.title": { es: "¿Listo Para Aprender de los" },
  "about.cta.title2": {  es: "Mejores" },
  "about.cta.desc": { es: "Únete a miles de traders exitosos que comenzaron su camino con nosotros." },
  "about.cta.btn": { es: "Comienza Tu Camino" },

  // ─── Plans Page ───
  "plans.label": {  es: "Planes de Membresía" },
  "plans.title1": {  es: "Invierte en Tu" },
  "plans.title2": { es: "Futuro en Trading" },
  "plans.desc": {  es: "Elige el plan que se ajuste a tus metas de trading. Todos los planes incluyen acceso a nuestra comunidad y pueden cancelarse cuando quieras." },
  "plans.vip.name": { es: "VIP Élite" },
  
  // Plan features extended
  "pf.basic1.full": {  es: "Reportes Diarios de Análisis de Mercado" },
  "pf.basic2.full": {  es: "Señales Básicas de Trading (3-5/semana)" },
  "pf.basic3.full": {  es: "Acceso a Discord de la Comunidad" },
  "pf.basic4.full": { es: "10 Video Cursos para Principiantes" },
  "pf.basic5.full": {  es: "Webinar Semanal del Mercado" },
  "pf.basic6.full": {  es: "Soporte por Email" },
  "pf.basic7.full": { , es: "Señales VIP de Trading" },
  "pf.basic8.full": {  es: "Sesiones de Trading en Vivo" },
  "pf.basic9.full": {  es: "Mentoría Personalizada" },
  "pf.basic10.full": { e es: "Grupo Privado de Telegram" },
  "pf.pro1.full": {  es: "Todo lo del Plan Básico" },
  "pf.pro2.full": {  es: "Señales Premium (4-8/semana)" },
  "pf.pro3.full": {   es: "Todos los 100+ Video Cursos" },
  "pf.pro4.full": {   es: "Sesiones Diarias de Trading en Vivo" },
  "pf.pro5.full": { es: "Canales VIP de Discord" },
  "pf.pro6.full": {  es: "Plantillas de Diario de Trading" },
  "pf.pro7.full": {  es: "Herramientas de Cálculo de Riesgo" },
  "pf.pro8.full": {  es: "Soporte Email Prioritario" },
  "pf.pro9.full": {  es: "Mentoría Personalizada" },
  "pf.pro10.full": {  es: "Grupo Privado de Telegram" },
  "pf.vip1.full": {  es: "Todo lo del Plan Pro" },
  "pf.vip2.full": {  es: "Señales VIP Élite (10+/semana)" },
  "pf.vip3.full": {  es: "Sesiones de Mentoría Personalizada" },
  "pf.vip4.full": {  es: "Grupo VIP Privado de Telegram" },
  "pf.vip5.full": { es: "Acceso a Copy Trading" },
  "pf.vip6.full": {  es: "Webinars Exclusivos y AMA" },
  "pf.vip7.full": {  es: "Revisión de Trades y Feedback" },
  "pf.vip8.full": {  es: "Desarrollo de Estrategia Personalizada" },
  "pf.vip9.full": { es: "Soporte Prioritario 24/7" },
  "pf.vip10.full": {  es: "Acceso de por Vida a la Comunidad" },

  // Compare plans
  "compare.label": { es: "Comparar Planes" },
  "compare.title": { , es: "Comparación Completa de" },
  "compare.title2": {  es: "Funciones" },
  "compare.feature": {  es: "Función" },
  "compare.signals": { es: "Señales de Trading / Semana" },
  "compare.videos": {  es: "Video Cursos" },
  "compare.live": {  es: "Sesiones de Trading en Vivo" },
  "compare.discord": { es: "Comunidad Discord" },
  "compare.mentorship": {  es: "Mentoría Personalizada" },
  "compare.telegram": {  es: "Telegram Privado" },
  "compare.copy": {  es: "Señales Personalizadas" },
  "compare.response": {  es: "Tiempo de Respuesta Soporte" },

  // Payments
  "payments.label": {  es: "Pagos Seguros" },
  "payments.title": {  es: "Impulsado por" },
  "payments.desc": {  es: "Todos los pagos se procesan de forma segura a través de Stripe. Aceptamos todas las tarjetas principales y soportamos 135+ monedas." },

  // FAQ
  "faq.label": {  es: "Preguntas Frecuentes" },
  "faq.title": {  es: "Preguntas" },
  "faq.title2": { es: "Comunes" },
  "faq.q1": {  es: "¿Puedo cancelar mi suscripción en cualquier momento?" },
  "faq.a1": {es: "¡Sí! Puedes cancelar tu suscripción en cualquier momento desde tu panel. Seguirás teniendo acceso hasta el final de tu período de facturación." },
  "faq.q2": {  es: "¿Qué mercados cubren sus señales?" },
  "faq.a2": {  es: "Nuestras señales cubren Forex (pares mayores y menores), , Oro, Índices Sinteticos ( v75 , step index) e Indices Bursatiles." },
  "faq.q3": {  es: "¿Ofrecen garantía de devolución?" },
  "faq.a3": { es: "Ofrecemos una garantía de devolución de 7 días en todos los planes. Si no estás satisfecho en la primera semana, te reembolsamos el pago completo." },
  "faq.q4": {  es: "¿Puedo mejorar mi plan después?" },
  "faq.a4": {  es: "¡Absolutamente! Puedes mejorar o bajar de plan en cualquier momento. Al mejorar, solo pagarás la diferencia prorrateada del período restante." },

  // ─── Login Page ───
  "login.title": {  es: "Bienvenido de Vuelta" },
  "login.subtitle": {  es: "Inicia sesión para acceder a tu panel de trading" },
  "login.email": {  es: "Correo Electrónico" },
  "login.email.ph": {  es: "Ingresa tu correo" },
  "login.password": {  es: "Contraseña" },
  "login.password.ph": {  es: "Ingresa tu contraseña" },
  "login.remember": {  es: "Recuérdame" },
  "login.forgot": { es: "¿Olvidaste tu Contraseña?" },
  "login.btn": { es: "Iniciar Sesión" },
  "login.or": { es: "o continúa con" },
  "login.noaccount": {  es: "¿No tienes cuenta?" },
  "login.signup": { es: "Regístrate" },

  // ─── Register Page ───
  "register.title": {  es: "Únete a la Élite" },
  "register.subtitle": { es: "Crea tu cuenta y comienza a operar como un profesional" },
  "register.firstname": {  es: "Nombre" },
  "register.lastname": {  es: "Apellido" },
  "register.email": { es: "Correo Electrónico" },
  "register.password": { es: "Contraseña" },
  "register.password.ph": {  es: "Mín. 8 caracteres" },
  "register.plan": { es: "Seleccionar Plan" },
  "register.plan.basic": {  es: "Plan Básico - $30/mes" },
  "register.plan.pro": {  es: "Plan Pro - $50/mes (Recomendado)" },
  "register.plan.vip": {  es: "VIP Élite - $100/mes" },
  "register.agree": {  es: "Acepto los" },
  "register.terms": {  es: "Términos de Servicio" },
  "register.and": { es: "y" },
  "register.privacy": {  es: "Política de Privacidad" },
  "register.btn": { , es: "Crear Cuenta y Suscribirse" },
  "register.secure": {  es: "Protegido por Stripe • Encriptación SSL 256-bit" },
  "register.or": {  es: "o regístrate con" },
  "register.hasaccount": { es: "¿Ya tienes cuenta?" },
  "register.signin": {  es: "Iniciar Sesión" },

  // ─── Dashboard ───
  "dash.greeting": { es: "Buenos Días, Trader" },
  "dash.subtitle": { es: "Aquí está tu resumen de trading de hoy" },
  "dash.overview": { es: "Resumen" },
  "dash.signals": { es: "Señales de Trading" },
  "dash.courses": { es: "Video Cursos" },
  "dash.community": { es: "Comunidad" },
  "dash.notifications": { es: "Notificaciones" },
  "dash.settings": { es: "Configuración" },
  "dash.pro": { es: "PLAN PRO" },
  "dash.upgrade.text": { es: "Mejora a VIP para acceso a mentoría" },
  "dash.upgrade.btn": { es: "Mejorar Plan" },
  "dash.stat.signals": { es: "Señales Activas" },
  "dash.stat.winrate": { es: "Tasa de Éxito" },
  "dash.stat.progress": { es: "Progreso de Cursos" },
  "dash.stat.pnl": { es: "P&L Mensual" },
  "dash.signals.title": { es: "Señales de Trading Activas" },
  "dash.table.pair": { es: "Par" },
  "dash.table.type": { es: "Tipo" },
  "dash.table.entry": { es: "Entrada" },
  "dash.table.sl": { es: "Stop Loss" },
  "dash.table.tp": { es: "Take Profit" },
  "dash.table.status": { es: "Estado" },
  "dash.table.pnl": { es: "P&L" },
  "dash.status.running": { es: "Activa" },
  "dash.status.pending": { es: "Pendiente" },
  "dash.status.tphit": { es: "TP Alcanzado" },
  "dash.status.slhit": { es: "SL Alcanzado" },
  "dash.courses.title": { es: "Cursos Actuales" },
  "dash.courses.viewall": { es: "Ver Todos" },
  "dash.notif.title": { es: "Notificaciones Recientes" },
  "dash.notif1": { es: "Nueva Señal VIP: COMPRA EUR/USD" },
  "dash.notif1.time": { es: "Hace 2 minutos" },
  "dash.notif2": { es: "Sesión en Vivo comienza en 30 min" },
  "dash.notif2.time": { es: "Hace 28 minutos" },
  "dash.notif3": { es: "¡Señal XAU/USD alcanzó Take Profit!" },
  "dash.notif3.time": {  es: "Hace 1 hora" },
  "dash.notif4": { es: "Nuevo curso añadido: Conceptos SMC" },
  "dash.notif4.time": { es: "Hace 3 horas" },
  "dash.notif5": { es: "Análisis semanal del mercado publicado" },
  "dash.notif5.time": { es: "Hace 5 horas" },
  "dash.discord.title": {  es: "Comunidad Discord" },
  "dash.discord.desc": { es: "350 miembros en línea" },
  "dash.telegram.title": { es: "Grupo VIP de Telegram" },
  "dash.telegram.desc": { es: "Canal exclusivo de señales" },
  "dash.join": {  es: "Unirse" },
  "dash.member": { es: "Miembro Pro" },

  // ─── Courses Page ───
  "courses.label": { es: "Centro Educativo" },
  "courses.title1": { es: "Domina el Trading con" },
  "courses.title2": { es: "Cursos Expertos" },
  "courses.desc": { es: "200+ horas de contenido en video estructurado de principiante a avanzado. Aprende a tu ritmo con acceso de por vida." },
  "courses.all": { es: "Todos los Cursos" },
  "courses.forex": { es: "Forex" },
  "courses.crypto": { es: "Indises sinteticos" },
  "courses.stocks": { es: "indices bursatiles" },
  "courses.ta": { es: "Análisis Técnico" },
  "courses.rm": { es: "Gestión de Riesgo" },
  "courses.psych": { es: "Psicología" },
  "course1.title": { es: "Masterclass de Acción del Precio" },
  "course1.desc": { es: "Aprende a leer la acción del precio como un profesional. Domina patrones de velas, soporte/resistencia y estructura del mercado." },
  "course1.tag": { es: "Forex" },
  "course2.title": { es: "Fundamentos de Trading indices" },
  "course2.desc": {  es: "Comprende Los Mercados De Indices Y Opera de manera correcta." },
  "course2.tag": { es: "Indices" },
  "course3.title": { es: "Gestión de Riesgo Pro" },
  "course3.desc": { es: "La habilidad más importante en trading. Aprende dimensionamiento de posiciones, gestión de drawdown y estrategias de preservación de capital." },
  "course3.tag": {  es: "Esencial" },
  "course4.title": {  es: "Trading Avanzado con Fibonacci" },
  "course4.desc": { es: "Domina retrocesos, extensiones y zonas temporales de Fibonacci. Combina con otras herramientas para setups de alta probabilidad." },
  "course4.tag": { es: "Avanzado" },
  "course5.title": { es: "Psicología y Disciplina del Trading" },
  "course5.desc": { es: "Controla emociones, construye disciplina y desarrolla la mentalidad de un trader consistentemente rentable." },
  "course5.tag": { es: "Psicología" },
  "course6.title": { es: "Conceptos Smart Money y Trading Estadistico" },
  "course6.desc": { es: "Comprende el flujo de órdenes institucional, zonas de liquidez, fair value gaps y conceptos de smart money para forex." },
  "course6.tag": { es: "Estrategia" },
  "courses.hours": { es: "horas" },
  "courses.lessons": { es: "lecciones" },
  "courses.complete": { es: "Completado" },
  "courses.notstarted": { es: "No Iniciado" },
  "courses.new": { es: "Curso Nuevo" },
  "courses.cta.title": { es: "Obtén Acceso a Todos los" },
  "courses.cta.title2": { es: "100+ Cursos" },
  "courses.cta.desc": { es: "Suscríbete al plan Pro o VIP para desbloquear todos los cursos con actualizaciones de por vida." },
  "courses.cta.btn": { es: "Ver Planes" },

  // ─── Testimonials Page ───
  "test.label": {es: "Historias de Éxito" },
  "test.title1": { es: "Resultados Reales de" },
  "test.title2": { es: "Traders Reales" },
  "test.desc": { es: "No solo confíes en nuestra palabra. Esto es lo que dicen nuestros miembros sobre su experiencia con DF Trading Academy." },
  "test.stat1": { es: "Calificación Promedio" },
  "test.stat2": { es: "Reseñas" },
  "test.stat3": { es: "Nos Recomiendan" },
  "test.stat4": { es: "Miembros Felices" },
  "test.cta.title1": { es: "Únete a" },
  "test.cta.title2": { es: "350+" },
  "test.cta.title3": {es: "Traders Exitosos" },
  "test.cta.desc": { es: "Comienza tu transformación hoy. Garantía de devolución de 5 días en todos los planes." },
  "test.cta.btn1": { es: "Comienza Ahora" },
  "test.cta.btn2": { es: "Ver Planes" },

  // Testimonial texts
  "test.t1": {es: "\"Pasé de perder dinero cada mes a ganar consistentemente $3,000-5,000. Las señales VIP son increíblemente precisas y el soporte de la comunidad es inigualable. La mejor inversión que he hecho.\"" },
  "test.t1.role": { es: "Miembro VIP • 8 meses • EE.UU." },
  "test.t2": { es: "\"Los cursos estructurados me llevaron de principiante total a trader seguro en solo 3 meses. Trading Spark Academy realmente se preocupa por tu éxito.\"" },
  "test.t2.role": { es: "Miembro Pro • 5 meses • Corea del Sur" },
  "test.t3": { es: "\"La mejor educación en trading en la que he invertido. Solo las sesiones en vivo valen 10x la membresía. Mi tasa de éxito subió del 45% al 82% en 2 meses.\"" },
  es: "Miembro VIP • 1 año • Reino Unido" },
  "test.t4": { es: "\"Al principio era escéptica, pero después de la primera semana de señales, supe que era legítimo. La transparencia es refrescante - muestran todos los resultados, ganancias Y pérdidas. Eso construyó mi confianza inmediatamente.\"" },
  "test.t4.role": { es: "Miembro Pro • 6 meses • India" },
  "test.t5": {es: "\"Solo el curso de conceptos ICT vale más que mi título universitario. El estilo de enseñanza de Daniel hace que los conceptos complejos sean cristalinos. Finalmente me convertí en un trader consistentemente rentable.\"" },
  "test.t5.role": {es: "Miembro VIP • 10 meses • México" },
  "test.t6": { es: "\"La mentoría 1-a-1 del plan VIP cambió todo para mí. Tener a alguien revisando mis trades y señalando mis errores aceleró mi crecimiento exponencialmente.\"" },
  "test.t6.role": {es: "Miembro VIP • 4 meses • Australia" },
  "test.t7": { es: "\"Gran comunidad y señales sólidas. La única razón por la que doy 4 estrellas es que desearía más cursos específicos de indices. Pero en general, valor increíble por el precio. Recomiendo mucho el plan Pro.\"" },
  "test.t7.role": { es: "Miembro Pro • 3 meses • Canadá" },
  "test.t8": {en: "\"I tried 5 different trading communities before finding Trading Spark Academy. It is by far the most professional and results-oriented platform.\" ; es: "\"He probado 5 comunidades de trading diferentes antes de encontrar Trading Trading Spark Academy. Es con diferencia la plataforma más profesional y orientada a resultados.\"" },
  "test.t8.role": {  "test.t9.role": { es: "Miembro VIP • 1 año • Alemania" },

  // ─── Contact Page ───
  "contact.label": { es: "Contáctanos" },
  "contact.title1": { es: "Estamos Aquí Para" },
  "contact.title2": { es: "Ayudarte" },
  "contact.desc": { es: "¿Tienes preguntas sobre nuestra plataforma, señales o planes de membresía? Trading Spark Academy está listo para ayudarte." },
  "contact.form.title": { es: "Envíanos un Mensaje" },
  "contact.form.firstname": { es: "Nombre" },
  "contact.form.lastname": { es: "Apellido" },
  "contact.form.email": { es: "Correo Electrónico" },
  "contact.form.subject": { es: "Asunto" },
  "contact.form.subject.general": { es: "Consulta General" },
  "contact.form.subject.membership": { es: "Pregunta de Membresía" },
  "contact.form.subject.support": { es: "Soporte Técnico" },
  "contact.form.subject.partnership": { es: "Oportunidad de Asociación" },
  "contact.form.subject.refund": { es: "Solicitud de Reembolso" },
  "contact.form.message": { es: "Mensaje" },
  "contact.form.message.ph": { es: "Cuéntanos cómo podemos ayudarte..." },
  "contact.form.btn": { es: "Enviar Mensaje" },
  "contact.info.email": { es: "Correo" },
  "contact.info.discord": { es: "Discord" },
  "contact.info.telegram": { es: "Telegram" },
  "contact.info.hours.title": { es: "Horario de Soporte" },
  "contact.info.hours.desc": {es: "24/7 para miembros VIP\nLun-Vie 9AM-6PM EST para otros" },
  "contact.response.title": { es: "Tiempo de Respuesta Rápido" },
  "contact.response.desc": { es: "Miembros VIP: Menos de 2 horas\nMiembros Pro: Menos de 24 horas\nMiembros Basic: Menos de 48 horas" },

  // ─── Signals Page ───
  "signals.label": { es: "Función Premium" },
  "signals.title1": { es: "Señales VIP de" },
  "signals.title2": { es: "Trading" },
  "signals.desc": { es: "Señales de trading en tiempo real de nuestros analistas expertos con 89% de precisión comprobada. Obtén entradas precisas, stop losses y niveles de take profit." },
  "signals.winrate": { es: "Tasa de Éxito" },
  "signals.sent": { es: "Señales Enviadas (2024)" },
  "signals.rr": { es: "Riesgo:Beneficio Prom." },
  "signals.pips": { es: "Pips Este Mes" },
  "signals.live.label": { es: "Señales en Vivo" },
  "signals.live.title": { es: "Señales Activas de" },
  "signals.live.title2": { es: "Hoy" },
  "signals.live.desc": { es: "Estas son señales de ejemplo. Suscríbete para acceder a señales en tiempo real con notificaciones instantáneas." },
  "signals.table.time": { es: "Hora" },
  "signals.table.pair": { es: "Par" },
  "signals.table.direction": { es: "Dirección" },
  "signals.table.entry": { es: "Entrada" },
  "signals.table.sl": { es: "Stop Loss" },
  "signals.table.tp1": { es: "Take Profit 1" },
  "signals.table.tp2": { es: "Take Profit 2" },
  "signals.table.status": { es: "Estado" },
  "signals.table.result": { es: "Resultado" },
  "signals.how.label": { es: "Cómo Funciona" },
  "signals.how.title": { es: "Entrega de" },
  "signals.how.title2": { es: "Señales" },
  "signals.how1.title": { es: "Notificaciones Instantáneas" },
  "signals.how1.desc": {  es: "Recibe señales instantáneamente vía Telegram, Discord y notificaciones en la app. Nunca pierdas una oportunidad." },
  "signals.how2.title": { es: "Niveles Precisos" },
  "signals.how2.desc": { es: "Cada señal incluye precio exacto de entrada, stop loss y múltiples niveles de take profit con gestión de riesgo clara." },
  "signals.how3.title": { es: "Análisis Completo" },
  "signals.how3.desc": { es: "Cada señal viene con una explicación detallada del setup, incluyendo capturas de gráfico y razonamiento." },
  "signals.cta.title": { es: "Desbloquea Señales VIP" },
  "signals.cta.desc": {es: "Obtén acceso a 20+ señales premium por semana con nuestro plan VIP Élite." },
  "signals.cta.btn": {es: "Iniciar VIP - $100/mes" },
  "signals.cta.compare": { es: "Comparar Planes" },
  "signals.cta.guarantee": { es: "Garantía de devolución de 5 días • Cancela cuando quieras" },

  // ─── Admin Panel ───
  "admin.title": { es: "Panel de Administración" },
  "admin.subtitle": { es: "Resumen y gestión de la plataforma" },
  "admin.members": { es: "Miembros" },
  "admin.signals": { es: "Señales" },
  "admin.courses": { es: "Cursos" },
  "admin.payments": { es: "Pagos" },
  "admin.analytics": { es: "Analíticas" },
  "admin.messages": { es: "Mensajes" },
  "admin.settings": { es: "Configuración" },
  "admin.back": { es: "Volver a Vista de Usuario" },
  "admin.total.members": { es: "Total Miembros" },
  "admin.monthly.revenue": { es: "Ingresos Mensuales" },
  "admin.new.month": { es: "Nuevos Este Mes" },
  "admin.signals.month": { es: "Señales Enviadas (Mes)" },
  "admin.revenue.title": { es: "Resumen de Ingresos" },
  "admin.basic.plans": { es: "Planes Básicos" },
  "admin.pro.plans": { es: "Planes Pro" },
  "admin.vip.plans": { es: "Planes VIP" },
  "admin.vs.last": { es: "vs mes anterior" },
  "admin.quick.title": { es: "Acciones Rápidas" },
  "admin.quick.signal": { es: "Nueva Señal" },
  "admin.quick.course": { es: "Subir Curso" },
  "admin.quick.notif": { es: "Enviar Notificación" },
  "admin.quick.live": { es: "Iniciar Sesión en Vivo" },
  "admin.quick.export": { es: "Exportar Datos" },
  "admin.recent.title": { es: "Miembros Recientes" },
  "admin.recent.viewall": { es: "Ver Todos" },
  "admin.table.member": { es: "Miembro" },
  "admin.table.email": { es: "Email" },
  "admin.table.plan": { es: "Plan" },
  "admin.table.joined": { es: "Registro" },
  "admin.table.status": { es: "Estado" },
  "admin.table.revenue": { es: "Ingresos" },
  "admin.status.active": { es: "Activo" },
  "admin.status.cancelled": { es: "Cancelado" },

  // ─── Chart Section ───
  "chart.live": { es: "EN VIVO" },

  // ─── Language Switcher ───
  "lang.switch": { en: "EN", es: "ES" }
};

// ─── i18n Engine ───
class I18n {
  constructor() {
    this.currentLang = this.detectLanguage();
    this.init();
  }

  detectLanguage() {
    // 1. Check localStorage for user preference
    const stored = localStorage.getItem('df_lang');
    if (stored && (stored === 'es' || stored === 'en')) {
      return stored;
    }

    // 2. Check browser language
    const browserLang = navigator.language || navigator.userLanguage || '';
    const lang = browserLang.toLowerCase().split('-')[0];

    // 3. Default to Spanish
    if (lang === 'en') return 'en';
    return 'es'; // Default Spanish
  }

  init() {
    document.addEventListener('DOMContentLoaded', () => {
      this.applyTranslations();
      this.createLanguageSwitcher();
      this.updateHtmlLang();
    });

    // If DOM already loaded
    if (document.readyState !== 'loading') {
      this.applyTranslations();
      this.createLanguageSwitcher();
      this.updateHtmlLang();
    }
  }

  setLanguage(lang) {
    this.currentLang = lang;
    localStorage.setItem('df_lang', lang);
    this.applyTranslations();
    this.updateHtmlLang();
    this.updateSwitcherUI();
  }

  updateHtmlLang() {
    document.documentElement.lang = this.currentLang;
  }

  t(key) {
    const entry = translations[key];
    if (!entry) return key;
    return entry[this.currentLang] || entry['en'] || key;
  }

  applyTranslations() {
    // Translate all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const text = this.t(key);
      if (text && text !== key) {
        el.textContent = text;
      }
    });

    // Translate placeholders
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const key = el.getAttribute('data-i18n-ph');
      const text = this.t(key);
      if (text && text !== key) {
        el.placeholder = text;
      }
    });

    // Translate titles/aria-labels
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      const key = el.getAttribute('data-i18n-title');
      const text = this.t(key);
      if (text && text !== key) {
        el.title = text;
      }
    });
  }

  createLanguageSwitcher() {
    // Find all nav-actions containers and insert switcher
    const navActions = document.querySelectorAll('.nav-actions');
    navActions.forEach(container => {
      if (container.querySelector('.lang-switcher')) return; // Already exists
      
      const switcher = document.createElement('div');
      switcher.className = 'lang-switcher';
      switcher.innerHTML = `
        <button class="lang-btn ${this.currentLang === 'es' ? 'active' : ''}" data-lang="es">
          <span class="lang-flag">🇪🇸</span> ES
        </button>
        <button class="lang-btn ${this.currentLang === 'en' ? 'active' : ''}" data-lang="en">
          <span class="lang-flag">🇺🇸</span> EN
        </button>
      `;
      
      // Insert before the first element in nav-actions
      container.insertBefore(switcher, container.firstChild);

      // Event listeners
      switcher.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const lang = btn.getAttribute('data-lang');
          this.setLanguage(lang);
        });
      });
    });

    // Also add to sidebars if exists
    const sidebar = document.querySelector('.sidebar-logo');
    if (sidebar && !sidebar.querySelector('.lang-switcher-sidebar')) {
      const switcher = document.createElement('div');
      switcher.className = 'lang-switcher-sidebar';
      switcher.style.cssText = 'display:flex;gap:6px;margin-top:14px;';
      switcher.innerHTML = `
        <button class="lang-btn-mini ${this.currentLang === 'es' ? 'active' : ''}" data-lang="es">ES</button>
        <button class="lang-btn-mini ${this.currentLang === 'en' ? 'active' : ''}" data-lang="en">EN</button>
      `;
      sidebar.appendChild(switcher);

      switcher.querySelectorAll('.lang-btn-mini').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const lang = btn.getAttribute('data-lang');
          this.setLanguage(lang);
        });
      });
    }
  }

  updateSwitcherUI() {
    document.querySelectorAll('.lang-btn, .lang-btn-mini').forEach(btn => {
      const lang = btn.getAttribute('data-lang');
      if (lang === this.currentLang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }
}

// Initialize i18n
const i18n = new I18n();

// Export for external use
window.i18n = i18n;
window.t = (key) => i18n.t(key);
