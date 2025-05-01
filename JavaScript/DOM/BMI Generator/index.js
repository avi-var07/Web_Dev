const form = document.querySelector('form');
//const height  = parseInt(document.querySelector('#height').value); this will give empty value because it is not in the form yet, value will come after the form is submitted

form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page
    const height = parseInt(document.querySelector('#height').value); // Get the value of the height input field
    const weight = parseInt(document.querySelector('#weight').value); // Get the value of the weight input field
    const result = document.querySelector('#result'); // Get the result element to display the BMI result

    if(height===''||height<0 || isNaN(height))result.innerHTML = "Please enter a valid height"; // Display an error message if the height is invalid
    else if(weight===''||weight<0 || isNaN(weight))result.innerHTML = "Please enter a valid weight"; // Display an error message if the height is invalid
    else{
        const bmi = (weight /((height*height)/10000)).toFixed(2); // Calculate the BMI using the formula weight/(height*height) and round it to 2 decimal places
        result.innerHTML = `Your BMI is ${bmi}`; // Display the BMI result in the result element
        if(bmi<18.5)result.innerHTML += "<br> You are underweight"; // Display a message if the BMI is less than 18.5
        else if(bmi>=18.5 && bmi<=24.9)result.innerHTML += "<br> You are normal"; // Display a message if the BMI is between 18.5 and 24.9
        else if(bmi>=25 && bmi<=29.9)result.innerHTML += "<br> You are overweight"; // Display a message if the BMI is between 25 and 29.9
        else result.innerHTML += "<br> You are obese"; // Display a message if the BMI is greater than 30
    }
}); 