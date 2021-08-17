import { FunctionalComponent } from 'vue';
import { BlockProps } from './Base';
declare const TITLE_ELE_LIST: [1, 2, 3, 4, 5];
export declare type TitleProps = Omit<BlockProps & {
    level?: typeof TITLE_ELE_LIST[number];
}, 'strong'>;
declare const Title: FunctionalComponent<TitleProps>;
export default Title;
