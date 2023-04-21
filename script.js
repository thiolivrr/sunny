function ShowMenu() {
    var nav = document.querySelector('.navbar')
    if (nav.style.display == 'flex') {
      nav.style.display = 'none'
      document.querySelector('.ham_img').src = "images/icon-hamburger.svg"
    } else {
      nav.style.display = 'flex'
      document.querySelector('.ham_img').src = "images/close2.png"
    }    
  }
