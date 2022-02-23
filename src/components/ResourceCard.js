import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const ResourceCard = ({ index, resource }) => {
  return (
    <li
      key={index}
      className='grid p-8 px-12 xl:px-8 gap-2 text-center shadow-lg bg-white rounded-2xl'
    >
      <div
        className={`w-16 h-16 pt-3.5 justify-self-center lg:justify-self-start text-center text-3xl ${resource.logoColor[0]} font-bold  ${resource.logoColor[1]} rounded-full`}
      >
        {resource.abr}
      </div>
      <h3 className='lg:text-left text-base font-bold capitalize'>
        {resource.name}
      </h3>
      <p
        className={`text-xs justify-self-center lg:justify-self-start capitalize px-3 py-1 ${resource.color[0]} ${resource.color[1]} rounded-2xl`}
      >
        {resource.tag}
      </p>
      <p className='lg:text-left text-xs text-gray-500'>
        {resource.description}
      </p>
      <button className='lg:text-left text-sm text-center font-semibold text-arrow'>
        Buy <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </li>
  );
};

export default ResourceCard;
