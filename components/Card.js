import { appearance, colors } from '~/utils/styles';

import Title from '~/components/Title';
import Subtitle from '~/components/Subtitle';

export default ({
    title,
    subtitle,
}) => (
    <aside>
        <Title className="title" label={title} />
        <Subtitle className="subtitle" label={subtitle} />
        <style jsx="true">{`
            aside > :global(.title),
            aside > :global(.subtitle) {
                max-width: 80%;
            }

            aside > :global(.subtitle) {
                margin-top: 10px;
                color: ${colors.primary};
            }

            aside {
                display: flex;
                align-items: center;
                justify-content: center;
                flex-flow: column;
                width: 240px;
                height: 113px;
                background: ${colors.surface};
                border: ${appearance.border};
                border-radius: ${appearance.borderRadius};
                box-shadow: ${appearance.boxShadow};
                border-color: #C0C0C0;
                margin-bottom: 15px;
                margin-right: 15px;
            }
        `}</style>
    </aside>
);