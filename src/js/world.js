/** @format */

class World {
	constructor(graph, roadWidth = 100, roadRoundness = 3) {
		this.graph = graph;
		this.roadRoundness = roadRoundness;
		this.roadWidth = roadWidth;

		this.envelopes = [];
		this.generate();
	}

	generate() {
		this.envelopes.length = 0;
		for (const seg of this.graph.segments) {
			this.envelopes.push(
				new Envelope(seg, this.roadWidth, this.roadRoundness)
			);
		}
	}

	draw(ctx) {
		for (const env of this.envelopes) {
			env.draw(ctx);
		}
	}
}
