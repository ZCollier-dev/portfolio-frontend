/* NEW TECH UNLOCKED: Signals. DOCUMENTATION: https://preactjs.com/guide/v10/signals/
    Another approach to state management (useState, useEffect, etc)
    Most useful when implemented from the start of a new project, like this one. 
    Hell to implement into an existing React/Preact project, as it breaks the usual hooks.
    signal is a global state management system - the value is in signalName.value
    useSignal is a hook that allows signals to be used from within a component
    effect is a replacement for the useEffect hook, taking an arrow function which runs code whenever a signal value changes
    useSignalEffect is a hook that allows effects to be used within a component
    calling the effect as a function breaks the subscription to the signal
    signals can be exported and used in other components. export const signalName = signal()
    When needed, import into a component as if it were a component.
    If a signal needs to be computed into another signal, use the computed function
    computed takes an arrow function and creates a new signal out of the return value
    useComputed, same deal as the other hooks
    To make it easy to test, pass it from a signals file (like this one!) into a component's prop
    .peek() can be used to update a signal without subscribing to it
    The untracked function does the same for all signals contained within it
    batch combines multiple signal updates into one 'commit'
    useSignalRef creates a signal that behaves like a React ref
    useLiveSignal allows a local signal to be synchronized with an external signal*/

//const count = signal(0);

/*<button onClick={() => {count.value = count.value + 1}}>
          count is {count.value}
        </button> */

import { signal, effect, computed } from "@preact/signals"