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
  
  

const Dua = () => {
    const [value, setValue] = React.useState(0)
    const handleChange = (event, newValue) => {
      setValue(newValue);
    }

    return (
        <main>
            <div>
                <section className="flex justify-between items-center bg-primary-800 rounded-2xl px-5 py-2">
                    <div>
                        <h1 className="text-2xl font-bold">Дуа</h1>
                    </div>
                </section>
                <section className="mt-5">
                    <p className="mt-5">По окончании намаза желательно произнести дуа-истигфар:</p>
                    
                </section>
            </div>
            <div className="mt-10 md:flex">
                <Image src="/w-namaz/dua.png" width={450} height={600} alt="КЫЯМ"/>
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
                        <p className="text-2xl font-bold">Астагфируллах! Астагфируллах! Астагфируллах!</p>
                        <p className="text-2xl font-bold">Аллахумма антас-салям уа минкас-салям табаракта</p>
                        <p className="text-2xl font-bold">я заль-джаляли уаль-икрам</p>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <p className="text-2xl font-bold">О Аллах, прости! О Аллах, прости! О Аллах, прости!</p>
                        <p className="text-2xl font-bold">О Аллах, Ты - мир и от Тебя - мир. Ты – Благословенный,</p>
                        <p className="text-2xl font-bold">Обладающий величием и почетом.</p>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <div className="text-right">
                            <p className="text-2xl font-bold">استغفر الله</p>
                            <p className="text-2xl font-bold">استغفر الله</p>
                            <p className="text-2xl font-bold">استغفر الله</p>
                            <p className="text-2xl font-bold">اللهم أنت السلام ومنك السلام تباركت</p>
                            <p className="text-2xl font-bold">ياذا الجلال والاكرام</p>
                        </div>
                    </TabPanel>
                </Box>
                </div>
            </div>
        </main>
    )
}

export default Dua