const liczba = document.querySelectorAll('.liczba')
const oblicz = document.querySelector('.oblicz')
const wyczysc = document.querySelector('.wyczysc')
const wpisz = document.querySelector('.wpisz')
const wynik_auto = document.querySelector('.wynik_auto')
const wynik_pociag = document.querySelector('.wynik_pociag')
const auto = document.querySelector('#auto')
const pociag = document.querySelector('#pociag')

let aktualneDziłanie = ''
let operacja = undefined

let zaktualizujWynik = () => {
    wpisz.innerText = aktualneDziłanie
}

const dodajLiczbe = (liczba) => {
    aktualneDziłanie = aktualneDziłanie.toString() + liczba.toString()
}

liczba.forEach((liczba) => {
    liczba.addEventListener('click', () => {
        dodajLiczbe(liczba.innerText)
        zaktualizujWynik()
    })
})

const wyszyscDzialanie = () => {
    aktualneDziłanie = ''
    operacja = undefined
}


function obliczAuto() {
    const pozmianie = aktualneDziłanie / 3.6
    let potega = Math.pow(pozmianie, 2)
    let wynik = potega / 8
    let wynikZa = Math.round(wynik)
    wynik_auto.innerText = wynikZa
}

const obliczPociag = () => {
    const pozmianie = aktualneDziłanie / 3.6
    let potega = Math.pow(pozmianie, 2)
    let wynik = potega / 1.5
    let wynikZa = Math.round(wynik)
    wynik_pociag.innerText = wynikZa
}

wyczysc.addEventListener('click', () => {
    wyszyscDzialanie()
    zaktualizujWynik()
    obliczAuto()
    obliczPociag()
    auto.classList.remove('auto_start')
    pociag.classList.remove('pociag_start')
})

oblicz.addEventListener('click', () => {
    obliczAuto()
    obliczPociag()
    auto.classList.add('auto_start')
    pociag.classList.add('pociag_start')
})
