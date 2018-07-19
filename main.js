const elements = document.getElementsByTagName('*');

for (let i=0; i < elements.length; i++) {
	let element = elements[i];

	for (let j=0; j < element.childNodes.length; j++) {
		let node = element.childNodes[j];

		if (node.nodeType === 3) {
			let text = node.nodeValue;
			let replacedText = text
			.replace(/\bs\/he\b/g, "they")
			.replace(/\bhe(\/)?(\sor\s)?she\b/g, "they")
        	.replace(/\b(he|she)\b/g, "they")
			.replace(/\b(He|She)\b/g, "They")
			.replace(/\b(he's|she's)\b/g, "they're")
			.replace(/\b(He's|She's)\b/g, "They're")
			.replace(/\b(hers|his)\b/g, "theirs")
			.replace(/\b(Hers|His)\b/g, "Theirs")
			.replace(/\b(to|from|at|for)\b\s\b(Her|Him)\b/g, "$1 Them")
			.replace(/\b(to|from|at|for)\b\s\b(her|him)\b/g, "$1 them")
			.replace(/\b(her|him)\b/g, "their")
			.replace(/\b(Her|Him)\b/g, "Their")
			/*  
			figure out verbs
			-ing her/him => $1 them
			*/
			if (replacedText !== text) {
				element.replaceChild(document.createTextNode(replacedText), node);
			}
		}

	}
}