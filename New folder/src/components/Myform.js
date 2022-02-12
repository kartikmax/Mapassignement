import React ,{useState} from 'react'
import "./Mytable.css"
import "./Mytable"

export default function Myform(){
  return (
    <div>
     <form onChange={handleAddFormChange}>
      <fieldset>
            
            <legend>
                <h3>Enter the counteries</h3>
            </legend> 
                    
                <div className="enteries">
                    Country:<input type='text'
                    className='forma'
                    name='country'
                    required='required'
                    placeholder='enter the country'/>
                </div>
                <div className="enteries">
                    Contient:<input type='text'
                    className='forma'
                    name='contient'
                    required='required'
                    placeholder='enter the contient'/>

                </div>
                <div className="enteries">
                    ISD code:<input type='number' 
                    className='forma'
                    name='isdnumber'
                    required=''
                    placeholder='enter the isd number'/>
                </div>
                <div className="enteries">
                    Capital City:<input type='text'
                    className='forma'
                    name='capitalCity'
                    required=''
                    placeholder='enter the capital city'/>
                </div>
                <button type='submit' className='.btn'>Add country</button>
                {/* <input type="submit" value="Del country"/> */}
        </fieldset>
      </form> 
    </div>
  )
}