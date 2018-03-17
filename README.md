# Binbank-components

## Установка

В консоли в правами администратора выполнить:

(Предвалительно должен быть настроен ssh-ключ для http://git.msk-pay-master01.binbank.ru)

```bash
# для prod версии библиотеки
npm install --save git+http://git.msk-pay-master01.binbank.ru/binbank/react-components

# для dev версии библиотеки
npm install --save git+http://git.msk-pay-master01.binbank.ru/binbank/react-components#dev
```

## Redux-form

Трбуется версия библиотеки `redux-form` версии `7.0.0` и выше.
Работа на более ранних версиях библиотеки возможна, но не гарантируется.

### Пример использования

```jsx
import { FieldList, FieldListItem } from 'binbank-components/redux-form'
import { Form, Field, FieldArray } from 'redux-form'

const Component = ({ remove, handleSubmit }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <FieldArray
        name='users'
        label='Пользователи'
        component={FieldList}
        onRemove={id => remove(id)}
        buttonElement={<button>Добавить</button>}
      >
        <FieldListItem buttonElement={<button>Удалить</button>}>
          <Field name='name' />
          <Field name='email' />
        </FieldListItem>
      </FieldArray>
    </Form>
  )
}
```

### API

#### FieldList

Используется в качестве компонента для `FieldArray`. В `FieldArray` становится
возможно передать собственную функцию удаления, которая выолнится после удаления
элемента списка из redux и элемент кнопки "Добавить", в который будет передана
функция добавления элемента. Остальные параметры передаются от компонента
`FieldArray`. Дополнительно переданные параметры будут переданы div-контейнеру
компонента. Принимает один дочерний элемент, который будет использован
в качестве элемента списка.

`props`:
- `onRemove: function(id) => void` - Функция, вызываемая при
  удалении элемента. Принимает id, если таковой имеется.
- `buttonElement: React.Element` - Элемент кнопки "Добавить".
- `children: React.Element` - Элемент списка.
- остальные параметры передаются от компонента `FieldArray`.

`children props`:
- `member: string` - Строка, определяющая путь к значению элемента списка.
- `onRemove: function(id) => void` - Функция, вызываемая при
  удалении элемента.

#### FieldListItem

Используется в качестве дочернего элемента для `FieldList`. Добавляет префикс
к параметру `name` дочерних компонентов в виде значения параметра `member`.
Возможно указать получение `id` на основе данных параметра `member` через
`redux-form`.

`props`:
- `id: any` - Идентификатор элемента для удаления.
- `buttonElement: React.Element` - Элемент кнопки "Удалить".
