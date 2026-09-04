---
id: 9f45291d-4ad8-4d2c-9d27-6811235bf2c6
blueprint: page
title: 'Unidades de Investigación'
titulo_pagina: 'Unidades de Investigación - VRIN UNAMBA'
texto_bienvenida: 'Unidades de Investigación'
author: 06ac68ab-d29f-41e9-9b9a-dd4da3996484
template_imagen_fondo:
  code: null
  mode: htmlmixed
modal:
  code: null
  mode: htmlmixed
updated_by: 06ac68ab-d29f-41e9-9b9a-dd4da3996484
updated_at: 1786649527
block_types:
  -
    id: lkuttke4
    template:
      code: |-
        <!-- Breadcrumb -->
        <nav class="grupos-breadcrumb" aria-label="Migas de pan">
            <ol class="grupos-breadcrumb__list">
                <li class="grupos-breadcrumb__item"><a href="/">Inicio</a></li>
                <li class="grupos-breadcrumb__item" aria-current="page">Unidades de Investigación</li>
            </ol>
        </nav>

        <div class="unidades-container">
          <!-- Cabecera de página -->
          <header class="unidades-page-head">
            <h1 class="unidades-page-title">Unidades de Investigación</h1>
            <p class="unidades-page-subtitle">La Unidad de Investigación coordina y fomenta la investigación institucional, promoviendo la generación de conocimiento y su vinculación con los desafíos regionales y sociales.</p>
          </header>

          <!-- Funciones Section: tarjeta colapsable -->
          <section class="funciones-section" aria-labelledby="funciones-title">
            <div class="funciones-card reveal">
              <button type="button" class="funciones-toggle" aria-expanded="true" aria-controls="funciones-body">
                <span class="funciones-title" id="funciones-title" role="heading" aria-level="2">Funciones de las Unidades de Investigación</span>
                <i class="fa fa-chevron-down funciones-chevron" aria-hidden="true"></i>
              </button>
              <div class="funciones-body" id="funciones-body">
                <div class="funciones-body-inner">
                  <ol class="funciones-grid">
                    <li class="funciones-item">
                      <span class="funciones-letter" aria-hidden="true">a)</span>
                      <span class="funciones-text">Conducir el proceso de investigación, desarrollo e innovación tecnológica en docentes, estudiantes y graduados universitarios adscritos a la facultad.</span>
                    </li>
                    <li class="funciones-item">
                      <span class="funciones-letter" aria-hidden="true">b)</span>
                      <span class="funciones-text">Generar mecanismos que incentiven la realización de investigaciones y su publicación en revistas indexadas por parte de docentes, investigadores y estudiantes.</span>
                    </li>
                    <li class="funciones-item">
                      <span class="funciones-letter" aria-hidden="true">c)</span>
                      <span class="funciones-text">Liderar los procesos de generación, revisión y medición de las líneas de investigación.</span>
                    </li>
                    <li class="funciones-item">
                      <span class="funciones-letter" aria-hidden="true">d)</span>
                      <span class="funciones-text">Vincular a la Unidad de Investigación con los organismos especializados de investigación a nivel universitario, nacional y/o extranjero, previa coordinación de la actividad.</span>
                    </li>
                    <li class="funciones-item">
                      <span class="funciones-letter" aria-hidden="true">e)</span>
                      <span class="funciones-text">Promover la publicación de los mejores trabajos de investigación.</span>
                    </li>
                    <li class="funciones-item">
                      <span class="funciones-letter" aria-hidden="true">f)</span>
                      <span class="funciones-text">Registrar los grupos de investigación y medir los indicadores de producción científica.</span>
                    </li>
                    <li class="funciones-item">
                      <span class="funciones-letter" aria-hidden="true">g)</span>
                      <span class="funciones-text">Coordinar, monitorizar y evaluar el archivo documental de investigaciones en el repositorio de la UNAMBA.</span>
                    </li>
                    <li class="funciones-item">
                      <span class="funciones-letter" aria-hidden="true">h)</span>
                      <span class="funciones-text">Otras funciones que señale el Decano, Consejo de Facultad, el Reglamento del Instituto de Investigación y su propio Reglamento.</span>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </section>

          <!-- Directorio Section -->
          <section class="directorio-section" aria-labelledby="directorio-title-main">
            <h2 class="directorio-title-main" id="directorio-title-main">Comité Directivo de Investigación</h2>
            <p class="directorio-subtitle-main">Conoce a las autoridades encargadas de dirigir y promover la investigación en cada una de nuestras unidades académicas.</p>

            <!-- Grid de tarjetas: 3 columnas en desktop; la segunda fila queda alineada a la izquierda -->
            <div class="directorio-grid-mixed">
              {{ collection:dir_unidades sort="title:asc" }}
              <article class="directorio-card reveal">
                <h3 class="directorio-card-title">{{ title }}</h3>
                <div class="directorio-author-block">
                  <img src="{{ imagen_director_unidades }}" alt="Fotografía de {{ nombre_director_unidades }}" class="directorio-avatar" loading="lazy">
                  <div class="directorio-author-text">
                    <span class="directorio-label">
                      {{ if nombre_director_unidades | contains('Esther') or nombre_director_unidades | contains('Silvia') }}DIRECTORA{{ else }}DIRECTOR{{ /if }}
                    </span>
                    <span class="directorio-name">{{ nombre_director_unidades }}</span>
                  </div>
                </div>
                <div class="directorio-contact-list">
                  {{ if link_ctvitae }}
                  <div class="directorio-contact-item">
                    <i class="fa fa-id-card-o" aria-hidden="true"></i>
                    <a href="{{ link_ctvitae }}" target="_blank" rel="noopener noreferrer" class="directorio-action-link">Ver CTI Vitae</a>
                  </div>
                  {{ /if }}
                  <div class="directorio-contact-item">
                    <i class="fa fa-envelope" aria-hidden="true"></i>
                    <a href="mailto:{{ correo }}">{{ correo }}</a>
                  </div>
                  <div class="directorio-contact-item">
                    <i class="fa fa-clock-o" aria-hidden="true"></i>
                    <span><strong>Horario de atención:</strong> 8:00 a.m. – 1:00 p.m. | 2:00 p.m. – 3:30 p.m.</span>
                  </div>
                </div>
                <div class="directorio-office-section">
                  <div class="directorio-contact-item directorio-office-text">
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                    <span><strong>Ubicación:</strong> {{ direccion_oficina }}</span>
                  </div>
                  {{ if oficina }}
                  {{ oficina }}
                  <div class="directorio-office-map-container">
                    <button type="button" class="directorio-office-map-link zoomable-map" data-zoom-src="{{ url }}" aria-label="Ampliar croquis de ubicación de la oficina">
                      <img src="{{ url }}" alt="Croquis de ubicación de la oficina de la unidad" class="directorio-office-map-img" loading="lazy">
                    </button>
                  </div>
                  {{ /oficina }}
                  {{ /if }}
                </div>
              </article>
              {{ /collection:dir_unidades }}
            </div>
          </section>
        </div>
      mode: htmlmixed
    type: template
    enabled: true
---
