const page = document.getElementById('start')
const contents = [
  {
    id: 1,
    name: 'branding',
    firstRow: 'Company logo',
    scndRow: 'Logo position'
  },
  {
    id: 2,
    name: 'photos',
    firstRow: 'Watermarks',
    scndRow: 'Aspect ratio'
  },
  {
    id: 3,
    name: 'floorplans',
    firstRow: 'Total area',
    scndRow: 'Color'
  },
  {
    id: 4,
    name: 'tour',
    firstRow: 'Welcome screen',
    scndRow: 'Welcome screen logo'
  }
]

contents.forEach(content => {
  const inst = document.importNode(page.contentEditable, true)
  inst.querySelector('.subheader>h1').innerHTML = content.name
  inst.querySelector('.container').innerHTML = content.firstRow
  document.getElementById('start').appendChild(inst)
})

function replaceContentInContainer (source) {
  const target = 'start'

  document.getElementById(target).innerHTML = document.getElementById(
    source
  ).innerHTML
}
