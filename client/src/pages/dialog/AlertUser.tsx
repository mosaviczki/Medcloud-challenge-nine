import TextField from '@mui/material/TextField';
import { Dialog, Button, DialogActions, DialogContent, DialogTitle, Alert } from '@mui/material';

export function WarningDate(props) {
    const { open, setOpen } = props;

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Alert</DialogTitle>
            <DialogContent>
                <Alert severity='warning'>
                    Preencha todos os campos obrigatórios '*'
                </Alert>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>OK</Button>
            </DialogActions>
        </Dialog>
    )
}