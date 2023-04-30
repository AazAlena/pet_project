Установка зависимостей:
```sh
docker run -it --rm -v $PWD:/project --workdir /project node:20 npm install
```

Запуск в docker-e:
Запуск в docker-e:
```sh
docker run -it --rm -name my_project -v $PWD:/project -p 8080:3001 --workdir /project node:20 node index.js
```