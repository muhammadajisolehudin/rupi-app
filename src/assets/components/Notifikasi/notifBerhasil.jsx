
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CheckIcon from '@mui/icons-material/Check';

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
//     •
//   </Box>
// );

export const NotifBerhasil = ({ titleContent }) => {
  return (
    <Card sx={{ minWidth: 275, height:"100%", border:"none", boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2), 2px 0px 4px rgba(0, 0, 0, 0.2)' }}>
      <CardContent sx={{ p:5, display:"flex", flexDirection:"column", alignItems:"center", height:"100%" }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
          { titleContent }
        </Typography>
        <Box sx={{ height:"100%", width:"100%", display:"flex", alignItems:"center", justifyItems:"center" }}>
            <Box sx={{ width: 150, 
                height: 150, 
                borderRadius: '50%', 
                backgroundColor: '#ffffff', 
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', 
                margin:"auto",   display: 'flex',
                alignItems: 'center',
                justifyContent: 'center' }} >
                <Box sx={{ width: 120, 
                    height: 120, 
                    borderRadius: '50%', 
                    backgroundColor: '#12D79C', 
                    boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.1), 0px -6px 10px rgba(0, 0, 0, 0.1)',
                    display:"flex",   
                    alignItems: 'center',
                    justifyContent: 'center' }} >
                    <CheckIcon sx={{ fontSize: 70, color: '#ffffff' }} />
                </Box>
            </Box>
        </Box>
       
         
       {/* lingkaran  */}
       
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}
