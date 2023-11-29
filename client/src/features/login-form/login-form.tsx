import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { setIsLoggedIn, setName } from "../../slices/user-slice";

export const LoginForm = () => {
    const dispatch = useDispatch();

    const [value, setValue] = useState<string | undefined>(undefined);

    const onClick = () => {
        dispatch(setName(value));
        dispatch(setIsLoggedIn(true));
    };

    const handleClick = (
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setValue(event.target.value);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Enter") {
            dispatch(setName(value));
            dispatch(setIsLoggedIn(true));
        }
    };

    return (
        <Grid
            container
            spacing={4}
            flexDirection="column"
            alignItems="center"
            marginTop={50}
            width="100%"
        >
            <Grid xs={2}>
                <TextField
                    label="Как тебя зовут?"
                    variant="outlined"
                    onChange={handleClick}
                    onKeyDown={handleKeyDown}
                />
            </Grid>
            <Grid xs={2} marginTop="20px">
                <Button onClick={onClick} variant="outlined" onKeyDown={onClick}>
                    Войти в чат
                </Button>
            </Grid>
        </Grid>
    );
};
