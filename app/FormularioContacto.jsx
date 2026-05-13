"use client";

import { useState } from "react";
import contactoStyles from "./contacto.module.css";

export default function FormularioContacto() {
  const [estado, setEstado] = useState("idle");

  async function manejarEnvio(e) {
    e.preventDefault();
    setEstado("enviando");

    const datos = new FormData(e.target);

    try {
      const respuesta = await fetch("https://formspree.io/f/xgodqpzq", {
        method: "POST",
        body: datos,
        headers: { Accept: "application/json" },
      });

      if (respuesta.ok) {
        setEstado("ok");
        e.target.reset();
      } else {
        setEstado("error");
      }
    } catch {
      setEstado("error");
    }
  }

  if (estado === "ok") {
    return (
      <div className={contactoStyles.formulario}>
        <div className={contactoStyles.mensajeOk}>
          <div className={contactoStyles.mensajeTitulo}>¡Mensaje enviado!</div>
          <p className={contactoStyles.mensajeTexto}>
            Te responderemos en menos de 24 horas. Gracias por confiar en Muverox.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form className={contactoStyles.formulario} onSubmit={manejarEnvio}>
      <input type="text" name="nombre" placeholder="Tu nombre" className={contactoStyles.input} required />
      <input type="email" name="email" placeholder="Tu email" className={contactoStyles.input} required />
      <textarea name="mensaje" placeholder="Cuéntanos brevemente tu proyecto..." className={contactoStyles.textarea} required></textarea>
      <button type="submit" className={contactoStyles.btnEnviar} disabled={estado === "enviando"}>
        {estado === "enviando" ? "Enviando..." : "Enviar mensaje"}
      </button>
      {estado === "error" && (
        <p className={contactoStyles.mensajeError}>
          Algo ha fallado. Escríbenos a hola@muverox.com o inténtalo de nuevo.
        </p>
      )}
    </form>
  );
}