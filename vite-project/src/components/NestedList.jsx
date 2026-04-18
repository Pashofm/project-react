import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export default function NestedList() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{
        width: '100%', 
        maxWidth: 360,
        bgcolor: '#1a1a1a' 
      }}
      component="nav"
      subheader={
        <ListSubheader 
          component="div"
          sx={{
            bgcolor: 'transparent',
            color: '#9ca3af',
            fontWeight: 500,
            fontSize: '0.9rem',
            letterSpacing: '0.5px',
          }}
        >
          Habilidades
        </ListSubheader>
      }
    >
      {[
        "JAVASCRIPT",
        "CSS",
        "HTML",
        "Linux",
        "C#",
        "SQL",
        "JAVA",
      ].map((item) => (
        <ListItemButton
          key={item}
          sx={{
            borderRadius: '8px',
            marginBottom: '4px',
            color: '#e5e5e5',
            transition: 'all 0.2s ease',
            '&:hover': {
              backgroundColor: '#2a2a2a',
            },
          }}
        >
          <ListItemText 
            primary={item}
          />
        </ListItemButton>
      ))}

    </List>
  );
}


