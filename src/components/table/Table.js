import { SheetsComponent } from '@core/SheetsComponent'
import { createTable } from './table.template'
import { shouldResize } from './table.functions'
import { resizeHandler } from './table.resize'

export class Table extends SheetsComponent {
  static className = 'sheets__table'

  constructor($root) {
    super($root, {
      listeners: ['mousedown'],
    })
  }

  toHTML() {
    return createTable()
  }

  onMousedown(event) {
    if (shouldResize(event)) {
      resizeHandler(this.$root, event)
    }
  }
}
