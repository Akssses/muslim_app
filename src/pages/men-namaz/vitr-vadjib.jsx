import { FiArrowLeft, FiArrowRight, FiMoon, FiSun, FiSunrise } from "react-icons/fi";
import Header from '../../components/partials/Header'
import Footer from '../../components/partials/Footer/Footer'
import Niyat from "../../components/forNamaz/menComponent/Niyat";
import ReactSwipe from 'react-swipe';
import Takbir from "../../components/forNamaz/menComponent/Takbir";
import Kuyam from "../../components/forNamaz/menComponent/Kuyam";
import Kuraat from "../../components/forNamaz/menComponent/Kuraat";
import Ruku from "../../components/forNamaz/menComponent/Ruku";
import Stay from "../../components/forNamaz/menComponent/Stay";
import Sajda1 from "../../components/forNamaz/menComponent/Sajda1";
import Sitting from "../../components/forNamaz/menComponent/Sitting";
import Sajda2 from "../../components/forNamaz/menComponent/Sajda2";
import Kuyam2 from "../../components/forNamaz/menComponent/Kuyam2";
import Tashahud from "../../components/forNamaz/menComponent/Tashahud";
import Salam from "../../components/forNamaz/menComponent/Salam";
import React from "react";

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Tashahud1 from "../../components/forNamaz/menComponent/Tashahud1";
import Dua from "../../components/forNamaz/menComponent/Dua";
import Kuraat3 from "../../components/forNamaz/menComponent/Kuraat3";
import VitrKuraat from "../../components/forNamaz/menComponent/VitrKuraat";
import Kunut from "../../components/forNamaz/menComponent/Kunut";

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

const VitrVadjib = () => {
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
                            <FiMoon size={60}/>
                            <div>
                                <h1 className="font-bold text-3xl">ВИТР</h1>
                                <p className="text-xl">Ваджиб намаз</p>
                            </div>
                        </div>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                <Tab label="3 ракаата витр ваджиб" {...a11yProps(0)} />
                            </Tabs>
                        </Box>
                        <div>
                            <button  onClick={() => reactSwipeEl.prev()}><FiArrowLeft size={40}/></button>
                            <button  onClick={() => reactSwipeEl.next()}><FiArrowRight size={40}/></button>
                        </div>
                    </div>
                    <Box sx={{ width: '100%' }}>
                    <TabPanel value={value} index={0}>
                        <div className="mt-[115px]">
                            <ReactSwipe
                                className="carousel"
                                swipeOptions={{ continuous: false }}
                                ref={el => (reactSwipeEl = el)}>
                                <div>
                                    <h1 className="text-3xl font-bold">ВИТР: ВАДЖИБ НАМАЗ</h1>
                                    <div>
                                        <p className="mt-5 font-semibold">Этот намаз является ваджибом для всех мусульман, обязанных совершать намаз. Состоит из трех ракаатов с одним салямом в конце. В каждом ракаате обязательно (ваджиб) читать суру «аль-Фатиха» и суру (или аяты) после нее. После второго ракаата является ваджибом сесть для чтения ташаххуда, а затем, не читая после него ничего (ни салавата Пророку, мир ему и благословение Аллаха, ни дуа), встать для совершения третьего ракаата.</p>
                                        <p className="mt-5">В начале третьего ракаата не нужно читать «сана» («Субханакя…») и «таʼаввуз» («Аʼузу билляхи…»). После чтения суры «аль-Фатиха» и другой суры (аятов) в третьем ракаате намаза витр нужно поднять руки на уровень ушей, произнося такбир – «Аллаху акбар» – затем является ваджибом прочитать дуа-кунут, после которого нужно перейти в руку и далее завершить намаз обычным с</p>
                                        <p className="mt-5 font-semibold">Само по себе чтение дуа-кунут является ваджибом, однако чтение его в определенной форме  является сунной.</p>
                                        <p className="mt-5">Тот, кто забыл прочитать дуа-кунут в положенном месте и вспомнил об этом во время руку или позже – не возвращается обратно и не читает его в руку. Пропущенное дуа-кунут возмещается совершением саджда ас-сахв в конце намаза.</p>
                                        <p className="mt-5">Намаз витр совершается после иша – ночного намаза, и время его совершения заканчивается с наступлением времени намаза фаджр. Оптимальное же время для выполнения намаза витр – последняя треть ночи. Если мусульманин уверен, что сможет проснуться в конце ночи для исполнения витра, то его лучше отложить. В противном же случае следует совершить намаз витр сразу после намаза иша (и после двух ракаатов желательного намаза (сунна муаккада) после него).</p>
                                        <p className="mt-5">Витр-намаз совершается мусульманами в одиночку, кроме месяца Рамадан – в это время витр читается мусульманами коллективно после намаза таравих. И имам, и джамаат читают дуа-кунут про себя.</p>
                                        <p className="text-danger-900 border p-5 rounded-xl mt-5">Тот, кто пропустил намаз витр намеренно или по забывчивости, обязан восполнить его.</p>
                                    </div>
                                </div>
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
                                <div><VitrKuraat/></div>
                                <div><Kunut/></div>
                                <div><Ruku/></div>
                                <div><Stay/></div>
                                <div><Sajda1/></div>
                                <div><Sitting/></div>
                                <div><Sajda2/></div>
                                <div><Tashahud/></div>
                                <div><Salam/></div>
                            </ReactSwipe>
                        </div>
                    </TabPanel>
                </Box>
                    <p className="mt-10 container">Источник: <span><a className="text-primary-900" href="https://azan.ru/">azan.ru</a></span></p>
                </div>
            <Footer/>
        </div>
    )
}

export default VitrVadjib