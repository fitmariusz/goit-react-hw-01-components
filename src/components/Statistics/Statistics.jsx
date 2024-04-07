import PropTypes from 'prop-types';

export const Statistics = ({ status }) => {
    return (<>
        <section className="statistics">
            <h2 className="title">Upload stats</h2>
            {status.map(item => (
                   <li className="item" key={item.id}>
                    <span className="label">{item.label}</span>
                    <span className="percentage">{item.percentage}%</span>
                </li> 
                ))}
            <ul className="stat-list">
                
            </ul>
        </section>
    </>)
};

Statistics.protoTypes={
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number,
};