import { Mark } from '@tiptap/vue-2';
import { renderInlineSetting } from './renderInlineSetting';

export const FontSize = Mark.create({
    name: 'font_size',

    addOptions() {
        return { deviceStorage: null }
    },

    addAttributes() {
        return {
            mobile: { default: null },
            tablet: { default: null },
            desktop: { default: null }
        }
    },

    addCommands() {
        return {
            applyFontSize: (value) => ({ commands }) => {
                const device = this.options.deviceStorage.value;
                commands.setMark(this.name, { [device]: value });
            }
        };
    },

    renderHTML({ HTMLAttributes: attrs }) {
        return renderInlineSetting({
            mobile_font_size: attrs.mobile ? attrs.mobile + 'px' : null,
            tablet_font_size: attrs.tablet ? attrs.tablet + 'px' : null,
            desktop_font_size: attrs.desktop ? attrs.desktop + 'px' : null,
        });
    }
});