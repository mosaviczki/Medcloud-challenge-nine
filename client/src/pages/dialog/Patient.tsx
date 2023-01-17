import TextField from '@mui/material/TextField';
import { Dialog, Button, DialogActions, DialogContent, DialogTitle } from '@mui/material';


export function DeletePatient(open, setOpen, id) {

    const handleClose = () => {
        setOpen(false)
    }
    //alert(id)

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>EXCLUIR CONTA</DialogTitle>
            <DialogContent>
                Deseja mesmo excluir a conta?"
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancelar</Button>
                <Button onClick={handleClose}>Confirmar</Button>
            </DialogActions>
        </Dialog>
    )
}
