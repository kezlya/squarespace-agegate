<script>
   if(location.pathname!='/agegate' && !didPass())
   { window.location = "/agegate"; }
  
  function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length)
    }
    return "";
}
  
  function didPass() {
    var im21=false;
    if (getCookie("agegate")=='YES') {
        im21 = true;
    }
    return im21;
}
</script>