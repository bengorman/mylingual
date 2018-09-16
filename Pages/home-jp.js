import wixData from 'wix-data';
import {visionRequest} from 'backend/APICaller.jsw';

let file; 

let knownlang;
let newlang;

$w.onReady(function () {

});

export function drpdwnKnownLang_change(event) {
	knownlang = event.target.value;
}

export function drpdownNewLang_change(event) {
	newlang = event.target.value;
}

export function imageUpload_change(event) {
	$w('#imageUpload').startUpload()
	.then( (uploadedFile) => {
		file = uploadedFile;
		$w('#image1').src = file.url;
  });
}
