---
id: fdcd248b-7441-4525-9340-fe4adcac426d
blueprint: page
title: Incubadora
texto_bienvenida: 'Dirección de Incubadora de Empresas'
author: 06ac68ab-d29f-41e9-9b9a-dd4da3996484
template: home
updated_by: 06ac68ab-d29f-41e9-9b9a-dd4da3996484
updated_at: 1788490906
titulo_pagina: 'Dirección de Incubadora de Empresas - VRIN UNAMBA'
block_types:
  -
    id: lkc3kwq7
    nombre_completo: 'Dr. Elio Nolasco Carbajal'
    cargo_direccion: 'Director de Incubadora de Empresas'
    correo: INCUBADORASDEEMPRESAS@UNAMBA.EDU.PE
    direccion_oficina: '2° PISO DE LA BIBLIOTECA GENERAL.'
    horario: '8:00 A.M. – 1:00 PM. Y 2:00 PM. – 3:30 PM.'
    imagen: direcciones/incubadora/elio.jpeg
    template: |-
      <section class="dir-page">
        <nav class="dir-breadcrumb" aria-label="Migas de pan">
          <a href="/">Inicio</a>
          <span class="sep" aria-hidden="true">/</span>
          <span aria-current="page">Dirección de Incubadora de Empresas</span>
        </nav>

        <!-- Cabecera: título y subtítulo con el sistema compartido -->
        <header class="vrin-page-head">
          <h1 class="vrin-page-title">Dirección de Incubadora de Empresas</h1>
          <p class="vrin-page-subtitle">
            Fomentando la cultura emprendedora y la innovación para transformar las ideas de nuestros estudiantes en empresas sostenibles de propiedad estudiantil.
          </p>
        </header>

        <div class="dir-grid">
          <div class="dir-main reveal">
            <h2>Sobre la Oficina</h2>
            <p>La Dirección de Incubadora de Empresas es el órgano de línea dependiente del Vicerrectorado de Investigación, responsable de dirigir, coordinar y promover la iniciativa de los estudiantes para la creación de pequeñas y microempresas de propiedad de los estudiantes.</p>
            <p>Nuestro enfoque se centra en el acompañamiento integral de los emprendedores universitarios, articulando la producción científica y tecnológica con las necesidades del entorno, asegurando que cada iniciativa cuente con el respaldo institucional necesario para alcanzar estándares de competitividad.</p>

            <h2>Funciones Principales</h2>
            <ul class="dir-funciones">
              <li>Proponer al Vicerrectorado de Investigación las políticas, reglamentos y normas para el fomento del emprendimiento universitario.</li>
              <li>Dirigir y coordinar el proceso de incubación de empresas de propiedad de los estudiantes, desde la idea de negocio hasta su consolidación.</li>
              <li>Organizar actividades de difusión, ferias y concursos de emprendimiento e innovación.</li>
              <li>Promover y gestionar la generación de conocimientos aplicados al desarrollo de nuevos negocios.</li>
              <li>Gestionar la participación en fondos concursables destinados al financiamiento de emprendimientos estudiantiles.</li>
              <li>Promover entre los miembros de la comunidad universitaria el desarrollo de planes de negocio para ser incubados.</li>
              <li>Administrar un registro oficial de las empresas incubadas y de los servicios brindados a los estudiantes.</li>
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
