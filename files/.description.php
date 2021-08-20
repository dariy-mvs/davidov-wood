<?
$arComponentDescription = array(
   "NAME" => GetMessage("homepage_main"),
   "DESCRIPTION" => GetMessage("homepage_main_descr"),
   "PATH" => array(
      "ID" => "homepage_main",
      "CHILD" => array(
         "ID" => "homepage_main_big",
         "NAME" => "Каталог товаров"
      )
   ),
   "AREA_BUTTONS" => array(
      array(
         'URL' => "javascript:alert('Это кнопка!!!');",
         //'SRC' => '/images/button.jpg',
         'TITLE' => "Это кнопка!"
      ),
   ),
   "CACHE_PATH" => "Y",
   "COMPLEX" => "Y"
);
?>