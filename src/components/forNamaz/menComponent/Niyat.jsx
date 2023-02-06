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
  
  

const Niyat = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    }

    return (
        <main>
            <div className="mt-[60px] md:mt-0">
                <section className="flex justify-between items-center bg-primary-800 rounded-2xl px-5 py-2">
                    <div>
                        <h1 className="text-2xl font-bold">НИЯТ</h1>
                        <p>Намерение</p>
                    </div>
                    <h1 className="text-3xl font-bold">1</h1>
                </section>
                <section className="mt-5">
                    <p>Намерение (ният) – это мысленная готовность совершить действие. Осознавать, что ты собираешься совершить намаз, и то, какой именно, – это условие, без которого  обязательный (фард и ваджиб) намаз не будет действителен. Более подробно об этом, вы можете прочитать в разделе &#34;условия намаза: намерение.&#34;</p>
                    <div className="mt-5 rounded-3xl">
                        <h2 className="font-semibold">Мысленно намерение можно выразить так:</h2>
                        <h1 className="font-bold text-primary-900 text-xl">«Я намереваюсь совершить (вид намаза)»</h1>
                    </div>
                    <p className="mt-5">Намерение должно предшествовать вступлению (такбиратуль-ихрам) в намаз или сопровождать его.
                        Мусульманин встает на то место, где будет совершать намаз.
                        Стоять нужно прямо, ваши глаза должны смотреть туда, куда опустится ваш лоб в момент совершения земного поклона (саджда). Наклонять голову и класть подбородок на грудь нежелательно (макрух).</p>
                    <p className="mt-2">Ступни должны стоять так, чтобы пальцы ног были направлены в сторону киблы. Промежуток между обеими ступнями должен быть небольшим, размером примерно в ладонь. Не нужно ни сдвигать ступни слишком близко, ни расставлять ноги слишком широко.
                       Порицаемо (макрух) совершать намаз в такой одежде, которую вы не надели бы публично.</p>
                </section>
            </div>
            <div className="mt-10 md:flex">
                <Image src="/m-namaz/mniyat.png" width={450} height={600} alt="Ният"/>
                <div className="mt-10">
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="Перевод" {...a11yProps(0)} />
                            {/* <Tab label="Item Two" {...a11yProps(1)} />
                            <Tab label="Item Three" {...a11yProps(2)} /> */}
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                        <p className="text-xl font-bold">
                            Я намереваюсь совершить (вид намаза)
                        </p>
                    </TabPanel>
                    {/* <TabPanel value={value} index={1}>
                        Item Two
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        Item Three
                    </TabPanel> */}
                </Box>
                </div>
            </div>
        </main>
    )
}

export default Niyat