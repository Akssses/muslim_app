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
  
  

const Ruku = () => {
    const [value, setValue] = React.useState(0)
    const handleChange = (event, newValue) => {
      setValue(newValue);
    }

    return (
        <main>
            <div className="mt-[60px] md:mt-0">
                <section className="flex justify-between items-center bg-primary-800 rounded-2xl px-5 py-2">
                    <div>
                        <h1 className="text-2xl font-bold">РУКУ</h1>
                        <p>Поясной поклон</p>
                    </div>
                </section>
                <section className="mt-5">
                    <div className="mt-5 rounded-3xl">
                        <h2 className="font-semibold">По окончании чтения дополнительной суры молящийся произносит такбир:</h2>
                        <h1 className="font-bold text-primary-900 text-xl">«Аллаху Акбар», –</h1>
                    </div>
                    <p className="mt-5">и совершает поясной поклон – руку.</p>
                    <p className="mt-5">В руку женщинам не обязательно полностью выравнивать спину, как мужчинам. И им не следует сгибаться так же низко, как мужчинам.</p>
                    <p className="mt-5">В положении руку мужчины должны обхватывать пальцами колени, женщинам нужно лишь положить руки на колени так, чтобы пальцы были расположены близко друг от друга, то есть чтобы между пальцами оставалось пространство.
 
 Женщины не должны держать ноги абсолютно прямыми, вместо этого им следует согнуть колени немного вперед.
  
 В положении руку мужчины должны держать руки в стороны от боков. Женщины, наоборот, должны прижимать руки к бокам.
  
 Смотреть в положении руку следует на свои ступни.</p>
                    <div className="mt-5 rounded-3xl">
                        <h2 className="font-semibold">Находясь в руку, желательно три раза тихо произнести восхваление Аллаха:</h2>
                        <h1 className="font-bold text-primary-900 text-xl">«Субхана роббияль-ʼазым»</h1>
                    </div>
                    <p className="mt-5">что значит «Великий Господь не имеет недостатков», спокойно и не торопясь..</p>
                </section>
            </div>
            <div className="mt-10 md:flex">
                <Image src="/w-namaz/ruku.png" width={550} height={600} alt="РУКУ"/>
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
                        <p className="text-2xl font-bold mt-5">Субхана роббияль-`азым</p>
                        <p className="text-2xl font-bold mt-5">Субхана роббияль-`азым</p>
                        <p className="text-2xl font-bold mt-5">Субхана роббияль-`азым</p>

                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <p className="text-2xl font-bold mt-5">Великий мой Господь не имеет недостатков</p>
                        <p className="text-2xl font-bold mt-5">Великий мой Господь не имеет недостатков</p>
                        <p className="text-2xl font-bold mt-5">Великий мой Господь не имеет недостатков</p>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <p className="text-2xl font-bold text-right mt-5">سُبْحَانَ رَبِّيَ الْعَظِيمِ</p>
                        <p className="text-2xl font-bold text-right mt-5">سُبْحَانَ رَبِّيَ الْعَظِيمِ</p>
                        <p className="text-2xl font-bold text-right mt-5">سُبْحَانَ رَبِّيَ الْعَظِيمِ</p>
                    </TabPanel>
                </Box>
                </div>
            </div>
        </main>
    )
}

export default Ruku