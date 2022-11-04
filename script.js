
const menu=[

    {
        id:1,
        title:"butter-pancake",
        category:"breakfast",
        price:4545,
        img:"img/item (6).jpg",
        desc:`   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi rem maxime veniam deserunt perspiciatis nihil, voluptatibus, quam at ea suscipit pariatur quasi saepe voluptates! Vitae ad perferendis dolorem et tempore.
        d sequi blanditiis iste eos dolor cumque esse expedita. Dolores, quo!`

    },

    {
        id:2,
        title:"dinner-double",
        category:"lunch",
        price:555,
        img:"img/item (3).jpg",
        desc:`   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi rem maxime veniam deserunt perspiciatis nihil, voluptatibus, quam at ea suscipit pariatur quasi saepe voluptates! Vitae ad perferendis dolorem et tempore.
        d sequi blanditiis iste eos dolor cumque esse expedita. Dolores, quo!`

    },
    {
        id:3,
        title:"potata-shake",
        category:"shake",
        price:455,
        img:"img/item (2).jpg",
        desc:`   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi rem maxime veniam deserunt perspiciatis nihil, voluptatibus, quam at ea suscipit pariatur quasi saepe voluptates! Vitae ad perferendis dolorem et tempore.
        d sequi blanditiis iste eos dolor cumque esse expedita. Dolores, quo!`

    },
    {
        id:4,
        title:"shake-fish",
        category:"shake",
        price:0055,
        img:"img/item (1).jpg",
        desc:`   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi rem maxime veniam deserunt perspiciatis nihil, voluptatibus, quam at ea suscipit pariatur quasi saepe voluptates! Vitae ad perferendis dolorem et tempore.
        d sequi blanditiis iste eos dolor cumque esse expedita. Dolores, quo!`

    },


    {
        id:5,
        title:"dry-cake",
        category:"breakfast",
        price:4545,
        img:"img/item (6).jpg",
        desc:`   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi rem maxime veniam deserunt perspiciatis nihil, voluptatibus, quam at ea suscipit pariatur quasi saepe voluptates! Vitae ad perferendis dolorem et tempore.
        d sequi blanditiis iste eos dolor cumque esse expedita. Dolores, quo!`

    },

    {
        id:6,
        title:"butter-pancake",
        category:"breakfast",
        price:4545,
        img:"img/item (6).jpg",
        desc:`   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi rem maxime veniam deserunt perspiciatis nihil, voluptatibus, quam at ea suscipit pariatur quasi saepe voluptates! Vitae ad perferendis dolorem et tempore.
        d sequi blanditiis iste eos dolor cumque esse expedita. Dolores, quo!`

    },

    {
        id:2,
        title:"dinner-double",
        category:"lunch",
        price:555,
        img:"img/item (3).jpg",
        desc:`   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi rem maxime veniam deserunt perspiciatis nihil, voluptatibus, quam at ea suscipit pariatur quasi saepe voluptates! Vitae ad perferendis dolorem et tempore.
        d sequi blanditiis iste eos dolor cumque esse expedita. Dolores, quo!`

    },
    {
        id:3,
        title:"potata-shake",
        category:"shake",
        price:455,
        img:"img/item (2).jpg",
        desc:`   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi rem maxime veniam deserunt perspiciatis nihil, voluptatibus, quam at ea suscipit pariatur quasi saepe voluptates! Vitae ad perferendis dolorem et tempore.
        d sequi blanditiis iste eos dolor cumque esse expedita. Dolores, quo!`

    },
    {
        id:4,
        title:"shake-fish",
        category:"shake",
        price:0055,
        img:"img/item (1).jpg",
        desc:`   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi rem maxime veniam deserunt perspiciatis nihil, voluptatibus, quam at ea suscipit pariatur quasi saepe voluptates! Vitae ad perferendis dolorem et tempore.
        d sequi blanditiis iste eos dolor cumque esse expedita. Dolores, quo!`

    },


    {
        id:7,
        title:"kacci-biriyanu",
        category:"lunch",
        price:555,
        img:"img/item (3).jpg",
        desc:`   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi rem maxime veniam deserunt perspiciatis nihil, voluptatibus, quam at ea suscipit pariatur quasi saepe voluptates! Vitae ad perferendis dolorem et tempore.
        d sequi blanditiis iste eos dolor cumque esse expedita. Dolores, quo!`

    },
];

let sectionCenter=document.querySelector(".section-center");

let filterBtn=document.querySelectorAll(".filter-btn");


filterBtn.forEach(function(btn){

        btn.addEventListener("click",function(e){

            let category =e.currentTarget.dataset.id;
            let menuCategory= menu.filter(function(menuItem){
                 
                console.log(menuItem)
                if(menuItem.category===category){

                    return menuItem;
                }
            })
            // console.log(menuCategory)
              if(category=="All"){
                      return  displayItem(menu);
              }
              displayItem(menuCategory);
        })
});


window.addEventListener("DOMContentLoaded",function(){
      displayItem(menu);
});

function displayItem(menuItem){

    let displaymenu = menuItem.map(function(item){

        return ` <article class="menu-item">
        <img src="${item.img}"alt="${item.title}">
        <div class="item-info">
           <header>
            <h4>${item.title}</h4>
            <h4>${item.price}</h4>
           </header>
           <p class="item-text">
                    ${item.desc}
           </p>
        </div>
    </article>`
    });
      displaymenu=displaymenu.join();
      sectionCenter.innerHTML=displaymenu;

    
}




