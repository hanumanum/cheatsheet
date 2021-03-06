// Ավելացված ECMAScript 2015 ստանդարտում, class֊ը "սինտակտիկ շաքար" է JavaScript֊ում 
// կիրառվող պրոտոտիպերի վրա հիմնված ժառանգականության վրա  
class Queue {    
  // constructor մեթոդը հատուկ մեթոդ է կլասսով ստեղծված օբյեկտը ինիցիալիզացնելու համար։ 
  // Ամեն կլասսում հնարավոր է հայտարարել միայն մեկ constructor
  constructor() {  
    // տվյալ կլասսի համար ստեղծում է դատարկ array  
    this.elements = []  
    // վերագրում է 0 տվյալ կլասսի count֊ին   
    this.count = 0  
  }  
  
  // կլասսի մեթոդ, որը վերցնում է մեկ արգումենտ element անունով  
  enqueue(element) {  
    // վերևում հայտարարված elements array֊ին ավելացնում է նոր էլեմենտ  
    this.elements.push(element)  
    // ինչից հետո թարմացնում է array֊ում գտնվող էլեմենտների թիվը խորհրդանշող փոփոխականը  
    this.count += 1  
  }  
  
  // կլասսի մեթոդ  
  dequeue() {  
    // եթե count փոփոխականի արժեքը զրոյից բարձր է, նվազեցնում է այն մեկով  
    if(this.count > 0) {  
      this.count -= 1  
    } 
    //  եթե ոչ, նետում է error, նշելով, որ դատարկ queue֊ից իհարկե հնարավոր չէ էլեմենտ հանել  
    else {  
      throw new Error("Can't dequeue from empty queue.")  
    }  
    // և հանում array֊ի վերջին էլէմենտը  
    this.elements.shift()  
  }  
  
  // վերադարձնում է queue֊ի առաջին էլեմենտը  
  peek() {  
    // եթե queue-ն դարարկ է, նետում է error
    if (this.count < 1) {
      throw new Error("Queue empty. Can't return peek element.")
    }
    return this.elements[0]  
  }  
  
  // վերադարձնում է queue֊ի վերջին էլեմենտը  
  back() { 
    // եթե queue-ն դարարկ է, նետում է error
    if (this.count < 1) {
      throw new Error("Queue empty. Can't return back element.")
    }
    return this.elements[this.elements.length - 1]  
  }  

  // վերադարձնում է queue֊ի էլեմենտների քանակը
  size() {  
    return this.count  
  }  
}  
