const getRandomElement = (elements) => {
    //? Logica necesaria para un elemento aleatorio de ese arreglo
    // 0 ------> 0.99999999*10 => 0 ----> 9.99999
    const indexRandom = Math.floor(Math.random() * elements.length)
    
    return elements[indexRandom];
  };
  export  {getRandomElement} ;