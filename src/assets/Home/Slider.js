
const homeRight = document.getElementById('home_right')
const slider = document.querySelector('.home_container')
const upButton = document.querySelector('.up_btn')
const downButton = document.querySelector('.down_btn')

const totalSlider = homeRight.querySelectorAll('div').length - 1



let currentSlider = 0;



upButton.addEventListener("click",function ()
{
 
    if(currentSlider == 0)
    {
        return;
    }
    currentSlider--;
    homeRight.querySelector('div').style.marginTop= `${(totalSlider - currentSlider) * -100}vh`
    
})


downButton.addEventListener("click",function ()
{
 
    if(currentSlider == totalSlider)
    {
        return;
    }
    currentSlider++;
    homeRight.querySelector('div').style.marginTop= `${(totalSlider - currentSlider) * -100}vh`
    
})













//  upButton.addEventListener("click",()=> chnageSlide('up'))
// downButton.addEventListener("click",()=> chnageSlide('down'))


// const chnageSlide = (direction) =>
// {
//     const sliderHeight = homeRight.clientHeight

//     console.log(sliderHeight);
    
//     if(direction === 'up')
//     {
//         activeSliderIndex++

//         if(activeSliderIndex > sliderLength -1)
//         {
//             activeSliderIndex = 0
//         }
//         else if(direction === 'down')
//         {
//             activeSliderIndex--

//             if(activeSliderIndex < 0)
//             {
//                 activeSliderIndex = sliderLength - 1
//             }
//         }

//     }

//     homeRight.style.transform = `translateY(-${activeSliderIndex * sliderHeight}px)`
    
    
// }
