
document.addEventListener('DOMContentLoaded', () => {

    const parachutes = document.getElementById('parachutes-img');
    const parachutes_div = document.getElementById('parachutes');
    const transition3 = document.getElementById('transition3');
    const transition4 = document.getElementById('transition4-1')

    parachutes.addEventListener('mouseover', () => {
        gsap.to(parachutes, {
            width: '110%',
            height: '110%',
        })

        gsap.to(parachutes_div, {
            background: 'black',
            color: '#C95917'
        })

        gsap.to(transition3, {
            background: 'black',
        })

        gsap.to(transition4, {
            background: 'black',
        })

    })

    parachutes.addEventListener('mouseout', () => {
        gsap.to(parachutes, {
            width: '100%',
            height: '100%'
        })

        gsap.to(parachutes_div, {
            background: '#C95917',
            color: 'black'
            
        })

        gsap.to(transition3, {
            background: 'linear-gradient(to bottom, #070403, #C95917)',
        })

        gsap.to(transition4, {
            background: '#C95917',
        })


    })
})
