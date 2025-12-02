{
    $('.homebutton').on('click', function () {
        window.location.href = 'index.html';
    });
}
{
    $('#mycartbutton').click(function(){
         $('.desktoppanel').slideUp(100);
         $('.laptoppanel').slideUp(100);
       
        $('.container').css('display', 'none');
        $('.laptopcontainer').addClass('defaultposition');

        $('.desktopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.desktopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.desktopbuttons').css('border', 'solid');
        $('.desktopbuttons').css('borderWidth', 'thin');
        $('.desktopbuttons').css('borderColor', '#ff0000');
        $('.desktopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');
    
        $('.laptopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.laptopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.laptopbuttons').css('border', 'solid');
        $('.laptopbuttons').css('borderWidth', 'thin');
        $('.laptopbuttons').css('borderColor', '#5c5c9b');
        $('.laptopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');
        
        $('.desktoppanel').slideDown(300);
        $('.mycartcontainer').slideDown(300);
        $('.laptoppanel').slideDown(300);
    })
}
{
    $('#myordersbutton').click(function(){
         $('.desktoppanel').slideUp(100);
         $('.laptoppanel').slideUp(100);
       
        $('.container').css('display', 'none');
        $('.laptopcontainer').addClass('defaultposition');

        $('.desktopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.desktopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.desktopbuttons').css('border', 'solid');
        $('.desktopbuttons').css('borderWidth', 'thin');
        $('.desktopbuttons').css('borderColor', '#ff0000');
        $('.desktopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');
    
        $('.laptopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.laptopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.laptopbuttons').css('border', 'solid');
        $('.laptopbuttons').css('borderWidth', 'thin');
        $('.laptopbuttons').css('borderColor', '#5c5c9b');
        $('.laptopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');
        
        $('.desktoppanel').slideDown(300);
        $('.myorderscontainer').slideDown(300);
        $('.laptoppanel').slideDown(300);
    })
}
{
        let darkmodebutton = document.querySelector('.darkmodebutton');
        let lightmodebutton = document.querySelector('.lightmodebutton');
        let mycartcontainer = document.querySelector('.mycartcontainer');
        let myorderscontainer = document.querySelector('.myorderscontainer');
        let desktopbuttons = document.querySelectorAll('.desktopbuttons');
        let laptopbuttons = document.querySelectorAll('.laptopbuttons');
        let desktopcontainers = document.querySelectorAll('.desktopcontainer');
        let desktopconatinernames = document.querySelectorAll('.desktopconatinername');
        let laptopcontainers = document.querySelectorAll('.laptopcontainer');
        let laptopconatinernames = document.querySelectorAll('.laptopconatinername');
        let desktopitembuttons = document.querySelectorAll('.desktopitembutton');
        let laptopitembuttons = document.querySelectorAll('.laptopitembutton');
    {
        function darkmode() {
            lightmodebutton.classList.remove("hide");
            darkmodebutton.classList.add("hide");
            document.querySelector("body").style.backgroundColor = "#660099";
            document.querySelector(".desktoppanel").style.backgroundColor = "black";
            mycartcontainer.style.backgroundColor = "black";
            myorderscontainer.style.backgroundColor = "black";
            desktopbuttons.forEach((desktopbutton) => {
                desktopbutton.style.backgroundColor = "black";
            })
            document.querySelector(".laptoppanel").style.backgroundColor = "black";
            laptopbuttons.forEach((laptopbutton) => {
                laptopbutton.style.backgroundColor = "black";
            })
            document.querySelector(".defaultcontainer").style.backgroundColor = "black";
            desktopcontainers.forEach((desktopcontainer) => {
                desktopcontainer.style.backgroundColor = "black";
            })
            desktopconatinernames.forEach((desktopconatinername) => {
                desktopconatinername.style.backgroundColor = "black";
            })
            laptopcontainers.forEach((laptopcontainer) => {
                laptopcontainer.style.backgroundColor = "black";
            })
            laptopconatinernames.forEach((laptopconatinername) => {
                laptopconatinername.style.backgroundColor = "black";
            })
            desktopitembuttons.forEach((desktopitembutton) => {
                desktopitembutton.style.backgroundColor = "black";
            })
            laptopitembuttons.forEach((laptopitembutton) => {
                laptopitembutton.style.backgroundColor = "black";
            })
        }

        darkmodebutton.addEventListener("click", () => {
            return darkmode();
        })
    }
    {
        function lightmode() {
            darkmodebutton.classList.remove("hide");
            lightmodebutton.classList.add("hide");
            document.querySelector("body").style.backgroundColor = "#fffafa";
            document.querySelector(".desktoppanel").style.backgroundColor = "#fffafa";
            mycartcontainer.style.backgroundColor = "#fffafa";
            myorderscontainer.style.backgroundColor = "#fffafa";
            desktopbuttons.forEach((desktopbutton) => {
                desktopbutton.style.backgroundColor = "#fffafa";
            })
            document.querySelector(".laptoppanel").style.backgroundColor = "#fffafa";
            laptopbuttons.forEach((laptopbutton) => {
                laptopbutton.style.backgroundColor = "#fffafa";
            })
            document.querySelector(".defaultcontainer").style.backgroundColor = "#fffafa";
            desktopcontainers.forEach((desktopcontainer) => {
                desktopcontainer.style.backgroundColor = "#fffafa";
            })
            desktopconatinernames.forEach((desktopconatinername) => {
                desktopconatinername.style.backgroundColor = "#fffafa";
            })
            laptopcontainers.forEach((laptopcontainer) => {
                laptopcontainer.style.backgroundColor = "#fffafa";
            })
            laptopconatinernames.forEach((laptopconatinername) => {
                laptopconatinername.style.backgroundColor = "#fffafa";
            })
            desktopitembuttons.forEach((desktopitembutton) => {
                desktopitembutton.style.backgroundColor = "#fffafa";
            })
            laptopitembuttons.forEach((laptopitembutton) => {
                laptopitembutton.style.backgroundColor = "#fffafa";
            })
        }

        lightmodebutton.addEventListener("click", () => {
            return lightmode();
        })
    }
}
{
    $('.logoutbutton').on('click', function () {
        window.location.href = 'Log In.html';
    });
}

