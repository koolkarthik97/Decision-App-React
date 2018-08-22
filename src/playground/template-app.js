
console.log("running app.js ")

//JSX comment

var uName = "Karthik"

var objectUser = {
    name: "karthik",
    age: "21",
    friends: []
};

function getAge(age){
    if(age)
        return objectUser.age;
};

const onFormSubmit = (e)=>{
    e.preventDefault();
    const fname = e.target.elements.fname.value;
    if(fname)
        {
            objectUser.friends.push(fname);
            e.target.elements.fname.value='';
            console.log(objectUser.friends);
            render();
        }
};


const removeAll = ()=>{
    objectUser.friends = [];
    render();

};

const decideKill = ()=>{
    const option = Math.floor(Math.random() * objectUser.friends.length);
    const ans = objectUser.friends[option];
    alert(ans);
}

const render = ()=>{
const msg = (
    <div>
     <h1> This is a test . </h1>
     <h1> {uName.toUpperCase()} </h1>
     <p> {objectUser.name + " 's age is " + objectUser.age} </p>
     <p> Nationality : {objectUser.nation ? objectUser.nation : "Not Known"} </p>
     <p> Age : {getAge(objectUser.age)} </p>
     <p> rrandom info here</p>

     <p>{objectUser.friends.length > 0 ? "Friends list : " : "No list found "}</p>
     <p> list count : {objectUser.friends.length} </p>
     <ol>
     {
        objectUser.friends.map((friend)=>{
            return <li key={friend}> Friend Name : {friend} </li>
         })
     }
     </ol>
     
     
    <form onSubmit={onFormSubmit}>
        <input type="text" name="fname" />
        <button>Add friend</button>
        <button disabled={objectUser.friends.length == 0} onClick = {removeAll}>Reset list </button>
    </form>
    <button disabled={objectUser.friends.length == 0} onClick={decideKill}>Whom shoulld i kill ? </button>
    </div>
);

var divid = document.getElementById('app');
ReactDOM.render(msg,divid);
}

render();

