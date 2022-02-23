import logo from "./logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faCube,
  faMessage,
  faCartShopping,
  faUserDoctor,
  faStar,
  faSquare,
  faMoon,
  faCircle,
  faCalendar,
  faSwatchbook,
  faSearch,
  faTable,
  faArrowRightFromBracket,
  faBars,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Switch } from "@headlessui/react";
import ResourceCard from "./components/ResourceCard";
import SideMenu from "./components/SideMenu";
import { data, resources } from "./constants";

function App() {
  const [openSideBar, setOpenSideBar] = useState(false);
  const [enabled, setEnabled] = useState(false);

  return (
    <main className='grid lg:flex min-h-screen bg-main'>
      <section className='lg:hidden grid grid-cols-2 py-2 items-center bg-sidebar'>
        <img
          src={logo}
          alt='logo'
          className='w-36 h-12 pl-7 sm:ml-10 cursor-pointer'
        />
        <FontAwesomeIcon
          icon={faBars}
          className='justify-self-end px-10 sm:px-20 text-white cursor-pointer'
          onClick={() => setOpenSideBar(!openSideBar)}
        />
      </section>
      <nav className='hidden lg:grid py-2 px-7 w-64 bg-sidebar text-gray-300 text-opacity-70'>
        <img src={logo} alt='logo' className='w-32 h-12 -ml-5 cursor-pointer' />
        <section className='grid w-52 gap-2 text-sm pb-5 border-b'>
          <article className='flex items-center px-5 -ml-5 gap-5'>
            <FontAwesomeIcon
              icon={faUserDoctor}
              className='h-4 text-yellow-500'
            />
            <article className='grid self-center w-40 cursor-pointer'>
              <h4>David Cooper</h4>
              <p className='text-[0.6rem] text-gray-300 text-opacity-50'>
                UI/UX Designer
              </p>
            </article>
          </article>
          <article className='flex items-center py-1 px-5 -ml-5 gap-5 cursor-pointer hover:bg-hover'>
            <FontAwesomeIcon icon={faHouse} />
            <h4>Home</h4>
          </article>
          <article className='flex items-center gap-5 py-1 px-5 -ml-5 cursor-pointer hover:bg-hover'>
            <FontAwesomeIcon icon={faCube} />
            <h4>My Space</h4>
            <FontAwesomeIcon
              icon={faPlus}
              className='pl-12 text-base font-semibold'
            />
          </article>
          <article className='flex items-center gap-5 py-1 px-5 -ml-5 cursor-pointer hover:bg-hover'>
            <FontAwesomeIcon icon={faMessage} />
            <h4>News</h4>
          </article>
          <article className='flex items-center py-1 px-5 -ml-5 gap-5 cursor-pointer hover:bg-hover '>
            <FontAwesomeIcon icon={faCartShopping} />
            <h4>Shop</h4>
          </article>
        </section>
        <section className='grid pt-5 lg:pb-[35rem] xl:pb-[17rem] text-sm gap-2'>
          <article className='flex items-center py-1 px-5 -ml-5 gap-5 cursor-pointer hover:bg-hover'>
            <FontAwesomeIcon
              icon={faStar}
              className='-ml-0.5 text-yellow-500'
            />
            <h4>Plans</h4>
          </article>
          <article className='flex items-center gap-5 py-1 px-5 -ml-5 cursor-pointer hover:bg-hover'>
            <FontAwesomeIcon icon={faSquare} className='text-blue-300' />
            <h4>My Folder</h4>
          </article>
          <article className='flex items-center gap-5 py-1 px-5 -ml-5 cursor-pointer'>
            <FontAwesomeIcon icon={faMoon} className='text-purple-800' />
            <h4>Dark Mode</h4>
            <Switch
              checked={enabled}
              onChange={setEnabled}
              className={`${
                enabled ? "bg-gray-500" : "bg-gray-200"
              } relative inline-flex items-center h-6 rounded-full w-11 ml-3`}
            >
              <span className='sr-only'>Enable notifications</span>
              <span
                className={`${
                  enabled ? "translate-x-6" : "translate-x-1"
                } inline-block w-4 h-4 transform bg-white rounded-full`}
              />
            </Switch>
          </article>
          <article className='flex items-center gap-5 py-1 px-5 -ml-5 cursor-pointer hover:bg-hover'>
            <FontAwesomeIcon icon={faSquare} className='text-pink-200' />
            <h4>Statistics</h4>
          </article>
          <article className='flex items-center gap-5 py-1 px-5 -ml-5 cursor-pointer hover:bg-hover'>
            <FontAwesomeIcon icon={faCircle} className='text-orange-300' />
            <h4>Dashboards</h4>
          </article>
          <article className='flex items-center gap-5 py-1 px-5 -ml-5 cursor-pointer hover:bg-hover'>
            <FontAwesomeIcon icon={faCalendar} />
            <h4>Calendar</h4>
          </article>
          <article className='flex items-center gap-5 py-1 px-5 -ml-5 cursor-pointer hover:bg-hover'>
            <FontAwesomeIcon icon={faSwatchbook} />
            <h4>Pantone</h4>
          </article>
          <h4 className='text-xs cursor-pointer'>Show More</h4>
        </section>
        <article className='flex items-center gap-5 px-5 -ml-5 pb-5 text-sm self-end cursor-pointer'>
          <FontAwesomeIcon icon={faArrowRightFromBracket} />
          <h4>Log Out</h4>
        </article>
      </nav>
      <AnimatePresence initial={false}>
        {openSideBar && <SideMenu enabled={enabled} setEnabled={setEnabled} />}
      </AnimatePresence>

      <section className='grid items-start gap-12 lg:gap-10 py-10 px-10 sm:px-20 xl:px-40'>
        <section className='grid md:flex text-sm items-center gap-10'>
          <article className='flex items-center px-5 py-2 gap-5 rounded-xl bg-white'>
            <FontAwesomeIcon icon={faSearch} />
            <input
              type='text'
              className='w-full md:w-72 xl:w-[20rem] focus:outline-none rounded-xl'
            />
            <button className='py-2 px-5 text-xs text-gray-400 bg-search hover:bg-gray-300/50 rounded-xl'>
              Search
            </button>
          </article>
          <article className='grid grid-cols-2 md:grid-cols-1 flex-1 xl:flex gap-5 '>
            <article className='flex md:justify-self-end'>
              <div className='w-10 h-10 -mr-3 ring-2 ring-white bg-red-300 rounded-full'></div>
              <div className='w-10 h-10 -mr-3 ring-2 ring-white bg-blue-300 rounded-full'></div>
              <div className='w-10 h-10 -mr-3 ring-2 ring-white bg-purple-300 rounded-full'></div>
              <div className='w-10 h-10 text-xs text-white text-center pt-3 ring-2 ring-white bg-black rounded-full'>
                +10
              </div>
            </article>
            <button className='justify-self-end font-bold py-2 px-5 border-2 shadow-md bg-newSpace hover:bg-gray-300 hover:bg-opacity-50 rounded-lg'>
              + New Space
            </button>
          </article>
        </section>
        <section className='grid gap-5'>
          <article className='grid grid-cols-2 items-center'>
            <h2 className='text-xl font-bold'>Weekly Resources</h2>
            <article className='grid sm:flex items-center sm:gap-5 gap-2 justify-self-end'>
              <p className='text-xs justify-self-end text-gray-400'>
                1 of 5 viewed
              </p>
              <div className='w-4 h-2 justify-self-center -mb-6 -ml-16 sm:ml-0 sm:-mb-0 sm:-mr-8 z-10 bg-orange-300 rounded-full'></div>
              <div className='justify-self-end w-20 h-2 bg-white rounded-full'></div>
            </article>
          </article>
          <ul className='grid sm:grid-cols-2 xl:grid-cols-4 gap-5'>
            {resources.map((resource, index) => {
              return <ResourceCard index={index} resource={resource} />;
            })}
          </ul>
        </section>
        <section className='grid gap-5'>
          <article className='grid grid-cols-2 items-center'>
            <h2 className='text-xl font-bold'>Blog Activity</h2>
            <article className='flex gap-2 justify-self-end text-xs'>
              <button className='flex py-2 px-5 items-center bg-white hover:bg-gray-200 rounded-lg gap-2'>
                <FontAwesomeIcon icon={faTable} />
                Table
              </button>
              <button className='py-2 px-5 text-white bg-black hover:bg-gray-800 rounded-lg'>
                + Save
              </button>
            </article>
          </article>
          <article className='grid md:flex lg:w-full overflow-scroll lg:overflow-hidden gap-5'>
            <article className='grid mx-auto pb-8 gap-3 h-full cursor-pointer bg-white rounded-2xl'>
              <div className='h-32 xl:h-40 w-full bg-no-repeat bg-cover bg-art rounded-t-2xl'></div>
              <div className='flex py-4 px-6 gap-6 items-center'>
                <h3 className='text-lg font-bold'>The Art of Design</h3>
                <p className='text-[0.7rem] px-2 py-1 justify-self-end text-design font-semibold bg-design rounded-2xl'>
                  Editorial
                </p>
              </div>
              <div className='flex px-6 text-xs text-sidebar gap-2'>
                <FontAwesomeIcon icon={faCalendar} />
                <p>02.22.2022</p>
              </div>
            </article>
            <article className='w-[24rem] mx-auto sm:w-[32rem] lg:w-[40rem] h-80 text-sm font-extralight p-5 bg-white rounded-xl'>
              <ResponsiveContainer width='100%' height='100%'>
                <BarChart
                  data={data}
                  margin={{
                    top: 5,
                    right: 10,
                    left: 10,
                    bottom: 5,
                  }}
                  barSize={30}
                >
                  <XAxis
                    dataKey='name'
                    scale='point'
                    padding={{ left: 15, right: 15 }}
                  />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey='value' fill='#8884d8' />
                </BarChart>
              </ResponsiveContainer>
            </article>
          </article>
        </section>
      </section>
    </main>
  );
}

export default App;
