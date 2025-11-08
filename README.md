```markdown
## Опис

Секція **Featured Products**:
- Відображає товари з обраної колекції (через кастомайзер теми).
- Не показує товари, які вже додані в кошик.
- Додає товар у кошик при натисканні на кнопку "Add to Cart" без перезавантаження сторінки.
- Адаптивна та кросбраузерна верстка (Mobile First).
- Використовується стандартна тема **Dawn**.
- CSS реалізовано через SCSS.
- Додано коміт-історію для кожного етапу розробки.

---

## Структура проекту
- **featured-products.liquid** – основний шаблон секції.
- **featured-products.js** – логіка додавання товарів у кошик та оновлення UI.
- **featured-products.css** – стилі секції.
- **settings_data.json** – налаштування теми (обрана колекція та кількість товарів).

---

## Встановлення та запуск

1. Клонувати репозиторій:
```bash
git clone https://github.com/your-username/shopify-dawn-featured-products.git
cd shopify-dawn-featured-products
````

2. Встановити Shopify CLI (якщо ще не встановлено):

```bash
npm install -g @shopify/cli
```

3. Авторизуватися у своєму Shopify магазині:

```bash
shopify login --store test-vova.myshopify.com
```

4. Завантажити тему на магазин:

```bash
shopify theme push
```

5. Додати секцію **Featured Products** на головну сторінку через редактор теми.

---

## Репозиторій

* [GitHub репозиторій проекту](https://github.com/your-username/shopify-dawn-featured-products)

---

## Демо магазин

* **URL:** [https://test-vova.myshopify.com](https://test-vova.myshopify.com)
* **Пароль:** 1234567890

---

## Коміти

1. `Initial commit: clone Dawn theme from test-vova.myshopify.com` – додано базову структуру Dawn теми.
2. `Add Featured Products section Liquid schema and markup` – створена секція Featured Products.
3. `Add Featured Products CSS: mobile-first, responsive grid and card styling` – стилі для секції, адаптивність.
4. `Link CSS and JS assets in Featured Products section` – реалізована логіка додавання товарів у кошик.
5. `Edited the CSS file for correct product display` – змінено стилізацію, по відображенню колонок на пристроях.
6. `I changed the js file, specifically the display of the add button, its status, and the message about successful addition of the product.` –  змінив логіку і UI додавання товару до кошику.
