import { defineConfig } from '@twind/core'
import presetAutoprefix from '@twind/preset-autoprefix'
import presetTailwind from '@twind/preset-tailwind'

export default defineConfig({
    presets: [
        presetAutoprefix(),
        presetTailwind()
    ],
    theme: {
        extend: {
            colors: {
                primary: "#4f4e6d",
            },
        },
    },
    rules: [
        ['image', 'h-24 p-1.5 drop-shadow'],
        ['b-button', 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded hover:bg-red-200'],
    ],
})