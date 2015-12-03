/// <reference path="../../typings/jasmine/jasmine.d.ts" />

import {Node, Sequence} from "../../src/Graph";

describe("Node", () => {
    var sequence: Sequence;

    beforeEach(() => {
        let response: any = {
            key: 'A',
            keys: ['B','C','D','E'],
            path: {}
        }
        sequence = new Sequence(response);
    });

    it("should create a node", () => {
        let node: Node = new Node("C", 0, {lat: 1, lon: 1}, true, sequence, null, null);
        expect(node).toBeDefined();
    });

    it("should find next node key in nodes sequence", () => {
        let node: Node = new Node("C", 0, {lat: 1, lon: 1}, true, sequence, null, null);
        expect(node.findNextKeyInSequence()).toEqual('D')
    });

    it("should find prev node key in nodes sequence", () => {
        let node: Node = new Node("C", 0, {lat: 1, lon: 1}, true, sequence, null, null);
        expect(node.findPrevKeyInSequence()).toEqual('B')
    });

    it("should return null if no next key", () => {
        let node: Node = new Node("E", 0, {lat: 1, lon: 1}, true, sequence, null, null);
        expect(node.findNextKeyInSequence()).toBe(null)
    });

    it("should return null if no prev key", () => {
        let node: Node = new Node("B", 0, {lat: 1, lon: 1}, true, sequence, null, null);
        expect(node.findPrevKeyInSequence()).toBe(null)
    });
});