import React, {useState} from 'react';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {Wrapper} from "../styles/home";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from '@mui/icons-material/Search';
import {useActions} from "../hooks/useActions";
import {useSelector} from "react-redux";
import SingleContent from "../components/SingleContent";

const Search = () => {
    const [searchText, setSearchText] = useState('');
    const {search} = useSelector(state => state.films);
    const {fetchSearch} = useActions();


    return (
        <Box>
            <Typography variant="h5" component="div" color="primary" sx={{mb: '20px', pl: '20px'}}>Поиск</Typography>
            <Paper component="form"
                   sx={{
                       p: '2px 4px',
                       display: 'flex',
                       alignItems: 'center',
                       width: 'calc(100% - 25px)',
                       mb: '10px',
                       ml: '20px'
                   }}>
                <InputBase
                    sx={{ml: 1, flex: 1}}
                    placeholder="Поиск фильмов"
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <IconButton type="button" sx={{p: '10px'}} aria-label="search" onClick={() => fetchSearch(searchText)}>
                    <SearchIcon/>
                </IconButton>
            </Paper>
            <Wrapper>
                {
                    search.length > 0 ? search.map(item => <SingleContent key={item.id} {...item} />) :
                        <Typography variant="h5" component="div" color="primary" sx={{ml: '20px'}}>Фильмы не
                            найдены</Typography>
                }
            </Wrapper>
        </Box>
    );
};

export default Search;