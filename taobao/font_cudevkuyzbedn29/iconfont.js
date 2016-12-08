;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-search" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M953.504 908.256l-152.608-163.296c61.856-74.496 95.872-167.36 95.872-265.12 0-229.344-186.624-415.968-416.032-415.968-229.344 0-415.968 186.592-415.968 415.968s186.624 415.968 416 415.968c60.096-0.032 118.048-12.576 172.224-37.248 16.096-7.328 23.2-26.304 15.872-42.368-7.328-16.128-26.4-23.264-42.368-15.872-45.856 20.864-94.88 31.456-145.76 31.488-194.08 0-351.968-157.888-351.968-351.968 0-194.048 157.888-351.968 351.968-351.968 194.112 0 352.032 157.888 352.032 351.968 0 91.36-34.848 177.92-98.08 243.744-12.256 12.736-11.84 32.992 0.864 45.248 0.96 0.928 2.208 1.28 3.296 2.08 0.864 1.28 1.312 2.752 2.4 3.904l165.504 177.088c6.272 6.752 14.816 10.144 23.36 10.144 7.84 0 15.68-2.848 21.856-8.64C964.864 941.408 965.568 921.152 953.504 908.256z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-home" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M979.84 404.544 574.272 84c-34.912-27.648-89.696-27.616-124.576 0L44.16 404.544c-13.856 10.976-16.224 31.104-5.28 44.96s30.624 16.224 44.48 5.28L96 444.416 96 832c0 54.944 57.888 96 108.8 96l640 0c50.304 0 83.2-38.592 83.2-96L928 445.92l11.68 8.864c5.888 4.64 13.12 6.88 20.064 6.88 9.44 0 18.912-4.16 25.216-12.16C995.936 435.648 993.728 415.52 979.84 404.544zM480 864l0-177.408c0-8.832 16-13.248 32-13.248s32 4.416 32 13.248L544 864 480 864zM864 832c0 21.216-5.856 32-19.2 32L608.64 864c0-0.48-0.64-0.864-0.64-1.344l0-176.064c0-37.216-30.016-77.28-96-77.28s-96 40.064-96 77.28l0 176.064c0 0.48 0.864 0.864 0.864 1.344L204.8 864C184.736 864 160 846.656 160 832L160 393.824l328.928-259.616c11.808-9.344 33.12-9.344 44.96 0L864 395.328 864 832z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-cartfill" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M353.024 831.808c-35.36 0-64 28.64-64 64s28.64 64 64 64 64-28.64 64-64S388.416 831.808 353.024 831.808L353.024 831.808z"  ></path>'+
      ''+
      '<path d="M801.024 831.808c-35.36 0-64 28.64-64 64s28.64 64 64 64 64-28.64 64-64S836.416 831.808 801.024 831.808L801.024 831.808z"  ></path>'+
      ''+
      '<path d="M937.312 188.48C920.96 170.016 898.496 160 874.048 160L232.864 160 230.592 146.976C224.992 100.416 184 64 137.28 64L97.024 64c-17.696 0-32 14.304-32 32s14.304 32 32 32L137.28 128c13.92 0 28.128 12.672 30.016 28.256l30.912 178.496L252.48 716.864C258.112 763.424 298.656 800 344.768 800l520.256 0c17.696 0 32-14.304 32-32s-14.304-32-32-32L344.768 736c-13.632 0-27.04-12.608-28.832-27.456l-5.312-37.344 507.712-31.392c46.08 0 86.624-36.512 92.064-81.376l50.432-288.352C964.576 239.264 956 209.568 937.312 188.48z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-ttpodicon" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M258.875 439.513c-46.519 0-84.375 37.856-84.375 84.375s37.856 84.375 84.375 84.375c46.519 0 84.375-37.856 84.375-84.375s-37.856-84.375-84.375-84.375zM512 439.513c-46.519 0-84.375 37.856-84.375 84.375s37.856 84.375 84.375 84.375c46.519 0 84.375-37.856 84.375-84.375s-37.856-84.375-84.375-84.375zM765.125 439.513c-46.519 0-84.375 37.856-84.375 84.375s37.856 84.375 84.375 84.375c46.519 0 84.375-37.856 84.375-84.375s-37.856-84.375-84.375-84.375z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-wuliu" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M351.94087 575.903242l-127.978498 0c-17.717453 0-31.994625-14.277171-31.994625-31.994625 0-17.717453 14.277171-31.994625 31.994625-31.994625L319.946246 511.913993l0-95.983874c0-17.717453 14.277171-31.994625 31.994625-31.994625 17.717453 0 31.994625 14.277171 31.994625 31.994625l0 127.978498C383.935495 561.626071 369.658324 575.903242 351.94087 575.903242zM702.161599 666.898707c-61.92508 0-113.701327 43.347556-127.290442 101.144297l-123.85016 0c-13.589115-57.968755-65.365362-101.144297-127.290442-101.144297-72.245926 0-131.074752 58.828826-131.074752 131.074752 0 72.417941 58.828826 131.246766 131.074752 131.246766 60.376953 0 110.777087-41.283387 125.914329-97.015958l126.430371 0c15.137242 55.732572 65.537376 97.015958 126.086343 97.015958 72.245926 0 131.074752-58.828826 131.074752-131.074752S774.407526 666.898707 702.161599 666.898707zM323.730556 865.058962c-36.983034 0-67.085503-30.102469-67.085503-67.257517 0-36.983034 30.102469-67.085503 67.085503-67.085503 36.983034 0 67.085503 30.102469 67.085503 67.085503C390.816059 834.956493 360.71359 865.058962 323.730556 865.058962zM702.161599 864.886948c-36.983034 0-67.085503-30.102469-67.085503-67.085503s30.102469-67.085503 67.085503-67.085503c36.983034 0 67.085503 30.102469 67.085503 67.085503S739.144633 864.886948 702.161599 864.886948zM864.026877 95.983874 399.760793 95.983874c-44.035612 0-79.814547 35.778935-79.814547 79.814547l0 92.543591L125.398287 366.046027c-1.376113 0.688056-2.752226 1.548127-3.956325 2.408198C85.318999 393.912313 65.365362 433.475559 65.365362 479.919368l0 322.010415c0 17.717453 14.277171 31.994625 31.994625 31.994625s31.994625-14.277171 31.994625-31.994625L129.354611 479.919368c0-24.942046 9.116748-44.551655 27.006215-57.968755L366.390055 316.677977c1.376113-0.688056 2.408198-2.064169 3.612296-2.92424 1.892155-1.376113 3.78431-2.580212 5.332437-4.128339 1.376113-1.548127 2.408198-3.268268 3.440282-4.988409s2.236183-3.268268 2.92424-5.332437c0.860071-2.236183 1.032085-4.472367 1.376113-6.70855 0.172014-1.548127 0.860071-2.92424 0.860071-4.472367l0-112.325214c0-8.600706 7.052579-15.825298 15.825298-15.825298l464.266084 0c17.545439 0 31.994625 14.621199 31.994625 32.510667l0 607.381824c0 17.717453 14.277171 31.994625 31.994625 31.994625s31.994625-14.277171 31.994625-31.994625L960.010751 192.48379C960.010751 139.33143 916.835209 95.983874 864.026877 95.983874z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-zhanghu" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M266.094404 763.860215c36.055171-14.729469 107.942431-40.362266 155.157779-54.307883 27.458375-8.661264 27.458375-31.797194 27.458375-50.369178 0-15.401782-1.057075-38.104853-10.070356-57.301054-6.179746-13.144368-13.256932-35.687804-14.809287-53.346999-0.352017-4.131087-2.289136-7.940856-5.411243-10.662851-4.546549-3.970428-13.768585-18.508539-19.644409-47.839565-4.659113-23.214724-2.690272-28.306696-0.784876-33.205263 0.816598-2.097778 1.601474-4.16281 2.225691-6.500041 3.842515-14.057157-0.431835-60.21543-5.090948-85.831854-2.033309-11.127432 0.528026-42.763966 21.358447-69.405743 18.668175-23.871687 46.926776-37.176714 82.981946-39.482223l30.371728-0.031722c37.016055 2.337231 65.291029 15.642259 83.990926 39.513946 20.829398 26.641777 23.359011 58.278311 21.325701 69.421092-4.627391 25.601074-8.949836 71.759347-5.107321 85.800132 0.655939 2.353604 1.409093 4.418636 2.225691 6.516414 1.905396 4.89959 3.874237 9.990538-0.75213 33.205263-5.875824 29.331026-15.129582 43.869137-19.660782 47.839565-3.105734 2.721994-5.042853 6.532787-5.411243 10.662851-1.537006 17.659195-8.597819 40.202631-14.793938 53.346999-7.092535 15.081487-15.258519 35.175127-15.258519 56.645115 0 18.571984 0 41.706891 27.730575 50.448996 45.197388 13.353123 117.421316 38.152948 155.574265 53.154617-63.689554 63.081711-151.219073 102.098329-247.698428 102.098329C416.417061 864.23018 329.640696 825.901223 266.094404 763.860215 266.094404 763.860215 329.640696 825.901223 266.094404 763.860215L266.094404 763.860215 266.094404 763.860215zM512 159.76982c194.223516 0 352.23018 158.007687 352.23018 352.23018 0 85.448114-30.612205 163.867138-81.429591 224.930889-35.110659-14.666024-118.013811-43.436278-169.326477-58.582233-4.370541-1.37737-5.059226-1.601474-5.059226-19.821441 0-15.033391 6.196119-30.195719 12.231579-43.004443 6.532787-13.929244 14.281261-37.352723 17.066701-58.374502 7.78122-9.029654 18.379603-26.865881 25.200962-60.839647 5.972015-29.939893 3.186576-40.826847-0.784876-51.057863-0.400113-1.072425-0.832971-2.145873-1.153266-3.201925-1.505283-7.02909 0.560772-43.500746 5.699816-71.807443 3.52222-19.420305-0.912789-60.711733-27.649733-94.862531-16.890692-21.597901-49.184189-48.095391-108.198258-51.79362l-32.356942 0.031722c-58.006112 3.666506-90.346681 30.163997-107.238396 51.761897-26.721595 34.149774-31.171953 75.441203-27.634384 94.846158 5.155417 28.322046 7.188726 64.794725 5.716188 71.678506-0.303922 1.200338-0.75213 2.273786-1.184989 3.346211-3.938706 10.231015-6.756891 21.11797-0.75213 51.057863 6.788613 33.973766 17.386996 51.809993 25.200962 60.839647 2.753717 21.021779 10.518564 44.445258 17.083074 58.374502 4.787026 10.18292 7.02909 24.064069 7.02909 43.660382 0 18.219967-0.688685 18.444071-4.787026 19.7406-53.058426 15.658631-137.513934 46.174646-169.006182 59.974953-51.826366-61.33595-83.126232-140.523477-83.126232-226.900753C159.768797 317.776484 317.792856 159.76982 512 159.76982 512 159.76982 317.792856 159.76982 512 159.76982L512 159.76982 512 159.76982zM512 127.748523c-212.218356 0-384.251477 172.016749-384.251477 384.251477s172.032098 384.251477 384.251477 384.251477c212.234729 0 384.251477-172.016749 384.251477-384.251477S724.234729 127.748523 512 127.748523L512 127.748523z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
