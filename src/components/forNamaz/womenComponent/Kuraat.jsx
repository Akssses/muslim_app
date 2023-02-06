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
  
  

const Kuraat = () => {
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
                    <p className="mt-5">Затем женщина читает суру «Аль-Фатиха» («Открывающая», это первая сура Священного Корана):</p>
                    <div className="mt-5 rounded-3xl">
                        <h2 className="font-semibold">По окончании суры «Аль-Фатиха» молящийся произносит:</h2>
                        <h1 className="font-bold text-primary-900 text-xl">«Амин»</h1>
                    </div>
                    <p className="text-danger-900 border p-5 rounded-xl mt-5">Произносить его нужно так: сначала долгое «а», а затем – долгое «и».</p>
                    <p className="mt-5">«Амин» всегда произносится тихо, даже если Коран в намазе читается вслух.</p>
                    <p className="text-danger-900 border p-5 rounded-xl mt-5">Тем не менее, необходимо напомнить, что тихое чтение или произнесение в намазе предполагает такой уровень громкости голоса, чтобы человек мог бы сам себя услышать в умеренно тихом месте. Это касается всего, что в намазе читается тихо – от вступительного такбира до саляма. Мысленное «чтение» – без участия органов речи – не будет считаться чтением, что может привести к недействительности намаза в целом!</p>
                    <p className="mt-5">Следом за сурой «Аль-Фатиха» читается другая сура или аяты Корана. Произносить «бисмилляхи-р-Рахмани-р-Рахим» перед ними не нужно.</p>
                    <p className="text-danger-900 border p-5 rounded-xl mt-5">Произносить его нужно так: сначала долгое «а», а затем – долгое «и».</p>
                    <p className="text-xm mt-5 font-semibold">Вторая сура (или аяты) читается только в первых двух ракаатах фард-намаза. В намазах витр и всех желательных (суннат и нафль мутлак), вторая сура читается в каждом ракаате.</p>
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
                        <div>
                            <h1 onClick={(e) => router.push('/surah/108/ar.shaatree,ru.osmanov')} className="text-2xl text-primary-900 mt-5 font-bold underline cursor-pointer">Сура «Аль-Каусар»</h1>
                            <p className="text-xl font-bold">Инна а’тойнакаль-каусар</p>
                            <p className="text-xl font-bold">Фасолли ли роббика уанхар</p>
                            <p className="text-xl font-bold">Инна шаниака хуаль-абтар</p>
                        </div>
                    </TabPanel>
                </Box>
                </div>
            </div>
        </main>
    )
}

export default Kuraat