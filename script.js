const allTooltips = document.querySelectorAll('.skill_tooltip')

allTooltips.forEach(tooltip => {
    tooltip.innerText = ''

    const updateCounter = () => {
        const target = +tooltip.getAttribute('data-value')
        const t = +tooltip.innerText

        const increment = target / 100

        if(t < target){
            tooltip.innerText = `${Math.ceil(t + increment)}`
            setTimeout( updateCounter, 1)
        }
        else{
            tooltip.innerText = target + '%'
        }
    }

    updateCounter()
})