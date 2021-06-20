//Question 1
var student={
    name: "David Rayy",
    sclass: "VI",
     rollno: 12
 }
 console.log(Object.keys(student)); //name,sclass,rollno

 //Question 2
 var student={
    name: "David Rayy",
    sclass: "VI",
     rollno: 12
 };
     delete student.rollno  // name: "David Rayy"  sclass: "VI"
     console.log(student)

// Question 3
var student={
    name: "David Rayy",
    sclass: "VI",
     rollno: 12
 };
    console.log(Object.keys(student).length)

//Question 4
var library = [
    {
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true
    },
    {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    readingStatus: true
    },
    {
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games',
    readingStatus: false
    }];
    for(i=0;i<library.length;i++)
    {
        if(library[i].readingStatus == true)
        {
             console.log("     "+library[i].author, "      " + library[i].title + "   true");
        }
        else
        {
            
            console.log( "   "+library[i].author, "    " + library[i].title + "   false");
        }
    }

//Question 5

console.log(ene(1,2).toFixed(4));
      function ene(r,h)
      {
          return (Math.PI*r*r*h);
      }


//Question 6
var library = [ { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 }, 
{ title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 }, 
{ title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }];
function compare_to_sort(x,y) 
{
if (x.title < y.title)
return -1;
if (x.title > y.title)
return 1;
return 0;
}

console.log(library.sort(compare_to_sort));
