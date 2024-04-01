export type Methods<T> = { [K in keyof T as (T[K] extends Function ? K : never)]: ThisType<T[K]> }