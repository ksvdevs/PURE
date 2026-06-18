---
id: f3775bf4-df55-47c2-9b8a-137cd6f78377
blueprint: page
title: 'Alumnos Investigadores'
texto_bienvenida: 'Alumnos Investigadores'
author: 06ac68ab-d29f-41e9-9b9a-dd4da3996484
template: home
updated_by: 06ac68ab-d29f-41e9-9b9a-dd4da3996484
updated_at: 1691041466
titulo_pagina: 'Alumnos Investigadores - VRIN UNAMBA'
block_types:
  -
    id: lkdis9zv
    type: entradas_multiples
    enabled: true
    imagen:
      - a_home_otros/alumnosi.png
    template:
      code: |-
        <div class="renacyt-header text-center">
            <h1 class="renacyt-main-title">Alumnos Investigadores</h1>
            <p class="renacyt-subtitle">
                Conoce a nuestros alumnos investigadores financiados a través del Concurso de Subvención de Tesis promovido por el Vicerrectorado de Investigación de la UNAMBA.
            </p>
        </div>

        <div class="container-fluid renacyt-container-padding">
            <!-- Panel de Distribución por Escuela -->
            <section class="chart-panel mb-5">
                <h3 class="chart-panel-title">Distribución por Escuela Profesional</h3>
                <div class="chart-content-row">
                    <!-- Left: Pie Chart -->
                    <div class="chart-left-side">
                        <div class="pie-chart-wrapper">
                            <svg class="donut-chart" viewBox="0 0 100 100" style="overflow: visible;">
                                <circle cx="50" cy="50" r="38" fill="#f1f5f9"></circle>
                                <g id="alumnosInvSegments"></g>
                            </svg>
                        </div>
                    </div>

                    <!-- Right: Leyenda y Estadísticas -->
                    <div class="chart-right-side">
                        <div class="legend-grid" id="alumnosInvLegend">
                            <!-- Carga dinámica -->
                        </div>
                        <div class="summary-stats-wrapper" style="justify-content: center;">
                            <div class="summary-card total-card" style="max-width: 200px; width: 100%;">
                                <span class="summary-label">TOTAL ALUMNOS</span>
                                <span class="summary-value" id="alumnosInvTotal">0</span>
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
                        <input type="text" id="alumnosInvSearch" class="form-control search-field" placeholder="Buscar por responsable, asesor, proyecto o escuela">
                    </div>
                </div>
                <div class="controls-right">
                    <div class="select-wrapper">
                        <select id="alumnosInvFilterCarrera" class="form-control select-field">
                            <option value="all">Escuela Profesional</option>
                        </select>
                    </div>
                    <div class="select-wrapper">
                        <select id="alumnosInvFilterConcurso" class="form-control select-field">
                            <option value="all">Concurso</option>
                            <option value="1">Concurso 2018</option>
                            <option value="2">Concurso 2019-I</option>
                            <option value="3">Concurso 2019-II</option>
                            <option value="4">Concurso 2022-I</option>
                            <option value="5">Concurso 2022-II</option>
                            <option value="6">Concurso 2023-I</option>
                            <option value="7">Concurso 2023-II</option>
                            <option value="8">Concurso 2024-I</option>
                            <option value="9">Concurso 2024-II</option>
                            <option value="10">Concurso 2025-I</option>
                            <option value="11">Concurso 2025-II</option>
                            <option value="12">Concurso 2026-I</option>
                            <option value="13">Concurso 2026-II</option>
                        </select>
                    </div>
                    <button class="btn btn-export" id="alumnosInvExport">
                        <i class="fa fa-download mr-2"></i> Exportar Lista
                    </button>
                </div>
            </div>

            <!-- Tabla de Alumnos -->
            <div class="table-responsive-wrapper shadow-sm">
                <table class="table table-hover table-renacyt">
                    <thead>
                        <tr>
                            <th style="width: 60px; text-align: center;">N°</th>
                            <th>Asesor</th>
                            <th>Responsable (Alumno)</th>
                            <th>Nombre del Proyecto</th>
                            <th>Escuela Profesional</th>
                            <th style="text-align: center;">Monto (S/.)</th>
                            <th style="text-align: center;">Concurso</th>
                        </tr>
                    </thead>
                    <tbody id="alumnosInvTableBody">
                        {{collection:alumnos_investigadores}}
                        <tr class="alumnos-inv-row"
                            data-id="{{ id }}"
                            data-n="{{ title }}"
                            data-asesor="{{ asesor }}"
                            data-responsable="{{ responsable }}"
                            data-escuela="{{ escuela }}"
                            data-proyecto="{{ proyecto | strip_tags | safe_truncate:120 }}"
                            data-monto="{{ monto }}"
                            data-concurso-db="{{ concurso:label }}"
                            data-concurso-key="{{ concurso }}">
                            <td class="col-n" style="text-align: center; font-weight: bold;">{{ title }}</td>
                            <td class="col-asesor">{{ asesor }}</td>
                            <td class="col-responsable" style="font-weight: 700; color: var(--grupos-text-dark); text-transform: uppercase;">{{ responsable }}</td>
                            <td class="col-proyecto" style="font-size: 0.85rem; max-width: 320px;">{{ proyecto }}</td>
                            <td class="col-escuela" style="font-size: 0.85rem;">{{ escuela }}</td>
                            <td class="col-monto" style="text-align: center; font-weight: 700; color: #15803d;">S/. {{ monto }}</td>
                            <td class="col-concurso" style="text-align: center;">
                                <span class="badge-concurso" style="background-color: #f1f5f9; color: #475569; padding: 4px 10px; border-radius: 12px; font-size: 0.75rem; font-weight: 600; border: 1px solid #cbd5e1; display: inline-block;">
                                    Cargando...
                                </span>
                            </td>
                        </tr>
                        {{/collection:alumnos_investigadores}}
                    </tbody>
                </table>
            </div>

            <!-- Mensaje sin resultados -->
            <div id="alumnosInvNoResults" class="text-center py-5 d-none">
                <i class="material-icons text-muted" style="font-size: 48px;">search_off</i>
                <p class="mt-3 text-muted">No se encontraron alumnos con los criterios de búsqueda seleccionados.</p>
            </div>

            <!-- Paginación -->
            <div class="row align-items-center mt-4 mb-5" id="alumnosInvPaginationRow">
                <div class="col-sm-6 text-center text-sm-left mb-3 mb-sm-0">
                    <span class="pagination-info-text" id="alumnosInvPageInfo">Mostrando 1º al 20º alumnos</span>
                </div>
                <div class="col-sm-6 text-center text-sm-right">
                    <nav class="d-inline-block">
                        <ul class="custom-pagination" id="alumnosInvPaginationControls">
                            <!-- Controles dinámicos -->
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
      mode: htmlmixed
    imagen1: a_home_otros/alumnosi.png
template_imagen_fondo:
  code: |-
    <!--<div class="page-header header-filter " data-parallax="true" style="background-image: linear-gradient(195deg, rgb(22 191 105), rgb(85, 8, 116), rgb(167 13 131), rgb(18 3 16), #ff980000, rgb(12 135 11));">
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
  code: null
  mode: htmlmixed
---
