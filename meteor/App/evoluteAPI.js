var xhr = new XMLHttpRequest();
xhr.open("GET", "http://felicity.evolute.io:8082/felicity.php", true);

xhr.send();
alert(xhr.status);
alert(xhr.statusText);
alert(xhr.container);
