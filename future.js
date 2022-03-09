var job = ["Mechanic","Superhero","Programmer","Detective"];
var city = ["Austin","Dallas","NYC","LA"];
var spouse = ["Andrea","Kayla","Mia","Kimberly"];
var numKids =[1,0,3,2];
var xx = Math.floor(Math.random() * 4)

function fortune(job,city,spouse,numKids){
document.write("You will be a " + job + " in " + city + ", and married to " + spouse + " with " + numKids + " kids.");
}

fortune (job[xx],city[xx],spouse[xx],numKids[xx])