var counter = 0
const contents = [
  {
    id: 1,
    progress: '25%',
    name: 'branding',
    firstRow: 'Company logo',
    scndRow: 'Logo position'
  },
  {
    id: 2,
    progress: '50%',
    name: 'photos',
    firstRow: 'Watermarks',
    scndRow: 'Aspect ratio'
  },
  {
    id: 3,
    progress: '75%',
    name: 'floorplans',
    firstRow: 'Total area',
    scndRow: 'Color'
  },
  {
    id: 4,
    progress: '99%',
    name: 'tour',
    firstRow: 'Welcome screen',
    scndRow: 'Welcome screen logo'
  }
]

function replaceContentInContainer (target, source) {
  document.getElementById(target).innerHTML = document.getElementById(
    source
  ).innerHTML
}

function replaceFirst () {
  contents.forEach(con => {
    if (counter > 4) {
      replaceContentInContainer('start', 'finished')
    }
    if (counter === con.id) {
      if (counter > 1) {
        document.querySelector('.back-btn').style.display = 'inline-block'
      } else document.querySelector('.back-btn').style.display = 'none'

      document.querySelector('.progress-bar').style.width = con.progress
      document.querySelector('.subhead-title').innerHTML = con.name
      document.getElementById('firstRow').innerHTML = con.firstRow
      document.getElementById('scndRow').innerHTML = con.scndRow
    }
  })
}
