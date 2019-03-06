import { appearance, colors, fonts } from "../utils/styles";
import classnames from 'classnames';

const Option = ({ onSelect, onUnselect, selected, value, label, count }) => {
    const handleClick = () => {
        if (selected) {
            onUnselect(value);
        } else {
            onSelect(value);
        }
    };

    return (
        <li 
            onClick={handleClick} 
            className={classnames({['selected']: selected})}
        >
            {label}
            <span>{count}</span>
            <style jsx="true">{`
                li {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 10px;
                    font-size: ${fonts.sizeMedium};
                    border-bottom: ${appearance.border};
                }

                li:hover {
                    cursor: pointer;
                }

                li.selected {
                    background: ${colors.secondary};
                    color: ${colors.surface};
                }

                li:last-of-type {
                    border-bottom: none;
                }
            `}</style>
        </li>
    );
}

export default ({ options, onSelect, onUnselect }) => (
    <ol>
        {options.map((option) => (
            <Option 
                key={option.value} 
                onSelect={onSelect} 
                onUnselect={onUnselect} 
                {...option} 
            />
        ))}
        <style jsx="true">{`
            ol {
                margin: 5px auto;
                border: ${appearance.border};
                background: ${colors.surface};
                box-shadow: ${appearance.boxShadow};
            }
        `}</style>
    </ol>
);