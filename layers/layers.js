var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_EPCI_1 = new ol.format.GeoJSON();
var features_EPCI_1 = format_EPCI_1.readFeatures(json_EPCI_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EPCI_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EPCI_1.addFeatures(features_EPCI_1);
var lyr_EPCI_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EPCI_1, 
                style: style_EPCI_1,
                popuplayertitle: 'EPCI',
                interactive: false,
                title: '<img src="styles/legend/EPCI_1.png" /> EPCI'
            });
var format_COMMUNES_2 = new ol.format.GeoJSON();
var features_COMMUNES_2 = format_COMMUNES_2.readFeatures(json_COMMUNES_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_COMMUNES_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COMMUNES_2.addFeatures(features_COMMUNES_2);
var lyr_COMMUNES_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_COMMUNES_2, 
                style: style_COMMUNES_2,
                popuplayertitle: 'COMMUNES',
                interactive: false,
                title: '<img src="styles/legend/COMMUNES_2.png" /> COMMUNES'
            });
var format_VIARHONAPROJETTRACE_3 = new ol.format.GeoJSON();
var features_VIARHONAPROJETTRACE_3 = format_VIARHONAPROJETTRACE_3.readFeatures(json_VIARHONAPROJETTRACE_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VIARHONAPROJETTRACE_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VIARHONAPROJETTRACE_3.addFeatures(features_VIARHONAPROJETTRACE_3);
var lyr_VIARHONAPROJETTRACE_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VIARHONAPROJETTRACE_3, 
                style: style_VIARHONAPROJETTRACE_3,
                popuplayertitle: 'VIARHONA - PROJET TRACE',
                interactive: false,
                title: '<img src="styles/legend/VIARHONAPROJETTRACE_3.png" /> VIARHONA - PROJET TRACE'
            });
var format_VIARHONA_4 = new ol.format.GeoJSON();
var features_VIARHONA_4 = format_VIARHONA_4.readFeatures(json_VIARHONA_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VIARHONA_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VIARHONA_4.addFeatures(features_VIARHONA_4);
var lyr_VIARHONA_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VIARHONA_4, 
                style: style_VIARHONA_4,
                popuplayertitle: 'VIARHONA',
                interactive: false,
                title: '<img src="styles/legend/VIARHONA_4.png" /> VIARHONA'
            });
var format_Tracsdesitinrairesscurissdesortie_5 = new ol.format.GeoJSON();
var features_Tracsdesitinrairesscurissdesortie_5 = format_Tracsdesitinrairesscurissdesortie_5.readFeatures(json_Tracsdesitinrairesscurissdesortie_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tracsdesitinrairesscurissdesortie_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tracsdesitinrairesscurissdesortie_5.addFeatures(features_Tracsdesitinrairesscurissdesortie_5);
var lyr_Tracsdesitinrairesscurissdesortie_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tracsdesitinrairesscurissdesortie_5, 
                style: style_Tracsdesitinrairesscurissdesortie_5,
                popuplayertitle: 'Tracés des itinéraires sécurisés de sortie',
                interactive: false,
                title: '<img src="styles/legend/Tracsdesitinrairesscurissdesortie_5.png" /> Tracés des itinéraires sécurisés de sortie'
            });
var format_TOTEMSDESORTIE_6 = new ol.format.GeoJSON();
var features_TOTEMSDESORTIE_6 = format_TOTEMSDESORTIE_6.readFeatures(json_TOTEMSDESORTIE_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TOTEMSDESORTIE_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TOTEMSDESORTIE_6.addFeatures(features_TOTEMSDESORTIE_6);
var lyr_TOTEMSDESORTIE_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TOTEMSDESORTIE_6, 
                style: style_TOTEMSDESORTIE_6,
                popuplayertitle: 'TOTEMS DE SORTIE',
                interactive: true,
                title: '<img src="styles/legend/TOTEMSDESORTIE_6.png" /> TOTEMS DE SORTIE'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_EPCI_1.setVisible(false);lyr_COMMUNES_2.setVisible(false);lyr_VIARHONAPROJETTRACE_3.setVisible(true);lyr_VIARHONA_4.setVisible(true);lyr_Tracsdesitinrairesscurissdesortie_5.setVisible(true);lyr_TOTEMSDESORTIE_6.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_EPCI_1,lyr_COMMUNES_2,lyr_VIARHONAPROJETTRACE_3,lyr_VIARHONA_4,lyr_Tracsdesitinrairesscurissdesortie_5,lyr_TOTEMSDESORTIE_6];
