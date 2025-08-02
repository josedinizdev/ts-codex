export function safe(onError) {
    return function (func) {
        try {
            return func();
        }
        catch {
            return onError ?? undefined;
        }
    };
}
//# sourceMappingURL=safe.js.map