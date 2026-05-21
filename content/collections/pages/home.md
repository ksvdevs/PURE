---
id: home
blueprint: pages
title: Home
template: home
author: 06ac68ab-d29f-41e9-9b9a-dd4da3996484
updated_by: 06ac68ab-d29f-41e9-9b9a-dd4da3996484
updated_at: 1778617661
block_types:
  -
    id: m7ap00pr
    template:
      code: |-
        <!--======= SECCIÓN  CARRUSEL CONVOCATORIAS ============-->
        <section id="convocatorias-relevantes" class="convocatorias-section"
                 aria-roledescription="carrusel" aria-label="Convocatorias destacadas">

          <div class="carousel-inner" aria-live="polite">
            {{ collection:blog filter="convocatoria:si" sort="date:desc" limit="3" }}
            <article class="carousel-item-conv {{ if {count} == 1 }}active{{ /if }}"
                     role="group" aria-roledescription="slide">
              <div class="conv-media">
                <div class="conv-media-aura"
                     style="background-image: url('{{ imagen_principal | url }}');"
                     aria-hidden="true"></div>
                <img src="{{ imagen_principal | url }}" alt="{{ title }}">
              </div>
              <div class="convocatoria-content">
                <span class="conv-label">
                  <span class="conv-label-bar"></span>
                  Convocatoria
                </span>
                <h2>{{ title }}</h2>
                <p>{{ descripcion }}</p>
                <a href="/blog/{{ slug }}" class="btn">
                  Ver más <i class="fa fa-long-arrow-right"></i>
                </a>
              </div>
            </article>
            {{ /collection:blog }}
            <button type="button" class="carousel-control carousel-control-prev" aria-label="Convocatoria anterior">
              <svg width="20" height="20" viewBox="0 0 24 24">
                <polyline points="15 18 9 12 15 6" stroke="currentColor"
                          stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <button type="button" class="carousel-control carousel-control-next" aria-label="Siguiente convocatoria">
              <svg width="20" height="20" viewBox="0 0 24 24">
                <polyline points="9 6 15 12 9 18" stroke="currentColor"
                          stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
          <div class="carousel-footer">
            <div class="carousel-dots" id="convocatoriasDots" role="tablist" aria-label="Paginación"></div>
            <div class="carousel-counter" aria-live="polite">
              <span class="current" id="convCurrentSlide">01</span>
              <span class="sep">/</span>
              <span class="total" id="convTotalSlides">01</span>
            </div>
          </div>
        </section>
      mode: htmlmixed
    type: template
    enabled: true
  -
    id: mp2tp2x8
    contador_docentes_renacyt: 20
    contador_grupos_de_investigacion: 29
    contador_lineas_de_investigacion: 24
    contador_articulos_cientificos: 50
    contador_docentes_cti_vitae: 200
    template:
      code: |-
        <section class="stats-counter-section">
          <div class="stats-counter-wrap">

            <div class="stat-item">
              <div class="stat-icon-wrap">
                <a href="/lineas-de-investigacion">
                  <img src="{{icono_lineas_de_investigacion}}" alt="Líneas de Investigación">
                </a>
              </div>
              <span class="stat-num">+{{contador_lineas_de_investigacion}}</span>
              <span class="stat-desc">Líneas de Investigación</span>
            </div>

            <div class="stat-item">
              <div class="stat-icon-wrap">
                <a href="/docentes-investigadores">
                  <img src="{{icono_docentes_cti_vitae}}" alt="Docentes CTI Vitae">
                </a>
              </div>
              <span class="stat-num stat-num-green">+{{contador_docentes_cti_vitae}}</span>
              <span class="stat-desc">Docentes Inscritos en CTI Vitae</span>
            </div>

            <div class="stat-item">
              <div class="stat-icon-wrap">
                <a href="/articulos-publicados">
                  <img src="{{icono_articulos_publicados}}" alt="Artículos Científicos">
                </a>
              </div>
              <span class="stat-num stat-num-green">+{{contador_articulos_cientificos}}</span>
              <span class="stat-desc">Artículos Científicos</span>
            </div>

            <div class="stat-item">
              <div class="stat-icon-wrap">
                <a href="/docentes-renacyt">
                  <img src="{{icono_docentes_renacyt}}" alt="Docentes RENACYT">
                </a>
              </div>
              <span class="stat-num">{{contador_docentes_renacyt}}</span>
              <span class="stat-desc">Docentes RENACYT</span>
            </div>

            <div class="stat-item">
              <div class="stat-icon-wrap">
                <a href="/grupos-de-investigacion">
                  <img src="{{icono_grupos_de_investigacion}}" alt="Grupos de Investigación">
                </a>
              </div>
              <span class="stat-num">{{contador_grupos_de_investigacion}}</span>
              <span class="stat-desc">Grupos de Investigación</span>
            </div>

          </div>
        </section>
      mode: htmlmixed
    type: contador_estado
    enabled: true
    icono_docentes_renacyt: vrin/renacytvrins.png
    icono_grupos_de_investigacion: vrin/gruposvrin.png
    icono_lineas_de_investigacion: vrin/lineasvrin.png
    icono_articulos_publicados: vrin/articulosvrin.png
    icono_docentes_cti_vitae: vrin/vitaevrins.png
  -
    id: m7by52bw
    titulo_seccion_blog: 'Plataformas Tecnológicas'
    template:
      code: |-
        <!--======= SECCIÓN PLATAFORMAS TECNOLOGICAS ============-->
                 <section class="plataformas-section">
                  <div class="plataformas-container">
                    <div class="plataformas-header">
                      <h2>Plataformas Tecnológicas</h2>
                      <p>La Universidad Nacional Micaela Bastidas de Apurímac cuenta con las siguientes herramientas útiles de búsqueda.</p>
                    </div>
                    <div class="plataformas-grid">

                      <div class="plat-card">
                        <div class="plat-icon">
                          <img src="/assets/vrin/mylofts.png" alt="MYLOF">
                        </div>
                        <h3 class="plat-name">MYLOF</h3>
                        <p class="plat-desc">Sistema de gestión bibliométrico para consultas de catálogo y recursos</p>
                        <a href="https://mylof.unamba.edu.pe" class="plat-link" target="_blank">Acceder &rarr;</a>
                      </div>

                      <div class="plat-card plat-active">
                        <div class="plat-icon">
                          <img src="/assets/vrin/observatoriov.png" alt="Observatorio">
                        </div>
                        <h3 class="plat-name">Observatorio</h3>
                        <p class="plat-desc">Monitoreo en Proyectos de Investigación Docente y Tesis de Estudiantes</p>
                        <a href="https://observatorio.unamba.edu.pe" class="plat-link" target="_blank">Acceder &rarr;</a>
                      </div>

                      <div class="plat-card">
                        <div class="plat-icon">
                          <img src="/assets/vrin/repositorio.png" alt="Repositorio Institucional">
                        </div>
                        <h3 class="plat-name">Repositorio Institucional</h3>
                        <p class="plat-desc">Repositorio institucional de la UNAMBA (Tesis, revistas, libros y Series)</p>
                        <a href="https://repositorio.unamba.edu.pe" class="plat-link" target="_blank">Acceder &rarr;</a>
                      </div>

                      <div class="plat-card plat-active">
                        <div class="plat-icon">
                          <img src="/assets/vrin/pure.png" alt="PURE">
                        </div>
                        <h3 class="plat-name">PURE</h3>
                        <p class="plat-desc">Plataforma de gestión de investigación (publicaciones, proyectos y más)</p>
                        <a href="https://pure.unamba.edu.pe/es/" class="plat-link" target="_blank">Acceder &rarr;</a>
                      </div>

                      <div class="plat-card">
                        <div class="plat-icon">
                          <img src="/assets/vrin/micaelas.png" alt="Fondo Editorial">
                        </div>
                        <h3 class="plat-name">Fondo Editorial</h3>
                        <p class="plat-desc">Publicación y difusión de obras académicas, científicas y culturales</p>
                        <a href="/fondo-editorial" class="plat-link">Acceder &rarr;</a>
                      </div>

                      <div class="plat-card plat-active">
                        <div class="plat-icon">
                          <img src="/assets/vrin/revistas.png" alt="Revistas Científicas">
                        </div>
                        <h3 class="plat-name">Revistas Científicas</h3>
                        <p class="plat-desc">Revistas científicas y académicas de la UNAMBA con periodicidad</p>
                        <a href="https://revistas.unamba.edu.pe/" class="plat-link" target="_blank">Acceder &rarr;</a>
                      </div>

                      <div class="plat-card">
                        <div class="plat-icon">
                          <img src="/assets/vrin/turniting.png" alt="Turnitin">
                        </div>
                        <h3 class="plat-name">Turnitin</h3>
                        <p class="plat-desc">Software docente para verificar la originalidad en trabajos académicos</p>
                        <a href="#" class="plat-link">Acceder &rarr;</a>
                      </div>

                      <div class="plat-card plat-active">
                        <div class="plat-icon">
                          <img src="/assets/vrin/grupo.png" alt="Grupos de Investigación">
                        </div>
                        <h3 class="plat-name">Grupos de Investigación</h3>
                        <p class="plat-desc">Equipos de colaboradores inscritos en las diferentes áreas de estudio</p>
                        <a href="/grupos-de-investigacion" class="plat-link">Acceder &rarr;</a>
                      </div>

                    </div>
                  </div>
                </section>
      mode: htmlmixed
    type: blog
    enabled: true
  -
    id: m7ap5pvp
    template:
      code: |-
        <!--
        ==================================================================================================
        ===== SECCIÓN NOTICIAS ==========================================
        ==================================================================================================
        -
        <section>
            <!-- Lista de Noticias -->
            <div class="row">
                <div class="col-md-8 mb-8">
                    <div class="section-header">
                        <h2>Noticias y Eventos</h2>
                    </div>
                    <div>
                        {{ collection:noticias limit="3" }}
                        <div>
                            <div class="news-item">
                                <!-- Imagen de la noticia -->
                                <a href="{{ url }}" target="_blank">
                                    <img src="{{ imagen_principal | url }}" alt="{{ title }}">
                                </a>
                                <!-- Contenido de la noticia -->
                                <div class="news-content">
                                    <h4>{{ title }}</h4>
                                    <p class="text-sm text-gray-500"><strong>Fecha:</strong> {{ fecha_publicacion }}</p>

                                    <a href="{{ link }}" class="text-blue-600 hover:underline">Ir a la publicación</a>
                                </div>
                            </div>
                        </div>
                        {{ /collection:noticias }}
                    </div>

                    <!-- Botón para ir al apartado completo de noticias -->
                    <div class="text-center">
                        <a href="/noticias-vrin" class="go-to-news" style="background-color: #6a1b9a;">Ver más Noticias</a>
                    </div>
                </div>
                <div class="col-md-4 mb-4">
                    <div class="section-header">
                            <h2>Informate con el Vrin</h2>
                    </div>
                </div>
            </div>
        </section>
      mode: htmlmixed
    type: template
    enabled: false
  -
    id: lka0v9ms
    title_1: 'Servicios VRIN'
    template:
      code: |-
        <h2 class="title animate-pulse" style="text-align:center">{{title_1}}</h2>
        <div class="section ">
            <div class="team ">
                <div class="row">
                    {{collection:servicios_vrin }}
                    <div class="feat-item mb-md50 col-lg-4 ">
                        <div class="text-center reveal zoom-in ">
                            <figure>
                                <a href="{{enlace ?? slug}}" {{abrir_en_otra_pagina}}>
                                <img src="{{imagen_servicio}}" alt="">
                                </a>
                            </figure>
                            <h5 class="card-title">{{title}}</h5>
                        </div>
                    </div>
                    {{/collection:servicios_vrin}}
                </div>
            </div>
        </div>
      mode: htmlmixed
    type: servicios_vrin
    enabled: false
  -
    id: lka55qtw
    template_vicerrector: |-
      <!---==inicio acerca de vicerrector ==-->
      <div class="cd-section  header-filter"  id="contactus" style="background-image: url('./assets/img/bg6.jpg');">
          <div class="contactus-1 section-image " data-parallax="false" >
              <div class="container">
                  <div class="row">
                      <div class="col-md-6" style="color: white">
                          <h2 class="title " style="color: white">Acerca del Vicerrectorado de Investigación!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</h2>
                          <h5 class="description fs-3" style="color: #e6e0e0">El Vicerrectorado de Investigación es un órgano ejecutivo desconcentrado, de apoyo encargado de implementar y materializar los lineamientos de investigación, buscando el estímulo a la ciencia, investigación y creación.</h5>
                          <h3 class="title" style="color: white">Funciones Generales</h3>
                          <p class="h4">El Vicerrectorado de Investigación tiene las siguientes funciones:</p>
                          <br>
                          <ol>
                              <li>Dirigir y ejecutar la política general de investigación en la universidad.</li>
                              <li>Supervisar las actividades de investigación con la finalidad de garantizar la calidad de las mismas y su concordancia con la misión y metas establecidas por el estatuto de la Universidad.</li>
                              <li>Organizar la difusión del conocimiento y los resultados de las investigaciones.</li>
                              <li>Gestionar el financiamiento de la investigación ante las entidades y organismos públicos o privados.</li>
                              <li>Aprobar la realización y ejecución de programas de desarrollo de capacidades y de investigación en los trabajadores administrativos.</li>
                              <li>Promover la generación de recursos para la universidad a través de la producción de bienes y prestación de servicios derivados de las actividades de investigación y desarrollo, así como mediante la obtención de regalías por patentes u otros derechos de propiedad intelectual.</li>
                          </ol>
                          <br>
                      </div>
                      <div class="col-md-5 ml-auto text-center">
                          <div class="card card-contact">
                              <img src="" alt="viverrector-investigacion">
                          </div>
                          <h5 class="description fs-3" style="color: #e6e0e0">Dr. Wilson Jhon Mollocondo Flores</h5>
                          <h4 class="title" style="color: #e6e0e0">Vicerrector de Investigación</h4>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <!-- fin acerca de vicerrector -->
    type: acerca_vicerrector
    enabled: false
    nombre_vicerrector: 'Dr. Wilson Jhon Mollocondo Flores'
    template:
      code: |-
        <style>
                  /* Estilos generales */
                .vicerrectorado-section {
                  background-color: #f9f9f9;
                  padding: 40px 20px;
                }

                .vicerrectorado-container {
                  max-width: 1200px;
                  margin: 0 auto;
                }

                .vicerrectorado-row {
                  display: flex;
                  flex-wrap: wrap;
                  align-items: center;
                  justify-content: space-between;
                }

                /* Imagen con contenedor adicional */
                .vicerrectorado-image-wrapper {
                  position: relative;
                  flex: 1;
                  max-width: 40%;
                  text-align: center;
                }

                .vicerrectorado-image {
        		  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.15);
                  position: relative;
                  z-index: 2;
                  max-width: 100%;
                  height: auto;
                  border-radius: 8px;
                  object-fit: cover;
                }

                /* Contenido textual */
                .vicerrectorado-content {
                  flex: 1;
                  max-width: 55%;
                }

                .vicerrectorado-title {
                  font-size: 24px;
                  font-weight: bold;
                  color: #333;
                  margin-bottom: 20px;
                }

                .vicerrectorado-description {
                  font-size: 16px;
                  line-height: 1.6;
                  color: #555;
                  margin-bottom: 30px;
                }

                .vicerrectorado-button {
                  display: inline-block;
                  padding: 10px 20px;
                  font-size: 16px;
                  color: #fff;
                  background-color: #6a1b9a;
                  text-decoration: none;
                  border-radius: 5px;
                  transition: background-color 0.3s ease;
                }

                .vicerrectorado-button:hover {
                  background-color: #4a148c;
                }
        </style>

        <div class="vicerrectorado-section" id="vicerrectorado">
                  <div class="vicerrectorado-container">
                    <div class="vicerrectorado-row">
                      <!-- Imagen con diseño de contenedor adicional -->
                      <div class="vicerrectorado-image-wrapper">
                        
                        <img src="{{imagen_vicerrector}}" alt="vicerrector-investigacion" class="vicerrectorado-image">
                      </div>
                      <!-- Contenido textual -->
                      <div class="vicerrectorado-content">
                        <h3 class="vicerrectorado-title">Vicerrectorado de Investigación</h3>
                        <p class="vicerrectorado-description">
                          Nos enfocamos en impulsar la investigación, la innovación y el desarrollo tecnológico dentro de la universidad. Promovemos proyectos que generan conocimiento, fomentamos la creatividad científica y facilitamos la conexión entre investigadores, estudiantes y la sociedad para lograr un impacto real.</p>
        				<br>
        			  <h4 style="font-weight: bold;">{{ nombre_vicerrector }}</h4>

        			  <h5 style="font-weight: bold;">{{ cargo }}</h5>
                      </div>
        			  
                    </div>
                  </div>
                </div>
        <!-- fin acerca de vicerrector -->
      mode: htmlmixed
    cargo: 'Vicerrector de Investigación'
    imagen_vicerrector: fotos_vrin_redimensionado/mir_2116.jpg
  -
    id: lkabqlir
    titulo_seccion_blog: 'Eventos Vicerrectorado de Investigación'
    template:
      code: |-
        <style>
          .title {
          	color: #003366;
            margin-bottom: 10px;
            border-bottom: 3px solid #b22222;
            padding-bottom: 10px;
          }
        </style>
        <!-- inicio blog/evento -->
        <div class="cd-section" id="blogs">
            <div class="blogs-2" id="blogs-2">
                <div class="container ">
                    <div class="row">
                        <div class="col-md-12 ml-auto mr-auto">
                            <h2 class="title" style="text-align:center">{{titulo_seccion_blog}}</h2>
                            <br>
        					
                            <div class="row">
        					{{ collection:blog limit="3" }}
                                <div class="col-md-4">
                                    <div class="card card-plain card-blog">
                                        <div class=" card-header card-header-image bg-image hover-zoom">
                                            <a href="{{url}}">
                                            <img class=" img img-raised" src="{{imagen_principal}}" alt="">
                                            </a>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;{{imagen_principal}}&quot;); opacity: 1;"></div>
                                        </div>
                                        <div class="card-body ">
                                            <h6 class="card-category text-danger" style="text-align:center">{{direccion_o_vrin}}</h6>
                                            <h4 class="card-title">
                                                <a href="{{url}}">{{title}}</a>
                                            </h4>
                                            <p class="card-description">
                                                {{content}}
                                                <a href="{{url}}">Leer más </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
        						{{ /collection:blog }}
                            </div>
        					
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- fin blog/evento -->
      mode: htmlmixed
    type: blog
    enabled: false
  -
    id: m7by1g19
    titulo_seccion_blog: 'REVISTAS DE INVESTIGACION'
    template:
      code: |-
        <style>
        .research-journals-section {
          padding: 50px 20px;
          background-color: #f9f9f9;
          text-align: center;
        }

        .section-header h2 {
          font-size: 2.5rem;
          color: #003366;
          margin-bottom: 10px;
        }

        .section-header p {
          font-size: 1.2rem;
          color: #555;
          margin-bottom: 20px;
        }

        .btn-primary {
          display: inline-block;
          padding: 10px 20px;
          background-color: #b22222;
          color: #fff;
          text-decoration: none;
          border-radius: 5px;
          /*font-weight: bold;*/
          transition: background-color 0.3s ease;
        }

        .btn-primary:hover {
          background-color: #8b0000;
        }

        .journals-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
        }

        .journal-card {
          background-color: #fff;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          border-radius: 10px;
          overflow: hidden;
          max-width: 400px;
          text-align: left;
        }

        .journal-image {
          width: 100%;
          height: auto;
        }

        .journal-details {
          padding: 20px;
        }

        .journal-details h3 {
          font-size: 1.5rem;
          color: #003366;
          margin-bottom: 10px;
        }

        .journal-details p {
          font-size: 1rem;
          color: #555;
          margin-bottom: 10px;
        }

        .btn-secondary {
          display: inline-block;
          padding: 8px 15px;
          background-color: #003366;
          color: #fff;
          text-decoration: none;
          border-radius: 5px;
          font-weight: bold;
          transition: background-color 0.3s ease;
        }

        .btn-secondary:hover {
          background-color: #001f4d;
        }
        .section-header h2{
          color: #003366;
          margin-bottom: 10px;
          border-bottom: 3px solid #b22222; 
          padding-bottom: 10px; 
          }
          .section-header h2::after {
        	content: '';
        	display: block;
        	width: 60px;
        	height: 3px;
        	background-color: #b22222;
        	margin: 10px auto 0;
          }
        </style>

        <div class="research-journals-section">
          <!-- Título principal -->
          <div class="section-header">
            <h2 class="title">Revistas de Investigación UNAMBA</h2>
            <p>Explora las últimas publicaciones de las revistas de Investigación de la UNAMBA</p>
            <a href="https://revistas.unamba.edu.pe/" class="btn-primary" style="background-color: #6a1b9a;" target="_blank">Ir a Revistas</a>
          </div>
        <hr>
          <!-- Contenedor de revistas -->
          <div class="journals-container">
            <!-- Revista 1 -->
            <div class="journal-card">
        	  <a href="https://revistas.unamba.edu.pe/index.php/riqchary" target="_blank">
        	  	<img src="assets/journalThumbnail_es.jpg" alt="Portada Revista 1" class="journal-image" />
        	  </a>
              
              <div class="journal-details">
                <h3 class="title" style="text-align: center;">C&T Riqchary Revista de Investigación</h3>
                <p><strong>Áreas temáticas:</strong> Ciencias exactas, ingenierías y de materiales.</p>
                <p><strong>Periodicidad:</strong> Semestral</p>
                <p><strong>ISSN:</strong> 2706-543X (en línea), 2810-8124</p>
                <p><strong>Acceso:</strong> Abierto (CC BY-NC-ND)</p>
                <a href="https://revistas.unamba.edu.pe/index.php/riqchary" class="btn-secondary" style="vertical-align: middle; justify-content: center; align-items: center; text-align: center;" target="_blank">Ver Revista</a>
              </div>
            </div>

            <!-- Revista 2 -->
            <div class="journal-card">
        	  <a href="https://revistas.unamba.edu.pe/index.php/micaela" target="_blank">
        	  	<img src="assets/micaela_revista.png" alt="Portada Revista 2" class="journal-image"/>
        	  </a>
              
              <div class="journal-details">
                <h3 class="title" style="text-align: center;">Micaela Revista de Investigación - UNAMBA</h3>
                <p><strong>Áreas temáticas:</strong> Multidisciplinaria en las áreas: Ciencia, Tecnología y Humanidades</p>
                <p><strong>Periodicidad:</strong> Semestral</p>
                <p><strong>ISSN:</strong> 2955-8646 (en línea), 2709-8990 (impresa)</p>
                <p><strong>Depósito Legal:</strong> BN - Perú: N° 2020-10220</p>
                <a href="https://revistas.unamba.edu.pe/index.php/micaela" class="btn-secondary" target="_blank">Ver Revista</a>
              </div>
            </div>
          </div>
        </div>
      mode: htmlmixed
    type: blog
    enabled: false
  -
    id: m7by2bng
    titulo_seccion_blog: 'REVISTA URQUTANPU WILLAKUY'
    template:
      code: |-
        <style>
        .title {
          font-size: 2.5rem;
          color: #003366;
          margin-bottom: 30px;
          font-weight: bold;
        }

        .revista-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border-radius: 10px;
          overflow: hidden;
        }

        .revista-card:hover {
          transform: scale(1.02);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        .card-img {
          object-fit: cover;
        }

        .btn-primary {
          background-color: #b22222;
          border: none;
          padding: 10px 20px;
          transition: background-color 0.3s ease;
        }

        .btn-primary:hover {
          background-color: #8b0000;
        }
        .title {
          font-family:"Roboto", "Helvetica", "Arial", sans-serif;  
        }
        </style>

        <div class="section-header">
        	<h2 class="text-center title">Revista Urqutanpu Willakuy</h2>
        </div>
        <div class="container my-5">
          <!-- Revista 1 -->
          <div class="card mb-4 shadow-sm revista-card">
            <div class="row no-gutters align-items-center">
              <div class="col-md-4">
                <img src="./assets/a_home_otros/revista_urqu_willakuy_11.png" class="card-img" alt="Revista Urqutanpu Vol. 1">
              </div>
        	  <div class="col-md-8 order-md-1">
                <div class="card-body">
                  <h5 class="card-title">Urqutanpu Huk Kaq Revista</h5>
        		  <p>La Revista Urqutanpu, originaria de la subregión de Apurímac, Perú, busca expandir el conocimiento a través de libros para el público nacional e internacional, especialmente aquellos interesados en la cultura Runasimi. Aunque el idioma Runasimi está siendo más reconocido tanto en Perú como en otros países, todavía hay un camino por recorrer para su pleno desarrollo. La revista se dedica a promover y difundir el conocimiento en Runasimi, abordando temas diversos como historia, cultura, música, agricultura, entre otros. Invita a escritores a contribuir y se compromete a seguir desarrollando y promoviendo la lengua y cultura Qichwa.</p>
        		  <div class="col-md-8">
        			<h5 class="card-title">
        			  <a>Wakichiy umalliq</a>
        			</h5>
        			<p class="card-description">
        			  Dr. Wilson Jhon Mollocondo Flores <br>
        			  Av. Tamburco s/n Abancay, Apurimac
        			</p>
        			<h5 class="card-title">
        			  <a>Wakichiy kamachiqkuna</a>
        			</h5>
        			<p class="card-description">
        			  Roxana Quispe Collantes <br>
        			  Jermani Ojeda Ludeña <br>
        			  Martín Castillo Collado <br>
        			  Calip Sierra Peña <br>
        			  Belen Cabrera Navarrete <br>
        			  Ernestina Choccata Cruz <br>
        			  Ecler Mamani Vilca
        			</p>
        			<h5 class="card-title">
        			  <a>Allichaqkuna:</a>
        			</h5>
        			<p class="card-description">
        			  Calip Sierra Peña <br>
        			  Martín Castillo Collado <br>
        			  Maura Bolivar Barrionuevo <br>
        			</p>
        			<p class="card-description">
        			  Hecho el depósito legal en la Biblioteca Nacional del Perú No 2021-08233. <br>
        			  Mayo, 2023
        			</p>
                  </div>
                  <div class="col-6 mx-auto">
        			<a href="https://drive.google.com/file/d/1-xuI-Foy4EFdjv5-PQs-zdPdOgDNJGBQ/view" target="_blank" class="btn btn-primary" style="vertical-align: middle; display: flex; justify-content: center; align-items: center; background-color: #6a1b9a;">Ver Revista</a>
                  </div>
        		</div>
              </div>
            </div>
          </div>

          <!-- Revista 2 -->
          <div class="card mb-4 shadow-sm revista-card">
            <div class="row no-gutters align-items-center">
              <div class="col-md-4 order-md-2">
                <img src="./assets/a_home_otros/urqu_tanpu_2.png" class="card-img" alt="Revista Urqutanpu Vol. 2">
              </div>
              <div class="col-md-8 order-md-1">
                <div class="card-body">
                  <h5 class="card-title">Urqutanpu Iskay Kaq Revista</h5>
        		  <p>Esta revista en su segunda edición nos habla sobre la importancia de escribir en nuestro propio idioma y de preservar el conocimiento cultural. Se cuestiona si el conocimiento debe almacenarse únicamente en inglés y se menciona la necesidad de mantener la voz propia en la forma en que nos expresamos. También se presenta el segundo número de Urqutampu, donde se compartirá conocimiento sobre diversas comunidades y temas culturales. Finalmente, se anima a seguir adelante juntos en este proceso de preservación y difusión del conocimiento.</p>
        		  <div class="col-md-8">
        			<h5 class="card-title">
        			  <a>Wakichiy umalliq</a>
        			</h5>
        			<p class="card-description">
        			  Dr. Wilson Jhon Mollocondo Flores <br>
        			  Av. Tamburco s/n Abancay, Apurimac
        			</p>
        			<h5 class="card-title">
        			  <a>Wakichiy kamachiqkuna</a>
        			</h5>
        			<p class="card-description">
        			  Jermani Ojeda Ludeña <br>
        			  Katherin Patricia Tairo Quispe <br>
        			  Calip Sierra Peña <br>
        			  Belen Cabrera Navarrete <br>
        			</p>
        			<h5 class="card-title">
        			  <a>Allichaqkuna:</a>
        			</h5>
        			<p class="card-description">
        			  Calip Sierra Peña <br>
        			  Maura Bolívar Barrionuevo <br>
        			  Gloria María Jara Valverde <br>
        			</p>
        			<h5 class="card-title">
        			  <a>Portada llimpiq:</a>
        			</h5>
        			<p class="card-description">
        			  Patrick M. Cisneros Prado <br>
        			</p>
        			<p class="card-description">
        			  Hecho el depósito legal en la Biblioteca Nacional del Perú No 2021-08233. <br>
        			  Mayo, 2023
        			</p>
                  </div>
                  <div class="col-6 mx-auto">
        			<a href="https://drive.google.com/file/d/1O9MHVrTvRWREfXdmqvXF7WrnA6Vw6alo/view" target="_blank" class="btn btn-primary" style="vertical-align: middle; display: flex; justify-content: center; align-items: center; background-color: #6a1b9a;">Ver Revista</a>
                  </div>
        		</div>
              </div>
            </div>
          </div>
        </div>
      mode: htmlmixed
    type: blog
    enabled: false
  -
    id: lkbe8ld0
    direccion: 'Av. Inca Garcilazo de la Vega, Abancay'
    correo_vrin: vrin@unamba.edu.pe
    horario_atencion: '7:30 am - 13:00 pm y 14:00 pm - 15:30 pm'
    template:
      code: |-
        <div class="cd-section header-filter" id="contactus">
        	<div class="contactus-1 section-image" style="background-image: url('./assets/a_home_otros/bg6.jpg')">
        		<div class="container">
        			<div class="row">
        				<div class="col-md-8 info info-horizontal">
        					<h2 class="title" style="color: white">Vicerrectorado de Investigación</h2>
        					<h5 class="description fs-3" style="color: #e6e0e0">Información de Contacto</h5>
        					<div class="icon icon-primary">
        						<i class="material-icons">pin_drop</i>
        					</div>
        					<div class="description">
        						<h4 class="info-title" style="color: white">Encuentra nuestra oficina</h4>
        						<h5 style="color: #e6e0e0">{{direccion}} <br>
        							2° Piso Biblioteca General
        						</h5>
        					</div>
        					<div class="icon icon-primary">
        						<i class="material-icons">phone</i>
        					</div>
        					<div class="description" style="color: #e6e0e0">
        						<h4 class="info-title" style="color: white">Contactanos</h4>
        						<h5> {{correo_vrin}} 
        							<br>Lunes a Viernes
        							<br> Horario de atención: {{horario_atencion}}
        						</h5>
        					</div>
        				</div>
        				<div class="col-md-5 ml-auto">
        					<div class="card card-contact">
        						<br>
        						<form class="needs-validation" novalidate>
        							<div class="card-header card-header-raised card-header-primary text-center">
        								<h4 class="card-title">Contactanos</h4>
        							</div>
        							<div class="card-body">
        								<div class="form-row">
        									<div class="col-md-6">
        										<div class="form-group label-floating is-empty bmd-form-group">
        											<label for="validationCustom01">Nombre</label>
        											<input type="text" class="form-control" id="validationCustom01" value="" required>
        											<div class="valid-feedback">
        												Correcto!
        											</div>
        											<span class="material-input"></span>
        										</div>
        									</div>
        									<div class="col-md-6">
        										<div class="form-group label-floating is-empty bmd-form-group">
        											<label for="validationCustom02">Apellidos</label>
        										    <input type="text" class="form-control" id="validationCustom02" value="" required>
        											<div class="valid-feedback">
        												Correcto!
        											</div>
        											<span class="material-input"></span>
        										</div>
        									</div>
        								</div>
        								<div class="form-group label-floating is-empty bmd-form-group">
        									<label class="bmd-label-floating">Correo electronico</label>
        									<input type="email" name="email" class="form-control">
        									<span class="material-input"></span>
        								</div>
        								<div class="form-group label-floating is-empty bmd-form-group">
        									<label for="exampleMessage1" class="bmd-label-floating">Mensaje</label>
        									<textarea name="message" class="form-control" id="exampleMessage1" rows="6"></textarea>
        									<span class="material-input"></span>
        								</div>
        							</div>
        							<div class="card-footer justify-content-between">
        								
        								<button class="btn btn-primary" type="submit">Submit form</button>
        							</div>
        						</form>
        					</div>
        				</div>
        			</div>
        		</div>
        	</div>
        </div>
      mode: htmlmixed
    type: info_contacto
    enabled: false
  -
    id: mp30krko
    template:
      code: |-
        <!--======= SECCIÓN ENLACES DE INTERES ============-->  
                <section class="enlaces-section">
                  <div class="enlaces-container">
                    <h2 class="enlaces-title">Enlaces de Interés</h2>
                    <div class="enlaces-carousel-wrap">
                      <button class="enlaces-nav-btn" id="enlacesPrev" aria-label="Anterior">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
                      </button>
                      <div class="enlaces-viewport" id="enlacesViewport">
                        <div class="enlaces-track" id="enlacesTrack">
                          <a href="https://www.lareferencia.info/es/" target="_blank" class="enlace-logo">
                            <img src="/assets/la_referencia.png" alt="LA Referencia" draggable="false">
                          </a>
                          <a href="https://www.gob.pe/concytec" target="_blank" class="enlace-logo">
                            <img src="/assets/concytec.png" alt="CONCYTEC" draggable="false">
                          </a>
                          <a href="https://renati.sunedu.gob.pe" target="_blank" class="enlace-logo">
                            <img src="/assets/renati.jpg" alt="RENATI" draggable="false">
                          </a>
                          <a href="https://alicia.concytec.gob.pe/vufind/" target="_blank" class="enlace-logo">
                            <img src="/assets/alicia.png" alt="ALICIA" draggable="false">
                          </a>
                          <a href="https://scielo.org/es/" target="_blank" class="enlace-logo">
                            <img src="/assets/scielo.png" alt="Scielo" draggable="false">
                          </a>
                          <a href="https://ctivitae.concytec.gob.pe/appDirectorioCTI/" target="_blank" class="enlace-logo">
                            <img src="/assets/cti_vitae.jpg" alt="CTI Vitae" draggable="false">
                          </a>
                          <a href="https://www.scopus.com/home.uri" target="_blank" class="enlace-logo">
                            <img src="/assets/scopus-2.png" alt="Scopus" draggable="false">
                          </a>
                        </div>
                      </div>
                      <button class="enlaces-nav-btn" id="enlacesNext" aria-label="Siguiente">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 6 15 12 9 18"/></svg>
                      </button>
                    </div>
                    <div class="enlaces-dots" id="enlacesDots"></div>
                  </div>
                </section>
      mode: htmlmixed
    type: template
    enabled: true
texto_bienvenida: 'Vicerrectorado de Investigación'
titulo_pagina: 'Vicerrectorado de Investigación - VRIN UNAMBA'
imagen_fondo:
  - a_home_otros/bg4.jpg
template_imagen_fondo:
  code: null
  mode: htmlmixed
modal:
  code: |-
    <!-- Modal HTML -->
    <div id="customModal" class="custom-modal">
      <div class="custom-modal-content">
        <!-- Header del modal -->
        <div class="custom-modal-header">
          <h4>¡Aviso importante!</h4>
          <span class="custom-close">&times;</span>
        </div>

        {{ collection:blog limit="1" sort'desc'}}
        {{ if modal == "si" }}
        <!-- Contenido principal del modal -->
        <div class="custom-modal-body">
          <!-- Imagen del Modal -->
          <img src="{{ imagen_principal }}" alt="Imagen del Modal" class="custom-modal-image">
        </div>

        <!-- Footer del modal -->
        <div class="custom-modal-footer">
          <a href="/blog/{{ slug }}" class="custom-modal-link" target="_blank">Ver más detalles</a>
        </div>
        {{ /if }}
        {{ /collection:blog }}
      </div>
    </div>

    <!-- CSS -->
    <style>
    body.modal-open {
      overflow: hidden; /* Evita el scroll del body cuando el modal está abierto */
    }

    body.modal-open:before {
      content: "";
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.8); /* Fondo negro con opacidad */
      z-index: 11499; /* Un nivel por debajo del modal */
    }
    /* Estilo para el fondo del modal */
    .custom-modal {
      display: flex;
      position: fixed;
      z-index: 11500; /* Asegura que el modal esté encima de todo */
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      background-color: rgba(0, 0, 0, 0.8); /* Fondo negro con más opacidad */
      justify-content: center;
      align-items: center;
    }

    /* Contenedor del contenido del modal */
    .custom-modal-content {
      position: relative;
      background-color: #ffffff; /* Fondo blanco */
      border-radius: 15px;
      border: 1px solid #cccccc;
      overflow: hidden;
      width: 90%;
      max-width: 450px;
      margin-top: 10px;
      display: flex;
      flex-direction: column;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3); /* Sombra para darle profundidad */
    }

    /* Header del modal */
    .custom-modal-header {
      background-color: #f1f1f1; /* Fondo gris claro */
      border-bottom: 1px solid #cccccc; /* Línea divisoria */
      color: #333333;
      padding: 15px;
      font-size: 16px;
      font-weight: bold;
      text-align: center;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 50px;
    }

    /* Botón de cerrar (X) */
    .custom-close {
      color: #999999;
      font-size: 25px;
      font-weight: bold;
      cursor: pointer;
      margin-left: 15px;
    }
    .custom-close:hover,
    .custom-close:focus {
      color: #333333;
      text-decoration: none;
      cursor: pointer;
    }

    /* Contenido del cuerpo del modal */
    .custom-modal-body {
      padding: 20px;
      overflow-y: auto; /* Scroll vertical si el contenido excede la altura */
      text-align: center;
      font-size: 16px; /* Ajustar el tamaño de letra */
      line-height: 1.5;
    }

    /* Imagen del modal */
    .custom-modal-image {
      width: 300px;
      height: auto;

      object-fit: contain;
      margin: 0 auto;
      border-radius: 10px;
    }

    /* Footer del modal */
    .custom-modal-footer {
      background-color: #f1f1f1; /* Fondo gris claro */
      border-top: 1px solid #cccccc; /* Línea divisoria */
      padding: 15px;
      text-align: center;
      height: 60px;
    }

    /* Estilo para el enlace de redirección */
    .custom-modal-link {
      display: inline-block;
      padding: 10px 20px;
      background-color: #007bff; /* Azul */
      color: white;
      text-decoration: none;
      border-radius: 5px;
      font-size: 16px;
      font-weight: bold;
      transition: background-color 0.3s ease;
    }
    .custom-modal-link:hover {
      background-color: #0056b3; /* Azul más oscuro */
      color: white;
    }
    .custom-modal-link:visited {
      background-color: #007bff;
      color: white;
    }
    </style>

    <!-- JavaScript -->
    <script>
      // Obtener el modal y el botón de cerrar
      var modal = document.getElementById("customModal");
      var span = document.getElementsByClassName("custom-close")[0];

      // Mostrar el modal al cargar la página si hay contenido válido
      window.onload = function () {
        var modalContent = document.querySelector(".custom-modal-body img");
        if (modalContent && modalContent.getAttribute("src")) {
          modal.style.display = "flex"; // Mostrar el modal
        }
      };

      // Cerrar el modal cuando el usuario hace clic en el botón de cerrar
      span.onclick = function () {
        modal.style.display = "none";
      };

      // Mostrar el modal
      modal.style.display = "flex";
      document.body.classList.add("modal-open");

      // Cerrar el modal
      modal.style.display = "none";
      document.body.classList.remove("modal-open");

      // Cerrar el modal si el usuario hace clic fuera del contenido
      window.onclick = function (event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      };
    </script>
  mode: htmlmixed
---
## Bienvenido a la página web del VRIN!