{
    $('.assembleddesktopi73770button').click(function(){
        $('.container').css('display', 'none');
        $('.desktopsearch').css('display', 'none');
        $('.laptopsearch').addClass('defaultposition');
        $('.laptopcontainer').addClass('defaultposition');

        $('.desktopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.desktopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.desktopbuttons').css('border', 'solid');
        $('.desktopbuttons').css('borderWidth', 'thin');
        $('.desktopbuttons').css('borderColor', '#ff0000');
        $('.desktopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');
    
        $('.laptopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.laptopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.laptopbuttons').css('border', 'solid');
        $('.laptopbuttons').css('borderWidth', 'thin');
        $('.laptopbuttons').css('borderColor', '#5c5c9b');
        $('.laptopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.assembleddesktopi73770button').css('border', 'none');
        $('.assembleddesktopi73770button').css('boxShadow', 'none');
        $('.assembleddesktopi73770button').css('opacity', '0.5');
        $('.assembleddesktopi73770').show({direction:"left"},300); 
    })
}
{
    $('.bulloneallinonepcI52400button').click(function(){
        $('.container').css('display', 'none');
        $('.desktopsearch').css('display', 'none');
        $('.laptopsearch').addClass('defaultposition');
        $('.laptopcontainer').addClass('defaultposition');

        $('.desktopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.desktopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.desktopbuttons').css('opacity', '1');
        $('.desktopbuttons').css('border', 'solid');
        $('.desktopbuttons').css('borderWidth', 'thin');
        $('.desktopbuttons').css('borderColor', '#ff0000');
        $('.desktopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.laptopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.laptopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.desktopbuttons').css('opacity', '1');
        $('.desktopbuttons').css('border', 'solid');
        $('.desktopbuttons').css('borderWidth', 'thin');
        $('.desktopbuttons').css('borderColor', '#5c5c9b');
        $('.desktopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.bulloneallinonepcI52400button').css('border', 'none');
        $('.bulloneallinonepcI52400button').css('boxShadow', 'none');
        $('.bulloneallinonepcI52400button').css('opacity', '0.5');
        $('.bulloneallinonepci52400').show({direction:"left"},300); 
    })
}
{
    $('.cpui53470button').click(function(){
        $('.container').css('display', 'none');
        $('.desktopsearch').css('display', 'none');
        $('.laptopsearch').addClass('defaultposition');
        $('.laptopcontainer').addClass('defaultposition');

        $('.desktopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.desktopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.desktopbuttons').css('opacity', '1');
        $('.desktopbuttons').css('border', 'solid');
        $('.desktopbuttons').css('borderWidth', 'thin');
        $('.desktopbuttons').css('borderColor', '#ff0000');
        $('.desktopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.laptopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.laptopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.desktopbuttons').css('opacity', '1');
        $('.desktopbuttons').css('border', 'solid');
        $('.desktopbuttons').css('borderWidth', 'thin');
        $('.desktopbuttons').css('borderColor', '#5c5c9b');
        $('.desktopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.cpui53470button').css('border', 'none');
        $('.cpui53470button').css('boxShadow', 'none');
        $('.cpui53470button').css('opacity', '0.5');
        $('.cpui53470').show({direction:"left"},300); 
    })
}
{
    $('.cyntexiai74770button').click(function(){
        $('.container').css('display', 'none');
        $('.desktopsearch').css('display', 'none');
        $('.laptopsearch').addClass('defaultposition');
        $('.laptopcontainer').addClass('defaultposition');

        $('.desktopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.desktopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.desktopbuttons').css('opacity', '1');
        $('.desktopbuttons').css('border', 'solid');
        $('.desktopbuttons').css('borderWidth', 'thin');
        $('.desktopbuttons').css('borderColor', '#ff0000');
        $('.desktopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.laptopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.laptopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.desktopbuttons').css('opacity', '1');
        $('.desktopbuttons').css('border', 'solid');
        $('.desktopbuttons').css('borderWidth', 'thin');
        $('.desktopbuttons').css('borderColor', '#5c5c9b');
        $('.desktopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.cyntexiai74770button').css('border', 'none');
        $('.cyntexiai74770button').css('boxShadow', 'none');
        $('.cyntexiai74770button').css('opacity', '0.5');
        $('.cyntexiai74770').show({direction:"left"},300); 
    })
}
{
    $('.dellinspiron3030sdesktopbutton').click(function(){
        $('.container').css('display', 'none');
        $('.desktopsearch').css('display', 'none');
        $('.laptopsearch').addClass('defaultposition');
        $('.laptopcontainer').addClass('defaultposition');

        $('.desktopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.desktopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.desktopbuttons').css('opacity', '1');
        $('.desktopbuttons').css('border', 'solid');
        $('.desktopbuttons').css('borderWidth', 'thin');
        $('.desktopbuttons').css('borderColor', '#ff0000');
        $('.desktopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.laptopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.laptopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.desktopbuttons').css('opacity', '1');
        $('.desktopbuttons').css('border', 'solid');
        $('.desktopbuttons').css('borderWidth', 'thin');
        $('.desktopbuttons').css('borderColor', '#5c5c9b');
        $('.desktopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.dellinspiron3030sdesktopbutton').css('border', 'none');
        $('.dellinspiron3030sdesktopbutton').css('boxShadow', 'none');
        $('.dellinspiron3030sdesktopbutton').css('opacity', '0.5');
        $('.dellinspiron3030sdesktop').show({direction:"left"},300); 
    })
}
{
    $('.fusionitassembledi5desktopbutton').click(function(){
        $('.container').css('display', 'none');
        $('.desktopsearch').css('display', 'none');
        $('.laptopsearch').addClass('defaultposition');
        $('.laptopcontainer').addClass('defaultposition');

        $('.desktopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.desktopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.desktopbuttons').css('opacity', '1');
        $('.desktopbuttons').css('border', 'solid');
        $('.desktopbuttons').css('borderWidth', 'thin');
        $('.desktopbuttons').css('borderColor', '#ff0000');
        $('.desktopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.laptopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.laptopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.desktopbuttons').css('opacity', '1');
        $('.desktopbuttons').css('border', 'solid');
        $('.desktopbuttons').css('borderWidth', 'thin');
        $('.desktopbuttons').css('borderColor', '#5c5c9b');
        $('.desktopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.fusionitassembledi5desktopbutton').css('border', 'none');
        $('.fusionitassembledi5desktopbutton').css('boxShadow', 'none');
        $('.fusionitassembledi5desktopbutton').css('opacity', '0.5');
        $('.fusionitassembledi5desktop').show({direction:"left"},300); 
    })
}
{
    $('.hpallinonepcbutton').click(function(){
        $('.container').css('display', 'none');
        $('.desktopsearch').css('display', 'none');
        $('.laptopsearch').addClass('defaultposition');
        $('.laptopcontainer').addClass('defaultposition');

        $('.desktopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.desktopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.desktopbuttons').css('opacity', '1');
        $('.desktopbuttons').css('border', 'solid');
        $('.desktopbuttons').css('borderWidth', 'thin');
        $('.desktopbuttons').css('borderColor', '#ff0000');
        $('.desktopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.laptopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.laptopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.desktopbuttons').css('opacity', '1');
        $('.desktopbuttons').css('border', 'solid');
        $('.desktopbuttons').css('borderWidth', 'thin');
        $('.desktopbuttons').css('borderColor', '#5c5c9b');
        $('.desktopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.hpallinonepcbutton').css('border', 'none');
        $('.hpallinonepcbutton').css('boxShadow', 'none');
        $('.hpallinonepcbutton').css('opacity', '0.5');
        $('.hpallinonepc').show({direction:"left"},300); 
    })
}
{
    $('.lenovoideacenteri312thgenbutton').click(function(){
        $('.container').css('display', 'none');
        $('.desktopsearch').css('display', 'none');
        $('.laptopsearch').addClass('defaultposition');
        $('.laptopcontainer').addClass('defaultposition');

        $('.desktopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.desktopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.desktopbuttons').css('opacity', '1');
        $('.desktopbuttons').css('border', 'solid');
        $('.desktopbuttons').css('borderWidth', 'thin');
        $('.desktopbuttons').css('borderColor', '#ff0000');
        $('.desktopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.laptopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.laptopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.desktopbuttons').css('opacity', '1');
        $('.desktopbuttons').css('border', 'solid');
        $('.desktopbuttons').css('borderWidth', 'thin');
        $('.desktopbuttons').css('borderColor', '#5c5c9b');
        $('.desktopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.lenovoideacenteri312thgenbutton').css('border', 'none');
        $('.lenovoideacenteri312thgenbutton').css('boxShadow', 'none');
        $('.lenovoideacenteri312thgenbutton').css('opacity', '0.5');
        $('.lenovoideacenteri312thgen').show({direction:"left"},300); 
    })
}
{
    $('.powerxdesktopi74770button').click(function(){
        $('.container').css('display', 'none');
        $('.desktopsearch').css('display', 'none');
        $('.laptopsearch').addClass('defaultposition');
        $('.laptopcontainer').addClass('defaultposition');

        $('.desktopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.desktopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.desktopbuttons').css('opacity', '1');
        $('.desktopbuttons').css('border', 'solid');
        $('.desktopbuttons').css('borderWidth', 'thin');
        $('.desktopbuttons').css('borderColor', '#ff0000');
        $('.desktopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.laptopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.laptopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.desktopbuttons').css('opacity', '1');
        $('.desktopbuttons').css('border', 'solid');
        $('.desktopbuttons').css('borderWidth', 'thin');
        $('.desktopbuttons').css('borderColor', '#5c5c9b');
        $('.desktopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.powerxdesktopi74770button').css('border', 'none');
        $('.powerxdesktopi74770button').css('boxShadow', 'none');
        $('.powerxdesktopi74770button').css('opacity', '0.5');
        $('.powerxdesktopi74770').show({direction:"left"},300); 
    })
}
{
    $('.technoi52400button').click(function(){
        $('.container').css('display', 'none');
        $('.desktopsearch').css('display', 'none');
        $('.laptopsearch').addClass('defaultposition');
        $('.laptopcontainer').addClass('defaultposition');

        $('.desktopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.desktopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.desktopbuttons').css('opacity', '1');
        $('.desktopbuttons').css('border', 'solid');
        $('.desktopbuttons').css('borderWidth', 'thin');
        $('.desktopbuttons').css('borderColor', '#ff0000');
        $('.desktopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.laptopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.laptopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.desktopbuttons').css('opacity', '1');
        $('.desktopbuttons').css('border', 'solid');
        $('.desktopbuttons').css('borderWidth', 'thin');
        $('.desktopbuttons').css('borderColor', '#5c5c9b');
        $('.desktopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.technoi52400button').css('border', 'none');
        $('.technoi52400button').css('boxShadow', 'none');
        $('.technoi52400button').css('opacity', '0.5');
        $('.technoi52400').show({direction:"left"},300); 
    })
}
{
    $('.tecnicoi54thgenbutton').click(function(){
        $('.container').css('display', 'none');
        $('.desktopsearch').css('display', 'none');
        $('.laptopsearch').addClass('defaultposition');
        $('.laptopcontainer').addClass('defaultposition');

        $('.desktopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.desktopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.desktopbuttons').css('opacity', '1');
        $('.desktopbuttons').css('border', 'solid');
        $('.desktopbuttons').css('borderWidth', 'thin');
        $('.desktopbuttons').css('borderColor', '#ff0000');
        $('.desktopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.laptopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.laptopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.desktopbuttons').css('opacity', '1');
        $('.desktopbuttons').css('border', 'solid');
        $('.desktopbuttons').css('borderWidth', 'thin');
        $('.desktopbuttons').css('borderColor', '#5c5c9b');
        $('.desktopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.tecnicoi54thgenbutton').css('border', 'none');
        $('.tecnicoi54thgenbutton').css('boxShadow', 'none');
        $('.tecnicoi54thgenbutton').css('opacity', '0.5');
        $('.technicoi54thgen').show({direction:"left"},300); 
    })
}

