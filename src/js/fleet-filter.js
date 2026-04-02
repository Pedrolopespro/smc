// ── FLEET CATEGORY FILTER ──
const filters = document.querySelectorAll('.fleet-filter')
const items = document.querySelectorAll('.fleet-item')

filters.forEach(btn => {
  btn.addEventListener('click', () => {
    const category = btn.dataset.filter

    // Update active state
    filters.forEach(f => f.classList.remove('is-active'))
    btn.classList.add('is-active')

    // Filter items
    items.forEach(item => {
      if (category === 'todos' || item.dataset.category === category) {
        item.classList.remove('is-hidden')
      } else {
        item.classList.add('is-hidden')
      }
    })
  })
})
