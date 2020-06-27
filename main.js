const items = document.querySelectorAll('#timeline li')

// Check if an element id visible
const isInViewPort = el => {
    const rect = el.getBoundingClientRect()
    return(
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= 
            (window.innerHeight ||
            document.documentElement.clientHeight) &&
            rect.right <= (
                window.innerWidth ||
                document.documentElement.clientWidth
            )
    )
}
// Loop through all li elements
const run = () =>
    items.forEach(item => {
        if (isInViewPort)
            item.classList.add('show')
    }
    )

//Events that trigger the run function
window.addEventListener('load',run)
window.addEventListener('resize',run)
window.addEventListener('scroll',run)


