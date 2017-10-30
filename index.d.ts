// Type definitions for quasar-framework 0.14.6
// Project: http://quasar-framework.org/
// Definitions by:  icfr <https://github.com/icfr>
//                  Cedric Kemp <https://github.com/jaeggerr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import Vue, { PluginFunction } from 'vue'

export interface IBtn {
  /** Name of the icon to use. */
  icon: string
  /** Name of the icon to place on right side of button. */
  iconRight: string
  /** Display a spinner, if true. Can be optionally used along v-model. Check Button with Progress section. */
  loader: boolean
  /** Optional property for displaying a determinate progress. Use along loader. */
  percentage?: number
  /** Optional property for displaying a determinate progress on a light button color. Use along loader and percentage. */
  darkPercentage?: boolean
  /** Set true, if you want a round button. */
  round: boolean
  /** Set true, if you want an outlined button. */
  outline: boolean
  /** Set true, if you want a flat button. */
  flat: boolean
  /** Set true, if the square button should have rounded corners. */
  rounded: boolean
  /** Set true, if the button should have a push effect. */
  push: boolean
  /** Set true, if the button should be small. */
  small: boolean
  /** Set true, if the button should be big. */
  big: boolean
  /** Set true, if the button should be glossy. */
  glossy: boolean
  /** The button is disabled, if true. @click event won’t be triggered while in this state. */
  disable: boolean
  /** A color from Quasar Color Palette. */
  color: string
  /** Set true, if you don’t want button content/label to be transformed to uppercase letter on Material Theme. */
  noCaps: boolean
}

export const QBtn: IBtn

export interface ICard {
  /** Squared borders instead of round ones. */
  square: boolean
  /** Remove shadow. */
  flat: boolean
  /** Make it inline. Also set a CSS width to work. Take a look at Grid example on the “More Examples” section. */
  inline: boolean
  /** One color from Quasar Color Palette. */
  color: string
}

export const QCard: ICard

export interface ICarousel {
  /** Infinite slides scrolling */
  infinite: boolean
  /**	Auto scrolls between slides. Works great along infinite prop (but infinite is not required). If used as a number, it represents the number of milliseconds between scrolls. */
  autoplay: boolean | number
  /** Show arrows */
  arrows: boolean
  /** Show dots at bottom */
  dots: boolean
  /** Boolean	Shows Fullscreen button */
  fullscreen: boolean
  /** Allow navigation with left and right arrow key */
  handleArrowKeys: boolean
  /** Show Actions slot */
  actions: boolean
  /** Show animation when slide changes. If used as number, represents the duration of the animation. Default is true, default duration is 300 ms.*/
  animation: boolean | number
  /** Disable swiping. */
  noSwipe: boolean
  /** Easing function used when changing slide from autoplay or button press. */
  easing: (t: number) => number
  /** Easing function used when changing slide with a swipe */
  swipeEasing: (t: number) => number

  /** Goes to next slide. */
  next(done: () => void): void
  /** Goes to previous slide. */
  previous(done: () => void): void
  /** Go to the desired slide. slideNumber is 0-based. */
  goToSlide(slideNumber: number, done: () => void): void
  /** Toggles fullscreen mode. */
  toggleFullscreen(): void
}

export const QCarousel: ICarousel

export interface IKnob {
  /** CSS String determining the width and height of the Knob. Examples: “120px”, “12rem”. */
  size: string
  /** Number representing difference between two values that the model can take. Default: 1. */
  step: number
  /** Minimum value that the model can take. */
  min: number
  /** Maximum value that the model can take. */
  max: number
  /** One from Quasar Color Palette. */
  color: string
  /** String	One from Quasar Color Palette. */
  trackColor: string
  /** Line width of Knob. Default is ‘6px’. */
  lineWidth: string
  /** Sort of a “display” only mode. Model cannot be altered. */
  readonly: boolean
  /** When set to true the model cannot be altered. */
  disable: boolean
}

export const QKnob: IKnob

export interface ISpinner {
  name: string
  mixins: any[]
}

