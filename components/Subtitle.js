import { fonts, colors } from '~/utils/styles';
import classNames from 'classnames';

export default ({ label, bold, className }) => (
    <span className={classNames(className, {
        ['bold']: bold
    })}>
        {label}
        <style jsx="true">{`
            span.bold {
                font-weight: bold;
            }

            span {
                display: inline-block;
                font-size: ${fonts.sizeMedium};
                margin-bottom: 5px;
                font-weight: normal;
                color: ${colors.darkGray};
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
            }
        `}</style>
    </span>

);