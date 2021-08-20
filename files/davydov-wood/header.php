<?
if(!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true)
	die();
?><!DOCTYPE html>
<html lang="ru-RU">
	<head>
		<?$APPLICATION->ShowHead();?>
		<title><?$APPLICATION->ShowTitle();?></title>
		<link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" /> 	
		<?$APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH."/css/slick.css");?>
		<?$APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH."/css/hamburgers.css");?>
		<?$APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH."/css/magnific-popup.css");?>
		<?$APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH."/css/simplePagination.css");?>
		<? CJSCore::Init(array("jquery")); ?>
		<?$APPLICATION->AddHeadScript(SITE_TEMPLATE_PATH."/js/slick.js" );?> 
		<?$APPLICATION->AddHeadScript(SITE_TEMPLATE_PATH."/js/jquery.magnific-popup.js" );?>
		<?$APPLICATION->AddHeadScript(SITE_TEMPLATE_PATH."/js/jquery.simplePagination.js" );?>
		<?$APPLICATION->AddHeadScript(SITE_TEMPLATE_PATH."/js/index.js" );?>
	</head>
<?/* Если мы находимся на главной */?>
<? if ($APPLICATION->GetCurPage(false) === '/'): ?>
		<body class="homepage">
<? endif; ?>

<?/* Если мы НЕ находимся на главной */?>
<? if ($APPLICATION->GetCurPage(false) !== '/'): ?>
	<body>
<? endif; ?>

		<div id="panel">
			<?$APPLICATION->ShowPanel();?>
		</div>
<header class="header">
  <div class="header__menu container-big">
	  <a class="header__logo_link" href="/"><img src="<?=SITE_TEMPLATE_PATH."/img/desctop-img/logo.svg";?>" alt="логотип Давыдов и Ко" class="header__logo"></a>
      <button class="hamburger hamburger--spring" type="button">
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </button>
      <ul class="header__nav_list">
        <li class="header__nav_item"><a href="catalog.html" class="header__nav_link">Каталог</a></li>
        <li class="header__nav_item"><a href="portfolio.html" class="header__nav_link">Портфолио</a></li>
        <li class="header__nav_item"><a href="about_company.html" class="header__nav_link">О компании</a>
        <ul class="header__nav_sublist">
          <li class="header__nav_subitem"><a href="" class="header__nav_sublink">Стоимость работ</a></li>
          <li class="header__nav_subitem"><a href="" class="header__nav_sublink">Доставка и монтаж</a></li>
          <li class="header__nav_subitem"><a href="" class="header__nav_sublink">Отзывы</a></li>
          <li class="header__nav_subitem"><a href="" class="header__nav_sublink">Условия работы</a></li>
          <li class="header__nav_subitem"><a href="" class="header__nav_sublink">Реквизиты</a></li>
        </ul>
        </li>
        <li class="header__nav_item"><a href="blog-list.html" class="header__nav_link">Блог</a></li>
        <li class="header__nav_item"><a href="cooperation.html" class="header__nav_link">Сотрудничество</a></li>
        <li class="header__nav_item"><a href="contacts.html" class="header__nav_link">Контакты</a></li>
      </ul>
      <div class="header__buttons_wrapper">
        <button class="header__nav_button">Заказать звонок</button>
        <input type="text" class="header__nav_field">
        <button class="header__nav_search"></button>
      </div>
  </div>

<?/* Если мы находимся на главной */?>
<? if ($APPLICATION->GetCurPage(false) === '/'): ?>
  <div class="header__slider">
    <div class="header__slide">
      <div class="header__slide_description">
        <div class="container">
        <h2 class="header__slide_title header1">Современная стильная кухня</h2>
        <p class="header__slide_text header4">выполненная по индивидуальному проекту</p>
        <a href="" class="header__slide_link">Подробнее</a>
      </div>
      </div>
    </div>
    <div class="header__slide">
      <div class="header__slide_description">
        <div class="container">
        <h2 class="header__slide_title header1">Современная стильная кухня</h2>
        <p class="header__slide_text header4">выполненная по индивидуальному проекту</p>
        <a href="" class="header__slide_link">Подробнее</a>
      </div>
      </div>
    </div>
  </div>
<? endif; ?>

<?/* Если мы НЕ находимся на главной */?>
<? if ($APPLICATION->GetCurPage(false) !== '/'): ?>

   <div class="container">
    <h1 class="page_header header1">О компании</h1>
   </div>

<? endif; ?>
</header>