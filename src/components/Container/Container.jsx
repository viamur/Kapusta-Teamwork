import s from './Container.module.scss';

const Container = ({ children }) => {
    return (
        <div className={s.ontainer}>{children }</div>
    )
}

export default Container;