import { Subject } from "rxjs";

import { MockCreator } from "./MockCreator";
import { MockCreatorBase } from "./MockCreatorBase";

import { FilterFunction } from "../../src/graph/FilterCreator";
import { GraphMode } from "../../src/graph/GraphMode";
import { GraphService } from "../../src/graph/GraphService";

export class GraphServiceMockCreator extends MockCreatorBase<GraphService> {
    public create(): GraphService {
        const mock: GraphService = new MockCreator().create(GraphService, "GraphService");

        this._mockProperty(mock, "dataAdded$", new Subject<string>());
        this._mockProperty(mock, "graphMode$", new Subject<GraphMode>());
        this._mockProperty(mock, "filter$", new Subject<FilterFunction>());

        return mock;
    }
}
