function myEach(collection, callback){
  const newArr = isArray(collection)

  for (let i = 0; i < newArr.length; i++){
    callback(newArr[i])
  }

  return collection
}

function isArray(collection){
  let newArr
  if (Array.isArray(collection)){
    newArr = collection
  } else {
    newArr = Object.values(collection)
  }

  return newArr
}

function myMap(collection, callback){
  const tempArr = isArray(collection)
  const newArr = []
  for (let i = 0; i < tempArr.length; i++){
    newArr.push(callback(tempArr[i]))
  }
  return newArr
}


function myReduce(collection, callback, acc){
  let newArr = isArray(collection)
  let start = 0
  if (acc === undefined) {
    acc = newArr[0]
    start = 1
  }
  for (let i = start; i < newArr.length; i++){
    acc = callback(acc, newArr[i], collection)
  }
  return acc
}

function myFind(collection, predicate){
  const tempArr = isArray(collection)
  for (let i = 0; i < tempArr.length; i++){
    if (predicate(tempArr[i]))
      return tempArr[i]
  }
}

function myFilter(collection, predicate){
  const tempArr = isArray(collection)
  const newArr = []
  for (let i = 0; i < tempArr.length; i++){
    if (predicate(tempArr[i])){
      newArr.push(tempArr[i])
    }
  }
  return newArr
}

function mySize(collection){
  const tempArr = isArray(collection)
  let size = 0
  while (tempArr[size]){
    size++
  }
  return size
}

function myFirst(arr, pos = 1){
  if (pos === 1){
    return arr[0]
  } else {
    const newArr = []
    for (let i = 0; i < pos; i++){
      newArr.push(arr[i])
    }
    return newArr
  }
}

function myLast(arr, pos = 1){
  if (pos === 1){
    return arr[arr.length - pos]
  } else {
    const newArr = []
    for (let i = arr.length - pos; i < arr.length; i++){
      newArr.push(arr[i])
    }
    return newArr
  }
}

function myKeys(obj){
  const newArr = []
  for (const propName in obj){
    newArr.push(propName)
  }
  return newArr
}

function myValues(obj){
  const newArr = []
  for (const propName in obj){
    newArr.push(obj[propName])
  }
  return newArr
}