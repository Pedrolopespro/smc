// ── NAV SCROLL BEHAVIOR ──
const nav = document.getElementById('nav')
const burger = nav?.querySelector('.nav__burger')
const mobileMenu = document.getElementById('navMobile')

if (nav) {
  const onScroll = () => {
    if (window.scrollY > 60) {
      nav.classList.add('nav--scrolled')
      nav.classList.remove('nav--transparent')
    } else {
      nav.classList.remove('nav--scrolled')
      nav.classList.add('nav--transparent')
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
}

// ── BURGER MENU ──
burger?.addEventListener('click', () => {
  const isOpen = mobileMenu?.classList.contains('is-open')
  mobileMenu?.classList.toggle('is-open')
  burger.classList.toggle('is-open')
  burger.setAttribute('aria-expanded', String(!isOpen))
})

// Close mobile menu on link click
mobileMenu?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('is-open')
    burger?.classList.remove('is-open')
    burger?.setAttribute('aria-expanded', 'false')
  })
})

// ── SMOOTH SCROLL for anchors ──
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const href = anchor.getAttribute('href')
    if (href === '#') return
    const target = document.querySelector(href)
    if (target) {
      e.preventDefault()
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  })
})

// ── INTERSECTION OBSERVER — fade-in on scroll ──
const observer = new IntersectionObserver(
  entries => entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('is-visible')
      observer.unobserve(e.target)
    }
  }),
  { threshold: 0.1 }
)

document.querySelectorAll('.feat, .veiculo, .porque__right, .cta-hero__content').forEach(el => {
  el.classList.add('fade-up')
  observer.observe(el)
})

// Observe elements that already have fade-up in HTML
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el))

// ── VIDEO PLAYER — "Por que" section ──
const video = document.getElementById('porqueVideo')
const playBtn = document.getElementById('videoPlayBtn')
const muteBtn = document.getElementById('videoMuteBtn')

if (video && playBtn && muteBtn) {
  const iconPlay = playBtn.querySelector('.icon-play')
  const iconPause = playBtn.querySelector('.icon-pause')
  const iconMuted = muteBtn.querySelector('.icon-muted')
  const iconUnmuted = muteBtn.querySelector('.icon-unmuted')

  // Play / Pause
  playBtn.addEventListener('click', () => {
    if (video.paused) {
      video.play()
      iconPlay.style.display = 'none'
      iconPause.style.display = 'block'
    } else {
      video.pause()
      iconPlay.style.display = 'block'
      iconPause.style.display = 'none'
    }
  })

  // Mute / Unmute
  video.muted = true
  muteBtn.addEventListener('click', () => {
    video.muted = !video.muted
    if (video.muted) {
      iconMuted.style.display = 'block'
      iconUnmuted.style.display = 'none'
    } else {
      iconMuted.style.display = 'none'
      iconUnmuted.style.display = 'block'
    }
  })

  // Update play icon when video ends or loops
  video.addEventListener('pause', () => {
    iconPlay.style.display = 'block'
    iconPause.style.display = 'none'
  })
  video.addEventListener('play', () => {
    iconPlay.style.display = 'none'
    iconPause.style.display = 'block'
  })
}
