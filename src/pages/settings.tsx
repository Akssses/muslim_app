import ReciterList from '@/components/partials/ReciterList';
import TranslationList from '@/components/partials/TranslationList';
import ListBox from '@/components/shared/ListBox';
import { useAppSelector } from '@/hooks/use-app-selector';
import AppLayout from '@/layouts/AppLayout';
import axios from '@/lib/axios';
import {
  getArabicFontSize,
  getTranslationFontSize,
  setArabicFontSize,
  setTranslationFontSize,
} from '@/store/settings/settingSlice';
import { Edition, FontSize } from '@/types';
import { GetServerSideProps, NextPage } from 'next';
import { useDispatch } from 'react-redux';

type Props = {
  translations: Edition[];
  reciters: Edition[];
};

const fontSizes = [
  { value: FontSize.SMALL, label: 'Маленький' },
  { value: FontSize.NORMAL, label: 'Нормальный' },
  { value: FontSize.LARGE, label: 'Большой' },
  { value: FontSize.EXTRA_LARGE, label: 'Очень большой' },
];

const SettingsPage: NextPage<Props> = ({ translations, reciters }) => {
  const arabicFontSize = useAppSelector(getArabicFontSize);
  const translationFontSize = useAppSelector(getTranslationFontSize);
  const dispatch = useDispatch();

  return (
    <AppLayout title="Настройки">
      <div className="p-6">
        <h2 className="font-semibold text-xl mb-6">Настройки</h2>
        <div className="max-w-xl">
          <div>
            <h6 className="mb-2 font-medium text-sm">Переводы</h6>
            <TranslationList translations={translations} />
          </div>

          <div className="mt-4">
            <h6 className="mb-2 font-medium text-sm">Чтецы</h6>
            <ReciterList reciters={reciters} />
          </div>
          <div className="mt-4">
            <h6 className="mb-2 font-medium text-sm">Размер арабского шрифта</h6>
            <ListBox
              defaultValue={fontSizes.find((f) => f.value === (arabicFontSize || FontSize.NORMAL))}
              options={fontSizes}
              onChange={(option) => {
                option && dispatch(setArabicFontSize(option.value as FontSize));
              }}
            />
          </div>
          <div className="mt-4">
            <h6 className="mb-2 font-medium text-sm">Размер шрифта перевода</h6>
            <ListBox
              defaultValue={fontSizes.find((f) => f.value === (translationFontSize || FontSize.NORMAL))}
              options={fontSizes}
              onChange={(option) => {
                option && dispatch(setTranslationFontSize(option.value as FontSize));
              }}
            />
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const resTranslation = await axios.get('/edition/type/translation');
  const resReciters = await axios.get('/edition?format=audio&language=ar&type=versebyverse');

  return {
    props: {
      translations: resTranslation.data.data as Edition[],
      reciters: resReciters.data.data as Edition[],
    },
  };
};

export default SettingsPage;
