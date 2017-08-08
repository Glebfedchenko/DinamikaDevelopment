 Задание:
Дано массив users:
```
users = [
{ name: 'Jane', age: 23 }, { name: 'John', age: 30 }, { name: 'Vasya', age: 25 },
{ name: 'Yvonne', age: 34 }, { name: 'Will', age: 18 }, {name: 'Jack', age: 26}
]
```
Реализуйте следующее:
* При GET-запросе по пути '/users' в
ответе сервера отправляется массив users в формате JSON.
* При POST-запросе по пути '/users' в массив users добавляется
элемент {name: 'random user', age: 30}.

