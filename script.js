const converter = document.querySelector(`#converter`)
const result = document.querySelector(`.result`)
const convBtn = document.querySelector(`.conv`)
const resetBtn = document.querySelector(`.reset`)
const changeBtn = document.querySelector(`.change`)
const one = document.querySelector(`.one`)
const two = document.querySelector(`.two`)

const changeConv = () => {
	if (one.textContent.includes(`C`)) {
		one.textContent = '°F'
		two.textContent = '°C'
		result.textContent = ``
	} else {
		one.textContent = '°C'
		two.textContent = '°F'
		result.textContent = ``
	}
}

const fahrToCel = () => {
	let res = (converter.value - 32) / 1.8
	result.textContent = `${converter.value} °F   =   ${res.toFixed(1)} °C`
	converter.value = ``
}
const celToFahr = () => {
	let res = converter.value * 1.8 + 32
	result.textContent = `${converter.value} °C   =   ${res.toFixed(1)} °F`
	converter.value = ``
}

const convert = () => {
	if (converter.value == ``) {
		result.textContent = `Podaj jakąś wartość!`
	} else if (one.textContent.includes(`C`)) {
		celToFahr()
	} else {
		fahrToCel()
	}
}

const resetFun = () => {
	converter.value = ``
	result.textContent = ``
}

resetBtn.addEventListener(`click`, resetFun)
convBtn.addEventListener(`click`, convert)
changeBtn.addEventListener(`click`, changeConv)
