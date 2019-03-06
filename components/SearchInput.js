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
                opacity: 0.61;
                transition: opacity 150ms cubic-bezier(0.645, 0.045, 0.355, 1);
            }

            .container:hover {
                opacity: 1;
            }

            .icon {
                position: absolute;
                left: 10px;
                top: 10px;
                z-index: 1; 
            }

            .search-input {
                width: 296px;
                padding-left: 35px;
                border-color: ${colors.darkGray};
            }

        `}</style>
    </div>
);