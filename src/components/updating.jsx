import {Form} from 'react-router-dom'
export default function Updating() {
    return (<>
        <Form className='addingForm'>
            <input type="text" name="photoUrl" placeholder='Url image...'/>
            <input type="text" name="description" placeholder='Description...'/>
            <input type="text" name="price" placeholder='Price...'/>
            <button> עדכן </button>
        </Form>
    </>)
}