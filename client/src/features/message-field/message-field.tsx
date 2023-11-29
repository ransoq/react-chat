import { ChangeEvent, KeyboardEvent, useState } from 'react';
import TextField from '@mui/material/TextField';

export const MessageField = () => {
    const [value, setValue] = useState<string | null>(null);

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setValue(event.target.value);
    }

    const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>): void => {
        if (event.key === "Enter") {
            
        }
    }

  return (
    <TextField
        label="Введи сообщение"
        variant="outlined"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
    />
  )
}
