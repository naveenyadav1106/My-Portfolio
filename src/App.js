import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './utils/Theme.js'
import { BrowserRouter as Router } from 'react-router-dom';
import { useState } from 'react';

//components
import Navbar from './Components/Navbar/Index';
import Hero from './Components/HeroSection'
import Skills from './Components/Skills'
import Education from './Components/Education'
import Projects from './Components/Projects';
import Footer from './Components/Footer'
import ProjectDetails from './Components/ProjectsDetails'

const Body = styled.div`
background-color: ${({ theme }) => theme.bg};
width:100%;
height:100%;
overflow-x:hidden;
`;

const Wrapper = styled.div`
background:linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
width:100%;
clip-path:polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`;


function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
        <Navbar />
        <Body>
          <Hero />
          <Wrapper>
            <Skills />
            <Education />
          </Wrapper>
          <Wrapper>
            <Projects openModal={openModal} setOpenModal={setOpenModal} />
          </Wrapper>
          <Footer />
          {openModal.state &&
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          }
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
