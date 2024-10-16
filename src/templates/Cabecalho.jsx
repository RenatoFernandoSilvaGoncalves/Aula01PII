import { Alert } from "react-bootstrap";

export default function Cabecalho(props){
    return (
        <div>
            <Alert className="text-center"><h2>{ props.texto || "Texto não informado" }</h2></Alert>
        </div>
    );

}