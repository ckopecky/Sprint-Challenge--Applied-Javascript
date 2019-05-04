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

    // Add a click event that invokes this.selectTab
    // this.tabElement.addEventListener();
  }

  selectTab(){

    // Select all elements with the .tab class on them
    // const tabs = document.querySelectorAll();
    
    // Iterate through the NodeList removing the .active-tab class from each element
    // tabs.forEach()

    // Select all of the elements with the .card class on them
    // const cards = ;

    // Iterate through the NodeList setting the display style each one to 'none'
    // cards.forEach()
    
    // Add a class of ".active-tab" to this.tabElement
    // this.tabElement;
  
    // Notice we are looping through the this.cards array and invoking selectCard() from the TabCard class. Just un-comment the code and study what is happening here.
    // this.cards.forEach(card => card.selectCard());
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
