window.addEventListener('DOMContentLoaded', function(){

    const loader = document.querySelector('.calc')

    setTimeout(function(){
        loader.style.opacity = '0'
        loader.style.display = 'none'

    }, 3000)
    
    // typing animation script
    var typed = new Typed(".dev", {
        strings: ["Front-End", "Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })

    var typed = new Typed(".dev_2", {
        strings: ["Front-End", "Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })


    var input1 = document.querySelectorAll('.input_1')
    var input2 = document.querySelector('.input_2')
    var tex = document.querySelector('.tex')
    var send = document.querySelector('#send')

    send.addEventListener('click', function(){
        if(input1[0].value == '' &&  input1[1].value == '' && input2.value == '' && tex.value == ''){
            alert('Hech nima yozmadiz kataklarni to`ldiring')
        }else{
            input1[0].value = ''
            input1[1].value = ''
            input2.value = ''
            tex.value = ''
        }
        
    })







    window.addEventListener('scroll', function(){
        var header = document.querySelector('.header_title');
        var title = document.querySelector('.title')
        var span = document.querySelector('.span')
        var menu_btn = document.querySelector('.menu_btn')

        menu_btn.classList.toggle('active', window.scrollY > 600)

        menu_btn.addEventListener('click', function(){
            document.body.scrollTop = 0
            document.documentElement.scrollTop = 0
        })

        header.classList.toggle('active', window.scrollY > 600)

        title.classList.toggle('active', window.scrollY > 600)
        span.classList.toggle('active', window.scrollY > 600)
    })
    
    var ish1 = document.querySelector('#ish_1')
    var ish2 = document.querySelector('#ish_2')
    var port1 = document.querySelectorAll('.port')
    var port2 = document.querySelectorAll('.port_2')

    var bar = document.querySelector('.bar')
    var fa = document.querySelector('.fa-bars')
    var nav = document.querySelector('.nav')

    var links = document.querySelectorAll('.link')



    bar.addEventListener('click', function(){
        fa.classList.toggle('active')
        nav.classList.toggle('active')
    })
    links.forEach(link => {
        link.addEventListener('click', function(){
            fa.classList.toggle('active')
            nav.classList.toggle('active')
        })
    })

    ish1.addEventListener('click', function(){
        port1[0].style.display = 'block'
        port1[1].style.display = 'block'
        port1[2].style.display = 'block'

        port2[0].style.display = 'none'
        port2[1].style.display = 'none'
        port2[2].style.display = 'none'

        ish1.style.background = 'transparent'
        ish1.style.color = 'lightseagreen'
        ish1.style.border = '1px solid #fff'

        ish2.style.background = 'lightseagreen'
        ish2.style.color = '#fff'
        ish2.style.border = 'none'

    })

    ish2.addEventListener('click', function(){
        port1[0].style.display = 'none'
        port1[1].style.display = 'none'
        port1[2].style.display = 'none'

        port2[0].style.display = 'block'
        port2[1].style.display = 'block'
        port2[2].style.display = 'block'

        ish1.style.background = 'lightseagreen'
        ish1.style.color = '#fff'
        ish1.style.border = 'none'

        ish2.style.background = 'transparent'
        ish2.style.color = 'lightseagreen'
        ish2.style.border = '1px solid #fff'

    })
})

