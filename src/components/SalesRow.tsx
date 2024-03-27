import { useSalesStore } from "../stores/salesStore"
import { useNavigate } from "react-router-dom";

export default function SalesRow({id}: {id: number}) {
    const saleData = useSalesStore(state => state.salesData ? state.salesData[id]: null)
    const navigate = useNavigate();
    const parseStatus = (a: number): string => {
        if(a===3){
            return 'Pending'
        }
        if(a===1){
            return 'Canceled'
        }
        if(a===2){
            return "Approved"
        }
        return "Wtf"
    }

    const handleRedirect = () => {
        console.log("click")
        navigate("/dashboard/sale/" + id);
    }

    return (
        <div onClick={handleRedirect}> 
            <p> {saleData?.event_name} </p>
            <p> {saleData?.ticket_user.fullName} </p>
            <p> {saleData?.ticket_user.email} </p>
            <p> {saleData?.ticket_user.phone} </p>
            <p> {parseStatus(saleData?.status||3)} </p>
        </div>
    )
}