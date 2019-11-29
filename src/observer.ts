// https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver

export default class Observer {
  els: Element[]
  observer: IntersectionObserver

  constructor (els: Element[]) {
    this.els = Array.from(els)

    this.init()
  }

  init () {
    const ob = this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const isInViewport = entry.isIntersecting
        
        if (isInViewport) {
          const target = entry.target
          target.src = target.dataset.src
          ob.unobserve(target)
        }
      })
    })

    this.els.forEach(el => {
      ob.observe(el)
    })
  }

  clean () {
    this.observer.disconnect()
  }
}