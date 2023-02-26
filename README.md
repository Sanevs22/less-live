# less-live 

 <img height="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" />
         
<div align="center">
<h4>command +s<h4>
<img height="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/less/less-plain-wordmark.svg" />&nbsp; &nbsp;	&nbsp;	&nbsp;	&nbsp;	
<img height="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />&nbsp;
<h3>in real time<h3>
</div>
<br>

 

"Compile-on-save"  Less to CSS in real time 
<br>
Компиляция при каждом сохранении файлов Less в Css

<h2 align="center">Install / Установка</h2>


```bash
npm i -g less-live
```

<h2 align="center">Start / Запуск</h2>


```bash
 less-live [main-less-file] [final-css-file(default: style.css)]
```
<h3 align="center">Stop / Стоп</h3>

control + c


<h2 align="center">About / Описание</h2>

Все less-файлы подключаются к основному через @import <br>
All less files are connected to the main one via @import

<h3 align="center">Source files / Исходные файлы</h3>


```bash
main.less

@import "./second.less";
@main-colot: tomato;

h1 {
    color: @main-colot;
    font-size: 22px;
}
```

```bash
second.less

h3 {
    color: aqua;
}
```
<h3 align="center">Final build / Финальная сборка</h3>

```bash
style.css

h3 {
  color: aqua;
}
h1 {
  color: tomato;
  font-size: 22px;
}

```