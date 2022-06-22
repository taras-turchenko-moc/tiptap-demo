import { Mark } from '@tiptap/vue-2';
import { renderInlineSetting } from './renderInlineSetting';

export const FontWeight = Mark.create({
    name: 'font_weight',

    renderHTML({ HTMLAttributes: attrs }) {
        return renderInlineSetting({ font_weight: attrs.value });
    },

    addAttributes() {
        return {
            value: { default: null }
        }
    },

    addCommands() {
        return {
            applyFontWeight: (value) => ({ commands }) => {
                commands.setMark(this.name, { value });
            }
        };
    }
});