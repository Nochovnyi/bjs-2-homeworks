function cachingDecoratorNew(func) {
  let cache = [];
  
  function wrapper(...args) {
      const hash = args.join(',') // получаем правильный хэш
      let idx = cache.findIndex((item) => item.hash === hash); // ищем элемент, хэш которого равен нашему хэшу
      if (idx !== -1 ) { 
        let result = cache[idx].result// если элемент не найден
          console.log("Из кэша: " + result); // индекс нам известен, по индексу в массиве лежит объект, как получить нужное значение?
          return "Из кэша: " + result
      }
  
      let result = func(...args); // в кэше результата нет - придётся считать
      cache.push({
        result: result,
        hash: hash
    }) ; // добавляем элемент с правильной структурой
      if (cache.length > 5) { 
        cache.shift() // если слишком много элементов в кэше надо удалить самый старый (первый) 
      }
      console.log("Вычисляем: " + result);
      return "Вычисляем: " + result;  
  }
  return wrapper;
  }


function debounceDecoratorNew(func, ms) {
  let immediate;
  let call = false;
  return function wrapper(...args) {
    if (!call) {
      func.apply(this, args);
    }
  call = true;
  clearTimeout(immediate);
      immediate = setTimeout(() => {
      func.apply(this, args);
      call = false;
    }, ms);
  };
}

function debounceDecorator2(func) {
  let immediate;
  let call = false;
  const count = 0;
  return function wrapper(...args) {
    if (!call) {
      func.call(this, ...args);
    }
  call = true;
  clearTimeout(immediate);
      immediate = setTimeout(() => {
      func.call(this, ...args);
      call = false;
    }, ms);
    wrapper.count++;
  };
  return wrapper
}
