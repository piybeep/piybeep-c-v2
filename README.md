# piybeep v2 (client side)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/5c68c684ff1447978b32fe76a7fec823)](https://www.codacy.com/gh/piybeep/piybeep-c-v2/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=piybeep/piybeep-c-v2&amp;utm_campaign=Badge_Grade)

## Правила разработки
0. Обсуждение проекта с Тимлидом - важная часть. Нарушение следующих пунктов без участия Тимлида запрещено. Если часть проекта (или, не дай бог, весь проект) будет поломана без участия Тимлида, то все ваши изменения откатываются до стабильной версии без уведомления.
1. Структура проекта (пример):  
```
/
| pages/
| | index.tsx
| | studio/
| | | index.tsx
| | portfolio/
| | | index.tsx
| | | [projectName].tsx
| public/
| | favicon.ico
| | imgs/
| | | logo.png
| | | social/
| | | | vk.png
| | | | tg.png
| src/
| | index.ts
| | components/
| | | Layout/
| | | | index.tsx
| | | | Layout.module.scss
| | | Button/
| | | | index.tsx
| | | | Button.module.scss
| | api/
| | | index.ts
```
2. Не берём чужие таски! Исключение: по договорённости и согласовании с Тимлидом.
3. Перед созданием pull request проверяем, что ничего не сломалось (вкл. адаптив). При невыполненной таске pull request тоже не создаём.
4. Пользуемся настройками линтера и преттера из проекта, а не своими. Если имеется дискомфорт от использования того или иного параметра, то первым делом уведомляем Тимлида. Самостоятельно все настройки не трогаем.
5. Перед установкой зависимостей смотрим на их совместимость с уже установленными зависимостями. Если совместимость нарушается, ищем альтернативы. Если таковых не имеется, сообщаем Тимлиду.
