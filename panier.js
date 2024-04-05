// Fonction pour récupérer les détails d'un produit par son ID

    const name1 = document.getElementById('name');
    const prix1 = document.getElementById('prix');
    const image1 = document.getElementById('image');
    const taille1 = document.getElementById('sizeSelect');
    const ajouterPanier = document.getElementById('ajouterPanier');
    
    console.log(taille1)
    
    ajouterPanier.addEventListener('click', ()=>{
        // console.log(name1.textContent);
        // console.log(prix1.textContent);
        // console.log(image1.src);
        // console.log(taille1.value);
    
        let product = {
            name: name1.textContent,
            price: parseFloat(prix1.textContent),
            image: image1.src,
            size: parseInt(taille1.value)
        }
        let cart = JSON.parse(localStorage.getItem('cart')) || [];




            cart.push(product);
            localStorage.setItem('cart', JSON.stringify(cart));
            localStorage.setItem('cartSize', cart.length);
        }

    );
