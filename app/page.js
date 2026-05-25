import footerStyles from "./footer.module.css";
import contactoStyles from "./contacto.module.css";
import sobreStyles from "./sobre.module.css";
import precStyles from "./precios.module.css";
import procStyles from "./proceso.module.css";
import servStyles from "./servicios.module.css";
import navStyles from "./nav.module.css";
import styles from "./hero.module.css";
import FormularioContacto from "./FormularioContacto";

export default function Home() {
  return (
    <main>
      <nav className={navStyles.nav}>
        <a href="#" className={navStyles.logo}>
          <span className={navStyles.logoM}>M</span>uverox
        </a>
        <ul className={navStyles.enlaces}>
          <li><a href="#servicios" className={navStyles.enlace}>Servicios</a></li>
          <li><a href="#proceso" className={navStyles.enlace}>Proceso</a></li>
          <li><a href="#precios" className={navStyles.enlace}>Planes</a></li>
          <li><a href="#contacto" className={navStyles.enlace}>Contacto</a></li>
        </ul>
        <a href="#contacto" className={navStyles.btnNav}>Habla con nosotros</a>
      </nav>

      <section className={styles.hero}>
        <span className={styles.badge}>Agencia Digital</span>
        <h1 className={styles.titulo}>
          Tu negocio merece <span className={styles.destacar}>DESTACAR</span> en internet
        </h1>
        <p className={styles.subtitulo}>
          Diseñamos webs que venden y automatizamos la comunicación con tus clientes.
          Para pymes que quieren crecer en internet.
        </p>
        <div className={styles.botones}>
          <button className={styles.btnPrimario}>Pedir presupuesto gratis</button>
          <button className={styles.btnSecundario}>Ver servicios</button>
        </div>
        <div className={styles.stats}>
          <div><div className={styles.statValor}>24h</div><div className={styles.statLabel}>Respuesta</div></div>
          <div><div className={styles.statValor}>100%</div><div className={styles.statLabel}>Diseño propio</div></div>
          <div><div className={styles.statValor}>Next.js</div><div className={styles.statLabel}>Tecnología</div></div>
          <div><div className={styles.statValor}>1 año</div><div className={styles.statLabel}>Soporte</div></div>
        </div>
      </section>

      <section id="servicios" className={servStyles.seccion}>
        <h2 className={servStyles.tituloSeccion}>Lo que hacemos</h2>
        <p className={servStyles.subtituloSeccion}>
          Diseño web profesional y automatización para que tu negocio funcione las 24 horas sin que tú tengas que estar pendiente.
        </p>
        <div className={servStyles.grid}>
          <div className={servStyles.tarjeta}>
            <h3 className={servStyles.tituloTarjeta}>Diseño web</h3>
            <p className={servStyles.descTarjeta}>Landings, webs corporativas y tiendas online a medida.</p>
            <ul className={servStyles.listaPuntos}>
              <li className={servStyles.punto}><span className={servStyles.checkDorado}>✓</span>Landings de alta conversión</li>
              <li className={servStyles.punto}><span className={servStyles.checkDorado}>✓</span>Webs corporativas a medida</li>
              <li className={servStyles.punto}><span className={servStyles.checkDorado}>✓</span>Tiendas online (e-commerce)</li>
              <li className={servStyles.punto}><span className={servStyles.checkDorado}>✓</span>100% responsive (móvil primero)</li>
              <li className={servStyles.punto}><span className={servStyles.checkDorado}>✓</span>SEO básico incluido</li>
              <li className={servStyles.punto}><span className={servStyles.checkDorado}>✓</span>Hosting y dominio configurados</li>
            </ul>
          </div>
          <div className={servStyles.tarjeta}>
            <h3 className={servStyles.tituloTarjeta}>Automatización</h3>
            <p className={servStyles.descTarjeta}>Chatbots, citas online y respuestas automáticas para WhatsApp.</p>
            <ul className={servStyles.listaPuntos}>
              <li className={servStyles.punto}><span className={servStyles.checkDorado}>✓</span>Chatbot 24/7 en tu web</li>
              <li className={servStyles.punto}><span className={servStyles.checkDorado}>✓</span>Email marketing automático</li>
              <li className={servStyles.punto}><span className={servStyles.checkDorado}>✓</span>Sistema de citas online</li>
              <li className={servStyles.punto}><span className={servStyles.checkDorado}>✓</span>WhatsApp Business integrado</li>
              <li className={servStyles.punto}><span className={servStyles.checkDorado}>✓</span>CRM básico para clientes</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="proceso" className={procStyles.seccion}>
        <h2 className={procStyles.tituloSeccion}>Cómo trabajamos</h2>
        <p className={procStyles.subtituloSeccion}>
          Un proceso claro y sin sorpresas. De la primera llamada al lanzamiento, sabes exactamente qué va a pasar.
        </p>
        <div className={procStyles.grid}>
          <div className={procStyles.paso}><div className={procStyles.numero}>01</div><h3 className={procStyles.tituloPaso}>Charlamos</h3><p className={procStyles.descPaso}>Nos cuentas tu negocio y qué necesitas. Sin compromiso.</p></div>
          <div className={procStyles.paso}><div className={procStyles.numero}>02</div><h3 className={procStyles.tituloPaso}>Diseñamos</h3><p className={procStyles.descPaso}>Te enseñamos cómo va a quedar antes de tocar una línea de código.</p></div>
          <div className={procStyles.paso}><div className={procStyles.numero}>03</div><h3 className={procStyles.tituloPaso}>Desarrollamos</h3><p className={procStyles.descPaso}>Construimos tu web con tecnología moderna y rápida.</p></div>
          <div className={procStyles.paso}><div className={procStyles.numero}>04</div><h3 className={procStyles.tituloPaso}>Lanzamos</h3><p className={procStyles.descPaso}>Tu web online + 1 año de soporte incluido.</p></div>
        </div>
      </section>

      <section id="precios" className={precStyles.seccion}>
        <h2 className={precStyles.tituloSeccion}>Nuestros planes</h2>
        <p className={precStyles.subtituloSeccion}>Cada proyecto es único. Cuéntanos el tuyo y te preparamos un presupuesto cerrado, sin sorpresas.</p>
        <div className={precStyles.grid}>

          <div className={precStyles.paquete}>
            <h3 className={precStyles.nombrePaquete}>Landing</h3>
            <div className={precStyles.desde}>1 página · ideal para empezar</div>
            <ul className={precStyles.listaIncluido}>
              <li className={precStyles.itemIncluido}><span style={{ color: "#D4AF37" }}>✓</span> 1 página optimizada</li>
              <li className={precStyles.itemIncluido}><span style={{ color: "#D4AF37" }}>✓</span> Diseño a medida</li>
              <li className={precStyles.itemIncluido}><span style={{ color: "#D4AF37" }}>✓</span> Formulario de contacto</li>
              <li className={precStyles.itemIncluido}><span style={{ color: "#D4AF37" }}>✓</span> Responsive (móvil)</li>
              <li className={precStyles.itemIncluido}><span style={{ color: "#D4AF37" }}>✓</span> 1 año de soporte</li>
            </ul>
            <a href="#contacto" className={precStyles.btnPaquete}>Hablemos de tu proyecto</a>
          </div>

          <div className={`${precStyles.paquete} ${precStyles.destacado}`}>
            <span className={precStyles.badgePopular}>Más popular</span>
            <h3 className={precStyles.nombrePaquete}>Web Pro</h3>
            <div className={precStyles.desde}>Hasta 7 páginas · para negocios en crecimiento</div>
            <ul className={precStyles.listaIncluido}>
              <li className={precStyles.itemIncluido}><span style={{ color: "#D4AF37" }}>✓</span> Hasta 7 páginas</li>
              <li className={precStyles.itemIncluido}><span style={{ color: "#D4AF37" }}>✓</span> Diseño premium a medida</li>
              <li className={precStyles.itemIncluido}><span style={{ color: "#D4AF37" }}>✓</span> Blog opcional</li>
              <li className={precStyles.itemIncluido}><span style={{ color: "#D4AF37" }}>✓</span> Formularios avanzados</li>
              <li className={precStyles.itemIncluido}><span style={{ color: "#D4AF37" }}>✓</span> SEO básico incluido</li>
              <li className={precStyles.itemIncluido}><span style={{ color: "#D4AF37" }}>✓</span> Google Analytics</li>
              <li className={precStyles.itemIncluido}><span style={{ color: "#D4AF37" }}>✓</span> 1 año de soporte</li>
            </ul>
            <a href="#contacto" className={precStyles.btnPaquete}>Hablemos de tu proyecto</a>
          </div>

          <div className={precStyles.paquete}>
            <h3 className={precStyles.nombrePaquete}>Premium</h3>
            <div className={precStyles.desde}>Web + automatización · la solución completa</div>
            <ul className={precStyles.listaIncluido}>
              <li className={precStyles.itemIncluido}><span style={{ color: "#D4AF37" }}>✓</span> Todo lo de Web Pro</li>
              <li className={precStyles.itemIncluido}><span style={{ color: "#D4AF37" }}>✓</span> Chatbot 24/7 con IA</li>
              <li className={precStyles.itemIncluido}><span style={{ color: "#D4AF37" }}>✓</span> WhatsApp Business integrado</li>
              <li className={precStyles.itemIncluido}><span style={{ color: "#D4AF37" }}>✓</span> Email marketing automático</li>
              <li className={precStyles.itemIncluido}><span style={{ color: "#D4AF37" }}>✓</span> Sistema de citas online</li>
              <li className={precStyles.itemIncluido}><span style={{ color: "#D4AF37" }}>✓</span> CRM básico para clientes</li>
              <li className={precStyles.itemIncluido}><span style={{ color: "#D4AF37" }}>✓</span> 1 año de soporte</li>
            </ul>
            <a href="#contacto" className={precStyles.btnPaquete}>Hablemos de tu proyecto</a>
          </div>

        </div>
      </section>

      <section className={sobreStyles.seccion}>
        <h2 className={sobreStyles.tituloSeccion}>Sobre nosotros</h2>
        <p className={sobreStyles.tagline}>
          Pequeños. Cercanos. Profesionales.
        </p>
        <p className={sobreStyles.descripcion}>
          Somos una agencia digital con un enfoque distinto: trabajamos como un equipo
          cercano, no como una multinacional. Combinamos tecnología moderna con un trato
          humano y presupuestos cerrados desde el primer día. Cuando trabajas con nosotros,
          sabes con quién hablas y qué vas a pagar.
        </p>
        <div className={sobreStyles.valores}>
          <div className={sobreStyles.valor}>
            <div className={sobreStyles.tituloValor}>Cercanía</div>
            <p className={sobreStyles.descValor}>
              Te atendemos personalmente, sin pasarte por 5 departamentos.
            </p>
          </div>
          <div className={sobreStyles.valor}>
            <div className={sobreStyles.tituloValor}>Tecnología moderna</div>
            <p className={sobreStyles.descValor}>
              Next.js, Vercel, IA. Lo que usan las grandes empresas, a tu alcance.
            </p>
          </div>
          <div className={sobreStyles.valor}>
            <div className={sobreStyles.tituloValor}>Presupuesto cerrado</div>
            <p className={sobreStyles.descValor}>
              Te decimos el precio antes de empezar. Sin sorpresas a final de mes.
            </p>
          </div>
        </div>
      </section>

      <section id="contacto" className={contactoStyles.seccion}>
        <h2 className={contactoStyles.tituloSeccion}>Hablemos</h2>
        <p className={contactoStyles.subtituloSeccion}>
          Cuéntanos sobre tu proyecto. Respondemos en menos de 24 horas
          con un presupuesto cerrado y sin compromiso.
        </p>
        <div className={contactoStyles.grid}>
          <div className={contactoStyles.info}>
            <div className={contactoStyles.bloqueInfo}>
              <div className={contactoStyles.etiquetaInfo}>Email</div>
              <div className={contactoStyles.valorInfo}>
                <a href="mailto:hola@muverox.com">hola@muverox.com</a>
              </div>
            </div>
            <div className={contactoStyles.bloqueInfo}>
              <div className={contactoStyles.etiquetaInfo}>Respuesta</div>
              <div className={contactoStyles.valorInfo}>Menos de 24 horas laborables</div>
            </div>
            <div className={contactoStyles.bloqueInfo}>
              <div className={contactoStyles.etiquetaInfo}>Cobertura</div>
              <div className={contactoStyles.valorInfo}>España y Latinoamérica</div>
            </div>
          </div>
          <FormularioContacto />
        </div>
      </section>

      <footer className={footerStyles.footer}>
        <div className={footerStyles.contenido}>
          <div className={footerStyles.logo}>
            <span className={footerStyles.logoM}>M</span>uverox
          </div>
          <ul className={footerStyles.enlaces}>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#proceso">Proceso</a></li>
            <li><a href="#precios">Planes</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </div>
        <div className={footerStyles.copyright}>
          © 2026 Muverox · Agencia digital
        </div>
      </footer>
    </main>
  );
}