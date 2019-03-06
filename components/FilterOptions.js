import { appearance, colors, fonts } from "../utils/styles";

export default ({ options }) => (
    <ol>
        {options.map(({ label, count }) => (
            <li key={label}>{label} <span>{count}</span></li>
        ))}
        <style jsx="true">{`
            ol {
                margin: 5px auto;
                border: ${appearance.border};
                background: ${colors.surface};
                box-shadow: ${appearance.boxShadow};
            }

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

            .count {

            }
        `}</style>
    </ol>
);