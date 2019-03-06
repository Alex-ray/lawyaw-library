import { Search } from 'react-feather';
import { colors } from '~/utils/styles';

export default ({ ...inputProps }) => (
    <div className="container">
        <i className="icon"><Search size={15} color={colors.primary} /></i>
        <input 
            className="search-input" 
            type="text"
            name="search"
            {...inputProps}
        />
        <style jsx="true">{`
            .container {
                position: relative;
                overflow: hidden;
            }

            .icon {
                position: absolute;
                left: 10px;
                top: 10px;    
            }

            .search-input {
                width: 296px;
                padding-left: 35px;
                border-color: ${colors.darkGray};
            }
        `}</style>
    </div>
);