export const QSpinnerAudio: ISpinner
export const QSpinnerBall: ISpinner
export const QSpinnerBars: ISpinner
export const QSpinnerCircles: ISpinner
export const QSpinnerComment: ISpinner
export const QSpinnerCube: ISpinner
export const QSpinnerDots: ISpinner
export const QSpinnerFacebook: ISpinner
export const QSpinnerGears: ISpinner
export const QSpinnerGrid: ISpinner
export const QSpinnerHearts: ISpinner
export const QSpinnerHourglass: ISpinner
export const QSpinnerInfinity: ISpinner
export const QSpinnerIos: ISpinner
export const QSpinnerMat: ISpinner
export const QSpinnerOval: ISpinner
export const QSpinnerPie: ISpinner
export const QSpinnerPuff: ISpinner
export const QSpinnerRadio: ISpinner
export const QSpinnerRings: ISpinner
export const QSpinnerTail: ISpinner

export interface ILoading {
  show(options?: ILoadingOptions): void
  hide(): void
  isActive(): boolean
}

interface ILoadingOptions {
  delay?: number
  message?: string
  messageColor?: string
  spinner?: ISpinner
  spinnerSize?: number
  spinnerColor?: string
}

export interface IActionSheet {
  create(options: IActionSheetOptions): void
}

interface IActionSheetOptions {
  title: string
  gallery?: boolean
  actions: IActionSheetAction[]
  dismiss?: IActionSheetDismiss

}

interface IActionSheetAction {
  label: string
  icon?: string
  avatar?: string
  handler: Function
}
interface IActionSheetDismiss {
  label: string
  icon?: string
  classes?: string
  handler: Function
}

export interface IToast {
  create: IToastCreate
  setDefaults(options: IToastOptions): void
}



interface IToastOptions {
  html: string
  icon?: string
  timeout?: number
  button?: IToastButton
  color?: string
  bgColor?: string
  onDismiss?: Function

}
interface IToastButton {
  label: string
  handler: Function
  color?: string
}
export interface IToastCreate {
  (message: string | IToastOptions): void
  positive(message: string | IToastOptions): void
  negative(message: string | IToastOptions): void
  warning(message: string | IToastOptions): void
  info(message: string | IToastOptions): void
}
export interface IDialogCreate {
  (options: DialogOptions): void
}

export interface IDialog {
  create: IDialogCreate
}
interface DialogOptionsButtons {
  label: string
  preventClose?: boolean
  classes?: string
}

interface DialogOptionsButtonsHandler extends DialogOptionsButtons {
  handler(data: any, close?: Function): void
}

interface DialogOptionFrom {
  type: 'textbox' | 'password' | 'numreric' | 'chips' | 'textarea' | 'heading'
  label: string
  model?: string | string[]
  min?: number
  max?: number
}
interface DialogOptions {
  title?: string
  message?: string
  buttons?: Array<string | DialogOptionsButtons | DialogOptionsButtonsHandler>
  stackButtons?: boolean
  nobuttons?: boolean
  progress?: any
  form?: { [key: string]: DialogOptionFrom }
  onDismiss?: Function
  noBackdropDismiss?: boolean
  /**
   * Can Dialog be dismissed by hitting Escape key?
   *
   * @type {boolean}
   * @memberOf DialogOptions
   */
  noEscDismiss?: boolean
}

export interface ITabs {
  setActiveTab(name: string): void
}

export interface ITab {
  /** Make this Tab the selected one. */
  activate(): void
  /** Unselect this Tab as the active one. */
  deactivate(): void
  /** Sets the target as visible (true) or hides it (false). */
  setTargetVisibility(visible: boolean): void

}

export interface IAutoComplete extends Vue {
  /** Trigger suggestions. */
  trigger(): void
  /** Close suggestions popover. */
  close(): void
  /** Close suggestions popover. */
  setValue(): void
  /** Close suggestions popover. */
  move(offset: number): void
}

export interface IchipsTextbox extends Vue {
  /** Adds value to the model. */
  add(value: string): void
  /** Removes value at index in model. */
  remove(index: number): void
  /** Focuses the input text field. */
  focus(): void
}

interface IopenClose extends Vue {
  open(): void
  close(): void
}

interface IOpenCloseToggle extends IopenClose {
  toggle(): void
}

export interface IDatetime extends IopenClose { }

