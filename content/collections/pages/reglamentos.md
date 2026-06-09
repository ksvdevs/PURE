---
id: 87b3fbc4-779b-49e6-bf44-69b5f2a37cb8
blueprint: page
title: Reglamentos
texto_bienvenida: Reglamentos
author: 06ac68ab-d29f-41e9-9b9a-dd4da3996484
template: home
updated_by: 06ac68ab-d29f-41e9-9b9a-dd4da3996484
updated_at: 1781039542
block_types:
  -
    id: lkdih7d4
    template:
      code: |-
        <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="reglamentos-intro-box">
                                En esta sección encontrarás los reglamentos y bases de concursos vigentes del Vicerrectorado de Investigación de la Universidad Nacional Micaela Bastidas de Apurímac (UNAMBA).
                            </div>
                        </div>
                    </div>
                    
                    <div class="row justify-content-center">
                        <div class="col-lg-10 col-md-12">
                            <div class="reglamentos-filter-bar">
                                <div class="reglamentos-tabs">
                                    <button class="reglamentos-tab active" data-tab="reglamento">REGLAMENTOS</button>
                                    <button class="reglamentos-tab" data-tab="base">BASES DE CONCURSOS</button>
                                </div>
                                <div class="reglamentos-year-select-wrapper">
                                    <select id="reglamentos-year-select" class="reglamentos-select">
                                        <option value="">AÑO</option>
                                    </select>
                                </div>
                            </div>
                            
                            <div class="reglamentos-table-card">
                                <table class="reglamentos-table">
                                    <thead>
                                        <tr>
                                            <th class="col-num">N°</th>
                                            <th>REGLAMENTO</th>
                                            <th class="col-actions">ACCIONES</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {{ collection:reglamentos sort="orden asc" }}
                                        <tr data-type="{{ reglamento_o_base }}" data-year="{{ anio }}">
                                            <td class="reglamentos-cell-num">{{ orden }}</td>
                                            <td>
                                                <div class="reglamentos-cell-title">
                                                    <span class="reglamentos-doc-title">{{ title }}</span>
                                                    <span class="reglamentos-doc-meta">
                                                        Publicado: {{ fecha_publicacion format="d/m/Y" }} &bull; Año: {{ anio }}
                                                    </span>
                                                </div>
                                            </td>
                                            <td class="reglamentos-cell-action">
                                                <a href="{{ link_documento }}" target="_blank" class="reglamentos-btn-view" title="Ver Documento">
                                                    <svg viewBox="0 0 24 24">
                                                        <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                                                    </svg>
                                                </a>
                                            </td>
                                        </tr>
                                        {{ /collection:reglamentos }}
                                    </tbody>
                                </table>
                            </div>
                            
                            <div class="reglamentos-info-bar"></div>
                            <div class="reglamentos-pagination"></div>
                        </div>
                    </div>
                </div>
      mode: htmlmixed
    type: template
    enabled: true
template_imagen_fondo:
  code: null
  mode: htmlmixed
titulo_pagina: 'Reglamentos - Vicerrectorado de Investigacion'
modal:
  code: null
  mode: htmlmixed
---
