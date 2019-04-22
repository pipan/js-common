## Common Module

This module provides basic services, that are handy in most applications.

# Installation

```sh
npm install --save @wildebeest/common
```

## Requirements

It's usefull to know these libraries:

* inversify
* @wildebeest/js-modules

## Emitter

Event emitter can be global, or specific for an instance / element. Emitter is used o comunicate internal changes. basicli it "screms" when something happens, and other parts of application can react to taht. You should use `EmitterService` for creating new emitrer instances.

### Subscribing

To listen for a change you have to `subscribe` to emitter. That can be done with `on` method.

```ts
foo(emitterService: EmitterService)
{
    let emitter: Emitter = emitterService.createEmitter();
    let subscriber: Subscriber = emitter.on('eventName', (data: any) => {
        console.log("Do Something);
    });
}
```

First parameter of Emitter is the `event name` and second parameter is a `callback with data parameters`, that will be called, when event is emitted. You can palce any logic to this callback. `on` method returns `Subscriber` that should be used to unsubscribe this listener.

### Emitting

If you need to emit an event, you have to call `emit` method and specify `event name` and `event data`. Data object will be passed as a parameter to all callbacks that listen to this event.

```ts
foo(emitterService: EmitterService)
{
    let emitter: Emitter = emitterService.createEmitter();
    emitter.emit('eventName', {
        oldValue: 0,
        newValue: 2
    });
}
```

### Unsubscribing

You should always unsubscribe event, otherwise it can lead to memory leaks and your application halting from callback overflow. The easiest way to unsubscribe, is to use `Subscriber` instance returned by `on` method.

```ts
foo(emitterService: EmitterService)
{
    let emitter: Emitter = emitterService.createEmitter();
    this.subscriber: Subscriber = emitter.on('eventName', (data: any) => {
        console.log("Do Something");
    });
}

onDestroy()
{
    this.subscriber.unsubscribe();
}
```

> Other way to unsubscribe is to use emiter `off` method that accepts as a parameter `Subscriber` instance

## EmitterService | `Injectable`

This service provide a way to create new `Emitters` and also has a `global events`. You can call `on`, `emit` and `off` method, as if you are using emitter, but this will keep its listener for the entire duration of the application. Unless you unsubscribe, of course.

## DomService | `Injectable`

To make DOM manipulation easier, we created `DomService`. If helps you create `HTMLElement` from string and insert elements into another element.

### Creating HTMLElement From String

Use DomService `create` method, that accepts string as a parameter and returns `HTMLElement`.

```ts
foo(domService: DomService)
{
    let element: HTMLElement = domService.create('<div class="header"></div>);
}
```

You can also create nested elements.

```ts
foo(domService: DomService)
{
    let element: HTMLElement = domService.create('<div class="header"><div class="header-item>one</div><div class="header-item">two</div></div>');
}
```

>  Make sure that string contains only `one root` element.

### Inserting Elements Into Elements

Use DomService `insert` method to insert elements inside another. First parameter is `array of elements` to be inserted and second parameter is element that will `recieve` these new elements.

```ts
foo(domService: DomService)
{
    let element: HTMLElement = domService.create('<div class="header"></div>');
    domService.insert([element], document.body);
}
```

> In this example we insert `header` to document `body`

## ViewportService | `Injectable`

Gain access to viewport specifications like `width` and `height`. This service also emits `change` event when viewport changes size, for example on resize.

To access viewport width use `getWidth()` and to access viewport height use `getHeight()`.