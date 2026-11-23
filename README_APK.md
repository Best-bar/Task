# Бар Задачи — Сборка Android APK

Целевой URL приложения: https://ais-dev-eupdneovl25utwifdezxcz-286838079074.us-east1.run.app
ID пакета (Package ID): ru.bartasks.app
Версия: 1.0.0 (code 1)

## Способ 1 (Без установки Android Studio — через GitHub Actions за 2 минуты)
1. Создайте пустой репозиторий на GitHub и загрузите туда все файлы из этого архива.
2. Перейдите во вкладку **Actions** -> **Build Android APK** -> **Run workflow**.
3. Через ~2 минуты скачайте готовый файл `app-debug.apk` из раздела **Artifacts** -> `bar-tasks-apk`.
4. Передайте `app-debug.apk` на Android-смартфон и установите.

## Способ 2 (Локально в Android Studio)
1. Откройте эту папку в **Android Studio** (File -> Open).
2. Дождитесь синхронизации Gradle.
3. В меню выберите **Build -> Build Bundle(s) / APK(s) -> Build APK(s)**.
4. Готовый APK появится в папке `app/build/outputs/apk/debug/app-debug.apk`.

## Подключение к Google Таблицам (Apps Script)
Если вы хотите, чтобы APK работал напрямую с вашей Google Таблицей:
- Вариант A: Укажите в `MainActivity.kt` (`APP_URL`) прямую ссылку на ваше опубликованное веб-приложение Google Apps Script (`https://script.google.com/macros/s/.../exec`).
- Вариант B: Добавьте функцию `doPost(e)` из файла `Code_doPost_bridge.gs` в конец вашего `Code.gs`, переопубликуйте веб-приложение и вставьте ссылку в настройках синхронизации внутри приложения.
