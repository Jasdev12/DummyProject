import React from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
const Create = () =>{
    return(
        <form>
            <Form.field>
                <label>First Name</label>
                <input type="text" placeholder="First Name"/>
            </Form.field>
            <Form.field>
                <label> Last Name</label>
                <input type="text" placeholder="Last Name"/>
           </Form.field>
           <Form.field>
                <Checkbox label='I agree terms and conditions'/>
               </Form.field>
             <Button type="submit">Submit</Button>

        </form>
    )
}
export default Create