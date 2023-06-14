import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function BasicAlerts(props) {
    const { error, setError } = props;

  return (
    <Stack sx={{ width: '30%',  margin:"auto",marginBottom:"10px", height:"5px" }}>
      <Alert severity="error"  onClose={() => setError("")}>{error}</Alert>
    </Stack>
  );
}