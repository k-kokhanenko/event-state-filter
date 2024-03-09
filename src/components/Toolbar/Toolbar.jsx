import '../../bulma.css';

export const Toolbar = (props) => {
    const { filters, selected, onSelectFilter } = props;
    return (
        <>
            <div className='container'>
                {filters.map((filter, index) => (
                    <input 
                        type='button' 
                        key = {index} 
                        className={`button ${selected === filter ? 'is-info' : ''}`} 
                        onClick = {onSelectFilter} 
                        value={filter} 
                    />
                ))}
            </div>
        </>
    )
}
