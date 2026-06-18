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
                            <i class="material-icons align-middle mr-2">filter_list</i> FILTROS
                        </h3>
                        <ul class="nav flex-column filter-list-items">
                            <li class="nav-item">
                                <button class="nav-link filter-btn active" data-faculty="all">
                                    Todos
                                </button>
                            </li>
                            <li class="nav-item">
                                <button class="nav-link filter-btn" data-faculty="Administración">
                                    Administración
                                </button>
                            </li>
                            <li class="nav-item">
                                <button class="nav-link filter-btn" data-faculty="Ciencia Política">
                                    Ciencia Política
                                </button>
                            </li>
                            <li class="nav-item">
                                <button class="nav-link filter-btn" data-faculty="Ingeniería Civil">
                                    Ingeniería Civil
                                </button>
                            </li>
                            <li class="nav-item">
                                <button class="nav-link filter-btn" data-faculty="Departamento Académico de Humanidades">
                                    Departamento Académico de Humanidades
                                </button>
                            </li>
                            <li class="nav-item">
                                <button class="nav-link filter-btn" data-faculty="Ingeniería Agroforestal e Intercultural Bilingüe">
                                    Ingeniería Agroforestal e Intercultural Bilingüe
                                </button>
                            </li>
                            <li class="nav-item">
                                <button class="nav-link filter-btn" data-faculty="Ingeniería Agroforestal y Sostenibilidad">
                                    Ingeniería Agroforestal y Sostenibilidad
                                </button>
                            </li>
                            <li class="nav-item">
                                <button class="nav-link filter-btn" data-faculty="Ingeniería Agronómica">
                                    Ingeniería Agronómica
                                </button>
                            </li>
                            <li class="nav-item">
                                <button class="nav-link filter-btn" data-faculty="Ingeniería de Sistemas">
                                    Ingeniería de Sistemas
                                </button>
                            </li>
                            <li class="nav-item">
                                <button class="nav-link filter-btn" data-faculty="Ingeniería de Minas">
                                    Ingeniería de Minas
                                </button>
                            </li>
                            <li class="nav-item">
                                <button class="nav-link filter-btn" data-faculty="Medicina Veterinaria y Zootecnia">
                                    Medicina Veterinaria y Zootecnia
                                </button>
                            </li>
                        </ul>
                    </div>
                </aside>

                <!-- Main Content Area -->
                <main class="col-lg-9 col-md-8 col-12">
                    <!-- Top Controls: Year tabs + Search input -->
                    <div class="row align-items-center mb-4">
                        <div class="col-xl-6 col-lg-7 col-md-12 mb-3 mb-lg-0">
                            <div class="year-tabs-wrapper">
                                <button class="year-tab-btn active" data-year="all">Todos</button>
                                <button class="year-tab-btn" data-year="2024">2024</button>
                                <button class="year-tab-btn" data-year="2023">2023</button>
                                <button class="year-tab-btn" data-year="2022">2022</button>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-5 col-md-12">
                            <div class="search-input-wrapper">
                                <i class="material-icons search-icon">search</i>
                                <input type="text" id="grupoSearch" class="form-control search-field" placeholder="Buscar por nombre, código o facultad">
                            </div>
                        </div>
                    </div>

                    <!-- Grid of Cards -->
                    <div class="row" id="gruposGrid">
                        {{collection:grupos_inv}}
                        <div class="col-xl-4 col-md-6 col-12 mb-4 grupo-card-container" 
                             data-id="{{id}}"
                             data-nombre="{{nombre_grupo}}"
                             data-jefe="{{jefe_grupo}}"
                             data-integrantes="{{integrantes | strip_tags}}">
                            <div class="grupo-card">
                                <div class="card-header-meta">
                                    <h4 class="grupo-category-title">General</h4>
                                    <span class="badge badge-code">GI</span>
                                </div>
                                <div class="card-body-content">
                                    <span class="label-heading text-uppercase">Coordinador/a</span>
                                    <h5 class="coordinador-name">{{jefe_grupo}}</h5>
                                    
                                    <div class="integrantes-section">
                                        <div class="integrantes-label-wrapper">
                                            <span class="integrantes-label">Integrantes</span>
                                            <span class="integrantes-count">0</span>
                                        </div>
                                        <ul class="integrantes-list">
                                            <!-- List populated by JavaScript -->
                                        </ul>
                                    </div>
                                    
                                    <!-- Raw hidden integrantes list to be parsed by JavaScript -->
                                    <div class="raw-integrantes-html" style="display:none;">
                                        {{integrantes}}
                                    </div>
                                </div>
                                <div class="card-footer-meta">
                                    <span class="doc-date">
                                        <i class="material-icons mr-1">calendar_today</i>
                                        <span class="date-text">20 de May, 2024</span>
                                    </span>
                                    <a href="#" class="btn-ver-resolucion" target="_blank">
                                        <i class="material-icons mr-1">description</i> Ver Resolución
                                    </a>
                                </div>
                            </div>
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
                            <span class="pagination-info-text" id="pageInfo">Página 1 de 3</span>
                        </div>
                        <div class="col-sm-6 text-center text-sm-right">
                            <nav class="d-inline-block">
                                <ul class="custom-pagination" id="paginationControls">
                                    <!-- Dynamic pagination loaded by Javascript -->
                                </ul>
                            </nav>
                        </div>
                    </div>
                </main>
            </div>
        </div>

      mode: htmlmixed
    type: template
    enabled: true
---
