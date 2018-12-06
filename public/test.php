<?php
// Create DOM from URL or file
$html = file_get_contents("https://astro-online.ru/view.php?u_namez=213&dayz=08&monthz=02&yearz=1980&hourz=00&minutz=00&N=55.45&E=17.35&frm_autogmt=on&time_gmt=3&city=1579&sun=yes&moon=yes&mercury=yes&venus=yes&mars=yes&jupiter=yes&saturn=yes&uran=yes&neptun=yes&pluton=yes&node=yes&snode=no&lilit=no&selena=no&prozerpina=no&hiron=no&het1=no&sakoyan1=no&globa1=no&podvodniy1=no&katrin1=no&mariya1=no&het2=no&podvodniy2=no&katrin2=no&globa3=no&het4=no&sakoyan4=no&podvodniy3=no&izraitel4=no&ruler5=no&tranz10=no&solar12=no&shulman14=no&nazarova9=no&nazarova10=no&nazarova11=no&sakoyan10=no&conj1=0&conj2=5&sekst1=52&sekst2=68&kvad1=82&kvad2=98&trin1=112&trin2=128&opp1=172&opp2=180&leto_zima=yes&sort_asp=0&gamma=1&house=0&cat_id=9&ssid=34vlm9ftp1pev3eidcki8tb8m4&zerocool=%D0%E0%F1%F1%F7%E8%F2%E0%F2%FC");
$html = mb_convert_encoding($html, 'HTML-ENTITIES', "windows-1251");
var_dump($html);//substr($html,strripos($html, "noshade"),100000) );
?>
