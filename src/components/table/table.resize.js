import { $ } from '@core/dom'

export const resizeHandler = ($root, event) => {
  const $resizer = $(event.target)
  const $parent = $resizer.closest('[data-type="resizable"]')
  const coords = $parent.getCoords()
  const type = $resizer.data.resize
  const sideProp = type === 'col' ? 'bottom' : 'right'
  let value

  $resizer.css({
    opacity: 1,
    [sideProp]: '-9000px',
  })

  if (type === 'col') {
    document.onmousemove = (e) => {
      const delta = e.pageX - coords.right
      value = coords.width + delta
      $resizer.css({ right: -delta + 'px' })
    }
  } else {
    document.onmousemove = (e) => {
      const delta = e.pageY - coords.bottom
      value = coords.height + delta
      $resizer.css({ bottom: -delta + 'px' })
    }
  }

  document.onmouseup = () => {
    document.onmouseup = null
    document.onmousemove = null

    if (type === 'col') {
      $root.findAll(`[data-col="${$parent.data.col}"]`).forEach((el) => {
        el.style.width = value + 'px'
      })
    } else {
      $parent.css({ height: value + 'px' })
    }

    $resizer.css({
      opacity: null,
      right: null,
      bottom: null,
    })
  }
}
