import {Node} from "../../Graph";
import {Camera, Transform} from "../../Geo";

export interface ICurrentState2 {
    alpha: number;
    camera: Camera;
    currentNode: Node;
    previousNode: Node;
    trajectory: Node[];
    currentIndex: number;
    currentTransform: Transform;
    previousTransform: Transform;
}