export interface IInlineDatetime extends Vue {
  /**	Sets the year. */
  setYear(year: number): void
  /** Sets the month (1 - 12).*/
  setMonth(month: number): void
  /** Sets day of the month. */
  setDay(day: number): void
  /** Toggles between AM and PM. */
  toggleAmPm(): void

  /**	Sets hour (0 - 23). */
  setHour(hour: number): void
  /** Sets minute (0 - 59). */
  setMinute(minute: number): void
}

export interface IRating {
  /** Parses and sets that value. */
  set(value: number): void
}

export interface ISearch {
  /** Resets the model to an empty string. */
  clear(): void

}

export interface ISelect extends IopenClose { }

export interface IDialogSelect {
  /** Opens up the Dialog so user can pick options. */
  pick(): void
}

export interface IModal extends IOpenCloseToggle { }
export interface IDrawer extends IopenClose {
  setState(state: boolean, done: Function): void
}

export interface IQfab extends IOpenCloseToggle { }

export interface IAjaxBar extends Vue {
  /** Where to place the loading bar: ‘top’, ‘bottom’, ‘left’ or ‘right’. Default: top’ */
  position: 'top' | 'bottom' | 'left' | 'right'
  /**	Thickness of loading bar. Default: ‘4px’ */
  size: string
  /** One from Quasar Color Palette. Default: ‘red’ */
  color: string
  /** How fast should loading bar update its value (in milliseconds). Default: 250 */
  speed: number
  /** How much should loading bar wait before showing loading bar after it’s triggered (in milliseconds). Default: 1000 */
  delay: number
  /** Reverse direction of loading bar. Default: false */
  reverse:boolean

  /**	Trigger loading bar. */
  start(): void
  /**	Notify one event has finished.*/
  stop(): void
}

interface ICollapsible extends IOpenCloseToggle { }

interface IContextMenu extends Vue {
  close(): void
}

interface IDataTable extends Vue {
  /** If parameter is missing or true then it puts Data Table in refresh mode. If parameter is false then components gets out of refresh mode. */
  refresh(refreshMode: boolean): void
}

export interface InfiniteScroll extends Vue {
  /** Stops working, regardless of scroll position.*/
  stop(): void
  /** Tells Infinite Scroll to load more content, regardless of the scroll position. */
  loadMore(index: number, done: Function): void
  /** Resets calling index to 0.*/
  reset(): void
  /** Starts working.Checks scroll position upon call and if trigger is hit, it loads more content.*/
  resume(): void
  /** Checks scroll position and loads more content if necessary.*/
  poll(): void
}

export interface IImageGalery extends Vue {
  /**	Toggle thumbnails view. */
  toggleQuickView(): void
  /**Go to a certain slide number (with animation or not).*/
  goToSlide(index: number, animation: boolean): void
}

export interface IPagination extends Vue {
  /** Parses and sets page number to value.*/
  set(value: number): void
  /**	Parses and sets page number to current value + value.Negative values allowed. */
  setByOffset(value: number): void
}

export interface IPopover extends IOpenCloseToggle { }

export interface ISlider extends Vue {
  /** Go to respective slide, optionally with no animation (instantly).*/
  goToSlide(slide: number, noAnimation: boolean): void
  /** Toggles fullscreen mode */
  toggleFullscreen(): void
}

export interface Stepper extends Vue {
  /** Stepper goes to next step. */
  nextStep(): void
  /** Stepper goes to previous step. */
  previousStep(): void
  /** Stepper goes to “complete” state. */
  finish(): void
}

export interface StepperContainer extends Stepper {
  /** Resets progress*/
  reset(): void
}

export interface tooltip extends IOpenCloseToggle { }

export interface IUploader extends Vue {
  /** Start file(s) upload. */
  upload(): void
}

export interface IAppVisibility {
  isVisible(): boolean
}

export interface IAppFullscreen {
  /** Determining if website is in fullscreen mode */
  isActive(): boolean
  /** Requesting fullscreen mode */
  request(): void
  /** Exiting fullscreen mode */
  exit(): void
  /** Toggle fullscreen mode */
  toggle(): void
}

interface ICookiesOptions {
  expire?: number
  path?: string
  domain?: string
  secure?: boolean
}

export interface ICookies {
  get(name: string): string
  all(): any[]
  has(name: string): boolean
  set(name: string, value: string, options?: ICookiesOptions): void
  remove(name: string): void
}

