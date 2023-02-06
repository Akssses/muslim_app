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
  
  

const Tashahud1 = () => {
    const [value, setValue] = React.useState(0)
    const handleChange = (event, newValue) => {
      setValue(newValue);
    }

    return (
        <main>
            <div className="mt-[60px] md:mt-0">
                <section className="flex justify-between items-center bg-primary-800 rounded-2xl px-5 py-2">
                    <div>
                        <h1 className="text-2xl font-bold">ТАШАХХУД</h1>
                    </div>
                </section>
                <section className="mt-5">
                    <p>После совершения второго саджда, женщина произносит &#34;Аллаху Акбар!&#34;, садится на бедра таким же образом, как в промежутке между двумя земными поклонами и читает ташаххуд.</p>
                    <p className="mt-5">Во время чтения ташаххуда на словах: «Ашхаду алля иляха», – женщина также может поднять указательный палец правой руки, направив его в сторону киблы (но не вверх!), а на словах: «илляллах», – опустить палец. Во время поднятия указательного пальца большой и средний пальцы смыкаются в кольцо, а мизинец и безымянный палец подгибаются. Когда палец опускается, ладонь следует выпрямить и разместить в том же положении, что и до поднятия пальца. Шевелить указательным пальцем или держать его поднятым на протяжении всего чтения ташаххуда не следует.</p>
                    <p className="mt-5">Во втором ракаате намаза – когда он не последний – нужно ограничиться чтением ташаххуда: читать после него салават и дуа нельзя. Если молящийся по ошибке просидел после чтения ташаххуда дольше пяти-шести секунд (время, необходимое для троекратного произнесения «субханаллах») или, начав читать салават, прочитал больше, чем: «Аллахумма солли ʼаля…» – в конце намаза обязательно выполнить саджда сахв. Однако если просидел меньше времени или прочитал меньше этого, то саджда сахв совершать не нужно.</p>
                    <p className="mt-2">Второй ракаат на этом завершается.</p>
                </section>
            </div>
            <div className="mt-10 md:flex">
                <div>
                    <Image src="/w-namaz/sitting.png" width={450} height={600} alt="Ташаххуд"/>
                    <Image src="/w-namaz/sitting2.png" width={450} height={400} alt="Ташаххуд"/>
                </div>
                <div className="mt-10">
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="Транскрипция" {...a11yProps(0)} />
                            <Tab label="Перевод" {...a11yProps(1)} />
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                        <p>Ат-тахийяту лилляхи уас-соляуату уат-тоййибат
                            Ассаляму ʼаляйка айюхан-набийю уа рахматуллахи уа баракатух
                            Ас-саляму ʼаляйна уа ʼаля ʼибадилляхис-солихин
                            Ашхаду алля иляха илляллаху уа ашхаду анна Мухаммадан абдуху уа расулюх</p>
                       
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <p>Приветствия Аллаху, молитвы и добрые дела.
                            Мир тебе, о Пророк, милость Аллаха и Его благословение.
                            Мир нам и истинным слугам Аллаха.
                            Свидетельствую, что нет никого, достойного поклонения, кроме Аллаха, и свидетельствую, что Мухаммад – Его раб и Его Посланник.</p>
                        
                    </TabPanel>
                </Box>
                </div>
            </div>
        </main>
    )
}

export default Tashahud1