class TabLink {
  constructor(tabElement){
    this.tabElement = tabElement;
    this.dataTab = this.tabElement.dataset.tab;
    this.cards = [];
    switch(this.dataTab) {
      case 'all':
        // console.log(this.cards, 'all');
        this.cards = document.querySelectorAll('.card');
        break;
      default:
        this.cards = document.querySelectorAll(`.card[data-tab=${this.dataTab}]`); 
        // console.log(this.cards, this.dataTab);
        break;
    }
    this.cards = Array.from(this.cards).map(card => new TabCard(card));
    
    this.tabElement.addEventListener('click', () => this.selectTab());
    }



  selectTab(){
    console.log("selected!");
    const tabs = document.querySelectorAll('.tab');
    // console.log(tabs);

    tabs.forEach(tab => {
      tab.classList.remove('active-tab');
    });
    
    const cards = document.querySelectorAll('.card');
    // console.log('cards', cards);

    cards.forEach(card => {
      card.style.display = 'none';
    })

    this.tabElement.classList.add('active-tab');
    
    this.cards.forEach(card => card.selectCard());  
  }
}

class TabCard {
  constructor(cardElement){
    // Assign this.cardElement to the cardElement DOM reference
    this.cardElement = cardElement;
    // console.log(this.cardElement, 'card element from TabCard');
  }
  //methods
  selectCard(){
    // Update the style of this.cardElement to display = "flex"
    this.cardElement.style.display = 'flex';
  }
}

const tabs = document.querySelectorAll('.tab');

tabs.forEach(tab => {
  return new TabLink(tab);
})
