interface Observer{
    update:(data: any) => void;
}

interface Subject{
    subscribe: (observer: Observer)=>void;
    unsubscribe: (observer: Observer)=>void;
}

class BitcoinPrice implements Subject{
    obserbers:Observer[] =[];
    
    constructor(){
        const el:HTMLInputElement = document.querySelector('#value');
        el.addEventListener('input', ()=>{
            this.notify(el.value)
        })
    }

    subscribe(observer:Observer){
        this.obserbers.push(observer)
    }

    unsubscribe(obserber: Observer){
        const index = this.obserbers.findIndex(obs=> obs == obserber)

        this.obserbers.splice(index, 1);

    }

    notify (data:any){
        this.obserbers.forEach(obs=> obs.update(data))
    }
}

class PriceDisplay implements Observer{
    private el:HTMLElement;
    
    constructor(){
        this.el = document.querySelector('#precio')
    }
    
    update(data:any){
        this.el.innerText = data;
    }
}

const value = new BitcoinPrice();
const display = new PriceDisplay();

value.subscribe(display);

setTimeout(()=>{
    value.unsubscribe(display);
}, 5000)
