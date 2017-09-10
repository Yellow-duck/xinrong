<?php
$z[0]=Array("field","\$ID = @me; \$sql = \"SELECT * FROM `dede_arctype` WHERE id=\$ID\";\$query = mysql_query(\$sql);\$row=mysql_fetch_array(\$query); \$relID = \"\$row[reid]\"; if(\$relID == 0) {@me = \$row[typename];}else{\$sql = \"SELECT `typename` FROM `dede_arctype` WHERE id=\$relID\";\$query = mysql_query(\$sql);\$row=mysql_fetch_array(\$query); @me = \$row[typename];}",85,469);
$z[0][4]=array();
$z[0][4]['name']="typeid";
$z[0][4]['runphp']="yes";
$z[1]=Array("channel","\r\n            <li><a href='[field:typeurl/]' title='[field:typename/]'>[field:typename/]</a></li>\r\n            ",540,691);
$z[1][4]=array();
$z[1][4]['type']="son";
$z[2]=Array("global","",919,940);
$z[2][4]=array();
$z[2][4]['name']="cfg_dh";
$z[3]=Array("global","",1016,1037);
$z[3][4]=array();
$z[3][4]['name']="cfg_cz";
$z[4]=Array("global","",1110,1131);
$z[4][4]=array();
$z[4][4]['name']="cfg_qq";
$z[5]=Array("global","",1223,1244);
$z[5][4]=array();
$z[5][4]['name']="cfg_yx";
$z[6]=Array("global","",1262,1283);
$z[6][4]=array();
$z[6][4]['name']="cfg_yx";

?>