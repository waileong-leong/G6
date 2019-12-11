import EventEmitter from '@antv/event-emitter';
import { Easeing, ModelStyle, ShapeStyle } from '@g6/types'

export interface IModeOption {
  type: string;
}

export type IModeType = string | IModeOption

export interface IMode {
  default: IModeType[]
  [key: string]: IModeType[]
}

export interface ILayoutOptions {
  type: string;
}

export interface GraphOptions {
  /**
   * 图的 DOM 容器，可以传入该 DOM 的 id 或者直接传入容器的 HTML 节点对象
   */
  container: string | HTMLElement;
  /**
   * 指定画布宽度，单位为 'px'
   */
  width: number;
  /**
   * 指定画布高度，单位为 'px'
   */
  height: number;
  /**
   * 渲染引擎，支持canvas和svg。
   */
  renderer?: 'canvas' | 'svg';

  fitView?: boolean;

  layout?: ILayoutOptions;

  /**
   * 图适应画布时，指定四周的留白。
   * 可以是一个值, 例如：fitViewPadding: 20
   * 也可以是一个数组，例如：fitViewPadding: [20, 40, 50,20]
   * 当指定一个值时，四边的边距都相等，当指定数组时，数组内数值依次对应 上，右，下，左四边的边距。
   */
  fitViewPadding?: number[] | number;
  /**
   * 各种元素是否在一个分组内，决定节点和边的层级问题，默认情况下所有的节点在一个分组中，所有的边在一个分组中，当这个参数为 false 时，节点和边的层级根据生成的顺序确定。
   * 默认值：true
   */
  groupByTypes?: boolean;

  groupStyle?: {
    style: {
      [key: string]: ShapeStyle
    };
  };

  /**
   * 当图中元素更新，或视口变换时，是否自动重绘。建议在批量操作节点时关闭，以提高性能，完成批量操作后再打开，参见后面的 setAutoPaint() 方法。
   * 默认值：true
   */
  autoPaint?: boolean;

  /**
   * 设置画布的模式。详情可见G6中的Mode文档。
   */
  modes?: IMode;

  /**
   * 默认状态下节点的配置，比如 shape, size, color。会被写入的 data 覆盖。
   */
  defaultNode?: {
    shape?: string,
    size?: string,
    color?: string,
  } & ModelStyle;

  /**
   * 默认状态下边的配置，比如 shape, size, color。会被写入的 data 覆盖。
   */
  defaultEdge?: {
    shape?: string,
    size?: string,
    color?: string,
  } & ModelStyle;

  nodeStateStyles?: ModelStyle;

  edgeStateStyles?: ModelStyle;

  /**
   * 向 graph 注册插件。插件机制请见：plugin
   */
  plugins?: any[];
  /**
   * 是否启用全局动画。
   */
  animate?: boolean;

  /**
   * 动画配置项，仅在animate为true时有效。
   */
  animateCfg?: {
    /**
     * 回调函数，用于自定义节点运动路径。
     */
    onFrame?: () => unknown;
    /**
     * 动画时长，单位为毫秒。
     */
    duration?: number;
    /**
     * 动画动效。
     * 默认值：easeLinear
     */
    easing?: Easeing;
  };
  /**
   * 最小缩放比例
   * 默认值 0.2
   */
  minZoom?: number;
  /**
   * 最大缩放比例
   * 默认值 10
   */
  maxZoom?: number;
  /**
   * 像素比率
   * 默认值 1.0
   */
  pixelRatio?: number;

  groupType?: string;

  /**
   * Edge 是否连接到节点中间
   */
  linkCenter?: boolean;
}

export interface IGraph extends EventEmitter {
  get<T>(key: string): T;
}

