---
id: ebd9a7db-b27e-4ec7-9daf-021719964f20
blueprint: page
title: 'Docentes RENACYT'
texto_bienvenida: 'Docentes RENACYT'
author: 06ac68ab-d29f-41e9-9b9a-dd4da3996484
template: home
updated_by: 06ac68ab-d29f-41e9-9b9a-dd4da3996484
updated_at: 1692722354
titulo_pagina: 'Docentes RENACYT - VRIN UNAMBA'
template_imagen_fondo:
  code: |-
    <!--<div class="page-header header-filter " data-parallax="true" style="background-image: url('./assets/a_home_otros/bg4.jpg');">
        <div class="container">
            <div class="row">
                <div class="col-md-8 ml-auto mr-auto">
                    <div class="brand">
                        <h1 class="title">{{title}}</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>-->
  mode: htmlmixed
block_types:
  -
    id: lkf8qzde
    template:
      code: |-
        <nav class="grupos-breadcrumb" aria-label="Migas de pan">
            <ol class="grupos-breadcrumb__list">
                <li class="grupos-breadcrumb__item"><a href="/">Inicio</a></li>
                <li class="grupos-breadcrumb__item"><a href="/investigacion">Investigación</a></li>
                <li class="grupos-breadcrumb__item" aria-current="page">Docentes RENACYT</li>
            </ol>
        </nav>

        <div class="renacyt-container-padding">
            <!-- Header + Topbar en la misma fila -->
            <div class="row align-items-end grupos-top-section">
                <div class="col-lg-8 col-md-12 mb-3 mb-lg-0">
                    <header class="grupos-header">
                        <h1 class="grupos-main-title">Docentes RENACYT</h1>
                        <p class="grupos-subtitle">
                            En este espacio encontrarás a los docentes investigadores reconocidos por su aporte al desarrollo académico y científico. Conoce a quienes, desde su especialidad, contribuyen al progreso de nuestra región y del país.
                        </p>
                    </header>
                </div>
                <div class="col-lg-4 col-md-12">
                    <!-- Topbar: búsqueda + exportar -->
                    <div class="grupos-topbar">
                        <div class="search-input-wrapper">
                            <i class="material-icons search-icon" aria-hidden="true">search</i>
                            <input type="text" id="renacytTopSearch" class="form-control search-field" placeholder="Buscar por nombre o código RENACYT" aria-label="Buscar por nombre o código RENACYT">
                        </div>
                        <button type="button" id="btnExportTop" class="btn-exportar-lista" aria-label="Exportar lista de docentes RENACYT a Excel">
                            <i class="material-icons" aria-hidden="true">download</i>
                            <span>Exportar Lista</span>
                        </button>
                    </div>
                </div>
            </div>
            <!-- Panel de Distribución por Nivel -->
            <section class="chart-panel mb-5" aria-labelledby="chartPanelTitle">
                <h2 class="chart-panel-title" id="chartPanelTitle">Distribución por Nivel</h2>
                <div class="chart-content-row">
                    <!-- Left: Pie Chart -->
                    <div class="chart-left-side">
                        <div class="pie-chart-wrapper">
                            <svg class="donut-chart" viewBox="0 0 100 100" style="overflow: visible;" role="img" aria-label="Gráfico circular de distribución de docentes RENACYT por nivel">
                                <circle cx="50" cy="50" r="38" fill="#f1f5f9"></circle>
                                <g id="donutSegments"></g>
                            </svg>
                        </div>
                    </div>

                    <!-- Right: Leyenda y Estadísticas -->
                    <div class="chart-right-side">
                        <div class="legend-grid" id="chartLegend">
                            <!-- Carga dinámica -->
                        </div>
                        <div class="summary-stats-wrapper">
                            <div class="summary-card total-card">
                                <span class="summary-label">TOTAL DOCENTES</span>
                                <span class="summary-value" id="summaryTotal" aria-live="polite">60</span>
                            </div>
                            <div class="summary-card active-card">
                                <span class="summary-label">ACTIVOS</span>
                                <span class="summary-value" id="summaryActive" aria-live="polite">60</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Controles y Filtros de Búsqueda -->
            <div class="controls-wrapper mb-4">
                <div class="controls-left">
                    <div class="search-input-wrapper">
                        <i class="material-icons search-icon" aria-hidden="true">search</i>
                        <input type="text" id="renacytSearch" class="form-control search-field" placeholder="Buscar por nombre o código RENACYT" aria-label="Buscar por nombre o código RENACYT">
                    </div>
                </div>
                <div class="controls-right">
                    <div class="select-wrapper">
                        <select id="filterCarrera" class="form-control select-field" aria-label="Filtrar por carrera">
                            <option value="all">Carrera</option>
                            <option value="Administración">Administración</option>
                            <option value="Educación Inicial Intercultural Bilingüe">Educación Inicial Intercultural Bilingüe</option>
                            <option value="Ciencia Política y Gobernabilidad">Ciencia Política y Gobernabilidad</option>
                            <option value="Ingeniería Agroindustrial">Ingeniería Agroindustrial</option>
                            <option value="Ingeniería de Minas">Ingeniería de Minas</option>
                            <option value="Ingeniería Informática y Sistemas">Ingeniería Informática y Sistemas</option>
                            <option value="Ingeniería Civil">Ingeniería Civil</option>
                            <option value="Ingeniería Agroecológica y Desarrollo Rural">Ingeniería Agroecológica y Desarrollo Rural</option>
                            <option value="Medicina Veterinaria y Zootecnia">Medicina Veterinaria y Zootecnia</option>
                        </select>
                    </div>
                    <div class="select-wrapper">
                        <select id="filterEstado" class="form-control select-field" aria-label="Filtrar por estado">
                            <option value="all">Estado</option>
                            <option value="Activo">Activo</option>
                            <option value="Inactivo">Inactivo</option>
                        </select>
                    </div>
                    <button type="button" class="btn btn-export" id="btnExport">
                        <i class="fa fa-download mr-2" aria-hidden="true"></i> Exportar Lista
                    </button>
                </div>
            </div>

            <!-- Tabla de Docentes -->
            <div class="table-responsive-wrapper">
                 <table class="table table-hover table-renacyt">
                    <caption class="sr-only">Listado de docentes investigadores reconocidos por RENACYT, con código, resolución VRI, facultad, nivel, estado y enlace a CTI Vitae</caption>
                    <thead>
                        <tr>
                            <th scope="col">CÓDIGO</th>
                            <th scope="col">INVESTIGADOR</th>
                            <th scope="col">RESOLUCIÓN VRI</th>
                            <th scope="col">FACULTAD</th>
                            <th scope="col">NIVEL</th>
                            <th scope="col">ESTADO</th>
                            <th scope="col">CTI VITAE</th>
                        </tr>
                    </thead>
                    <tbody id="docentesTableBody">
                        {{collection:doc_renacyt}}
                        <tr class="docente-row"
                            data-id="{{id}}"
                            data-nombre="{{nombre}}"
                            data-gmail="{{gmail}}"
                            data-carrera="{{carrera:label}}"
                            data-link="{{link}}"
                            data-codigo-db="{{codigo_renacyt}}"
                            data-resolucion-db="{{resolucion}}"
                            data-nivel-db="{{nivel:label}}"
                            data-estado-db="{{ if estado }}Activo{{ else }}Inactivo{{ /if }}">
                            <td class="col-codigo">{{ if codigo_renacyt }}{{ codigo_renacyt }}{{ else }}Cargando...{{ /if }}</td>
                            <td class="col-investigador">
                                <span class="investigador-name">{{nombre}}</span>
                            </td>
                            <td class="col-resolucion">{{ if resolucion }}{{ resolucion }}{{ else }}Cargando...{{ /if }}</td>
                            <td class="col-facultad">{{carrera:label}}</td>
                            <td class="col-nivel">
                                <span class="badge-nivel">{{ if nivel:label }}{{ nivel:label }}{{ else }}I{{ /if }}</span>
                            </td>
                            <td class="col-estado">
                                <span class="badge-estado"><span class="status-dot" aria-hidden="true"></span><span class="badge-estado-text">{{ if estado }}Activo{{ else }}Inactivo{{ /if }}</span></span>
                            </td>
                            <td class="col-link">
                                <a href="{{link}}" target="_blank" class="btn-cti" aria-label="Ver CTI Vitae de {{nombre}}">
                                    <i class="fa fa-file-text-o" aria-hidden="true"></i>
                                </a>
                            </td>
                        </tr>
                        {{/collection:doc_renacyt}}
                    </tbody>
                </table>

                <!-- Paginación -->
                <div class="row align-items-center mx-0 mt-3 mb-2 px-3" id="renacytPaginationRow">
                    <div class="col-sm-6 text-center text-sm-left mb-3 mb-sm-0">
                        <span class="pagination-info-text" id="renacytPageInfo" aria-live="polite">Mostrando 1 al 10 de 25 docentes</span>
                    </div>
                    <div class="col-sm-6 text-center text-sm-right">
                        <nav class="d-inline-block" aria-label="Paginación de docentes">
                            <ul class="custom-pagination" id="renacytPaginationControls">
                                <!-- Controles dinámicos -->
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>

            <!-- Mensaje sin resultados -->
            <div id="renacytNoResults" class="text-center py-5 d-none" role="status" aria-live="polite">
                <i class="material-icons text-muted" style="font-size: 48px;" aria-hidden="true">search_off</i>
                <p class="mt-3 text-muted">No se encontraron docentes con los criterios de búsqueda seleccionados.</p>
            </div>
        </div>
      mode: htmlmixed
    type: template
    enabled: true
modal:
  code: null
  mode: htmlmixed
---
