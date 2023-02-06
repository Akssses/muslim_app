import Image from "next/image"
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useRouter } from 'next/router';


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
  
  

const Kuraat3 = () => {
    const [value, setValue] = React.useState(0)
    const handleChange = (event, newValue) => {
      setValue(newValue);
    }
    const router = useRouter()

    return (
        <main>
            <div className="mt-[60px] md:mt-0">
                <section className="flex justify-between  bg-primary-800 rounded-xl px-5 py-2">
                    <div>
                        <h1 className="text-xl font-bold">КЫРААТ</h1>
                        <p>Чтение</p>
                    </div>
                </section>
                <section className="mt-5">
                    <p className="mt-5">После этого необходимо прочитать суру «Аль-Фатиха». </p>
                    <p className="text-danger-900 border p-5 rounded-xl mt-5">Читать вторую суру или аяты в третьем и четвертом ракаате фард-намаза не нужно. Но если по ошибке прочитал, то намаз действителен.</p>
                    
                </section>
            </div>
            <div className="mt-10 md:flex">
                <Image src="/w-namaz/kuraat.png" width={450} height={600} alt="КЫРААТ"/>
                <div className="mt-10">
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="Транскрипция" {...a11yProps(0)} />
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                        <div>
                            <h1 onClick={(e) => router.push('/surah/1/ar.shaatree,ru.osmanov')} className="text-2xl text-primary-900 font-bold underline cursor-pointer">Сура «Аль-Фатиха»</h1>
                            <p className="text-xl font-bold">Аль-хамду лилляхи роббиль-ʼалямин</p>
                            <p className="text-xl font-bold">Aр-Рахманир-Рахим</p>
                            <p className="text-xl font-bold">Mалики яумид-дин</p>
                            <p className="text-xl font-bold">Ийяка наʼбуду уа ийяка наста’ин</p>
                            <p className="text-xl font-bold">Ихдинас-сыратоль-мустакым</p>
                            <p className="text-xl font-bold">Сыратоль-лязина анʼамта ʼалейхим</p>
                            <p className="text-xl font-bold">Гойриль магдуби ʼалейхим уа ляд-дооооллин</p>
                        </div>
                    </TabPanel>
                </Box>
                </div>
            </div>
        </main>
    )
}

export default Kuraat3