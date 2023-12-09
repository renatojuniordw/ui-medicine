type ServiceHook<T> = [T, () => Promise<void>];

export type ServiceHookWithId<T, S> = [T, (id: S) => Promise<void>];

export default ServiceHook;
