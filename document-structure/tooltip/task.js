const hasTooltip = Array.from(document.getElementsByClassName('has-tooltip'));
const tooltip = document.querySelector('.tooltip');

function tooltipText (evt) {
	evt.preventDefault();
	if (evt.target.classList.contains('has-tooltip')) {
		let tooltipText = evt.target.getAttribute('title');
		let position = evt.target.getBoundingClientRect();
	
		if (tooltip.textContent === tooltipText) {
			tooltip.style.display = tooltip.style.display === 'block' ? 'none' : 'block';
		} else {
			tooltip.textContent = tooltipText;
			tooltip.style.display = 'block'
			tooltip.style.top = String(position.top + 15) + 'px';
			tooltip.style.left = String(position.left) + 'px';
		}
	} else {
		tooltip.style.display = 'none'
	}
}

hasTooltip.forEach(e => addEventListener('click', tooltipText));

window.addEventListener('scroll', function() {
  tooltip.style.display = 'none'
});