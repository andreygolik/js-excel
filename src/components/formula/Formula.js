import { SheetsComponent } from '@core/SheetsComponent'

export class Formula extends SheetsComponent {
  static className = 'sheets__formula'

  toHTML() {
    return `
      <div class="info">fx</div>
      <div class="input" contenteditable spellcheck="false"></div>
    `
  }
}
