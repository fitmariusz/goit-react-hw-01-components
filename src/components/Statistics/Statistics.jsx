import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({title, status }) => {
    const generateRandomColor = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  };

    return (<>
        <section className={css.statistics}>
            <h2 className={css.title}>{ title}</h2>
            <div className={css.startList}>
            {status.map(item => (
                <li className={css.items}
                    key={item.id}
                    style={{ backgroundColor: generateRandomColor() }} >
                    <span className="label">{item.label}</span>
                    <span className="percentage">{item.percentage}%</span>
                </li> 
                ))}
            
                
            </div>
        </section>
    </>)
};

Statistics.protoTypes={
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number,
};