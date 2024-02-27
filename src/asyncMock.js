const products = [
{ id:"1", name:"ADIDAS PREDATOR ACCURACY .1 FG", img: "https://www.futbolemotion.com/imagesarticulos/221083/detalles/P1GC244245_9.jpg", price: 249.99, category: "botas", description:"Bota de fútbol adidas Predator Accuracy.1 FG para adultos. Botas sintéticas con cordones para utilizar en campos de hierba natural. Botas de gama alta en color Solar Orange-Core Black.", stock:10 },
{ id:"2", name:"ADIDAS PREDATOR ACCURACY .1 FG", img: "https://www.futbolemotion.com/imagesarticulos/221083/detalles/P1GC244245_9.jpg", price: 249.99, category: "botas", description:"Bota de fútbol adidas Predator Accuracy.1 FG para adultos. Botas sintéticas con cordones para utilizar en campos de hierba natural. Botas de gama alta en color Solar Orange-Core Black", stock:10 },
{ id:"3", name:"ADIDAS PREDATOR ACCURACY .1 FG", price: 99.99, category:"botas", description:"Bota de fútbol adidas Predator Accuracy.1 FG para adultos. Botas sintéticas con cordones para utilizar en campos de hierba natural. Botas de gama alta en color Solar Orange-Core Black",img: "https://www.futbolemotion.com/imagesarticulos/221083/detalles/P1GC244245_9.jpg", stock:10},
{ id:"4", name:"ADIDAS PREDATOR ACCURACY .1 FG", price: 99.99, category: "botas", description:"Bota de fútbol adidas Predator Accuracy.1 FG para adultos. Botas sintéticas con cordones para utilizar en campos de hierba natural. Botas de gama alta en color Solar Orange-Core Black",img: "https://www.futbolemotion.com/imagesarticulos/221083/detalles/P1GC244245_9.jpg", stock:10 },
{ id:"5", name:"ADIDAS PREDATOR ACCURACY .1 FG", price: 99.99, category: "guantes", description:"Bota de fútbol adidas Predator Accuracy.1 FG para adultos. Botas sintéticas con cordones para utilizar en campos de hierba natural. Botas de gama alta en color Solar Orange-Core Black",img: "https://www.futbolemotion.com/imagesarticulos/221083/detalles/P1GC244245_9.jpg", stock:10 },
{ id:"6", name:"ADIDAS PREDATOR ACCURACY .1 FG", price: 99.99, category: "guantes", description:"Bota de fútbol adidas Predator Accuracy.1 FG para adultos. Botas sintéticas con cordones para utilizar en campos de hierba natural. Botas de gama alta en color Solar Orange-Core Black",img: "https://www.futbolemotion.com/imagesarticulos/221083/detalles/P1GC244245_9.jpg", stock:10 },
{ id:"7", name:"ADIDAS PREDATOR ACCURACY .1 FG", price: 99.99, category: "guantes", description:"Bota de fútbol adidas Predator Accuracy.1 FG para adultos. Botas sintéticas con cordones para utilizar en campos de hierba natural. Botas de gama alta en color Solar Orange-Core Black",img: "https://www.futbolemotion.com/imagesarticulos/221083/detalles/P1GC244245_9.jpg", stock:10 },
{ id:"8", name:"ADIDAS PREDATOR ACCURACY .1 FG", price: 99.99, category: "guantes", description:"Bota de fútbol adidas Predator Accuracy.1 FG para adultos. Botas sintéticas con cordones para utilizar en campos de hierba natural. Botas de gama alta en color Solar Orange-Core Black",img: "https://www.futbolemotion.com/imagesarticulos/221083/detalles/P1GC244245_9.jpg", stock:10 },
{ id:"9", name:"ADIDAS PREDATOR ACCURACY .1 FG", price: 99.99, category: "equipacion", description:"Bota de fútbol adidas Predator Accuracy.1 FG para adultos. Botas sintéticas con cordones para utilizar en campos de hierba natural. Botas de gama alta en color Solar Orange-Core Black",img: "https://www.futbolemotion.com/imagesarticulos/221083/detalles/P1GC244245_9.jpg", stock:10 },
{ id:"10", name:"ADIDAS PREDATOR ACCURACY .1 FG", price: 99.99, category: "equipacion", description:"Bota de fútbol adidas Predator Accuracy.1 FG para adultos. Botas sintéticas con cordones para utilizar en campos de hierba natural. Botas de gama alta en color Solar Orange-Core Black",img: "https://www.futbolemotion.com/imagesarticulos/221083/detalles/P1GC244245_9.jpg", stock:10 },
{ id:"11", name:"ADIDAS PREDATOR ACCURACY .1 FG", price: 99.99, category: "equipacion", description:"Bota de fútbol adidas Predator Accuracy.1 FG para adultos. Botas sintéticas con cordones para utilizar en campos de hierba natural. Botas de gama alta en color Solar Orange-Core Black",img: "https://www.futbolemotion.com/imagesarticulos/221083/detalles/P1GC244245_9.jpg", stock:10 },
{ id:"12", name:"ADIDAS PREDATOR ACCURACY .1 FG", price: 99.99, category: "equipacion", description:"Bota de fútbol adidas Predator Accuracy.1 FG para adultos. Botas sintéticas con cordones para utilizar en campos de hierba natural. Botas de gama alta en color Solar Orange-Core Black",img: "https://www.futbolemotion.com/imagesarticulos/221083/grandes/bota-mizuno-morelia-neo-iv-elite-mix-yellow-0.webp", stock:10 },
{ id:"13", name:"ADIDAS PREDATOR ACCURACY .1 FG", price: 99.99, category: "accesorios", description:"Bota de fútbol adidas Predator Accuracy.1 FG para adultos. Botas sintéticas con cordones para utilizar en campos de hierba natural. Botas de gama alta en color Solar Orange-Core Black",img: "https://www.futbolemotion.com/imagesarticulos/221083/grandes/bota-mizuno-morelia-neo-iv-elite-mix-yellow-0.webp", stock:10 },
{ id:"14", name:"ADIDAS PREDATOR ACCURACY .1 FG", price: 99.99, category: "accesorios", description:"Bota de fútbol adidas Predator Accuracy.1 FG para adultos. Botas sintéticas con cordones para utilizar en campos de hierba natural. Botas de gama alta en color Solar Orange-Core Black",img: "https://www.futbolemotion.com/imagesarticulos/221083/grandes/bota-mizuno-morelia-neo-iv-elite-mix-yellow-0.webp", stock:10 },
{ id:"15", name:"ADIDAS PREDATOR ACCURACY .1 FG", price: 99.99, category: "accesorios", description:"Bota de fútbol adidas Predator Accuracy.1 FG para adultos. Botas sintéticas con cordones para utilizar en campos de hierba natural. Botas de gama alta en color Solar Orange-Core Black",img: "https://www.futbolemotion.com/imagesarticulos/221083/grandes/bota-mizuno-morelia-neo-iv-elite-mix-yellow-0.webp", stock:10 },
{ id:"16", name:"ADIDAS PREDATOR ACCURACY .1 FG", price: 99.99, category: "accesorios", description:"Bota de fútbol adidas Predator Accuracy.1 FG para adultos. Botas sintéticas con cordones para utilizar en campos de hierba natural. Botas de gama alta en color Solar Orange-Core Black",img: "https://www.futbolemotion.com/imagesarticulos/221083/grandes/bota-mizuno-morelia-neo-iv-elite-mix-yellow-0.webp", stock:10 },
];

export const getProducts = () => {

    return new Promise( (resolve, reject) => {
        if (products.length > 0){

            setTimeout (() => {
                resolve(products);
            }, 2000);
        } else{
            reject("No hay productos");
        }
    })
}

export const getProduct = (id) => {

    return new Promise( (resolve, reject) => {
        if (products.length > 0){
            const product = products.find(p => p.id == id);

            setTimeout (() => {
                if(!product) {
                    reject(`No se encuentra el producto con el id ${id}`);
                } else {
                    resolve(product);
                }
            }, 2000);
        } else{
            reject("No hay productos");
        }
    })
}