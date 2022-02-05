(function () {
  function loadbar() {
    let loaderOverlay = document.querySelector('.loader')
    let loaderProgress = document.querySelector('.progress-bar')
    let loaderPercent = document.querySelector('.loader-percentage')
    img = [
      'https://res.cloudinary.com/areoladaniel-com/image/upload/v1644053260/V3_Portfolio/Wallpaper_lwlrrj.jpg',
      'https://res.cloudinary.com/areoladaniel-com/image/upload/v1644053225/V3_Portfolio/BM-14_tchnmm.jpg',
      'https://res.cloudinary.com/areoladaniel-com/image/upload/v1644053227/V3_Portfolio/BTM_10_wqows2.jpg',
      'https://res.cloudinary.com/areoladaniel-com/image/upload/v1644053201/V3_Portfolio/BTM_1_kdzucq.jpg',
      'https://res.cloudinary.com/areoladaniel-com/image/upload/v1644053206/V3_Portfolio/BTM_2_ipm3br.jpg',
      'https://res.cloudinary.com/areoladaniel-com/image/upload/v1644053202/V3_Portfolio/BTM_3_octurn.jpg',
      'https://res.cloudinary.com/areoladaniel-com/image/upload/v1644053228/V3_Portfolio/BTM_4_uec1dy.jpg',
      'https://res.cloudinary.com/areoladaniel-com/image/upload/v1644053235/V3_Portfolio/BTM_5_zz2fwt.jpg',
      'https://res.cloudinary.com/areoladaniel-com/image/upload/v1644053212/V3_Portfolio/BTM_6_z7ropd.jpg',
      'https://res.cloudinary.com/areoladaniel-com/image/upload/v1644053226/V3_Portfolio/BTM_7_bgc4qo.jpg',
      'https://res.cloudinary.com/areoladaniel-com/image/upload/v1644053236/V3_Portfolio/BTM_9_svomjt.jpg',
      'https://res.cloudinary.com/areoladaniel-com/image/upload/v1644053238/V3_Portfolio/Events_11_tbir39.jpg',
      'https://res.cloudinary.com/areoladaniel-com/image/upload/v1644053240/V3_Portfolio/Events_12_mdmhxo.jpg',
      'https://res.cloudinary.com/areoladaniel-com/image/upload/v1644053239/V3_Portfolio/Events_13_wl67dg.jpg',
      'https://res.cloudinary.com/areoladaniel-com/image/upload/v1644053240/V3_Portfolio/Events_14_qyfilj.jpg',
      'https://res.cloudinary.com/areoladaniel-com/image/upload/v1644053249/V3_Portfolio/Events_15_wutzfv.jpg',
      'https://res.cloudinary.com/areoladaniel-com/image/upload/v1644053221/V3_Portfolio/Events_1_azqgzs.jpg',
      'https://res.cloudinary.com/areoladaniel-com/image/upload/v1644053237/V3_Portfolio/Events_2_xnrmks.jpg',
      'https://res.cloudinary.com/areoladaniel-com/image/upload/v1644053230/V3_Portfolio/Events_3_ecw9z5.jpg',
      'https://res.cloudinary.com/areoladaniel-com/image/upload/v1644053232/V3_Portfolio/Events_4_h3xpcx.jpg',
      'https://res.cloudinary.com/areoladaniel-com/image/upload/v1644053234/V3_Portfolio/Events_5_jgjpjc.jpg',
      'https://res.cloudinary.com/areoladaniel-com/image/upload/v1644053235/V3_Portfolio/Events_7_kxiwk7.jpg',
      'https://res.cloudinary.com/areoladaniel-com/image/upload/v1644053235/V3_Portfolio/Events_8_qwxvkf.jpg',
      'https://res.cloudinary.com/areoladaniel-com/image/upload/v1644053253/V3_Portfolio/Portrait_10_wsfvkk.jpg',
      'https://res.cloudinary.com/areoladaniel-com/image/upload/v1644053248/V3_Portfolio/Portrait_11_w3w9fj.jpg',
      'https://res.cloudinary.com/areoladaniel-com/image/upload/v1644053252/V3_Portfolio/Portrait_12_npvrjc.jpg',
      'https://res.cloudinary.com/areoladaniel-com/image/upload/v1644053248/V3_Portfolio/Portrait_13_vh3akt.jpg',
      'https://res.cloudinary.com/areoladaniel-com/image/upload/v1644053251/V3_Portfolio/Portrait_14_waohiu.jpg',
      'https://res.cloudinary.com/areoladaniel-com/image/upload/v1644053253/V3_Portfolio/Portrait_15_hcdsjb.jpg',
      'https://res.cloudinary.com/areoladaniel-com/image/upload/v1644053254/V3_Portfolio/Portrait_17_asw2r0.jpg',
      'https://res.cloudinary.com/areoladaniel-com/image/upload/v1644053242/V3_Portfolio/Portrait_1_l0udjb.jpg',
      'https://res.cloudinary.com/areoladaniel-com/image/upload/v1644053245/V3_Portfolio/Portrait_2_aiyf28.jpg',
      'https://res.cloudinary.com/areoladaniel-com/image/upload/v1644053243/V3_Portfolio/Portrait_3_frbovd.jpg',
      'https://res.cloudinary.com/areoladaniel-com/image/upload/v1644053246/V3_Portfolio/Portrait_4_dvrlbk.jpg',
      'https://res.cloudinary.com/areoladaniel-com/image/upload/v1644053247/V3_Portfolio/Portrait_6_vhtkke.jpg',
      'https://res.cloudinary.com/areoladaniel-com/image/upload/v1644053247/V3_Portfolio/Portrait_7_cciody.jpg',
      'https://res.cloudinary.com/areoladaniel-com/image/upload/v1644053248/V3_Portfolio/Portrait_8_lxwg8i.jpg',
      'https://res.cloudinary.com/areoladaniel-com/image/upload/v1644053263/V3_Portfolio/Stills_1_qgp9mz.jpg',
      'https://res.cloudinary.com/areoladaniel-com/image/upload/v1644053254/V3_Portfolio/Stills_2_yi9dpi.jpg',
      'https://res.cloudinary.com/areoladaniel-com/image/upload/v1644053255/V3_Portfolio/Stills_3_s72jrb.jpg',
      'https://res.cloudinary.com/areoladaniel-com/image/upload/v1644053256/V3_Portfolio/Stills_4_sqi4as.jpg',
      'https://res.cloudinary.com/areoladaniel-com/image/upload/v1644053256/V3_Portfolio/Stills_5_ii6elh.jpg',
      'https://res.cloudinary.com/areoladaniel-com/image/upload/v1644053257/V3_Portfolio/Stills_6_o1chfb.jpg',
    ]
    c = 0
    totalImages = img.length

    function imgLoaded() {
      c += 1
      let percent = (((100 / totalImages) * c) << 0) + '%'
      loaderProgress.style.width = percent
      loaderPercent.textContent = percent
      if (c === totalImages) return doneLoading()
    }
    function doneLoading() {
      setTimeout(function () {
        loaderOverlay.style.opacity = 0
      }, 800)
      setTimeout(function () {
        loaderOverlay.style.display = 'none'
      }, 1300)
    }
    for (var i = 0; i < totalImages; i++) {
      var tImg = new Image()
      tImg.onload = imgLoaded
      tImg.onerror = imgLoaded
      tImg.src = img[i]
    }
  }
  document.addEventListener('DOMContentLoaded', loadbar, false)
})()

document.addEventListener('DOMContentLoaded', function () {
  let pageWrapper = document.querySelector('.page-wrapper')
  let loaderOverlay = document.querySelector('.loader')
  // let seenLoader = localStorage.getItem('seenLoader')
  let seenLoader = Cookies.get('seenLoader')
  if (!seenLoader) {
    loaderOverlay.style.display = 'flex'
    setTimeout(() => {
      pageWrapper.style.display = 'block'
    }, 800);
    Cookies.set('seenLoader', 1, {expires: 1})
  } else {
    loaderOverlay.style.visibility = 'hidden'
    pageWrapper.style.display = 'block'
  }
})
/* 
document.addEventListener('keydown', function (event) {
  if (event.metaKey && event.shiftKey && event.key === 'r') {
    localStorage.clear()
  }
}) */


