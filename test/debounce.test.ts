// This is really easy if you know JS and a horrible torture in any other language - use this exercise with care
function debounce<T extends (...args: any) => any>(fun: T, timeout: number): (...args: Parameters<T>) => (Promise<ReturnType<T>>) {
    let latestInvocation = 0;

    return (...args: any[]) => { // I have some typing problems here as Parameters<T> is not an array
        latestInvocation++;
        const currentInvocation = latestInvocation;
        return new Promise((resolve, reject) =>
            setTimeout(() => {
                if (latestInvocation == currentInvocation) {
                    resolve(fun(...args))
                } else {
                    reject()
                }
            }, timeout)
        )
    }
}

// Normally we should use here fake timers from sinon
describe("when debounce is executed twice", () => {
    test("then after timeout only second invocation is executed", () => {
        let numberState = 0;
        const fun = debounce((someNumber) => numberState += someNumber, 20)
        
        fun(1).catch(() => undefined)
        fun(2)
        
        setTimeout(() => expect(numberState).toBe(2), 50)
    })

    test("then before timeout nothing changes", () => {
        let numberState = 0;
        const fun = debounce((someNumber) => numberState += someNumber, 20)
        
        fun(1).catch(() => undefined)
        fun(2)
        
        setTimeout(() => expect(numberState).toBe(0), 10)
    })

})
