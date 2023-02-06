import { FiArrowLeft, FiArrowRight, FiSunrise } from "react-icons/fi";
import Header from '../../components/partials/Header'
import Footer from '../../components/partials/Footer/Footer'
import Niyat from "../../components/forNamaz/womenComponent/Niyat";
import ReactSwipe from 'react-swipe';
import Takbir from "../../components/forNamaz/womenComponent/Takbir";
import Kuyam from "../../components/forNamaz/womenComponent/Kuyam";
import Kuraat from "../../components/forNamaz/womenComponent/Kuraat";
import Ruku from "../../components/forNamaz/womenComponent/Ruku";
import Stay from "../../components/forNamaz/womenComponent/Stay";
import Sajda1 from "../../components/forNamaz/womenComponent/Sajda1";
import Sitting from "../../components/forNamaz/womenComponent/Sitting";
import Sajda2 from "../../components/forNamaz/womenComponent/Sajda2";
import Kuyam2 from "../../components/forNamaz/womenComponent/Kuyam2";
import Tashahud from "../../components/forNamaz/womenComponent/Tashahud";
import Salam from "../../components/forNamaz/womenComponent/Salam";
import React from "react";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Tashahud1 from "../../components/forNamaz/womenComponent/Tashahud1";
import Dua from "../../components/forNamaz/womenComponent/Dua";
import Kuraat3 from "../../components/forNamaz/womenComponent/Kuraat3";
import { BsCloudSunFill } from "react-icons/bs";


function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

const Asr = () => {
    const [value, setValue] = React.useState(0)
    const handleChange = (event, newValue) => {
      setValue(newValue);
    }
    let reactSwipeEl;
    return (
        <div>
            <Header/>
                <div className="container mt-10">
                    <div className="container mb-5 md:flex justify-between gap-5 items-center bg-white fixed top-[64px] py-5 z-10">
                        <div className="flex gap-5 items-center">
                            <BsCloudSunFill size={60}/>
                            <div>
                                <h1 className="font-bold text-3xl">АСР</h1>
                                <p className="text-xl">Послеполуденный намаз</p>
                            </div>
                        </div>
                        <div className="my-5">
                          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                  <Tab label="4 ракаата фард" {...a11yProps(0)} />
                              </Tabs>
                          </Box>
                        </div>
                        <div>
                            <button  onClick={() => reactSwipeEl.prev()}><FiArrowLeft size={40}/></button>
                            <button  onClick={() => reactSwipeEl.next()}><FiArrowRight size={40}/></button>
                        </div>
                    </div>
                    <Box sx={{ width: '100%' }}>
                    <TabPanel value={value} index={0}>
                    <div className="mt-[115px]">
                            <div className="">
                                <ReactSwipe
                                    className="carousel"
                                    swipeOptions={{ continuous: false }}
                                    ref={el => (reactSwipeEl = el)}>

                                    <div><Niyat/></div>
                                    <div><Takbir/></div>
                                    <div><Kuyam/></div>
                                    <div><Kuraat/></div>
                                    <div><Ruku/></div>
                                    <div><Stay/></div>
                                    <div><Sajda1/></div>
                                    <div><Sitting/></div>
                                    <div><Sajda2/></div>
                                        <div className="text-3xl font-bold text-center">2 раакат</div>
                                    <div><Kuyam2/></div>
                                    <div><Kuraat/></div>
                                    <div><Ruku/></div>
                                    <div><Stay/></div>
                                    <div><Sajda1/></div>
                                    <div><Sitting/></div>
                                    <div><Sajda2/></div>
                                    <div><Tashahud1/></div>
                                        <div className="text-3xl font-bold text-center">3 раакат</div>
                                    <div><Kuyam2/></div>
                                    <div><Kuraat3/></div>
                                    <div><Ruku/></div>
                                    <div><Stay/></div>
                                    <div><Sajda1/></div>
                                    <div><Sitting/></div>
                                    <div><Sajda2/></div>
                                        <div className="text-3xl font-bold text-center">4 раакат</div>
                                    <div><Kuyam2/></div>
                                    <div><Kuraat3/></div>
                                    <div><Ruku/></div>
                                    <div><Stay/></div>
                                    <div><Sajda1/></div>
                                    <div><Sitting/></div>
                                    <div><Sajda2/></div>
                                    <div><Tashahud/></div>
                                    <div><Salam/></div>
                                    <div><Dua/></div>
                                </ReactSwipe>
                            </div>
                        </div>
                    </TabPanel>
                </Box>
                    <p className="mt-10 container">Источник: <span><a className="text-primary-900" href="https://azan.ru/">azan.ru</a></span></p>
                </div>
            <Footer/>
        </div>
    )
}

export default Asr