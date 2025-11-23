export type Language = 'es' | 'en';

export const translations = {
  es: {
    nav: {
      home: 'Inicio',
      faq: 'FAQ',
      demo: 'Demo',
      waitlist: 'Unirme al Waitlist',
    },
    hero: {
      title: 'Protege cada lote.',
      subtitle: 'Fortalece tu reputación.',
      description: 'Trazabilidad simple con QR para identificar exactamente dónde se dañó un lote, optimizar procesos y proteger la credibilidad de tu bodega.',
      cta: 'Únete a la Lista de Espera',
      trustBadges: {
        noHardware: 'Sin hardware especial',
        quickSetup: 'Implementación en minutos',
        premium: 'Trazabilidad premium',
      },
      altText: {
        vineyard: 'Viñedo premium',
      },
    },
    problem: {
      title: 'El problema que enfrentas',
      description: 'Como vinicultor, sabes que proteger tus lotes es fundamental. Pero sin trazabilidad, estás navegando a ciegas.',
      problems: [
        {
          title: 'Daños en lotes',
          description: 'Temperatura, vibración, errores de almacenaje. Tus vinos están expuestos a múltiples riesgos.',
        },
        {
          title: 'Pérdidas económicas',
          description: 'Un lote dañado puede representar miles de dólares en pérdidas y afectar tu reputación.',
        },
        {
          title: 'Falta de evidencia',
          description: '¿Dónde ocurrió el daño? Sin trazabilidad, es imposible identificar el problema.',
        },
        {
          title: 'Riesgo en exportación',
          description: 'El transporte internacional expone tus vinos a condiciones que no puedes controlar.',
        },
        {
          title: 'Punto ciego',
          description: 'Sin visibilidad en la cadena, no sabes qué pasa con tu producto después de salir de bodega.',
        },
      ],
      quote: 'Cada lote dañado no solo es una pérdida económica, es un golpe a tu reputación. Y sin evidencia, recuperar esa confianza es casi imposible.',
      altText: {
        winery: 'Bodega de vinos',
      },
    },
    solution: {
      title: 'La solución: Vinifica',
      description: 'Trazabilidad premium sin complejidad. Vinifica te permite rastrear cada lote desde el viñedo hasta el consumidor final, identificando cualquier problema en el camino.',
      steps: [
        {
          title: 'Coloca un QR en el lote',
          description: 'Simple. Sin hardware especial. Solo un código QR único por lote.',
        },
        {
          title: 'Escanea desde cualquier dispositivo',
          description: 'Teléfono, tablet, o cualquier dispositivo con cámara. Registra eventos en segundos.',
        },
        {
          title: 'Registra cada etapa',
          description: 'Viñedo, producción, bodega, almacenamiento, transporte, distribución. Todo rastreado.',
        },
        {
          title: 'Identifica el punto exacto',
          description: '¿Dónde se dañó el lote? Vinifica te muestra exactamente en qué momento y lugar.',
        },
        {
          title: 'Protege tu reputación',
          description: 'Con evidencia verificable, puedes demostrar que cumpliste con todos los estándares.',
        },
      ],
      noHardwareTitle: 'Sin hardware especial. Sin complicaciones.',
      noHardwareDescription: 'Vinifica funciona con cualquier smartphone. No necesitas sensores costosos ni equipos especiales. Solo tu teléfono y los QR de tus lotes.',
      features: [
        'Implementación inmediata, sin instalaciones complejas',
        'Compatible con todos los dispositivos móviles',
        'Registros en tiempo real desde cualquier lugar',
        'Preparado para exportación y certificaciones',
      ],
      cta: 'Quiero acceso temprano',
      altText: {
        winemaking: 'Proceso de vinificación',
      },
    },
    benefits: {
      title: 'Beneficios para tu bodega',
      description: 'Vinifica no solo te da trazabilidad. Te da control, credibilidad y la tranquilidad de saber que cada lote está protegido.',
      items: [
        {
          title: 'Seguridad Total',
          description: 'Protege cada lote con trazabilidad verificable en cada etapa del proceso.',
        },
        {
          title: 'Credibilidad Profesional',
          description: 'Demuestra a tus clientes y distribuidores que cumples con los más altos estándares.',
        },
        {
          title: 'Control Absoluto',
          description: 'Monitorea tus lotes en tiempo real, desde el viñedo hasta el consumidor final.',
        },
        {
          title: 'Evidencia para Reclamos',
          description: 'Con registros verificables, puedes demostrar exactamente dónde ocurrió cualquier problema.',
        },
        {
          title: 'Preparado para Exportación',
          description: 'Cumple con certificaciones internacionales y facilita la documentación de aduanas.',
        },
        {
          title: 'Optimización de Procesos',
          description: 'Identifica cuellos de botella y mejora continuamente tu cadena de producción.',
        },
        {
          title: 'Uso Desde Cualquier Móvil',
          description: 'Tu equipo puede registrar eventos sin necesidad de capacitación técnica compleja.',
        },
        {
          title: 'Trazabilidad Premium',
          description: 'Eleva la percepción de tus vinos con tecnología de certificación de última generación.',
        },
      ],
      ctaTitle: 'Empieza a proteger tus lotes hoy',
      ctaDescription: 'Únete a los vinicultores que ya están usando trazabilidad premium para proteger su reputación.',
      ctaButton: 'Notificarme al lanzar',
    },
    phaseTwo: {
      badge: 'En desarrollo',
      title: 'Lo que viene: Vende tus lotes premium',
      description: 'En la segunda fase, Vinifica se convertirá en tu plataforma de venta directa. Podrás comercializar tus lotes trazables con compradores que valoran la autenticidad y la transparencia.',
      comingSoon: 'Próximamente',
      phaseLabel: 'Fase 2: Venta de Lotes',
      features: [
        {
          title: 'Marketplace Integrado',
          description: 'Vende tus lotes premium directamente desde la plataforma.',
        },
        {
          title: 'Precio Justo',
          description: 'Controla el precio de tus vinos sin intermediarios que afecten tu margen.',
        },
        {
          title: 'Alcance Global',
          description: 'Conecta con compradores internacionales interesados en vinos trazables.',
        },
        {
          title: 'Transacciones Seguras',
          description: 'Pagos verificados y seguros para proteger tu inversión.',
        },
      ],
      quote: 'Imagina vender tus mejores lotes con trazabilidad verificada, sin intermediarios, directamente a compradores que valoran la autenticidad.',
    },
    faq: {
      title: 'Preguntas frecuentes',
      subtitle: 'Todo lo que necesitas saber sobre Vinifica',
      moreQuestions: '¿Tienes más preguntas?',
      joinWaitlist: 'Únete al Waitlist',
      questions: [
        {
          question: '¿Desde qué dispositivos puedo usar Vinifica?',
          answer: 'Vinifica funciona desde cualquier dispositivo con cámara: smartphones, tablets, o computadoras. No necesitas hardware especial ni aplicaciones complejas.',
        },
        {
          question: '¿Cómo funciona el sistema de QR?',
          answer: 'Cada lote recibe un código QR único. Al escanearlo con cualquier dispositivo, puedes registrar eventos, agregar notas, y ver el historial completo de trazabilidad del lote.',
        },
        {
          question: '¿Puedo registrar eventos en cualquier momento?',
          answer: 'Sí. Vinifica permite registrar eventos en tiempo real desde cualquier ubicación: viñedo, bodega, transporte, almacenamiento, o distribución.',
        },
        {
          question: '¿Ayuda a detectar problemas en la cadena de distribución?',
          answer: 'Absolutamente. Con cada evento registrado, puedes identificar exactamente dónde y cuándo ocurrió un problema, permitiéndote tomar acción inmediata y documentada.',
        },
        {
          question: '¿Necesito sensores o hardware especializado?',
          answer: 'No. Vinifica está diseñado para funcionar sin hardware adicional. Solo necesitas los códigos QR de tus lotes y un dispositivo con cámara.',
        },
        {
          question: '¿Es difícil comenzar a usar Vinifica?',
          answer: 'Para nada. El proceso es simple: genera QR para tus lotes, pégalos en las cajas o barricas, y empieza a escanear. Tu equipo puede aprender a usarlo en minutos.',
        },
        {
          question: '¿Qué incluye la fase de venta de lotes?',
          answer: 'En la segunda fase, podrás listar tus lotes trazables en nuestra plataforma de marketplace, conectarte con compradores globales, y gestionar ventas con transacciones seguras.',
        },
        {
          question: '¿El sistema funciona para exportación internacional?',
          answer: 'Sí. Vinifica está diseñado para cumplir con estándares internacionales de trazabilidad, facilitando la documentación para exportación y certificaciones.',
        },
        {
          question: '¿Protege mi reputación ante distribuidores?',
          answer: 'Definitivamente. Con evidencia verificable de cada etapa, puedes demostrar que tu vino salió en perfectas condiciones de tu bodega, protegiendo tu marca ante cualquier reclamo.',
        },
        {
          question: '¿Cómo se asegura la autenticidad del lote?',
          answer: 'Cada lote tiene un código QR único e inmutable. Los registros son verificables y no pueden ser alterados, garantizando la autenticidad de la trazabilidad.',
        },
        {
          question: '¿Cuánto cuesta Vinifica?',
          answer: 'Estamos en fase de waitlist. Los primeros vinicultores que se unan tendrán acceso a condiciones especiales de lanzamiento. Únete a la lista para ser notificado.',
        },
        {
          question: '¿Puedo usar Vinifica con mi equipo completo?',
          answer: 'Sí. Vinifica permite que todo tu equipo registre eventos: desde trabajadores en el viñedo hasta personal de almacén y logística. Todos con sus propios dispositivos.',
        },
      ],
    },
    footer: {
      ctaTitle: 'Protege tu legado.',
      ctaSubtitle: 'Únete a Vinifica.',
      ctaDescription: 'Sé parte de los primeros vinicultores en acceder a trazabilidad premium con tecnología simple y verificable.',
      ctaButton: 'Acceso Temprano — Únete Ahora',
      tagline: 'Trazabilidad premium para vinicultores.',
      waitlist: 'Lista de Espera',
      contact: 'Contacto',
      copyright: 'Todos los derechos reservados.',
      designedFor: 'Diseñado para vinicultores que valoran la excelencia y la transparencia.',
    },
    waitlist: {
      title: 'Únete a la lista de espera',
      description: 'Sé de los primeros vinicultores en acceder a Vinifica y recibe condiciones especiales de lanzamiento.',
      email: 'Email',
      emailPlaceholder: 'tu@email.com',
      country: 'País / Región',
      countries: {
        us: 'Estados Unidos',
        cl: 'Chile',
        ar: 'Argentina',
        other: 'Otro',
      },
      submit: 'Unirme a la Lista de Espera',
      processing: 'Procesando...',
      privacy: 'Solo usaremos tu correo para avisarte del lanzamiento de Vinifica.',
      privacySecond: 'No compartiremos tu información con terceros.',
      successTitle: '¡Bienvenido a Vinifica!',
      successMessage: 'Te hemos agregado a la lista de espera. Te notificaremos por email cuando lancemos.',
      backHome: 'Volver al inicio',
      trustBadges: {
        priority: 'Acceso prioritario',
        special: 'Condiciones especiales',
        noCommitment: 'Sin compromiso',
      },
    },
  },
  en: {
    nav: {
      home: 'Home',
      faq: 'FAQ',
      demo: 'Demo',
      waitlist: 'Join Waitlist',
    },
    hero: {
      title: 'Protect every lot.',
      subtitle: 'Strengthen your reputation.',
      description: 'Simple QR traceability to identify exactly where a lot was damaged, optimize processes, and protect your winery\'s credibility.',
      cta: 'Join the Waitlist',
      trustBadges: {
        noHardware: 'No special hardware',
        quickSetup: 'Setup in minutes',
        premium: 'Premium traceability',
      },
      altText: {
        vineyard: 'Premium vineyard',
      },
    },
    problem: {
      title: 'The problem you face',
      description: 'As a winemaker, you know that protecting your lots is essential. But without traceability, you\'re navigating blind.',
      problems: [
        {
          title: 'Lot damage',
          description: 'Temperature, vibration, storage errors. Your wines are exposed to multiple risks.',
        },
        {
          title: 'Economic losses',
          description: 'A damaged lot can represent thousands of dollars in losses and affect your reputation.',
        },
        {
          title: 'Lack of evidence',
          description: 'Where did the damage occur? Without traceability, it\'s impossible to identify the problem.',
        },
        {
          title: 'Export risk',
          description: 'International transport exposes your wines to conditions you cannot control.',
        },
        {
          title: 'Blind spot',
          description: 'Without visibility in the chain, you don\'t know what happens to your product after leaving the winery.',
        },
      ],
      quote: 'Every damaged lot is not just an economic loss, it\'s a blow to your reputation. And without evidence, regaining that trust is almost impossible.',
      altText: {
        winery: 'Wine cellar',
      },
    },
    solution: {
      title: 'The solution: Vinifica',
      description: 'Premium traceability without complexity. Vinifica allows you to track each lot from the vineyard to the final consumer, identifying any problem along the way.',
      steps: [
        {
          title: 'Place a QR on the lot',
          description: 'Simple. No special hardware. Just a unique QR code per lot.',
        },
        {
          title: 'Scan from any device',
          description: 'Phone, tablet, or any device with a camera. Register events in seconds.',
        },
        {
          title: 'Register each stage',
          description: 'Vineyard, production, winery, storage, transport, distribution. Everything tracked.',
        },
        {
          title: 'Identify the exact point',
          description: 'Where was the lot damaged? Vinifica shows you exactly when and where.',
        },
        {
          title: 'Protect your reputation',
          description: 'With verifiable evidence, you can prove that you met all standards.',
        },
      ],
      noHardwareTitle: 'No special hardware. No complications.',
      noHardwareDescription: 'Vinifica works with any smartphone. You don\'t need expensive sensors or special equipment. Just your phone and your lot QR codes.',
      features: [
        'Immediate implementation, no complex installations',
        'Compatible with all mobile devices',
        'Real-time records from anywhere',
        'Ready for export and certifications',
      ],
      cta: 'I want early access',
      altText: {
        winemaking: 'Winemaking process',
      },
    },
    benefits: {
      title: 'Benefits for your winery',
      description: 'Vinifica doesn\'t just give you traceability. It gives you control, credibility, and peace of mind knowing that every lot is protected.',
      items: [
        {
          title: 'Total Security',
          description: 'Protect every lot with verifiable traceability at every stage of the process.',
        },
        {
          title: 'Professional Credibility',
          description: 'Show your clients and distributors that you meet the highest standards.',
        },
        {
          title: 'Absolute Control',
          description: 'Monitor your lots in real-time, from vineyard to final consumer.',
        },
        {
          title: 'Evidence for Claims',
          description: 'With verifiable records, you can prove exactly where any problem occurred.',
        },
        {
          title: 'Ready for Export',
          description: 'Meet international certifications and facilitate customs documentation.',
        },
        {
          title: 'Process Optimization',
          description: 'Identify bottlenecks and continuously improve your production chain.',
        },
        {
          title: 'Use from Any Mobile',
          description: 'Your team can register events without complex technical training.',
        },
        {
          title: 'Premium Traceability',
          description: 'Elevate the perception of your wines with cutting-edge certification technology.',
        },
      ],
      ctaTitle: 'Start protecting your lots today',
      ctaDescription: 'Join the winemakers who are already using premium traceability to protect their reputation.',
      ctaButton: 'Notify me at launch',
    },
    phaseTwo: {
      badge: 'In development',
      title: 'What\'s coming: Sell your premium lots',
      description: 'In the second phase, Vinifica will become your direct sales platform. You\'ll be able to market your traceable lots to buyers who value authenticity and transparency.',
      comingSoon: 'Coming soon',
      phaseLabel: 'Phase 2: Lot Sales',
      features: [
        {
          title: 'Integrated Marketplace',
          description: 'Sell your premium lots directly from the platform.',
        },
        {
          title: 'Fair Price',
          description: 'Control the price of your wines without intermediaries affecting your margin.',
        },
        {
          title: 'Global Reach',
          description: 'Connect with international buyers interested in traceable wines.',
        },
        {
          title: 'Secure Transactions',
          description: 'Verified and secure payments to protect your investment.',
        },
      ],
      quote: 'Imagine selling your best lots with verified traceability, without intermediaries, directly to buyers who value authenticity.',
    },
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Everything you need to know about Vinifica',
      moreQuestions: 'Have more questions?',
      joinWaitlist: 'Join the Waitlist',
      questions: [
        {
          question: 'What devices can I use Vinifica on?',
          answer: 'Vinifica works on any device with a camera: smartphones, tablets, or computers. You don\'t need special hardware or complex applications.',
        },
        {
          question: 'How does the QR system work?',
          answer: 'Each lot receives a unique QR code. By scanning it with any device, you can register events, add notes, and view the complete traceability history of the lot.',
        },
        {
          question: 'Can I register events at any time?',
          answer: 'Yes. Vinifica allows you to register events in real-time from any location: vineyard, winery, transport, storage, or distribution.',
        },
        {
          question: 'Does it help detect problems in the distribution chain?',
          answer: 'Absolutely. With each registered event, you can identify exactly where and when a problem occurred, allowing you to take immediate and documented action.',
        },
        {
          question: 'Do I need sensors or specialized hardware?',
          answer: 'No. Vinifica is designed to work without additional hardware. You only need QR codes for your lots and a device with a camera.',
        },
        {
          question: 'Is it difficult to start using Vinifica?',
          answer: 'Not at all. The process is simple: generate QR codes for your lots, stick them on boxes or barrels, and start scanning. Your team can learn to use it in minutes.',
        },
        {
          question: 'What does the lot sales phase include?',
          answer: 'In the second phase, you\'ll be able to list your traceable lots on our marketplace platform, connect with global buyers, and manage sales with secure transactions.',
        },
        {
          question: 'Does the system work for international export?',
          answer: 'Yes. Vinifica is designed to meet international traceability standards, facilitating documentation for export and certifications.',
        },
        {
          question: 'Does it protect my reputation with distributors?',
          answer: 'Definitely. With verifiable evidence from each stage, you can prove that your wine left your winery in perfect condition, protecting your brand from any claims.',
        },
        {
          question: 'How is lot authenticity ensured?',
          answer: 'Each lot has a unique and immutable QR code. Records are verifiable and cannot be altered, guaranteeing the authenticity of traceability.',
        },
        {
          question: 'How much does Vinifica cost?',
          answer: 'We are in the waitlist phase. The first winemakers to join will have access to special launch conditions. Join the list to be notified.',
        },
        {
          question: 'Can I use Vinifica with my entire team?',
          answer: 'Yes. Vinifica allows your entire team to register events: from vineyard workers to warehouse and logistics personnel. Everyone with their own devices.',
        },
      ],
    },
    footer: {
      ctaTitle: 'Protect your legacy.',
      ctaSubtitle: 'Join Vinifica.',
      ctaDescription: 'Be part of the first winemakers to access premium traceability with simple and verifiable technology.',
      ctaButton: 'Early Access — Join Now',
      tagline: 'Premium traceability for winemakers.',
      waitlist: 'Waitlist',
      contact: 'Contact',
      copyright: 'All rights reserved.',
      designedFor: 'Designed for winemakers who value excellence and transparency.',
    },
    waitlist: {
      title: 'Join the waitlist',
      description: 'Be among the first winemakers to access Vinifica and receive special launch conditions.',
      email: 'Email',
      emailPlaceholder: 'your@email.com',
      country: 'Country / Region',
      countries: {
        us: 'United States',
        cl: 'Chile',
        ar: 'Argentina',
        other: 'Other',
      },
      submit: 'Join the Waitlist',
      processing: 'Processing...',
      privacy: 'We will only use your email to notify you about Vinifica\'s launch.',
      privacySecond: 'We will not share your information with third parties.',
      successTitle: 'Welcome to Vinifica!',
      successMessage: 'We\'ve added you to the waitlist. We\'ll notify you by email when we launch.',
      backHome: 'Back to home',
      trustBadges: {
        priority: 'Priority access',
        special: 'Special conditions',
        noCommitment: 'No commitment',
      },
    },
  },
} as const;

export const getTranslation = (lang: Language) => translations[lang];

