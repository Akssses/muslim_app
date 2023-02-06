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
  
  

const Sitting = () => {
    const [value, setValue] = React.useState(0)
    const handleChange = (event, newValue) => {
      setValue(newValue);
    }

    return (
        <main>
            <div className="mt-[60px] md:mt-0">
                <section className="flex justify-between items-center bg-primary-800 rounded-2xl px-5 py-2">
                    <div>
                        <h1 className="text-2xl font-bold">СИДЕНИЕ</h1>
                    </div>
                </section>
                <section className="mt-5">
                  <p className="mt-5">После первого саджда сядьте левым бедром на пол, произнося: &#34;Аллаху Акбар&#34;, - при выпрямлении, сложив обе ноги справа от туловища и разместив левую ногу на голени правой.</p>
                  <p className="mt-5">Положите ладони, держа пальцы близко друг к другу, чтобы между теми не было свободного пространства. </p>
                  <p className="text-danger-900 border p-5 rounded-xl mt-5">Совершение второго земного поклона без полноценного выпрямления – лишь чуть приподняв голову –  недопустимо!</p> 
                  <p className="mt-5">Взгляд следует направить на свои колени. Оставайтесь в таком положении столько времени, чтобы можно было хотя бы один раз произнести: «СубханаЛлах».</p>
                  <div className="mt-5 rounded-3xl">
                        <h2 className="font-semibold">Можно произнести:</h2>
                        <h1 className="font-bold text-primary-900 text-xl">«Робби гфир ли, робби гфир ли», –</h1>
                    </div>
                </section>
            </div>
            <div className="mt-10 md:flex">
                <Image src="/w-namaz/sitting.png" width={450} height={600} alt="ВЫПРЯМЛЕНИЕ"/>
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
                        <p className="text-2xl font-bold mt-5">Робби гфир ли</p>
                        <p className="text-2xl font-bold mt-5">Робби гфир ли</p>

                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <p className="text-2xl font-bold mt-5">О мой Господь! Прости меня!</p>
                        <p className="text-2xl font-bold mt-5">О мой Господь! Прости меня!</p>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <p className="text-2xl font-bold text-right mt-5">رَّبِّ اغْفِرْ لِي</p>
                        <p className="text-2xl font-bold text-right mt-5">رَّبِّ اغْفِرْ لِي</p>
                    </TabPanel>
                </Box>
                </div>
            </div>
        </main>
    )
}

export default Sitting