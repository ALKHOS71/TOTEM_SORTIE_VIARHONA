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
var format_VIARHONA_3 = new ol.format.GeoJSON();
var features_VIARHONA_3 = format_VIARHONA_3.readFeatures(json_VIARHONA_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VIARHONA_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VIARHONA_3.addFeatures(features_VIARHONA_3);
var lyr_VIARHONA_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VIARHONA_3, 
                style: style_VIARHONA_3,
                popuplayertitle: 'VIARHONA',
                interactive: false,
                title: '<img src="styles/legend/VIARHONA_3.png" /> VIARHONA'
            });
var format_TOTEMSDESORTIE_4 = new ol.format.GeoJSON();
var features_TOTEMSDESORTIE_4 = format_TOTEMSDESORTIE_4.readFeatures(json_TOTEMSDESORTIE_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TOTEMSDESORTIE_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TOTEMSDESORTIE_4.addFeatures(features_TOTEMSDESORTIE_4);
var lyr_TOTEMSDESORTIE_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TOTEMSDESORTIE_4, 
                style: style_TOTEMSDESORTIE_4,
                popuplayertitle: 'TOTEMS DE SORTIE',
                interactive: true,
                title: '<img src="styles/legend/TOTEMSDESORTIE_4.png" /> TOTEMS DE SORTIE'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_EPCI_1.setVisible(false);lyr_COMMUNES_2.setVisible(false);lyr_VIARHONA_3.setVisible(true);lyr_TOTEMSDESORTIE_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_EPCI_1,lyr_COMMUNES_2,lyr_VIARHONA_3,lyr_TOTEMSDESORTIE_4];
lyr_EPCI_1.set('fieldAliases', {'NOM_EPCI': 'NOM_EPCI', });
lyr_COMMUNES_2.set('fieldAliases', {'NOM_EPCI': 'NOM_EPCI', 'ID': 'ID', 'NOM': 'NOM', 'NOM_M': 'NOM_M', 'INSEE_COM': 'INSEE_COM', 'STATUT': 'STATUT', 'POPULATION': 'POPULATION', 'INSEE_CAN': 'INSEE_CAN', 'INSEE_ARR': 'INSEE_ARR', 'INSEE_DEP': 'INSEE_DEP', 'INSEE_REG': 'INSEE_REG', 'SIREN_EPCI': 'SIREN_EPCI', });
lyr_VIARHONA_3.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'id': 'id', 'remarque': 'remarque', });
lyr_TOTEMSDESORTIE_4.set('fieldAliases', {'Identifian': 'Identifian', 'Départeme': 'Départeme', 'EPCI_impla': 'EPCI_impla', 'Commune_im': 'Commune_im', });
lyr_EPCI_1.set('fieldImages', {'NOM_EPCI': 'TextEdit', });
lyr_COMMUNES_2.set('fieldImages', {'NOM_EPCI': 'TextEdit', 'ID': 'TextEdit', 'NOM': 'TextEdit', 'NOM_M': 'TextEdit', 'INSEE_COM': 'TextEdit', 'STATUT': 'TextEdit', 'POPULATION': 'Range', 'INSEE_CAN': 'TextEdit', 'INSEE_ARR': 'TextEdit', 'INSEE_DEP': 'TextEdit', 'INSEE_REG': 'TextEdit', 'SIREN_EPCI': 'TextEdit', });
lyr_VIARHONA_3.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'TextEdit', 'type': 'TextEdit', 'id': 'TextEdit', 'remarque': 'TextEdit', });
lyr_TOTEMSDESORTIE_4.set('fieldImages', {'Identifian': 'TextEdit', 'Départeme': 'TextEdit', 'EPCI_impla': 'TextEdit', 'Commune_im': 'TextEdit', });
lyr_EPCI_1.set('fieldLabels', {'NOM_EPCI': 'no label', });
lyr_COMMUNES_2.set('fieldLabels', {'NOM_EPCI': 'no label', 'ID': 'no label', 'NOM': 'no label', 'NOM_M': 'no label', 'INSEE_COM': 'no label', 'STATUT': 'no label', 'POPULATION': 'no label', 'INSEE_CAN': 'no label', 'INSEE_ARR': 'no label', 'INSEE_DEP': 'no label', 'INSEE_REG': 'no label', 'SIREN_EPCI': 'no label', });
lyr_VIARHONA_3.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', 'id': 'no label', 'remarque': 'no label', });
lyr_TOTEMSDESORTIE_4.set('fieldLabels', {'Identifian': 'inline label - always visible', 'Départeme': 'inline label - always visible', 'EPCI_impla': 'inline label - always visible', 'Commune_im': 'inline label - always visible', });
lyr_TOTEMSDESORTIE_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});