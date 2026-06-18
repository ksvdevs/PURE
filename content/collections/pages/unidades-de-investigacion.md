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
updated_at: 1781726333
block_types:
  -
    id: lkuttke4
    template:
      code: |-
        <div class="dir-page-container">
          <!-- Hero Section -->
          <header class="dir-hero">
            <div class="dir-hero-content">
              <h1 class="dir-hero-title">Unidades de Investigación</h1>
              <p class="dir-hero-subtitle">La Unidad de Investigación es el órgano académico que coordina, fomenta y conduce el desarrollo de la actividad investigativa institucional en las diferentes facultades. Su propósito es vincular el conocimiento científico con los desafíos regionales y nacionales, bajo la dirección del Vicerrectorado de Investigación.</p>
            </div>
          </header>

          <!-- Funciones Section -->
          <div class="funciones-section unidades-container">
            <div class="funciones-card reveal">
              <h2 class="funciones-title">Funciones de la Unidad de Investigación</h2>
              <div class="funciones-grid">
                <div class="funciones-item">
                  <span class="funciones-letter">a)</span>
                  <span class="funciones-text">Conducir el proceso de investigación, desarrollo e innovación tecnológica en docentes, estudiantes y graduados universitarios adscritos a la facultad.</span>
                </div>
                <div class="funciones-item">
                  <span class="funciones-letter">b)</span>
                  <span class="funciones-text">Generar mecanismos que incentiven la realización de investigaciones y su publicación en revistas indexadas por parte de docentes, investigadores y estudiantes.</span>
                </div>
                <div class="funciones-item">
                  <span class="funciones-letter">c)</span>
                  <span class="funciones-text">Liderar los procesos de generación, revisión y medición de las líneas de investigación.</span>
                </div>
                <div class="funciones-item">
                  <span class="funciones-letter">d)</span>
                  <span class="funciones-text">Vincular a la Unidad de Investigación con los organismos especializados de investigación a nivel universitario, nacional y/o extranjero, previa coordinación de la actividad.</span>
                </div>
                <div class="funciones-item">
                  <span class="funciones-letter">e)</span>
                  <span class="funciones-text">Promover la publicación de los mejores trabajos de investigación.</span>
                </div>
                <div class="funciones-item">
                  <span class="funciones-letter">f)</span>
                  <span class="funciones-text">Registrar los grupos de investigación y medir los indicadores de producción científica.</span>
                </div>
                <div class="funciones-item">
                  <span class="funciones-letter">g)</span>
                  <span class="funciones-text">Coordinar, monitorizar y evaluar el archivo documental de investigaciones en el repositorio de la UNAMBA.</span>
                </div>
                <div class="funciones-item">
                  <span class="funciones-letter">h)</span>
                  <span class="funciones-text">Otras funciones que señale el Decano, Consejo de Facultad, el Reglamento del Instituto de Investigación y su propio Reglamento.</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Directorio Section -->
          <section class="directorio-section">
            <div class="unidades-container">
              <h2 class="directorio-title-main">Comité Directivo de Investigación</h2>
              <p class="directorio-subtitle-main">Conoce a las autoridades encargadas de dirigir y promover la investigación en cada una de nuestras unidades académicas.</p>
              
              <!-- Grid containing all 5 cards, flowing into 3 columns (Row 1: 3 cards, Row 2: 2 cards centered) -->
              <div class="directorio-grid-mixed">
                {{ entry id="2c936a98-9d67-4bde-8233-ddaa237e9867" }}
                <div class="directorio-card reveal">
                  <h3 class="directorio-card-title">{{ title }}</h3>
                  <div class="directorio-author-block">
                    <img src="/assets/{{ imagen_director_unidades }}" alt="{{ nombre_director_unidades }}" class="directorio-avatar">
                    <div class="directorio-author-text">
                      <span class="directorio-label">DIRECTORA</span>
                      <span class="directorio-name">{{ nombre_director_unidades }}</span>
                    </div>
                  </div>
                  <div class="directorio-contact-list">
                    <div class="directorio-contact-item">
                      <i class="fa fa-envelope"></i>
                      <a href="mailto:{{ correo }}">{{ correo }}</a>
                    </div>
                    <div class="directorio-contact-item">
                      <i class="fa fa-map-marker"></i>
                      <span>{{ direccion_oficina }}</span>
                    </div>
                    <div class="directorio-contact-item">
                      <i class="fa fa-clock-o"></i>
                      <span>8:00 a.m. – 1:00 p.m. | 2:00 p.m. – 5:30 p.m.</span>
                    </div>
                  </div>
                </div>
                {{ /entry }}

                {{ entry id="e06a302c-f0d6-4722-8e6c-341635cb9c0c" }}
                <div class="directorio-card reveal">
                  <h3 class="directorio-card-title">{{ title }}</h3>
                  <div class="directorio-author-block">
                    <img src="/assets/{{ imagen_director_unidades }}" alt="{{ nombre_director_unidades }}" class="directorio-avatar">
                    <div class="directorio-author-text">
                      <span class="directorio-label">DIRECTOR</span>
                      <span class="directorio-name">{{ nombre_director_unidades }}</span>
                    </div>
                  </div>
                  <div class="directorio-contact-list">
                    <div class="directorio-contact-item">
                      <i class="fa fa-envelope"></i>
                      <a href="mailto:{{ correo }}">{{ correo }}</a>
                    </div>
                    <div class="directorio-contact-item">
                      <i class="fa fa-map-marker"></i>
                      <span>{{ direccion_oficina }}</span>
                    </div>
                    <div class="directorio-contact-item">
                      <i class="fa fa-clock-o"></i>
                      <span>8:00 a.m. – 1:00 p.m. | 2:00 p.m. – 5:30 p.m.</span>
                    </div>
                  </div>
                </div>
                {{ /entry }}

                {{ entry id="0442eee1-1b10-44d5-a1e0-d363cf59f755" }}
                <div class="directorio-card reveal">
                  <h3 class="directorio-card-title">{{ title }}</h3>
                  <div class="directorio-author-block">
                    <img src="/assets/{{ imagen_director_unidades }}" alt="{{ nombre_director_unidades }}" class="directorio-avatar">
                    <div class="directorio-author-text">
                      <span class="directorio-label">DIRECTOR</span>
                      <span class="directorio-name">{{ nombre_director_unidades }}</span>
                    </div>
                  </div>
                  <div class="directorio-contact-list">
                    <div class="directorio-contact-item">
                      <i class="fa fa-envelope"></i>
                      <a href="mailto:{{ correo }}">{{ correo }}</a>
                    </div>
                    <div class="directorio-contact-item">
                      <i class="fa fa-map-marker"></i>
                      <span>{{ direccion_oficina }}</span>
                    </div>
                    <div class="directorio-contact-item">
                      <i class="fa fa-clock-o"></i>
                      <span>8:00 a.m. – 1:00 p.m. | 2:00 p.m. – 5:30 p.m.</span>
                    </div>
                  </div>
                </div>
                {{ /entry }}

                {{ entry id="65cc41bc-b45f-4c54-9a00-323ad42f6964" }}
                <div class="directorio-card reveal">
                  <h3 class="directorio-card-title">{{ title }}</h3>
                  <div class="directorio-author-block">
                    <img src="/assets/{{ imagen_director_unidades }}" alt="{{ nombre_director_unidades }}" class="directorio-avatar">
                    <div class="directorio-author-text">
                      <span class="directorio-label">DIRECTORA</span>
                      <span class="directorio-name">{{ nombre_director_unidades }}</span>
                    </div>
                  </div>
                  <div class="directorio-contact-list">
                    <div class="directorio-contact-item">
                      <i class="fa fa-envelope"></i>
                      <a href="mailto:{{ correo }}">{{ correo }}</a>
                    </div>
                    <div class="directorio-contact-item">
                      <i class="fa fa-map-marker"></i>
                      <span>{{ direccion_oficina }}</span>
                    </div>
                    <div class="directorio-contact-item">
                      <i class="fa fa-clock-o"></i>
                      <span>8:00 a.m. – 1:00 p.m. | 2:00 p.m. – 5:30 p.m.</span>
                    </div>
                  </div>
                </div>
                {{ /entry }}

                {{ entry id="a5c7b05e-3866-4ece-b3c5-66d98ba96bd0" }}
                <div class="directorio-card reveal">
                  <h3 class="directorio-card-title">{{ title }}</h3>
                  <div class="directorio-author-block">
                    <img src="/assets/{{ imagen_director_unidades }}" alt="{{ nombre_director_unidades }}" class="directorio-avatar">
                    <div class="directorio-author-text">
                      <span class="directorio-label">DIRECTOR</span>
                      <span class="directorio-name">{{ nombre_director_unidades }}</span>
                    </div>
                  </div>
                  <div class="directorio-contact-list">
                    <div class="directorio-contact-item">
                      <i class="fa fa-envelope"></i>
                      <a href="mailto:{{ correo }}">{{ correo }}</a>
                    </div>
                    <div class="directorio-contact-item">
                      <i class="fa fa-map-marker"></i>
                      <span>{{ direccion_oficina }}</span>
                    </div>
                    <div class="directorio-contact-item">
                      <i class="fa fa-clock-o"></i>
                      <span>8:00 a.m. – 1:00 p.m. | 2:00 p.m. – 5:30 p.m.</span>
                    </div>
                  </div>
                </div>
                {{ /entry }}
              </div>

            </div>
          </section>
        </div>
      mode: htmlmixed
    type: template
    enabled: true
---
