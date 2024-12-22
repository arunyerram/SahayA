// import React from 'react';
// import { Container, Grid, Typography, Box, Link, IconButton } from '@mui/material';
// import { Facebook, Twitter, Google, Instagram, LinkedIn, GitHub } from '@mui/icons-material';

// const Footer = () => {
//   return (
//     <Box sx={{ backgroundColor: '#929fba', color: 'white', paddingTop: 4 ,paddingBottom:0}}>
//       <Container maxWidth="lg">
//         <Grid container spacing={4}>
//           {/* Company Information */}
//           <Grid item xs={12} md={3}>
//             <Typography variant="h6" gutterBottom>
//               Sahaya
//             </Typography>
//             <Typography variant="body2">
//             We are committed to providing support for mental health awareness by detecting early signs of anxiety, depression, and other mental health issues. Our AI-powered chatbot offers real-time conversations to guide users and recommend professional help when necessary. Your mental well-being matters, and we’re here to help you recognize when support is needed.
//             </Typography>
//           </Grid>

//           {/* Products Section */}
//           <Grid item xs={12} md={2}>
//             <Typography variant="h6" gutterBottom>
//               Products
//             </Typography>
//             <ul>
//               <li><Link href="#" color="inherit">Chatbot</Link></li>
//               <li><Link href="#" color="inherit">Consultancy</Link></li>
//               <li><Link href="#" color="inherit">Real-Time Mood Detection</Link></li>
//               <li><Link href="#" color="inherit">Personalized Support Recommendations</Link></li>
//             </ul>
//           </Grid>

//           {/* Contact Section */}
//           <Grid item xs={12} md={3}>
//             <Typography variant="h6" gutterBottom>
//               Contact
//             </Typography>
//             <Typography variant="body2">
//               <strong>Address:</strong> Hyderabad, Hyd 501401, INDIA
//             </Typography>
//             <Typography variant="body2">
//               <strong>Email:</strong> ProudIndian@gmail.com
//             </Typography>
//             <Typography variant="body2">
//               <strong>Phone:</strong> +91 1234554321
//             </Typography>
//             <Typography variant="body2">
//               <strong>Fax:</strong> + 01 234 567 89
//             </Typography>
//           </Grid>

//           {/* Social Media Section */}
//           <Grid item xs={12} md={2}>
//             <Typography variant="h6" gutterBottom>
//               Follow us
//             </Typography>
//             <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2 }}>
//               <IconButton color="primary" href="#!" sx={{ backgroundColor: '#3b5998' }}>
//                 <Facebook />
//               </IconButton>
//               <IconButton color="primary" href="#!" sx={{ backgroundColor: '#55acee' }}>
//                 <Twitter />
//               </IconButton>
//               <IconButton color="primary" href="#!" sx={{ backgroundColor: '#dd4b39' }}>
//                 <Google />
//               </IconButton>
//               <IconButton color="primary" href="#!" sx={{ backgroundColor: '#ac2bac' }}>
//                 <Instagram />
//               </IconButton>
//               <IconButton color="primary" href="#!" sx={{ backgroundColor: '#0082ca' }}>
//                 <LinkedIn />
//               </IconButton>
//               <IconButton color="primary" href="#!" sx={{ backgroundColor: '#333333' }}>
//                 <GitHub />
//               </IconButton>
//             </Box>
//           </Grid>
//         </Grid>

//         {/* Copyright */}
//         <Box sx={{ textAlign: 'center', paddingY: 2, backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
//           <Typography variant="body2">
//             © 2024 Copyright: <Link href="https://cdn.botpress.cloud/webchat/v2.2/shareable.html?configUrl=https://files.bpcontent.cloud/2024/12/11/07/20241211074923-A6NCKAAG.json" color="inherit">Sahaya.com</Link>
//           </Typography>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default Footer;




import React from 'react';
import { Container, Grid, Typography, Box, Link, IconButton } from '@mui/material';
import { Facebook, Twitter, Google, Instagram, LinkedIn, GitHub } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box 
      sx={{ 
        backgroundColor: '#929fba', 
        color: 'white', 
        paddingTop: 1, 
        paddingBottom: 1, 
        marginTop: 'auto' // Ensure the footer stays at the bottom of the page
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Company Information */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              Sahaya
            </Typography>
            <Typography variant="body2">
              We are committed to providing support for mental health awareness by detecting early signs of anxiety, depression, and other mental health issues. Our AI-powered chatbot offers real-time conversations to guide users and recommend professional help when necessary. Your mental well-being matters, and we’re here to help you recognize when support is needed.
            </Typography>
          </Grid>

          {/* Products Section */}
          <Grid item xs={12} md={2}>
            <Typography variant="h6" gutterBottom>
              Products
            </Typography>
            <ul>
              <li><Link href="#" color="inherit">Chatbot</Link></li>
              <li><Link href="#" color="inherit">Consultancy</Link></li>
              <li><Link href="#" color="inherit">Real-Time Mood Detection</Link></li>
              <li><Link href="#" color="inherit">Personalized Support Recommendations</Link></li>
            </ul>
          </Grid>

          {/* Contact Section */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              Contact
            </Typography>
            <Typography variant="body2">
              <strong>Address:</strong> Hyderabad, Hyd 501401, INDIA
            </Typography>
            <Typography variant="body2">
              <strong>Email:</strong> ProudIndian@gmail.com
            </Typography>
            <Typography variant="body2">
              <strong>Phone:</strong> +91 1234554321
            </Typography>
            <Typography variant="body2">
              <strong>Fax:</strong> + 01 234 567 89
            </Typography>
          </Grid>

          {/* Social Media Section */}
          <Grid item xs={12} md={2}>
            <Typography variant="h6" gutterBottom>
              Follow us
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2 }}>
              <IconButton color="primary" href="#!" sx={{ backgroundColor: '#3b5998' }}>
                <Facebook />
              </IconButton>
              <IconButton color="primary" href="#!" sx={{ backgroundColor: '#55acee' }}>
                <Twitter />
              </IconButton>
              <IconButton color="primary" href="#!" sx={{ backgroundColor: '#dd4b39' }}>
                <Google />
              </IconButton>
              <IconButton color="primary" href="#!" sx={{ backgroundColor: '#ac2bac' }}>
                <Instagram />
              </IconButton>
              <IconButton color="primary" href="#!" sx={{ backgroundColor: '#0082ca' }}>
                <LinkedIn />
              </IconButton>
              <IconButton color="primary" href="#!" sx={{ backgroundColor: '#333333' }}>
                <GitHub />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Box sx={{ textAlign: 'center', paddingY: 2, backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          <Typography variant="body2">
            © 2024 Copyright: <Link href="https://cdn.botpress.cloud/webchat/v2.2/shareable.html?configUrl=https://files.bpcontent.cloud/2024/12/11/07/20241211074923-A6NCKAAG.json" color="inherit">Sahaya.com</Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
