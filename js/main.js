const obj = {
	0: { title: 'Wheel of Fortune', img: 'card.png' },
	1: { title: 'The Star', img: 'card1.png' },
	2: { title: 'The Emperor', img: 'card2.png' },
	3: { title: 'The Chariot', img: 'card3.png' },
	4: { title: 'The Tower', img: 'card4.png' },
	5: { title: 'The Magician', img: 'card5.png' },
	6: { title: 'The High Priestess', img: 'card6.png' },
	7: { title: 'The Fool', img: 'card7.png' },
	8: { title: 'The Moon', img: 'card8.png' },
	9: { title: 'Five of Swords', img: 'card9.png' },
}

// Получаем случайный ключ
const keys = Object.keys(obj)
const randomKey = keys[Math.floor(Math.random() * keys.length)]

// Достаём данные
const { title, img } = obj[randomKey]

// Подставляем в HTML
document.querySelector('.main__title-mobile4').textContent = title
document.querySelector('.main__title2').textContent = title
const url = document.querySelector('.main__img-mini2').src
const pathOnly = url.substring(0, url.lastIndexOf('/') + 1)
document.querySelector('.main__img1').src = pathOnly + img
