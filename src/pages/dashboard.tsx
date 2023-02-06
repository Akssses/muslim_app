import React from 'react';
import SurahList from '@/components/partials/SurahList';
import AppLayout from '@/layouts/AppLayout';
import { Tab } from '@headlessui/react';
import { NextPage } from 'next';
import Link from 'next/link';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import { Fragment } from 'react';
import { FiVolume2 } from 'react-icons/fi';
import { HiOutlineAnnotation } from 'react-icons/hi';
import { BsBook, BsBookFill } from 'react-icons/bs';

const Dashboard: NextPage = () => {
  return (
    <AppLayout title="">
      <OverlayScrollbarsComponent
        options={{ scrollbars: { autoHide: 'scroll' } }}
        style={{ maxHeight: 'calc(100vh - 5rem)', borderRadius: '1rem 1rem 0 0' }}
      >
        <div className="p-6">
          <div className="mb-6">
            <p className="text-sm text-gray-500 dark:text-gray-200">Asslamualaikum</p>
          </div>
          <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:hidden">
            <div className="p-6 bg-primary-900 rounded-2xl shadow">
              <h6 className="font-semibold text-gray-50">Muslims App</h6>
              <Link href="#">
                <a className="mt-4 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white">Курс по таджвиду</h3>
                    <p className="text-sm text-gray-50">Скоро выйдет..</p>
                  </div>
                  <BsBook size={70} className="text-gray-200" />
                </a>
              </Link>
            </div>
            
          </div>
          <SurahList />
        </div>
      </OverlayScrollbarsComponent>
    </AppLayout>
  );
};

export default Dashboard;
