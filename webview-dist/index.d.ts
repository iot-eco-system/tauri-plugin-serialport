import { UnlistenFn } from '@tauri-apps/api/event';
export interface InvokeResult {
    code: number;
    message: string;
}
export interface ReadDataResult {
    size: number;
    data: number[];
}
export interface SerialportOptions {
    path: string;
    baudRate: number;
    encoding?: string;
    dataBits?: 5 | 6 | 7 | 8;
    flowControl?: null | 'Software' | 'Hardware';
    parity?: null | 'Odd' | 'Even';
    stopBits?: 1 | 2;
    timeout?: number;
    size?: number;
    [key: string]: any;
}
interface Options {
    dataBits: 5 | 6 | 7 | 8;
    flowControl: null | 'Software' | 'Hardware';
    parity: null | 'Odd' | 'Even';
    stopBits: 1 | 2;
    timeout: number;
    [key: string]: any;
}
interface ReadOptions {
    timeout?: number;
    size?: number;
}
declare class Serialport {
    isOpen: boolean;
    unListen?: UnlistenFn;
    encoding: string;
    options: Options;
    size: number;
    constructor(options: SerialportOptions);
    /**
     * @description: 获取串口列表
     * @return
     */
    static available_ports(): Promise<string[]>;
    /**
     * @description: 强制关闭
     * @param {string} path
     * @return
     */
    static forceClose(path: string): Promise<void>;
    /**
     * @description: 关闭所有串口
     * @return
     */
    static closeAll(): Promise<void>;
    /**
     * @description: 取消串口监听
     * @return
     */
    cancelListen(): Promise<void>;
    /**
     * @description: 取消读取数据
     * @return
     */
    cancelRead(): Promise<void>;
    /**
     * @description:
     * @param {object} options
     * @return
     */
    change(options: {
        path?: string;
        baudRate?: number;
    }): Promise<void>;
    /**
     * @description: 关闭串口
     * @return
     */
    close(): Promise<void>;
    /**
     * @description: 监听串口信息
     * @param {function} fn
     * @return
     */
    listen(fn: (...args: any[]) => void, isDecode?: boolean): Promise<void>;
    /**
     * @description: 打开串口
     * @return
     */
    open(): Promise<void>;
    /**
     * @description: 读取串口信息
     * @param {ReadOptions} options 读取选项 { timeout, size }
     * @return
     */
    read(options?: ReadOptions): Promise<void>;
    /**
     * @description: 设置串口 波特率
     * @param {number} value
     * @return
     */
    setBaudRate(value: number): Promise<void>;
    /**
     * @description: 设置串口 path
     * @param {string} value
     * @return
     */
    setPath(value: string): Promise<void>;
    /**
     * @description: 串口写入数据
     * @param {string} value
     * @return
     */
    write(value: string): Promise<number>;
    /**
     * @description: 写入二进制数据到串口
     * @param {Uint8Array} value
     * @return
     */
    writeBinary(value: Uint8Array | number[]): Promise<number>;
}
export { Serialport };
