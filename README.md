# less-live
"Compile-on-save"  Less to CSS in real time 
<br>
Компиляция при каждом сохранении файлов Less в Css

<h2 align="center">Install / Установка</h2>

clone repositorie / Клонируй репозиторий:

```bash
git clone https://github.com/Sanevs22/less-live.git
```

Make dependencies/ Восстанови зависимости:

```bash
npm install 
```

Отредактируй less-live.js

```
const lessStyleDir = './test-styles/'; // директория с less файлами
const lessStyleFile = './test-styles/style.less'; // главный less файл в который все остальные подключены через @import
const cssStyleFile = './test-styles/style.css'; // итоговый css файл
```

Run / запусти:

```bash
npm run less
```

<h2 align="center">About / Описание</h2>

В директории test-styles находится тестовый проект для вашего удобства. Выполните запуск с параметрами по умолчанию. 
<br>
Все less-файлы подключаются к основному через @import