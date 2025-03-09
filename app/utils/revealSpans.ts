export default function revealSpans(spans: string | any[]) {
	for (let i = 0; i < spans.length; i++) {
		if (spans[i].parentElement.getBoundingClientRect().top < window.innerHeight / 1.2) {
			const { left } = spans[i].getBoundingClientRect()
			let { top } = spans[i].getBoundingClientRect()
			top = top - (window.innerHeight * .6)
			let opacityValue: number | string = 1 - ((top * .01) + (left * .001)) < .1 ? .1 : 1 - ((top * .01) + (left * .001))
			opacityValue = opacityValue > 1 ? 1 : opacityValue.toFixed(3)
			spans[i].style.opacity = opacityValue
		}
	}
}