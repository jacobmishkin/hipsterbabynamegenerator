<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-type" content="text/html; charset=UTF-8">
	<meta name="viewport" content="width=device-width">
	<title>Hipster Baby Name Generator</title>
	<link href='https://fonts.googleapis.com/css?family=Amatic+SC|Rye' rel='stylesheet' type='text/css'>
	<link href='https://fonts.googleapis.com/css?family=Amatic+SC' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" href="css/normalize.css" type="text/css" media="screen">
	<link rel="stylesheet" href="css/style.css" type="text/css" media="screen">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
	<script src="js/script.js" type="text/javascript" charset="utf-8"></script>
</head>
<body>

<div id="main-wrapper">
	<header class="main-logo">
		<img src="img/hipster-logo.png" class="logo" alt="Hipster Baby Name Generator">	
	</header>
	<section class="body-text">		
		<h4>Artisinal Open Source fare-trade, handcureated names</h4>
	</section>
	<div class="radio-toolbar">
		<h5>Please choose a gender</h5>
		<h5>and enter your last name</h5>
	   	<input type="radio" id="male" name="radios" value="all">
	   	<label for="male">Male</label>
	   	<br>
	    <input type="radio" id="female" name="radios"value="false">
	    <label for="female">Female</label>
		<br>
		<input type="text" id="lastname" placeholder="enter your lastname">		
	</div>		
	</section>
	<section class="name-wrapper">		
		<div id="baby_name"></div>
	</section>
	<button id="button">Click here for a name</button>
	<footer>
		<p>Made by Jacob Mishkin, copyleft <?php echo date('Y'); ?></p>
		<p>logo created at <a href="http://hipsterlogogenerator.com/" class="links">Hipster Logo Generator </a>
	</footer>
</div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script src="js/script.js" type="text/javascript" charset="utf-8"></script>
</body>
</html>