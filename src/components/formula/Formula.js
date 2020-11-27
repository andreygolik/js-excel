import { SheetsComponent } from '@core/SheetsComponent'

export class Formula extends SheetsComponent {
  static className = 'sheets__formula'

  constructor($root) {
    super($root, {
      name: 'Formula',
      listeners: ['input'],
    })
  }

  toHTML() {
    return `
      <div class="info">fx</div>
      <div class="input" contenteditable spellcheck="false"></div>
    `
  }

  onInput(event) {
    console.log('Formula: onInput', event)
  }
}
