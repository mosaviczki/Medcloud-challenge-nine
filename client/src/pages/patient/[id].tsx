import { useState, useEffect } from "react";
import { canSSRAuth } from '../../utils/canSSRAuth'
import { AuthContext } from '../../contexts/AuthContext'
import { setupAPIClient } from '../../services/api'
import { toast } from 'react-toastify'
import { useRouter } from "next/router";

type PatientsProps ={
    idpatient: string;
    name: string;
    birth: string;
    email: string;
    adress: string;
    numberAdress: string;
    district:string;
    complement:string | null;
    zipcode: string;
    city : string;
    uf: string;
}

interface HomeProps{
    patients: PatientsProps[];
}

export default function Patient({patients}: HomeProps){
    const router = useRouter();
    const {id} = router.query;
    const [description, setDescription] = useState("")
    useEffect(()=> {
        if(!router.isReady) return;
        console.log(id);
        patients.map(function(item){
            if(item.idpatient === id){
                setDescription(item.idpatient)
            }
        });
        
    }, [router.query.id, router.isReady]);

    return(
        <>
        {description}
        </>
    )
}

export const getServerSideProps = canSSRAuth(async(ctx) =>{
    const apiClient = setupAPIClient(ctx);

    const response = await apiClient.get('/listAllPatients')
    return{
        props:{
            patients: response.data
        } 
    }
})