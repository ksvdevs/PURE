---
id: 27710e9b-8865-48a8-a23d-1f44e115a480
blueprint: page
title: Innovacion
texto_bienvenida: 'Innovación y Transferencia Tecnológica'
author: 06ac68ab-d29f-41e9-9b9a-dd4da3996484
template: home
updated_by: 06ac68ab-d29f-41e9-9b9a-dd4da3996484
updated_at: 1788490944
titulo_pagina: 'Dirección de Innovación y Transferencia Tecnológica - VRIN UNAMBA'
block_types:
  -
    id: lkc5xwy6
    nombre_completo: 'Ing. Ebert Gomez Aiquipa'
    cargo_direccion: 'Director de Innovación y Transferencia Tecnológica'
    correo: TRANSFERENCIATECNOLOGICA@UNAMBA.EDU.PE
    direccion_oficina: '2° PISO DE LA BIBLIOTECA GENERAL.'
    horario: '8:00 A.M. – 1:00 PM. Y 2:00 PM. – 3:30 PM.'
    imagen: fotos_vrin_redimensionado/mir_2079.jpg
    template: |-
      <section class="dir-page">
        <nav class="dir-breadcrumb" aria-label="Migas de pan">
          <a href="/">Inicio</a>
          <span class="sep" aria-hidden="true">/</span>
          <span aria-current="page">Dirección de Innovación y Transferencia Tecnológica</span>
        </nav>
        <!-- Cabecera: título y subtítulo con el sistema compartido -->
        <header class="vrin-page-head">
          <h1 class="vrin-page-title">Dirección de Innovación y Transferencia Tecnológica</h1>
          <p class="vrin-page-subtitle">
            Impulsando la innovación, la protección de la propiedad intelectual y la transferencia de tecnología hacia el sector productivo y la sociedad.
          </p>
        </header>

        <div class="dir-grid">
          <div class="dir-main reveal">
            <h2>Sobre la Oficina</h2>
            <p>La Dirección de Innovación y Transferencia Tecnológica es el órgano de línea dependiente del Vicerrectorado de Investigación, responsable de promover la innovación, proteger los resultados de la investigación mediante registros de propiedad intelectual y facilitar su transferencia a la sociedad y al sector productivo.</p>
            <p>Nuestro enfoque se centra en la articulación de la producción científica con las necesidades regionales y nacionales, asegurando que cada desarrollo tecnológico cuente con el respaldo institucional necesario para alcanzar estándares internacionales de competitividad.</p>

            <h2>Funciones Principales</h2>
            <ul class="dir-funciones">
              <li>Proponer al Vicerrectorado de Investigación las políticas, reglamentos y normas para la protección de la propiedad intelectual y la transferencia tecnológica.</li>
              <li>Gestionar los registros de propiedad intelectual de la universidad: patentes, marcas de fábrica, derechos de autor y secretos empresariales.</li>
              <li>Promover y gestionar la transferencia de tecnología hacia el sector productivo y la sociedad.</li>
              <li>Organizar actividades de difusión del conocimiento, la innovación y los resultados transferibles de la investigación.</li>
              <li>Gestionar la participación en fondos concursables destinados a la innovación y el desarrollo tecnológico.</li>
              <li>Promover entre los miembros de la comunidad universitaria la generación de desarrollos tecnológicos transferibles.</li>
              <li>Administrar un inventario oficial de los desarrollos tecnológicos y de los registros de propiedad intelectual de la universidad.</li>
              <li>Otras funciones que le asigne el Vicerrectorado de Investigación.</li>
            </ul>
          </div>

          <aside class="dir-sidebar">
            <article class="dir-card reveal" aria-label="Datos del director">
              <img class="dir-director-foto" src="{{ imagen | url }}" alt="Fotografía de {{ nombre_completo }}, {{ cargo_direccion }}">
              <h3 class="dir-director-nombre">{{ nombre_completo }}</h3>
              <p class="dir-director-cargo">{{ cargo_direccion }}</p>
              <hr class="dir-divider">
              <div class="dir-meta">
                {{ if titulo_documento }}
                <div class="dir-meta-item">
                  <span class="dir-meta-icon"><i class="fa fa-file-text" aria-hidden="true"></i></span>
                  <div>
                    <span class="dir-meta-label">Documento oficial</span>
                    {{ if documento }}
                    <a class="dir-meta-value" href="{{ documento | url }}" target="_blank" rel="noopener">{{ titulo_documento }}</a>
                    {{ else }}
                    <span class="dir-meta-value">{{ titulo_documento }}</span>
                    {{ /if }}
                  </div>
                </div>
                {{ /if }}
                <div class="dir-meta-item">
                  <span class="dir-meta-icon"><i class="fa fa-flask" aria-hidden="true"></i></span>
                  <div>
                    <span class="dir-meta-label">Investigador</span>
                    <a class="dir-meta-value is-green" href="https://ctivitae.concytec.gob.pe/appDirectorioCTI/" target="_blank" rel="noopener">CTI Vitae (Concytec)</a>
                  </div>
                </div>
                {{ if correo }}
                <div class="dir-meta-item">
                  <span class="dir-meta-icon"><i class="fa fa-envelope" aria-hidden="true"></i></span>
                  <div>
                    <span class="dir-meta-label">Correo institucional</span>
                    <span class="dir-correo">
                      <a class="dir-meta-value" href="mailto:{{ correo }}">{{ correo }}</a>
                      <button type="button" class="dir-copy-btn" data-copy="{{ correo }}" aria-label="Copiar correo institucional"><i class="fa fa-copy" aria-hidden="true"></i></button>
                    </span>
                  </div>
                </div>
                {{ /if }}
              </div>
              {{ if correo }}
              <a class="dir-btn-contacto" href="mailto:{{ correo }}">Contactar Dirección <i class="fa fa-chevron-right" aria-hidden="true"></i></a>
              {{ /if }}
            </article>

            <article class="dir-card reveal" aria-label="Horario de atención">
              <h3 class="dir-horario-titulo"><i class="fa fa-clock-o" aria-hidden="true"></i> Horario de Atención</h3>
              <p class="dir-dias">Lunes – Viernes</p>
              {{ if horario | contains:' Y ' }}
              <div class="dir-horario-filas">
                <div class="dir-horario-fila">
                  <span class="dir-horario-turno"><span class="dir-dot dir-dot--manana"></span>Mañana</span>
                  <span class="dir-horario-hora">{{ horario | explode:' Y ' | first }}</span>
                </div>
                <div class="dir-horario-fila">
                  <span class="dir-horario-turno"><span class="dir-dot dir-dot--tarde"></span>Tarde</span>
                  <span class="dir-horario-hora">{{ horario | explode:' Y ' | last }}</span>
                </div>
              </div>
              {{ else }}
              <div class="dir-horario-filas">
                <div class="dir-horario-fila">
                  <span class="dir-horario-turno"><span class="dir-dot dir-dot--manana"></span>Atención</span>
                  <span class="dir-horario-hora">{{ horario }}</span>
                </div>
              </div>
              {{ /if }}
              {{ if direccion_oficina }}
              <hr class="dir-divider">
              <p class="dir-oficina"><i class="fa fa-map-marker" aria-hidden="true"></i><span>{{ direccion_oficina }}</span></p>
              {{ /if }}
              <img class="dir-oficina-foto" src="/assets/a_home_otros/bg6.jpg" alt="Biblioteca Central de la UNAMBA, sede de la dirección" loading="lazy">
            </article>
          </aside>
        </div>
      </section>
    type: director_direcciones_vrin
    enabled: true
template_imagen_fondo:
  code: null
  mode: htmlmixed
modal:
  code: null
  mode: htmlmixed
estado: false
---