lyr_EPCI_1.set('fieldAliases', {'NOM_EPCI': 'NOM_EPCI', });
lyr_COMMUNES_2.set('fieldAliases', {'NOM_EPCI': 'NOM_EPCI', 'ID': 'ID', 'NOM': 'NOM', 'NOM_M': 'NOM_M', 'INSEE_COM': 'INSEE_COM', 'STATUT': 'STATUT', 'POPULATION': 'POPULATION', 'INSEE_CAN': 'INSEE_CAN', 'INSEE_ARR': 'INSEE_ARR', 'INSEE_DEP': 'INSEE_DEP', 'INSEE_REG': 'INSEE_REG', 'SIREN_EPCI': 'SIREN_EPCI', });
lyr_VIARHONAPROJETTRACE_3.set('fieldAliases', {'id': 'id', 'statut': 'statut', });
lyr_VIARHONA_4.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'id': 'id', });
lyr_Tracsdesitinrairesscurissdesortie_5.set('fieldAliases', {'SITE SIGNA': 'SITE SIGNA', 'TRAVAUX': 'TRAVAUX', 'ANTENNE': 'ANTENNE', 'REMARQUES': 'REMARQUES', 'VARIANTE': 'VARIANTE', 'SOURCE': 'SOURCE', 'VIARHON-VV': 'VIARHON-VV', 'OP EPCI': 'OP EPCI', 'OP TERRAIN': 'OP TERRAIN', });
lyr_TOTEMSDESORTIE_6.set('fieldAliases', {'Identifian': 'Identifian', 'Départeme': 'Départeme', 'EPCI_impla': 'EPCI_impla', 'Commune_im': 'Commune_im', });
lyr_EPCI_1.set('fieldImages', {'NOM_EPCI': 'TextEdit', });
lyr_COMMUNES_2.set('fieldImages', {'NOM_EPCI': 'TextEdit', 'ID': 'TextEdit', 'NOM': 'TextEdit', 'NOM_M': 'TextEdit', 'INSEE_COM': 'TextEdit', 'STATUT': 'TextEdit', 'POPULATION': 'Range', 'INSEE_CAN': 'TextEdit', 'INSEE_ARR': 'TextEdit', 'INSEE_DEP': 'TextEdit', 'INSEE_REG': 'TextEdit', 'SIREN_EPCI': 'TextEdit', });
lyr_VIARHONAPROJETTRACE_3.set('fieldImages', {'id': 'TextEdit', 'statut': '', });
lyr_VIARHONA_4.set('fieldImages', {'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'number': '', 'type': '', 'id': '', });
lyr_Tracsdesitinrairesscurissdesortie_5.set('fieldImages', {'SITE SIGNA': 'TextEdit', 'TRAVAUX': 'TextEdit', 'ANTENNE': 'TextEdit', 'REMARQUES': 'TextEdit', 'VARIANTE': 'TextEdit', 'SOURCE': 'TextEdit', 'VIARHON-VV': 'TextEdit', 'OP EPCI': 'TextEdit', 'OP TERRAIN': 'TextEdit', });
lyr_TOTEMSDESORTIE_6.set('fieldImages', {'Identifian': 'TextEdit', 'Départeme': 'TextEdit', 'EPCI_impla': 'TextEdit', 'Commune_im': 'TextEdit', });
lyr_EPCI_1.set('fieldLabels', {'NOM_EPCI': 'no label', });
lyr_COMMUNES_2.set('fieldLabels', {'NOM_EPCI': 'no label', 'ID': 'no label', 'NOM': 'no label', 'NOM_M': 'no label', 'INSEE_COM': 'no label', 'STATUT': 'no label', 'POPULATION': 'no label', 'INSEE_CAN': 'no label', 'INSEE_ARR': 'no label', 'INSEE_DEP': 'no label', 'INSEE_REG': 'no label', 'SIREN_EPCI': 'no label', });
lyr_VIARHONAPROJETTRACE_3.set('fieldLabels', {'id': 'no label', 'statut': 'no label', });
lyr_VIARHONA_4.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', 'id': 'no label', });
lyr_Tracsdesitinrairesscurissdesortie_5.set('fieldLabels', {'SITE SIGNA': 'header label - visible with data', 'TRAVAUX': 'header label - visible with data', 'ANTENNE': 'header label - visible with data', 'REMARQUES': 'header label - always visible', 'VARIANTE': 'header label - visible with data', 'SOURCE': 'header label - visible with data', 'VIARHON-VV': 'header label - visible with data', 'OP EPCI': 'header label - visible with data', 'OP TERRAIN': 'header label - visible with data', });
lyr_TOTEMSDESORTIE_6.set('fieldLabels', {'Identifian': 'inline label - always visible', 'Départeme': 'inline label - always visible', 'EPCI_impla': 'inline label - always visible', 'Commune_im': 'inline label - always visible', });
lyr_TOTEMSDESORTIE_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});