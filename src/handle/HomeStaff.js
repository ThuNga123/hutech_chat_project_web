var tabs = document.getElementById('tabTitle')
var contents = document.getElementById('tabContent')

var itemTitle = document.getElementsByClassName('itemTitle')
var itemContent = document.getElementsByClassName('itemContent')
for (var i = 0; i < itemTitle.length; i++) {
  itemTitle[i].addEventListener('click', function () {
    var current = document.getElementsByClassName('active')
    console.log(current)
    current[0].className = current[0].className.replace(' active', '')
    this.className += ' active'
  })
}

for (var i = 0; i < itemContent.length; i++) {
  itemContent[i].addEventListener('click', function () {
    var current = document.getElementsByClassName('active')
    current[0].className = current[0].className.replace(' active', '')
    this.className += ' active'
  })
}