export interface IEvents {
  /** Register for an event */
  $on(name: string, callback: Function): void
  /** Removing callback for an event */
  $off(name: string): void
  /** Registering a Callback to Be Run Only Once */
  $once(name: string, callback: Function): void
  /** Triggering an event */
  $emit(name: string, payload: any): void
}

export interface IUtils {
  openUrl(url: string): void
  debounce(fn: Function, milliseconds_to_wait: number, immediate: boolean): Function
  throttle(fn: Function, milliseconds_to_wait: number): Function
  extend<T>(deepCopyOrTarget: boolean| T, target: object, ...object: Object[]): T
  uid(): string
  animate: IUtilsAnimate
  colors: IUtilsColors
  format: IUtilsFormat
  dom: IUtilsDom
  event: IUtilsEvent
  filter(terms: string,options: IUtilsFilterOptions): object[]
}

interface IUtilsFilterOptions {
  field: string
  list: object[]
}

interface IUtilsAnimate {
  start(option: IUtilsAnimateOptions): string
  /* Stop an animation using its name or id returned from start */
  stop(idOrName: string): void
}

interface IUtilsAnimateOptions {
  /* optional, if none is supplied a unique one is created and returned */
  name?: string
  finalPos: number
  /* current position */
  pos: number
  /* on each step, it adds (finalPosition - currentPosition) / factor */
  factor: number
  /* function to call when animation is done */
  done: (finalPosition: number) => void
  /* function called on each step so you can apply changes */
  apply: (currentPosition: number) => void
  /* if Math.abs(finalPosition - currentPosition) < threshold then stop and we're done */
  treshhold: number
}

interface IUtilsColors {
  rgbToHex(red: number, green: number, blue: number): string
  hexToRgb(hex: string): number[]
}

interface IUtilsFormat {
  humanStorageSize(size: number): string
}

interface IUtilsDom {
  offset(el: HTMLElement): {top: number, left: number}
  style(el: HTMLElement, property: string): string
  height(el: HTMLElement): number
  width(el: HTMLElement): number
  css(el: HTMLElement,css: object): void
  viewport(): {width: number, height: number}
  ready(fn: Function): void
  getScrollTarget(el: HTMLElement): HTMLElement
  getScrollPosition(scrollTarget: HTMLElement): number
  setScrollPosition(scrollTarget: HTMLElement, offset: number, duration: number): void
  cssTransform(val: string): object
}

interface IUtilsEvent {
  rightClick(e: MouseEvent): boolean
  position(e: MouseEvent|TouchEvent): {top: number, left: number}
  targetElement(e: MouseEvent| TouchEvent): HTMLElement
}

export interface IWebStorage {
  set(key: string, value: any): void
  get: IWebStorageGet
  remove(key: string): void
  clear(): void
  isEmpty(): boolean
  has(key: string): boolean
}

interface IWebStorageGet {
  item(key: string): any
  all(): object
  length(): number
  index(index: number): any
}

export interface IPlateform {
  is: {
    mobile: boolean
    cordova: boolean
    desktop: boolean
    android: boolean
    blackberry: boolean
    cros: boolean
    ios: boolean
    ipad: boolean
    iphone: boolean
    ipod: boolean
    kindle: boolean
    linux: boolean
    mac: boolean
    playbook: boolean
    silk: boolean
    chrome: boolean
    opera: boolean
    safari: boolean
    win: boolean
    webkit: boolean
    name: string
    plateform: string
    version: number
    versionNumber: number

  }
  has: {
    touch: boolean
    popstate: boolean
  }
  within: {
    iframe: boolean
  }
}

export const ActionSheet: IActionSheet
export const Dialog: IDialog
export const AppFullscreen: IAppFullscreen
export const AppVisibility: IAppVisibility
export const Cookies: ICookies
export const Platform: IPlateform
export const Events: IEvents
export const Loading: ILoading
export const Toast: IToast
export const Utils: IUtils
export const LocalStorage: IWebStorage
export const SessionStorage: IWebStorage

declare module 'quasar-framework' {
  const version: string
  function install(): PluginFunction<never>
  function start(callback: Function): void
  const theme: string
}