'</svg>'
var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
var shouldInjectCss = script.getAttribute("data-injectcss")

/**
 * document ready
 */
var ready = function(fn){
  if(document.addEventListener){
      document.addEventListener("DOMContentLoaded",function(){
          document.removeEventListener("DOMContentLoaded",arguments.callee,false)
          fn()
      },false)
  }else if(document.attachEvent){
     IEContentLoaded (window, fn)
  }

  function IEContentLoaded (w, fn) {
      var d = w.document, done = false,
      // only fire once
      init = function () {
          if (!done) {
              done = true
              fn()
          }
      }
      // polling for no errors
      ;(function () {
          try {
              // throws errors until after ondocumentready
              d.documentElement.doScroll('left')
          } catch (e) {
              setTimeout(arguments.callee, 50)
              return
          }
          // no errors, fire

          init()
      })()
      // trying to always fire before onload
      d.onreadystatechange = function() {
          if (d.readyState == 'complete') {
              d.onreadystatechange = null
              init()
          }
      }
  }
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

var before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

var prepend = function (el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function appendSvg(){
  var div,svg

  div = document.createElement('div')
  div.innerHTML = svgSprite
  svg = div.getElementsByTagName('svg')[0]
  if (svg) {
    svg.setAttribute('aria-hidden', 'true')
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    prepend(svg,document.body)
  }
}

if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
  window.__iconfont__svg__cssinject__ = true
  try{
    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
  }catch(e){
    console && console.log(e)
  }
}

ready(appendSvg)


})(window)