{
    $('.aceraspirelitebutton').click(function(){
        $('.container').css('display', 'none');
        $('.desktopsearch').css('display', 'none');
        $('.laptopsearch').addClass('defaultposition');

        $('.desktopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.desktopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.desktopbuttons').css('opacity', '1');
        $('.desktopbuttons').css('border', 'solid');
        $('.desktopbuttons').css('borderWidth', 'thin');
        $('.desktopbuttons').css('borderColor', '#ff0000');
        $('.desktopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.laptopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.laptopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.laptopbuttons').css('opacity', '1');
        $('.laptopbuttons').css('border', 'solid');
        $('.laptopbuttons').css('borderWidth', 'thin');
        $('.laptopbuttons').css('borderColor', '#5c5c9b');
        $('.laptopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.aceraspirelitebutton').css('border', 'none');
        $('.aceraspirelitebutton').css('boxShadow', 'none');
        $('.aceraspirelitebutton').css('opacity', '0.5');
        
        $('.laptopcontainer').addClass('defaultposition');
        $('.aceraspirelite').removeClass('defaultposition');
        $('.aceraspirelite').addClass('onscreenposition'); 
    })
}
{
    $('.aceronebutton').click(function(){
        $('.container').css('display', 'none');
        $('.desktopsearch').css('display', 'none');
        $('.laptopsearch').addClass('defaultposition');

        $('.desktopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.desktopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.desktopbuttons').css('opacity', '1');
        $('.desktopbuttons').css('border', 'solid');
        $('.desktopbuttons').css('borderWidth', 'thin');
        $('.desktopbuttons').css('borderColor', '#ff0000');
        $('.desktopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.laptopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.laptopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.laptopbuttons').css('opacity', '1');
        $('.laptopbuttons').css('border', 'solid');
        $('.laptopbuttons').css('borderWidth', 'thin');
        $('.laptopbuttons').css('borderColor', '#5c5c9b');
        $('.laptopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.aceronebutton').css('border', 'none');
        $('.aceronebutton').css('boxShadow', 'none');
        $('.aceronebutton').css('opacity', '0.5');
        
        $('.laptopcontainer').addClass('defaultposition');
        $('.acerone').removeClass('defaultposition');
        $('.acerone').addClass('onscreenposition'); 
    })
}
{
    $('.asusvivobookgo14button').click(function(){
        $('.container').css('display', 'none');
        $('.desktopsearch').css('display', 'none');
        $('.laptopsearch').addClass('defaultposition');

        $('.desktopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.desktopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.desktopbuttons').css('opacity', '1');
        $('.desktopbuttons').css('border', 'solid');
        $('.desktopbuttons').css('borderWidth', 'thin');
        $('.desktopbuttons').css('borderColor', '#ff0000');
        $('.desktopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.laptopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.laptopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.laptopbuttons').css('opacity', '1');
        $('.laptopbuttons').css('border', 'solid');
        $('.laptopbuttons').css('borderWidth', 'thin');
        $('.laptopbuttons').css('borderColor', '#5c5c9b');
        $('.laptopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.asusvivobookgo14button').css('border', 'none');
        $('.asusvivobookgo14button').css('boxShadow', 'none');
        $('.asusvivobookgo14button').css('opacity', '0.5');
        
        $('.laptopcontainer').addClass('defaultposition');
        $('.asusvivobookgo14').removeClass('defaultposition');
        $('.asusvivobookgo14').addClass('onscreenposition'); 
    })
}
{
    $('.futopiaultimusprobutton').click(function(){
        $('.container').css('display', 'none');
        $('.desktopsearch').css('display', 'none');
        $('.laptopsearch').addClass('defaultposition');

        $('.desktopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.desktopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.desktopbuttons').css('opacity', '1');
        $('.desktopbuttons').css('border', 'solid');
        $('.desktopbuttons').css('borderWidth', 'thin');
        $('.desktopbuttons').css('borderColor', '#ff0000');
        $('.desktopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.laptopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.laptopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.laptopbuttons').css('opacity', '1');
        $('.laptopbuttons').css('border', 'solid');
        $('.laptopbuttons').css('borderWidth', 'thin');
        $('.laptopbuttons').css('borderColor', '#5c5c9b');
        $('.laptopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.futopiaultimusprobutton').css('border', 'none');
        $('.futopiaultimusprobutton').css('boxShadow', 'none');
        $('.futopiaultimusprobutton').css('opacity', '0.5');
        
        $('.laptopcontainer').addClass('defaultposition');
        $('.futopiaultimuspro').removeClass('defaultposition');
        $('.futopiaultimuspro').addClass('onscreenposition'); 
    })
}
{
    $('.hp15sbutton').click(function(){
        $('.container').css('display', 'none');
        $('.desktopsearch').css('display', 'none');
        $('.laptopsearch').addClass('defaultposition');

        $('.desktopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.desktopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.desktopbuttons').css('opacity', '1');
        $('.desktopbuttons').css('border', 'solid');
        $('.desktopbuttons').css('borderWidth', 'thin');
        $('.desktopbuttons').css('borderColor', '#ff0000');
        $('.desktopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.laptopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.laptopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.laptopbuttons').css('opacity', '1');
        $('.laptopbuttons').css('border', 'solid');
        $('.laptopbuttons').css('borderWidth', 'thin');
        $('.laptopbuttons').css('borderColor', '#5c5c9b');
        $('.laptopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.hp15sbutton').css('border', 'none');
        $('.hp15sbutton').css('boxShadow', 'none');
        $('.hp15sbutton').css('opacity', '0.5');
        
        $('.laptopcontainer').addClass('defaultposition');
        $('.hp15s').removeClass('defaultposition');
        $('.hp15s').addClass('onscreenposition'); 
    })
}
{
    $('.hp255notebookbutton').click(function(){
        $('.container').css('display', 'none');
        $('.desktopsearch').css('display', 'none');
        $('.laptopsearch').addClass('defaultposition');

        $('.desktopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.desktopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.desktopbuttons').css('opacity', '1');
        $('.desktopbuttons').css('border', 'solid');
        $('.desktopbuttons').css('borderWidth', 'thin');
        $('.desktopbuttons').css('borderColor', '#ff0000');
        $('.desktopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.laptopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.laptopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.laptopbuttons').css('opacity', '1');
        $('.laptopbuttons').css('border', 'solid');
        $('.laptopbuttons').css('borderWidth', 'thin');
        $('.laptopbuttons').css('borderColor', '#5c5c9b');
        $('.laptopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.hp255notebookbutton').css('border', 'none');
        $('.hp255notebookbutton').css('boxShadow', 'none');
        $('.hp255notebookbutton').css('opacity', '0.5');
        
        $('.laptopcontainer').addClass('defaultposition');
        $('.hp255notebook').removeClass('defaultposition');
        $('.hp255notebook').addClass('onscreenposition'); 
    })
}
{
    $('.hpvictusbutton').click(function(){
        $('.container').css('display', 'none');
        $('.desktopsearch').css('display', 'none');
        $('.laptopsearch').addClass('defaultposition');

        $('.desktopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.desktopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.desktopbuttons').css('opacity', '1');
        $('.desktopbuttons').css('border', 'solid');
        $('.desktopbuttons').css('borderWidth', 'thin');
        $('.desktopbuttons').css('borderColor', '#ff0000');
        $('.desktopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.laptopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.laptopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.laptopbuttons').css('opacity', '1');
        $('.laptopbuttons').css('border', 'solid');
        $('.laptopbuttons').css('borderWidth', 'thin');
        $('.laptopbuttons').css('borderColor', '#5c5c9b');
        $('.laptopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.hpvictusbutton').css('border', 'none');
        $('.hpvictusbutton').css('boxShadow', 'none');
        $('.hpvictusbutton').css('opacity', '0.5');
        
        $('.laptopcontainer').addClass('defaultposition');
        $('.hpvictus').removeClass('defaultposition');
        $('.hpvictus').addClass('onscreenposition'); 
    })
}
{
    $('.lenovov14g3button').click(function(){
        $('.container').css('display', 'none');
        $('.desktopsearch').css('display', 'none');
        $('.laptopsearch').addClass('defaultposition');

        $('.desktopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.desktopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.desktopbuttons').css('opacity', '1');
        $('.desktopbuttons').css('border', 'solid');
        $('.desktopbuttons').css('borderWidth', 'thin');
        $('.desktopbuttons').css('borderColor', '#ff0000');
        $('.desktopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.laptopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.laptopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.laptopbuttons').css('opacity', '1');
        $('.laptopbuttons').css('border', 'solid');
        $('.laptopbuttons').css('borderWidth', 'thin');
        $('.laptopbuttons').css('borderColor', '#5c5c9b');
        $('.laptopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.lenovov14g3button').css('border', 'none');
        $('.lenovov14g3button').css('boxShadow', 'none');
        $('.lenovov14g3button').css('opacity', '0.5');
        
        $('.laptopcontainer').addClass('defaultposition');
        $('.lenovov14g3').removeClass('defaultposition');
        $('.lenovov14g3').addClass('onscreenposition'); 
    })
}
{
    $('.lenovov15button').click(function(){
        $('.container').css('display', 'none');
        $('.desktopsearch').css('display', 'none');
        $('.laptopsearch').addClass('defaultposition');

        $('.desktopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.desktopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.desktopbuttons').css('opacity', '1');
        $('.desktopbuttons').css('border', 'solid');
        $('.desktopbuttons').css('borderWidth', 'thin');
        $('.desktopbuttons').css('borderColor', '#ff0000');
        $('.desktopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.laptopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.laptopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.laptopbuttons').css('opacity', '1');
        $('.laptopbuttons').css('border', 'solid');
        $('.laptopbuttons').css('borderWidth', 'thin');
        $('.laptopbuttons').css('borderColor', '#5c5c9b');
        $('.laptopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.lenovov15button').css('border', 'none');
        $('.lenovov15button').css('boxShadow', 'none');
        $('.lenovov15button').css('opacity', '0.5');
        
        $('.laptopcontainer').addClass('defaultposition');
        $('.lenovov15').removeClass('defaultposition');
        $('.lenovov15').addClass('onscreenposition'); 
    })
}

