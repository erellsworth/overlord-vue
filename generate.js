const fs = require('fs');

const componentName = process.argv[2];

if (!componentName) {
    console.log('You must provide a name');
    process.exit();
}

const template = `
    <template>
        <p>${componentName}</p>
    </template>
    <script lang="ts" src="./${componentName}.ts"></script>
`;

const script = `
import { Component, Vue } from 'vue-property-decorator';
import './${componentName}.module.scss';

@Component
export default class ${componentName} extends Vue {
}
`;

fs.mkdirSync(`./src/components/${componentName}`);

fs.writeFileSync(`./src/components/${componentName}/${componentName}.vue`, template);
fs.writeFileSync(`./src/components/${componentName}/${componentName}.module.scss`, '');
fs.writeFileSync(`./src/components/${componentName}/${componentName}.ts`, script);

// const app = fs.readFileSync('./src/App.vue');

// console.log('app', app.toString());