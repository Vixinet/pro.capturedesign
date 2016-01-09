function hideLayers(layerNode) {
	for(var i = 0; i < layerNode.length; i++) {
		hideLayers(layerNode[i].layerSets);
		for(var j = 0; j < layerNode[i].artLayers.length; j++) {
			layerNode[i].artLayers[j].visible = false;
		}
	}
}


function SavePNG(saveFile){
    var pngOpts = new ExportOptionsSaveForWeb; 
    pngOpts.format = SaveDocumentType.PNG
    pngOpts.PNG8 = false; 
    pngOpts.transparency = true; 
    pngOpts.interlaced = false; 
    pngOpts.quality = 100;
    activeDocument.exportDocument(new File(saveFile),ExportType.SAVEFORWEB,pngOpts); 
}

function main () {
	if (0 < app.documents.length) {
		alert ("Please close all open documents before running this script.");
		return;
	}

	var sourceFolder = Folder.selectDialog ("Please choose the location of the source image files.", Folder.myDocuments);
	var destFolder = Folder.selectDialog ("Please choose a location where the new image files will be saved.", sourceFolder);

	var files = sourceFolder.getFiles();
	for (var i = 0; i < files.length; i++) {
		var f = files[i];
		if (f instanceof Folder) {
			continue;
		}

		var doc = app.open(f);

		var path = destFolder.absoluteURI.toString() + "/" + f.name.replace(/.psd/g, '');
		var folder = Folder(path);
		if(!folder.exists) {
				folder.create();
		}
    
		hideLayers(doc.layerSets);

		var exportLayers = function(layerNode) {
			for(var i = 0; i < layerNode.length; i++) {
				for(var j = 0; j < layerNode[i].artLayers.length; j++) {
					var layer = layerNode[i].artLayers[j];
					layer.visible = true;
					SavePNG(File(path + '/' + layer.name.toLowerCase().replace(/ /g, '-') + '.png'));
					layer.visible = false;
				}
				exportLayers(layerNode[i].layerSets);
			}
		}

		exportLayers(doc.layerSets);

		doc.close(SaveOptions.DONOTSAVECHANGES);
	}
}

main();