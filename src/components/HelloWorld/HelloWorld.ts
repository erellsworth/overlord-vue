import { Component, Prop, Vue } from "vue-property-decorator";
import "./HelloWorld.module.scss";

@Component
export default class HelloWorld extends Vue {
    @Prop() private msg!: string;
}