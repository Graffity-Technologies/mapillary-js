import {
    map,
    filter,
    withLatestFrom,
} from "rxjs/operators";
import { Subscription } from "rxjs";

import { Transform } from "../../geo/Transform";
import { ViewportCoords } from "../../geo/ViewportCoords";
import { RenderCamera } from "../../render/RenderCamera";
import { IAnimationState } from "../../state/interfaces/IAnimationState";
import { AnimationFrame } from "../../state/interfaces/AnimationFrame";
import { Container } from "../../viewer/Container";
import { Navigator } from "../../viewer/Navigator";
import { Component } from "../Component";
import { MouseConfiguration } from "../interfaces/MouseConfiguration";
import { HandlerBase } from "../util/HandlerBase";
import { isSpherical } from "../../geo/Geo";

/**
 * The `ScrollZoomHandler` allows the user to zoom the viewer image by scrolling.
 *
 * @example
 * ```js
 * var mouseComponent = viewer.getComponent("mouse");
 *
 * mouseComponent.scrollZoom.disable();
 * mouseComponent.scrollZoom.enable();
 *
 * var isEnabled = mouseComponent.scrollZoom.isEnabled;
 * ```
 */
export class ScrollZoomHandler extends HandlerBase<MouseConfiguration> {
    private _viewportCoords: ViewportCoords;

    private _preventDefaultSubscription: Subscription;
    private _zoomSubscription: Subscription;

    /** @ignore */
    constructor(
        component: Component<MouseConfiguration>,
        container: Container,
        navigator: Navigator,
        viewportCoords: ViewportCoords) {
        super(component, container, navigator);

        this._viewportCoords = viewportCoords;
    }

    protected _enable(): void {
        this._container.mouseService.claimWheel(this._component.name, 0);

        this._preventDefaultSubscription = this._container.mouseService.mouseWheel$
            .subscribe(
                (event: WheelEvent): void => {
                    event.preventDefault();
                });

        this._zoomSubscription = this._container.mouseService
            .filteredWheel$(this._component.name, this._container.mouseService.mouseWheel$).pipe(
                withLatestFrom(
                    this._navigator.stateService.currentState$,
                    (w: WheelEvent, f: AnimationFrame): [WheelEvent, AnimationFrame] => {
                        return [w, f];
                    }),
                filter(
                    (args: [WheelEvent, AnimationFrame]): boolean => {
                        let state: IAnimationState = args[1].state;
                        return isSpherical(state.currentImage.cameraType) ||
                            state.imagesAhead < 1;
                    }),
                map(
                    (args: [WheelEvent, AnimationFrame]): WheelEvent => {
                        return args[0];
                    }),
                withLatestFrom(
                    this._container.renderService.renderCamera$,
                    this._navigator.stateService.currentTransform$,
                    (w: WheelEvent, r: RenderCamera, t: Transform): [WheelEvent, RenderCamera, Transform] => {
                        return [w, r, t];
                    }))
            .subscribe(
                (args: [WheelEvent, RenderCamera, Transform]): void => {
                    let event: WheelEvent = args[0];
                    let render: RenderCamera = args[1];
                    let transform: Transform = args[2];

                    let element: HTMLElement = this._container.container;

                    let [canvasX, canvasY]: number[] = this._viewportCoords.canvasPosition(event, element);

                    let unprojected =
                        this._viewportCoords.unprojectFromCanvas(
                            canvasX,
                            canvasY,
                            element,
                            render.perspective);

                    let reference: number[] = transform.projectBasic(unprojected.toArray());

                    let deltaY: number = event.deltaY;
                    if (event.deltaMode === 1) {
                        deltaY = 40 * deltaY;
                    } else if (event.deltaMode === 2) {
                        deltaY = 800 * deltaY;
                    }

                    const canvasSize: number[] = this._viewportCoords.containerToCanvas(element);

                    let zoom: number = -3 * deltaY / canvasSize[1];

                    this._navigator.stateService.zoomIn(zoom, reference);
                });
    }

    protected _disable(): void {
        this._container.mouseService.unclaimWheel(this._component.name);

        this._preventDefaultSubscription.unsubscribe();
        this._zoomSubscription.unsubscribe();

        this._preventDefaultSubscription = null;
        this._zoomSubscription = null;
    }

    protected _getConfiguration(enable: boolean): MouseConfiguration {
        return { scrollZoom: enable };
    }
}
