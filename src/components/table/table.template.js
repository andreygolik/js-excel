const CODES = { A: 65, Z: 90 }

const toColumn = (content, index) => `
  <div class="column" data-type="resizable" data-col="${index + 1}">
    ${content}
    <div class="col-resize" data-resize="col"></div>
  </div>
`

const toCell = (_, index) => `
  <div class="cell" contenteditable data-col="${index + 1}"></div>
`

const createRow = (content, index) => `
  <div class="row" data-type="resizable">
    <div class="row-info">
      ${index ?? ''}
      ${index ? '<div class="row-resize" data-resize="row"></div>' : ''}
    </div>
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
