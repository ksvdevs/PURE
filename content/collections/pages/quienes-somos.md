---
id: 01c5d506-c6c3-437f-94c0-233432f549d8
blueprint: page
title: 'Quiénes somos'
titulo_pagina: 'Quiénes Somos'
author: 06ac68ab-d29f-41e9-9b9a-dd4da3996484
template_imagen_fondo:
  code: null
  mode: htmlmixed
modal:
  code: null
  mode: htmlmixed
updated_by: 06ac68ab-d29f-41e9-9b9a-dd4da3996484
updated_at: 1782323546
block_types:
  -
    id: m7bwuhre
    template:
      code: |-
        <div class="vrin-container mt-5">
            <h1 class="sr-only">{{ titulo_pagina }}</h1>
            <div class="row">
                <!-- Sidebar del miniíndice -->
                <aside class="col-md-4 col-lg-3 col-12" aria-label="Secciones de Nosotros">
                    <nav class="vrin-sidebar-nav vrin-reveal" aria-label="NOSOTROS">
                        <h2 class="vrin-sidebar-title">NOSOTROS</h2>
                        <div class="vrin-sidebar-list">
                            <button type="button" class="vrin-sidebar-item active" data-target="sobre-vrin" aria-controls="sobre-vrin" aria-expanded="true">
                                <span class="vrin-sidebar-item-label">
                                    <i class="fa fa-university" aria-hidden="true"></i> Quiénes somos
                                </span>
                                <i class="fa fa-chevron-right vrin-sidebar-chevron" aria-hidden="true"></i>
                            </button>
                            <button type="button" class="vrin-sidebar-item" data-target="autoridades" aria-controls="autoridades" aria-expanded="false">
                                <span class="vrin-sidebar-item-label">
                                    <i class="fa fa-users" aria-hidden="true"></i> Autoridades
                                </span>
                                <i class="fa fa-chevron-right vrin-sidebar-chevron" aria-hidden="true"></i>
                            </button>
                            <button type="button" class="vrin-sidebar-item" data-target="dependencias" aria-controls="dependencias" aria-expanded="false">
                                <span class="vrin-sidebar-item-label">
                                    <i class="fa fa-th-large" aria-hidden="true"></i> Direcciones del VRIN
                                </span>
                                <i class="fa fa-chevron-right vrin-sidebar-chevron" aria-hidden="true"></i>
                            </button>
                            <button type="button" class="vrin-sidebar-item" data-target="organigrama" aria-controls="organigrama" aria-expanded="false">
                                <span class="vrin-sidebar-item-label">
                                    <i class="fa fa-sitemap" aria-hidden="true"></i> Organigrama
                                </span>
                                <i class="fa fa-chevron-right vrin-sidebar-chevron" aria-hidden="true"></i>
                            </button>
                        </div>
                    </nav>
                </aside>

                <!-- Contenido principal -->
                <div class="col-md-8 col-lg-9 col-12">
                    <!-- Sección Sobre el VRIN -->
                    <section id="sobre-vrin" class="vrin-panel-section active" aria-label="Quiénes somos">
                        <div class="vrin-hero-card vrin-reveal">
                            <h2 class="vrin-hero-title">VICERRECTORADO DE INVESTIGACIÓN</h2>
                            <p class="vrin-hero-subtitle">Órgano institucional encargado de dirigir el sistema de investigación de la Universidad Nacional Micaela Bastidas de Apurímac.</p>
                        </div>

                        <div class="vrin-card vrin-card--pad-lg vrin-reveal">
                            <h3 class="vrin-section-title">Presentación</h3>
                            <p class="vrin-texto-cuerpo">
                                El Vicerrectorado de Investigación es un órgano ejecutivo desconcentrado, de apoyo encargado de implementar y materializar los lineamientos de investigación, buscando el estímulo a la ciencia, investigación y creación. El Vicerrector de Investigación, reemplaza al Rector o al Vicerrector Académico en caso de ausencia, licencia, impedimento temporal o vacancia al rector y al Rector en casos de ausencia o impedimento temporal de ambos.
                            </p>
                            <p class="vrin-texto-cuerpo">
                                El Vicerrectorado de Investigación (VRIN) es el organismo encargado de dirigir el sistema de investigación de la Universidad Nacional Micaela Bastidas de Apurímac (UNAMBA). Conduce, coordina y organiza las actividades de investigación que se desarrollan en la universidad.
                            </p>
                            <p class="vrin-texto-cuerpo">
                                El VRIN fomenta la transferencia tecnológica, la innovación y la difusión de los resultados de las investigaciones, integrando a la universidad, la empresa y la sociedad.
                            </p>

                            <h3 class="vrin-section-title vrin-section-title--spaced">Funciones del VRIN</h3>
                            <ul class="vrin-lista-marcada">
                                <li class="vrin-lista-marcada-item">Dirigir y ejecutar la política general de investigación en la universidad.</li>
                                <li class="vrin-lista-marcada-item">Supervisar las actividades de investigación con la finalidad de garantizar la calidad de las mismas y su concordancia con la misión y metas establecidas por el estatuto de la Universidad.</li>
                                <li class="vrin-lista-marcada-item">Organizar la difusión del conocimiento y los resultados de las investigaciones.</li>
                                <li class="vrin-lista-marcada-item">Gestionar el financiamiento de la investigación ante las entidades y organismos públicos o privados.</li>
                                <li class="vrin-lista-marcada-item">Aprobar la realización y ejecución de programas de desarrollo de capacidades y de investigación en los trabajadores administrativos.</li>
                                <li class="vrin-lista-marcada-item">Promover la generación de recursos para la universidad a través de la producción de bienes y prestación de servicios derivados de las actividades de investigación y desarrollo, así como mediante la obtención de regalías por patentes u otros derechos de propiedad intelectual.</li>
                            </ul>
                        </div>
                    </section>

                    <!-- Sección Autoridades -->
                    <section id="autoridades" class="vrin-panel-section" aria-label="Autoridades">
                        <div class="vrin-hero-card">
                            <h2 class="vrin-hero-title">AUTORIDADES</h2>
                            <p class="vrin-hero-subtitle">Conoce a las autoridades del Vicerrectorado de Investigación de la Universidad Nacional Micaela Bastidas de Apurímac.</p>
                        </div>

                        <div class="vrin-card vrin-card--pad-lg">
                            <h3 class="vrin-section-title vrin-texto-centrado">Vicerrector de Investigación</h3>
                            {{ collection:autoridades }}
                                {{ if cargo == "Vicerrector" }}
                                <div class="vrin-autoridad vrin-autoridad--centro">
                                    <img src="{{ foto }}" alt="{{ nombre }}" class="vrin-autoridad-foto" loading="lazy" decoding="async">
                                    <div class="vrin-autoridad-info">
                                        <h4 class="vrin-autoridad-nombre">{{ nombre }}</h4>
                                        <div class="vrin-autoridad-enlaces">
                                            <a href="#" class="vrin-link--fuerte">Resolución R. N° 9731-2021-UNFV</a>
                                            <a href="{{ ficha_cti_vitae }}" target="_blank" rel="noopener">Ficha de Registro CTI Vitae</a>
                                            <a href="mailto:{{ correo }}">{{ correo }}</a>
                                        </div>
                                    </div>
                                </div>
                                {{ /if }}
                            {{ /collection:autoridades }}

                            <hr class="vrin-autoridad-separador">

                            <h3 class="vrin-section-title vrin-texto-centrado">Autoridades por Dirección</h3>

                            <!-- Un solo barrido de la colección: la etiqueta de la dirección se resuelve por cargo -->
                            <div class="vrin-autoridad-lista">
                                {{ collection:autoridades sort="cargo" }}
                                    {{ if cargo != "Vicerrector" }}
                                    <div class="vrin-autoridad-bloque">
                                        <h4 class="vrin-autoridad-dir-label">
                                            {{ if cargo == "Incubadora" }}Director de Incubadora de Empresas
                                            {{ elseif cargo == "Innovación" }}Director de Innovación y Transferencia Tecnológica
                                            {{ elseif cargo == "Institutos" }}Director de Institutos de Investigación
                                            {{ elseif cargo == "Producción" }}Director de Producción de Bienes y Servicios
                                            {{ else }}Dirección del VRIN{{ /if }}
                                        </h4>
                                        <div class="vrin-autoridad">
                                            <img src="{{ foto }}" alt="{{ nombre }}" class="vrin-autoridad-foto" loading="lazy" decoding="async">
                                            <div class="vrin-autoridad-info">
                                                <h5 class="vrin-autoridad-nombre">{{ nombre }}</h5>
                                                <div class="vrin-autoridad-enlaces">
                                                    <a href="#" class="vrin-link--fuerte">Resolución R. N° 6569-2019-UNAMBA</a>
                                                    <a href="{{ ficha_cti_vitae }}" target="_blank" rel="noopener">Ficha de Registro CTI Vitae</a>
                                                    <a href="mailto:{{ correo }}">{{ correo }}</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {{ /if }}
                                {{ /collection:autoridades }}
                            </div>
                        </div>
                    </section>

                    <!-- Sección Direcciones del VRIN -->
                    <section id="dependencias" class="vrin-panel-section" aria-label="Direcciones del VRIN">
                        <div class="vrin-hero-card">
                            <h2 class="vrin-hero-title">DIRECCIONES DEL VRIN</h2>
                            <p class="vrin-hero-subtitle">Direcciones del Vicerrectorado de Investigación de la Universidad Nacional Micaela Bastidas de Apurímac.</p>
                        </div>

                        <div class="vrin-dir-tabs" role="tablist" aria-label="Direcciones del VRIN">
                            <button type="button" role="tab" id="vrin-tab-ditt" class="vrin-dir-tab active" data-target="#pane-ditt" aria-selected="true" aria-controls="pane-ditt">Dirección de Innovación y Transferencia Tecnológica</button>
                            <button type="button" role="tab" id="vrin-tab-die" class="vrin-dir-tab" data-target="#pane-die" aria-selected="false" aria-controls="pane-die">Dirección de Incubadora de Empresas</button>
                            <button type="button" role="tab" id="vrin-tab-diin" class="vrin-dir-tab" data-target="#pane-diin" aria-selected="false" aria-controls="pane-diin">Dirección de Institutos de Investigación</button>
                            <button type="button" role="tab" id="vrin-tab-dpbs" class="vrin-dir-tab" data-target="#pane-dpbs" aria-selected="false" aria-controls="pane-dpbs">Dirección de Producción de Bienes y Servicios</button>
                        </div>

                        <div class="vrin-card vrin-card--pad-lg">
                            <!-- DITT -->
                            <div id="pane-ditt" class="vrin-dir-pane active" role="tabpanel" aria-labelledby="vrin-tab-ditt">
                                <h3 class="vrin-section-title">Dirección de Innovación y Transferencia Tecnológica</h3>
                                <p class="vrin-texto-cuerpo">Esta dirección se encarga de promover la innovación y la transferencia de tecnología, fomentando la colaboración entre la universidad y el sector productivo.</p>

                                <h4 class="vrin-dir-funciones-titulo">Funciones</h4>
                                <ul class="vrin-funciones vrin-funciones--simple">
                                    <li class="vrin-funciones-item"><span class="vrin-funciones-texto">Coordinar y apoyar las actividades que se desarrollan en los Centros e Institutos de Investigación en lo relacionado a la transferencia de tecnología de investigación.</span></li>
                                    <li class="vrin-funciones-item"><span class="vrin-funciones-texto">Promover y canalizar la publicación de los resultados de la investigación en revistas indexadas de alto impacto o en editoriales universitarias con arbitraje riguroso, promoviendo la finalidad de dar conferencias magistrales. La UNAMBA prevé un presupuesto para este fin.</span></li>
                                    <li class="vrin-funciones-item"><span class="vrin-funciones-texto">Fomentar y programar anualmente la visita de investigadores reconocidos a nivel nacional e internacional para promover la realización de investigaciones conjuntas.</span></li>
                                    <li class="vrin-funciones-item"><span class="vrin-funciones-texto">Facilitar las acciones de responsabilidad social de la investigación.</span></li>
                                    <li class="vrin-funciones-item"><span class="vrin-funciones-texto">Validar el registro de patentes ante las instancias oficiales del Estado.</span></li>
                                    <li class="vrin-funciones-item"><span class="vrin-funciones-texto">Elaborar y difundir el listado y virtual las bases de datos de investigación de la UNAMBA.</span></li>
                                    <li class="vrin-funciones-item"><span class="vrin-funciones-texto">Participar activamente, mediante financiamiento y asesoría, en los trámites ante el Instituto Nacional de Defensa de la Competencia y de la Protección de la Propiedad Intelectual (INDECOPI) para patentar las invenciones producidas en los procesos de investigación científica y tecnológica con el señalamiento de los autores, en concordancia con las normas que rigen la propiedad industrial.</span></li>
                                    <li class="vrin-funciones-item"><span class="vrin-funciones-texto">Ejecutar las acciones de extensión universitaria de investigación señaladas en el presente Estatuto.</span></li>
                                </ul>

                                <div class="vrin-dir-pane-accion">
                                    <a href="/innovacion" class="vrin-btn vrin-btn--primary">Ir a la página de la dirección <i class="fa fa-chevron-right" aria-hidden="true"></i></a>
                                </div>
                            </div>

                            <!-- DIE -->
                            <div id="pane-die" class="vrin-dir-pane" role="tabpanel" aria-labelledby="vrin-tab-die">
                                <h3 class="vrin-section-title">Dirección de Incubadora de Empresas</h3>
                                <p class="vrin-texto-cuerpo">La Dirección de Incubadora de Empresas es el órgano de línea dependiente del Vicerrectorado de Investigación, responsable de dirigir, coordinar y promover la iniciativa de los estudiantes para la creación de pequeñas y microempresas de propiedad de los estudiantes.</p>

                                <h4 class="vrin-dir-funciones-titulo">Funciones</h4>
                                <ul class="vrin-funciones vrin-funciones--simple">
                                    <li class="vrin-funciones-item"><span class="vrin-funciones-texto">Proponer al Vicerrectorado de Investigación las políticas, reglamentos y/o normas de funcionamiento de la Dirección de Incubadora de Empresas.</span></li>
                                    <li class="vrin-funciones-item"><span class="vrin-funciones-texto">Promover la cultura de emprendimiento e innovación tecnológica y empresarial en la comunidad universitaria.</span></li>
                                    <li class="vrin-funciones-item"><span class="vrin-funciones-texto">Organizar concursos, talleres y programas de capacitación sobre emprendimiento y creación de empresas.</span></li>
                                    <li class="vrin-funciones-item"><span class="vrin-funciones-texto">Asesorar y apoyar a los equipos de estudiantes y docentes en la elaboración de planes de negocio.</span></li>
                                    <li class="vrin-funciones-item"><span class="vrin-funciones-texto">Gestionar la participación en fondos concursables para el financiamiento de startups.</span></li>
                                    <li class="vrin-funciones-item"><span class="vrin-funciones-texto">Facilitar la vinculación entre proyectos de incubación y redes de mentores o inversionistas.</span></li>
                                    <li class="vrin-funciones-item"><span class="vrin-funciones-texto">Monitorear y evaluar periódicamente la viabilidad y progreso de las iniciativas de emprendimiento alojadas en la incubadora.</span></li>
                                    <li class="vrin-funciones-item"><span class="vrin-funciones-texto">Otras funciones que le asigne el Vicerrectorado de Investigación en el ámbito de su competencia.</span></li>
                                </ul>

                                <div class="vrin-dir-pane-accion">
                                    <a href="/incubadora" class="vrin-btn vrin-btn--primary">Ir a la página de la dirección <i class="fa fa-chevron-right" aria-hidden="true"></i></a>
                                </div>
                            </div>

                            <!-- DIIN -->
                            <div id="pane-diin" class="vrin-dir-pane" role="tabpanel" aria-labelledby="vrin-tab-diin">
                                <h3 class="vrin-section-title">Dirección de Institutos de Investigación</h3>
                                <p class="vrin-texto-cuerpo">La Dirección de Institutos de Investigación coordina y supervisa las actividades de los diversos institutos de investigación de la universidad, fomentando la excelencia académica y la investigación científica.</p>

                                <h4 class="vrin-dir-funciones-titulo">Funciones</h4>
                                <ul class="vrin-funciones vrin-funciones--simple">
                                    <li class="vrin-funciones-item"><span class="vrin-funciones-texto">Proponer al Vicerrectorado de Investigación las políticas, reglamentos y/o normas de funcionamiento de los Institutos de Investigación.</span></li>
                                    <li class="vrin-funciones-item"><span class="vrin-funciones-texto">Coordinar y supervisar el desarrollo de proyectos de investigación científica, tecnológica y humanística a cargo de los institutos.</span></li>
                                    <li class="vrin-funciones-item"><span class="vrin-funciones-texto">Organizar actividades de difusión científica y académica, tales como seminarios, congresos y talleres.</span></li>
                                    <li class="vrin-funciones-item"><span class="vrin-funciones-texto">Promover y gestionar la generación de patentes, publicaciones y transferencia de conocimiento científico.</span></li>
                                    <li class="vrin-funciones-item"><span class="vrin-funciones-texto">Gestionar y promover la participación de los institutos en fondos nacionales e internacionales de investigación.</span></li>
                                    <li class="vrin-funciones-item"><span class="vrin-funciones-texto">Fomentar el desarrollo de capacidades investigativas y el trabajo multidisciplinario en la comunidad universitaria.</span></li>
                                    <li class="vrin-funciones-item"><span class="vrin-funciones-texto">Mantener actualizado el registro y base de datos de las investigaciones en curso y concluidas por los institutos.</span></li>
                                    <li class="vrin-funciones-item"><span class="vrin-funciones-texto">Otras funciones que le asigne el Vicerrectorado de Investigación.</span></li>
                                </ul>

                                <div class="vrin-dir-pane-accion">
                                    <a href="/institutos" class="vrin-btn vrin-btn--primary">Ir a la página de la dirección <i class="fa fa-chevron-right" aria-hidden="true"></i></a>
                                </div>
                            </div>

                            <!-- DPBS -->
                            <div id="pane-dpbs" class="vrin-dir-pane" role="tabpanel" aria-labelledby="vrin-tab-dpbs">
                                <h3 class="vrin-section-title">Dirección de Producción de Bienes y Servicios</h3>
                                <p class="vrin-texto-cuerpo">La Dirección de Producción de Bienes y Servicios se enfoca en la generación de productos y servicios de calidad, vinculando la producción científica con el desarrollo económico y social de la región.</p>

                                <h4 class="vrin-dir-funciones-titulo">Funciones</h4>
                                <ul class="vrin-funciones vrin-funciones--simple">
                                    <li class="vrin-funciones-item"><span class="vrin-funciones-texto">Proponer al Vicerrectorado de Investigación las políticas, reglamentos y/o normas de funcionamiento de la Dirección de Producción de Bienes y Servicios.</span></li>
                                    <li class="vrin-funciones-item"><span class="vrin-funciones-texto">Planificar, organizar y coordinar las actividades de los centros de producción de bienes y prestación de servicios de la universidad.</span></li>
                                    <li class="vrin-funciones-item"><span class="vrin-funciones-texto">Promover la vinculación con entidades públicas y privadas para la transferencia tecnológica y prestación de servicios especializados.</span></li>
                                    <li class="vrin-funciones-item"><span class="vrin-funciones-texto">Fomentar la generación de recursos propios a través de actividades productivas y de servicios rentables.</span></li>
                                    <li class="vrin-funciones-item"><span class="vrin-funciones-texto">Supervisar la gestión de calidad, eficiencia y sostenibilidad de las unidades de producción de bienes y servicios.</span></li>
                                    <li class="vrin-funciones-item"><span class="vrin-funciones-texto">Capacitar y asesorar a docentes, estudiantes y egresados en gestión empresarial, consultoría y desarrollo de proyectos comerciales.</span></li>
                                    <li class="vrin-funciones-item"><span class="vrin-funciones-texto">Coordinar y evaluar la rentabilidad social y económica de los proyectos productivos presentados por las facultades.</span></li>
                                    <li class="vrin-funciones-item"><span class="vrin-funciones-texto">Otras funciones que le asigne el Vicerrectorado de Investigación en el ámbito de su competencia.</span></li>
                                </ul>

                                <div class="vrin-dir-pane-accion">
                                    <a href="/produccion" class="vrin-btn vrin-btn--primary">Ir a la página de la dirección <i class="fa fa-chevron-right" aria-hidden="true"></i></a>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- Sección Organigrama -->
                    <section id="organigrama" class="vrin-panel-section" aria-label="Organigrama">
                        <div class="vrin-hero-card">
                            <h2 class="vrin-hero-title">ORGANIGRAMA INSTITUCIONAL</h2>
                            <p class="vrin-hero-subtitle">Estructura organizacional del Vicerrectorado de Investigación de la Universidad Nacional Micaela Bastidas de Apurímac.</p>
                        </div>

                        <div class="vrin-card vrin-card--pad-lg">
                            <h3 class="vrin-section-title">Estructura Organizacional</h3>
                            <p class="vrin-texto-cuerpo">
                                El Vicerrectorado de Investigación cuenta con una estructura organizacional diseñada para gestionar eficientemente las actividades de investigación, innovación y transferencia tecnológica de la universidad. El organigrama muestra las cuatro direcciones principales que conforman el VRIN, así como las unidades de apoyo que contribuyen al logro de los objetivos institucionales.
                            </p>
                            <div class="vrin-organigrama-figura">
                                <img src="/assets/organigramas.png" alt="Organigrama del Vicerrectorado de Investigación de la UNAMBA" class="vrin-organigrama-img" loading="lazy" decoding="async">
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
      mode: htmlmixed
    type: template
    enabled: true
---
