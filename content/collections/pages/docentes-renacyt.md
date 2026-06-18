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
        <div class="renacyt-header text-center">
            <h1 class="renacyt-main-title">Docentes RENACYT</h1>
            <p class="renacyt-subtitle">
                En este espacio encontrarás a los docentes investigadores reconocidos por su aporte al desarrollo académico y científico. Conoce a quienes, desde su especialidad, contribuyen al progreso de nuestra región y del país.
            </p>
        </div>

        <div class="container-fluid renacyt-container-padding">
            <!-- Panel de Distribución por Nivel -->
            <section class="chart-panel mb-5">
                <h3 class="chart-panel-title">Distribución por Nivel</h3>
                <div class="chart-content-row">
                    <!-- Left: Pie Chart -->
                    <div class="chart-left-side">
                        <div class="pie-chart-wrapper">
                            <svg class="donut-chart" viewBox="0 0 100 100" style="overflow: visible;">
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
                                <span class="summary-value" id="summaryTotal">60</span>
                            </div>
                            <div class="summary-card active-card">
                                <span class="summary-label">ACTIVOS</span>
                                <span class="summary-value" id="summaryActive">60</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Controles y Filtros de Búsqueda -->
            <div class="controls-wrapper mb-4">
                <div class="controls-left">
                    <div class="search-input-wrapper">
                        <i class="material-icons search-icon">search</i>
                        <input type="text" id="renacytSearch" class="form-control search-field" placeholder="Buscar por nombre o código RENACYT">
                    </div>
                </div>
                <div class="controls-right">
                    <div class="select-wrapper">
                        <select id="filterCarrera" class="form-control select-field">
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
                        <select id="filterEstado" class="form-control select-field">
                            <option value="all">Estado</option>
                            <option value="Activo">Activo</option>
                            <option value="Inactivo">Inactivo</option>
                        </select>
                    </div>
                    <button class="btn btn-export" id="btnExport">
                        <i class="fa fa-download mr-2"></i> Exportar Lista
                    </button>
                </div>
            </div>

            <!-- Tabla de Docentes -->
            <div class="table-responsive-wrapper shadow-sm">
                <table class="table table-hover table-renacyt">
                    <thead>
                        <tr>
                            <th>CÓDIGO RENACYT</th>
                            <th>INVESTIGADOR</th>
                            <th>RESOLUCIÓN VRI</th>
                            <th>FACULTAD</th>
                            <th>NIVEL</th>
                            <th>ESTADO</th>
                            <th>CTI VITAE</th>
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
                                <span class="badge-estado">{{ if estado }}Activo{{ else }}Inactivo{{ /if }}</span>
                            </td>
                            <td class="col-link">
                                <a href="{{link}}" target="_blank" class="btn-cti">
                                    <i class="fa fa-file-text-o"></i>
                                </a>
                            </td>
                        </tr>
                        {{/collection:doc_renacyt}}
                    </tbody>
                </table>
            </div>

            <!-- Mensaje sin resultados -->
            <div id="renacytNoResults" class="text-center py-5 d-none">
                <i class="material-icons text-muted" style="font-size: 48px;">search_off</i>
                <p class="mt-3 text-muted">No se encontraron docentes con los criterios de búsqueda seleccionados.</p>
            </div>

            <!-- Paginación -->
            <div class="row align-items-center mt-4 mb-5" id="renacytPaginationRow">
                <div class="col-sm-6 text-center text-sm-left mb-3 mb-sm-0">
                    <span class="pagination-info-text" id="renacytPageInfo">Mostrando 1º al 20º docentes</span>
                </div>
                <div class="col-sm-6 text-center text-sm-right">
                    <nav class="d-inline-block">
                        <ul class="custom-pagination" id="renacytPaginationControls">
                            <!-- Controles dinámicos -->
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
      mode: htmlmixed
    type: template
    enabled: true
modal:
  code: null
  mode: htmlmixed
---
