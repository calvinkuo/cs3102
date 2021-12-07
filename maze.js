var steps = -1;
var schedule = [];
var canvas = document.getElementById('maze');
var ctx = canvas.getContext('2d');
ctx.fillStyle = 'blue';
draw(0, 5);

function clear() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function draw(x, y) {
	ctx.beginPath();
	ctx.arc(x * 40 + 24, y * 40 + 24, 14, 0, 2 * Math.PI);
	ctx.closePath();
	ctx.fill();
}

function drawAll(coords) {
	clear();
	steps++; document.getElementById('step').innerText = steps;
	console.log(coords);
	coords.forEach(pair => draw(pair[0], pair[1]));
}

function drawAll2(coords) {
	steps++; document.getElementById('step').innerText = steps;
	console.log(coords);
	coords.forEach((pair, i) => {
		ctx.fillStyle = i === 0 ? 'blue' : 'rgba(0, 0, 255, 0.5)';
		draw(pair[0], pair[1])
	});
	ctx.fillStyle = 'blue';
}

function button1() {
	schedule.forEach((timer) => clearTimeout(timer));
	steps = -1; document.getElementById('step').innerText = 0;
	var path = [
		[[0,5]],
		[[1,5]],
		[[2,5]],
		[[3,5]],
		[[3,4]],
		[[3,3]],
		[[4,3]],
		[[5,3]],
		[[5,4]],
		[[5,5]],
		[[4,5]],
		[[4,4]],
		[[4,5]],
		[[5,5]],
		[[5,4]],
		[[5,3]],
		[[4,3]],
		[[4,2]],
		[[3,2]],
		[[3,1]],
		[[4,1]],
		[[5,1]],
		[[5,2]],
		[[5,1]],
		[[4,1]],
		[[4,0]],
		[[5,0]],
	];
	path.forEach((coords, i) => schedule.push(setTimeout(drawAll, 500 * i, coords)));
}

function button2() {
	schedule.forEach((timer) => clearTimeout(timer));
	steps = -1; document.getElementById('step').innerText = 0;
	var path = [
		[[0,5]],
		[[1,5],[0,4]],
		[[2,5],[1,4]],
		[[3,5],[2,4]],
		[[3,4],[2,3]],
		[[3,3],[1,3]],
		[[4,3]],
		[[4,2],[5,3]],
		[[3,2],[5,4]],
		[[3,1],[5,5],[2,2]],
		[[4,1],[4,5],[1,2]],
		[[4,0],[4,4],[0,2],[5,1]],
		[[5,0],[0,1],[5,2],[0,3],[3,0]],
	];
	clear();
	path.forEach((coords, i) => schedule.push(setTimeout(drawAll2, 500 * i, coords)));
}

function button3() {
	schedule.forEach((timer) => clearTimeout(timer));
	steps = -1; document.getElementById('step').innerText = 0;
	var path = [
		[[0,5]],
		[[1,5]],
		[[2,5]],
		[[3,5]],
		[[3,4]],
		[[3,3]],
		[[4,3]],
		[[4,2]],
		[[3,2]],
		[[3,1]],
		[[4,1]],
		[[4,0]],
		[[5,0]],
	];
	path.forEach((coords, i) => schedule.push(setTimeout(drawAll, 500 * i, coords)));
}
