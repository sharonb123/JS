


// function asking for marks

function Grademarks(marks) //argument to accept marks
{
    if(marks < 50)
    {
        alert('F')
    } 
    else if(marks = 50 && marks<= 59)
    {
        alert('E')
    }
    else if(marks= 60 && marks <= 69)
    {
        alert('D')
    }
    else if(marks= 70 && marks<= 79)
    {
        alert('C')
    }
    else if(marks= 80 && marks<= 89)
    {
        alert('B')
    }
    else if(marks >= 90)
    {
        alert('A')
    }

}
let marks=prompt("please enter mark:");

// calling function
Grademarks();

