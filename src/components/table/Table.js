import { SheetsComponent } from '@core/SheetsComponent'
import { createTable } from './table.template'

export class Table extends SheetsComponent {
  static className = 'sheets__table'

  toHTML() {
    return createTable()
  }
}
