var counter = 0
const contents = [
  {
    id: 1,
    progress: '25%',
    name: 'branding',
    firstRow: 'Company logo',
    scndRow: 'Logo position',
    extra: `<div class="form-check">
      <input class="form-check-input" type="radio" name="options" id="optionOne" value="option1">
      <label class="form-check-label" for="optionOne">Top left</label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="radio" name="options" id="optionTwo" value="option1">
      <label class="form-check-label" for="optionTwo">Centre</label>
    </div>`
  },
  {
    id: 2,
    progress: '50%',
    name: 'photos',
    firstRow: 'Watermarks',
    scndRow: 'Aspect ratio',
    extra: `<div class="form-check">
      <input class="form-check-input" type="radio" name="options" id="optionOne" value="option1">
      <label class="form-check-label" for="optionOne">4:2</label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="radio" name="options" id="optionTwo" value="option1">
      <label class="form-check-label" for="optionTwo">3:2</label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="radio" name="options" id="optionThree" value="option1">
      <label class="form-check-label" for="optionThree">16:9</label>
    </div>`
  },
  {
    id: 3,
    progress: '75%',
    name: 'floorplans',
    firstRow: 'Total area',
    scndRow: 'Color',
    extra: `<div class="form-check">
        <input class="form-check-input" type="radio" name="options" id="optionOne" value="option1">
        <label class="form-check-label" for="optionOne">Colored</label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="options" id="optionTwo" value="option1">
        <label class="form-check-label" for="optionTwo">Black & white</label>
      </div>`
  },
  {
    id: 4,
    progress: '99%',
    name: 'tour',
    firstRow: 'Welcome screen',
    scndRow: 'Welcome screen logo',
    extra: document.querySelector('.switch').innerHTML
  }
]

function replaceContentInContainer (target, source) {
  document.getElementById(target).innerHTML = document.getElementById(
    source
  ).innerHTML
}

function replaceOptions () {
  const template = document.querySelector('template')
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
      document.querySelector('.right').appendChild(template.content, true)
      document.querySelector('.extra').innerHTML = con.extra
      document.getElementById('scndRow').innerHTML = con.scndRow
    }
  })
}
