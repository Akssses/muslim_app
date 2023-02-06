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
  
  

const Sajda1 = () => {
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
                        <p>1 земной поклон</p>
                    </div>
                </section>
                <section className="mt-5">
                    <p className="mt-5">Следующим действием является земной поклон – саджда (также «суджуд»).</p>
                    <div className="mt-5 rounded-3xl">
                        <h2 className="font-semibold">Молящийся произносит такбир:</h2>
                        <h1 className="font-bold text-primary-900 text-xl">«Аллаху Акбар», –</h1>
                    </div>
                    <p className="mt-5">и опускается сначала на колени, затем ставит ладони, потом касается пола кончиком носа, а затем – лбом.</p>
                    <ul role="list" classNmae="marker:text-primary-900 list-disc pl-5 space-y-3 mt-5">
                      <li>В положении саджда голову желательно расположить между ладонями.</li>
                      <li>Ладони не должны быть слишком далеко от головы.</li>
                      <li>Локти не должны прижиматься ни к бокам, ни к полу.</li>
                      <li>Живот не должен касаться бедер.</li>
                      <li>Пальцы ладоней следует прижать друг к другу и поставить так, чтобы они были направлены в сторону киблы.</li>
                      <li>Лоб и нос должны быть прижаты к полу.</li>
                      <li>Пальцы ног прижаты к полу и направлены в сторону киблы.</li>
                    </ul>
                    <p className="mt-5">Следите внимательно за тем, чтобы ваши ноги не отрывались от пола в продолжение всего земного поклона.</p>
                    <p className="text-danger-900 border p-5 rounded-xl mt-5">Некоторые люди совершают саджда, ни на мгновение не опуская на пол ни одного из пальцев ног. В таком случае их земной поклон считается невыполненным, соответственно, вся молитва становится недействительной. Очень внимательно следите за тем, чтобы не совершать эту ошибку!</p>
                    <div className="mt-5 rounded-3xl">
                        <h2 className="font-semibold">В данном положении желательно три раза тихо произнести слова восхваления Аллаха:</h2>
                        <h1 className="font-bold text-primary-900 text-xl">«Субхана роббияль-аʼля», –</h1>
                    </div>
                    <p className="mt-5">спокойно и не торопясь.</p>
                </section>
            </div>
            <div className="mt-10 md:flex">
                <Image src="/m-namaz/msajda.png" width={650} height={500} alt="РУКУ"/>
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

export default Sajda1