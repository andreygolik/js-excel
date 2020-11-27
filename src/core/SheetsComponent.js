import { DomListener } from '@core/DomListener'

export class SheetsComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners)
  }

  // Returns template of component
  toHTML() {
    return ''
  }

  init() {
    this.initDOMListeners()
  }
}
