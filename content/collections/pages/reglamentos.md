---
id: 87b3fbc4-779b-49e6-bf44-69b5f2a37cb8
blueprint: page
title: Reglamentos
texto_bienvenida: Reglamentos
author: 06ac68ab-d29f-41e9-9b9a-dd4da3996484
template: home
updated_by: 06ac68ab-d29f-41e9-9b9a-dd4da3996484
updated_at: 1784298720
block_types:
  -
    id: lkdih7d4
    template:
      code: |-
        <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="reglamentos-header-banner">
                                <h1>REGLAMENTOS Y BASES INSTITUCIONALES</h1>
                                <p>Documentación oficial y normativa vigente para el desarrollo de actividades de investigación.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="row justify-content-center">
                        <div class="col-md-12">
                            <div class="reglamentos-tabs">
                                <button class="reglamentos-tab active" data-tab="reglamento">
                                    <svg class="tab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                        <polyline points="14 2 14 8 20 8"></polyline>
                                        <line x1="16" y1="13" x2="8" y2="13"></line>
                                        <line x1="16" y1="17" x2="8" y2="17"></line>
                                        <polyline points="10 9 9 9 8 9"></polyline>
                                    </svg>
                                    Reglamentos
                                </button>
                                <button class="reglamentos-tab" data-tab="base">
                                    <svg class="tab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                        <polyline points="14 2 14 8 20 8"></polyline>
                                        <line x1="16" y1="13" x2="8" y2="13"></line>
                                        <line x1="16" y1="17" x2="8" y2="17"></line>
                                        <polyline points="10 9 9 9 8 9"></polyline>
                                    </svg>
                                    <span class="tab-text-full">Bases de Concursos</span>
                                    <span class="tab-text-short">Bases</span>
                                </button>
                            </div>

                            <div class="reglamentos-filters-row">
                                <div class="reglamentos-search-wrapper">
                                    <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <circle cx="11" cy="11" r="8"></circle>
                                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                    </svg>
                                    <input type="text" id="reglamentos-search-input" placeholder="Buscar reglamento, directiva o documento">
                                </div>
                                <div class="reglamentos-year-select-wrapper">
                                    <div class="reglamentos-custom-select-wrapper">
                                        <button type="button" class="reglamentos-custom-select-trigger">
                                            <span class="selected-value">Año</span>
                                            <svg class="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                <polyline points="6 9 12 15 18 9"></polyline>
                                            </svg>
                                        </button>
                                        <div class="reglamentos-custom-select-options">
                                            <div class="reglamentos-custom-option active" data-value="">Año</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="reglamentos-table-card">
                                <table class="reglamentos-table">
                                    <thead>
                                        <tr>
                                            <th class="col-num">N°</th>
                                            <th>DOCUMENTO</th>
                                            <th class="col-actions">ACCIÓN</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {{ collection:reglamentos sort="fecha_de_aprobacion:desc|orden:asc" }}
                                        <tr data-type="{{ reglamento_o_base }}" data-year="{{ fecha_de_aprobacion format='Y' }}">
                                            <td class="reglamentos-cell-num">{{ orden }}</td>
                                            <td>
                                                <div class="reglamentos-cell-title">
                                                    <span class="reglamentos-doc-title">{{ title }}</span>
                                                    <div class="reglamentos-doc-meta-row">
                                                        <span class="reglamentos-year-badge">{{ fecha_de_aprobacion format="Y" }}</span>
                                                        <span class="reglamentos-doc-meta" data-date="{{ fecha_de_aprobacion }}">
                                                            Aprobado: {{ fecha_de_aprobacion }}
                                                        </span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="reglamentos-cell-action">
                                                <div class="reglamentos-buttons-group">
                                                    <a href="{{ link_documento }}" target="_blank" class="reglamentos-btn-ver" title="Ver Documento">
                                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                            <circle cx="12" cy="12" r="3"></circle>
                                                        </svg>
                                                        Ver
                                                    </a>
                                                    <a href="{{ link_documento }}" target="_blank" class="reglamentos-btn-descargar" download title="Descargar PDF">
                                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                                            <polyline points="7 10 12 15 17 10"></polyline>
                                                            <line x1="12" y1="15" x2="12" y2="3"></line>
                                                        </svg>
                                                        Descargar PDF
                                                    </a>
                                                </div>
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
