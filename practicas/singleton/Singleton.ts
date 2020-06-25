class Singleton {
    private static instance: Singleton;
    datas:number;

    private constructor(){
        this.datas = 12;
    }

    static getInstance(){
        if(!Singleton.instance){
            Singleton.instance = new Singleton();
        }

        return Singleton.instance;
    }
}

export default Singleton