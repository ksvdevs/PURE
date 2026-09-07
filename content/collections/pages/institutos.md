---
id: 070293c2-becf-464f-9928-dd5642843d0d
blueprint: page
title: Institutos
texto_bienvenida: 'Dirección de Institutos de Investigación'
author: 06ac68ab-d29f-41e9-9b9a-dd4da3996484
template: home
updated_by: 06ac68ab-d29f-41e9-9b9a-dd4da3996484
updated_at: 1788491028
titulo_pagina: 'Dirección de Institutos de Investigación - VRIN UNAMBA'
block_types:
  -
    id: lkc86wjr
    nombre_completo: 'DR. Ecler Mamani Vilca'
    cargo_direccion: 'Director de Institutos de Investigación'
    correo: INSTITUTOS@UNAMBA.EDU.PE
    direccion_oficina: '2° PISO BIBLIOTECA GENERAL.'
    horario: '8:00 A.M. – 1:00 PM. Y 2:00 PM. – 3:30 PM.'
    imagen: fotos_vrin_redimensionado/mir_2083.jpg
    template: |-
      <section class="dir-page">
        <nav class="dir-breadcrumb" aria-label="Migas de pan">
          <a href="/">Inicio</a>
          <span class="sep" aria-hidden="true">/</span>
          <span aria-current="page">Dirección de Institutos de Investigación</span>
        </nav>
        
        <!-- Cabecera: título y subtítulo con el sistema compartido -->
        <header class="vrin-page-head">
          <h1 class="vrin-page-title">Dirección de Institutos de Investigación</h1>
          <p class="vrin-page-subtitle">
            Promoviendo la excelencia académica, la innovación científica y el desarrollo tecnológico a través de la gestión estratégica de nuestros institutos.
        </header>

        <div class="dir-grid">
          <div class="dir-main reveal">
            <h2>Sobre la Oficina</h2>
            <p>La Dirección de Institutos de Investigación es el órgano de línea dependiente del Vicerrectorado de Investigación, responsable de dirigir, coordinar y supervisar los institutos de investigación de la universidad, articulando el trabajo de los investigadores con la formación de estudiantes en la producción de conocimiento científico.</p>
            <p>Nuestro enfoque se centra en la articulación de la producción científica con las necesidades regionales y nacionales, asegurando que cada instituto cuente con el respaldo institucional necesario para alcanzar estándares internacionales de competitividad.</p>

            <h2>Funciones Principales</h2>
            <ul class="dir-funciones">
              <li>Proponer al Vicerrectorado de Investigación las políticas, reglamentos y normas de funcionamiento de los institutos.</li>
              <li>Ejecutar proyectos de investigación en base a las líneas establecidas por el Vicerrectorado Institucional.</li>
              <li>Organizar actividades de difusión del conocimiento y los resultados de las investigaciones.</li>
              <li>Promover y gestionar la generación de conocimientos.</li>
              <li>Gestionar la participación en fondos de investigación.</li>
              <li>Promover entre los miembros de la comunidad universitaria el desarrollo del trabajo de investigación para ser publicados.</li>
              <li>Administrar un registro de las publicaciones oficiales realizadas por la universidad.</li>
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
