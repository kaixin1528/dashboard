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
  faArrowRightFromBracket,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../logo.png";
import { motion } from "framer-motion";
import { Switch } from "@headlessui/react";
const SideMenu = ({ enabled, setEnabled }) => {
  return (
    <motion.nav
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring" }}
      exit={{ x: -100, opacity: 0 }}
      className='lg:hidden absolute top-16 grid py-2 px-7 w-64 bg-sidebar text-gray-300 text-opacity-70'
    >
      <img
        src={logo}
        alt='logo'
        className='hidden lg:visible w-32 h-12 -ml-5'
      />
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
      <section className='grid pt-5 pb-[9.2rem] text-sm gap-2'>
        <article className='flex items-center px-5 -ml-5 gap-5 cursor-pointer hover:bg-hover'>
          <FontAwesomeIcon icon={faStar} className='-ml-0.5 text-yellow-500' />
          <h4>Plans</h4>
        </article>
        <article className='flex items-center py-1 gap-5 px-5 -ml-5 cursor-pointer hover:bg-hover'>
          <FontAwesomeIcon icon={faSquare} className='text-blue-300' />
          <h4>My Folder</h4>
        </article>
        <article className='flex items-center py-1 gap-5 px-5 -ml-5 cursor-pointer'>
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
        <article className='flex items-center py-1 gap-5 px-5 -ml-5 cursor-pointer hover:bg-hover'>
          <FontAwesomeIcon icon={faSquare} className='text-pink-200' />
          <h4>Statistics</h4>
        </article>
        <article className='flex items-center py-1 gap-5 px-5 -ml-5 cursor-pointer hover:bg-hover'>
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
    </motion.nav>
  );
};

export default SideMenu;
