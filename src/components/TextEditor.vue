<template>
  <div>
    <BubbleMenu :editor="editor" :tippy-options="{ duration: 100 }" v-if="editor">
      <VToolbar dense rounded>
        <VToolbarItems>
          <VMenu offset-y>
            <template #activator="{ on, attrs }">
              <VBtn v-bind="attrs" v-on="on" elevation="0" plain>
                {{ activePreset }}
              </VBtn>
            </template>
            <VList dense>
              <VListItemGroup :value="activePreset" @change="changePreset">
                <VListItem v-for="preset of presets" :key="preset" :value="preset">
                  <VListItemTitle>{{ preset }}</VListItemTitle>
                </VListItem>
              </VListItemGroup>
            </VList>
          </VMenu>

          <VMenu offset-y>
            <template #activator="{ on, attrs }">
              <VBtn v-bind="attrs" v-on="on" elevation="0" plain>
                {{ activeFontWeight }}
              </VBtn>
            </template>
            <VList dense>
              <VListItemGroup :value="activeFontWeight" @change="changeFontWeight">
                <VListItem v-for="weight of fontWeights" :key="weight" :value="weight">
                  <VListItemTitle>{{ weight }}</VListItemTitle>
                </VListItem>
              </VListItemGroup>
            </VList>
          </VMenu>

          <VMenu offset-y>
            <template #activator="{ on, attrs }">
              <VBtn v-bind="attrs" v-on="on" elevation="0" plain>
                {{ activeFontSize }}px
              </VBtn>
            </template>
            <VList dense>
              <VListItemGroup :value="activeFontSize" @change="changeFontSize">
                <VListItem v-for="size of fontSizes" :key="size" :value="size">
                  <VListItemTitle>{{ size }}</VListItemTitle>
                </VListItem>
              </VListItemGroup>
            </VList>
          </VMenu>

          <VMenu offset-y>
            <template #activator="{ on, attrs }">
              <VBtn v-bind="attrs" v-on="on" elevation="0" plain>
                {{ activeListType || '*' }}
              </VBtn>
            </template>
            <VList dense>
              <VListItemGroup :value="activeListType" @change="changeListType">
                <VListItem v-for="type of listTypes" :key="type" :value="type">
                  <VListItemTitle>{{ type }}</VListItemTitle>
                </VListItem>
              </VListItemGroup>
            </VList>
          </VMenu>

          <VBtn :input-value="isItalic" @click="toggleItalic" plain>
            <em>i</em>
          </VBtn>
        </VToolbarItems>
      </VToolbar>
    </BubbleMenu>
    <EditorContent :editor="editor"/>
  </div>
</template>

<script>
import { Editor, EditorContent, BubbleMenu } from '@tiptap/vue-2';
import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import History from '@tiptap/extension-history'
import Text from '@tiptap/extension-text';
import BulletList from '@tiptap/extension-bullet-list';
import OrderedList from '@tiptap/extension-ordered-list';
import ListItem from '@tiptap/extension-list-item';
import Italic from '@tiptap/extension-italic';
import Heading from '@tiptap/extension-heading';
import { FontWeight } from './FontWeight';
import { FontSize } from './FontSize';
import { DeviceStorage } from './DeviceStorage';

export default {
  name: 'TextEditor',

  components: {
    EditorContent,
    BubbleMenu
  },

  props: {
    value: {
      type: Object,
      default: ''
    },

    device: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      editor: null,
      deviceStorage: new DeviceStorage(this.device),
      fontWeights: ['300', '400', '500', '600', '700'],
      fontSizes: ['12', '14', '16', '18', '20'],
      listTypes: ['None', '1.', '*'],
      presets: ['h1', 'h2', 'h3', 'h4', 'regular']
    };
  },

  computed: {
    activeFontWeight() {
      return this.editor.getAttributes('font_weight').value || '400';
    },

    activeFontSize() {
      return this.editor.getAttributes('font_size')[this.device] || '14';
    },

    activeListType() {
      if (this.editor.isActive('orderedList')) return '1.';
      if (this.editor.isActive('bulletList')) return '*';
      return 'none';
    },

    isItalic() {
      return this.editor.isActive('italic');
    },

    activePreset() {
      if (this.editor.isActive('heading')) {
        const { level } = this.editor.getAttributes('heading');
        return `h${level}`;
      }
      return 'regular';
    }
  },

  watch: {
    value(value) {
      const isSame = JSON.stringify(this.editor.getJSON()) === JSON.stringify(value);

      if (!isSame) {
        this.editor.commands.setContent(value, false);
      }
    },

    device(value) {
      this.deviceStorage.value = value;
    }
  },

  mounted() {
    this.editor = new Editor({
      content: this.value,
      onUpdate: () => this.$emit('input', this.editor.getJSON()),
      extensions: [
        Document,
        Text,
        Paragraph,
        History,
        FontWeight,
        BulletList,
        OrderedList,
        ListItem,
        Italic,
        FontSize.configure({ deviceStorage: this.deviceStorage }),
        Heading.configure({ levels: [1, 2, 3, 4] })
      ]
    });
  },

  beforeDestroy() {
    this.editor.destroy();
  },

  methods: {
    changeFontWeight(value) {
      this.editor.chain().focus().applyFontWeight(value).run();
    },

    changeFontSize(value) {
      this.editor.chain().focus().applyFontSize(value).run();
    },

    changeListType(value) {
      const type = value === 'none' ? this.activeListType : value;
      const method = type === '*' ? 'toggleBulletList' : 'toggleOrderedList';
      return this.editor.chain().focus()[method]().run();
    },

    toggleItalic() {
      this.editor.chain().focus().toggleItalic().run();
    },

    changePreset(value) {
      if (['h1', 'h2', 'h3', 'h4'].includes(value)) {
        const level = parseInt(value.replace('h', ''));
        this.editor.chain().focus().setHeading({ level }).run();
        return;
      }
      const level = parseInt(this.activePreset.replace('h', ''));
      this.editor.chain().focus().toggleHeading({ level }).run();
    }
  }
};
</script>

<style scoped>
::v-deep .ProseMirror {
  padding: 8px;
}

::v-deep .ProseMirror .zp-text-style {
  font-weight: var(--font-weight, inherit);
}

@media (min-width: 1200px) {
  ::v-deep .ProseMirror .zp-text-style {
    font-size: var(--desktop-font-size, inherit);
  }
}

@media (min-width: 769px) and (max-width: 1199.98px) {
  ::v-deep .ProseMirror .zp-text-style {
    font-size: var(--tablet-font-size, inherit);
  }
}

@media (max-width: 768.98px) {
  ::v-deep .ProseMirror .zp-text-style {
    font-size: var(--mobile-font-size, inherit);
  }
}
</style>