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

     // Map over the newly converted NodeList we just created in our if statement above. Convert each this.cards element into a new instance of the TabCard class. Pass in a card object to the TabCard class. 
    // this.cards = Array.from(this.cards).map();


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
    // this.cardElement;
  }
  selectCard(){
    // Update the style of this.cardElement to display = "flex"
    // this.cardElement;
  }

}

/* START HERE: 

- Select all classes named ".tab" and assign that value to the tabs variable

- With your selection in place, now chain a .forEach() method onto the tabs variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each tab as a parameter

*/
let tabs = document.querySelectorAll();
