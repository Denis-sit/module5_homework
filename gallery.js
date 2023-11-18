const btns = document.querySelectorAll('.gallery__button'),
      gallery = document.querySelector('.gallery__image'),
      loading = document.querySelector('.gallery__loading'),
      buttonBelow  =document.querySelector('#buttonBelow');

async function getImage(quantity){
    loading.style.display = 'flex';
    try{
        let res = await fetch(`https://dog.ceo/api/breeds/image/random/${quantity}`);
        let data = await res.json();
        data.message.forEach(element => {
            const image = document.createElement('img');
            image.src = element;
            image.classList.add('gallery__image_item');
            image.onerror = function(){
                image.remove();
                console.error('Изображение не загруженно ' + element);
            }
            gallery.appendChild(image);
        });
    }catch(err){
        console.log(err.message);
    }finally{
        loading.style.display = 'none';
        buttonBelow.style.display = 'block';
    }
};

btns.forEach(item =>{
    item.addEventListener('click', (e) =>{
        e.preventDefault;
        getImage(23);
    });
});

