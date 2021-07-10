var images=["https://cdn5.vectorstock.com/i/1000x1000/49/19/grandparents-granddaughter-family-image-vector-13954919.jpg","https://cdn5.vectorstock.com/i/1000x1000/44/34/happy-family-poster-with-parents-and-two-children-vector-20694434.jpg","https://cdn1.vectorstock.com/i/1000x1000/20/35/uncle-and-aunt-happy-family-having-good-time-vector-12602035.jpg","https://thumbs.dreamstime.com/b/vector-illustration-cartoon-grandparents-grandchildren-standing-holding-hands-park-happy-day-concept-202348566.jpg"];
var names=["MY mom's parents:mom Nirmala,dad Gopal","Parents:Mom Vijaya,Dad Vishnu"," Uncul:Baskar Aunty:Sawmya" ," Great grand mother:Venketamma,Great grand father:Narayan"];
var i=0;
function update(){ 
    i++;
    var nums=4
    if(i>nums){
        i=0;
    }
    var ui=images[i];
    var un=names[i];
    document.getElementById("img1").src=ui;
    document.getElementById("name").innerHTML=un;
 }
 