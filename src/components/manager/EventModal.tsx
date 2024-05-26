import React from 'react';
import { Box, Button, Typography, Modal } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

interface EventModalProps {
  open: boolean;
  handleClose: () => void;
  item: {
    id: number;
    applicant: string;
    username: string;
    eventName: string;
    requestDate: string;
    eventDate: string;
    status: string;
  } | null;
}

const EventModal: React.FC<EventModalProps> = ({ open, handleClose, item }) => {
  console.log('Modal open:', open);
  console.log('Modal item:', item);

  if (!item) return null;

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Typography variant="h6" component="h2">
          공연명: {item.eventName}
        </Typography>
        <Typography sx={{ mt: 2 }}>
          신청자: {item.applicant}
        </Typography>
        <Typography sx={{ mt: 2 }}>
          사용자명: {item.username}
        </Typography>
        <Typography sx={{ mt: 2 }}>
          신청일: {item.requestDate}
        </Typography>
        <Typography sx={{ mt: 2 }}>
          공연일: {item.eventDate}
        </Typography>
        <Typography sx={{ mt: 2 }}>
          상태: {item.status}
        </Typography>
        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
          <Button variant="contained" onClick={handleClose} sx={{ mr: 1 }}>
            승인
          </Button>
          <Button variant="outlined" onClick={handleClose}>
            거절
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default EventModal;
