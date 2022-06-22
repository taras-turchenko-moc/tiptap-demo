<template>
  <v-app>
    <VBtnToggle class="mb-5" v-model="device" mandatory>
      <VBtn value="desktop" icon>
        <VIcon>mdi-monitor</VIcon>
      </VBtn>
      <VBtn value="tablet" icon>
        <VIcon>mdi-tablet-android</VIcon>
      </VBtn>
      <VBtn value="mobile" icon>
        <VIcon>mdi-cellphone</VIcon>
      </VBtn>
    </VBtnToggle>

    <TextEditor v-model="content" :device="device" />

    <pre>{{ content }}</pre>
  </v-app>
</template>

<script>
import TextEditor from '@/components/TextEditor';

export default {
  name: 'App',

  components: {
    TextEditor
  },

  data: () => ({
    device: 'desktop',

    content: {
      "type": "doc",
      "content": [
        {
          "type": "paragraph",
          "content": [
            {
              "type": "text",
              "text": "Wow, this editor instance exports its content as JSON."
            }
          ]
        }
      ]
    }
  })
}
</script>

<style>
body { padding: 50px }

pre {
  background-color: #f1f1f1;
  padding: 10px;
  margin-top: 50px;
  border-radius: 3px;
}
</style>