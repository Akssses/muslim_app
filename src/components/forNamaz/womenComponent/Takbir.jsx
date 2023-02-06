import Image from "next/image"
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

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
  
  

const Takbir = () => {
    const [value, setValue] = React.useState(0)
    const handleChange = (event, newValue) => {
      setValue(newValue);
    }

    return (
        <main>
            <div className="mt-[60px] md:mt-0">
                <section className="flex justify-between items-center bg-primary-800 rounded-2xl px-5 py-2">
                    <div >
                        <h1 className="text-2xl font-bold">ТАКБИР</h1>
                        <p>Вступление в намаз</p>
                    </div>
                </section>
                <section className="mt-5">
                    <div className="mt-5 rounded-3xl">
                        <h2 className="font-semibold">Повернувшись в направлении киблы, мусульманка поднимает ладони до уровня плеч и произносит первый такбир:</h2>
                        <h1 className="font-bold text-primary-900 text-xl">«Аллаху Акбар»</h1>
                    </div>
                    <p className="mt-5">Первый такбир – «такбиратуль-ихрам» – это вступление в намаз. С этого момента мусульманка входит в состояние молитвы и не может до ее завершения выйти из нее без уважительной причины.</p>
                </section>
            </div>
            <div className="mt-10 md:flex">
                <Image src="/w-namaz/takbir.png" width={450} height={600} alt="ТАКБИР"/>
                <div className="mt-10">
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="Транскрипция" {...a11yProps(0)} />
                            <Tab label="Перевод" {...a11yProps(1)} />
                            <Tab label="Арабский" {...a11yProps(2)} />
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                        <p className="text-2xl font-bold">
                        Аллаху Акбар!
                        </p>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <p className="text-2xl font-bold">
                        Аллах Велик!
                        </p>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <p className="text-2xl font-bold">
                        الله أكبر
                        </p>
                    </TabPanel>
                </Box>
                </div>
            </div>
        </main>
    )
}

export default Takbir