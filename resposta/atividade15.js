function buyCar(modelo){

  switch (modelo) {
    case 'Hatch':
      console.log("Compra efetuada com sucesso!");
      break;
    case 'Sedans':
    case 'Motocicletas':
    case 'Caminhonetes':
      console.log("Tem certeza que não prefere este modelo?");
      break;
    default:
      console.log("Não trabalhamos com este tipo de automóvel aqui");
      break;
  }
}

buyCar('Hatch');
buyCar('Sedans');
buyCar('Motocicletas');
buyCar('Qualquer');