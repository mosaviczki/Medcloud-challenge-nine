import { Alert, AlertTitle } from "@mui/material"

export default function Teste() {
    return(
        <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            <strong>Preecha todos os campos!!</strong>
        </Alert>
    )

}