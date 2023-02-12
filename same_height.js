<script>
  function setSameHeight() {
    var maxHeight = 0;
    var containers = document.querySelectorAll(".container");

    for (var i = 0; i < containers.length; i++) {
      if (containers[i].offsetHeight > maxHeight) {
        maxHeight = containers[i].offsetHeight;
      }
    }

    if (window.innerWidth >= 992) {
      for (var i = 0; i < containers.length; i++) {
        containers[i].style.height = maxHeight + "px";
      }
    } else {
      for (var i = 0; i < containers.length; i++) {
        containers[i].style.height = "auto";
      }
    }
  }

  window.onload = setSameHeight;
  window.onresize = setSameHeight;
</script>
