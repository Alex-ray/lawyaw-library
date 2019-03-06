import { fonts, colors } from '~/utils/styles';

export default ({ label }) => (
    <span>
        {label}
        <style jsx="true">{`
            span {
                display: inline-block;
                font-size: ${fonts.sizeLarge};
                margin-bottom: 5px;
                font-weight: bold;
                color: ${colors.primary};
            }
        `}</style>
    </span>

);