{
    $('#assembleddesktopi73770orderbutton').click(function(){
        $('.container').css('display', 'none');
        $('.desktopsearch').css('display', 'none');
        $('.laptopsearch').addClass('defaultposition');

        $('.desktopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.desktopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.desktopbuttons').css('opacity', '1');
        $('.desktopbuttons').css('border', 'solid');
        $('.desktopbuttons').css('borderWidth', 'thin');
        $('.desktopbuttons').css('borderColor', '#ff0000');
        $('.desktopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.laptopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.laptopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.laptopbuttons').css('opacity', '1');
        $('.laptopbuttons').css('border', 'solid');
        $('.laptopbuttons').css('borderWidth', 'thin');
        $('.laptopbuttons').css('borderColor', '#5c5c9b');
        $('.laptopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.myorderscontainer').slideDown(300);
        $('.assembleddesktopi73770order').removeClass('hide');
        
    })
}
{
    $('#bulloneallinonepci52400orderbutton').click(function(){
        $('.container').css('display', 'none');
        $('.desktopsearch').css('display', 'none');
        $('.laptopsearch').addClass('defaultposition');

        $('.desktopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.desktopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.desktopbuttons').css('opacity', '1');
        $('.desktopbuttons').css('border', 'solid');
        $('.desktopbuttons').css('borderWidth', 'thin');
        $('.desktopbuttons').css('borderColor', '#ff0000');
        $('.desktopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.laptopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.laptopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.laptopbuttons').css('opacity', '1');
        $('.laptopbuttons').css('border', 'solid');
        $('.laptopbuttons').css('borderWidth', 'thin');
        $('.laptopbuttons').css('borderColor', '#5c5c9b');
        $('.laptopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.myorderscontainer').slideDown(300);
        $('.bulloneallinonepci52400order').removeClass('hide');
        
    })
}
{
    $('#cpui53470orderbutton').click(function(){
        $('.container').css('display', 'none');
        $('.desktopsearch').css('display', 'none');
        $('.laptopsearch').addClass('defaultposition');

        $('.desktopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.desktopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.desktopbuttons').css('opacity', '1');
        $('.desktopbuttons').css('border', 'solid');
        $('.desktopbuttons').css('borderWidth', 'thin');
        $('.desktopbuttons').css('borderColor', '#ff0000');
        $('.desktopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.laptopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.laptopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.laptopbuttons').css('opacity', '1');
        $('.laptopbuttons').css('border', 'solid');
        $('.laptopbuttons').css('borderWidth', 'thin');
        $('.laptopbuttons').css('borderColor', '#5c5c9b');
        $('.laptopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.myorderscontainer').slideDown(300);
        $('.cpui53470order').removeClass('hide');
        
    })
}
{
    $('#cyntexiai74770orderbutton').click(function(){
        $('.container').css('display', 'none');
        $('.desktopsearch').css('display', 'none');
        $('.laptopsearch').addClass('defaultposition');

        $('.desktopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.desktopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.desktopbuttons').css('opacity', '1');
        $('.desktopbuttons').css('border', 'solid');
        $('.desktopbuttons').css('borderWidth', 'thin');
        $('.desktopbuttons').css('borderColor', '#ff0000');
        $('.desktopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.laptopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.laptopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.laptopbuttons').css('opacity', '1');
        $('.laptopbuttons').css('border', 'solid');
        $('.laptopbuttons').css('borderWidth', 'thin');
        $('.laptopbuttons').css('borderColor', '#5c5c9b');
        $('.laptopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.myorderscontainer').slideDown(300);
        $('.cyntexiai74770order').removeClass('hide');
        
    })
}
{
    $('#dellinspiron3030sdesktoporderbutton').click(function(){
        $('.container').css('display', 'none');
        $('.desktopsearch').css('display', 'none');
        $('.laptopsearch').addClass('defaultposition');

        $('.desktopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.desktopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.desktopbuttons').css('opacity', '1');
        $('.desktopbuttons').css('border', 'solid');
        $('.desktopbuttons').css('borderWidth', 'thin');
        $('.desktopbuttons').css('borderColor', '#ff0000');
        $('.desktopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.laptopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.laptopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.laptopbuttons').css('opacity', '1');
        $('.laptopbuttons').css('border', 'solid');
        $('.laptopbuttons').css('borderWidth', 'thin');
        $('.laptopbuttons').css('borderColor', '#5c5c9b');
        $('.laptopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.myorderscontainer').slideDown(300);
        $('.dellinspiron3030sdesktoporder').removeClass('hide');
        
    })
}
{
    $('#fusionitassembledi5desktoporderbutton').click(function(){
        $('.container').css('display', 'none');
        $('.desktopsearch').css('display', 'none');
        $('.laptopsearch').addClass('defaultposition');

        $('.desktopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.desktopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.desktopbuttons').css('opacity', '1');
        $('.desktopbuttons').css('border', 'solid');
        $('.desktopbuttons').css('borderWidth', 'thin');
        $('.desktopbuttons').css('borderColor', '#ff0000');
        $('.desktopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.laptopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.laptopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.laptopbuttons').css('opacity', '1');
        $('.laptopbuttons').css('border', 'solid');
        $('.laptopbuttons').css('borderWidth', 'thin');
        $('.laptopbuttons').css('borderColor', '#5c5c9b');
        $('.laptopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.myorderscontainer').slideDown(300);
        $('.fusionitassembledi5desktoporder').removeClass('hide');
        
    })
}
{
    $('#hpallinonepcorderbutton').click(function(){
        $('.container').css('display', 'none');
        $('.desktopsearch').css('display', 'none');
        $('.laptopsearch').addClass('defaultposition');

        $('.desktopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.desktopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.desktopbuttons').css('opacity', '1');
        $('.desktopbuttons').css('border', 'solid');
        $('.desktopbuttons').css('borderWidth', 'thin');
        $('.desktopbuttons').css('borderColor', '#ff0000');
        $('.desktopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.laptopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.laptopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.laptopbuttons').css('opacity', '1');
        $('.laptopbuttons').css('border', 'solid');
        $('.laptopbuttons').css('borderWidth', 'thin');
        $('.laptopbuttons').css('borderColor', '#5c5c9b');
        $('.laptopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.myorderscontainer').slideDown(300);
        $('.hpallinonepcorder').removeClass('hide');
        
    })
}
{
    $('#lenovoideacenteri312thgenorderbutton').click(function(){
        $('.container').css('display', 'none');
        $('.desktopsearch').css('display', 'none');
        $('.laptopsearch').addClass('defaultposition');

        $('.desktopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.desktopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.desktopbuttons').css('opacity', '1');
        $('.desktopbuttons').css('border', 'solid');
        $('.desktopbuttons').css('borderWidth', 'thin');
        $('.desktopbuttons').css('borderColor', '#ff0000');
        $('.desktopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.laptopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.laptopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.laptopbuttons').css('opacity', '1');
        $('.laptopbuttons').css('border', 'solid');
        $('.laptopbuttons').css('borderWidth', 'thin');
        $('.laptopbuttons').css('borderColor', '#5c5c9b');
        $('.laptopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.myorderscontainer').slideDown(300);
        $('.lenovoideacenteri312thgenorder').removeClass('hide');
        
    })
}
{
    $('#powerxdesktopi74770orderbutton').click(function(){
        $('.container').css('display', 'none');
        $('.desktopsearch').css('display', 'none');
        $('.laptopsearch').addClass('defaultposition');

        $('.desktopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.desktopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.desktopbuttons').css('opacity', '1');
        $('.desktopbuttons').css('border', 'solid');
        $('.desktopbuttons').css('borderWidth', 'thin');
        $('.desktopbuttons').css('borderColor', '#ff0000');
        $('.desktopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.laptopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.laptopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.laptopbuttons').css('opacity', '1');
        $('.laptopbuttons').css('border', 'solid');
        $('.laptopbuttons').css('borderWidth', 'thin');
        $('.laptopbuttons').css('borderColor', '#5c5c9b');
        $('.laptopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.myorderscontainer').slideDown(300);
        $('.powerxdesktopi74770order').removeClass('hide');
        
    })
}
{
    $('#technoi52400orderbutton').click(function(){
        $('.container').css('display', 'none');
        $('.desktopsearch').css('display', 'none');
        $('.laptopsearch').addClass('defaultposition');

        $('.desktopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.desktopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.desktopbuttons').css('opacity', '1');
        $('.desktopbuttons').css('border', 'solid');
        $('.desktopbuttons').css('borderWidth', 'thin');
        $('.desktopbuttons').css('borderColor', '#ff0000');
        $('.desktopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.laptopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.laptopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.laptopbuttons').css('opacity', '1');
        $('.laptopbuttons').css('border', 'solid');
        $('.laptopbuttons').css('borderWidth', 'thin');
        $('.laptopbuttons').css('borderColor', '#5c5c9b');
        $('.laptopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.myorderscontainer').slideDown(300);
        $('.technoi52400order').removeClass('hide');
        
    })
}
{
    $('#technicoi54thgenorderbutton').click(function(){
        $('.container').css('display', 'none');
        $('.desktopsearch').css('display', 'none');
        $('.laptopsearch').addClass('defaultposition');

        $('.desktopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.desktopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.desktopbuttons').css('opacity', '1');
        $('.desktopbuttons').css('border', 'solid');
        $('.desktopbuttons').css('borderWidth', 'thin');
        $('.desktopbuttons').css('borderColor', '#ff0000');
        $('.desktopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.laptopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.laptopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.laptopbuttons').css('opacity', '1');
        $('.laptopbuttons').css('border', 'solid');
        $('.laptopbuttons').css('borderWidth', 'thin');
        $('.laptopbuttons').css('borderColor', '#5c5c9b');
        $('.laptopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.myorderscontainer').slideDown(300);
        $('.technicoi54thgenorder').removeClass('hide');
        
    })
}
{
    $('#aceraspireliteorderbutton').click(function(){
        $('.container').css('display', 'none');
        $('.laptopcontainer').addClass('defaultposition');

        $('.desktopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.desktopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.desktopbuttons').css('opacity', '1');
        $('.desktopbuttons').css('border', 'solid');
        $('.desktopbuttons').css('borderWidth', 'thin');
        $('.desktopbuttons').css('borderColor', '#ff0000');
        $('.desktopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.laptopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.laptopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.laptopbuttons').css('opacity', '1');
        $('.laptopbuttons').css('border', 'solid');
        $('.laptopbuttons').css('borderWidth', 'thin');
        $('.laptopbuttons').css('borderColor', '#5c5c9b');
        $('.laptopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.myorderscontainer').slideDown(300);
        $('.aceraspireliteorder').removeClass('hide');
        
    })
}
{
    $('#aceroneorderbutton').click(function(){
        $('.container').css('display', 'none');
        $('.laptopcontainer').addClass('defaultposition');

        $('.desktopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.desktopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.desktopbuttons').css('opacity', '1');
        $('.desktopbuttons').css('border', 'solid');
        $('.desktopbuttons').css('borderWidth', 'thin');
        $('.desktopbuttons').css('borderColor', '#ff0000');
        $('.desktopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.laptopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.laptopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.laptopbuttons').css('opacity', '1');
        $('.laptopbuttons').css('border', 'solid');
        $('.laptopbuttons').css('borderWidth', 'thin');
        $('.laptopbuttons').css('borderColor', '#5c5c9b');
        $('.laptopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.myorderscontainer').slideDown(300);
        $('.aceroneorder').removeClass('hide');
        
    })
}
{
    $('#asusvivobookgo14orderbutton').click(function(){
        $('.container').css('display', 'none');
        $('.laptopcontainer').addClass('defaultposition');

        $('.desktopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.desktopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.desktopbuttons').css('opacity', '1');
        $('.desktopbuttons').css('border', 'solid');
        $('.desktopbuttons').css('borderWidth', 'thin');
        $('.desktopbuttons').css('borderColor', '#ff0000');
        $('.desktopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.laptopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.laptopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.laptopbuttons').css('opacity', '1');
        $('.laptopbuttons').css('border', 'solid');
        $('.laptopbuttons').css('borderWidth', 'thin');
        $('.laptopbuttons').css('borderColor', '#5c5c9b');
        $('.laptopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.myorderscontainer').slideDown(300);
        $('.asusvivobookgo14order').removeClass('hide');
        
    })
}
{
    $('#futopiaultimusproorderbutton').click(function(){
        $('.container').css('display', 'none');
        $('.laptopcontainer').addClass('defaultposition');

        $('.desktopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.desktopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.desktopbuttons').css('opacity', '1');
        $('.desktopbuttons').css('border', 'solid');
        $('.desktopbuttons').css('borderWidth', 'thin');
        $('.desktopbuttons').css('borderColor', '#ff0000');
        $('.desktopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.laptopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.laptopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.laptopbuttons').css('opacity', '1');
        $('.laptopbuttons').css('border', 'solid');
        $('.laptopbuttons').css('borderWidth', 'thin');
        $('.laptopbuttons').css('borderColor', '#5c5c9b');
        $('.laptopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.myorderscontainer').slideDown(300);
        $('.futopiaultimusproorder').removeClass('hide');
        
    })
}
{
    $('#hp15sorderbutton').click(function(){
        $('.container').css('display', 'none');
        $('.laptopcontainer').addClass('defaultposition');

        $('.desktopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.desktopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.desktopbuttons').css('opacity', '1');
        $('.desktopbuttons').css('border', 'solid');
        $('.desktopbuttons').css('borderWidth', 'thin');
        $('.desktopbuttons').css('borderColor', '#ff0000');
        $('.desktopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.laptopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.laptopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.laptopbuttons').css('opacity', '1');
        $('.laptopbuttons').css('border', 'solid');
        $('.laptopbuttons').css('borderWidth', 'thin');
        $('.laptopbuttons').css('borderColor', '#5c5c9b');
        $('.laptopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.myorderscontainer').slideDown(300);
        $('.hp15sorder').removeClass('hide');
        
    })
}
{
    $('#hp255notebookorderbutton').click(function(){
        $('.container').css('display', 'none');
        $('.laptopcontainer').addClass('defaultposition');

        $('.desktopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.desktopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.desktopbuttons').css('opacity', '1');
        $('.desktopbuttons').css('border', 'solid');
        $('.desktopbuttons').css('borderWidth', 'thin');
        $('.desktopbuttons').css('borderColor', '#ff0000');
        $('.desktopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.laptopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.laptopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.laptopbuttons').css('opacity', '1');
        $('.laptopbuttons').css('border', 'solid');
        $('.laptopbuttons').css('borderWidth', 'thin');
        $('.laptopbuttons').css('borderColor', '#5c5c9b');
        $('.laptopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.myorderscontainer').slideDown(300);
        $('.hp255notebookorder').removeClass('hide');
        
    })
}
{
    $('#hpvictusorderbutton').click(function(){
        $('.container').css('display', 'none');
        $('.laptopcontainer').addClass('defaultposition');

        $('.desktopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.desktopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.desktopbuttons').css('opacity', '1');
        $('.desktopbuttons').css('border', 'solid');
        $('.desktopbuttons').css('borderWidth', 'thin');
        $('.desktopbuttons').css('borderColor', '#ff0000');
        $('.desktopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.laptopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.laptopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.laptopbuttons').css('opacity', '1');
        $('.laptopbuttons').css('border', 'solid');
        $('.laptopbuttons').css('borderWidth', 'thin');
        $('.laptopbuttons').css('borderColor', '#5c5c9b');
        $('.laptopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.myorderscontainer').slideDown(300);
        $('.hpvictusorder').removeClass('hide');
        
    })
}
{
    $('#lenovov14g3orderbutton').click(function(){
        $('.container').css('display', 'none');
        $('.laptopcontainer').addClass('defaultposition');

        $('.desktopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.desktopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.desktopbuttons').css('opacity', '1');
        $('.desktopbuttons').css('border', 'solid');
        $('.desktopbuttons').css('borderWidth', 'thin');
        $('.desktopbuttons').css('borderColor', '#ff0000');
        $('.desktopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.laptopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.laptopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.laptopbuttons').css('opacity', '1');
        $('.laptopbuttons').css('border', 'solid');
        $('.laptopbuttons').css('borderWidth', 'thin');
        $('.laptopbuttons').css('borderColor', '#5c5c9b');
        $('.laptopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.myorderscontainer').slideDown(300);
        $('.lenovov14g3order').removeClass('hide');
        
    })
}
{
    $('#lenovov15orderbutton').click(function(){
        $('.container').css('display', 'none');
        $('.laptopcontainer').addClass('defaultposition');

        $('.desktopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.desktopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.desktopbuttons').css('opacity', '1');
        $('.desktopbuttons').css('border', 'solid');
        $('.desktopbuttons').css('borderWidth', 'thin');
        $('.desktopbuttons').css('borderColor', '#ff0000');
        $('.desktopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.laptopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.laptopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.laptopbuttons').css('opacity', '1');
        $('.laptopbuttons').css('border', 'solid');
        $('.laptopbuttons').css('borderWidth', 'thin');
        $('.laptopbuttons').css('borderColor', '#5c5c9b');
        $('.laptopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.myorderscontainer').slideDown(300);
        $('.lenovov15order').removeClass('hide');
        
    })
}

