import  {useState} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Alert } from '@mui/material';

export default function AlertDialog() {
const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
            <Alert severity="error">
                Erro ao tentar acessar. Verifique o email e/ou senha. 
            </Alert>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="error">OK</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}