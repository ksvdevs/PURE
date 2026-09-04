---
id: 3118ffee-ac7d-4d12-8875-6cea1d04e1bf
blueprint: page
title: 'Líneas de Investigación'
titulo_pagina: 'Líneas de Investigación - VRIN UNAMBA'
texto_bienvenida: 'Líneas de Investigación'
author: 06ac68ab-d29f-41e9-9b9a-dd4da3996484
template_imagen_fondo:
  code: null
  mode: htmlmixed
modal:
  code: null
  mode: htmlmixed
updated_by: 06ac68ab-d29f-41e9-9b9a-dd4da3996484
updated_at: 1779817520
template: home
block_types:
  -
    id: lkusbogn
    template:
      code: |-
        <!-- Breadcrumb -->
        <nav class="grupos-breadcrumb" aria-label="Migas de pan">
            <ol class="grupos-breadcrumb__list">
                <li class="grupos-breadcrumb__item"><a href="/">Inicio</a></li>
                <li class="grupos-breadcrumb__item"><a href="/investigacion">Investigación</a></li>
                <li class="grupos-breadcrumb__item" aria-current="page">Líneas de Investigación</li>
            </ol>
        </nav>

        <header class="grupos-header grupos-top-section lineas-header">
            <h1 class="grupos-main-title lineas-main-title">Líneas de Investigación</h1>
            <p class="grupos-subtitle">
                Conoce el catálogo oficial de líneas de investigación que orienta la producción científica, tecnológica y humanística de la Universidad Nacional Micaela Bastidas de Apurímac, en respuesta a las necesidades de la región y del país.
            </p>
        </header>


        <div class="container-fluid renacyt-container-padding">
            <!-- Barra de Navegación de Pestañas -->
            <div class="lineas-tabs-container vrin-tabs" role="tablist" aria-label="Categorías de líneas de investigación">
                <button type="button" class="lineas-tab-btn vrin-tab active" data-tab="vigentes" id="tab-btn-vigentes" role="tab" aria-selected="true" aria-controls="tab-vigentes">
                    <i class="fa fa-check-circle" aria-hidden="true"></i> Líneas Vigentes
                </button>
                <button type="button" class="lineas-tab-btn vrin-tab" data-tab="no-vigentes" id="tab-btn-no-vigentes" role="tab" aria-selected="false" aria-controls="tab-no-vigentes">
                    <i class="fa fa-history" aria-hidden="true"></i> Líneas No Vigentes (Histórico)
                </button>
            </div>

            <!-- ==========================================
                 PESTAÑA 1: LÍNEAS VIGENTES
                 ========================================== -->
            <div id="tab-vigentes" class="lineas-tab-content" role="tabpanel" aria-labelledby="tab-btn-vigentes">
                <!-- Caja de Información de Cabecera -->
                <div class="lineas-info-box">
                    <h4 class="vrin-section-title">Catálogo de Líneas Vigentes</h4>
                    <p>Mediante Resolución N.° 011-2026-CU-UNAMBA, el Consejo Universitario aprobó el catálogo de las 7 líneas de investigación elaborado por el Vicerrectorado de Investigación, las cuales se encuentran vigentes a la fecha.</p>
                </div>

                <!-- Panel de Distribución por Línea de Investigación -->
                <section class="chart-panel mb-5" aria-label="Gráfico de distribución por línea de investigación">
                    <div class="chart-panel-header">
                        <h3 class="chart-panel-title">Distribución por Línea de Investigación</h3>
                        <span class="chart-axis-title">Participación (%)</span>
                    </div>

                    <!-- Contenedor del Gráfico con CSS Grid/Flex -->
                    <div class="chart-card-wrapper">
                        <div class="chart-card">
                            <div class="chart-container">
                                <!-- Líneas de fondo del gráfico -->
                                <div class="chart-grid-lines" aria-hidden="true">
                                    <div class="chart-grid-line" data-value="100"></div>
                                    <div class="chart-grid-line" data-value="75"></div>
                                    <div class="chart-grid-line" data-value="50"></div>
                                    <div class="chart-grid-line" data-value="25"></div>
                                    <div class="chart-grid-line" data-value="0"></div>
                                </div>

                                <!-- Barras de Porcentajes -->
                                <div class="chart-bar-wrapper">
                                    <div class="chart-bar-highlight"></div>
                                    <div class="chart-bar color-navy" style="height: 100%; animation-delay: 0.1s;">
                                        <div class="chart-bar-val">100%</div>
                                        <div class="chart-tooltip">Tecnologías Habilitadoras: 100%</div>
                                    </div>
                                    <div class="chart-bar-label">LI 1</div>
                                </div>

                                <div class="chart-bar-wrapper">
                                    <div class="chart-bar-highlight"></div>
                                    <div class="chart-bar color-blue-med" style="height: 33.3%; animation-delay: 0.2s;">
                                        <div class="chart-bar-val">33.3%</div>
                                        <div class="chart-tooltip">Inocuidad Alimentaria: 33.3%</div>
                                    </div>
                                    <div class="chart-bar-label">LI 2</div>
                                </div>

                                <div class="chart-bar-wrapper">
                                    <div class="chart-bar-highlight"></div>
                                    <div class="chart-bar color-blue-light" style="height: 22.2%; animation-delay: 0.3s;">
                                        <div class="chart-bar-val">22.2%</div>
                                        <div class="chart-tooltip">Sistemas Agropecuarios: 22.2%</div>
                                    </div>
                                    <div class="chart-bar-label">LI 3</div>
                                </div>

                                <div class="chart-bar-wrapper">
                                    <div class="chart-bar-highlight"></div>
                                    <div class="chart-bar color-cyan-blue" style="height: 44.4%; animation-delay: 0.4s;">
                                        <div class="chart-bar-val">44.4%</div>
                                        <div class="chart-tooltip">Recursos Hídricos y Riesgos: 44.4%</div>
                                    </div>
                                    <div class="chart-bar-label">LI 4</div>
                                </div>

                                <div class="chart-bar-wrapper">
                                    <div class="chart-bar-highlight"></div>
                                    <div class="chart-bar color-green-light" style="height: 100%; animation-delay: 0.5s;">
                                        <div class="chart-bar-val">100%</div>
                                        <div class="chart-tooltip">Gobernanza y Competitividad: 100%</div>
                                    </div>
                                    <div class="chart-bar-label">LI 5</div>
                                </div>

                                <div class="chart-bar-wrapper">
                                    <div class="chart-bar-highlight"></div>
                                    <div class="chart-bar color-green-med" style="height: 11.1%; animation-delay: 0.6s;">
                                        <div class="chart-bar-val">11.1%</div>
                                        <div class="chart-tooltip">Calidad Educativa: 11.1%</div>
                                    </div>
                                    <div class="chart-bar-label">LI 6</div>
                                </div>

                                <div class="chart-bar-wrapper">
                                    <div class="chart-bar-highlight"></div>
                                    <div class="chart-bar color-green-dark" style="height: 88.9%; animation-delay: 0.7s;">
                                        <div class="chart-bar-val">88.9%</div>
                                        <div class="chart-tooltip">Interculturalidad y Género: 88.9%</div>
                                    </div>
                                    <div class="chart-bar-label">LI 7</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Cabecera del Listado Oficial -->
                <div class="listado-header">
                    <h5 class="listado-title">
                        <i class="fa fa-file-text" aria-hidden="true"></i> Listado Oficial
                    </h5>
                    <a href="/assets/vrin/documentos/catalogo_lineas_vigentes.pdf" class="btn-download-pdf" target="_blank" rel="noopener noreferrer">
                        <i class="fa fa-download" aria-hidden="true"></i> Descargar PDF
                    </a>
                </div>

                <!-- Acordeón de Líneas Vigentes -->
                <div class="lineas-accordion">
                    <div class="accordion-thead" aria-hidden="true">
                        <div class="th-codigo">CÓDIGO</div>
                        <div class="th-nombre">NOMBRE DE LA LÍNEA DE INVESTIGACIÓN</div>
                    </div>

                    <!-- LI 1 -->
                    <div class="accordion-row">
                        <button type="button" class="accordion-header" style="border: 0;" onclick="toggleAccordion(this)" aria-expanded="false">
                            <span class="td-codigo">LI 1</span>
                            <span class="td-nombre">Tecnologías Habilitadoras y Sistemas Digitales para la Productividad</span>
                            <span class="td-icon"><i class="fa fa-chevron-down" aria-hidden="true"></i></span>
                        </button>
                        <div class="accordion-body">
                            <div class="accordion-body-inner">
                                <ul>
                                    <li>Inteligencia Artificial y Aprendizaje Automático aplicado a procesos productivos.</li>
                                    <li>Internet de las Cosas (IoT) y Sensores inteligentes en la industria.</li>
                                    <li>Sistemas de información y transformación digital de organizaciones.</li>
                                    <li>Ciberseguridad y protección de datos.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- LI 2 -->
                    <div class="accordion-row">
                        <button type="button" class="accordion-header" style="border: 0;" onclick="toggleAccordion(this)" aria-expanded="false">
                            <span class="td-codigo">LI 2</span>
                            <span class="td-nombre">Gestión de la Inocuidad alimentaria y Bioprocesos para el Desarrollo de la Cadena Agroindustrial</span>
                            <span class="td-icon"><i class="fa fa-chevron-down" aria-hidden="true"></i></span>
                        </button>
                        <div class="accordion-body">
                            <div class="accordion-body-inner">
                                <ul>
                                    <li>Control de calidad microbiológica y fisicoquímica de alimentos.</li>
                                    <li>Desarrollo de nuevos productos agroindustriales y envases activos.</li>
                                    <li>Bioprocesos industriales y valorización de subproductos agropecuarios.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- LI 3 -->
                    <div class="accordion-row">
                        <button type="button" class="accordion-header" style="border: 0;" onclick="toggleAccordion(this)" aria-expanded="false">
                            <span class="td-codigo">LI 3</span>
                            <span class="td-nombre">Desarrollo de Modelos y Sostenibilidad de Sistemas Agropecuarios</span>
                            <span class="td-icon"><i class="fa fa-chevron-down" aria-hidden="true"></i></span>
                        </button>
                        <div class="accordion-body">
                            <div class="accordion-body-inner">
                                <ul>
                                    <li>Producción agrícola sostenible y agroecología.</li>
                                    <li>Sanidad animal y mejoramiento genético en ganadería.</li>
                                    <li>Conservación de suelos, pastos naturales y biodiversidad andina.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- LI 4 -->
                    <div class="accordion-row">
                        <button type="button" class="accordion-header" style="border: 0;" onclick="toggleAccordion(this)" aria-expanded="false">
                            <span class="td-codigo">LI 4</span>
                            <span class="td-nombre">Gestión Integrada y Sostenible de Recursos Hídricos y Riesgos Geológicos para la Planificación Territorial</span>
                            <span class="td-icon"><i class="fa fa-chevron-down" aria-hidden="true"></i></span>
                        </button>
                        <div class="accordion-body">
                            <div class="accordion-body-inner">
                                <ul>
                                    <li>Monitoreo, calidad y conservación de cuencas hidrográficas.</li>
                                    <li>Estudio de riesgos de desastres geológicos e hidrológicos.</li>
                                    <li>Planificación territorial y adaptación al cambio climático.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- LI 5 -->
                    <div class="accordion-row">
                        <button type="button" class="accordion-header" style="border: 0;" onclick="toggleAccordion(this)" aria-expanded="false">
                            <span class="td-codigo">LI 5</span>
                            <span class="td-nombre">Gestión y desarrollo de modelos de gobernanza pública y privada para el fortalecimiento organizacional y de la Competitividad</span>
                            <span class="td-icon"><i class="fa fa-chevron-down" aria-hidden="true"></i></span>
                        </button>
                        <div class="accordion-body">
                            <div class="accordion-body-inner">
                                <ul>
                                    <li>Políticas públicas, gestión institucional y descentralización.</li>
                                    <li>Competitividad empresarial, emprendimiento e innovación.</li>
                                    <li>Finanzas corporativas y responsabilidad social empresarial.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- LI 6 -->
                    <div class="accordion-row">
                        <button type="button" class="accordion-header" style="border: 0;" onclick="toggleAccordion(this)" aria-expanded="false">
                            <span class="td-codigo">LI 6</span>
                            <span class="td-nombre">Desarrollo de Modelos de Pedagogía Intercultural y Gestión de la Calidad Educativa para el Desarrollo Humano</span>
                            <span class="td-icon"><i class="fa fa-chevron-down" aria-hidden="true"></i></span>
                        </button>
                        <div class="accordion-body">
                            <div class="accordion-body-inner">
                                <ul>
                                    <li>Didáctica de la educación intercultural bilingüe (EIB).</li>
                                    <li>Gestión de la calidad educativa y acreditación institucional.</li>
                                    <li>Psicología educativa y desarrollo infantil.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- LI 7 -->
                    <div class="accordion-row">
                        <button type="button" class="accordion-header" style="border: 0;" onclick="toggleAccordion(this)" aria-expanded="false">
                            <span class="td-codigo">LI 7</span>
                            <span class="td-nombre">Enfoques Democráticos, Interculturalidad, Género y Desarrollo Sostenible</span>
                            <span class="td-icon"><i class="fa fa-chevron-down" aria-hidden="true"></i></span>
                        </button>
                        <div class="accordion-body">
                            <div class="accordion-body-inner">
                                <ul>
                                    <li>Ciudadanía, derechos humanos y resolución de conflictos sociales.</li>
                                    <li>Estudios de género y políticas de inclusión social.</li>
                                    <li>Desarrollo sostenible y cosmovisión andina.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- ==========================================
                 PESTAÑA 2: LÍNEAS NO VIGENTES (HISTÓRICO)
                 ========================================== -->
            <div id="tab-no-vigentes" class="lineas-tab-content d-none" role="tabpanel" aria-labelledby="tab-btn-no-vigentes">
                <!-- Caja de Información del Historial -->
                <div class="lineas-info-box border-red">
                    <h4 class="vrin-section-title">Historial de Líneas</h4>
                    <p>Estas líneas corresponden a periodos anteriores y se mantienen en nuestro repositorio histórico con fines de consulta y trazabilidad. No aplican para nuevas convocatorias de investigación.</p>
                </div>

                <!-- Cabecera del Listado Histórico -->
                <div class="listado-header">
                    <h5 class="listado-title font-red">
                        <i class="fa fa-history" aria-hidden="true"></i> Archivo de Líneas Anteriores
                    </h5>
                    <a href="/assets/vrin/documentos/catalogo_lineas_historico.pdf" class="btn-download-historico" target="_blank" rel="noopener noreferrer">
                        <i class="fa fa-download" aria-hidden="true"></i> Descargar Histórico
                    </a>
                </div>

                <!-- Tabla del Histórico -->
                <div class="table-responsive-wrapper">
                    <table class="table-historico">
                        <thead>
                            <tr>
                                <th>ÁREA / ESCUELA</th>
                                <th>LÍNEAS DE INVESTIGACIÓN</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="escuela-col">
                                    <div class="escuela-info-container">
                                        <img src="/assets/lineas_investigacion/inginieria_agroindustrial.jpg" alt="Logo de Ingeniería Agroindustrial" class="escuela-logo" width="44" height="44">
                                        <span class="escuela-name">Ingeniería Agroindustrial</span>
                                    </div>
                                </td>
                                <td>
                                    <ul>
                                        <li>Caracterización, desarrollo de procesos e innovación en la agroindustria.</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td class="escuela-col">
                                    <div class="escuela-info-container">
                                        <img src="/assets/lineas_investigacion/logo-administracion.jpg" alt="Logo de Administración" class="escuela-logo" width="44" height="44">
                                        <span class="escuela-name">Administración</span>
                                    </div>
                                </td>
                                <td>
                                    <ul>
                                        <li>Gestión empresarial.</li>
                                        <li>Gestión pública.</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td class="escuela-col">
                                    <div class="escuela-info-container">
                                        <img src="/assets/lineas_investigacion/log-informtica-sistemas.jpg" alt="Logo de Ingeniería Informática y Sistemas" class="escuela-logo" width="44" height="44">
                                        <span class="escuela-name">Ingeniería Informática y Sistemas</span>
                                    </div>
                                </td>
                                <td>
                                    <ul>
                                        <li>Ingeniería informática, industria y sociedad.</li>
                                        <li>Ingeniería de software e innovación tecnológica.</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td class="escuela-col">
                                    <div class="escuela-info-container">
                                        <img src="/assets/lineas_investigacion/logo-inicial.png" alt="Logo de Educación Inicial" class="escuela-logo" width="44" height="44">
                                        <span class="escuela-name">Educación Inicial</span>
                                    </div>
                                </td>
                                <td>
                                    <ul>
                                        <li>Educación inicial, desarrollo infantil y gestión pedagógica.</li>
                                        <li>Interculturalidad y cosmovisión andina.</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td class="escuela-col">
                                    <div class="escuela-info-container">
                                        <img src="/assets/lineas_investigacion/logo-civil.jpg" alt="Logo de Ingeniería Civil" class="escuela-logo" width="44" height="44">
                                        <span class="escuela-name">Ingeniería Civil</span>
                                    </div>
                                </td>
                                <td>
                                    <ul>
                                        <li>Ingeniería de la construcción.</li>
                                        <li>Ingeniería de materiales.</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td class="escuela-col">
                                    <div class="escuela-info-container">
                                        <img src="/assets/lineas_investigacion/ciencia_politica.jpeg" alt="Logo de Ciencia Política" class="escuela-logo" width="44" height="44">
                                        <span class="escuela-name">Ciencia Política</span>
                                    </div>
                                </td>
                                <td>
                                    <ul>
                                        <li>Sistema político y gobernabilidad.</li>
                                        <li>Teoría política y gobernabilidad.</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td class="escuela-col">
                                    <div class="escuela-info-container">
                                        <img src="/assets/lineas_investigacion/logo-minas.jpg" alt="Logo de Ingeniería de Minas" class="escuela-logo" width="44" height="44">
                                        <span class="escuela-name">Ingeniería de Minas</span>
                                    </div>
                                </td>
                                <td>
                                    <ul>
                                        <li>Minería, procesamiento de minerales.</li>
                                        <li>Geología, geotecnia y medio ambiente.</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td class="escuela-col">
                                    <div class="escuela-info-container">
                                        <img src="/assets/lineas_investigacion/logo-veterinaria.png" alt="Logo de Medicina Veterinaria y Zootecnia" class="escuela-logo" width="44" height="44">
                                        <span class="escuela-name">Medicina Veterinaria y Zootecnia</span>
                                    </div>
                                </td>
                                <td>
                                    <ul>
                                        <li>Ciencias veterinarias.</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td class="escuela-col">
                                    <div class="escuela-info-container">
                                        <img src="/assets/lineas_investigacion/logo-agroecologicas.jpg" alt="Logo de Ingeniería Agroecológica y Desarrollo Rural" class="escuela-logo" width="44" height="44">
                                        <span class="escuela-name">Ingeniería Agroecológica y Desarrollo Rural</span>
                                    </div>
                                </td>
                                <td>
                                    <ul>
                                        <li>Agua, agricultura, silvicultura y pecuaria sostenible.</li>
                                        <li>Biotecnología, fitomejoramiento y conservación de la biodiversidad.</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td class="escuela-col">
                                    <div class="escuela-info-container">
                                        <img src="/assets/lineas_investigacion/logo-humanidades.png" alt="Logo de Departamento Académico de Humanidades" class="escuela-logo" width="44" height="44">
                                        <span class="escuela-name">Departamento Académico de Humanidades</span>
                                    </div>
                                </td>
                                <td>
                                    <ul>
                                        <li>Desarrollo humano y calidad de vida.</li>
                                        <li>Sociedad e identidad nacional, territorios y cambios climáticos.</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td class="escuela-col">
                                    <div class="escuela-info-container">
                                        <img src="/assets/lineas_investigacion/logo-de-ciencias-basicas.png" alt="Logo de Departamento Académico de Ciencias Básicas" class="escuela-logo" width="44" height="44">
                                        <span class="escuela-name">Departamento Académico de Ciencias Básicas</span>
                                    </div>
                                </td>
                                <td>
                                    <ul>
                                        <li>Aplicación de la matemática, estadística, física, química y biología.</li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
      mode: htmlmixed
    type: template
    enabled: true
---
