import { fonts, colors } from '~/utils/styles';

export default ({ label, className }) => (
    <span className={className}>
        {label}
        <style jsx="true">{`
            span {
                line-height: 1.5em;
                display: inline-block;
                font-size: ${fonts.sizeLarge};
                margin-bottom: 5px;
                font-weight: bold;
                color: ${colors.primary};
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
            }
        `}</style>
    </span>

);