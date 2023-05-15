function show(){
    document.querySelector('.hamburger').classList.toggle('open')
    document.querySelector('.navigation').classList.toggle('active')
}

$('#ripple').ripples({
	resolution: 512,
	dropRadius: 20,
	perturbance: 0.04,
});
$('#ripples').ripples({
	resolution: 512,
	dropRadius: 20,
	perturbance: 0.001,
});