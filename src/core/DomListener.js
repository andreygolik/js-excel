import { capitalize } from './utils'

// input -> onInput
const getMethodName = (eventName) => `on${capitalize(eventName)}`

export class DomListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error('No $root provided for DomListener!')
    }
    this.$root = $root
    this.listeners = listeners
  }

  initDOMListeners() {
    this.listeners.forEach((listener) => {
      const method = getMethodName(listener)
      if (!this[method]) {
        throw new Error(`Method ${method} is not implemented for ${this.name} component`)
      }
      this[method] = this[method].bind(this)
      this.$root.on(listener, this[method])
    })
  }

  removeDOMListeners() {
    this.listeners.forEach((listener) => this.$root.off(listener, this[getMethodName(listener)]))
  }
}
