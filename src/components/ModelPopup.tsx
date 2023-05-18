import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { ButtonCustom, ButtonCustom2 } from '../page/admin/ecommerce/addProduct/AddProductStyle';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '1px solid #ced4da',
    color: '#495057',
    borderRadius: '30px',
    fontSize: '1rem',
    fontWeight: 400,
    lineHeight: 1.5,
    boxShadow: 24,
    p: 4,
};
interface Props {
    open?: boolean;
    title?: string,
    description?: string,
    setState?: React.Dispatch<React.SetStateAction<boolean>>;
    // handleClose?: () => void;
    handleOpen?: () => void;
    callback?: (params: any) => any;
}
const ModelPopup: React.FunctionComponent<Props> = (
    { open = false,
        title = "Confirm Submit",
        description = "Do you really want to submit the form?",
        handleOpen,
        setState,
        callback }: Props
) => {
    // const [open, setOpen] = React.useState(false);
    // const handleOpen = () => setOpen(true);
    const handleClose = () => setState?.(false);
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" color={"#3232b7"} variant="h4" component="h2">
                        {title}
                    </Typography>
                    <Typography id="modal-modal-description" variant='h6' sx={{ mt: 2 }}>
                        {description}
                    </Typography>
                    <Box sx={{
                        marginTop: "30px",
                        display: 'flex',
                        justifyContent: "end",
                        flexFlow: 'wrap',
                        rowGap: ".25rem",
                        columnGap: ".25rem"
                    }}>
                        <Box textAlign={"center"} margin={"0 auto"}>
                            <ButtonCustom2 type='button' variant={"danger"} onClick={handleClose}>Cancle</ButtonCustom2>
                        </Box>
                        <Box textAlign={"center"} margin={"0 auto"}>
                            <ButtonCustom type='button' onClick={callback}>Confirm</ButtonCustom>
                        </Box>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}
export default ModelPopup;