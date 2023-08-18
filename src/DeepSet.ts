import equal from "fast-deep-equal";

export class DeepSet<T> extends Set<T> {
    override add(o: T) {
        for (let i of this)
            if (equal(o, i)) {
                return this;
            }

        super.add.call(this, o);
        return this;
    }
}
