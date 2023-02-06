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
  
  

const Kunut = () => {
    const [value, setValue] = React.useState(0)
    const handleChange = (event, newValue) => {
      setValue(newValue);
    }

    return (
        <main>
            <div className="mt-[60px] md:mt-0">
                <section className="flex justify-between items-center bg-primary-800 rounded-2xl px-5 py-2">
                    <div>
                        <h1 className="text-2xl font-bold">ДУА КУНУТ</h1>
                    </div>
                </section>
                <section className="mt-5">
                    <p className="mt-5">После чтения суры «аль-Фатиха» и другой суры (аятов) в третьем ракаате намаза витр нужно поднять руки на уровень ушей, произнося такбир – «Аллаху акбар» – а затем снова сложить их под пупком. В таком положении необходимо прочитать дуа-кунут. Предпочтительнее всего читать дуа, переданное от Абдуллаха ибн Масʼуда, да будет Всевышний Аллах им доволен.</p>
                    <p className="text-danger-900 border p-5 rounded-xl mt-5">Тот, кто забыл прочитать дуа-кунут в положенном месте и вспомнил об этом во время поясного поклона или позже, не возвращается обратно и не читает его в поклоне. Пропущенное дуа-кунут возмещается совершением саджда ас-сахв в конце намаза.</p>
                </section>
            </div>
            <div className="mt-10 md:flex">
                <Image src="/w-namaz/takbir.png" width={450} height={600} alt="ВЫПРЯМЛЕНИЕ"/>
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
                        <p className="text-xl w-[500px] font-bold mt-5">
                            Аллахумма, инна наста‘иинука ва настагфирука 
                            ва ну’мину бика ва натаваккалю &apos;аляйк,
                            ва нусни &apos;аляйкаль-хайра нашкурук,
                            ва ля накфурук,
                            ва нахля&apos;у ва натруку май-яфджурук.
                            Аллахумма, ийяка на&apos;буду,
                            ва ляка нусолли ва насджуд,
                            ва иляйка нас&apos;а ва нахфид,
                            нарджу рахматака,
                            ва нахша &apos;азабака,
                            инна &apos;азабакаль джидда биль-куффари мульхик!
                            00:00
                        </p>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <p className="text-xl w-[500px] font-bold mt-5">
                            О Аллах! Мы взываем к Твоей помощи,
                            просим вести нас по верному пути,
                            просим у Тебя прощения и каемся.
                            Веруем и полагаемся на Тебя.
                            Восхваляем Тебя за все блага, благодарим Тебя,
                            и не являемся не верующими в Тебя,
                            и отстраняемся, и отдаляемся от тех, кто ослушивается Тебя.
                            О Аллах, Тебе мы поклоняемся,
                            Тебе посвящаем молитвы, и пред Тобой падаем ниц,
                            к Тебе мы устремляемся и спешим, уповая на Твою милость, и страшимся Твоего наказания,
                            поистине, Твое наказание неизбежно постигнет неверующих.
                        </p>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <div className="text-2xl font-bold text-right">
                            <p className="mt-5">الَّلهُمَّ إِنَّا نَسْتَعِيْنُكَ وَنَسْتَغْفِرُكَ</p>
                            <p>وَنُؤْمِنُ بِكَ وَنَتَوَكَّلُ عَلَيْكَ وَنُثْنِيْ عَلَيْكَ الْخَيْرَ</p>
                            <p>نَشْكُرُكَ وَلَا نَكْفُرُكَ وَنَخْلَعُ وَنَتْرُكُ مَنْ يَفْجُرُكَ</p>
                            <p>الَّلهُمَّ إِيَّاكَ نَعْبُدُ وَلَكَ نُصَلِّيْ</p>
                            <p>وَنَسْجُدُ وَإِلَيْكَ نَسْعَى</p>
                            <p>وَنَحْفِدُ نَرْجُوْ رَحْمَتَكَ</p>
                            <p>وَنَخْشَى عَذَابَكَ</p>
                            <p>إِنَّ عَذَابَكَ الْجِدَّ بِالْكُفَّارِ مُلْحِق </p>
                        </div>
                    </TabPanel>
                </Box>
                </div>
            </div>
        </main>
    )
}

export default Kunut