const CODES = { A: 65, Z: 90 }

const toColumn = (content) => `<div class="column">${content}</div>`

const toCell = (content) => `<div class="cell" contenteditable>${content}</div>`

const createRow = (content, info) => `
  <div class="row">
    <div class="row-info">${info ?? ''}</div>
    <div class="row-data">${content}</div>
  </div>
`

const toChar = (_, index) => String.fromCharCode(CODES.A + index)

export function createTable(rowCount = 20) {
  const colCount = CODES.Z - CODES.A + 1
  const rows = []

  // table header
  const cols = new Array(colCount).fill('').map(toChar).map(toColumn).join('')
  rows.push(createRow(cols))

  for (let i = 1; i <= rowCount; ++i) {
    const cells = new Array(colCount).fill('').map(toCell).join('')
    rows.push(createRow(cells, i))
  }

  return rows.join('')
}
