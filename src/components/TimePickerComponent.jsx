import React, { useState } from 'react';
import TimePicker from 'react-time-picker';
import { Box } from '@chakra-ui/react';

function TimePickerComponent() {
  const [time, setTime] = useState('10:00');

  const handleTimeChange = (newTime) => {
    setTime(newTime);
  };

  return (
    <Box w="100%" padding="5px">
      <TimePicker
        w="100%"
        onChange={handleTimeChange}
        value={time}
        clearIcon={null}
        />
    </Box>
  );
}

export default TimePickerComponent;
