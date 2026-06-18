---
id: 9fd45702-7689-4991-93d5-6c15d837ab57
blueprint: page
title: 'Docentes Investigadores'
texto_bienvenida: 'Docentes Investigadores'
author: 06ac68ab-d29f-41e9-9b9a-dd4da3996484
template: home
updated_by: 06ac68ab-d29f-41e9-9b9a-dd4da3996484
updated_at: 1697559722
titulo_pagina: 'Docentes Investigadores - VRIN UNAMBA'
template_imagen_fondo:
  code: |-
    <!--<div class="page-header header-filter " data-parallax="true" style="background-image: url('./assets/a_home_otros/bg4.jpg');">
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
block_types:
  -
    id: lkf66ib4
    template:
      code: |-
        <div class="renacyt-header text-center">
            <h1 class="renacyt-main-title">Docentes Investigadores</h1>
            <p class="renacyt-subtitle">
                Aquí encontrarás a los docentes que, con su quehacer, contribuyen a la generación de nuevo conocimiento desde la Investigación, la Innovación y la Creación.
            </p>
        </div>

        <div class="container-fluid renacyt-container-padding">
            <!-- Panel de Distribución por Facultad -->
            <section class="chart-panel mb-5">
                <h3 class="chart-panel-title">Distribución por Facultad / Carrera</h3>
                <div class="chart-content-row">
                    <!-- Left: Pie Chart -->
                    <div class="chart-left-side">
                        <div class="pie-chart-wrapper">
                            <svg class="donut-chart" viewBox="0 0 100 100" style="overflow: visible;">
                                <circle cx="50" cy="50" r="38" fill="#f1f5f9"></circle>
                                <g id="docentesInvSegments"></g>
                            </svg>
                        </div>
                    </div>

                    <!-- Right: Leyenda y Estadísticas -->
                    <div class="chart-right-side">
                        <div class="legend-grid" id="docentesInvLegend">
                            <!-- Carga dinámica -->
                        </div>
                        <div class="summary-stats-wrapper">
                            <div class="summary-card total-card">
                                <span class="summary-label">TOTAL DOCENTES</span>
                                <span class="summary-value" id="docentesInvTotal">0</span>
                            </div>
                            <div class="summary-card active-card">
                                <span class="summary-label">ACTIVOS</span>
                                <span class="summary-value" id="docentesInvActive">0</span>
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
                        <input type="text" id="docentesInvSearch" class="form-control search-field" placeholder="Buscar por investigador, proyecto o departamento">
                    </div>
                </div>
                <div class="controls-right">
                    <div class="select-wrapper">
                        <select id="docentesInvFilterCarrera" class="form-control select-field">
                            <option value="all">Carrera / Depto</option>
                        </select>
                    </div>
                    <div class="select-wrapper">
                        <select id="docentesInvFilterEstado" class="form-control select-field">
                            <option value="all">Estado</option>
                            <option value="Activo">Activo</option>
                            <option value="Inactivo">Inactivo</option>
                        </select>
                    </div>
                    <button class="btn btn-export" id="docentesInvExport">
                        <i class="fa fa-download mr-2"></i> Exportar Lista
                    </button>
                </div>
            </div>

            <!-- Tabla de Docentes -->
            <div class="table-responsive-wrapper shadow-sm">
                <table class="table table-hover table-renacyt">
                    <thead>
                        <tr>
                            <th style="width: 60px; text-align: center;">N°</th>
                            <th>Investigador</th>
                            <th>Nombre del Proyecto</th>
                            <th>Facultad / Departamento</th>
                            <th>Nivel</th>
                            <th>Estado</th>
                            <th>Resolución VRI</th>
                            <th>CTI VITAE</th>
                        </tr>
                    </thead>
                    <tbody id="docentesInvTableBody">
                        {{collection:docentes_inv sort="n"}}
                        <tr class="docentes-inv-row"
                            data-n="{{ n }}"
                            data-nombre="{{ title }}"
                            data-correo="{{ correo }}"
                            data-departamento="{{ departamento_academico }}"
                            data-proyecto="{{ nombre_proyecto | strip_tags | safe_truncate:120 }}"
                            data-nivel-db="{{ nivel:value || nivel:label || nivel }}"
                            data-estado-db="{{ if estado }}Activo{{ else }}Inactivo{{ /if }}"
                            data-resolucion-db="{{ resolucion }}"
                            data-link="{{ link }}">
                            <td class="col-n" style="text-align: center; font-weight: bold;">{{ n }}</td>
                            <td class="col-investigador">
                                <span class="investigador-name">{{ title }}</span>
                            </td>
                            <td class="col-proyecto" style="font-size: 0.85rem; max-width: 320px;">
                                {{ nombre_proyecto }}
                            </td>
                            <td class="col-facultad" style="font-size: 0.85rem;">{{ departamento_academico }}</td>
                            <td class="col-nivel">
                                <span class="badge-nivel">A</span>
                            </td>
                            <td class="col-estado">
                                <span class="badge-estado">Activo</span>
                            </td>
                            <td class="col-resolucion">Cargando...</td>
                            <td class="col-link">
                                {{ if link }}
                                <a href="{{ link }}" target="_blank" class="btn-cti">
                                    <i class="fa fa-file-text-o"></i>
                                </a>
                                {{ else }}
                                <span class="text-muted">-</span>
                                {{ /if }}
                            </td>
                        </tr>
                        {{/collection:docentes_inv}}
                    </tbody>
                </table>
            </div>

            <!-- Mensaje sin resultados -->
            <div id="docentesInvNoResults" class="text-center py-5 d-none">
                <i class="material-icons text-muted" style="font-size: 48px;">search_off</i>
                <p class="mt-3 text-muted">No se encontraron docentes con los criterios de búsqueda seleccionados.</p>
            </div>

            <!-- Paginación -->
            <div class="row align-items-center mt-4 mb-5" id="docentesInvPaginationRow">
                <div class="col-sm-6 text-center text-sm-left mb-3 mb-sm-0">
                    <span class="pagination-info-text" id="docentesInvPageInfo">Mostrando 1º al 20º docentes</span>
                </div>
                <div class="col-sm-6 text-center text-sm-right">
                    <nav class="d-inline-block">
                        <ul class="custom-pagination" id="docentesInvPaginationControls">
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
