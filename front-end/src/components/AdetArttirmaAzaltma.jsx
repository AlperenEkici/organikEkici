import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Fab } from '@mui/material';


const AdetArttirmaAzaltma = () => {
  const [adet, setAdet] = useState(1);

  const arttir = () => {
    setAdet(adet + 1);
  };

  const azalt = () => {
    if (adet > 0) {
      setAdet(adet - 1);
    }
  };

  const handleChange = (event) => {
    const yeniAdet = parseInt(event.target.value, 10);
    if (!isNaN(yeniAdet)) {
      setAdet(yeniAdet);
    }
  };

  return (
    <div>
      <Fab size='small' onClick={azalt} sx={{ marginTop: '7px', bgcolor: '#bfbfbf', color: 'black' }}>
        <RemoveIcon />
      </Fab>

      <TextField

        sx={{ width: '50px' }}
        value={adet}
        onChange={handleChange}
      />
      <Fab size='small' onClick={arttir} sx={{ marginTop: '7px', bgcolor: '#bfbfbf', color: 'black' }} >
        <AddIcon />
      </Fab>
    </div>
  );
};

export default AdetArttirmaAzaltma;