import Rect from './Rect';
import Polygon from './Polygon';
import Dot from './Dot';
import { Point } from './Types';
declare class CanvasSelect {
    lock: boolean;
    MIN_WIDTH: number;
    MIN_HEIGHT: number;
    strokeStyle: string;
    fillStyle: string;
    activeStrokeStyle: string;
    activeFillStyle: string;
    ctrlStrokeStyle: string;
    ctrlFillStyle: string;
    ctrlRadius: number;
    labelFillStyle: string;
    labelFont: string;
    labelMaxLen: number;
    EventList: object;
    WIDTH: number;
    HEIGHT: number;
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    dataset: Array<Rect | Polygon | Dot>;
    offlineCanvas: HTMLCanvasElement;
    offlineCtx: CanvasRenderingContext2D;
    remmber: number[][];
    movePoint: Point;
    remmberOrigin: number[];
    createType: number;
    ctrlIndex: number;
    cursor: string;
    image: HTMLImageElement;
    IMAGE_ORIGIN_WIDTH: number;
    IMAGE_WIDTH: number;
    IMAGE_ORIGIN_HEIGHT: number;
    IMAGE_HEIGHT: number;
    originX: number;
    originY: number;
    scaleStep: number;
    constructor(el: HTMLCanvasElement | string, imgSrc?: string);
    get activeShape(): Rect | Polygon | Dot;
    get scale(): number;
    /**
     * 初始化
     */
    init(): void;
    /**
     * 生成uuid
     * @returns
     */
    static createUuid(): string;
    /**
     * 设置数据
     * @param data Array
     */
    setData(data: any[]): void;
    /**
     * 判断是非在标注实例上
     * @param mousePoint 点击位置
     * @returns
     */
    hoverOnShape(mousePoint: Point): [number, Rect | Polygon | Dot];
    /**
     * 判断鼠标是否在背景图内部
     * @param e MouseEvent
     * @returns 布尔值
     */
    isInContent(e: MouseEvent): boolean;
    /**
     * 判断是否在矩形内
     * @param point 坐标
     * @param coor 区域坐标
     * @returns 布尔值
     */
    isPointInRect(point: Point, coor: Point[]): boolean;
    /**
     * 判断是否在多边形内
     * @param point 坐标
     * @param coor 区域坐标
     * @returns 布尔值
     */
    isPointInPolygon(point: Point, coor: Point[]): boolean;
    /**
     * 判断是否在圆内
     * @param point 坐标
     * @param center 圆心
     * @param r 半径
     * @returns 布尔值
     */
    isPointInCircle(point: Point, center: Point, r: number): boolean;
    /**
     * 绘制矩形
     * @param shape 标注实例
     * @returns
     */
    drawRect(shape: Rect): void;
    /**
     * 绘制多边形
     * @param shape 标注实例
     */
    drawPolygon(shape: Polygon): void;
    /**
     * 绘制点
     * @param shape 标注实例
     */
    drawDot(shape: Dot): void;
    /**
     * 绘制控制点
     * @param point 坐标
     */
    drawCtrl(point: Point): void;
    /**
     * 绘制控制点列表
     * @param shape 标注实例
     */
    drawCtrlList(shape: Rect | Polygon): void;
    /**
     * 绘制label
     * @param point 位置
     * @param label 文本
     */
    drawLabel(point: Point, label?: string): void;
    /**
     * 绘制背景图片
     */
    paintImage(): void;
    clear(): void;
    /**
     * 更新画布
     */
    update(): void;
    /**
     * 删除指定矩形
     * @param index number
     */
    deleteByIndex(index: number): void;
    /**
     * 计算缩放步长
     * @param init 是否为init
     */
    calcStep(init?: boolean): void;
    /**
     * 缩放
     * @param type true放大，false，缩小
     */
    setScale(type: boolean): void;
    /**
     * 适配背景图
     */
    fitZoom(): void;
    /**
     * 保持缩放中心
     * @param scale nummer
     */
    stayPosition(scale: number): void;
    /**
     * 注册事件
     * @param eventName 事件名称
     * @param cb 回调方法
     */
    on(eventName: string, cb: Function): void;
    /**
     * 触发事件
     * @param eventName 事件名称
     * @param payload 传递参数
     */
    emit(eventName: string, ...payload: any): void;
    /**
     * 注销事件
     * @param eventName 事件名称
     * @param cb 传递参数
     */
    off(eventName: string, cb: Function): void;
}
export default CanvasSelect;
