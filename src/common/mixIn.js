define(function() {

    /**
     * This method does exactly the same as the amd counterpart but
     * does not perform hasOwn for each key in the objects.
     *
     * @param {object}    target  Target Object
     * @param {...object} objects Objects to be combined (0...n objects)
     *
     * @return {object} Target Object
     */
    function mixIn(target, objects) {

        var x = 1,
            length = arguments.length,
            key, curr;
        for (; x < length; x += 1) {
            curr = arguments[x];
            for(key in arguments[x]){
                target[key] = curr[key];
            }
        }

        return target;
    }

    return mixIn;
});
