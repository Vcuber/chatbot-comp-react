import { TextField, Box, Tab, Button } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import React from 'react' 

function SPCenter() {

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


  return (
    <div>
        <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="Tabs">
                <Tab label="search by tag" value="1" />
                <Tab label="search by question" value="2" />
            </TabList>
            </Box>
            <TabPanel value="1">
                <br /><br />
                <h4>Search Intent</h4>
                <br /><br />
                <TextField 
                    name="tag"
                    label="Search by Tag"
                    variant='outlined'
                    sx = {{ width: '70%'}}
                    margin="dense"
                />
                <br /><br />
                <Button type="submit" variant="contained">Search</Button>
            </TabPanel>
            <TabPanel value="2">
                <br /><br />
                <h4>Search Intent</h4>
                <br /><br />
                <TextField 
                    name="tag"
                    label="Search by Question"
                    variant='outlined'
                    sx = {{ width: '70%'}}
                    margin="dense"
                />
                <br /><br />
                <Button type="submit" variant="contained">Search</Button>
            </TabPanel>
        </TabContext>
        </Box>
    </div>
  )
}

export default SPCenter