import SweetAlert2 from "../component/Alert/SweetAlert2";
import 'bootstrap/dist/css/bootstrap.min.css';



const Button = (text) =>{

    const handleClick = () =>{
        SweetAlert2.confirm("thanh tung", () =>{
            SweetAlert2.success("OK");
        });
    } 
    

    return (
        <button onClick={handleClick}  className="btn btn-primary">
            Show Alert
        </button>
    )
}

export {Button} 