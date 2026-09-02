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
        <!-- Breadcrumb -->
        <nav class="grupos-breadcrumb" aria-label="Migas de pan">
            <ol class="grupos-breadcrumb__list">
                <li class="grupos-breadcrumb__item"><a href="/">Inicio</a></li>
                <li class="grupos-breadcrumb__item"><a href="/investigacion">Investigación</a></li>
                <li class="grupos-breadcrumb__item" aria-current="page">Grupos de Investigación</li>
            </ol>
        </nav>

        <div class="container-fluid grupos-container-padding">
            <!-- Header + Topbar en la misma fila -->
            <div class="row align-items-end grupos-top-section">
                <div class="col-lg-8 col-md-12 mb-3 mb-lg-0">
                    <header class="grupos-header">
                        <h1 class="grupos-main-title">Grupos de Investigación</h1>
                        <p class="grupos-subtitle">
                            Los grupos de investigación son equipos de trabajo conformados por docentes investigadores que comparten líneas de investigación y desarrollan proyectos científicos en áreas específicas del conocimiento, contribuyendo al avance de la ciencia y la sociedad.
                        </p>
                    </header>
                </div>
                <div class="col-lg-4 col-md-12">
                    <!-- Topbar: búsqueda + exportar -->
                    <div class="grupos-topbar">
                        <div class="search-input-wrapper">
                            <i class="material-icons search-icon" aria-hidden="true">search</i>
                            <input type="text" id="grupoSearch" class="form-control search-field" placeholder="Buscar por grupo o coordinador..." aria-label="Buscar por grupo o coordinador">
                        </div>
                        <button type="button" id="btnExportarLista" class="btn-exportar-lista" aria-label="Exportar lista de grupos a CSV">
                            <i class="material-icons" aria-hidden="true">download</i>
                            <span>Exportar Lista</span>
                        </button>
                    </div>
                </div>
            </div>

            <div class="row">
                <!-- Sidebar: Filtros -->
                <aside class="col-lg-3 col-md-4 col-12 mb-4">
                    <div class="filters-sidebar">
                        <h3 class="sidebar-title">
                            <i class="material-icons" aria-hidden="true">filter_list</i>
                            <span>Filtros</span>
                        </h3>

                        <!-- Filtro por Año -->
                        <div class="filter-group">
                            <button class="filter-group__toggle" aria-expanded="true" aria-controls="filterYear" type="button">
                                <span>AÑO</span>
                                <i class="material-icons filter-group__chevron" aria-hidden="true">expand_less</i>
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
                            <button class="filter-group__toggle" aria-expanded="true" aria-controls="filterLineas" type="button">
                                <span>LÍNEAS DE INVESTIGACIÓN</span>
                                <i class="material-icons filter-group__chevron" aria-hidden="true">expand_less</i>
                            </button>
                            <div class="filter-group__content open" id="filterLineas">
                                <label class="filter-checkbox">
                                    <input type="checkbox" name="filter-linea" value="1">
                                    <span class="checkmark"></span>
                                    <span class="filter-label">Caracterización, desarrollo de procesos e innovación en la agroindustria</span>
                                </label>
                                <label class="filter-checkbox">
                                    <input type="checkbox" name="filter-linea" value="2">
                                    <span class="checkmark"></span>
                                    <span class="filter-label">Gestión empresarial</span>
                                </label>
                                <label class="filter-checkbox">
                                    <input type="checkbox" name="filter-linea" value="3">
                                    <span class="checkmark"></span>
                                    <span class="filter-label">Gestión pública</span>
                                </label>
                                <label class="filter-checkbox">
                                    <input type="checkbox" name="filter-linea" value="4">
                                    <span class="checkmark"></span>
                                    <span class="filter-label">Minería, procesamiento de minerales</span>
                                </label>
                                <label class="filter-checkbox">
                                    <input type="checkbox" name="filter-linea" value="5">
                                    <span class="checkmark"></span>
                                    <span class="filter-label">Geología, geotecnia y medio ambiente</span>
                                </label>
                                <label class="filter-checkbox">
                                    <input type="checkbox" name="filter-linea" value="6">
                                    <span class="checkmark"></span>
                                    <span class="filter-label">Educación inicial, desarrollo infantil y gestión pedagógica</span>
                                </label>
                                <label class="filter-checkbox">
                                    <input type="checkbox" name="filter-linea" value="7">
                                    <span class="checkmark"></span>
                                    <span class="filter-label">Interculturalidad y cosmovisión andina</span>
                                </label>
                                <label class="filter-checkbox">
                                    <input type="checkbox" name="filter-linea" value="8">
                                    <span class="checkmark"></span>
                                    <span class="filter-label">Ingeniería de la construcción</span>
                                </label>
                                <label class="filter-checkbox">
                                    <input type="checkbox" name="filter-linea" value="9">
                                    <span class="checkmark"></span>
                                    <span class="filter-label">Ingeniería de materiales</span>
                                </label>
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
                                    <input type="checkbox" name="filter-linea" value="12">
                                    <span class="checkmark"></span>
                                    <span class="filter-label">Ingeniería de software e innovación tecnológica</span>
                                </label>
                                <label class="filter-checkbox">
                                    <input type="checkbox" name="filter-linea" value="13">
                                    <span class="checkmark"></span>
                                    <span class="filter-label">Modelos de gestión y calidad educativa</span>
                                </label>
                                <label class="filter-checkbox">
                                    <input type="checkbox" name="filter-linea" value="14">
                                    <span class="checkmark"></span>
                                    <span class="filter-label">Agua, agricultura, silvicultura y pecuaria sostenible</span>
                                </label>
                                <label class="filter-checkbox">
                                    <input type="checkbox" name="filter-linea" value="15">
                                    <span class="checkmark"></span>
                                    <span class="filter-label">Biotecnología, fitomejoramiento y conservación de la biodiversidad</span>
                                </label>
                                <label class="filter-checkbox">
                                    <input type="checkbox" name="filter-linea" value="16">
                                    <span class="checkmark"></span>
                                    <span class="filter-label">Sistema político y gobernabilidad</span>
                                </label>
                                <label class="filter-checkbox">
                                    <input type="checkbox" name="filter-linea" value="17">
                                    <span class="checkmark"></span>
                                    <span class="filter-label">Teoría política y gobernabilidad</span>
                                </label>
                                <label class="filter-checkbox">
                                    <input type="checkbox" name="filter-linea" value="18">
                                    <span class="checkmark"></span>
                                    <span class="filter-label">Aplicación de la matemática, estadística, física, química y biología</span>
                                </label>
                                <label class="filter-checkbox">
                                    <input type="checkbox" name="filter-linea" value="19">
                                    <span class="checkmark"></span>
                                    <span class="filter-label">Desarrollo humano y calidad de vida</span>
                                </label>
                                <label class="filter-checkbox">
                                    <input type="checkbox" name="filter-linea" value="20">
                                    <span class="checkmark"></span>
                                    <span class="filter-label">Sociedad e identidad nacional, territorios y cambios climáticos</span>
                                </label>
                            </div>
                        </div>

                        <!-- Filtro por Carrera -->
                        <div class="filter-group">
                            <button class="filter-group__toggle" aria-expanded="true" aria-controls="filterCarrera" type="button">
                                <span>CARRERA PROFESIONAL</span>
                                <i class="material-icons filter-group__chevron" aria-hidden="true">expand_less</i>
                            </button>
                            <div class="filter-group__content open" id="filterCarrera">
                                <label class="filter-checkbox">
                                    <input type="checkbox" name="filter-carrera" value="1">
                                    <span class="checkmark"></span>
                                    <span class="filter-label">Administración</span>
                                </label>
                                <label class="filter-checkbox">
                                    <input type="checkbox" name="filter-carrera" value="2">
                                    <span class="checkmark"></span>
                                    <span class="filter-label">Educación Inicial Intercultural Bilingüe</span>
                                </label>
                                <label class="filter-checkbox">
                                    <input type="checkbox" name="filter-carrera" value="3">
                                    <span class="checkmark"></span>
                                    <span class="filter-label">Ciencia Política y Gobernabilidad</span>
                                </label>
                                <label class="filter-checkbox">
                                    <input type="checkbox" name="filter-carrera" value="4">
                                    <span class="checkmark"></span>
                                    <span class="filter-label">Ingeniería Agroindustrial</span>
                                </label>
                                <label class="filter-checkbox">
                                    <input type="checkbox" name="filter-carrera" value="5">
                                    <span class="checkmark"></span>
                                    <span class="filter-label">Ingeniería de Minas</span>
                                </label>
                                <label class="filter-checkbox">
                                    <input type="checkbox" name="filter-carrera" value="6">
                                    <span class="checkmark"></span>
                                    <span class="filter-label">Ingeniería Informática y Sistemas</span>
                                </label>
                                <label class="filter-checkbox">
                                    <input type="checkbox" name="filter-carrera" value="7">
                                    <span class="checkmark"></span>
                                    <span class="filter-label">Ingeniería Civil</span>
                                </label>
                                <label class="filter-checkbox">
                                    <input type="checkbox" name="filter-carrera" value="8">
                                    <span class="checkmark"></span>
                                    <span class="filter-label">Ingeniería Agroecológica y Desarrollo Rural</span>
                                </label>
                                <label class="filter-checkbox">
                                    <input type="checkbox" name="filter-carrera" value="9">
                                    <span class="checkmark"></span>
                                    <span class="filter-label">Medicina Veterinaria y Zootecnia</span>
                                </label>
                                <label class="filter-checkbox">
                                    <input type="checkbox" name="filter-carrera" value="10">
                                    <span class="checkmark"></span>
                                    <span class="filter-label">Departamento Académico de Ciencias Básicas</span>
                                </label>
                                <label class="filter-checkbox">
                                    <input type="checkbox" name="filter-carrera" value="11">
                                    <span class="checkmark"></span>
                                    <span class="filter-label">Departamento Académico de Humanidades</span>
                                </label>
                                <label class="filter-checkbox">
                                    <input type="checkbox" name="filter-carrera" value="12">
                                    <span class="checkmark"></span>
                                    <span class="filter-label">Escuela de Posgrado</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </aside>

                <!-- Main Content Area -->
                <main class="col-lg-9 col-md-8 col-12">
                    <h2 class="sr-only">Listado de grupos de investigación</h2>
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
                             data-objetivos="{{objetivos | strip_tags}}"
                             tabindex="0"
                             role="button"
                             aria-haspopup="dialog"
                             aria-label="Ver detalles de {{nombre_grupo ?? title}}">
                            <article class="grupo-card">
                                <span class="grupo-card__status">
                                    <span class="status-dot" aria-hidden="true"></span>
                                    <span class="status-text">Activo</span>
                                </span>
                                <h3 class="grupo-card__title">{{nombre_grupo ?? title}}</h3>
                                <div class="grupo-card__coordinator">
                                    <div class="coordinator-avatar" aria-hidden="true">GI</div>
                                    <div class="coordinator-info">
                                        <span class="coordinator-label">Coordinador/a</span>
                                        <span class="coordinator-name">{{jefe_grupo}}</span>
                                        <span class="coordinator-email" data-email="">
                                            <i class="material-icons" aria-hidden="true">email</i>
                                            <span class="email-text"></span>
                                        </span>
                                    </div>
                                </div>
                                <div class="grupo-card__meta">
                                    <div class="grupo-card__meta-row grupo-card__meta-row--linea">
                                        <span class="grupo-card__meta-label">Línea de investigación</span>
                                        <span class="grupo-card__meta-value grupo-card__meta-value--linea" data-linea-key="{{lineas_de_investigacion}}">
                                            Línea de investigación
                                        </span>
                                    </div>
                                    <div class="grupo-card__meta-row">
                                        <span class="grupo-card__meta-label">Carrera profesional</span>
                                        <span class="grupo-card__meta-value grupo-card__meta-value--carrera" data-carrera-key="{{carrera}}">
                                            Carrera
                                        </span>
                                    </div>
                                </div>
                                <div class="grupo-card__footer">
                                    <span class="grupo-date">
                                        <i class="material-icons" aria-hidden="true">calendar_today</i>
                                        <span class="date-text">—</span>
                                    </span>
                                    <span class="btn-ver-detalles" aria-hidden="true">
                                        Ver Detalles
                                        <i class="material-icons" aria-hidden="true">arrow_forward</i>
                                    </span>
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
                    <div id="noResults" class="text-center py-5 d-none" role="status" aria-live="polite">
                        <i class="material-icons text-muted" style="font-size: 48px;" aria-hidden="true">search_off</i>
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
        <div class="grupo-modal" id="grupoModal" role="dialog" aria-modal="true" aria-labelledby="grupoModalTitle" aria-describedby="grupoModalLinea" hidden>
            <div class="grupo-modal__backdrop"></div>
            <div class="grupo-modal__container" role="document">
                <div class="grupo-modal__header">
                    <div>
                        <div class="grupo-modal__badges">
                            <span class="grupo-modal__badge grupo-modal__badge--estado" id="modalEstado">Activo</span>
                            <span class="grupo-modal__badge grupo-modal__badge--outline" id="modalCarrera">Carrera</span>
                        </div>
                        <h2 class="grupo-modal__title" id="grupoModalTitle">Nombre del Grupo</h2>
                        <p class="grupo-modal__linea" id="grupoModalLinea">Línea de investigación</p>
                    </div>
                    <button type="button" class="grupo-modal__close" aria-label="Cerrar detalles">
                        <i class="material-icons" aria-hidden="true">close</i>
                    </button>
                </div>
                <div class="grupo-modal__body">
                    <div class="grupo-modal__columns">
                        <div class="grupo-modal__column">
                            <span class="grupo-modal__label">Coordinador/a</span>
                            <div class="grupo-modal__coordinator">
                                <div class="coordinator-avatar" id="modalAvatar" aria-hidden="true">GI</div>
                                <div>
                                    <span class="coordinator-name" id="modalCoordinator">Nombre del coordinador</span>
                                    <span class="coordinator-email" id="modalEmail"></span>
                                </div>
                            </div>
                        </div>
                        <div class="grupo-modal__column">
                            <span class="grupo-modal__label">Integrantes <span class="integrantes-count-badge" id="modalIntegrantesCount">0</span></span>
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
                        <div class="grupo-modal__footer-actions">
                            <a href="#" id="modalResolucion" class="btn-ver-resolucion" target="_blank" rel="noopener noreferrer">
                                <i class="material-icons" aria-hidden="true">open_in_new</i>
                                Ver Resolución
                            </a>
                            <button type="button" class="grupo-modal__btn-cerrar">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      mode: htmlmixed
    type: template
    enabled: true
---
