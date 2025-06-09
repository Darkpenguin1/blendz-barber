import { Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

function About() {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.8 }}
      sx={{
        backgroundColor: 'primary.main',
        borderRadius: 2,
        boxShadow: 3,
        p: { xs: 2, md: 4 },
        maxWidth: { xs: 600, md: 900, lg: 1100 }, // Wider on desktop
        mx: 'auto',
        my: 6,
      }}
    >
      <Typography variant="h2" sx={{ color: 'accent.main', fontWeight: 700 }} gutterBottom>
        About Blends Barber Shop
      </Typography>
      <Typography variant="body1" sx={{ color: '#fff' }}>
        Established in <strong>July 2024</strong>, Blends Barber Shop is one of Austin’s newest destinations for fresh cuts and great energy. 
        Our team of young, passionate barbers is dedicated to the craft and committed to creating a positive, uplifting atmosphere 
        for everyone who walks through our doors. 
        At Blends, we’re more than just barbers—we’re part of your community.
      </Typography>
    </Box>
  );


  
}

export default About;