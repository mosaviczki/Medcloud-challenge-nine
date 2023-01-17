import TextField from '@mui/material/TextField';
import { Dialog, Button, DialogActions, DialogContent, DialogTitle } from '@mui/material';


export function NewPassword(props) {
    const { open, setOpen } = props;

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>PASSWORD</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Password"
                    type="password"
                    fullWidth
                    variant="standard"
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Confirm Password"
                    type="password"
                    fullWidth
                    variant="standard"
                />
            </DialogContent>

            <DialogActions>
                <Button onClick={handleClose}>Cancelar</Button>
                <Button onClick={handleClose}>Confirmar</Button>
            </DialogActions>
        </Dialog>
    )
}


export function NewEmail(props) {
    const { open, setOpen } = props;

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>TROCAR EMAIL</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="email"
                    label="Novo email"
                    type="text"
                    fullWidth
                    variant="standard"
                />
            </DialogContent>

            <DialogActions>
                <Button onClick={handleClose}>Cancelar</Button>
                <Button onClick={handleClose}>Confirmar</Button>
            </DialogActions>
        </Dialog>
    )
}

export function NewPhone(props) {
    const { open, setOpen } = props;

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>NOVO TELEFONE</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="phone"
                    label="Novo telefone"
                    type="number"
                    fullWidth
                    variant="standard"
                />
            </DialogContent>

            <DialogActions>
                <Button onClick={handleClose}>Cancelar</Button>
                <Button onClick={handleClose}>Confirmar</Button>
            </DialogActions>
        </Dialog>
    )
}

export function DeleteUser(props) {
    const { open, setOpen } = props;

    const handleClose = () => {
        
        setOpen(false)
    }


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