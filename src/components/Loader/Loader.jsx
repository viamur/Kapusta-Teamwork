import { Oval } from 'react-loader-spinner';
import s from './Loader.module.scss';

const Loader = () => {
  return (
    <Oval
      height={50}
      width={50}
      color="var(--accent-color)"
      wrapperStyle={{}}
      wrapperClass={s.loader}
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#f27e34"
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  );
};
export default Loader;