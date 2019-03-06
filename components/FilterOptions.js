import { appearance, colors, fonts } from "../utils/styles";
import classnames from 'classnames';

import Subtitle from '~/components/Subtitle';

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

class FilterOptions extends React.Component {
    state = {
        showMax: this.props.showMax
    }; 

    render () {
        const {
            onSelect, 
            onUnselect
        } = this.props;

        let options = this.props.options;

        const showMore = (this.state.showMax > 0);
        let showMoreCount = '';

        if (showMore) {
            options = options.slice(0, this.state.showMax);
            showMoreCount = this.props.options.slice(this.state.showMax, -1).length;
        }  

        return (
            <ol>
                {options.map((option) => (
                    <Option
                        key={option.value}
                        onSelect={onSelect}
                        onUnselect={onUnselect}
                        {...option}
                    />
                ))}
                {showMore &&  (
                    <a className="show-more" onClick={this.showAll}>
                        <Subtitle label={`Show ${showMoreCount} More`} />
                    </a>
                )}

                <style jsx="true">{`
                    ol {
                        margin: 5px auto;
                        position: relative;
                        border: ${appearance.border};
                        background: ${colors.surface};
                        box-shadow: ${appearance.boxShadow};
                        overflow: visible;
                    }

                    .show-more {
                        position: absolute;
                        bottom: -2.5em;
                        left: 10px;
                    }

                    .show-more:hover {
                        cursor: pointer;
                    }
                `}</style>
            </ol>
        );
    }

    showAll = () => this.setState({ showMax: -1 });
}

export default FilterOptions;