{
    $('#assembleddesktopi73770cartbutton').click(function(){
        $('.container').css('display', 'none');
        $('.laptopcontainer').addClass('defaultposition');

        $('.desktopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.desktopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.desktopbuttons').css('opacity', '1');
        $('.desktopbuttons').css('border', 'solid');
        $('.desktopbuttons').css('borderWidth', 'thin');
        $('.desktopbuttons').css('borderColor', '#ff0000');
        $('.desktopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.laptopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.laptopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.laptopbuttons').css('opacity', '1');
        $('.laptopbuttons').css('border', 'solid');
        $('.laptopbuttons').css('borderWidth', 'thin');
        $('.laptopbuttons').css('borderColor', '#5c5c9b');
        $('.laptopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.mycartcontainer').slideDown(300);
        $('.assembleddesktopi73770cart').removeClass('hide');
        
    })
}
{
    $('#bulloneallinonepci52400cartbutton').click(function(){
        $('.container').css('display', 'none');
        $('.laptopcontainer').addClass('defaultposition');

        $('.desktopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.desktopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.desktopbuttons').css('opacity', '1');
        $('.desktopbuttons').css('border', 'solid');
        $('.desktopbuttons').css('borderWidth', 'thin');
        $('.desktopbuttons').css('borderColor', '#ff0000');
        $('.desktopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.laptopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.laptopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.laptopbuttons').css('opacity', '1');
        $('.laptopbuttons').css('border', 'solid');
        $('.laptopbuttons').css('borderWidth', 'thin');
        $('.laptopbuttons').css('borderColor', '#5c5c9b');
        $('.laptopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.mycartcontainer').slideDown(300);
        $('.bulloneallinonepci52400cart').removeClass('hide');
        
    })
}
{
    $('#cpui53470cartbutton').click(function(){
        $('.container').css('display', 'none');
        $('.laptopcontainer').addClass('defaultposition');

        $('.desktopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.desktopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.desktopbuttons').css('opacity', '1');
        $('.desktopbuttons').css('border', 'solid');
        $('.desktopbuttons').css('borderWidth', 'thin');
        $('.desktopbuttons').css('borderColor', '#ff0000');
        $('.desktopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.laptopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.laptopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.laptopbuttons').css('opacity', '1');
        $('.laptopbuttons').css('border', 'solid');
        $('.laptopbuttons').css('borderWidth', 'thin');
        $('.laptopbuttons').css('borderColor', '#5c5c9b');
        $('.laptopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.mycartcontainer').slideDown(300);
        $('.cpui53470cart').removeClass('hide');
        
    })
}
{
    $('#cyntexiai74770cartbutton').click(function(){
        $('.container').css('display', 'none');
        $('.laptopcontainer').addClass('defaultposition');

        $('.desktopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.desktopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.desktopbuttons').css('opacity', '1');
        $('.desktopbuttons').css('border', 'solid');
        $('.desktopbuttons').css('borderWidth', 'thin');
        $('.desktopbuttons').css('borderColor', '#ff0000');
        $('.desktopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.laptopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.laptopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.laptopbuttons').css('opacity', '1');
        $('.laptopbuttons').css('border', 'solid');
        $('.laptopbuttons').css('borderWidth', 'thin');
        $('.laptopbuttons').css('borderColor', '#5c5c9b');
        $('.laptopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.mycartcontainer').slideDown(300);
        $('.cyntexiai74770cart').removeClass('hide');
        
    })
}
{
    $('#dellinspiron3030sdesktopcartbutton').click(function(){
        $('.container').css('display', 'none');
        $('.laptopcontainer').addClass('defaultposition');

        $('.desktopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.desktopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.desktopbuttons').css('opacity', '1');
        $('.desktopbuttons').css('border', 'solid');
        $('.desktopbuttons').css('borderWidth', 'thin');
        $('.desktopbuttons').css('borderColor', '#ff0000');
        $('.desktopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.laptopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.laptopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.laptopbuttons').css('opacity', '1');
        $('.laptopbuttons').css('border', 'solid');
        $('.laptopbuttons').css('borderWidth', 'thin');
        $('.laptopbuttons').css('borderColor', '#5c5c9b');
        $('.laptopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.mycartcontainer').slideDown(300);
        $('.dellinspiron3030sdesktopcart').removeClass('hide');
        
    })
}
{
    $('#fusionitassembledi5desktopcartbutton').click(function(){
        $('.container').css('display', 'none');
        $('.laptopcontainer').addClass('defaultposition');

        $('.desktopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.desktopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.desktopbuttons').css('opacity', '1');
        $('.desktopbuttons').css('border', 'solid');
        $('.desktopbuttons').css('borderWidth', 'thin');
        $('.desktopbuttons').css('borderColor', '#ff0000');
        $('.desktopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.laptopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.laptopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.laptopbuttons').css('opacity', '1');
        $('.laptopbuttons').css('border', 'solid');
        $('.laptopbuttons').css('borderWidth', 'thin');
        $('.laptopbuttons').css('borderColor', '#5c5c9b');
        $('.laptopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.mycartcontainer').slideDown(300);
        $('.fusionitassembledi5desktopcart').removeClass('hide');
        
    })
}
{
    $('#hpallinonepccartbutton').click(function(){
        $('.container').css('display', 'none');
        $('.laptopcontainer').addClass('defaultposition');

        $('.desktopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.desktopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.desktopbuttons').css('opacity', '1');
        $('.desktopbuttons').css('border', 'solid');
        $('.desktopbuttons').css('borderWidth', 'thin');
        $('.desktopbuttons').css('borderColor', '#ff0000');
        $('.desktopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.laptopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.laptopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.laptopbuttons').css('opacity', '1');
        $('.laptopbuttons').css('border', 'solid');
        $('.laptopbuttons').css('borderWidth', 'thin');
        $('.laptopbuttons').css('borderColor', '#5c5c9b');
        $('.laptopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.mycartcontainer').slideDown(300);
        $('.hpallinonepccart').removeClass('hide');
        
    })
}
{
    $('#lenovoideacenteri312thgencartbutton').click(function(){
        $('.container').css('display', 'none');
        $('.laptopcontainer').addClass('defaultposition');

        $('.desktopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.desktopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.desktopbuttons').css('opacity', '1');
        $('.desktopbuttons').css('border', 'solid');
        $('.desktopbuttons').css('borderWidth', 'thin');
        $('.desktopbuttons').css('borderColor', '#ff0000');
        $('.desktopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.laptopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.laptopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.laptopbuttons').css('opacity', '1');
        $('.laptopbuttons').css('border', 'solid');
        $('.laptopbuttons').css('borderWidth', 'thin');
        $('.laptopbuttons').css('borderColor', '#5c5c9b');
        $('.laptopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.mycartcontainer').slideDown(300);
        $('.lenovoideacenteri312thgencart').removeClass('hide');
        
    })
}
{
    $('#powerxdesktopi74770cartbutton').click(function(){
        $('.container').css('display', 'none');
        $('.laptopcontainer').addClass('defaultposition');

        $('.desktopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.desktopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.desktopbuttons').css('opacity', '1');
        $('.desktopbuttons').css('border', 'solid');
        $('.desktopbuttons').css('borderWidth', 'thin');
        $('.desktopbuttons').css('borderColor', '#ff0000');
        $('.desktopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.laptopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.laptopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.laptopbuttons').css('opacity', '1');
        $('.laptopbuttons').css('border', 'solid');
        $('.laptopbuttons').css('borderWidth', 'thin');
        $('.laptopbuttons').css('borderColor', '#5c5c9b');
        $('.laptopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.mycartcontainer').slideDown(300);
        $('.powerxdesktopi74770cart').removeClass('hide');
        
    })
}
{
    $('#technoi52400cartbutton').click(function(){
        $('.container').css('display', 'none');
        $('.laptopcontainer').addClass('defaultposition');

        $('.desktopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.desktopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.desktopbuttons').css('opacity', '1');
        $('.desktopbuttons').css('border', 'solid');
        $('.desktopbuttons').css('borderWidth', 'thin');
        $('.desktopbuttons').css('borderColor', '#ff0000');
        $('.desktopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.laptopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.laptopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.laptopbuttons').css('opacity', '1');
        $('.laptopbuttons').css('border', 'solid');
        $('.laptopbuttons').css('borderWidth', 'thin');
        $('.laptopbuttons').css('borderColor', '#5c5c9b');
        $('.laptopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.mycartcontainer').slideDown(300);
        $('.technoi52400cart').removeClass('hide');
        
    })
}
{
    $('#technicoi54thgencartbutton').click(function(){
        $('.container').css('display', 'none');
        $('.laptopcontainer').addClass('defaultposition');

        $('.desktopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.desktopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.desktopbuttons').css('opacity', '1');
        $('.desktopbuttons').css('border', 'solid');
        $('.desktopbuttons').css('borderWidth', 'thin');
        $('.desktopbuttons').css('borderColor', '#ff0000');
        $('.desktopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.laptopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.laptopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.laptopbuttons').css('opacity', '1');
        $('.laptopbuttons').css('border', 'solid');
        $('.laptopbuttons').css('borderWidth', 'thin');
        $('.laptopbuttons').css('borderColor', '#5c5c9b');
        $('.laptopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.mycartcontainer').slideDown(300);
        $('.technicoi54thgencart').removeClass('hide');
        
    })
}
{
    $('#aceraspirelitecartbutton').click(function(){
        $('.container').css('display', 'none');
        $('.laptopcontainer').addClass('defaultposition');

        $('.desktopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.desktopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.desktopbuttons').css('opacity', '1');
        $('.desktopbuttons').css('border', 'solid');
        $('.desktopbuttons').css('borderWidth', 'thin');
        $('.desktopbuttons').css('borderColor', '#ff0000');
        $('.desktopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.laptopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.laptopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.laptopbuttons').css('opacity', '1');
        $('.laptopbuttons').css('border', 'solid');
        $('.laptopbuttons').css('borderWidth', 'thin');
        $('.laptopbuttons').css('borderColor', '#5c5c9b');
        $('.laptopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.mycartcontainer').slideDown(300);
        $('.aceraspirelitecart').removeClass('hide');
        
    })
}
{
    $('#aceronecartbutton').click(function(){
        $('.container').css('display', 'none');
        $('.laptopcontainer').addClass('defaultposition');

        $('.desktopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.desktopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.desktopbuttons').css('opacity', '1');
        $('.desktopbuttons').css('border', 'solid');
        $('.desktopbuttons').css('borderWidth', 'thin');
        $('.desktopbuttons').css('borderColor', '#ff0000');
        $('.desktopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.laptopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.laptopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.laptopbuttons').css('opacity', '1');
        $('.laptopbuttons').css('border', 'solid');
        $('.laptopbuttons').css('borderWidth', 'thin');
        $('.laptopbuttons').css('borderColor', '#5c5c9b');
        $('.laptopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.mycartcontainer').slideDown(300);
        $('.aceronecart').removeClass('hide');
        
    })
}
{
    $('#asusvivobookgo14cartbutton').click(function(){
        $('.container').css('display', 'none');
        $('.laptopcontainer').addClass('defaultposition');

        $('.desktopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.desktopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.desktopbuttons').css('opacity', '1');
        $('.desktopbuttons').css('border', 'solid');
        $('.desktopbuttons').css('borderWidth', 'thin');
        $('.desktopbuttons').css('borderColor', '#ff0000');
        $('.desktopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.laptopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.laptopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.laptopbuttons').css('opacity', '1');
        $('.laptopbuttons').css('border', 'solid');
        $('.laptopbuttons').css('borderWidth', 'thin');
        $('.laptopbuttons').css('borderColor', '#5c5c9b');
        $('.laptopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.mycartcontainer').slideDown(300);
        $('.asusvivobookgo14cart').removeClass('hide');
        
    })
}
{
    $('#futopiaultimusprocartbutton').click(function(){
        $('.container').css('display', 'none');
        $('.laptopcontainer').addClass('defaultposition');

        $('.desktopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.desktopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.desktopbuttons').css('opacity', '1');
        $('.desktopbuttons').css('border', 'solid');
        $('.desktopbuttons').css('borderWidth', 'thin');
        $('.desktopbuttons').css('borderColor', '#ff0000');
        $('.desktopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.laptopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.laptopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.laptopbuttons').css('opacity', '1');
        $('.laptopbuttons').css('border', 'solid');
        $('.laptopbuttons').css('borderWidth', 'thin');
        $('.laptopbuttons').css('borderColor', '#5c5c9b');
        $('.laptopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.mycartcontainer').slideDown(300);
        $('.futopiaultimusprocart').removeClass('hide');
        
    })
}
{
    $('#hp15scartbutton').click(function(){
        $('.container').css('display', 'none');
        $('.laptopcontainer').addClass('defaultposition');

        $('.desktopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.desktopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.desktopbuttons').css('opacity', '1');
        $('.desktopbuttons').css('border', 'solid');
        $('.desktopbuttons').css('borderWidth', 'thin');
        $('.desktopbuttons').css('borderColor', '#ff0000');
        $('.desktopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.laptopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.laptopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.laptopbuttons').css('opacity', '1');
        $('.laptopbuttons').css('border', 'solid');
        $('.laptopbuttons').css('borderWidth', 'thin');
        $('.laptopbuttons').css('borderColor', '#5c5c9b');
        $('.laptopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.mycartcontainer').slideDown(300);
        $('.hp15scart').removeClass('hide');
        
    })
}
{
    $('#hp255notebookcartbutton').click(function(){
        $('.container').css('display', 'none');
        $('.laptopcontainer').addClass('defaultposition');

        $('.desktopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.desktopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.desktopbuttons').css('opacity', '1');
        $('.desktopbuttons').css('border', 'solid');
        $('.desktopbuttons').css('borderWidth', 'thin');
        $('.desktopbuttons').css('borderColor', '#ff0000');
        $('.desktopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.laptopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.laptopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.laptopbuttons').css('opacity', '1');
        $('.laptopbuttons').css('border', 'solid');
        $('.laptopbuttons').css('borderWidth', 'thin');
        $('.laptopbuttons').css('borderColor', '#5c5c9b');
        $('.laptopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.mycartcontainer').slideDown(300);
        $('.hp255notebookcart').removeClass('hide');
        
    })
}
{
    $('#hpvictuscartbutton').click(function(){
        $('.container').css('display', 'none');
        $('.laptopcontainer').addClass('defaultposition');

        $('.desktopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.desktopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.desktopbuttons').css('opacity', '1');
        $('.desktopbuttons').css('border', 'solid');
        $('.desktopbuttons').css('borderWidth', 'thin');
        $('.desktopbuttons').css('borderColor', '#ff0000');
        $('.desktopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.laptopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.laptopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.laptopbuttons').css('opacity', '1');
        $('.laptopbuttons').css('border', 'solid');
        $('.laptopbuttons').css('borderWidth', 'thin');
        $('.laptopbuttons').css('borderColor', '#5c5c9b');
        $('.laptopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.mycartcontainer').slideDown(300);
        $('.hpvictuscart').removeClass('hide');
        
    })
}
{
    $('#lenovov14g3cartbutton').click(function(){
        $('.container').css('display', 'none');
        $('.laptopcontainer').addClass('defaultposition');

        $('.desktopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.desktopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.desktopbuttons').css('opacity', '1');
        $('.desktopbuttons').css('border', 'solid');
        $('.desktopbuttons').css('borderWidth', 'thin');
        $('.desktopbuttons').css('borderColor', '#ff0000');
        $('.desktopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.laptopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.laptopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.laptopbuttons').css('opacity', '1');
        $('.laptopbuttons').css('border', 'solid');
        $('.laptopbuttons').css('borderWidth', 'thin');
        $('.laptopbuttons').css('borderColor', '#5c5c9b');
        $('.laptopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.mycartcontainer').slideDown(300);
        $('.lenovov14g3cart').removeClass('hide');
        
    })
}
{
    $('#lenovov15cartbutton').click(function(){
        $('.container').css('display', 'none');
        $('.laptopcontainer').addClass('defaultposition');

        $('.desktopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.desktopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.desktopbuttons').css('opacity', '1');
        $('.desktopbuttons').css('border', 'solid');
        $('.desktopbuttons').css('borderWidth', 'thin');
        $('.desktopbuttons').css('borderColor', '#ff0000');
        $('.desktopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.laptopbuttons').mouseover(function(){$(this).css('opacity', '0.5');});
        $('.laptopbuttons').mouseout(function(){$(this).css('opacity', '1');});
        $('.laptopbuttons').css('opacity', '1');
        $('.laptopbuttons').css('border', 'solid');
        $('.laptopbuttons').css('borderWidth', 'thin');
        $('.laptopbuttons').css('borderColor', '#5c5c9b');
        $('.laptopbuttons').css('boxShadow', '0 0 10px rgba(0, 0, 0, 1.0)');

        $('.mycartcontainer').slideDown(300);
        $('.lenovov15cart').removeClass('hide');
        
    })
}

