const arrowFn = (str)=>{
    return str.split(' ')[0];
}

const simpleFn = (x) => x*x;

console.log(arrowFn("karthik nathan"));
console.log(simpleFn(4));

const user={
    name: "karthik",
    cities: ['MAA','NY','DXB'],
    printCities(){
        this.cities.forEach((city)=>{
            console.log("lived in "+city);
        })
    },
    mapCity(){
        return this.cities.map((city)=>city+"!");
     }
};

console.log(user.mapCity());