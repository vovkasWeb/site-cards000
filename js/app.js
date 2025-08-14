document
	.querySelector('.main__button')
	.addEventListener('click', function (event) {
		event.preventDefault() // отменяем переход

		const popup = document.querySelector('.popup')
		const dotsSpan = popup.querySelector('span')

		popup.style.display = 'block' // показать попап

		let dots = 3
		const interval = setInterval(() => {
			dots = (dots % 3) + 1 // 1 → 2 → 3 → 1
			dotsSpan.textContent = '.'.repeat(dots)
		}, 400) // скорость смены точек

		setTimeout(() => {
			clearInterval(interval) // остановить анимацию
			window.location.href = 'too.html' // переход на страницу
		}, 2000)
	})
