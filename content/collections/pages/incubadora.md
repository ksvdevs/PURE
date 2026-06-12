---
id: fdcd248b-7441-4525-9340-fe4adcac426d
blueprint: page
title: Incubadora
texto_bienvenida: 'Dirección de Incubadora de Empresas'
author: 06ac68ab-d29f-41e9-9b9a-dd4da3996484
template: home
updated_by: 06ac68ab-d29f-41e9-9b9a-dd4da3996484
updated_at: 1725289934
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
      <div class="dir-page-container">
        <!-- Hero Section -->
        <header class="dir-hero">
          <div class="dir-hero-content">
            <h1 class="dir-hero-title">Dirección de Incubadora de Empresas</h1>
            <p class="dir-hero-subtitle">Fomentando el espíritu empresarial y el desarrollo sostenible de ideas innovadoras de nuestros estudiantes para la creación de empresas competitivas.</p>
          </div>
        </header>

        <!-- Main Layout Grid -->
        <div class="dir-layout-grid container">
          <!-- Left Column: About & Functions -->
          <div class="dir-main-content">
            <!-- Sobre la Oficina Card -->
            <section class="dir-content-card">
              <h2 class="dir-section-title">Sobre la Oficina</h2>
              <div class="dir-section-body">
                <p>La Dirección de Incubadora de Empresas es el órgano de línea dependiente del Vicerrectorado de Investigación, responsable de dirigir, coordinar y promover la iniciativa de los estudiantes para la creación de pequeñas y microempresas de propiedad de los estudiantes.</p>
                <p>Nuestro enfoque se centra en la articulación de la producción científica con las necesidades regionales y nacionales, asegurando el respaldo institucional necesario para alcanzar estándares internacionales de competitividad.</p>
              </div>
            </section>

            <!-- Funciones Principales Card -->
            <section class="dir-content-card">
              <h2 class="dir-section-title">Funciones Principales</h2>
              <div class="dir-section-body">
                <ul class="dir-functions-list">
                  <li>
                    <span class="dir-func-letter">a</span>
                    <span class="dir-func-text">Proponer al Vicerrectorado de Investigación las políticas, reglamentos y/o normas de funcionamiento de la Dirección de Incubadora de Empresas.</span>
                  </li>
                  <li>
                    <span class="dir-func-letter">b</span>
                    <span class="dir-func-text">Promover e incentivar la iniciativa de los docentes y estudiantes en la creación de pequeñas y microempresas.</span>
                  </li>
                  <li>
                    <span class="dir-func-letter">c</span>
                    <span class="dir-func-text">Coordinar con las Facultades, la participación en programas y proyectos orientados a la creación de pequeñas y microempresas.</span>
                  </li>
                  <li>
                    <span class="dir-func-letter">d</span>
                    <span class="dir-func-text">Organizar actividades de capacitación y especialización para promover la iniciativa empresarial.</span>
                  </li>
                  <li>
                    <span class="dir-func-letter">e</span>
                    <span class="dir-func-text">Brindar asistencia técnica y asesoramiento en gestión empresarial a las iniciativas de los estudiantes.</span>
                  </li>
                  <li>
                    <span class="dir-func-letter">f</span>
                    <span class="dir-func-text">Facilitar la canalización de recursos financieros y asistencia técnica para las empresas constituidas por los estudiantes.</span>
                  </li>
                  <li>
                    <span class="dir-func-letter">g</span>
                    <span class="dir-func-text">Evaluar y supervisar la marcha de las empresas incubadas en la Dirección.</span>
                  </li>
                  <li>
                    <span class="dir-func-letter">h</span>
                    <span class="dir-func-text">Otras funciones que le asigne el Vicerrectorado de Investigación en el ámbito de su competencia.</span>
                  </li>
                </ul>
              </div>
            </section>
          </div>

          <!-- Right Column: Director Profile Card -->
          <div class="dir-sidebar">
            <div class="dir-profile-card">
              <div class="dir-profile-photo-wrap">
                <img src="/assets/{{imagen}}" alt="{{nombre_completo}}" class="dir-profile-photo">
                <span class="dir-profile-badge"><i class="fa fa-graduation-cap"></i> INVESTIGADOR</span>
              </div>
              
              <h3 class="dir-profile-name">{{nombre_completo}}</h3>
              <p class="dir-profile-role">{{cargo_direccion}}</p>
              
              <div class="dir-profile-resolution">
                <span class="dir-res-label">Resolución Rectoral</span>
                <span class="dir-res-value">R. Nº 6589-2023-UNAMBA</span>
              </div>
              
              <div class="dir-profile-actions">
                <a href="https://ctivitae.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=90008" target="_blank" class="dir-btn dir-btn-secondary">
                  <i class="fa fa-external-link"></i> CTI Vitae (Concytec)
                </a>
                <a href="mailto:{{correo}}" class="dir-btn dir-btn-primary">
                  <i class="fa fa-envelope"></i> CONTACTAR DIRECCIÓN
                </a>
              </div>
              
              <div class="dir-profile-meta">
                <div class="dir-meta-item">
                  <i class="fa fa-envelope-o"></i>
                  <div>
                    <strong>Correo Institucional</strong>
                    <span>{{correo}}</span>
                  </div>
                </div>
                <div class="dir-meta-item">
                  <i class="fa fa-clock-o"></i>
                  <div>
                    <strong>Horario de Atención</strong>
                    <span>{{horario}}</span>
                  </div>
                </div>
                <div class="dir-meta-item">
                  <i class="fa fa-map-marker"></i>
                  <div>
                    <strong>Oficina</strong>
                    <span>{{direccion_oficina}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Gallery Section -->
        <section class="dir-secondary-section">
          <div class="container">
            <div class="dir-section-header">
              <h2>Galería de Fotos</h2>
              <p>Conoce nuestras instalaciones y el desarrollo de nuestras actividades cotidianas.</p>
            </div>
            
            <div class="dir-gallery-slider">
              <div class="dir-gallery-slides">
                <img src="/assets/fotos_vrin_redimensionado/mir_2199.jpg" alt="Slide 1">
                <img src="/assets/fotos_vrin_redimensionado/mir_2203.jpg" alt="Slide 2">
                <img src="/assets/fotos_vrin_redimensionado/mir_2175.jpg" alt="Slide 3">
              </div>
              <button class="dir-gallery-btn prev">❮</button>
              <button class="dir-gallery-btn next">❯</button>
              <div class="dir-gallery-indicators">
                <button class="dir-gallery-dot active"></button>
                <button class="dir-gallery-dot"></button>
                <button class="dir-gallery-dot"></button>
              </div>
            </div>
          </div>
        </section>

        <!-- Team/Unidades Section -->
        <section class="dir-secondary-section" style="border-top: none;">
          <div class="container">
            <div class="dir-section-header">
              <h2>Nuestro Equipo de Trabajo</h2>
              <p>Conoce a los profesionales dedicados al desarrollo institucional y soporte del vicerrectorado.</p>
            </div>
            
            <div class="dir-units-grid">
              <div class="dir-unit-card">
                <div class="dir-unit-photo-wrap">
                  <img src="/assets/fotos_vrin_redimensionado/mir_2063.jpg" alt="Asistente Administrativo" class="dir-unit-photo">
                </div>
                <div class="dir-unit-info">
                  <h3 class="dir-unit-title">Asistente Administrativo</h3>
                  <p class="dir-unit-desc">Brindar apoyo operativo, soporte en los proyectos y soporte en la gestión de actividades vinculadas a la Dirección de Incubadora de Empresas y demás.</p>
                  <div class="dir-unit-contact">
                    <div class="dir-unit-contact-item">
                      <i class="fa fa-user"></i>
                      <span>Lic. Yovana Huillca Sime</span>
                    </div>
                    <div class="dir-unit-contact-item">
                      <i class="fa fa-envelope"></i>
                      <span>incubadorasdeempresas@unamba.edu.pe</span>
                    </div>
                    <div class="dir-unit-contact-item">
                      <i class="fa fa-map-marker"></i>
                      <span>Biblioteca General, 2° Piso</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Activities Section -->
        <section class="dir-news-section">
          <div class="container">
            <div class="dir-section-header">
              <h2>Actividades de la Dirección</h2>
              <p>Mantente al día con las últimas noticias y eventos organizados por la Dirección de Incubadora de Empresas.</p>
            </div>
            
            <div class="dir-news-slider-wrap">
              <button class="dir-news-nav-btn prev" id="dir-news-prev">❮</button>
              <div class="dir-news-container">
                <div class="dir-news-track">
                  {{ collection:noticias }}
                  {{ if direccion_o_vrin == 'Dirección de Incubadora de Empresas' }}
                  <div class="dir-news-card">
                    <div class="dir-news-img-wrap">
                      <img src="{{ imagen_principal | url }}" alt="{{ title }}" class="dir-news-img">
                    </div>
                    <div class="dir-news-info">
                      <h4 class="dir-news-title">{{ title }}</h4>
                      <a href="{{ link }}" target="_blank" class="dir-news-btn">Ver Publicación <i class="fa fa-arrow-right"></i></a>
                    </div>
                  </div>
                  {{ /if }}
                  {{ /collection:noticias }}
                </div>
              </div>
              <button class="dir-news-nav-btn next" id="dir-news-next">❯</button>
            </div>
          </div>
        </section>
      </div>
    type: director_direcciones_vrin
    enabled: true
template_imagen_fondo:
  code: |-
    <!--<div class="page-header header-filter " data-parallax="true" style="background-image: url('./assets/direcciones/incubadora/incubadora.jpg');">
        <div class="container">
            <div class="row">
                <div class="col-md-8 ml-auto mr-auto">
                    <div class="brand">
                        <h1 class="title">{{texto_bienvenida}}</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>-->
  mode: htmlmixed
modal:
  code: |-
    <!-- Inicio Modal Incubadora de Empresas-->
    <div class="modal fade" id="exampleModalScrollable" tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
        <div class="modal-dialog " role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <b class="modal-title h3" id="exampleModalScrollableTitle">Funciones de Dirección de Incubadora de Empresas</b>
                </div>
                <div class="modal-body">
                    <div id="global_modal">
                        <div id="mensajess">
                            <p class="h4">a) Proponer al Vicerrectorado de Investigación las políticas, reglamentos y/o normas de funcionamiento de los Institutos de Investigación.</p>
                            <p class="h4">b) Ejecutar proyectos de investigación en base a las líneas establecidas por el Vicerrectorado de Investigación.</p>
                            <p class="h4">c) Organizar actividades de difusión del conocimiento y los resultados de las investigaciones.</p>
                            <p class="h4">d) Promover y gestionar la generación de conocimientos.</p>
                            <p class="h4">e) Gestionar la participación en fondos de investigación.</p>
                            <p class="h4">f) Promover entre los miembros de la comunidad universitaria el desarrollo de trabajos de investigación para ser publicados.</p>
                            <p class="h4">g) Administrar un registro de las publicaciones oficiales realizadas por la universidad.</p>
                            <p class="h4">h) Otras funciones que le asigne el Vicerrectorado de Investigación.</p>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" data-dismiss="modal">Cerrar</button>
                </div>
            </div>
        </div>
    </div>
    {{# Fin Modal Incubadora de Empresas #}}
  mode: htmlmixed
---
