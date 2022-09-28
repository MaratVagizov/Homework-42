import {movies} from './db.js'

let ul = document.querySelector('.promo__interactive-list')
let ul_2 = document.querySelector('.promo__menu-list')
let genre = document.querySelector('.promo__genre')
let title = document.querySelector('.promo__title')
let descr = document.querySelector('.promo__descr')
let imdb = document.querySelector('.imdb')
let kinopisk = document.querySelector('.kinopisk')
let c  = document.querySelector('.promo__bg')
let inpSearch = document.querySelector('#search')
c.style.backgroundImage = `url('./img/bg.jpg')`

let modal = document.querySelector('.modal')
let modal_bg = document.querySelector('.modal_bg')
let divstar = document.querySelector('.divstar')



inpSearch.onkeyup = () => {
    let value = inpSearch.value.toLowerCase().trim()

    let filtered = movies.filter(item => {
        if(item.Title.toLowerCase().includes(value)) {
            return item
        }
    })

    reload(filtered)
}

let li_array = []


const reload = (arr) => {

    
    showMovie(arr[0])
    genre.innerHTML = movies[0].Genre
    title.innerHTML = movies[0].Title
    descr.innerHTML = movies[0].Plot
    imdb.innerHTML = movies[0].imdbRating
    kinopisk.innerHTML = movies[0].Metascore

    for(let item of arr) {

        

        let li = document.createElement('li')
        let del = document.createElement('div')
        let li_2 = document.createElement('li')

        li.classList.add('promo__interactive-item')
        del.classList.add('delete')
        li_2.classList.add('promo__menu-item')

        li.innerHTML = `${arr.indexOf(item) + 1}. ${item.Title}`
        

        if ( li_array.includes(item.Genre)) {
            
        }
        else {
            li_2.innerHTML = item.Genre
            li_array.push(item.Genre)
        }


        li_2.onclick = () => {
            ul.innerHTML = ""
            arr = arr.filter(elem => elem.Genre == item.Genre)
            console.log(arr);
            reload(arr)
            li_2.classList.add('promo__menu-item_active')
            
        }
        


        li.append(del)
        ul.append(li)

        ul_2.append(li_2)

        del.onclick = () => {
            arr = arr.filter(elem => elem.ID !== item.ID)
            console.log(arr);
            reload(arr)
        }


        let close = document.createElement('button')
        close.onclick = () => {

            modal.style.display = 'none'
            modal_bg.style.display = 'none'
            setTimeout(
                () => {
                    modal.style.opacity = '0'
                    modal_bg.style.opacity = '0'
                }, 100)
                
            }

        li.onclick = () => {
            modal.innerHTML = ""
            divstar.innerHTML = ""
            showMovie(item)
            genre.innerHTML = item.Genre
            title.innerHTML = item.Title
            descr.innerHTML = item.Plot
            imdb.innerHTML = item.imdbRating
            kinopisk.innerHTML = item.Metascore

            modal.style.display = 'block'
            modal_bg.style.display = 'block'
            setTimeout(
                () => {
                    modal.style.opacity = '1'
                    modal_bg.style.opacity = '1'
                }, 100)

                let modal_star = document.createElement('div')
                modal_star.classList.add('modal_star')
            if ( item.imdbRating < 8 ) {
                // divstar.innerHTML = ''
                let star = document.createElement('img')
                star.classList.add('star')
                star.src = './icons/Star.svg'
                let star2 = document.createElement('img')
                star2.classList.add('star')
                star2.src = './icons/Star.svg'
                let star3 = document.createElement('img')
                star3.classList.add('star')
                star3.src = './icons/Star.svg'

                divstar.append(star, star2, star3)
                modal_star.append(star, star2, star3)
            }
            else if ( item.imdbRating == 8 ) {
                // divstar.innerHTML = ''
                let star = document.createElement('img')
                star.classList.add('star')
                star.src = './icons/Star.svg'
                let star2 = document.createElement('img')
                star2.classList.add('star')
                star2.src = './icons/Star.svg'
                let star3 = document.createElement('img')
                star3.classList.add('star')
                star3.src = './icons/Star.svg'
                let star4 = document.createElement('img')
                star4.classList.add('star')
                star4.src = './icons/Star.svg'

                divstar.append(star, star2, star3, star4)
                modal_star.append(star, star2, star3, star4)
            }
            else if ( item.imdbRating > 8 ) {
                // divstar.innerHTML = ''
                let star = document.createElement('img')
                star.classList.add('star')
                star.src = './icons/Star.svg'
                let star2 = document.createElement('img')
                star2.classList.add('star')
                star2.src = './icons/Star.svg'
                let star3 = document.createElement('img')
                star3.classList.add('star')
                star3.src = './icons/Star.svg'
                let star4 = document.createElement('img')
                star4.classList.add('star')
                star4.src = './icons/Star.svg'
                let star5 = document.createElement('img')
                star5.classList.add('star')
                star5.src = './icons/Star.svg'

                divstar.append(star, star2, star3, star4, star5)
                modal_star.append(star, star2, star3, star4, star5)
            }
            
            
            
           


            close.classList.add('cancel')
            close.innerHTML = 'Close'

            let img = document.createElement('img')
            img.classList.add('img')
            img.style.width =  '660px'
            img.src = item.Poster
            let p1 = document.createElement('p')
            let p2 = document.createElement('p')
            let p3 = document.createElement('p')
            let p4 = document.createElement('p')
            let p5 = document.createElement('p')
            let p6 = document.createElement('p')
            let p7 = document.createElement('p')
            let p8 = document.createElement('p')
            let p9 = document.createElement('p')
            let p10 = document.createElement('p')
            let p11 = document.createElement('p')
            let p12 = document.createElement('p')
            let p13 = document.createElement('p')
            let p14 = document.createElement('p')
            let p15 = document.createElement('p')
            let p16 = document.createElement('p')
            let p17 = document.createElement('p')
            let p18 = document.createElement('p')
            let p19 = document.createElement('p')
            let p20 = document.createElement('p')
            let p21 = document.createElement('p')
            let p22 = document.createElement('p')
            let p23 = document.createElement('p')
            let p24 = document.createElement('p')
            let p25 = document.createElement('p')
            p1.innerHTML = `ID: ${item.ID}`
            p2.innerHTML = `Title: ${item.Title}`
            p3.innerHTML = `Year: ${item.Year}`
            p4.innerHTML = `Rated: ${item.Rated}`
            p5.innerHTML = `Released: ${item.Released}`
            p6.innerHTML = `Runtime: ${item.Runtime}`
            p7.innerHTML = `Genre: ${item.Genre}`
            p8.innerHTML = `Director: ${item.Director}`
            p9.innerHTML = `Writer: ${item.Writer}`
            p10.innerHTML = `Actors: ${item.Actors}`
            p11.innerHTML = `Plot: ${item.Plot}`
            p12.innerHTML = `Language: ${item.Language}`
            p13.innerHTML = `Country: ${item.Country}`
            p14.innerHTML = `Awards: ${item.Awards}`
            p15.innerHTML = `Poster: ${item.Poster}`
            p16.innerHTML = `Metascore: ${item.Metascore}`
            p17.innerHTML = `imdbRating: ${item.imdbRating}`
            p18.innerHTML = `imdbVotes: ${item.Metascore}`
            p19.innerHTML = `mdbID: ${item.mdbID}`
            p20.innerHTML = `iType: ${item.iType}`
            p21.innerHTML = `DVD: ${item.DVD}`
            p22.innerHTML = `BoxOffice: ${item.BoxOffice}`
            p23.innerHTML = `Production: ${item.Production}`
            p24.innerHTML = `Website: ${item.Website}`
            p25.innerHTML = `Response: ${item.Response}`
            modal.append(img, modal_star, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16,
                p17, p18, p19, p20, p21, p22, p23, p24, p25, close)
                

                // modal.style.backgroundImage = `url('${item.Poster}')`
                
                // p1.innerHTML  = ""
                // p2.innerHTML  = ""
                // p3.innerHTML  = ""
                // p4.innerHTML = ""
                // p5.innerHTML = ""
                // p6.innerHTML = ""
                // p7.innerHTML = ""
                // p8.innerHTML = ""
                // p9.innerHTML = ""
                // p10.innerHTML  = ""
                // p11.innerHTML = ""
                // p12.innerHTML = ""
                // p13.innerHTML = ""
                // p14.innerHTML = ""
                // p15.innerHTML = ""
                // p16.innerHTML = ""
                // p17.innerHTML  = ""
                // p18.innerHTML = ""
                // p19.innerHTML = ""
                // p20.innerHTML = ""
                // p21.innerHTML = ""
                // p22.innerHTML = ""
                // p23.innerHTML = ""
                // p24.innerHTML = ""
                // p25.innerHTML = ""
        }



    }
}

const showMovie = (movie) => {
    c.style.backgroundImage = `url('${movie.Poster}')`
}

reload(movies)

// ДЗ
// 1) Сделать жанры 
// 2) Сделать модальное окно где показаны остальные данные так же данне показываются на главное странице 
// 3) Рейтинг фильмов по звездам 10 баллов IMDB это 5 звезд
// 4) Поисковик по клику а не по печати 