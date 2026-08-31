---
id: 639f2a72-3578-468c-9c9a-81b28496af66
blueprint: page
title: 'Grupos de Investigación'
titulo_pagina: 'Grupos de Investigación'
texto_bienvenida: 'Grupos de Investigación'
author: 06ac68ab-d29f-41e9-9b9a-dd4da3996484
template: home
template_imagen_fondo:
  code: |-
    <!--<div class="page-header header-filter clear-filter purple-filter header-small" data-parallax="true" style="background-image: url('assets/a_home_otros/font-grupos.jpeg');">
        <div class="container">
          <div class="row">
            <div class="col-md-8 ml-auto mr-auto ">
             <h1 class="title">{{texto_bienvenida}}</h1>
            </div>
          </div>
        </div>
      </div>-->
  mode: htmlmixed
modal:
  code: null
  mode: htmlmixed
updated_by: 06ac68ab-d29f-41e9-9b9a-dd4da3996484
updated_at: 1692976578
block_types:
  -
    id: ll8y8w9d
    template:
      code: |-
        <div class="grupos-header text-center">
            <h1 class="grupos-main-title">Grupos de Investigación</h1>
            <p class="grupos-subtitle">
                Los grupos de investigación son equipos de trabajo conformados por docentes investigadores que comparten líneas de investigación y desarrollan proyectos científicos en áreas específicas del conocimiento, contribuyendo al avance de la ciencia y la sociedad.
            </p>
        </div>

        <div class="container-fluid grupos-container-padding">
            <div class="row">
                <!-- Sidebar: Filtros -->
                <aside class="col-lg-3 col-md-4 col-12 mb-4">
                    <div class="filters-sidebar">
                        <h3 class="sidebar-title">
                            <i class="material-icons align-middle mr-2">filter_list</i> Filtros
                        </h3>

                        <!-- Filtro por Año -->
                        <div class="filter-group">
                            <button class="filter-group__toggle" aria-expanded="true" aria-controls="filterYear">
                                <i class="material-icons">calendar_today</i>
                                <span>Año</span>
                                <i class="material-icons filter-group__chevron">expand_less</i>
                            </button>
                            <div class="filter-group__content open" id="filterYear">
                                <label class="filter-checkbox">
                                    <input type="radio" name="filter-year" value="all" checked>
                                    <span class="checkmark"></span>
                                    <span class="filter-label">Todos</span>
                                </label>
                                <label class="filter-checkbox">
                                    <input type="radio" name="filter-year" value="2025">
                                    <span class="checkmark"></span>
                                    <span class="filter-label">2025</span>
                                </label>
                                <label class="filter-checkbox">
                                    <input type="radio" name="filter-year" value="2024">
                                    <span class="checkmark"></span>
                                    <span class="filter-label">2024</span>
                                </label>
                                <label class="filter-checkbox">
                                    <input type="radio" name="filter-year" value="2023">
                                    <span class="checkmark"></span>
                                    <span class="filter-label">2023</span>
                                </label>
                                <label class="filter-checkbox">
                                    <input type="radio" name="filter-year" value="2022">
                                    <span class="checkmark"></span>
                                    <span class="filter-label">2022</span>
                                </label>
                            </div>
                        </div>

                        <!-- Filtro por Líneas de Investigación -->
                        <div class="filter-group">
                            <button class="filter-group__toggle" aria-expanded="true" aria-controls="filterLineas">
                                <i class="material-icons">lightbulb</i>
                                <span>Líneas de Investigación</span>
                                <i class="material-icons filter-group__chevron">expand_less</i>
                            </button>
                            <div class="filter-group__content open" id="filterLineas">
                                <label class="filter-checkbox">
                                    <input type="checkbox" name="filter-linea" value="10">
                                    <span class="checkmark"></span>
                                    <span class="filter-label">Ciencias veterinarias</span>
                                </label>
                                <label class="filter-checkbox">
                                    <input type="checkbox" name="filter-linea" value="11">
                                    <span class="checkmark"></span>
                                    <span class="filter-label">Ingeniería informática, industria y sociedad</span>
                                </label>
                                <label class="filter-checkbox">
                                    <input type="checkbox" name="filter-linea" value="19">
                                    <span class="checkmark"></span>
                                    <span class="filter-label">Desarrollo humano y calidad de vida</span>
                                </label>
                                <label class="filter-checkbox">
                                    <input type="checkbox" name="filter-linea" value="7">
                                    <span class="checkmark"></span>
                                    <span class="filter-label">Interculturalidad y cosmovisión andina</span>
                                </label>
                                <label class="filter-checkbox">
                                    <input type="checkbox" name="filter-linea" value="4">
                                    <span class="checkmark"></span>
                                    <span class="filter-label">Minería, procesamiento de minerales</span>
                                </label>
                            </div>
                        </div>

                        <!-- Filtro por Carrera -->
                        <div class="filter-group">
                            <button class="filter-group__toggle" aria-expanded="true" aria-controls="filterCarrera">
                                <i class="material-icons">school</i>
                                <span>Carrera</span>
                                <i class="material-icons filter-group__chevron">expand_less</i>
                            </button>
                            <div class="filter-group__content open" id="filterCarrera">
                                <label class="filter-checkbox">
                                    <input type="checkbox" name="filter-carrera" value="9">
                                    <span class="checkmark"></span>
                                    <span class="filter-label">Medicina Veterinaria y Zootecnia</span>
                                </label>
                                <label class="filter-checkbox">
                                    <input type="checkbox" name="filter-carrera" value="6">
                                    <span class="checkmark"></span>
                                    <span class="filter-label">Ingeniería Informática y Sistemas</span>
                                </label>
                                <label class="filter-checkbox">
                                    <input type="checkbox" name="filter-carrera" value="4">
                                    <span class="checkmark"></span>
                                    <span class="filter-label">Ingeniería Agroindustrial</span>
                                </label>
                                <label class="filter-checkbox">
                                    <input type="checkbox" name="filter-carrera" value="2">
                                    <span class="checkmark"></span>
                                    <span class="filter-label">Educación Inicial Intercultural Bilingüe</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </aside>

                <!-- Main Content Area -->
                <main class="col-lg-9 col-md-8 col-12">
                    <!-- Top Controls: Search input -->
                    <div class="grupos-topbar">
                        <div class="search-input-wrapper">
                            <i class="material-icons search-icon">search</i>
                            <input type="text" id="grupoSearch" class="form-control search-field" placeholder="Buscar por grupo o coordinador" aria-label="Buscar por grupo o coordinador">
                        </div>
                    </div>

                    <!-- Grid of Cards -->
                    <div class="row" id="gruposGrid">
                        {{collection:grupos_inv}}
                        <div class="col-xl-4 col-md-6 col-12 mb-4 grupo-card-container"
                             data-id="{{id}}"
                             data-nombre="{{nombre_grupo ?? title}}"
                             data-estado="{{ estado ? 'activo' : 'inactivo' }}"
                             data-jefe="{{jefe_grupo}}"
                             data-integrantes="{{integrantes | strip_tags}}"
                             data-carrera="{{carrera}}"
                             data-linea="{{lineas_de_investigacion}}"
                             data-fecha="{{fecha}}"
                             data-link="{{link}}"
                             data-email="{{correo_electronico}}"
                             data-descripcion="{{descripcion | strip_tags}}"
                             data-objetivos="{{objetivos | strip_tags}}">
                            <article class="grupo-card">
                                <div class="grupo-card__status">
                                    <span class="status-dot status-active" aria-hidden="true"></span>
                                    <span class="status-text">Activo</span>
                                </div>
                                <h3 class="grupo-card__title">{{nombre_grupo ?? title}}</h3>
                                <div class="grupo-card__coordinator">
                                    <div class="coordinator-avatar" aria-hidden="true">GI</div>
                                    <div class="coordinator-info">
                                        <span class="coordinator-label">Coordinador/a</span>
                                        <span class="coordinator-name">{{jefe_grupo}}</span>
                                        <span class="coordinator-email" data-email=""></span>
                                    </div>
                                </div>
                                <div class="grupo-card__meta">
                                    <div class="grupo-card__meta-row">
                                        <span class="grupo-card__meta-label">Línea</span>
                                        <span class="grupo-card__meta-value grupo-card__meta-value--linea" data-linea-key="{{lineas_de_investigacion}}">Línea de investigación</span>
                                    </div>
                                    <div class="grupo-card__meta-row">
                                        <span class="grupo-card__meta-label">Carrera</span>
                                        <span class="grupo-card__meta-value" data-carrera-key="{{carrera}}">Carrera</span>
                                    </div>
                                </div>
                                <div class="grupo-card__footer">
                                    <span class="grupo-date">
                                        <i class="material-icons" aria-hidden="true">calendar_today</i>
                                        <span class="date-text">—</span>
                                    </span>
                                    <button type="button" class="btn-ver-detalles" aria-label="Ver detalles de {{nombre_grupo}}">
                                        Ver Detalles
                                        <i class="material-icons" aria-hidden="true">arrow_forward</i>
                                    </button>
                                </div>

                                <!-- Raw hidden data for JS parsing -->
                                <div class="raw-integrantes-html" hidden>
                                    {{integrantes}}
                                </div>
                            </article>
                        </div>
                        {{/collection:grupos_inv}}
                    </div>

                    <!-- No Results message -->
                    <div id="noResults" class="text-center py-5 d-none">
                        <i class="material-icons text-muted" style="font-size: 48px;">search_off</i>
                        <p class="mt-3 text-muted">No se encontraron grupos de investigación con los filtros seleccionados.</p>
                    </div>

                    <!-- Pagination Row -->
                    <div class="row align-items-center mt-4 mb-5" id="paginationRow">
                        <div class="col-sm-6 text-center text-sm-left mb-3 mb-sm-0">
                            <span class="pagination-info-text" id="pageInfo">Página 1 de 1</span>
                        </div>
                        <div class="col-sm-6 text-center text-sm-right">
                            <nav class="d-inline-block" aria-label="Paginación de grupos">
                                <ul class="custom-pagination" id="paginationControls">
                                    <!-- Dynamic pagination loaded by Javascript -->
                                </ul>
                            </nav>
                        </div>
                    </div>
                </main>
            </div>
        </div>

        <!-- Modal de Detalles del Grupo -->
        <div class="grupo-modal" id="grupoModal" role="dialog" aria-modal="true" aria-labelledby="grupoModalTitle" hidden>
            <div class="grupo-modal__backdrop"></div>
            <div class="grupo-modal__container">
                <div class="grupo-modal__header">
                    <div>
                        <span class="grupo-modal__eyebrow">Información del grupo</span>
                        <h2 class="grupo-modal__title" id="grupoModalTitle">Nombre del Grupo</h2>
                        <div class="grupo-modal__badges">
                            <span class="grupo-modal__badge" id="modalCarrera">Carrera</span>
                            <span class="grupo-modal__badge grupo-modal__badge--outline" id="modalLinea">Línea de investigación</span>
                        </div>
                    </div>
                    <button type="button" class="grupo-modal__close" aria-label="Cerrar detalles">
                        <i class="material-icons">close</i>
                    </button>
                </div>
                <div class="grupo-modal__body">
                    <div class="grupo-modal__columns">
                        <div class="grupo-modal__column">
                            <span class="grupo-modal__label">Coordinador/a</span>
                            <div class="grupo-modal__coordinator">
                                <div class="coordinator-avatar" id="modalAvatar" aria-hidden="true">GI</div>
                                <span class="coordinator-name" id="modalCoordinator">Nombre del coordinador</span>
                            </div>
                        </div>
                        <div class="grupo-modal__column">
                            <span class="grupo-modal__label">Integrantes <span class="integrantes-count" id="modalIntegrantesCount">0</span></span>
                            <ul class="grupo-modal__integrantes" id="modalIntegrantes">
                                <!-- Populated by JS -->
                            </ul>
                        </div>
                    </div>

                    <div class="grupo-modal__section" id="modalDescripcionSection" hidden>
                        <span class="grupo-modal__label">Descripción</span>
                        <p class="grupo-modal__text" id="modalDescripcion"></p>
                    </div>

                    <div class="grupo-modal__section" id="modalObjetivosSection" hidden>
                        <span class="grupo-modal__label">Objetivos</span>
                        <ol class="grupo-modal__list" id="modalObjetivos"></ol>
                    </div>

                    <div class="grupo-modal__footer-meta">
                        <span class="grupo-date">
                            <i class="material-icons" aria-hidden="true">calendar_today</i>
                            <span id="modalFecha">—</span>
                        </span>
                        <a href="#" id="modalResolucion" class="btn-ver-resolucion" target="_blank" rel="noopener noreferrer">
                            <i class="material-icons" aria-hidden="true">description</i>
                            Ver Resolución
                        </a>
                    </div>
                </div>
                <div class="grupo-modal__actions">
                    <button type="button" class="grupo-modal__btn-cerrar">Cerrar</button>
                </div>
            </div>
        </div>

      mode: htmlmixed
    type: template
    enabled: true
---
