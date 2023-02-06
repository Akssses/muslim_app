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
  
  

const Sajda2 = () => {
    const [value, setValue] = React.useState(0)
    const handleChange = (event, newValue) => {
      setValue(newValue);
    }

    return (
        <main>
            <div className="mt-[60px] md:mt-0">
                <section className="flex justify-between items-center bg-primary-800 rounded-2xl px-5 py-2">
                    <div>
                        <h1 className="text-2xl font-bold">САДЖДА</h1>
                        <p>2 земной поклон</p>
                    </div>
                </section>
                <section className="mt-5">
                   <p className="mt-5">Затем мусульманка произносит такбир «Аллаху Акбар» и совершает второй суджуд. Он выполняется точно так же, как и первый.
 
 После второго земного поклона женщина возвращается в вертикальное положение.
  
 Первый ракаат на этом завершается.</p>
                </section>
            </div>
            <div className="mt-10 md:flex">
                <Image src="/w-namaz/sajda.png" width={550} height={600} alt="РУКУ"/>
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
                        <p className="text-2xl font-bold mt-5">Субхана роббияль-аʼля</p>
                        <p className="text-2xl font-bold mt-5">Субхана роббияль-аʼля</p>
                        <p className="text-2xl font-bold mt-5">Субхана роббияль-аʼля</p>

                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <p className="text-2xl font-bold mt-5">Мой Всевышний Господь не имеет недостатков</p>
                        <p className="text-2xl font-bold mt-5">Мой Всевышний Господь не имеет недостатков</p>
                        <p className="text-2xl font-bold mt-5">Мой Всевышний Господь не имеет недостатков</p>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <p className="text-2xl font-bold text-right mt-5">سُبْحَانَ رَبِّيَ الْأَعْلَى</p>
                        <p className="text-2xl font-bold text-right mt-5">سُبْحَانَ رَبِّيَ الْأَعْلَى</p>
                        <p className="text-2xl font-bold text-right mt-5">سُبْحَانَ رَبِّيَ الْأَعْلَى</p>
                    </TabPanel>
                </Box>
                </div>
            </div>
        </main>
    )
}

export default Sajda2