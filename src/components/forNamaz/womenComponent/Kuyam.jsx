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
  
  

const Kuyam = () => {
    const [value, setValue] = React.useState(0)
    const handleChange = (event, newValue) => {
      setValue(newValue);
    }

    return (
        <main>
            <div className="mt-[60px] md:mt-0">
                <section className="flex justify-between items-center bg-primary-800 rounded-2xl px-5 py-2">
                    <div>
                        <h1 className="text-2xl font-bold">КЫЯМ</h1>
                        <p>Стояние</p>
                    </div>
                </section>
                <section className="mt-5">
                    <p className="mt-5">После такбира женщине следует сложить руки на груди: нужно просто положить ладонь правой руки поверх пальцев левой руки. Складывать руки на уровне пупка, как мужчинам, не нужно.</p>
                    <p className="mt-5">Стойте спокойно, не шевелитесь без крайней необходимости. Если вы хотите почесаться, используйте только одну руку, но не делайте этого без очень серьезной нужды, используя минимум времени и усилий. Всегда стойте прямо, распределяя вес на обе ноги. Всегда смотрите вниз перед собой, не отводите взгляд и не глядите по сторонам.</p>
                    <div className="mt-5 rounded-3xl">
                        <h2 className="font-semibold">В этом положении сначала читается вступительное дуа «сана» (другое название – «Субханака»):</h2>
                        <h1 className="font-bold text-primary-900 text-xl">Cубханакаллахумма уа бихамдик, уа табарака смук, уа та’аля джаддук, уа ля иляха гойрук</h1>
                    </div>
                    <div className="mt-5 rounded-3xl">
                        <h2 className="font-semibold">Затем следует произнести формулу испрашивания защиты от шайтана:</h2>
                        <h1 className="font-bold text-primary-900 text-xl">Аʼузу билляхи минаш-шайтанир-раджим,</h1>
                    </div>
                    <p>Дуа «Субханака» и данная формула защиты произносятся только в первом ракаате.</p>
                    <div className="mt-5 rounded-3xl">
                        <h2 className="font-semibold">Затем читается басмала:</h2>
                        <h1 className="font-bold text-primary-900 text-xl">бисмилляхи-р-Рахмани-р-Рахим</h1>
                    </div>
                    <p className="text-danger-400 mt-5">В ханафитском мазхабе слова «бисмилляхи-р-Рахмани-р-Рахим» произносятся про себя, даже если молитва читается вслух.</p>
                </section>
            </div>
            <div className="mt-10 md:flex">
                <Image src="/w-namaz/kuraat.png" width={450} height={600} alt="КЫЯМ"/>
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
                        <p className="text-2xl font-bold">Cубханакаллахумма уа бихамдик,</p>
                        <p className="text-2xl font-bold">уа табарака смук,</p>
                        <p className="text-2xl font-bold">уа та’аля джаддук,</p>
                        <p className="text-2xl font-bold">уа ля иляха гойрук.</p>
                        <p className="text-2xl font-bold mt-5">Аʼузу билляхи минаш-шайтанир-раджим,</p>
                        <p className="text-2xl font-bold mt-5">бисмилляхи-р-Рахмани-р-Рахим.</p>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <p className="text-2xl font-bold">Слава Тебе, о Аллах, и хвала Тебе,</p>
                        <p className="text-2xl font-bold">благословенно имя Твое,</p>
                        <p className="text-2xl font-bold">превыше всего величие Твое,</p>
                        <p className="text-2xl font-bold">и нет никого достойного поклонения, кроме Тебя.</p>
                        <p className="text-2xl font-bold mt-5">Прибегаю к защите Аллаха от побиваемого камнями шайтана,</p>
                        <p className="text-2xl font-bold mt-5">Во имя Аллаха, Милостивого, Милующего.</p>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <p className="text-2xl text-right font-bold">سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ وَتَبَارَكَ اسْمُكَ وَتَعَالَى جَدُّكَ وَلا إِلَهَ</p>
                        <p className="text-2xl font-bold text-right">غَيْرُكَ</p>
                        <p className="text-2xl font-bold text-right">أَعُوذُ بِاللهِ مِنَ الشَّيْطَانِ الرَّجِيمِ</p>
                        <p className="text-2xl font-bold mt-5 text-right">بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ</p>
                    </TabPanel>
                </Box>
                </div>
            </div>
        </main>
    )
}

export default Kuyam