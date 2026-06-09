---
id: 3a97b207-65ca-404e-beb8-4c582916489a
blueprint: page
title: Eventos
texto_bienvenida: Eventos
author: 06ac68ab-d29f-41e9-9b9a-dd4da3996484
updated_by: 06ac68ab-d29f-41e9-9b9a-dd4da3996484
updated_at: 1779824216
titulo_pagina: 'Eventos - VRIN UNAMBA'
template_imagen_fondo:
  code: |-
    <!--<div class="page-header header-filter"  data-parallax="true" style="background-image: url('/assets/a_home_otros/eventos.webp');">
        <div class="container">
            <div class="row">
                <div class="col-md-8 ml-auto mr-auto ">
                    <h1 class="title">Eventos</h1>
                </div>
            </div>
        </div>
      </div>-->
  mode: htmlmixed
block_types:
  -
    id: lkefs74w
    template:
      code: |-
        <div class="profile-content">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-12 text-center">
                                        <h3 class="title-container">El Vicerrectorado de Investigación te invita a ser partícipe de los eventos, concursos y convocatorias dirigidas a la comunidad universitaria.</h3>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="events-list">
                                            {{ collection:blog }}
                                            <!-- Card for each event -->
                                            <div class="card card-event">
                                                <div class="row no-gutters align-items-center h-100-desktop">
                                                    <!-- Image Section -->
                                                    <div class="col-lg-4">
                                                        <div class="card-header-image">
                                                            <div class="date-box">
                                                                <span class="day">{{ date | timezone | format('d') }}</span>
                                                                <span class="month">
                                                                    {{ if (date | timezone | format('n')) == '1' }}Enero
                                                                    {{ elseif (date | timezone | format('n')) == '2' }}Febrero
                                                                    {{ elseif (date | timezone | format('n')) == '3' }}Marzo
                                                                    {{ elseif (date | timezone | format('n')) == '4' }}Abril
                                                                    {{ elseif (date | timezone | format('n')) == '5' }}Mayo
                                                                    {{ elseif (date | timezone | format('n')) == '6' }}Junio
                                                                    {{ elseif (date | timezone | format('n')) == '7' }}Julio
                                                                    {{ elseif (date | timezone | format('n')) == '8' }}Agosto
                                                                    {{ elseif (date | timezone | format('n')) == '9' }}Septiembre
                                                                    {{ elseif (date | timezone | format('n')) == '10' }}Octubre
                                                                    {{ elseif (date | timezone | format('n')) == '11' }}Noviembre
                                                                    {{ elseif (date | timezone | format('n')) == '12' }}Diciembre
                                                                    {{ /if }}
                                                                </span>
                                                                <span class="year">{{ date | timezone | format('Y') }}</span>
                                                            </div>
                                                            <a href="{{ url }}">
                                                                <img src="{{ imagen_principal }}" alt="{{ title }}" class="evento-list-img">
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <!-- Content Section -->
                                                    <div class="col-lg-8">
                                                        <div class="card-body">
                                                            <span class="card-category">{{ direccion_o_vrin }}</span>
                                                            <h4 class="card-title">
                                                                <a href="{{ url }}">{{ title }}</a>
                                                            </h4>
                                                            {{ if ubicacion }}
                                                            <p class="card-location">
                                                                <i class="fa fa-map-marker"></i> {{ ubicacion }}
                                                            </p>
                                                            {{ /if }}
                                                            <div class="card-description">
                                                                {{ content }}
                                                            </div>

                                                            <a href="{{ url }}" class="btn-ver-publicacion">
                                                                Ver Publicación <i class="fa fa-external-link"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {{ /collection:blog }}
                                        </div>
                                    </div>
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
