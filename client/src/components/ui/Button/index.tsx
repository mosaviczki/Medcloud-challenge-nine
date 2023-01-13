import styles from './styles.module.scss'
import { ReactNode, ButtonHTMLAttributes } from 'react';
import RotateRightIcon from '@mui/icons-material/RotateRight';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    loading?: boolean;
    children: ReactNode;
}

export function Button({loading, children, ...rest}:ButtonProps){
    return(
        <button 
        className={styles.button}
        disabled={loading}
        {...rest}
        >
            { loading ? (
                <RotateRightIcon/>
            ):(
                <a className={styles.buttonText}>{children}</a>
            )} 
        </button>
    )
}
