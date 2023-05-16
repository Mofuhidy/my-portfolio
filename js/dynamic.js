// main work section
const overlay = document.querySelector('.overlay');
const mainWork = {
    title: 'Multi-Post Stories',
    image: './imgs/works/myWork.png',
    live: '#',
    repository: 'https://github.com/Mofuhidy',
    technology: ['Bootstrap', 'Ruby', 'HTML', 'CSS'],
    description: `A daily selection of privately personalized reads; no accounts or
              sign-ups required. has been the industry's standard dummy text
           ever since the 1500s, when an unknown printer took a standard dummy text.`,
};

const mainWorkSection = document.querySelector('#mainWork');

function mainWorkCard() {
    const mainCard = document.createElement('article');
    mainCard.classList.add('card');
    mainCard.innerHTML = `<div class="cardImg">
          <img src="${mainWork.image}" alt="img card of my work" />
        </div>
        <div class="cardContainer">
          <div class="card-content">
            <h2 class="primaryCardText">${mainWork.title}</h2>
            <p class="seconndryCardText">
             ${mainWork.description}
            </p>
          </div>
          <ul class="mainListCategoris">
          ${mainWork.technology.map((item) => `<li class="mainTags">${item}</li>`).join('')}
          </ul>
          <div class="actionBtn">
            <button type="button" class="btn mainBtn">See project</button>
          </div>
        </div>`;

    mainWorkSection.appendChild(mainCard);
}

// this function to add the details of the proejets inside the modal
function mainPopUp() {
    // define empty array to add the details to it
    const mainWorkAr = [];
    const mainPopWidow = document.createElement('section');
    mainPopWidow.classList.add('modal', 'hidden'); // add the default classes
    mainPopWidow.innerHTML = `
    <div class="modalHeader">
      <div class="title">
        <h3 class="modalTitle">${mainWork.title}</h3>
        <button class="closeBtn"><i class="fas fa-times"></i></button>
      </div>

      <ul class="mainListCategoris">
        ${mainWork.technology.map((item) => `<li class="mainTags">${item}</li>`).join('')}
      </ul>
    </div>
    <div class="modalContent">
      <div class="imgContainer">
        <img src="${mainWork.image}" alt="works image">
      </div>
      <div class="middle">
        <p>
         ${mainWork.description}
        </p>
        <div class="footer">
         <a href="${mainWork.live}"><button class="btn">See live <img src="./imgs/Icon-see-live.png" alt="see live icon"></button></a>
         <a href="${mainWork.repository}"><button class="btn">See source <img src="./imgs/giticon.png" alt="github icon"></button></a>
        </div>
      </div>
    </div>
    `;

    mainWorkAr.push(mainPopWidow);

    return mainWorkAr;
}

// for declare the function that pop the window on see project button
function forMainModal() {
    // here we make selector all to return an array value so we can iterate through it
    const showPro = document.querySelectorAll('.mainBtn');

    // define a variable to have the window details
    const popWindow = mainPopUp();

    // loop throgh the projects buttons
    for (let index = 0; index < showPro.length; index += 1) {
        // add the event to each see project button
        showPro[index].addEventListener('click', () => {
            // remove the default classes
            popWindow[index].classList.remove('hidden');
            overlay.classList.remove('hidden');

            // append the detail window to the work section
            mainWorkSection.appendChild(popWindow[index]);

            const close = document.querySelectorAll('.closeBtn');

            close.forEach((btn) => {
                btn.addEventListener('click', () => {
                    btn.parentElement.parentElement.parentElement.classList.add('hidden');
                    overlay.classList.add('hidden');
                });
            });
        });
    }
}

mainWorkCard();
forMainModal();

// end fo the main work section