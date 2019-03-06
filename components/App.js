import { colors, appearance, fonts } from '~/utils/styles';

export default ({ children }) => (
    <main>
        <header />
        <section>
          {children}
        </section>
        <style jsx="true">{`
          header {
            height: 50px;
            width: 100%;
            background: ${colors.secondary}
          }
        `}</style>
        <style jsx="true" global>{`
          @import url('https://fonts.googleapis.com/css?family=Lato:400,700');

          html { height: 100% }
          html, body {
            margin: 0;
            padding: 0;
            font-family: ${fonts.families};
            background: ${colors.background};
            color: ${colors.primary};
          }

          body {
            min-height: 100%;
            display: flex;
            flex-flow: column;
          }

          body.disable-scroll {
            height: 100%;
            overflow: hidden;
          }

          #__next, main, main > section {
            flex-grow: 1;
            display: flex;
            flex-flow: column;
          }

          h1 {
            margin-top: 0;
          }

          p {
            line-height: 1.5em;
          }

          a {
            text-decoration: none;
            color: ${colors.primary};
            opacity: 0.8;
            font-size: ${fonts.sizeMedium};
          }

          a:hover {
            cursor: pointer;
          }

          a:hover, a.active {
            opacity: 1;
            transition: opacity 250ms cubic-bezier(0.645, 0.045, 0.355, 1);
          }

          ul, ol {
            list-style-type: none;
            padding: 0;
            margin: 0;
          }

          input {
            padding: 10px;
            border: ${appearance.border};
            border-radius: ${appearance.borderRadius};
            font-size: ${fonts.sizeMedium};
          }

          button,
          input {
            font-family: ${fonts.families}
          }

          a:focus,
          input:focus,
          button:focus {
            opacity: 1;
            outline: none;
          }

          ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            color: ${colors.primary};
          }
          ::-moz-placeholder { /* Firefox 19+ */
            color: ${colors.primary};
          }
          :-ms-input-placeholder { /* IE 10+ */
            color: ${colors.primary};
          }
          :-moz-placeholder { /* Firefox 18- */
            color: ${colors.primary};
          }
        `}</style>
    </main>
);