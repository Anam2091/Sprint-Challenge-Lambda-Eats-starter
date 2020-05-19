import React, { useState, useEffect } from 'react';
import * as Yup from "yup";
import Button from 'react-bootstrap/Button';




const formSchema = Yup.object().shape({
    Name: Yup
    .string()
    .min(2, "Name must be at least 2 characters long.")
    
    

  });
const PizzaFormy = props => {
const [formysecOn, setformysecOn] = useState({Name:"", Size:"",Cheese:"",Pepporoni:"",Mushroom:"",Veggie_works:"",Special_Instructions:"",})

const [errors, setErrors] = useState({
    Name: ""
    
  });

  useEffect(() => {
    /* We pass the entire state into the entire schema, no need to use reach here. 
    We want to make sure it is all valid before we allow a user to submit
    isValid comes from Yup directly */
    formSchema.isValid(formysecOn).then(valid => {
        console.log(valid)
      //setButtonDisabled(!valid);
    });
  }, [formysecOn]);
const handleNameChange = e => {
    setformysecOn({ ...formysecOn, Name: e.target.value });
    Yup
      .reach(formSchema, e.target.name)
      //we can then run validate using the value
      .validate(e.target.value)
      // if the validation is successful, we can clear the error message
      .then(valid => {
        setErrors({
          ...errors,
          Name: ""
        });
      })
      .catch(err => {
        if(err){
          setErrors({
            ...errors,
            Name: err.errors[0]
          });
        }
      });
}

const handleSizeChange = event => {
    setformysecOn({ ...formysecOn, Size: event.target.value });
}    

const handleCheeseChange = event => {
    setformysecOn({...formysecOn, Cheese: event.target.value });
 }

const handlePepporoniChange = event => {
    setformysecOn({ ...formysecOn, Pepporoni: event.target.value });
}
const handleMushroomChange = event => {
    setformysecOn({ ...formysecOn, Mushroom: event.target.value });
}
const handleVeggieWorksChange = event => {
    setformysecOn({ ...formysecOn, Veggie_works: event.target.value });
}
const handleChange = event => {
    setformysecOn({ ...formysecOn, Veggie_works: event.target.value });
}
const handleSpecial_InstructionsChange= event => {
    setformysecOn({ ...formysecOn, Special_Instructions: event.target.value });
}
  
const handleSubmit = event => {
    event.preventDefault();
    console.log(formysecOn);
    //props.AddPeople({
    //...formysecOn 
    //})
  };

return(
<div>
 <form onSubmit={event => handleSubmit(event)}>

     <label>
         Name:
     <input id ="abc" type = "text" name="Name" onChange={handleNameChange}>
    </input>
    {errors.Name.length > 0 ? (<p className="error">{errors.Name}</p>) : null}

     </label>

     <select id="pizzasize" name="pizzasize" onChange={handleSizeChange}>
    <option value="Small">Small</option>
    <option value="Medium">Medium</option>
    <option value="Large">Large</option>
    <option value="ExtraLarge">Extra Large</option>
   
  </select>
  <label>
    Cheese:
    <input id = "cheeseid"
    type="checkbox"

    onChange={handleCheeseChange} />
</label>

<label>
    Pepporoni:
    <input id="pepid"
    type="checkbox"
  
    onChange={handlePepporoniChange} />
</label>
     
<label>
   Mushroom:
    <input id = "mushid"
        type="checkbox"
        
        onChange={handleMushroomChange} />
</label>

<label>
    Veggie Works:
    <input
        type="checkbox"
        
        onChange={handleVeggieWorksChange} />
</label>

<label>
         Special Instructions:
     <input type = "text"
     onChange={handleSpecial_InstructionsChange}>
    </input>
     </label>


     <Button id= "buttid"variant="success" type='submit'>ORDER</Button>
</form>
</div>
)

}




export default PizzaFormy;