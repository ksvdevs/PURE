---
id: 1e240fc8-59d5-4701-aeab-d14dd9afe51c
blueprint: page
title: Produccion
texto_bienvenida: 'Dirección de Producción de Bienes y Servicios'
author: 06ac68ab-d29f-41e9-9b9a-dd4da3996484
template: home
updated_by: 06ac68ab-d29f-41e9-9b9a-dd4da3996484
updated_at: 1788810306
titulo_pagina: 'Dirección de Producción de Bienes y Servicios - VRIN UNAMBA'
block_types:
  -
    id: lkdgq6ld
    imagen_director: dr_ivan.jpg
    nombre_director: 'Dr. Julio Ivan Cruz Colque'
    direccion_oficina: 'Pasaje Juristas S/N - Referencia: Al costado de la Corte'
    imagen_ci: direcciones/produccion/idiomas.png
    nombre_ci: 'C.P.C. Dina E. Trujillo Huaysara'
    direccion_oficina_ci: 'Pasaje Juristas S/N - Referencia: Al costado de la Corte'
    horario_ci: '8:00 a.m. – 1:00 pm. y 2:00 pm. – 3:30 pm.'
    imagen_cii: direcciones/produccion/informatica.png
    nombre_cii: 'Ing. Aurelio Antezana Matensio'
    direccion_oficina_cii: 'Pasaje Juristas S/N - Referencia: Al costado de la Corte'
    horario_cii: '8:00 a.m. – 1:00 pm. y 2:00 pm. – 3:30 pm.'
    imagen_ce: direcciones/produccion/experimental.png
    nombre_ce: 'Luis Gregorio Ibañez Trelles'
    direccion_oficina_ce: '2° Piso Biblioteca General'
    horario_ce: '8:00 a.m. – 1:00 pm. y 2:00 pm. – 3:30 pm.'
    template:
      code: |-
        <section class="dir-page">
          <nav class="dir-breadcrumb" aria-label="Migas de pan">
            <a href="/">Inicio</a>
            <span class="sep" aria-hidden="true">/</span>
            <span aria-current="page">Dirección de Producción de Bienes y Servicios</span>
          </nav>
          
          <!-- Cabecera: título y subtítulo con el sistema compartido -->
          <header class="vrin-page-head">
            <h1 class="vrin-page-title">Dirección de Producción de Bienes y Servicios</h1>
            <p class="vrin-page-subtitle">
              Generando bienes y servicios de calidad que consolidan la relación de la universidad con su entorno y fortalecen su sostenibilidad institucional.
            </p>
          </header>

          <div class="dir-grid">
            <div class="dir-main reveal">
              <h2>Sobre la Oficina</h2>
              <p>La Dirección de Producción de Bienes y Servicios es el órgano de línea dependiente del Vicerrectorado de Investigación, responsable de planificar, organizar y supervisar la producción de bienes y la prestación de servicios que la universidad brinda a la comunidad, aprovechando los resultados de la investigación, el desarrollo y la innovación.</p>
              <p>Nuestro enfoque se centra en la articulación de la producción científica y tecnológica con las necesidades regionales y nacionales, asegurando que cada centro a su cargo cuente con el respaldo institucional necesario para ofrecer servicios de calidad con estándares de competitividad.</p>

              <h2>Funciones Principales</h2>
              <ul class="dir-funciones">
                <li>Proponer al Vicerrectorado de Investigación las políticas, reglamentos y normas para la producción de bienes y servicios de la universidad.</li>
                <li>Planificar, organizar y ejecutar la producción de bienes y la prestación de servicios especializados a la comunidad.</li>
                <li>Administrar y supervisar los centros de producción a cargo de la universidad.</li>
                <li>Promover la generación de recursos para la universidad a través de la producción de bienes y de la prestación de servicios derivados de la investigación y el desarrollo.</li>
                <li>Organizar actividades de difusión de los bienes y servicios que ofrece la universidad.</li>
                <li>Gestionar la participación en fondos y concursos para el financiamiento de la producción universitaria.</li>
                <li>Administrar un registro oficial de los bienes producidos y de los servicios prestados por la universidad.</li>
                <li>Otras funciones que le asigne el Vicerrectorado de Investigación.</li>
              </ul>
            </div>

            <aside class="dir-sidebar">
              <article class="dir-card reveal" aria-label="Datos del director">
                <img class="dir-director-foto" src="{{ imagen_director | url }}" alt="Fotografía de {{ nombre_director }}, {{ cargo_director }}">
                <h3 class="dir-director-nombre">{{ nombre_director }}</h3>
                <p class="dir-director-cargo">{{ cargo_director }}</p>
                <hr class="dir-divider">
                <div class="dir-meta">
                  {{ if direccion_oficina }}
                  <div class="dir-meta-item">
                    <span class="dir-meta-icon"><i class="fa fa-map-marker" aria-hidden="true"></i></span>
                    <div>
                      <span class="dir-meta-label">Oficina</span>
                      <span class="dir-meta-value">{{ direccion_oficina }}</span>
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
                </div>
              </article>

              <article class="dir-card reveal" aria-label="Horario de atención">
                <h3 class="dir-horario-titulo"><i class="fa fa-clock-o" aria-hidden="true"></i> Horario de Atención</h3>
                <p class="dir-dias">Lunes – Viernes</p>
                {{ if horario_ci | contains:' Y ' }}
                <div class="dir-horario-filas">
                  <div class="dir-horario-fila">
                    <span class="dir-horario-turno"><span class="dir-dot dir-dot--manana"></span>Mañana</span>
                    <span class="dir-horario-hora">{{ horario_ci | explode:' Y ' | first }}</span>
                  </div>
                  <div class="dir-horario-fila">
                    <span class="dir-horario-turno"><span class="dir-dot dir-dot--tarde"></span>Tarde</span>
                    <span class="dir-horario-hora">{{ horario_ci | explode:' Y ' | last }}</span>
                  </div>
                </div>
                {{ else }}
                <div class="dir-horario-filas">
                  <div class="dir-horario-fila">
                    <span class="dir-horario-turno"><span class="dir-dot dir-dot--manana"></span>Atención</span>
                    <span class="dir-horario-hora">{{ horario_ci }}</span>
                  </div>
                </div>
                {{ /if }}
                <img class="dir-oficina-foto" src="/assets/direcciones/produccion/produccion.jpg" alt="Sede de la Dirección de Producción de Bienes y Servicios" loading="lazy">
              </article>
            </aside>
          </div>
        </section>
      mode: htmlmixed
    type: Director_jefes_produccion_bienes_y_servicios
    enabled: true
    cargo_director: 'Director de Producción de Bienes y Servicios'
template_imagen_fondo:
  code: null
  mode: htmlmixed
modal:
  code: null
  mode: htmlmixed
estado: false
---