{
    $('.assembleddesktopi73770cart').click(function(){
        $('.mycartcontainer').css('display', 'none');
        $('.assembleddesktopi73770').removeClass('hide');
        $('.assembleddesktopi73770').show({direction:"left"},300);
    })
}
{
    $('.bulloneallinonepci52400cart').click(function(){
        $('.mycartcontainer').css('display', 'none');
        $('.bulloneallinonepci52400').removeClass('hide');
        $('.bulloneallinonepci52400').show({direction:"left"},300);
    })
}
{
    $('.cpui53470cart').click(function(){
        $('.mycartcontainer').css('display', 'none');
        $('.cpui53470').removeClass('hide');
        $('.cpui53470').show({direction:"left"},300);
    })
}
{
    $('.cyntexiai74770cart').click(function(){
        $('.mycartcontainer').css('display', 'none');
        $('.cyntexiai74770').removeClass('hide');
        $('.cyntexiai74770').show({direction:"left"},300);
    })
}
{
    $('.dellinspiron3030sdesktopcart').click(function(){
        $('.mycartcontainer').css('display', 'none');
        $('.dellinspiron3030sdesktop').removeClass('hide');
        $('.dellinspiron3030sdesktop').show({direction:"left"},300);
    })
}
{
    $('.fusionitassembledi5desktopcart').click(function(){
        $('.mycartcontainer').css('display', 'none');
        $('.fusionitassembledi5desktop').removeClass('hide');
        $('.fusionitassembledi5desktop').show({direction:"left"},300);
    })
}
{
    $('.hpallinonepccart').click(function(){
        $('.mycartcontainer').css('display', 'none');
        $('.hpallinonepc').removeClass('hide');
        $('.hpallinonepc').show({direction:"left"},300);
    })
}
{
    $('.lenovoideacenteri312thgencart').click(function(){
        $('.mycartcontainer').css('display', 'none');
        $('.lenovoideacenteri312thgen').removeClass('hide');
        $('.lenovoideacenteri312thgen').show({direction:"left"},300);
    })
}
{
    $('.powerxdesktopi74770cart').click(function(){
        $('.mycartcontainer').css('display', 'none');
        $('.powerxdesktopi74770').removeClass('hide');
        $('.powerxdesktopi74770').show({direction:"left"},300);
    })
}
{
    $('.technoi52400cart').click(function(){
        $('.mycartcontainer').css('display', 'none');
        $('.technoi52400').removeClass('hide');
        $('.technoi52400').show({direction:"left"},300);
    })
}
{
    $('.technicoi54thgencart').click(function(){
        $('.mycartcontainer').css('display', 'none');
        $('.technicoi54thgen').removeClass('hide');
        $('.technicoi54thgen').show({direction:"left"},300);
    })
}
{
    $('.aceraspirelitecart').click(function(){
        $('.mycartcontainer').css('display', 'none');

        $('.aceraspirelite').removeClass('defaultposition');
        $('.aceraspirelite').show({direction:"left"},300);
    })
}
{
    $('.aceronecart').click(function(){
        $('.mycartcontainer').css('display', 'none');
        $('.acerone').removeClass('defaultposition');
        $('.acerone').show({direction:"left"},300);
    })
}
{
    $('.asusvivobookgo14cart').click(function(){
        $('.mycartcontainer').css('display', 'none');
        $('.asusvivobookgo14').removeClass('defaultposition');
        $('.asusvivobookgo14').show({direction:"left"},300);
    })
}
{
    $('.futopiaultimusprocart').click(function(){
        $('.mycartcontainer').css('display', 'none');
        $('.futopiaultimuspro').removeClass('defaultposition');
        $('.futopiaultimuspro').show({direction:"left"},300);
    })
}
{
    $('.hp15scart').click(function(){
        $('.mycartcontainer').css('display', 'none');
        $('.hp15s').removeClass('defaultposition');
        $('.hp15s').show({direction:"left"},300);
    })
}
{
    $('.hp255notebookcart').click(function(){
        $('.mycartcontainer').css('display', 'none');
        $('.hp255notebook').removeClass('defaultposition');
        $('.hp255notebook').show({direction:"left"},300);
    })
}
{
    $('.hpvictuscart').click(function(){
        $('.mycartcontainer').css('display', 'none');
        $('.hpvictus').removeClass('defaultposition');
        $('.hpvictus').show({direction:"left"},300);
    })
}
{
    $('.lenovov14g3cart').click(function(){
        $('.mycartcontainer').css('display', 'none');
        $('.lenovov14g3').removeClass('defaultposition');
        $('.lenovov14g3').show({direction:"left"},300);
    })
}
{
    $('.lenovov15cart').click(function(){
        $('.mycartcontainer').css('display', 'none');
        $('.lenovov15').removeClass('defaultposition');
        $('.lenovov15').show({direction:"left"},300);
    })
}