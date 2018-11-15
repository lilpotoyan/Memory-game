document.addEventListener("DOMContentLoaded", function (event) {
		let colors=["#5f70cc", "#6cb4f4", "#17a796", "#3a653c", "#bf7e5b", "#a01d1a", "#723f2f", "#999d2f"];
		let obj={};
		let arr=[];
		let cells = Array(16);


		function getRandomIndex() {
			let index = Math.floor(Math.random() * 16);
			while (cells[index] !== undefined) {
				index = Math.floor(Math.random() * 16);
			}
			return index;
		}
	
		for (let i = 0; i < colors.length; i++) {
			cells[getRandomIndex()] = colors[i];
			cells[getRandomIndex()] = colors[i];
		}

		function foo() {
			let keys = Object.keys(obj);
			if(obj[Object.keys(obj)[0]]==obj[Object.keys(obj)[1]]) {
				delete obj[keys[0]];
				delete obj[keys[1]];
			} else {
				document.getElementById(keys[0]).style.background='grey';
				document.getElementById(keys[1]).style.background='grey';
				delete obj[keys[0]];
				delete obj[keys[1]];
			}

		}
		function openColors(id, color) {
			document.getElementById(id).style.background=color;
			obj=Object.assign(obj,{[id]: color});
				if(Object.keys(obj).length > 2){
						foo();
				}	
		}
		const container = document.querySelector("#container");

		for(let i=0; i<cells.length; i++){
			let cell=document.createElement("div");
			cell.className="cell"
			cell.id=cells[i] + i;
			container.appendChild(cell);

			cell.addEventListener('click', function (event) {
			let id=event.target.id;
			let color=event.target.id.slice(0, 7);
			openColors(id, color);
			});
		}
	})
