import { Form } from "react-router-dom";

export default function CashRegister() {
    return (<>
        <div className="paymentDiv">
            <Form>
                <input type="text" name="id" placeholder=" ...ת.ז "/>
                <input type="text" name="location" placeholder=" ...מיקום למשלוח" />
                <h3>{ } - סהכ </h3>
                <button> תשלום </button>
            </Form>
        </div>
    </>)
}