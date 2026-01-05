
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model booking
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type booking = $Result.DefaultSelection<Prisma.$bookingPayload>
/**
 * Model customer
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type customer = $Result.DefaultSelection<Prisma.$customerPayload>
/**
 * Model service
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type service = $Result.DefaultSelection<Prisma.$servicePayload>
/**
 * Model staff
 * 
 */
export type staff = $Result.DefaultSelection<Prisma.$staffPayload>
/**
 * Model time_off
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type time_off = $Result.DefaultSelection<Prisma.$time_offPayload>
/**
 * Model working_hours
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type working_hours = $Result.DefaultSelection<Prisma.$working_hoursPayload>
/**
 * Model booking2
 * 
 */
export type booking2 = $Result.DefaultSelection<Prisma.$booking2Payload>

/**
 * Enums
 */
export namespace $Enums {
  export const booking_status: {
  PENDING: 'PENDING',
  CONFIRMED: 'CONFIRMED',
  CANCELLED: 'CANCELLED'
};

export type booking_status = (typeof booking_status)[keyof typeof booking_status]

}

export type booking_status = $Enums.booking_status

export const booking_status: typeof $Enums.booking_status

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Bookings
 * const bookings = await prisma.booking.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Bookings
   * const bookings = await prisma.booking.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.booking`: Exposes CRUD operations for the **booking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.booking.findMany()
    * ```
    */
  get booking(): Prisma.bookingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customer`: Exposes CRUD operations for the **customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.customerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.service`: Exposes CRUD operations for the **service** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Services
    * const services = await prisma.service.findMany()
    * ```
    */
  get service(): Prisma.serviceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.staff`: Exposes CRUD operations for the **staff** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Staff
    * const staff = await prisma.staff.findMany()
    * ```
    */
  get staff(): Prisma.staffDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.time_off`: Exposes CRUD operations for the **time_off** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Time_offs
    * const time_offs = await prisma.time_off.findMany()
    * ```
    */
  get time_off(): Prisma.time_offDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.working_hours`: Exposes CRUD operations for the **working_hours** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Working_hours
    * const working_hours = await prisma.working_hours.findMany()
    * ```
    */
  get working_hours(): Prisma.working_hoursDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.booking2`: Exposes CRUD operations for the **booking2** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Booking2s
    * const booking2s = await prisma.booking2.findMany()
    * ```
    */
  get booking2(): Prisma.booking2Delegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.2.0
   * Query Engine version: 0c8ef2ce45c83248ab3df073180d5eda9e8be7a3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    booking: 'booking',
    customer: 'customer',
    service: 'service',
    staff: 'staff',
    time_off: 'time_off',
    working_hours: 'working_hours',
    booking2: 'booking2'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "booking" | "customer" | "service" | "staff" | "time_off" | "working_hours" | "booking2"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      booking: {
        payload: Prisma.$bookingPayload<ExtArgs>
        fields: Prisma.bookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.bookingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.bookingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingPayload>
          }
          findFirst: {
            args: Prisma.bookingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.bookingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingPayload>
          }
          findMany: {
            args: Prisma.bookingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingPayload>[]
          }
          create: {
            args: Prisma.bookingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingPayload>
          }
          createMany: {
            args: Prisma.bookingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.bookingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingPayload>[]
          }
          delete: {
            args: Prisma.bookingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingPayload>
          }
          update: {
            args: Prisma.bookingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingPayload>
          }
          deleteMany: {
            args: Prisma.bookingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.bookingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.bookingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingPayload>[]
          }
          upsert: {
            args: Prisma.bookingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingPayload>
          }
          aggregate: {
            args: Prisma.BookingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBooking>
          }
          groupBy: {
            args: Prisma.bookingGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingGroupByOutputType>[]
          }
          count: {
            args: Prisma.bookingCountArgs<ExtArgs>
            result: $Utils.Optional<BookingCountAggregateOutputType> | number
          }
        }
      }
      customer: {
        payload: Prisma.$customerPayload<ExtArgs>
        fields: Prisma.customerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.customerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.customerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload>
          }
          findFirst: {
            args: Prisma.customerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.customerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload>
          }
          findMany: {
            args: Prisma.customerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload>[]
          }
          create: {
            args: Prisma.customerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload>
          }
          createMany: {
            args: Prisma.customerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.customerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload>[]
          }
          delete: {
            args: Prisma.customerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload>
          }
          update: {
            args: Prisma.customerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload>
          }
          deleteMany: {
            args: Prisma.customerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.customerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.customerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload>[]
          }
          upsert: {
            args: Prisma.customerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.customerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.customerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      service: {
        payload: Prisma.$servicePayload<ExtArgs>
        fields: Prisma.serviceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.serviceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.serviceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicePayload>
          }
          findFirst: {
            args: Prisma.serviceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.serviceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicePayload>
          }
          findMany: {
            args: Prisma.serviceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicePayload>[]
          }
          create: {
            args: Prisma.serviceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicePayload>
          }
          createMany: {
            args: Prisma.serviceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.serviceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicePayload>[]
          }
          delete: {
            args: Prisma.serviceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicePayload>
          }
          update: {
            args: Prisma.serviceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicePayload>
          }
          deleteMany: {
            args: Prisma.serviceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.serviceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.serviceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicePayload>[]
          }
          upsert: {
            args: Prisma.serviceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicePayload>
          }
          aggregate: {
            args: Prisma.ServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateService>
          }
          groupBy: {
            args: Prisma.serviceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.serviceCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceCountAggregateOutputType> | number
          }
        }
      }
      staff: {
        payload: Prisma.$staffPayload<ExtArgs>
        fields: Prisma.staffFieldRefs
        operations: {
          findUnique: {
            args: Prisma.staffFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.staffFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffPayload>
          }
          findFirst: {
            args: Prisma.staffFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.staffFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffPayload>
          }
          findMany: {
            args: Prisma.staffFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffPayload>[]
          }
          create: {
            args: Prisma.staffCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffPayload>
          }
          createMany: {
            args: Prisma.staffCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.staffCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffPayload>[]
          }
          delete: {
            args: Prisma.staffDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffPayload>
          }
          update: {
            args: Prisma.staffUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffPayload>
          }
          deleteMany: {
            args: Prisma.staffDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.staffUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.staffUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffPayload>[]
          }
          upsert: {
            args: Prisma.staffUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffPayload>
          }
          aggregate: {
            args: Prisma.StaffAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStaff>
          }
          groupBy: {
            args: Prisma.staffGroupByArgs<ExtArgs>
            result: $Utils.Optional<StaffGroupByOutputType>[]
          }
          count: {
            args: Prisma.staffCountArgs<ExtArgs>
            result: $Utils.Optional<StaffCountAggregateOutputType> | number
          }
        }
      }
      time_off: {
        payload: Prisma.$time_offPayload<ExtArgs>
        fields: Prisma.time_offFieldRefs
        operations: {
          findUnique: {
            args: Prisma.time_offFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$time_offPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.time_offFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$time_offPayload>
          }
          findFirst: {
            args: Prisma.time_offFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$time_offPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.time_offFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$time_offPayload>
          }
          findMany: {
            args: Prisma.time_offFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$time_offPayload>[]
          }
          create: {
            args: Prisma.time_offCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$time_offPayload>
          }
          createMany: {
            args: Prisma.time_offCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.time_offCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$time_offPayload>[]
          }
          delete: {
            args: Prisma.time_offDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$time_offPayload>
          }
          update: {
            args: Prisma.time_offUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$time_offPayload>
          }
          deleteMany: {
            args: Prisma.time_offDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.time_offUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.time_offUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$time_offPayload>[]
          }
          upsert: {
            args: Prisma.time_offUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$time_offPayload>
          }
          aggregate: {
            args: Prisma.Time_offAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTime_off>
          }
          groupBy: {
            args: Prisma.time_offGroupByArgs<ExtArgs>
            result: $Utils.Optional<Time_offGroupByOutputType>[]
          }
          count: {
            args: Prisma.time_offCountArgs<ExtArgs>
            result: $Utils.Optional<Time_offCountAggregateOutputType> | number
          }
        }
      }
      working_hours: {
        payload: Prisma.$working_hoursPayload<ExtArgs>
        fields: Prisma.working_hoursFieldRefs
        operations: {
          findUnique: {
            args: Prisma.working_hoursFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$working_hoursPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.working_hoursFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$working_hoursPayload>
          }
          findFirst: {
            args: Prisma.working_hoursFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$working_hoursPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.working_hoursFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$working_hoursPayload>
          }
          findMany: {
            args: Prisma.working_hoursFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$working_hoursPayload>[]
          }
          create: {
            args: Prisma.working_hoursCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$working_hoursPayload>
          }
          createMany: {
            args: Prisma.working_hoursCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.working_hoursCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$working_hoursPayload>[]
          }
          delete: {
            args: Prisma.working_hoursDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$working_hoursPayload>
          }
          update: {
            args: Prisma.working_hoursUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$working_hoursPayload>
          }
          deleteMany: {
            args: Prisma.working_hoursDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.working_hoursUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.working_hoursUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$working_hoursPayload>[]
          }
          upsert: {
            args: Prisma.working_hoursUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$working_hoursPayload>
          }
          aggregate: {
            args: Prisma.Working_hoursAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorking_hours>
          }
          groupBy: {
            args: Prisma.working_hoursGroupByArgs<ExtArgs>
            result: $Utils.Optional<Working_hoursGroupByOutputType>[]
          }
          count: {
            args: Prisma.working_hoursCountArgs<ExtArgs>
            result: $Utils.Optional<Working_hoursCountAggregateOutputType> | number
          }
        }
      }
      booking2: {
        payload: Prisma.$booking2Payload<ExtArgs>
        fields: Prisma.booking2FieldRefs
        operations: {
          findUnique: {
            args: Prisma.booking2FindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$booking2Payload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.booking2FindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$booking2Payload>
          }
          findFirst: {
            args: Prisma.booking2FindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$booking2Payload> | null
          }
          findFirstOrThrow: {
            args: Prisma.booking2FindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$booking2Payload>
          }
          findMany: {
            args: Prisma.booking2FindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$booking2Payload>[]
          }
          create: {
            args: Prisma.booking2CreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$booking2Payload>
          }
          createMany: {
            args: Prisma.booking2CreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.booking2CreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$booking2Payload>[]
          }
          delete: {
            args: Prisma.booking2DeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$booking2Payload>
          }
          update: {
            args: Prisma.booking2UpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$booking2Payload>
          }
          deleteMany: {
            args: Prisma.booking2DeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.booking2UpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.booking2UpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$booking2Payload>[]
          }
          upsert: {
            args: Prisma.booking2UpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$booking2Payload>
          }
          aggregate: {
            args: Prisma.Booking2AggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBooking2>
          }
          groupBy: {
            args: Prisma.booking2GroupByArgs<ExtArgs>
            result: $Utils.Optional<Booking2GroupByOutputType>[]
          }
          count: {
            args: Prisma.booking2CountArgs<ExtArgs>
            result: $Utils.Optional<Booking2CountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    booking?: bookingOmit
    customer?: customerOmit
    service?: serviceOmit
    staff?: staffOmit
    time_off?: time_offOmit
    working_hours?: working_hoursOmit
    booking2?: booking2Omit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    booking: number
    booking2: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | CustomerCountOutputTypeCountBookingArgs
    booking2?: boolean | CustomerCountOutputTypeCountBooking2Args
  }

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountBookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bookingWhereInput
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountBooking2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: booking2WhereInput
  }


  /**
   * Count Type ServiceCountOutputType
   */

  export type ServiceCountOutputType = {
    booking: number
    booking2: number
  }

  export type ServiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | ServiceCountOutputTypeCountBookingArgs
    booking2?: boolean | ServiceCountOutputTypeCountBooking2Args
  }

  // Custom InputTypes
  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCountOutputType
     */
    select?: ServiceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeCountBookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bookingWhereInput
  }

  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeCountBooking2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: booking2WhereInput
  }


  /**
   * Count Type StaffCountOutputType
   */

  export type StaffCountOutputType = {
    booking: number
    booking2: number
    time_off: number
    working_hours: number
  }

  export type StaffCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | StaffCountOutputTypeCountBookingArgs
    booking2?: boolean | StaffCountOutputTypeCountBooking2Args
    time_off?: boolean | StaffCountOutputTypeCountTime_offArgs
    working_hours?: boolean | StaffCountOutputTypeCountWorking_hoursArgs
  }

  // Custom InputTypes
  /**
   * StaffCountOutputType without action
   */
  export type StaffCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffCountOutputType
     */
    select?: StaffCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StaffCountOutputType without action
   */
  export type StaffCountOutputTypeCountBookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bookingWhereInput
  }

  /**
   * StaffCountOutputType without action
   */
  export type StaffCountOutputTypeCountBooking2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: booking2WhereInput
  }

  /**
   * StaffCountOutputType without action
   */
  export type StaffCountOutputTypeCountTime_offArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: time_offWhereInput
  }

  /**
   * StaffCountOutputType without action
   */
  export type StaffCountOutputTypeCountWorking_hoursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: working_hoursWhereInput
  }


  /**
   * Models
   */

  /**
   * Model booking
   */

  export type AggregateBooking = {
    _count: BookingCountAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  export type BookingMinAggregateOutputType = {
    id: string | null
    service_id: string | null
    staff_id: string | null
    customer_id: string | null
    start_at: Date | null
    end_at: Date | null
    status: $Enums.booking_status | null
    notes: string | null
    created_at: Date | null
  }

  export type BookingMaxAggregateOutputType = {
    id: string | null
    service_id: string | null
    staff_id: string | null
    customer_id: string | null
    start_at: Date | null
    end_at: Date | null
    status: $Enums.booking_status | null
    notes: string | null
    created_at: Date | null
  }

  export type BookingCountAggregateOutputType = {
    id: number
    service_id: number
    staff_id: number
    customer_id: number
    start_at: number
    end_at: number
    status: number
    notes: number
    created_at: number
    _all: number
  }


  export type BookingMinAggregateInputType = {
    id?: true
    service_id?: true
    staff_id?: true
    customer_id?: true
    start_at?: true
    end_at?: true
    status?: true
    notes?: true
    created_at?: true
  }

  export type BookingMaxAggregateInputType = {
    id?: true
    service_id?: true
    staff_id?: true
    customer_id?: true
    start_at?: true
    end_at?: true
    status?: true
    notes?: true
    created_at?: true
  }

  export type BookingCountAggregateInputType = {
    id?: true
    service_id?: true
    staff_id?: true
    customer_id?: true
    start_at?: true
    end_at?: true
    status?: true
    notes?: true
    created_at?: true
    _all?: true
  }

  export type BookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which booking to aggregate.
     */
    where?: bookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bookings to fetch.
     */
    orderBy?: bookingOrderByWithRelationInput | bookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: bookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned bookings
    **/
    _count?: true | BookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingMaxAggregateInputType
  }

  export type GetBookingAggregateType<T extends BookingAggregateArgs> = {
        [P in keyof T & keyof AggregateBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooking[P]>
      : GetScalarType<T[P], AggregateBooking[P]>
  }




  export type bookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bookingWhereInput
    orderBy?: bookingOrderByWithAggregationInput | bookingOrderByWithAggregationInput[]
    by: BookingScalarFieldEnum[] | BookingScalarFieldEnum
    having?: bookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingCountAggregateInputType | true
    _min?: BookingMinAggregateInputType
    _max?: BookingMaxAggregateInputType
  }

  export type BookingGroupByOutputType = {
    id: string
    service_id: string
    staff_id: string
    customer_id: string
    start_at: Date
    end_at: Date
    status: $Enums.booking_status
    notes: string | null
    created_at: Date
    _count: BookingCountAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  type GetBookingGroupByPayload<T extends bookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingGroupByOutputType[P]>
            : GetScalarType<T[P], BookingGroupByOutputType[P]>
        }
      >
    >


  export type bookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    service_id?: boolean
    staff_id?: boolean
    customer_id?: boolean
    start_at?: boolean
    end_at?: boolean
    status?: boolean
    notes?: boolean
    created_at?: boolean
    customer?: boolean | customerDefaultArgs<ExtArgs>
    service?: boolean | serviceDefaultArgs<ExtArgs>
    staff?: boolean | staffDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type bookingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    service_id?: boolean
    staff_id?: boolean
    customer_id?: boolean
    start_at?: boolean
    end_at?: boolean
    status?: boolean
    notes?: boolean
    created_at?: boolean
    customer?: boolean | customerDefaultArgs<ExtArgs>
    service?: boolean | serviceDefaultArgs<ExtArgs>
    staff?: boolean | staffDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type bookingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    service_id?: boolean
    staff_id?: boolean
    customer_id?: boolean
    start_at?: boolean
    end_at?: boolean
    status?: boolean
    notes?: boolean
    created_at?: boolean
    customer?: boolean | customerDefaultArgs<ExtArgs>
    service?: boolean | serviceDefaultArgs<ExtArgs>
    staff?: boolean | staffDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type bookingSelectScalar = {
    id?: boolean
    service_id?: boolean
    staff_id?: boolean
    customer_id?: boolean
    start_at?: boolean
    end_at?: boolean
    status?: boolean
    notes?: boolean
    created_at?: boolean
  }

  export type bookingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "service_id" | "staff_id" | "customer_id" | "start_at" | "end_at" | "status" | "notes" | "created_at", ExtArgs["result"]["booking"]>
  export type bookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | customerDefaultArgs<ExtArgs>
    service?: boolean | serviceDefaultArgs<ExtArgs>
    staff?: boolean | staffDefaultArgs<ExtArgs>
  }
  export type bookingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | customerDefaultArgs<ExtArgs>
    service?: boolean | serviceDefaultArgs<ExtArgs>
    staff?: boolean | staffDefaultArgs<ExtArgs>
  }
  export type bookingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | customerDefaultArgs<ExtArgs>
    service?: boolean | serviceDefaultArgs<ExtArgs>
    staff?: boolean | staffDefaultArgs<ExtArgs>
  }

  export type $bookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "booking"
    objects: {
      customer: Prisma.$customerPayload<ExtArgs>
      service: Prisma.$servicePayload<ExtArgs>
      staff: Prisma.$staffPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      service_id: string
      staff_id: string
      customer_id: string
      start_at: Date
      end_at: Date
      status: $Enums.booking_status
      notes: string | null
      created_at: Date
    }, ExtArgs["result"]["booking"]>
    composites: {}
  }

  type bookingGetPayload<S extends boolean | null | undefined | bookingDefaultArgs> = $Result.GetResult<Prisma.$bookingPayload, S>

  type bookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<bookingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingCountAggregateInputType | true
    }

  export interface bookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['booking'], meta: { name: 'booking' } }
    /**
     * Find zero or one Booking that matches the filter.
     * @param {bookingFindUniqueArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends bookingFindUniqueArgs>(args: SelectSubset<T, bookingFindUniqueArgs<ExtArgs>>): Prisma__bookingClient<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Booking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {bookingFindUniqueOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends bookingFindUniqueOrThrowArgs>(args: SelectSubset<T, bookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__bookingClient<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingFindFirstArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends bookingFindFirstArgs>(args?: SelectSubset<T, bookingFindFirstArgs<ExtArgs>>): Prisma__bookingClient<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingFindFirstOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends bookingFindFirstOrThrowArgs>(args?: SelectSubset<T, bookingFindFirstOrThrowArgs<ExtArgs>>): Prisma__bookingClient<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.booking.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.booking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingWithIdOnly = await prisma.booking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends bookingFindManyArgs>(args?: SelectSubset<T, bookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Booking.
     * @param {bookingCreateArgs} args - Arguments to create a Booking.
     * @example
     * // Create one Booking
     * const Booking = await prisma.booking.create({
     *   data: {
     *     // ... data to create a Booking
     *   }
     * })
     * 
     */
    create<T extends bookingCreateArgs>(args: SelectSubset<T, bookingCreateArgs<ExtArgs>>): Prisma__bookingClient<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bookings.
     * @param {bookingCreateManyArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends bookingCreateManyArgs>(args?: SelectSubset<T, bookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bookings and returns the data saved in the database.
     * @param {bookingCreateManyAndReturnArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends bookingCreateManyAndReturnArgs>(args?: SelectSubset<T, bookingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Booking.
     * @param {bookingDeleteArgs} args - Arguments to delete one Booking.
     * @example
     * // Delete one Booking
     * const Booking = await prisma.booking.delete({
     *   where: {
     *     // ... filter to delete one Booking
     *   }
     * })
     * 
     */
    delete<T extends bookingDeleteArgs>(args: SelectSubset<T, bookingDeleteArgs<ExtArgs>>): Prisma__bookingClient<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Booking.
     * @param {bookingUpdateArgs} args - Arguments to update one Booking.
     * @example
     * // Update one Booking
     * const booking = await prisma.booking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends bookingUpdateArgs>(args: SelectSubset<T, bookingUpdateArgs<ExtArgs>>): Prisma__bookingClient<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bookings.
     * @param {bookingDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.booking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends bookingDeleteManyArgs>(args?: SelectSubset<T, bookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends bookingUpdateManyArgs>(args: SelectSubset<T, bookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings and returns the data updated in the database.
     * @param {bookingUpdateManyAndReturnArgs} args - Arguments to update many Bookings.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends bookingUpdateManyAndReturnArgs>(args: SelectSubset<T, bookingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Booking.
     * @param {bookingUpsertArgs} args - Arguments to update or create a Booking.
     * @example
     * // Update or create a Booking
     * const booking = await prisma.booking.upsert({
     *   create: {
     *     // ... data to create a Booking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Booking we want to update
     *   }
     * })
     */
    upsert<T extends bookingUpsertArgs>(args: SelectSubset<T, bookingUpsertArgs<ExtArgs>>): Prisma__bookingClient<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.booking.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends bookingCountArgs>(
      args?: Subset<T, bookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookingAggregateArgs>(args: Subset<T, BookingAggregateArgs>): Prisma.PrismaPromise<GetBookingAggregateType<T>>

    /**
     * Group by Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends bookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: bookingGroupByArgs['orderBy'] }
        : { orderBy?: bookingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, bookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the booking model
   */
  readonly fields: bookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for booking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__bookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends customerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, customerDefaultArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    service<T extends serviceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, serviceDefaultArgs<ExtArgs>>): Prisma__serviceClient<$Result.GetResult<Prisma.$servicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    staff<T extends staffDefaultArgs<ExtArgs> = {}>(args?: Subset<T, staffDefaultArgs<ExtArgs>>): Prisma__staffClient<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the booking model
   */
  interface bookingFieldRefs {
    readonly id: FieldRef<"booking", 'String'>
    readonly service_id: FieldRef<"booking", 'String'>
    readonly staff_id: FieldRef<"booking", 'String'>
    readonly customer_id: FieldRef<"booking", 'String'>
    readonly start_at: FieldRef<"booking", 'DateTime'>
    readonly end_at: FieldRef<"booking", 'DateTime'>
    readonly status: FieldRef<"booking", 'booking_status'>
    readonly notes: FieldRef<"booking", 'String'>
    readonly created_at: FieldRef<"booking", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * booking findUnique
   */
  export type bookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking
     */
    omit?: bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingInclude<ExtArgs> | null
    /**
     * Filter, which booking to fetch.
     */
    where: bookingWhereUniqueInput
  }

  /**
   * booking findUniqueOrThrow
   */
  export type bookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking
     */
    omit?: bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingInclude<ExtArgs> | null
    /**
     * Filter, which booking to fetch.
     */
    where: bookingWhereUniqueInput
  }

  /**
   * booking findFirst
   */
  export type bookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking
     */
    omit?: bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingInclude<ExtArgs> | null
    /**
     * Filter, which booking to fetch.
     */
    where?: bookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bookings to fetch.
     */
    orderBy?: bookingOrderByWithRelationInput | bookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bookings.
     */
    cursor?: bookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * booking findFirstOrThrow
   */
  export type bookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking
     */
    omit?: bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingInclude<ExtArgs> | null
    /**
     * Filter, which booking to fetch.
     */
    where?: bookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bookings to fetch.
     */
    orderBy?: bookingOrderByWithRelationInput | bookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bookings.
     */
    cursor?: bookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * booking findMany
   */
  export type bookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking
     */
    omit?: bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingInclude<ExtArgs> | null
    /**
     * Filter, which bookings to fetch.
     */
    where?: bookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bookings to fetch.
     */
    orderBy?: bookingOrderByWithRelationInput | bookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing bookings.
     */
    cursor?: bookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bookings.
     */
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * booking create
   */
  export type bookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking
     */
    omit?: bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingInclude<ExtArgs> | null
    /**
     * The data needed to create a booking.
     */
    data: XOR<bookingCreateInput, bookingUncheckedCreateInput>
  }

  /**
   * booking createMany
   */
  export type bookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many bookings.
     */
    data: bookingCreateManyInput | bookingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * booking createManyAndReturn
   */
  export type bookingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the booking
     */
    omit?: bookingOmit<ExtArgs> | null
    /**
     * The data used to create many bookings.
     */
    data: bookingCreateManyInput | bookingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * booking update
   */
  export type bookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking
     */
    omit?: bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingInclude<ExtArgs> | null
    /**
     * The data needed to update a booking.
     */
    data: XOR<bookingUpdateInput, bookingUncheckedUpdateInput>
    /**
     * Choose, which booking to update.
     */
    where: bookingWhereUniqueInput
  }

  /**
   * booking updateMany
   */
  export type bookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update bookings.
     */
    data: XOR<bookingUpdateManyMutationInput, bookingUncheckedUpdateManyInput>
    /**
     * Filter which bookings to update
     */
    where?: bookingWhereInput
    /**
     * Limit how many bookings to update.
     */
    limit?: number
  }

  /**
   * booking updateManyAndReturn
   */
  export type bookingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the booking
     */
    omit?: bookingOmit<ExtArgs> | null
    /**
     * The data used to update bookings.
     */
    data: XOR<bookingUpdateManyMutationInput, bookingUncheckedUpdateManyInput>
    /**
     * Filter which bookings to update
     */
    where?: bookingWhereInput
    /**
     * Limit how many bookings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * booking upsert
   */
  export type bookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking
     */
    omit?: bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingInclude<ExtArgs> | null
    /**
     * The filter to search for the booking to update in case it exists.
     */
    where: bookingWhereUniqueInput
    /**
     * In case the booking found by the `where` argument doesn't exist, create a new booking with this data.
     */
    create: XOR<bookingCreateInput, bookingUncheckedCreateInput>
    /**
     * In case the booking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<bookingUpdateInput, bookingUncheckedUpdateInput>
  }

  /**
   * booking delete
   */
  export type bookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking
     */
    omit?: bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingInclude<ExtArgs> | null
    /**
     * Filter which booking to delete.
     */
    where: bookingWhereUniqueInput
  }

  /**
   * booking deleteMany
   */
  export type bookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bookings to delete
     */
    where?: bookingWhereInput
    /**
     * Limit how many bookings to delete.
     */
    limit?: number
  }

  /**
   * booking without action
   */
  export type bookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking
     */
    omit?: bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingInclude<ExtArgs> | null
  }


  /**
   * Model customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerMinAggregateOutputType = {
    id: string | null
    full_name: string | null
    phone: string | null
    email: string | null
    created_at: Date | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: string | null
    full_name: string | null
    phone: string | null
    email: string | null
    created_at: Date | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    full_name: number
    phone: number
    email: number
    created_at: number
    _all: number
  }


  export type CustomerMinAggregateInputType = {
    id?: true
    full_name?: true
    phone?: true
    email?: true
    created_at?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    full_name?: true
    phone?: true
    email?: true
    created_at?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    full_name?: true
    phone?: true
    email?: true
    created_at?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which customer to aggregate.
     */
    where?: customerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customerOrderByWithRelationInput | customerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: customerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type customerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: customerWhereInput
    orderBy?: customerOrderByWithAggregationInput | customerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: customerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    id: string
    full_name: string
    phone: string | null
    email: string | null
    created_at: Date
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends customerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type customerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    full_name?: boolean
    phone?: boolean
    email?: boolean
    created_at?: boolean
    booking?: boolean | customer$bookingArgs<ExtArgs>
    booking2?: boolean | customer$booking2Args<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type customerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    full_name?: boolean
    phone?: boolean
    email?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["customer"]>

  export type customerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    full_name?: boolean
    phone?: boolean
    email?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["customer"]>

  export type customerSelectScalar = {
    id?: boolean
    full_name?: boolean
    phone?: boolean
    email?: boolean
    created_at?: boolean
  }

  export type customerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "full_name" | "phone" | "email" | "created_at", ExtArgs["result"]["customer"]>
  export type customerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | customer$bookingArgs<ExtArgs>
    booking2?: boolean | customer$booking2Args<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type customerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type customerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $customerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "customer"
    objects: {
      booking: Prisma.$bookingPayload<ExtArgs>[]
      booking2: Prisma.$booking2Payload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      full_name: string
      phone: string | null
      email: string | null
      created_at: Date
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type customerGetPayload<S extends boolean | null | undefined | customerDefaultArgs> = $Result.GetResult<Prisma.$customerPayload, S>

  type customerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<customerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface customerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['customer'], meta: { name: 'customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {customerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends customerFindUniqueArgs>(args: SelectSubset<T, customerFindUniqueArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {customerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends customerFindUniqueOrThrowArgs>(args: SelectSubset<T, customerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends customerFindFirstArgs>(args?: SelectSubset<T, customerFindFirstArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends customerFindFirstOrThrowArgs>(args?: SelectSubset<T, customerFindFirstOrThrowArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends customerFindManyArgs>(args?: SelectSubset<T, customerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customer.
     * @param {customerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends customerCreateArgs>(args: SelectSubset<T, customerCreateArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers.
     * @param {customerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends customerCreateManyArgs>(args?: SelectSubset<T, customerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {customerCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends customerCreateManyAndReturnArgs>(args?: SelectSubset<T, customerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Customer.
     * @param {customerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends customerDeleteArgs>(args: SelectSubset<T, customerDeleteArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customer.
     * @param {customerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends customerUpdateArgs>(args: SelectSubset<T, customerUpdateArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers.
     * @param {customerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends customerDeleteManyArgs>(args?: SelectSubset<T, customerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends customerUpdateManyArgs>(args: SelectSubset<T, customerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers and returns the data updated in the database.
     * @param {customerUpdateManyAndReturnArgs} args - Arguments to update many Customers.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends customerUpdateManyAndReturnArgs>(args: SelectSubset<T, customerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Customer.
     * @param {customerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends customerUpsertArgs>(args: SelectSubset<T, customerUpsertArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends customerCountArgs>(
      args?: Subset<T, customerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends customerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: customerGroupByArgs['orderBy'] }
        : { orderBy?: customerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, customerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the customer model
   */
  readonly fields: customerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__customerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    booking<T extends customer$bookingArgs<ExtArgs> = {}>(args?: Subset<T, customer$bookingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    booking2<T extends customer$booking2Args<ExtArgs> = {}>(args?: Subset<T, customer$booking2Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$booking2Payload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the customer model
   */
  interface customerFieldRefs {
    readonly id: FieldRef<"customer", 'String'>
    readonly full_name: FieldRef<"customer", 'String'>
    readonly phone: FieldRef<"customer", 'String'>
    readonly email: FieldRef<"customer", 'String'>
    readonly created_at: FieldRef<"customer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * customer findUnique
   */
  export type customerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
    /**
     * Filter, which customer to fetch.
     */
    where: customerWhereUniqueInput
  }

  /**
   * customer findUniqueOrThrow
   */
  export type customerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
    /**
     * Filter, which customer to fetch.
     */
    where: customerWhereUniqueInput
  }

  /**
   * customer findFirst
   */
  export type customerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
    /**
     * Filter, which customer to fetch.
     */
    where?: customerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customerOrderByWithRelationInput | customerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for customers.
     */
    cursor?: customerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * customer findFirstOrThrow
   */
  export type customerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
    /**
     * Filter, which customer to fetch.
     */
    where?: customerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customerOrderByWithRelationInput | customerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for customers.
     */
    cursor?: customerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * customer findMany
   */
  export type customerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
    /**
     * Filter, which customers to fetch.
     */
    where?: customerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customerOrderByWithRelationInput | customerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing customers.
     */
    cursor?: customerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * customer create
   */
  export type customerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
    /**
     * The data needed to create a customer.
     */
    data: XOR<customerCreateInput, customerUncheckedCreateInput>
  }

  /**
   * customer createMany
   */
  export type customerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many customers.
     */
    data: customerCreateManyInput | customerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * customer createManyAndReturn
   */
  export type customerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * The data used to create many customers.
     */
    data: customerCreateManyInput | customerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * customer update
   */
  export type customerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
    /**
     * The data needed to update a customer.
     */
    data: XOR<customerUpdateInput, customerUncheckedUpdateInput>
    /**
     * Choose, which customer to update.
     */
    where: customerWhereUniqueInput
  }

  /**
   * customer updateMany
   */
  export type customerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update customers.
     */
    data: XOR<customerUpdateManyMutationInput, customerUncheckedUpdateManyInput>
    /**
     * Filter which customers to update
     */
    where?: customerWhereInput
    /**
     * Limit how many customers to update.
     */
    limit?: number
  }

  /**
   * customer updateManyAndReturn
   */
  export type customerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * The data used to update customers.
     */
    data: XOR<customerUpdateManyMutationInput, customerUncheckedUpdateManyInput>
    /**
     * Filter which customers to update
     */
    where?: customerWhereInput
    /**
     * Limit how many customers to update.
     */
    limit?: number
  }

  /**
   * customer upsert
   */
  export type customerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
    /**
     * The filter to search for the customer to update in case it exists.
     */
    where: customerWhereUniqueInput
    /**
     * In case the customer found by the `where` argument doesn't exist, create a new customer with this data.
     */
    create: XOR<customerCreateInput, customerUncheckedCreateInput>
    /**
     * In case the customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<customerUpdateInput, customerUncheckedUpdateInput>
  }

  /**
   * customer delete
   */
  export type customerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
    /**
     * Filter which customer to delete.
     */
    where: customerWhereUniqueInput
  }

  /**
   * customer deleteMany
   */
  export type customerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which customers to delete
     */
    where?: customerWhereInput
    /**
     * Limit how many customers to delete.
     */
    limit?: number
  }

  /**
   * customer.booking
   */
  export type customer$bookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking
     */
    omit?: bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingInclude<ExtArgs> | null
    where?: bookingWhereInput
    orderBy?: bookingOrderByWithRelationInput | bookingOrderByWithRelationInput[]
    cursor?: bookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * customer.booking2
   */
  export type customer$booking2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking2
     */
    select?: booking2Select<ExtArgs> | null
    /**
     * Omit specific fields from the booking2
     */
    omit?: booking2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: booking2Include<ExtArgs> | null
    where?: booking2WhereInput
    orderBy?: booking2OrderByWithRelationInput | booking2OrderByWithRelationInput[]
    cursor?: booking2WhereUniqueInput
    take?: number
    skip?: number
    distinct?: Booking2ScalarFieldEnum | Booking2ScalarFieldEnum[]
  }

  /**
   * customer without action
   */
  export type customerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
  }


  /**
   * Model service
   */

  export type AggregateService = {
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  export type ServiceAvgAggregateOutputType = {
    duration_min: number | null
    price: Decimal | null
  }

  export type ServiceSumAggregateOutputType = {
    duration_min: number | null
    price: Decimal | null
  }

  export type ServiceMinAggregateOutputType = {
    id: string | null
    name: string | null
    duration_min: number | null
    price: Decimal | null
    is_active: boolean | null
    created_at: Date | null
    description: string | null
  }

  export type ServiceMaxAggregateOutputType = {
    id: string | null
    name: string | null
    duration_min: number | null
    price: Decimal | null
    is_active: boolean | null
    created_at: Date | null
    description: string | null
  }

  export type ServiceCountAggregateOutputType = {
    id: number
    name: number
    duration_min: number
    price: number
    is_active: number
    created_at: number
    description: number
    _all: number
  }


  export type ServiceAvgAggregateInputType = {
    duration_min?: true
    price?: true
  }

  export type ServiceSumAggregateInputType = {
    duration_min?: true
    price?: true
  }

  export type ServiceMinAggregateInputType = {
    id?: true
    name?: true
    duration_min?: true
    price?: true
    is_active?: true
    created_at?: true
    description?: true
  }

  export type ServiceMaxAggregateInputType = {
    id?: true
    name?: true
    duration_min?: true
    price?: true
    is_active?: true
    created_at?: true
    description?: true
  }

  export type ServiceCountAggregateInputType = {
    id?: true
    name?: true
    duration_min?: true
    price?: true
    is_active?: true
    created_at?: true
    description?: true
    _all?: true
  }

  export type ServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which service to aggregate.
     */
    where?: serviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of services to fetch.
     */
    orderBy?: serviceOrderByWithRelationInput | serviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: serviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned services
    **/
    _count?: true | ServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceMaxAggregateInputType
  }

  export type GetServiceAggregateType<T extends ServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateService[P]>
      : GetScalarType<T[P], AggregateService[P]>
  }




  export type serviceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: serviceWhereInput
    orderBy?: serviceOrderByWithAggregationInput | serviceOrderByWithAggregationInput[]
    by: ServiceScalarFieldEnum[] | ServiceScalarFieldEnum
    having?: serviceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceCountAggregateInputType | true
    _avg?: ServiceAvgAggregateInputType
    _sum?: ServiceSumAggregateInputType
    _min?: ServiceMinAggregateInputType
    _max?: ServiceMaxAggregateInputType
  }

  export type ServiceGroupByOutputType = {
    id: string
    name: string
    duration_min: number
    price: Decimal | null
    is_active: boolean
    created_at: Date
    description: string | null
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  type GetServiceGroupByPayload<T extends serviceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceGroupByOutputType[P]>
        }
      >
    >


  export type serviceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    duration_min?: boolean
    price?: boolean
    is_active?: boolean
    created_at?: boolean
    description?: boolean
    booking?: boolean | service$bookingArgs<ExtArgs>
    booking2?: boolean | service$booking2Args<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>

  export type serviceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    duration_min?: boolean
    price?: boolean
    is_active?: boolean
    created_at?: boolean
    description?: boolean
  }, ExtArgs["result"]["service"]>

  export type serviceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    duration_min?: boolean
    price?: boolean
    is_active?: boolean
    created_at?: boolean
    description?: boolean
  }, ExtArgs["result"]["service"]>

  export type serviceSelectScalar = {
    id?: boolean
    name?: boolean
    duration_min?: boolean
    price?: boolean
    is_active?: boolean
    created_at?: boolean
    description?: boolean
  }

  export type serviceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "duration_min" | "price" | "is_active" | "created_at" | "description", ExtArgs["result"]["service"]>
  export type serviceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | service$bookingArgs<ExtArgs>
    booking2?: boolean | service$booking2Args<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type serviceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type serviceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $servicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "service"
    objects: {
      booking: Prisma.$bookingPayload<ExtArgs>[]
      booking2: Prisma.$booking2Payload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      duration_min: number
      price: Prisma.Decimal | null
      is_active: boolean
      created_at: Date
      description: string | null
    }, ExtArgs["result"]["service"]>
    composites: {}
  }

  type serviceGetPayload<S extends boolean | null | undefined | serviceDefaultArgs> = $Result.GetResult<Prisma.$servicePayload, S>

  type serviceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<serviceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServiceCountAggregateInputType | true
    }

  export interface serviceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['service'], meta: { name: 'service' } }
    /**
     * Find zero or one Service that matches the filter.
     * @param {serviceFindUniqueArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends serviceFindUniqueArgs>(args: SelectSubset<T, serviceFindUniqueArgs<ExtArgs>>): Prisma__serviceClient<$Result.GetResult<Prisma.$servicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Service that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {serviceFindUniqueOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends serviceFindUniqueOrThrowArgs>(args: SelectSubset<T, serviceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__serviceClient<$Result.GetResult<Prisma.$servicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {serviceFindFirstArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends serviceFindFirstArgs>(args?: SelectSubset<T, serviceFindFirstArgs<ExtArgs>>): Prisma__serviceClient<$Result.GetResult<Prisma.$servicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {serviceFindFirstOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends serviceFindFirstOrThrowArgs>(args?: SelectSubset<T, serviceFindFirstOrThrowArgs<ExtArgs>>): Prisma__serviceClient<$Result.GetResult<Prisma.$servicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {serviceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Services
     * const services = await prisma.service.findMany()
     * 
     * // Get first 10 Services
     * const services = await prisma.service.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceWithIdOnly = await prisma.service.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends serviceFindManyArgs>(args?: SelectSubset<T, serviceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$servicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Service.
     * @param {serviceCreateArgs} args - Arguments to create a Service.
     * @example
     * // Create one Service
     * const Service = await prisma.service.create({
     *   data: {
     *     // ... data to create a Service
     *   }
     * })
     * 
     */
    create<T extends serviceCreateArgs>(args: SelectSubset<T, serviceCreateArgs<ExtArgs>>): Prisma__serviceClient<$Result.GetResult<Prisma.$servicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Services.
     * @param {serviceCreateManyArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends serviceCreateManyArgs>(args?: SelectSubset<T, serviceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Services and returns the data saved in the database.
     * @param {serviceCreateManyAndReturnArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Services and only return the `id`
     * const serviceWithIdOnly = await prisma.service.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends serviceCreateManyAndReturnArgs>(args?: SelectSubset<T, serviceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$servicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Service.
     * @param {serviceDeleteArgs} args - Arguments to delete one Service.
     * @example
     * // Delete one Service
     * const Service = await prisma.service.delete({
     *   where: {
     *     // ... filter to delete one Service
     *   }
     * })
     * 
     */
    delete<T extends serviceDeleteArgs>(args: SelectSubset<T, serviceDeleteArgs<ExtArgs>>): Prisma__serviceClient<$Result.GetResult<Prisma.$servicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Service.
     * @param {serviceUpdateArgs} args - Arguments to update one Service.
     * @example
     * // Update one Service
     * const service = await prisma.service.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends serviceUpdateArgs>(args: SelectSubset<T, serviceUpdateArgs<ExtArgs>>): Prisma__serviceClient<$Result.GetResult<Prisma.$servicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Services.
     * @param {serviceDeleteManyArgs} args - Arguments to filter Services to delete.
     * @example
     * // Delete a few Services
     * const { count } = await prisma.service.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends serviceDeleteManyArgs>(args?: SelectSubset<T, serviceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {serviceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends serviceUpdateManyArgs>(args: SelectSubset<T, serviceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services and returns the data updated in the database.
     * @param {serviceUpdateManyAndReturnArgs} args - Arguments to update many Services.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Services and only return the `id`
     * const serviceWithIdOnly = await prisma.service.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends serviceUpdateManyAndReturnArgs>(args: SelectSubset<T, serviceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$servicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Service.
     * @param {serviceUpsertArgs} args - Arguments to update or create a Service.
     * @example
     * // Update or create a Service
     * const service = await prisma.service.upsert({
     *   create: {
     *     // ... data to create a Service
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Service we want to update
     *   }
     * })
     */
    upsert<T extends serviceUpsertArgs>(args: SelectSubset<T, serviceUpsertArgs<ExtArgs>>): Prisma__serviceClient<$Result.GetResult<Prisma.$servicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {serviceCountArgs} args - Arguments to filter Services to count.
     * @example
     * // Count the number of Services
     * const count = await prisma.service.count({
     *   where: {
     *     // ... the filter for the Services we want to count
     *   }
     * })
    **/
    count<T extends serviceCountArgs>(
      args?: Subset<T, serviceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServiceAggregateArgs>(args: Subset<T, ServiceAggregateArgs>): Prisma.PrismaPromise<GetServiceAggregateType<T>>

    /**
     * Group by Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {serviceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends serviceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: serviceGroupByArgs['orderBy'] }
        : { orderBy?: serviceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, serviceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the service model
   */
  readonly fields: serviceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for service.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__serviceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    booking<T extends service$bookingArgs<ExtArgs> = {}>(args?: Subset<T, service$bookingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    booking2<T extends service$booking2Args<ExtArgs> = {}>(args?: Subset<T, service$booking2Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$booking2Payload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the service model
   */
  interface serviceFieldRefs {
    readonly id: FieldRef<"service", 'String'>
    readonly name: FieldRef<"service", 'String'>
    readonly duration_min: FieldRef<"service", 'Int'>
    readonly price: FieldRef<"service", 'Decimal'>
    readonly is_active: FieldRef<"service", 'Boolean'>
    readonly created_at: FieldRef<"service", 'DateTime'>
    readonly description: FieldRef<"service", 'String'>
  }
    

  // Custom InputTypes
  /**
   * service findUnique
   */
  export type serviceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the service
     */
    select?: serviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the service
     */
    omit?: serviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: serviceInclude<ExtArgs> | null
    /**
     * Filter, which service to fetch.
     */
    where: serviceWhereUniqueInput
  }

  /**
   * service findUniqueOrThrow
   */
  export type serviceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the service
     */
    select?: serviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the service
     */
    omit?: serviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: serviceInclude<ExtArgs> | null
    /**
     * Filter, which service to fetch.
     */
    where: serviceWhereUniqueInput
  }

  /**
   * service findFirst
   */
  export type serviceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the service
     */
    select?: serviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the service
     */
    omit?: serviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: serviceInclude<ExtArgs> | null
    /**
     * Filter, which service to fetch.
     */
    where?: serviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of services to fetch.
     */
    orderBy?: serviceOrderByWithRelationInput | serviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for services.
     */
    cursor?: serviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * service findFirstOrThrow
   */
  export type serviceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the service
     */
    select?: serviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the service
     */
    omit?: serviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: serviceInclude<ExtArgs> | null
    /**
     * Filter, which service to fetch.
     */
    where?: serviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of services to fetch.
     */
    orderBy?: serviceOrderByWithRelationInput | serviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for services.
     */
    cursor?: serviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * service findMany
   */
  export type serviceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the service
     */
    select?: serviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the service
     */
    omit?: serviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: serviceInclude<ExtArgs> | null
    /**
     * Filter, which services to fetch.
     */
    where?: serviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of services to fetch.
     */
    orderBy?: serviceOrderByWithRelationInput | serviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing services.
     */
    cursor?: serviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` services.
     */
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * service create
   */
  export type serviceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the service
     */
    select?: serviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the service
     */
    omit?: serviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: serviceInclude<ExtArgs> | null
    /**
     * The data needed to create a service.
     */
    data: XOR<serviceCreateInput, serviceUncheckedCreateInput>
  }

  /**
   * service createMany
   */
  export type serviceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many services.
     */
    data: serviceCreateManyInput | serviceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * service createManyAndReturn
   */
  export type serviceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the service
     */
    select?: serviceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the service
     */
    omit?: serviceOmit<ExtArgs> | null
    /**
     * The data used to create many services.
     */
    data: serviceCreateManyInput | serviceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * service update
   */
  export type serviceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the service
     */
    select?: serviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the service
     */
    omit?: serviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: serviceInclude<ExtArgs> | null
    /**
     * The data needed to update a service.
     */
    data: XOR<serviceUpdateInput, serviceUncheckedUpdateInput>
    /**
     * Choose, which service to update.
     */
    where: serviceWhereUniqueInput
  }

  /**
   * service updateMany
   */
  export type serviceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update services.
     */
    data: XOR<serviceUpdateManyMutationInput, serviceUncheckedUpdateManyInput>
    /**
     * Filter which services to update
     */
    where?: serviceWhereInput
    /**
     * Limit how many services to update.
     */
    limit?: number
  }

  /**
   * service updateManyAndReturn
   */
  export type serviceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the service
     */
    select?: serviceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the service
     */
    omit?: serviceOmit<ExtArgs> | null
    /**
     * The data used to update services.
     */
    data: XOR<serviceUpdateManyMutationInput, serviceUncheckedUpdateManyInput>
    /**
     * Filter which services to update
     */
    where?: serviceWhereInput
    /**
     * Limit how many services to update.
     */
    limit?: number
  }

  /**
   * service upsert
   */
  export type serviceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the service
     */
    select?: serviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the service
     */
    omit?: serviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: serviceInclude<ExtArgs> | null
    /**
     * The filter to search for the service to update in case it exists.
     */
    where: serviceWhereUniqueInput
    /**
     * In case the service found by the `where` argument doesn't exist, create a new service with this data.
     */
    create: XOR<serviceCreateInput, serviceUncheckedCreateInput>
    /**
     * In case the service was found with the provided `where` argument, update it with this data.
     */
    update: XOR<serviceUpdateInput, serviceUncheckedUpdateInput>
  }

  /**
   * service delete
   */
  export type serviceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the service
     */
    select?: serviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the service
     */
    omit?: serviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: serviceInclude<ExtArgs> | null
    /**
     * Filter which service to delete.
     */
    where: serviceWhereUniqueInput
  }

  /**
   * service deleteMany
   */
  export type serviceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which services to delete
     */
    where?: serviceWhereInput
    /**
     * Limit how many services to delete.
     */
    limit?: number
  }

  /**
   * service.booking
   */
  export type service$bookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking
     */
    omit?: bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingInclude<ExtArgs> | null
    where?: bookingWhereInput
    orderBy?: bookingOrderByWithRelationInput | bookingOrderByWithRelationInput[]
    cursor?: bookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * service.booking2
   */
  export type service$booking2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking2
     */
    select?: booking2Select<ExtArgs> | null
    /**
     * Omit specific fields from the booking2
     */
    omit?: booking2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: booking2Include<ExtArgs> | null
    where?: booking2WhereInput
    orderBy?: booking2OrderByWithRelationInput | booking2OrderByWithRelationInput[]
    cursor?: booking2WhereUniqueInput
    take?: number
    skip?: number
    distinct?: Booking2ScalarFieldEnum | Booking2ScalarFieldEnum[]
  }

  /**
   * service without action
   */
  export type serviceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the service
     */
    select?: serviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the service
     */
    omit?: serviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: serviceInclude<ExtArgs> | null
  }


  /**
   * Model staff
   */

  export type AggregateStaff = {
    _count: StaffCountAggregateOutputType | null
    _min: StaffMinAggregateOutputType | null
    _max: StaffMaxAggregateOutputType | null
  }

  export type StaffMinAggregateOutputType = {
    id: string | null
    name: string | null
    is_active: boolean | null
  }

  export type StaffMaxAggregateOutputType = {
    id: string | null
    name: string | null
    is_active: boolean | null
  }

  export type StaffCountAggregateOutputType = {
    id: number
    name: number
    is_active: number
    _all: number
  }


  export type StaffMinAggregateInputType = {
    id?: true
    name?: true
    is_active?: true
  }

  export type StaffMaxAggregateInputType = {
    id?: true
    name?: true
    is_active?: true
  }

  export type StaffCountAggregateInputType = {
    id?: true
    name?: true
    is_active?: true
    _all?: true
  }

  export type StaffAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which staff to aggregate.
     */
    where?: staffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of staff to fetch.
     */
    orderBy?: staffOrderByWithRelationInput | staffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: staffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` staff.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned staff
    **/
    _count?: true | StaffCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StaffMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StaffMaxAggregateInputType
  }

  export type GetStaffAggregateType<T extends StaffAggregateArgs> = {
        [P in keyof T & keyof AggregateStaff]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStaff[P]>
      : GetScalarType<T[P], AggregateStaff[P]>
  }




  export type staffGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: staffWhereInput
    orderBy?: staffOrderByWithAggregationInput | staffOrderByWithAggregationInput[]
    by: StaffScalarFieldEnum[] | StaffScalarFieldEnum
    having?: staffScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StaffCountAggregateInputType | true
    _min?: StaffMinAggregateInputType
    _max?: StaffMaxAggregateInputType
  }

  export type StaffGroupByOutputType = {
    id: string
    name: string
    is_active: boolean
    _count: StaffCountAggregateOutputType | null
    _min: StaffMinAggregateOutputType | null
    _max: StaffMaxAggregateOutputType | null
  }

  type GetStaffGroupByPayload<T extends staffGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StaffGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StaffGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StaffGroupByOutputType[P]>
            : GetScalarType<T[P], StaffGroupByOutputType[P]>
        }
      >
    >


  export type staffSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    is_active?: boolean
    booking?: boolean | staff$bookingArgs<ExtArgs>
    booking2?: boolean | staff$booking2Args<ExtArgs>
    time_off?: boolean | staff$time_offArgs<ExtArgs>
    working_hours?: boolean | staff$working_hoursArgs<ExtArgs>
    _count?: boolean | StaffCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["staff"]>

  export type staffSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    is_active?: boolean
  }, ExtArgs["result"]["staff"]>

  export type staffSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    is_active?: boolean
  }, ExtArgs["result"]["staff"]>

  export type staffSelectScalar = {
    id?: boolean
    name?: boolean
    is_active?: boolean
  }

  export type staffOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "is_active", ExtArgs["result"]["staff"]>
  export type staffInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | staff$bookingArgs<ExtArgs>
    booking2?: boolean | staff$booking2Args<ExtArgs>
    time_off?: boolean | staff$time_offArgs<ExtArgs>
    working_hours?: boolean | staff$working_hoursArgs<ExtArgs>
    _count?: boolean | StaffCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type staffIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type staffIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $staffPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "staff"
    objects: {
      booking: Prisma.$bookingPayload<ExtArgs>[]
      booking2: Prisma.$booking2Payload<ExtArgs>[]
      time_off: Prisma.$time_offPayload<ExtArgs>[]
      working_hours: Prisma.$working_hoursPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      is_active: boolean
    }, ExtArgs["result"]["staff"]>
    composites: {}
  }

  type staffGetPayload<S extends boolean | null | undefined | staffDefaultArgs> = $Result.GetResult<Prisma.$staffPayload, S>

  type staffCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<staffFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StaffCountAggregateInputType | true
    }

  export interface staffDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['staff'], meta: { name: 'staff' } }
    /**
     * Find zero or one Staff that matches the filter.
     * @param {staffFindUniqueArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends staffFindUniqueArgs>(args: SelectSubset<T, staffFindUniqueArgs<ExtArgs>>): Prisma__staffClient<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Staff that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {staffFindUniqueOrThrowArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends staffFindUniqueOrThrowArgs>(args: SelectSubset<T, staffFindUniqueOrThrowArgs<ExtArgs>>): Prisma__staffClient<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Staff that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staffFindFirstArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends staffFindFirstArgs>(args?: SelectSubset<T, staffFindFirstArgs<ExtArgs>>): Prisma__staffClient<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Staff that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staffFindFirstOrThrowArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends staffFindFirstOrThrowArgs>(args?: SelectSubset<T, staffFindFirstOrThrowArgs<ExtArgs>>): Prisma__staffClient<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Staff that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staffFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Staff
     * const staff = await prisma.staff.findMany()
     * 
     * // Get first 10 Staff
     * const staff = await prisma.staff.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const staffWithIdOnly = await prisma.staff.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends staffFindManyArgs>(args?: SelectSubset<T, staffFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Staff.
     * @param {staffCreateArgs} args - Arguments to create a Staff.
     * @example
     * // Create one Staff
     * const Staff = await prisma.staff.create({
     *   data: {
     *     // ... data to create a Staff
     *   }
     * })
     * 
     */
    create<T extends staffCreateArgs>(args: SelectSubset<T, staffCreateArgs<ExtArgs>>): Prisma__staffClient<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Staff.
     * @param {staffCreateManyArgs} args - Arguments to create many Staff.
     * @example
     * // Create many Staff
     * const staff = await prisma.staff.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends staffCreateManyArgs>(args?: SelectSubset<T, staffCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Staff and returns the data saved in the database.
     * @param {staffCreateManyAndReturnArgs} args - Arguments to create many Staff.
     * @example
     * // Create many Staff
     * const staff = await prisma.staff.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Staff and only return the `id`
     * const staffWithIdOnly = await prisma.staff.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends staffCreateManyAndReturnArgs>(args?: SelectSubset<T, staffCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Staff.
     * @param {staffDeleteArgs} args - Arguments to delete one Staff.
     * @example
     * // Delete one Staff
     * const Staff = await prisma.staff.delete({
     *   where: {
     *     // ... filter to delete one Staff
     *   }
     * })
     * 
     */
    delete<T extends staffDeleteArgs>(args: SelectSubset<T, staffDeleteArgs<ExtArgs>>): Prisma__staffClient<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Staff.
     * @param {staffUpdateArgs} args - Arguments to update one Staff.
     * @example
     * // Update one Staff
     * const staff = await prisma.staff.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends staffUpdateArgs>(args: SelectSubset<T, staffUpdateArgs<ExtArgs>>): Prisma__staffClient<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Staff.
     * @param {staffDeleteManyArgs} args - Arguments to filter Staff to delete.
     * @example
     * // Delete a few Staff
     * const { count } = await prisma.staff.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends staffDeleteManyArgs>(args?: SelectSubset<T, staffDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staffUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Staff
     * const staff = await prisma.staff.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends staffUpdateManyArgs>(args: SelectSubset<T, staffUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Staff and returns the data updated in the database.
     * @param {staffUpdateManyAndReturnArgs} args - Arguments to update many Staff.
     * @example
     * // Update many Staff
     * const staff = await prisma.staff.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Staff and only return the `id`
     * const staffWithIdOnly = await prisma.staff.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends staffUpdateManyAndReturnArgs>(args: SelectSubset<T, staffUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Staff.
     * @param {staffUpsertArgs} args - Arguments to update or create a Staff.
     * @example
     * // Update or create a Staff
     * const staff = await prisma.staff.upsert({
     *   create: {
     *     // ... data to create a Staff
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Staff we want to update
     *   }
     * })
     */
    upsert<T extends staffUpsertArgs>(args: SelectSubset<T, staffUpsertArgs<ExtArgs>>): Prisma__staffClient<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staffCountArgs} args - Arguments to filter Staff to count.
     * @example
     * // Count the number of Staff
     * const count = await prisma.staff.count({
     *   where: {
     *     // ... the filter for the Staff we want to count
     *   }
     * })
    **/
    count<T extends staffCountArgs>(
      args?: Subset<T, staffCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StaffCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StaffAggregateArgs>(args: Subset<T, StaffAggregateArgs>): Prisma.PrismaPromise<GetStaffAggregateType<T>>

    /**
     * Group by Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staffGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends staffGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: staffGroupByArgs['orderBy'] }
        : { orderBy?: staffGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, staffGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStaffGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the staff model
   */
  readonly fields: staffFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for staff.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__staffClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    booking<T extends staff$bookingArgs<ExtArgs> = {}>(args?: Subset<T, staff$bookingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    booking2<T extends staff$booking2Args<ExtArgs> = {}>(args?: Subset<T, staff$booking2Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$booking2Payload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    time_off<T extends staff$time_offArgs<ExtArgs> = {}>(args?: Subset<T, staff$time_offArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$time_offPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    working_hours<T extends staff$working_hoursArgs<ExtArgs> = {}>(args?: Subset<T, staff$working_hoursArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$working_hoursPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the staff model
   */
  interface staffFieldRefs {
    readonly id: FieldRef<"staff", 'String'>
    readonly name: FieldRef<"staff", 'String'>
    readonly is_active: FieldRef<"staff", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * staff findUnique
   */
  export type staffFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffInclude<ExtArgs> | null
    /**
     * Filter, which staff to fetch.
     */
    where: staffWhereUniqueInput
  }

  /**
   * staff findUniqueOrThrow
   */
  export type staffFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffInclude<ExtArgs> | null
    /**
     * Filter, which staff to fetch.
     */
    where: staffWhereUniqueInput
  }

  /**
   * staff findFirst
   */
  export type staffFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffInclude<ExtArgs> | null
    /**
     * Filter, which staff to fetch.
     */
    where?: staffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of staff to fetch.
     */
    orderBy?: staffOrderByWithRelationInput | staffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for staff.
     */
    cursor?: staffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` staff.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of staff.
     */
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * staff findFirstOrThrow
   */
  export type staffFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffInclude<ExtArgs> | null
    /**
     * Filter, which staff to fetch.
     */
    where?: staffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of staff to fetch.
     */
    orderBy?: staffOrderByWithRelationInput | staffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for staff.
     */
    cursor?: staffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` staff.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of staff.
     */
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * staff findMany
   */
  export type staffFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffInclude<ExtArgs> | null
    /**
     * Filter, which staff to fetch.
     */
    where?: staffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of staff to fetch.
     */
    orderBy?: staffOrderByWithRelationInput | staffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing staff.
     */
    cursor?: staffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` staff.
     */
    skip?: number
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * staff create
   */
  export type staffCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffInclude<ExtArgs> | null
    /**
     * The data needed to create a staff.
     */
    data: XOR<staffCreateInput, staffUncheckedCreateInput>
  }

  /**
   * staff createMany
   */
  export type staffCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many staff.
     */
    data: staffCreateManyInput | staffCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * staff createManyAndReturn
   */
  export type staffCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * The data used to create many staff.
     */
    data: staffCreateManyInput | staffCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * staff update
   */
  export type staffUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffInclude<ExtArgs> | null
    /**
     * The data needed to update a staff.
     */
    data: XOR<staffUpdateInput, staffUncheckedUpdateInput>
    /**
     * Choose, which staff to update.
     */
    where: staffWhereUniqueInput
  }

  /**
   * staff updateMany
   */
  export type staffUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update staff.
     */
    data: XOR<staffUpdateManyMutationInput, staffUncheckedUpdateManyInput>
    /**
     * Filter which staff to update
     */
    where?: staffWhereInput
    /**
     * Limit how many staff to update.
     */
    limit?: number
  }

  /**
   * staff updateManyAndReturn
   */
  export type staffUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * The data used to update staff.
     */
    data: XOR<staffUpdateManyMutationInput, staffUncheckedUpdateManyInput>
    /**
     * Filter which staff to update
     */
    where?: staffWhereInput
    /**
     * Limit how many staff to update.
     */
    limit?: number
  }

  /**
   * staff upsert
   */
  export type staffUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffInclude<ExtArgs> | null
    /**
     * The filter to search for the staff to update in case it exists.
     */
    where: staffWhereUniqueInput
    /**
     * In case the staff found by the `where` argument doesn't exist, create a new staff with this data.
     */
    create: XOR<staffCreateInput, staffUncheckedCreateInput>
    /**
     * In case the staff was found with the provided `where` argument, update it with this data.
     */
    update: XOR<staffUpdateInput, staffUncheckedUpdateInput>
  }

  /**
   * staff delete
   */
  export type staffDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffInclude<ExtArgs> | null
    /**
     * Filter which staff to delete.
     */
    where: staffWhereUniqueInput
  }

  /**
   * staff deleteMany
   */
  export type staffDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which staff to delete
     */
    where?: staffWhereInput
    /**
     * Limit how many staff to delete.
     */
    limit?: number
  }

  /**
   * staff.booking
   */
  export type staff$bookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking
     */
    omit?: bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingInclude<ExtArgs> | null
    where?: bookingWhereInput
    orderBy?: bookingOrderByWithRelationInput | bookingOrderByWithRelationInput[]
    cursor?: bookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * staff.booking2
   */
  export type staff$booking2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking2
     */
    select?: booking2Select<ExtArgs> | null
    /**
     * Omit specific fields from the booking2
     */
    omit?: booking2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: booking2Include<ExtArgs> | null
    where?: booking2WhereInput
    orderBy?: booking2OrderByWithRelationInput | booking2OrderByWithRelationInput[]
    cursor?: booking2WhereUniqueInput
    take?: number
    skip?: number
    distinct?: Booking2ScalarFieldEnum | Booking2ScalarFieldEnum[]
  }

  /**
   * staff.time_off
   */
  export type staff$time_offArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the time_off
     */
    select?: time_offSelect<ExtArgs> | null
    /**
     * Omit specific fields from the time_off
     */
    omit?: time_offOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: time_offInclude<ExtArgs> | null
    where?: time_offWhereInput
    orderBy?: time_offOrderByWithRelationInput | time_offOrderByWithRelationInput[]
    cursor?: time_offWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Time_offScalarFieldEnum | Time_offScalarFieldEnum[]
  }

  /**
   * staff.working_hours
   */
  export type staff$working_hoursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the working_hours
     */
    select?: working_hoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the working_hours
     */
    omit?: working_hoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: working_hoursInclude<ExtArgs> | null
    where?: working_hoursWhereInput
    orderBy?: working_hoursOrderByWithRelationInput | working_hoursOrderByWithRelationInput[]
    cursor?: working_hoursWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Working_hoursScalarFieldEnum | Working_hoursScalarFieldEnum[]
  }

  /**
   * staff without action
   */
  export type staffDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffInclude<ExtArgs> | null
  }


  /**
   * Model time_off
   */

  export type AggregateTime_off = {
    _count: Time_offCountAggregateOutputType | null
    _min: Time_offMinAggregateOutputType | null
    _max: Time_offMaxAggregateOutputType | null
  }

  export type Time_offMinAggregateOutputType = {
    id: string | null
    staff_id: string | null
    start_at: Date | null
    end_at: Date | null
    reason: string | null
  }

  export type Time_offMaxAggregateOutputType = {
    id: string | null
    staff_id: string | null
    start_at: Date | null
    end_at: Date | null
    reason: string | null
  }

  export type Time_offCountAggregateOutputType = {
    id: number
    staff_id: number
    start_at: number
    end_at: number
    reason: number
    _all: number
  }


  export type Time_offMinAggregateInputType = {
    id?: true
    staff_id?: true
    start_at?: true
    end_at?: true
    reason?: true
  }

  export type Time_offMaxAggregateInputType = {
    id?: true
    staff_id?: true
    start_at?: true
    end_at?: true
    reason?: true
  }

  export type Time_offCountAggregateInputType = {
    id?: true
    staff_id?: true
    start_at?: true
    end_at?: true
    reason?: true
    _all?: true
  }

  export type Time_offAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which time_off to aggregate.
     */
    where?: time_offWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of time_offs to fetch.
     */
    orderBy?: time_offOrderByWithRelationInput | time_offOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: time_offWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` time_offs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` time_offs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned time_offs
    **/
    _count?: true | Time_offCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Time_offMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Time_offMaxAggregateInputType
  }

  export type GetTime_offAggregateType<T extends Time_offAggregateArgs> = {
        [P in keyof T & keyof AggregateTime_off]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTime_off[P]>
      : GetScalarType<T[P], AggregateTime_off[P]>
  }




  export type time_offGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: time_offWhereInput
    orderBy?: time_offOrderByWithAggregationInput | time_offOrderByWithAggregationInput[]
    by: Time_offScalarFieldEnum[] | Time_offScalarFieldEnum
    having?: time_offScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Time_offCountAggregateInputType | true
    _min?: Time_offMinAggregateInputType
    _max?: Time_offMaxAggregateInputType
  }

  export type Time_offGroupByOutputType = {
    id: string
    staff_id: string
    start_at: Date
    end_at: Date
    reason: string | null
    _count: Time_offCountAggregateOutputType | null
    _min: Time_offMinAggregateOutputType | null
    _max: Time_offMaxAggregateOutputType | null
  }

  type GetTime_offGroupByPayload<T extends time_offGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Time_offGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Time_offGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Time_offGroupByOutputType[P]>
            : GetScalarType<T[P], Time_offGroupByOutputType[P]>
        }
      >
    >


  export type time_offSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    staff_id?: boolean
    start_at?: boolean
    end_at?: boolean
    reason?: boolean
    staff?: boolean | staffDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["time_off"]>

  export type time_offSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    staff_id?: boolean
    start_at?: boolean
    end_at?: boolean
    reason?: boolean
    staff?: boolean | staffDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["time_off"]>

  export type time_offSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    staff_id?: boolean
    start_at?: boolean
    end_at?: boolean
    reason?: boolean
    staff?: boolean | staffDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["time_off"]>

  export type time_offSelectScalar = {
    id?: boolean
    staff_id?: boolean
    start_at?: boolean
    end_at?: boolean
    reason?: boolean
  }

  export type time_offOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "staff_id" | "start_at" | "end_at" | "reason", ExtArgs["result"]["time_off"]>
  export type time_offInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    staff?: boolean | staffDefaultArgs<ExtArgs>
  }
  export type time_offIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    staff?: boolean | staffDefaultArgs<ExtArgs>
  }
  export type time_offIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    staff?: boolean | staffDefaultArgs<ExtArgs>
  }

  export type $time_offPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "time_off"
    objects: {
      staff: Prisma.$staffPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      staff_id: string
      start_at: Date
      end_at: Date
      reason: string | null
    }, ExtArgs["result"]["time_off"]>
    composites: {}
  }

  type time_offGetPayload<S extends boolean | null | undefined | time_offDefaultArgs> = $Result.GetResult<Prisma.$time_offPayload, S>

  type time_offCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<time_offFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Time_offCountAggregateInputType | true
    }

  export interface time_offDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['time_off'], meta: { name: 'time_off' } }
    /**
     * Find zero or one Time_off that matches the filter.
     * @param {time_offFindUniqueArgs} args - Arguments to find a Time_off
     * @example
     * // Get one Time_off
     * const time_off = await prisma.time_off.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends time_offFindUniqueArgs>(args: SelectSubset<T, time_offFindUniqueArgs<ExtArgs>>): Prisma__time_offClient<$Result.GetResult<Prisma.$time_offPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Time_off that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {time_offFindUniqueOrThrowArgs} args - Arguments to find a Time_off
     * @example
     * // Get one Time_off
     * const time_off = await prisma.time_off.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends time_offFindUniqueOrThrowArgs>(args: SelectSubset<T, time_offFindUniqueOrThrowArgs<ExtArgs>>): Prisma__time_offClient<$Result.GetResult<Prisma.$time_offPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Time_off that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {time_offFindFirstArgs} args - Arguments to find a Time_off
     * @example
     * // Get one Time_off
     * const time_off = await prisma.time_off.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends time_offFindFirstArgs>(args?: SelectSubset<T, time_offFindFirstArgs<ExtArgs>>): Prisma__time_offClient<$Result.GetResult<Prisma.$time_offPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Time_off that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {time_offFindFirstOrThrowArgs} args - Arguments to find a Time_off
     * @example
     * // Get one Time_off
     * const time_off = await prisma.time_off.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends time_offFindFirstOrThrowArgs>(args?: SelectSubset<T, time_offFindFirstOrThrowArgs<ExtArgs>>): Prisma__time_offClient<$Result.GetResult<Prisma.$time_offPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Time_offs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {time_offFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Time_offs
     * const time_offs = await prisma.time_off.findMany()
     * 
     * // Get first 10 Time_offs
     * const time_offs = await prisma.time_off.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const time_offWithIdOnly = await prisma.time_off.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends time_offFindManyArgs>(args?: SelectSubset<T, time_offFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$time_offPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Time_off.
     * @param {time_offCreateArgs} args - Arguments to create a Time_off.
     * @example
     * // Create one Time_off
     * const Time_off = await prisma.time_off.create({
     *   data: {
     *     // ... data to create a Time_off
     *   }
     * })
     * 
     */
    create<T extends time_offCreateArgs>(args: SelectSubset<T, time_offCreateArgs<ExtArgs>>): Prisma__time_offClient<$Result.GetResult<Prisma.$time_offPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Time_offs.
     * @param {time_offCreateManyArgs} args - Arguments to create many Time_offs.
     * @example
     * // Create many Time_offs
     * const time_off = await prisma.time_off.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends time_offCreateManyArgs>(args?: SelectSubset<T, time_offCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Time_offs and returns the data saved in the database.
     * @param {time_offCreateManyAndReturnArgs} args - Arguments to create many Time_offs.
     * @example
     * // Create many Time_offs
     * const time_off = await prisma.time_off.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Time_offs and only return the `id`
     * const time_offWithIdOnly = await prisma.time_off.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends time_offCreateManyAndReturnArgs>(args?: SelectSubset<T, time_offCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$time_offPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Time_off.
     * @param {time_offDeleteArgs} args - Arguments to delete one Time_off.
     * @example
     * // Delete one Time_off
     * const Time_off = await prisma.time_off.delete({
     *   where: {
     *     // ... filter to delete one Time_off
     *   }
     * })
     * 
     */
    delete<T extends time_offDeleteArgs>(args: SelectSubset<T, time_offDeleteArgs<ExtArgs>>): Prisma__time_offClient<$Result.GetResult<Prisma.$time_offPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Time_off.
     * @param {time_offUpdateArgs} args - Arguments to update one Time_off.
     * @example
     * // Update one Time_off
     * const time_off = await prisma.time_off.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends time_offUpdateArgs>(args: SelectSubset<T, time_offUpdateArgs<ExtArgs>>): Prisma__time_offClient<$Result.GetResult<Prisma.$time_offPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Time_offs.
     * @param {time_offDeleteManyArgs} args - Arguments to filter Time_offs to delete.
     * @example
     * // Delete a few Time_offs
     * const { count } = await prisma.time_off.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends time_offDeleteManyArgs>(args?: SelectSubset<T, time_offDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Time_offs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {time_offUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Time_offs
     * const time_off = await prisma.time_off.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends time_offUpdateManyArgs>(args: SelectSubset<T, time_offUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Time_offs and returns the data updated in the database.
     * @param {time_offUpdateManyAndReturnArgs} args - Arguments to update many Time_offs.
     * @example
     * // Update many Time_offs
     * const time_off = await prisma.time_off.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Time_offs and only return the `id`
     * const time_offWithIdOnly = await prisma.time_off.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends time_offUpdateManyAndReturnArgs>(args: SelectSubset<T, time_offUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$time_offPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Time_off.
     * @param {time_offUpsertArgs} args - Arguments to update or create a Time_off.
     * @example
     * // Update or create a Time_off
     * const time_off = await prisma.time_off.upsert({
     *   create: {
     *     // ... data to create a Time_off
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Time_off we want to update
     *   }
     * })
     */
    upsert<T extends time_offUpsertArgs>(args: SelectSubset<T, time_offUpsertArgs<ExtArgs>>): Prisma__time_offClient<$Result.GetResult<Prisma.$time_offPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Time_offs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {time_offCountArgs} args - Arguments to filter Time_offs to count.
     * @example
     * // Count the number of Time_offs
     * const count = await prisma.time_off.count({
     *   where: {
     *     // ... the filter for the Time_offs we want to count
     *   }
     * })
    **/
    count<T extends time_offCountArgs>(
      args?: Subset<T, time_offCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Time_offCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Time_off.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Time_offAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Time_offAggregateArgs>(args: Subset<T, Time_offAggregateArgs>): Prisma.PrismaPromise<GetTime_offAggregateType<T>>

    /**
     * Group by Time_off.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {time_offGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends time_offGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: time_offGroupByArgs['orderBy'] }
        : { orderBy?: time_offGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, time_offGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTime_offGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the time_off model
   */
  readonly fields: time_offFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for time_off.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__time_offClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    staff<T extends staffDefaultArgs<ExtArgs> = {}>(args?: Subset<T, staffDefaultArgs<ExtArgs>>): Prisma__staffClient<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the time_off model
   */
  interface time_offFieldRefs {
    readonly id: FieldRef<"time_off", 'String'>
    readonly staff_id: FieldRef<"time_off", 'String'>
    readonly start_at: FieldRef<"time_off", 'DateTime'>
    readonly end_at: FieldRef<"time_off", 'DateTime'>
    readonly reason: FieldRef<"time_off", 'String'>
  }
    

  // Custom InputTypes
  /**
   * time_off findUnique
   */
  export type time_offFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the time_off
     */
    select?: time_offSelect<ExtArgs> | null
    /**
     * Omit specific fields from the time_off
     */
    omit?: time_offOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: time_offInclude<ExtArgs> | null
    /**
     * Filter, which time_off to fetch.
     */
    where: time_offWhereUniqueInput
  }

  /**
   * time_off findUniqueOrThrow
   */
  export type time_offFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the time_off
     */
    select?: time_offSelect<ExtArgs> | null
    /**
     * Omit specific fields from the time_off
     */
    omit?: time_offOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: time_offInclude<ExtArgs> | null
    /**
     * Filter, which time_off to fetch.
     */
    where: time_offWhereUniqueInput
  }

  /**
   * time_off findFirst
   */
  export type time_offFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the time_off
     */
    select?: time_offSelect<ExtArgs> | null
    /**
     * Omit specific fields from the time_off
     */
    omit?: time_offOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: time_offInclude<ExtArgs> | null
    /**
     * Filter, which time_off to fetch.
     */
    where?: time_offWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of time_offs to fetch.
     */
    orderBy?: time_offOrderByWithRelationInput | time_offOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for time_offs.
     */
    cursor?: time_offWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` time_offs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` time_offs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of time_offs.
     */
    distinct?: Time_offScalarFieldEnum | Time_offScalarFieldEnum[]
  }

  /**
   * time_off findFirstOrThrow
   */
  export type time_offFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the time_off
     */
    select?: time_offSelect<ExtArgs> | null
    /**
     * Omit specific fields from the time_off
     */
    omit?: time_offOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: time_offInclude<ExtArgs> | null
    /**
     * Filter, which time_off to fetch.
     */
    where?: time_offWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of time_offs to fetch.
     */
    orderBy?: time_offOrderByWithRelationInput | time_offOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for time_offs.
     */
    cursor?: time_offWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` time_offs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` time_offs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of time_offs.
     */
    distinct?: Time_offScalarFieldEnum | Time_offScalarFieldEnum[]
  }

  /**
   * time_off findMany
   */
  export type time_offFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the time_off
     */
    select?: time_offSelect<ExtArgs> | null
    /**
     * Omit specific fields from the time_off
     */
    omit?: time_offOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: time_offInclude<ExtArgs> | null
    /**
     * Filter, which time_offs to fetch.
     */
    where?: time_offWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of time_offs to fetch.
     */
    orderBy?: time_offOrderByWithRelationInput | time_offOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing time_offs.
     */
    cursor?: time_offWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` time_offs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` time_offs.
     */
    skip?: number
    distinct?: Time_offScalarFieldEnum | Time_offScalarFieldEnum[]
  }

  /**
   * time_off create
   */
  export type time_offCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the time_off
     */
    select?: time_offSelect<ExtArgs> | null
    /**
     * Omit specific fields from the time_off
     */
    omit?: time_offOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: time_offInclude<ExtArgs> | null
    /**
     * The data needed to create a time_off.
     */
    data: XOR<time_offCreateInput, time_offUncheckedCreateInput>
  }

  /**
   * time_off createMany
   */
  export type time_offCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many time_offs.
     */
    data: time_offCreateManyInput | time_offCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * time_off createManyAndReturn
   */
  export type time_offCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the time_off
     */
    select?: time_offSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the time_off
     */
    omit?: time_offOmit<ExtArgs> | null
    /**
     * The data used to create many time_offs.
     */
    data: time_offCreateManyInput | time_offCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: time_offIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * time_off update
   */
  export type time_offUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the time_off
     */
    select?: time_offSelect<ExtArgs> | null
    /**
     * Omit specific fields from the time_off
     */
    omit?: time_offOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: time_offInclude<ExtArgs> | null
    /**
     * The data needed to update a time_off.
     */
    data: XOR<time_offUpdateInput, time_offUncheckedUpdateInput>
    /**
     * Choose, which time_off to update.
     */
    where: time_offWhereUniqueInput
  }

  /**
   * time_off updateMany
   */
  export type time_offUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update time_offs.
     */
    data: XOR<time_offUpdateManyMutationInput, time_offUncheckedUpdateManyInput>
    /**
     * Filter which time_offs to update
     */
    where?: time_offWhereInput
    /**
     * Limit how many time_offs to update.
     */
    limit?: number
  }

  /**
   * time_off updateManyAndReturn
   */
  export type time_offUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the time_off
     */
    select?: time_offSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the time_off
     */
    omit?: time_offOmit<ExtArgs> | null
    /**
     * The data used to update time_offs.
     */
    data: XOR<time_offUpdateManyMutationInput, time_offUncheckedUpdateManyInput>
    /**
     * Filter which time_offs to update
     */
    where?: time_offWhereInput
    /**
     * Limit how many time_offs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: time_offIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * time_off upsert
   */
  export type time_offUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the time_off
     */
    select?: time_offSelect<ExtArgs> | null
    /**
     * Omit specific fields from the time_off
     */
    omit?: time_offOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: time_offInclude<ExtArgs> | null
    /**
     * The filter to search for the time_off to update in case it exists.
     */
    where: time_offWhereUniqueInput
    /**
     * In case the time_off found by the `where` argument doesn't exist, create a new time_off with this data.
     */
    create: XOR<time_offCreateInput, time_offUncheckedCreateInput>
    /**
     * In case the time_off was found with the provided `where` argument, update it with this data.
     */
    update: XOR<time_offUpdateInput, time_offUncheckedUpdateInput>
  }

  /**
   * time_off delete
   */
  export type time_offDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the time_off
     */
    select?: time_offSelect<ExtArgs> | null
    /**
     * Omit specific fields from the time_off
     */
    omit?: time_offOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: time_offInclude<ExtArgs> | null
    /**
     * Filter which time_off to delete.
     */
    where: time_offWhereUniqueInput
  }

  /**
   * time_off deleteMany
   */
  export type time_offDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which time_offs to delete
     */
    where?: time_offWhereInput
    /**
     * Limit how many time_offs to delete.
     */
    limit?: number
  }

  /**
   * time_off without action
   */
  export type time_offDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the time_off
     */
    select?: time_offSelect<ExtArgs> | null
    /**
     * Omit specific fields from the time_off
     */
    omit?: time_offOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: time_offInclude<ExtArgs> | null
  }


  /**
   * Model working_hours
   */

  export type AggregateWorking_hours = {
    _count: Working_hoursCountAggregateOutputType | null
    _avg: Working_hoursAvgAggregateOutputType | null
    _sum: Working_hoursSumAggregateOutputType | null
    _min: Working_hoursMinAggregateOutputType | null
    _max: Working_hoursMaxAggregateOutputType | null
  }

  export type Working_hoursAvgAggregateOutputType = {
    day_of_week: number | null
  }

  export type Working_hoursSumAggregateOutputType = {
    day_of_week: number | null
  }

  export type Working_hoursMinAggregateOutputType = {
    id: string | null
    staff_id: string | null
    day_of_week: number | null
    start_time: Date | null
    end_time: Date | null
  }

  export type Working_hoursMaxAggregateOutputType = {
    id: string | null
    staff_id: string | null
    day_of_week: number | null
    start_time: Date | null
    end_time: Date | null
  }

  export type Working_hoursCountAggregateOutputType = {
    id: number
    staff_id: number
    day_of_week: number
    start_time: number
    end_time: number
    _all: number
  }


  export type Working_hoursAvgAggregateInputType = {
    day_of_week?: true
  }

  export type Working_hoursSumAggregateInputType = {
    day_of_week?: true
  }

  export type Working_hoursMinAggregateInputType = {
    id?: true
    staff_id?: true
    day_of_week?: true
    start_time?: true
    end_time?: true
  }

  export type Working_hoursMaxAggregateInputType = {
    id?: true
    staff_id?: true
    day_of_week?: true
    start_time?: true
    end_time?: true
  }

  export type Working_hoursCountAggregateInputType = {
    id?: true
    staff_id?: true
    day_of_week?: true
    start_time?: true
    end_time?: true
    _all?: true
  }

  export type Working_hoursAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which working_hours to aggregate.
     */
    where?: working_hoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of working_hours to fetch.
     */
    orderBy?: working_hoursOrderByWithRelationInput | working_hoursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: working_hoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` working_hours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` working_hours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned working_hours
    **/
    _count?: true | Working_hoursCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Working_hoursAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Working_hoursSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Working_hoursMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Working_hoursMaxAggregateInputType
  }

  export type GetWorking_hoursAggregateType<T extends Working_hoursAggregateArgs> = {
        [P in keyof T & keyof AggregateWorking_hours]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorking_hours[P]>
      : GetScalarType<T[P], AggregateWorking_hours[P]>
  }




  export type working_hoursGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: working_hoursWhereInput
    orderBy?: working_hoursOrderByWithAggregationInput | working_hoursOrderByWithAggregationInput[]
    by: Working_hoursScalarFieldEnum[] | Working_hoursScalarFieldEnum
    having?: working_hoursScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Working_hoursCountAggregateInputType | true
    _avg?: Working_hoursAvgAggregateInputType
    _sum?: Working_hoursSumAggregateInputType
    _min?: Working_hoursMinAggregateInputType
    _max?: Working_hoursMaxAggregateInputType
  }

  export type Working_hoursGroupByOutputType = {
    id: string
    staff_id: string
    day_of_week: number
    start_time: Date
    end_time: Date
    _count: Working_hoursCountAggregateOutputType | null
    _avg: Working_hoursAvgAggregateOutputType | null
    _sum: Working_hoursSumAggregateOutputType | null
    _min: Working_hoursMinAggregateOutputType | null
    _max: Working_hoursMaxAggregateOutputType | null
  }

  type GetWorking_hoursGroupByPayload<T extends working_hoursGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Working_hoursGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Working_hoursGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Working_hoursGroupByOutputType[P]>
            : GetScalarType<T[P], Working_hoursGroupByOutputType[P]>
        }
      >
    >


  export type working_hoursSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    staff_id?: boolean
    day_of_week?: boolean
    start_time?: boolean
    end_time?: boolean
    staff?: boolean | staffDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["working_hours"]>

  export type working_hoursSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    staff_id?: boolean
    day_of_week?: boolean
    start_time?: boolean
    end_time?: boolean
    staff?: boolean | staffDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["working_hours"]>

  export type working_hoursSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    staff_id?: boolean
    day_of_week?: boolean
    start_time?: boolean
    end_time?: boolean
    staff?: boolean | staffDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["working_hours"]>

  export type working_hoursSelectScalar = {
    id?: boolean
    staff_id?: boolean
    day_of_week?: boolean
    start_time?: boolean
    end_time?: boolean
  }

  export type working_hoursOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "staff_id" | "day_of_week" | "start_time" | "end_time", ExtArgs["result"]["working_hours"]>
  export type working_hoursInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    staff?: boolean | staffDefaultArgs<ExtArgs>
  }
  export type working_hoursIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    staff?: boolean | staffDefaultArgs<ExtArgs>
  }
  export type working_hoursIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    staff?: boolean | staffDefaultArgs<ExtArgs>
  }

  export type $working_hoursPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "working_hours"
    objects: {
      staff: Prisma.$staffPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      staff_id: string
      day_of_week: number
      start_time: Date
      end_time: Date
    }, ExtArgs["result"]["working_hours"]>
    composites: {}
  }

  type working_hoursGetPayload<S extends boolean | null | undefined | working_hoursDefaultArgs> = $Result.GetResult<Prisma.$working_hoursPayload, S>

  type working_hoursCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<working_hoursFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Working_hoursCountAggregateInputType | true
    }

  export interface working_hoursDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['working_hours'], meta: { name: 'working_hours' } }
    /**
     * Find zero or one Working_hours that matches the filter.
     * @param {working_hoursFindUniqueArgs} args - Arguments to find a Working_hours
     * @example
     * // Get one Working_hours
     * const working_hours = await prisma.working_hours.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends working_hoursFindUniqueArgs>(args: SelectSubset<T, working_hoursFindUniqueArgs<ExtArgs>>): Prisma__working_hoursClient<$Result.GetResult<Prisma.$working_hoursPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Working_hours that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {working_hoursFindUniqueOrThrowArgs} args - Arguments to find a Working_hours
     * @example
     * // Get one Working_hours
     * const working_hours = await prisma.working_hours.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends working_hoursFindUniqueOrThrowArgs>(args: SelectSubset<T, working_hoursFindUniqueOrThrowArgs<ExtArgs>>): Prisma__working_hoursClient<$Result.GetResult<Prisma.$working_hoursPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Working_hours that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {working_hoursFindFirstArgs} args - Arguments to find a Working_hours
     * @example
     * // Get one Working_hours
     * const working_hours = await prisma.working_hours.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends working_hoursFindFirstArgs>(args?: SelectSubset<T, working_hoursFindFirstArgs<ExtArgs>>): Prisma__working_hoursClient<$Result.GetResult<Prisma.$working_hoursPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Working_hours that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {working_hoursFindFirstOrThrowArgs} args - Arguments to find a Working_hours
     * @example
     * // Get one Working_hours
     * const working_hours = await prisma.working_hours.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends working_hoursFindFirstOrThrowArgs>(args?: SelectSubset<T, working_hoursFindFirstOrThrowArgs<ExtArgs>>): Prisma__working_hoursClient<$Result.GetResult<Prisma.$working_hoursPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Working_hours that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {working_hoursFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Working_hours
     * const working_hours = await prisma.working_hours.findMany()
     * 
     * // Get first 10 Working_hours
     * const working_hours = await prisma.working_hours.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const working_hoursWithIdOnly = await prisma.working_hours.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends working_hoursFindManyArgs>(args?: SelectSubset<T, working_hoursFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$working_hoursPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Working_hours.
     * @param {working_hoursCreateArgs} args - Arguments to create a Working_hours.
     * @example
     * // Create one Working_hours
     * const Working_hours = await prisma.working_hours.create({
     *   data: {
     *     // ... data to create a Working_hours
     *   }
     * })
     * 
     */
    create<T extends working_hoursCreateArgs>(args: SelectSubset<T, working_hoursCreateArgs<ExtArgs>>): Prisma__working_hoursClient<$Result.GetResult<Prisma.$working_hoursPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Working_hours.
     * @param {working_hoursCreateManyArgs} args - Arguments to create many Working_hours.
     * @example
     * // Create many Working_hours
     * const working_hours = await prisma.working_hours.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends working_hoursCreateManyArgs>(args?: SelectSubset<T, working_hoursCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Working_hours and returns the data saved in the database.
     * @param {working_hoursCreateManyAndReturnArgs} args - Arguments to create many Working_hours.
     * @example
     * // Create many Working_hours
     * const working_hours = await prisma.working_hours.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Working_hours and only return the `id`
     * const working_hoursWithIdOnly = await prisma.working_hours.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends working_hoursCreateManyAndReturnArgs>(args?: SelectSubset<T, working_hoursCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$working_hoursPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Working_hours.
     * @param {working_hoursDeleteArgs} args - Arguments to delete one Working_hours.
     * @example
     * // Delete one Working_hours
     * const Working_hours = await prisma.working_hours.delete({
     *   where: {
     *     // ... filter to delete one Working_hours
     *   }
     * })
     * 
     */
    delete<T extends working_hoursDeleteArgs>(args: SelectSubset<T, working_hoursDeleteArgs<ExtArgs>>): Prisma__working_hoursClient<$Result.GetResult<Prisma.$working_hoursPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Working_hours.
     * @param {working_hoursUpdateArgs} args - Arguments to update one Working_hours.
     * @example
     * // Update one Working_hours
     * const working_hours = await prisma.working_hours.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends working_hoursUpdateArgs>(args: SelectSubset<T, working_hoursUpdateArgs<ExtArgs>>): Prisma__working_hoursClient<$Result.GetResult<Prisma.$working_hoursPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Working_hours.
     * @param {working_hoursDeleteManyArgs} args - Arguments to filter Working_hours to delete.
     * @example
     * // Delete a few Working_hours
     * const { count } = await prisma.working_hours.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends working_hoursDeleteManyArgs>(args?: SelectSubset<T, working_hoursDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Working_hours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {working_hoursUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Working_hours
     * const working_hours = await prisma.working_hours.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends working_hoursUpdateManyArgs>(args: SelectSubset<T, working_hoursUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Working_hours and returns the data updated in the database.
     * @param {working_hoursUpdateManyAndReturnArgs} args - Arguments to update many Working_hours.
     * @example
     * // Update many Working_hours
     * const working_hours = await prisma.working_hours.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Working_hours and only return the `id`
     * const working_hoursWithIdOnly = await prisma.working_hours.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends working_hoursUpdateManyAndReturnArgs>(args: SelectSubset<T, working_hoursUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$working_hoursPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Working_hours.
     * @param {working_hoursUpsertArgs} args - Arguments to update or create a Working_hours.
     * @example
     * // Update or create a Working_hours
     * const working_hours = await prisma.working_hours.upsert({
     *   create: {
     *     // ... data to create a Working_hours
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Working_hours we want to update
     *   }
     * })
     */
    upsert<T extends working_hoursUpsertArgs>(args: SelectSubset<T, working_hoursUpsertArgs<ExtArgs>>): Prisma__working_hoursClient<$Result.GetResult<Prisma.$working_hoursPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Working_hours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {working_hoursCountArgs} args - Arguments to filter Working_hours to count.
     * @example
     * // Count the number of Working_hours
     * const count = await prisma.working_hours.count({
     *   where: {
     *     // ... the filter for the Working_hours we want to count
     *   }
     * })
    **/
    count<T extends working_hoursCountArgs>(
      args?: Subset<T, working_hoursCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Working_hoursCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Working_hours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Working_hoursAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Working_hoursAggregateArgs>(args: Subset<T, Working_hoursAggregateArgs>): Prisma.PrismaPromise<GetWorking_hoursAggregateType<T>>

    /**
     * Group by Working_hours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {working_hoursGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends working_hoursGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: working_hoursGroupByArgs['orderBy'] }
        : { orderBy?: working_hoursGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, working_hoursGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorking_hoursGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the working_hours model
   */
  readonly fields: working_hoursFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for working_hours.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__working_hoursClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    staff<T extends staffDefaultArgs<ExtArgs> = {}>(args?: Subset<T, staffDefaultArgs<ExtArgs>>): Prisma__staffClient<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the working_hours model
   */
  interface working_hoursFieldRefs {
    readonly id: FieldRef<"working_hours", 'String'>
    readonly staff_id: FieldRef<"working_hours", 'String'>
    readonly day_of_week: FieldRef<"working_hours", 'Int'>
    readonly start_time: FieldRef<"working_hours", 'DateTime'>
    readonly end_time: FieldRef<"working_hours", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * working_hours findUnique
   */
  export type working_hoursFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the working_hours
     */
    select?: working_hoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the working_hours
     */
    omit?: working_hoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: working_hoursInclude<ExtArgs> | null
    /**
     * Filter, which working_hours to fetch.
     */
    where: working_hoursWhereUniqueInput
  }

  /**
   * working_hours findUniqueOrThrow
   */
  export type working_hoursFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the working_hours
     */
    select?: working_hoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the working_hours
     */
    omit?: working_hoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: working_hoursInclude<ExtArgs> | null
    /**
     * Filter, which working_hours to fetch.
     */
    where: working_hoursWhereUniqueInput
  }

  /**
   * working_hours findFirst
   */
  export type working_hoursFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the working_hours
     */
    select?: working_hoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the working_hours
     */
    omit?: working_hoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: working_hoursInclude<ExtArgs> | null
    /**
     * Filter, which working_hours to fetch.
     */
    where?: working_hoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of working_hours to fetch.
     */
    orderBy?: working_hoursOrderByWithRelationInput | working_hoursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for working_hours.
     */
    cursor?: working_hoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` working_hours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` working_hours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of working_hours.
     */
    distinct?: Working_hoursScalarFieldEnum | Working_hoursScalarFieldEnum[]
  }

  /**
   * working_hours findFirstOrThrow
   */
  export type working_hoursFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the working_hours
     */
    select?: working_hoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the working_hours
     */
    omit?: working_hoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: working_hoursInclude<ExtArgs> | null
    /**
     * Filter, which working_hours to fetch.
     */
    where?: working_hoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of working_hours to fetch.
     */
    orderBy?: working_hoursOrderByWithRelationInput | working_hoursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for working_hours.
     */
    cursor?: working_hoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` working_hours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` working_hours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of working_hours.
     */
    distinct?: Working_hoursScalarFieldEnum | Working_hoursScalarFieldEnum[]
  }

  /**
   * working_hours findMany
   */
  export type working_hoursFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the working_hours
     */
    select?: working_hoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the working_hours
     */
    omit?: working_hoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: working_hoursInclude<ExtArgs> | null
    /**
     * Filter, which working_hours to fetch.
     */
    where?: working_hoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of working_hours to fetch.
     */
    orderBy?: working_hoursOrderByWithRelationInput | working_hoursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing working_hours.
     */
    cursor?: working_hoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` working_hours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` working_hours.
     */
    skip?: number
    distinct?: Working_hoursScalarFieldEnum | Working_hoursScalarFieldEnum[]
  }

  /**
   * working_hours create
   */
  export type working_hoursCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the working_hours
     */
    select?: working_hoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the working_hours
     */
    omit?: working_hoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: working_hoursInclude<ExtArgs> | null
    /**
     * The data needed to create a working_hours.
     */
    data: XOR<working_hoursCreateInput, working_hoursUncheckedCreateInput>
  }

  /**
   * working_hours createMany
   */
  export type working_hoursCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many working_hours.
     */
    data: working_hoursCreateManyInput | working_hoursCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * working_hours createManyAndReturn
   */
  export type working_hoursCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the working_hours
     */
    select?: working_hoursSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the working_hours
     */
    omit?: working_hoursOmit<ExtArgs> | null
    /**
     * The data used to create many working_hours.
     */
    data: working_hoursCreateManyInput | working_hoursCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: working_hoursIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * working_hours update
   */
  export type working_hoursUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the working_hours
     */
    select?: working_hoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the working_hours
     */
    omit?: working_hoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: working_hoursInclude<ExtArgs> | null
    /**
     * The data needed to update a working_hours.
     */
    data: XOR<working_hoursUpdateInput, working_hoursUncheckedUpdateInput>
    /**
     * Choose, which working_hours to update.
     */
    where: working_hoursWhereUniqueInput
  }

  /**
   * working_hours updateMany
   */
  export type working_hoursUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update working_hours.
     */
    data: XOR<working_hoursUpdateManyMutationInput, working_hoursUncheckedUpdateManyInput>
    /**
     * Filter which working_hours to update
     */
    where?: working_hoursWhereInput
    /**
     * Limit how many working_hours to update.
     */
    limit?: number
  }

  /**
   * working_hours updateManyAndReturn
   */
  export type working_hoursUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the working_hours
     */
    select?: working_hoursSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the working_hours
     */
    omit?: working_hoursOmit<ExtArgs> | null
    /**
     * The data used to update working_hours.
     */
    data: XOR<working_hoursUpdateManyMutationInput, working_hoursUncheckedUpdateManyInput>
    /**
     * Filter which working_hours to update
     */
    where?: working_hoursWhereInput
    /**
     * Limit how many working_hours to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: working_hoursIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * working_hours upsert
   */
  export type working_hoursUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the working_hours
     */
    select?: working_hoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the working_hours
     */
    omit?: working_hoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: working_hoursInclude<ExtArgs> | null
    /**
     * The filter to search for the working_hours to update in case it exists.
     */
    where: working_hoursWhereUniqueInput
    /**
     * In case the working_hours found by the `where` argument doesn't exist, create a new working_hours with this data.
     */
    create: XOR<working_hoursCreateInput, working_hoursUncheckedCreateInput>
    /**
     * In case the working_hours was found with the provided `where` argument, update it with this data.
     */
    update: XOR<working_hoursUpdateInput, working_hoursUncheckedUpdateInput>
  }

  /**
   * working_hours delete
   */
  export type working_hoursDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the working_hours
     */
    select?: working_hoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the working_hours
     */
    omit?: working_hoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: working_hoursInclude<ExtArgs> | null
    /**
     * Filter which working_hours to delete.
     */
    where: working_hoursWhereUniqueInput
  }

  /**
   * working_hours deleteMany
   */
  export type working_hoursDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which working_hours to delete
     */
    where?: working_hoursWhereInput
    /**
     * Limit how many working_hours to delete.
     */
    limit?: number
  }

  /**
   * working_hours without action
   */
  export type working_hoursDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the working_hours
     */
    select?: working_hoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the working_hours
     */
    omit?: working_hoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: working_hoursInclude<ExtArgs> | null
  }


  /**
   * Model booking2
   */

  export type AggregateBooking2 = {
    _count: Booking2CountAggregateOutputType | null
    _avg: Booking2AvgAggregateOutputType | null
    _sum: Booking2SumAggregateOutputType | null
    _min: Booking2MinAggregateOutputType | null
    _max: Booking2MaxAggregateOutputType | null
  }

  export type Booking2AvgAggregateOutputType = {
    start_min: number | null
    duration_min: number | null
  }

  export type Booking2SumAggregateOutputType = {
    start_min: number | null
    duration_min: number | null
  }

  export type Booking2MinAggregateOutputType = {
    id: string | null
    service_id: string | null
    staff_id: string | null
    customer_id: string | null
    booking_date: Date | null
    start_min: number | null
    duration_min: number | null
    status: $Enums.booking_status | null
    notes: string | null
    created_at: Date | null
  }

  export type Booking2MaxAggregateOutputType = {
    id: string | null
    service_id: string | null
    staff_id: string | null
    customer_id: string | null
    booking_date: Date | null
    start_min: number | null
    duration_min: number | null
    status: $Enums.booking_status | null
    notes: string | null
    created_at: Date | null
  }

  export type Booking2CountAggregateOutputType = {
    id: number
    service_id: number
    staff_id: number
    customer_id: number
    booking_date: number
    start_min: number
    duration_min: number
    status: number
    notes: number
    created_at: number
    _all: number
  }


  export type Booking2AvgAggregateInputType = {
    start_min?: true
    duration_min?: true
  }

  export type Booking2SumAggregateInputType = {
    start_min?: true
    duration_min?: true
  }

  export type Booking2MinAggregateInputType = {
    id?: true
    service_id?: true
    staff_id?: true
    customer_id?: true
    booking_date?: true
    start_min?: true
    duration_min?: true
    status?: true
    notes?: true
    created_at?: true
  }

  export type Booking2MaxAggregateInputType = {
    id?: true
    service_id?: true
    staff_id?: true
    customer_id?: true
    booking_date?: true
    start_min?: true
    duration_min?: true
    status?: true
    notes?: true
    created_at?: true
  }

  export type Booking2CountAggregateInputType = {
    id?: true
    service_id?: true
    staff_id?: true
    customer_id?: true
    booking_date?: true
    start_min?: true
    duration_min?: true
    status?: true
    notes?: true
    created_at?: true
    _all?: true
  }

  export type Booking2AggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which booking2 to aggregate.
     */
    where?: booking2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of booking2s to fetch.
     */
    orderBy?: booking2OrderByWithRelationInput | booking2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: booking2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` booking2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` booking2s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned booking2s
    **/
    _count?: true | Booking2CountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Booking2AvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Booking2SumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Booking2MinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Booking2MaxAggregateInputType
  }

  export type GetBooking2AggregateType<T extends Booking2AggregateArgs> = {
        [P in keyof T & keyof AggregateBooking2]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooking2[P]>
      : GetScalarType<T[P], AggregateBooking2[P]>
  }




  export type booking2GroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: booking2WhereInput
    orderBy?: booking2OrderByWithAggregationInput | booking2OrderByWithAggregationInput[]
    by: Booking2ScalarFieldEnum[] | Booking2ScalarFieldEnum
    having?: booking2ScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Booking2CountAggregateInputType | true
    _avg?: Booking2AvgAggregateInputType
    _sum?: Booking2SumAggregateInputType
    _min?: Booking2MinAggregateInputType
    _max?: Booking2MaxAggregateInputType
  }

  export type Booking2GroupByOutputType = {
    id: string
    service_id: string
    staff_id: string
    customer_id: string
    booking_date: Date
    start_min: number
    duration_min: number
    status: $Enums.booking_status
    notes: string | null
    created_at: Date
    _count: Booking2CountAggregateOutputType | null
    _avg: Booking2AvgAggregateOutputType | null
    _sum: Booking2SumAggregateOutputType | null
    _min: Booking2MinAggregateOutputType | null
    _max: Booking2MaxAggregateOutputType | null
  }

  type GetBooking2GroupByPayload<T extends booking2GroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Booking2GroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Booking2GroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Booking2GroupByOutputType[P]>
            : GetScalarType<T[P], Booking2GroupByOutputType[P]>
        }
      >
    >


  export type booking2Select<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    service_id?: boolean
    staff_id?: boolean
    customer_id?: boolean
    booking_date?: boolean
    start_min?: boolean
    duration_min?: boolean
    status?: boolean
    notes?: boolean
    created_at?: boolean
    customer?: boolean | customerDefaultArgs<ExtArgs>
    service?: boolean | serviceDefaultArgs<ExtArgs>
    staff?: boolean | staffDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking2"]>

  export type booking2SelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    service_id?: boolean
    staff_id?: boolean
    customer_id?: boolean
    booking_date?: boolean
    start_min?: boolean
    duration_min?: boolean
    status?: boolean
    notes?: boolean
    created_at?: boolean
    customer?: boolean | customerDefaultArgs<ExtArgs>
    service?: boolean | serviceDefaultArgs<ExtArgs>
    staff?: boolean | staffDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking2"]>

  export type booking2SelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    service_id?: boolean
    staff_id?: boolean
    customer_id?: boolean
    booking_date?: boolean
    start_min?: boolean
    duration_min?: boolean
    status?: boolean
    notes?: boolean
    created_at?: boolean
    customer?: boolean | customerDefaultArgs<ExtArgs>
    service?: boolean | serviceDefaultArgs<ExtArgs>
    staff?: boolean | staffDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking2"]>

  export type booking2SelectScalar = {
    id?: boolean
    service_id?: boolean
    staff_id?: boolean
    customer_id?: boolean
    booking_date?: boolean
    start_min?: boolean
    duration_min?: boolean
    status?: boolean
    notes?: boolean
    created_at?: boolean
  }

  export type booking2Omit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "service_id" | "staff_id" | "customer_id" | "booking_date" | "start_min" | "duration_min" | "status" | "notes" | "created_at", ExtArgs["result"]["booking2"]>
  export type booking2Include<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | customerDefaultArgs<ExtArgs>
    service?: boolean | serviceDefaultArgs<ExtArgs>
    staff?: boolean | staffDefaultArgs<ExtArgs>
  }
  export type booking2IncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | customerDefaultArgs<ExtArgs>
    service?: boolean | serviceDefaultArgs<ExtArgs>
    staff?: boolean | staffDefaultArgs<ExtArgs>
  }
  export type booking2IncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | customerDefaultArgs<ExtArgs>
    service?: boolean | serviceDefaultArgs<ExtArgs>
    staff?: boolean | staffDefaultArgs<ExtArgs>
  }

  export type $booking2Payload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "booking2"
    objects: {
      customer: Prisma.$customerPayload<ExtArgs>
      service: Prisma.$servicePayload<ExtArgs>
      staff: Prisma.$staffPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      service_id: string
      staff_id: string
      customer_id: string
      booking_date: Date
      start_min: number
      duration_min: number
      status: $Enums.booking_status
      notes: string | null
      created_at: Date
    }, ExtArgs["result"]["booking2"]>
    composites: {}
  }

  type booking2GetPayload<S extends boolean | null | undefined | booking2DefaultArgs> = $Result.GetResult<Prisma.$booking2Payload, S>

  type booking2CountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<booking2FindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Booking2CountAggregateInputType | true
    }

  export interface booking2Delegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['booking2'], meta: { name: 'booking2' } }
    /**
     * Find zero or one Booking2 that matches the filter.
     * @param {booking2FindUniqueArgs} args - Arguments to find a Booking2
     * @example
     * // Get one Booking2
     * const booking2 = await prisma.booking2.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends booking2FindUniqueArgs>(args: SelectSubset<T, booking2FindUniqueArgs<ExtArgs>>): Prisma__booking2Client<$Result.GetResult<Prisma.$booking2Payload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Booking2 that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {booking2FindUniqueOrThrowArgs} args - Arguments to find a Booking2
     * @example
     * // Get one Booking2
     * const booking2 = await prisma.booking2.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends booking2FindUniqueOrThrowArgs>(args: SelectSubset<T, booking2FindUniqueOrThrowArgs<ExtArgs>>): Prisma__booking2Client<$Result.GetResult<Prisma.$booking2Payload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking2 that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {booking2FindFirstArgs} args - Arguments to find a Booking2
     * @example
     * // Get one Booking2
     * const booking2 = await prisma.booking2.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends booking2FindFirstArgs>(args?: SelectSubset<T, booking2FindFirstArgs<ExtArgs>>): Prisma__booking2Client<$Result.GetResult<Prisma.$booking2Payload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking2 that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {booking2FindFirstOrThrowArgs} args - Arguments to find a Booking2
     * @example
     * // Get one Booking2
     * const booking2 = await prisma.booking2.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends booking2FindFirstOrThrowArgs>(args?: SelectSubset<T, booking2FindFirstOrThrowArgs<ExtArgs>>): Prisma__booking2Client<$Result.GetResult<Prisma.$booking2Payload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Booking2s that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {booking2FindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Booking2s
     * const booking2s = await prisma.booking2.findMany()
     * 
     * // Get first 10 Booking2s
     * const booking2s = await prisma.booking2.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const booking2WithIdOnly = await prisma.booking2.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends booking2FindManyArgs>(args?: SelectSubset<T, booking2FindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$booking2Payload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Booking2.
     * @param {booking2CreateArgs} args - Arguments to create a Booking2.
     * @example
     * // Create one Booking2
     * const Booking2 = await prisma.booking2.create({
     *   data: {
     *     // ... data to create a Booking2
     *   }
     * })
     * 
     */
    create<T extends booking2CreateArgs>(args: SelectSubset<T, booking2CreateArgs<ExtArgs>>): Prisma__booking2Client<$Result.GetResult<Prisma.$booking2Payload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Booking2s.
     * @param {booking2CreateManyArgs} args - Arguments to create many Booking2s.
     * @example
     * // Create many Booking2s
     * const booking2 = await prisma.booking2.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends booking2CreateManyArgs>(args?: SelectSubset<T, booking2CreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Booking2s and returns the data saved in the database.
     * @param {booking2CreateManyAndReturnArgs} args - Arguments to create many Booking2s.
     * @example
     * // Create many Booking2s
     * const booking2 = await prisma.booking2.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Booking2s and only return the `id`
     * const booking2WithIdOnly = await prisma.booking2.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends booking2CreateManyAndReturnArgs>(args?: SelectSubset<T, booking2CreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$booking2Payload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Booking2.
     * @param {booking2DeleteArgs} args - Arguments to delete one Booking2.
     * @example
     * // Delete one Booking2
     * const Booking2 = await prisma.booking2.delete({
     *   where: {
     *     // ... filter to delete one Booking2
     *   }
     * })
     * 
     */
    delete<T extends booking2DeleteArgs>(args: SelectSubset<T, booking2DeleteArgs<ExtArgs>>): Prisma__booking2Client<$Result.GetResult<Prisma.$booking2Payload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Booking2.
     * @param {booking2UpdateArgs} args - Arguments to update one Booking2.
     * @example
     * // Update one Booking2
     * const booking2 = await prisma.booking2.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends booking2UpdateArgs>(args: SelectSubset<T, booking2UpdateArgs<ExtArgs>>): Prisma__booking2Client<$Result.GetResult<Prisma.$booking2Payload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Booking2s.
     * @param {booking2DeleteManyArgs} args - Arguments to filter Booking2s to delete.
     * @example
     * // Delete a few Booking2s
     * const { count } = await prisma.booking2.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends booking2DeleteManyArgs>(args?: SelectSubset<T, booking2DeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Booking2s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {booking2UpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Booking2s
     * const booking2 = await prisma.booking2.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends booking2UpdateManyArgs>(args: SelectSubset<T, booking2UpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Booking2s and returns the data updated in the database.
     * @param {booking2UpdateManyAndReturnArgs} args - Arguments to update many Booking2s.
     * @example
     * // Update many Booking2s
     * const booking2 = await prisma.booking2.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Booking2s and only return the `id`
     * const booking2WithIdOnly = await prisma.booking2.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends booking2UpdateManyAndReturnArgs>(args: SelectSubset<T, booking2UpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$booking2Payload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Booking2.
     * @param {booking2UpsertArgs} args - Arguments to update or create a Booking2.
     * @example
     * // Update or create a Booking2
     * const booking2 = await prisma.booking2.upsert({
     *   create: {
     *     // ... data to create a Booking2
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Booking2 we want to update
     *   }
     * })
     */
    upsert<T extends booking2UpsertArgs>(args: SelectSubset<T, booking2UpsertArgs<ExtArgs>>): Prisma__booking2Client<$Result.GetResult<Prisma.$booking2Payload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Booking2s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {booking2CountArgs} args - Arguments to filter Booking2s to count.
     * @example
     * // Count the number of Booking2s
     * const count = await prisma.booking2.count({
     *   where: {
     *     // ... the filter for the Booking2s we want to count
     *   }
     * })
    **/
    count<T extends booking2CountArgs>(
      args?: Subset<T, booking2CountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Booking2CountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Booking2.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Booking2AggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Booking2AggregateArgs>(args: Subset<T, Booking2AggregateArgs>): Prisma.PrismaPromise<GetBooking2AggregateType<T>>

    /**
     * Group by Booking2.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {booking2GroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends booking2GroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: booking2GroupByArgs['orderBy'] }
        : { orderBy?: booking2GroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, booking2GroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBooking2GroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the booking2 model
   */
  readonly fields: booking2FieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for booking2.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__booking2Client<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends customerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, customerDefaultArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    service<T extends serviceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, serviceDefaultArgs<ExtArgs>>): Prisma__serviceClient<$Result.GetResult<Prisma.$servicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    staff<T extends staffDefaultArgs<ExtArgs> = {}>(args?: Subset<T, staffDefaultArgs<ExtArgs>>): Prisma__staffClient<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the booking2 model
   */
  interface booking2FieldRefs {
    readonly id: FieldRef<"booking2", 'String'>
    readonly service_id: FieldRef<"booking2", 'String'>
    readonly staff_id: FieldRef<"booking2", 'String'>
    readonly customer_id: FieldRef<"booking2", 'String'>
    readonly booking_date: FieldRef<"booking2", 'DateTime'>
    readonly start_min: FieldRef<"booking2", 'Int'>
    readonly duration_min: FieldRef<"booking2", 'Int'>
    readonly status: FieldRef<"booking2", 'booking_status'>
    readonly notes: FieldRef<"booking2", 'String'>
    readonly created_at: FieldRef<"booking2", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * booking2 findUnique
   */
  export type booking2FindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking2
     */
    select?: booking2Select<ExtArgs> | null
    /**
     * Omit specific fields from the booking2
     */
    omit?: booking2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: booking2Include<ExtArgs> | null
    /**
     * Filter, which booking2 to fetch.
     */
    where: booking2WhereUniqueInput
  }

  /**
   * booking2 findUniqueOrThrow
   */
  export type booking2FindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking2
     */
    select?: booking2Select<ExtArgs> | null
    /**
     * Omit specific fields from the booking2
     */
    omit?: booking2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: booking2Include<ExtArgs> | null
    /**
     * Filter, which booking2 to fetch.
     */
    where: booking2WhereUniqueInput
  }

  /**
   * booking2 findFirst
   */
  export type booking2FindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking2
     */
    select?: booking2Select<ExtArgs> | null
    /**
     * Omit specific fields from the booking2
     */
    omit?: booking2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: booking2Include<ExtArgs> | null
    /**
     * Filter, which booking2 to fetch.
     */
    where?: booking2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of booking2s to fetch.
     */
    orderBy?: booking2OrderByWithRelationInput | booking2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for booking2s.
     */
    cursor?: booking2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` booking2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` booking2s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of booking2s.
     */
    distinct?: Booking2ScalarFieldEnum | Booking2ScalarFieldEnum[]
  }

  /**
   * booking2 findFirstOrThrow
   */
  export type booking2FindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking2
     */
    select?: booking2Select<ExtArgs> | null
    /**
     * Omit specific fields from the booking2
     */
    omit?: booking2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: booking2Include<ExtArgs> | null
    /**
     * Filter, which booking2 to fetch.
     */
    where?: booking2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of booking2s to fetch.
     */
    orderBy?: booking2OrderByWithRelationInput | booking2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for booking2s.
     */
    cursor?: booking2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` booking2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` booking2s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of booking2s.
     */
    distinct?: Booking2ScalarFieldEnum | Booking2ScalarFieldEnum[]
  }

  /**
   * booking2 findMany
   */
  export type booking2FindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking2
     */
    select?: booking2Select<ExtArgs> | null
    /**
     * Omit specific fields from the booking2
     */
    omit?: booking2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: booking2Include<ExtArgs> | null
    /**
     * Filter, which booking2s to fetch.
     */
    where?: booking2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of booking2s to fetch.
     */
    orderBy?: booking2OrderByWithRelationInput | booking2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing booking2s.
     */
    cursor?: booking2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` booking2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` booking2s.
     */
    skip?: number
    distinct?: Booking2ScalarFieldEnum | Booking2ScalarFieldEnum[]
  }

  /**
   * booking2 create
   */
  export type booking2CreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking2
     */
    select?: booking2Select<ExtArgs> | null
    /**
     * Omit specific fields from the booking2
     */
    omit?: booking2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: booking2Include<ExtArgs> | null
    /**
     * The data needed to create a booking2.
     */
    data: XOR<booking2CreateInput, booking2UncheckedCreateInput>
  }

  /**
   * booking2 createMany
   */
  export type booking2CreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many booking2s.
     */
    data: booking2CreateManyInput | booking2CreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * booking2 createManyAndReturn
   */
  export type booking2CreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking2
     */
    select?: booking2SelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the booking2
     */
    omit?: booking2Omit<ExtArgs> | null
    /**
     * The data used to create many booking2s.
     */
    data: booking2CreateManyInput | booking2CreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: booking2IncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * booking2 update
   */
  export type booking2UpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking2
     */
    select?: booking2Select<ExtArgs> | null
    /**
     * Omit specific fields from the booking2
     */
    omit?: booking2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: booking2Include<ExtArgs> | null
    /**
     * The data needed to update a booking2.
     */
    data: XOR<booking2UpdateInput, booking2UncheckedUpdateInput>
    /**
     * Choose, which booking2 to update.
     */
    where: booking2WhereUniqueInput
  }

  /**
   * booking2 updateMany
   */
  export type booking2UpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update booking2s.
     */
    data: XOR<booking2UpdateManyMutationInput, booking2UncheckedUpdateManyInput>
    /**
     * Filter which booking2s to update
     */
    where?: booking2WhereInput
    /**
     * Limit how many booking2s to update.
     */
    limit?: number
  }

  /**
   * booking2 updateManyAndReturn
   */
  export type booking2UpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking2
     */
    select?: booking2SelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the booking2
     */
    omit?: booking2Omit<ExtArgs> | null
    /**
     * The data used to update booking2s.
     */
    data: XOR<booking2UpdateManyMutationInput, booking2UncheckedUpdateManyInput>
    /**
     * Filter which booking2s to update
     */
    where?: booking2WhereInput
    /**
     * Limit how many booking2s to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: booking2IncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * booking2 upsert
   */
  export type booking2UpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking2
     */
    select?: booking2Select<ExtArgs> | null
    /**
     * Omit specific fields from the booking2
     */
    omit?: booking2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: booking2Include<ExtArgs> | null
    /**
     * The filter to search for the booking2 to update in case it exists.
     */
    where: booking2WhereUniqueInput
    /**
     * In case the booking2 found by the `where` argument doesn't exist, create a new booking2 with this data.
     */
    create: XOR<booking2CreateInput, booking2UncheckedCreateInput>
    /**
     * In case the booking2 was found with the provided `where` argument, update it with this data.
     */
    update: XOR<booking2UpdateInput, booking2UncheckedUpdateInput>
  }

  /**
   * booking2 delete
   */
  export type booking2DeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking2
     */
    select?: booking2Select<ExtArgs> | null
    /**
     * Omit specific fields from the booking2
     */
    omit?: booking2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: booking2Include<ExtArgs> | null
    /**
     * Filter which booking2 to delete.
     */
    where: booking2WhereUniqueInput
  }

  /**
   * booking2 deleteMany
   */
  export type booking2DeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which booking2s to delete
     */
    where?: booking2WhereInput
    /**
     * Limit how many booking2s to delete.
     */
    limit?: number
  }

  /**
   * booking2 without action
   */
  export type booking2DefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking2
     */
    select?: booking2Select<ExtArgs> | null
    /**
     * Omit specific fields from the booking2
     */
    omit?: booking2Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: booking2Include<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const BookingScalarFieldEnum: {
    id: 'id',
    service_id: 'service_id',
    staff_id: 'staff_id',
    customer_id: 'customer_id',
    start_at: 'start_at',
    end_at: 'end_at',
    status: 'status',
    notes: 'notes',
    created_at: 'created_at'
  };

  export type BookingScalarFieldEnum = (typeof BookingScalarFieldEnum)[keyof typeof BookingScalarFieldEnum]


  export const CustomerScalarFieldEnum: {
    id: 'id',
    full_name: 'full_name',
    phone: 'phone',
    email: 'email',
    created_at: 'created_at'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const ServiceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    duration_min: 'duration_min',
    price: 'price',
    is_active: 'is_active',
    created_at: 'created_at',
    description: 'description'
  };

  export type ServiceScalarFieldEnum = (typeof ServiceScalarFieldEnum)[keyof typeof ServiceScalarFieldEnum]


  export const StaffScalarFieldEnum: {
    id: 'id',
    name: 'name',
    is_active: 'is_active'
  };

  export type StaffScalarFieldEnum = (typeof StaffScalarFieldEnum)[keyof typeof StaffScalarFieldEnum]


  export const Time_offScalarFieldEnum: {
    id: 'id',
    staff_id: 'staff_id',
    start_at: 'start_at',
    end_at: 'end_at',
    reason: 'reason'
  };

  export type Time_offScalarFieldEnum = (typeof Time_offScalarFieldEnum)[keyof typeof Time_offScalarFieldEnum]


  export const Working_hoursScalarFieldEnum: {
    id: 'id',
    staff_id: 'staff_id',
    day_of_week: 'day_of_week',
    start_time: 'start_time',
    end_time: 'end_time'
  };

  export type Working_hoursScalarFieldEnum = (typeof Working_hoursScalarFieldEnum)[keyof typeof Working_hoursScalarFieldEnum]


  export const Booking2ScalarFieldEnum: {
    id: 'id',
    service_id: 'service_id',
    staff_id: 'staff_id',
    customer_id: 'customer_id',
    booking_date: 'booking_date',
    start_min: 'start_min',
    duration_min: 'duration_min',
    status: 'status',
    notes: 'notes',
    created_at: 'created_at'
  };

  export type Booking2ScalarFieldEnum = (typeof Booking2ScalarFieldEnum)[keyof typeof Booking2ScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'booking_status'
   */
  export type Enumbooking_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'booking_status'>
    


  /**
   * Reference to a field of type 'booking_status[]'
   */
  export type ListEnumbooking_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'booking_status[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type bookingWhereInput = {
    AND?: bookingWhereInput | bookingWhereInput[]
    OR?: bookingWhereInput[]
    NOT?: bookingWhereInput | bookingWhereInput[]
    id?: UuidFilter<"booking"> | string
    service_id?: UuidFilter<"booking"> | string
    staff_id?: UuidFilter<"booking"> | string
    customer_id?: UuidFilter<"booking"> | string
    start_at?: DateTimeFilter<"booking"> | Date | string
    end_at?: DateTimeFilter<"booking"> | Date | string
    status?: Enumbooking_statusFilter<"booking"> | $Enums.booking_status
    notes?: StringNullableFilter<"booking"> | string | null
    created_at?: DateTimeFilter<"booking"> | Date | string
    customer?: XOR<CustomerScalarRelationFilter, customerWhereInput>
    service?: XOR<ServiceScalarRelationFilter, serviceWhereInput>
    staff?: XOR<StaffScalarRelationFilter, staffWhereInput>
  }

  export type bookingOrderByWithRelationInput = {
    id?: SortOrder
    service_id?: SortOrder
    staff_id?: SortOrder
    customer_id?: SortOrder
    start_at?: SortOrder
    end_at?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    created_at?: SortOrder
    customer?: customerOrderByWithRelationInput
    service?: serviceOrderByWithRelationInput
    staff?: staffOrderByWithRelationInput
  }

  export type bookingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    staff_id_start_at?: bookingStaff_idStart_atCompoundUniqueInput
    AND?: bookingWhereInput | bookingWhereInput[]
    OR?: bookingWhereInput[]
    NOT?: bookingWhereInput | bookingWhereInput[]
    service_id?: UuidFilter<"booking"> | string
    staff_id?: UuidFilter<"booking"> | string
    customer_id?: UuidFilter<"booking"> | string
    start_at?: DateTimeFilter<"booking"> | Date | string
    end_at?: DateTimeFilter<"booking"> | Date | string
    status?: Enumbooking_statusFilter<"booking"> | $Enums.booking_status
    notes?: StringNullableFilter<"booking"> | string | null
    created_at?: DateTimeFilter<"booking"> | Date | string
    customer?: XOR<CustomerScalarRelationFilter, customerWhereInput>
    service?: XOR<ServiceScalarRelationFilter, serviceWhereInput>
    staff?: XOR<StaffScalarRelationFilter, staffWhereInput>
  }, "id" | "staff_id_start_at">

  export type bookingOrderByWithAggregationInput = {
    id?: SortOrder
    service_id?: SortOrder
    staff_id?: SortOrder
    customer_id?: SortOrder
    start_at?: SortOrder
    end_at?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: bookingCountOrderByAggregateInput
    _max?: bookingMaxOrderByAggregateInput
    _min?: bookingMinOrderByAggregateInput
  }

  export type bookingScalarWhereWithAggregatesInput = {
    AND?: bookingScalarWhereWithAggregatesInput | bookingScalarWhereWithAggregatesInput[]
    OR?: bookingScalarWhereWithAggregatesInput[]
    NOT?: bookingScalarWhereWithAggregatesInput | bookingScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"booking"> | string
    service_id?: UuidWithAggregatesFilter<"booking"> | string
    staff_id?: UuidWithAggregatesFilter<"booking"> | string
    customer_id?: UuidWithAggregatesFilter<"booking"> | string
    start_at?: DateTimeWithAggregatesFilter<"booking"> | Date | string
    end_at?: DateTimeWithAggregatesFilter<"booking"> | Date | string
    status?: Enumbooking_statusWithAggregatesFilter<"booking"> | $Enums.booking_status
    notes?: StringNullableWithAggregatesFilter<"booking"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"booking"> | Date | string
  }

  export type customerWhereInput = {
    AND?: customerWhereInput | customerWhereInput[]
    OR?: customerWhereInput[]
    NOT?: customerWhereInput | customerWhereInput[]
    id?: UuidFilter<"customer"> | string
    full_name?: StringFilter<"customer"> | string
    phone?: StringNullableFilter<"customer"> | string | null
    email?: StringNullableFilter<"customer"> | string | null
    created_at?: DateTimeFilter<"customer"> | Date | string
    booking?: BookingListRelationFilter
    booking2?: Booking2ListRelationFilter
  }

  export type customerOrderByWithRelationInput = {
    id?: SortOrder
    full_name?: SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    created_at?: SortOrder
    booking?: bookingOrderByRelationAggregateInput
    booking2?: booking2OrderByRelationAggregateInput
  }

  export type customerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: customerWhereInput | customerWhereInput[]
    OR?: customerWhereInput[]
    NOT?: customerWhereInput | customerWhereInput[]
    full_name?: StringFilter<"customer"> | string
    phone?: StringNullableFilter<"customer"> | string | null
    email?: StringNullableFilter<"customer"> | string | null
    created_at?: DateTimeFilter<"customer"> | Date | string
    booking?: BookingListRelationFilter
    booking2?: Booking2ListRelationFilter
  }, "id">

  export type customerOrderByWithAggregationInput = {
    id?: SortOrder
    full_name?: SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: customerCountOrderByAggregateInput
    _max?: customerMaxOrderByAggregateInput
    _min?: customerMinOrderByAggregateInput
  }

  export type customerScalarWhereWithAggregatesInput = {
    AND?: customerScalarWhereWithAggregatesInput | customerScalarWhereWithAggregatesInput[]
    OR?: customerScalarWhereWithAggregatesInput[]
    NOT?: customerScalarWhereWithAggregatesInput | customerScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"customer"> | string
    full_name?: StringWithAggregatesFilter<"customer"> | string
    phone?: StringNullableWithAggregatesFilter<"customer"> | string | null
    email?: StringNullableWithAggregatesFilter<"customer"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"customer"> | Date | string
  }

  export type serviceWhereInput = {
    AND?: serviceWhereInput | serviceWhereInput[]
    OR?: serviceWhereInput[]
    NOT?: serviceWhereInput | serviceWhereInput[]
    id?: UuidFilter<"service"> | string
    name?: StringFilter<"service"> | string
    duration_min?: IntFilter<"service"> | number
    price?: DecimalNullableFilter<"service"> | Decimal | DecimalJsLike | number | string | null
    is_active?: BoolFilter<"service"> | boolean
    created_at?: DateTimeFilter<"service"> | Date | string
    description?: StringNullableFilter<"service"> | string | null
    booking?: BookingListRelationFilter
    booking2?: Booking2ListRelationFilter
  }

  export type serviceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    duration_min?: SortOrder
    price?: SortOrderInput | SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    description?: SortOrderInput | SortOrder
    booking?: bookingOrderByRelationAggregateInput
    booking2?: booking2OrderByRelationAggregateInput
  }

  export type serviceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: serviceWhereInput | serviceWhereInput[]
    OR?: serviceWhereInput[]
    NOT?: serviceWhereInput | serviceWhereInput[]
    name?: StringFilter<"service"> | string
    duration_min?: IntFilter<"service"> | number
    price?: DecimalNullableFilter<"service"> | Decimal | DecimalJsLike | number | string | null
    is_active?: BoolFilter<"service"> | boolean
    created_at?: DateTimeFilter<"service"> | Date | string
    description?: StringNullableFilter<"service"> | string | null
    booking?: BookingListRelationFilter
    booking2?: Booking2ListRelationFilter
  }, "id">

  export type serviceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    duration_min?: SortOrder
    price?: SortOrderInput | SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: serviceCountOrderByAggregateInput
    _avg?: serviceAvgOrderByAggregateInput
    _max?: serviceMaxOrderByAggregateInput
    _min?: serviceMinOrderByAggregateInput
    _sum?: serviceSumOrderByAggregateInput
  }

  export type serviceScalarWhereWithAggregatesInput = {
    AND?: serviceScalarWhereWithAggregatesInput | serviceScalarWhereWithAggregatesInput[]
    OR?: serviceScalarWhereWithAggregatesInput[]
    NOT?: serviceScalarWhereWithAggregatesInput | serviceScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"service"> | string
    name?: StringWithAggregatesFilter<"service"> | string
    duration_min?: IntWithAggregatesFilter<"service"> | number
    price?: DecimalNullableWithAggregatesFilter<"service"> | Decimal | DecimalJsLike | number | string | null
    is_active?: BoolWithAggregatesFilter<"service"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"service"> | Date | string
    description?: StringNullableWithAggregatesFilter<"service"> | string | null
  }

  export type staffWhereInput = {
    AND?: staffWhereInput | staffWhereInput[]
    OR?: staffWhereInput[]
    NOT?: staffWhereInput | staffWhereInput[]
    id?: UuidFilter<"staff"> | string
    name?: StringFilter<"staff"> | string
    is_active?: BoolFilter<"staff"> | boolean
    booking?: BookingListRelationFilter
    booking2?: Booking2ListRelationFilter
    time_off?: Time_offListRelationFilter
    working_hours?: Working_hoursListRelationFilter
  }

  export type staffOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    is_active?: SortOrder
    booking?: bookingOrderByRelationAggregateInput
    booking2?: booking2OrderByRelationAggregateInput
    time_off?: time_offOrderByRelationAggregateInput
    working_hours?: working_hoursOrderByRelationAggregateInput
  }

  export type staffWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: staffWhereInput | staffWhereInput[]
    OR?: staffWhereInput[]
    NOT?: staffWhereInput | staffWhereInput[]
    name?: StringFilter<"staff"> | string
    is_active?: BoolFilter<"staff"> | boolean
    booking?: BookingListRelationFilter
    booking2?: Booking2ListRelationFilter
    time_off?: Time_offListRelationFilter
    working_hours?: Working_hoursListRelationFilter
  }, "id">

  export type staffOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    is_active?: SortOrder
    _count?: staffCountOrderByAggregateInput
    _max?: staffMaxOrderByAggregateInput
    _min?: staffMinOrderByAggregateInput
  }

  export type staffScalarWhereWithAggregatesInput = {
    AND?: staffScalarWhereWithAggregatesInput | staffScalarWhereWithAggregatesInput[]
    OR?: staffScalarWhereWithAggregatesInput[]
    NOT?: staffScalarWhereWithAggregatesInput | staffScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"staff"> | string
    name?: StringWithAggregatesFilter<"staff"> | string
    is_active?: BoolWithAggregatesFilter<"staff"> | boolean
  }

  export type time_offWhereInput = {
    AND?: time_offWhereInput | time_offWhereInput[]
    OR?: time_offWhereInput[]
    NOT?: time_offWhereInput | time_offWhereInput[]
    id?: UuidFilter<"time_off"> | string
    staff_id?: UuidFilter<"time_off"> | string
    start_at?: DateTimeFilter<"time_off"> | Date | string
    end_at?: DateTimeFilter<"time_off"> | Date | string
    reason?: StringNullableFilter<"time_off"> | string | null
    staff?: XOR<StaffScalarRelationFilter, staffWhereInput>
  }

  export type time_offOrderByWithRelationInput = {
    id?: SortOrder
    staff_id?: SortOrder
    start_at?: SortOrder
    end_at?: SortOrder
    reason?: SortOrderInput | SortOrder
    staff?: staffOrderByWithRelationInput
  }

  export type time_offWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: time_offWhereInput | time_offWhereInput[]
    OR?: time_offWhereInput[]
    NOT?: time_offWhereInput | time_offWhereInput[]
    staff_id?: UuidFilter<"time_off"> | string
    start_at?: DateTimeFilter<"time_off"> | Date | string
    end_at?: DateTimeFilter<"time_off"> | Date | string
    reason?: StringNullableFilter<"time_off"> | string | null
    staff?: XOR<StaffScalarRelationFilter, staffWhereInput>
  }, "id">

  export type time_offOrderByWithAggregationInput = {
    id?: SortOrder
    staff_id?: SortOrder
    start_at?: SortOrder
    end_at?: SortOrder
    reason?: SortOrderInput | SortOrder
    _count?: time_offCountOrderByAggregateInput
    _max?: time_offMaxOrderByAggregateInput
    _min?: time_offMinOrderByAggregateInput
  }

  export type time_offScalarWhereWithAggregatesInput = {
    AND?: time_offScalarWhereWithAggregatesInput | time_offScalarWhereWithAggregatesInput[]
    OR?: time_offScalarWhereWithAggregatesInput[]
    NOT?: time_offScalarWhereWithAggregatesInput | time_offScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"time_off"> | string
    staff_id?: UuidWithAggregatesFilter<"time_off"> | string
    start_at?: DateTimeWithAggregatesFilter<"time_off"> | Date | string
    end_at?: DateTimeWithAggregatesFilter<"time_off"> | Date | string
    reason?: StringNullableWithAggregatesFilter<"time_off"> | string | null
  }

  export type working_hoursWhereInput = {
    AND?: working_hoursWhereInput | working_hoursWhereInput[]
    OR?: working_hoursWhereInput[]
    NOT?: working_hoursWhereInput | working_hoursWhereInput[]
    id?: UuidFilter<"working_hours"> | string
    staff_id?: UuidFilter<"working_hours"> | string
    day_of_week?: IntFilter<"working_hours"> | number
    start_time?: DateTimeFilter<"working_hours"> | Date | string
    end_time?: DateTimeFilter<"working_hours"> | Date | string
    staff?: XOR<StaffScalarRelationFilter, staffWhereInput>
  }

  export type working_hoursOrderByWithRelationInput = {
    id?: SortOrder
    staff_id?: SortOrder
    day_of_week?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    staff?: staffOrderByWithRelationInput
  }

  export type working_hoursWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    staff_id_day_of_week_start_time_end_time?: working_hoursStaff_idDay_of_weekStart_timeEnd_timeCompoundUniqueInput
    AND?: working_hoursWhereInput | working_hoursWhereInput[]
    OR?: working_hoursWhereInput[]
    NOT?: working_hoursWhereInput | working_hoursWhereInput[]
    staff_id?: UuidFilter<"working_hours"> | string
    day_of_week?: IntFilter<"working_hours"> | number
    start_time?: DateTimeFilter<"working_hours"> | Date | string
    end_time?: DateTimeFilter<"working_hours"> | Date | string
    staff?: XOR<StaffScalarRelationFilter, staffWhereInput>
  }, "id" | "staff_id_day_of_week_start_time_end_time">

  export type working_hoursOrderByWithAggregationInput = {
    id?: SortOrder
    staff_id?: SortOrder
    day_of_week?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    _count?: working_hoursCountOrderByAggregateInput
    _avg?: working_hoursAvgOrderByAggregateInput
    _max?: working_hoursMaxOrderByAggregateInput
    _min?: working_hoursMinOrderByAggregateInput
    _sum?: working_hoursSumOrderByAggregateInput
  }

  export type working_hoursScalarWhereWithAggregatesInput = {
    AND?: working_hoursScalarWhereWithAggregatesInput | working_hoursScalarWhereWithAggregatesInput[]
    OR?: working_hoursScalarWhereWithAggregatesInput[]
    NOT?: working_hoursScalarWhereWithAggregatesInput | working_hoursScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"working_hours"> | string
    staff_id?: UuidWithAggregatesFilter<"working_hours"> | string
    day_of_week?: IntWithAggregatesFilter<"working_hours"> | number
    start_time?: DateTimeWithAggregatesFilter<"working_hours"> | Date | string
    end_time?: DateTimeWithAggregatesFilter<"working_hours"> | Date | string
  }

  export type booking2WhereInput = {
    AND?: booking2WhereInput | booking2WhereInput[]
    OR?: booking2WhereInput[]
    NOT?: booking2WhereInput | booking2WhereInput[]
    id?: UuidFilter<"booking2"> | string
    service_id?: UuidFilter<"booking2"> | string
    staff_id?: UuidFilter<"booking2"> | string
    customer_id?: UuidFilter<"booking2"> | string
    booking_date?: DateTimeFilter<"booking2"> | Date | string
    start_min?: IntFilter<"booking2"> | number
    duration_min?: IntFilter<"booking2"> | number
    status?: Enumbooking_statusFilter<"booking2"> | $Enums.booking_status
    notes?: StringNullableFilter<"booking2"> | string | null
    created_at?: DateTimeFilter<"booking2"> | Date | string
    customer?: XOR<CustomerScalarRelationFilter, customerWhereInput>
    service?: XOR<ServiceScalarRelationFilter, serviceWhereInput>
    staff?: XOR<StaffScalarRelationFilter, staffWhereInput>
  }

  export type booking2OrderByWithRelationInput = {
    id?: SortOrder
    service_id?: SortOrder
    staff_id?: SortOrder
    customer_id?: SortOrder
    booking_date?: SortOrder
    start_min?: SortOrder
    duration_min?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    created_at?: SortOrder
    customer?: customerOrderByWithRelationInput
    service?: serviceOrderByWithRelationInput
    staff?: staffOrderByWithRelationInput
  }

  export type booking2WhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: booking2WhereInput | booking2WhereInput[]
    OR?: booking2WhereInput[]
    NOT?: booking2WhereInput | booking2WhereInput[]
    service_id?: UuidFilter<"booking2"> | string
    staff_id?: UuidFilter<"booking2"> | string
    customer_id?: UuidFilter<"booking2"> | string
    booking_date?: DateTimeFilter<"booking2"> | Date | string
    start_min?: IntFilter<"booking2"> | number
    duration_min?: IntFilter<"booking2"> | number
    status?: Enumbooking_statusFilter<"booking2"> | $Enums.booking_status
    notes?: StringNullableFilter<"booking2"> | string | null
    created_at?: DateTimeFilter<"booking2"> | Date | string
    customer?: XOR<CustomerScalarRelationFilter, customerWhereInput>
    service?: XOR<ServiceScalarRelationFilter, serviceWhereInput>
    staff?: XOR<StaffScalarRelationFilter, staffWhereInput>
  }, "id">

  export type booking2OrderByWithAggregationInput = {
    id?: SortOrder
    service_id?: SortOrder
    staff_id?: SortOrder
    customer_id?: SortOrder
    booking_date?: SortOrder
    start_min?: SortOrder
    duration_min?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: booking2CountOrderByAggregateInput
    _avg?: booking2AvgOrderByAggregateInput
    _max?: booking2MaxOrderByAggregateInput
    _min?: booking2MinOrderByAggregateInput
    _sum?: booking2SumOrderByAggregateInput
  }

  export type booking2ScalarWhereWithAggregatesInput = {
    AND?: booking2ScalarWhereWithAggregatesInput | booking2ScalarWhereWithAggregatesInput[]
    OR?: booking2ScalarWhereWithAggregatesInput[]
    NOT?: booking2ScalarWhereWithAggregatesInput | booking2ScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"booking2"> | string
    service_id?: UuidWithAggregatesFilter<"booking2"> | string
    staff_id?: UuidWithAggregatesFilter<"booking2"> | string
    customer_id?: UuidWithAggregatesFilter<"booking2"> | string
    booking_date?: DateTimeWithAggregatesFilter<"booking2"> | Date | string
    start_min?: IntWithAggregatesFilter<"booking2"> | number
    duration_min?: IntWithAggregatesFilter<"booking2"> | number
    status?: Enumbooking_statusWithAggregatesFilter<"booking2"> | $Enums.booking_status
    notes?: StringNullableWithAggregatesFilter<"booking2"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"booking2"> | Date | string
  }

  export type bookingCreateInput = {
    id?: string
    start_at: Date | string
    end_at: Date | string
    status?: $Enums.booking_status
    notes?: string | null
    created_at?: Date | string
    customer: customerCreateNestedOneWithoutBookingInput
    service: serviceCreateNestedOneWithoutBookingInput
    staff: staffCreateNestedOneWithoutBookingInput
  }

  export type bookingUncheckedCreateInput = {
    id?: string
    service_id: string
    staff_id: string
    customer_id: string
    start_at: Date | string
    end_at: Date | string
    status?: $Enums.booking_status
    notes?: string | null
    created_at?: Date | string
  }

  export type bookingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    start_at?: DateTimeFieldUpdateOperationsInput | Date | string
    end_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumbooking_statusFieldUpdateOperationsInput | $Enums.booking_status
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: customerUpdateOneRequiredWithoutBookingNestedInput
    service?: serviceUpdateOneRequiredWithoutBookingNestedInput
    staff?: staffUpdateOneRequiredWithoutBookingNestedInput
  }

  export type bookingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    service_id?: StringFieldUpdateOperationsInput | string
    staff_id?: StringFieldUpdateOperationsInput | string
    customer_id?: StringFieldUpdateOperationsInput | string
    start_at?: DateTimeFieldUpdateOperationsInput | Date | string
    end_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumbooking_statusFieldUpdateOperationsInput | $Enums.booking_status
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bookingCreateManyInput = {
    id?: string
    service_id: string
    staff_id: string
    customer_id: string
    start_at: Date | string
    end_at: Date | string
    status?: $Enums.booking_status
    notes?: string | null
    created_at?: Date | string
  }

  export type bookingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    start_at?: DateTimeFieldUpdateOperationsInput | Date | string
    end_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumbooking_statusFieldUpdateOperationsInput | $Enums.booking_status
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bookingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    service_id?: StringFieldUpdateOperationsInput | string
    staff_id?: StringFieldUpdateOperationsInput | string
    customer_id?: StringFieldUpdateOperationsInput | string
    start_at?: DateTimeFieldUpdateOperationsInput | Date | string
    end_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumbooking_statusFieldUpdateOperationsInput | $Enums.booking_status
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type customerCreateInput = {
    id?: string
    full_name: string
    phone?: string | null
    email?: string | null
    created_at?: Date | string
    booking?: bookingCreateNestedManyWithoutCustomerInput
    booking2?: booking2CreateNestedManyWithoutCustomerInput
  }

  export type customerUncheckedCreateInput = {
    id?: string
    full_name: string
    phone?: string | null
    email?: string | null
    created_at?: Date | string
    booking?: bookingUncheckedCreateNestedManyWithoutCustomerInput
    booking2?: booking2UncheckedCreateNestedManyWithoutCustomerInput
  }

  export type customerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: bookingUpdateManyWithoutCustomerNestedInput
    booking2?: booking2UpdateManyWithoutCustomerNestedInput
  }

  export type customerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: bookingUncheckedUpdateManyWithoutCustomerNestedInput
    booking2?: booking2UncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type customerCreateManyInput = {
    id?: string
    full_name: string
    phone?: string | null
    email?: string | null
    created_at?: Date | string
  }

  export type customerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type customerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type serviceCreateInput = {
    id?: string
    name: string
    duration_min: number
    price?: Decimal | DecimalJsLike | number | string | null
    is_active?: boolean
    created_at?: Date | string
    description?: string | null
    booking?: bookingCreateNestedManyWithoutServiceInput
    booking2?: booking2CreateNestedManyWithoutServiceInput
  }

  export type serviceUncheckedCreateInput = {
    id?: string
    name: string
    duration_min: number
    price?: Decimal | DecimalJsLike | number | string | null
    is_active?: boolean
    created_at?: Date | string
    description?: string | null
    booking?: bookingUncheckedCreateNestedManyWithoutServiceInput
    booking2?: booking2UncheckedCreateNestedManyWithoutServiceInput
  }

  export type serviceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    duration_min?: IntFieldUpdateOperationsInput | number
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    booking?: bookingUpdateManyWithoutServiceNestedInput
    booking2?: booking2UpdateManyWithoutServiceNestedInput
  }

  export type serviceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    duration_min?: IntFieldUpdateOperationsInput | number
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    booking?: bookingUncheckedUpdateManyWithoutServiceNestedInput
    booking2?: booking2UncheckedUpdateManyWithoutServiceNestedInput
  }

  export type serviceCreateManyInput = {
    id?: string
    name: string
    duration_min: number
    price?: Decimal | DecimalJsLike | number | string | null
    is_active?: boolean
    created_at?: Date | string
    description?: string | null
  }

  export type serviceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    duration_min?: IntFieldUpdateOperationsInput | number
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type serviceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    duration_min?: IntFieldUpdateOperationsInput | number
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type staffCreateInput = {
    id?: string
    name: string
    is_active?: boolean
    booking?: bookingCreateNestedManyWithoutStaffInput
    booking2?: booking2CreateNestedManyWithoutStaffInput
    time_off?: time_offCreateNestedManyWithoutStaffInput
    working_hours?: working_hoursCreateNestedManyWithoutStaffInput
  }

  export type staffUncheckedCreateInput = {
    id?: string
    name: string
    is_active?: boolean
    booking?: bookingUncheckedCreateNestedManyWithoutStaffInput
    booking2?: booking2UncheckedCreateNestedManyWithoutStaffInput
    time_off?: time_offUncheckedCreateNestedManyWithoutStaffInput
    working_hours?: working_hoursUncheckedCreateNestedManyWithoutStaffInput
  }

  export type staffUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    booking?: bookingUpdateManyWithoutStaffNestedInput
    booking2?: booking2UpdateManyWithoutStaffNestedInput
    time_off?: time_offUpdateManyWithoutStaffNestedInput
    working_hours?: working_hoursUpdateManyWithoutStaffNestedInput
  }

  export type staffUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    booking?: bookingUncheckedUpdateManyWithoutStaffNestedInput
    booking2?: booking2UncheckedUpdateManyWithoutStaffNestedInput
    time_off?: time_offUncheckedUpdateManyWithoutStaffNestedInput
    working_hours?: working_hoursUncheckedUpdateManyWithoutStaffNestedInput
  }

  export type staffCreateManyInput = {
    id?: string
    name: string
    is_active?: boolean
  }

  export type staffUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type staffUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type time_offCreateInput = {
    id?: string
    start_at: Date | string
    end_at: Date | string
    reason?: string | null
    staff: staffCreateNestedOneWithoutTime_offInput
  }

  export type time_offUncheckedCreateInput = {
    id?: string
    staff_id: string
    start_at: Date | string
    end_at: Date | string
    reason?: string | null
  }

  export type time_offUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    start_at?: DateTimeFieldUpdateOperationsInput | Date | string
    end_at?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    staff?: staffUpdateOneRequiredWithoutTime_offNestedInput
  }

  export type time_offUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    staff_id?: StringFieldUpdateOperationsInput | string
    start_at?: DateTimeFieldUpdateOperationsInput | Date | string
    end_at?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type time_offCreateManyInput = {
    id?: string
    staff_id: string
    start_at: Date | string
    end_at: Date | string
    reason?: string | null
  }

  export type time_offUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    start_at?: DateTimeFieldUpdateOperationsInput | Date | string
    end_at?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type time_offUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    staff_id?: StringFieldUpdateOperationsInput | string
    start_at?: DateTimeFieldUpdateOperationsInput | Date | string
    end_at?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type working_hoursCreateInput = {
    id?: string
    day_of_week: number
    start_time: Date | string
    end_time: Date | string
    staff: staffCreateNestedOneWithoutWorking_hoursInput
  }

  export type working_hoursUncheckedCreateInput = {
    id?: string
    staff_id: string
    day_of_week: number
    start_time: Date | string
    end_time: Date | string
  }

  export type working_hoursUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    day_of_week?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    staff?: staffUpdateOneRequiredWithoutWorking_hoursNestedInput
  }

  export type working_hoursUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    staff_id?: StringFieldUpdateOperationsInput | string
    day_of_week?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type working_hoursCreateManyInput = {
    id?: string
    staff_id: string
    day_of_week: number
    start_time: Date | string
    end_time: Date | string
  }

  export type working_hoursUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    day_of_week?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type working_hoursUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    staff_id?: StringFieldUpdateOperationsInput | string
    day_of_week?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type booking2CreateInput = {
    id?: string
    booking_date: Date | string
    start_min: number
    duration_min: number
    status?: $Enums.booking_status
    notes?: string | null
    created_at?: Date | string
    customer: customerCreateNestedOneWithoutBooking2Input
    service: serviceCreateNestedOneWithoutBooking2Input
    staff: staffCreateNestedOneWithoutBooking2Input
  }

  export type booking2UncheckedCreateInput = {
    id?: string
    service_id: string
    staff_id: string
    customer_id: string
    booking_date: Date | string
    start_min: number
    duration_min: number
    status?: $Enums.booking_status
    notes?: string | null
    created_at?: Date | string
  }

  export type booking2UpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    booking_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_min?: IntFieldUpdateOperationsInput | number
    duration_min?: IntFieldUpdateOperationsInput | number
    status?: Enumbooking_statusFieldUpdateOperationsInput | $Enums.booking_status
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: customerUpdateOneRequiredWithoutBooking2NestedInput
    service?: serviceUpdateOneRequiredWithoutBooking2NestedInput
    staff?: staffUpdateOneRequiredWithoutBooking2NestedInput
  }

  export type booking2UncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    service_id?: StringFieldUpdateOperationsInput | string
    staff_id?: StringFieldUpdateOperationsInput | string
    customer_id?: StringFieldUpdateOperationsInput | string
    booking_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_min?: IntFieldUpdateOperationsInput | number
    duration_min?: IntFieldUpdateOperationsInput | number
    status?: Enumbooking_statusFieldUpdateOperationsInput | $Enums.booking_status
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type booking2CreateManyInput = {
    id?: string
    service_id: string
    staff_id: string
    customer_id: string
    booking_date: Date | string
    start_min: number
    duration_min: number
    status?: $Enums.booking_status
    notes?: string | null
    created_at?: Date | string
  }

  export type booking2UpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    booking_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_min?: IntFieldUpdateOperationsInput | number
    duration_min?: IntFieldUpdateOperationsInput | number
    status?: Enumbooking_statusFieldUpdateOperationsInput | $Enums.booking_status
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type booking2UncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    service_id?: StringFieldUpdateOperationsInput | string
    staff_id?: StringFieldUpdateOperationsInput | string
    customer_id?: StringFieldUpdateOperationsInput | string
    booking_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_min?: IntFieldUpdateOperationsInput | number
    duration_min?: IntFieldUpdateOperationsInput | number
    status?: Enumbooking_statusFieldUpdateOperationsInput | $Enums.booking_status
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type Enumbooking_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.booking_status | Enumbooking_statusFieldRefInput<$PrismaModel>
    in?: $Enums.booking_status[] | ListEnumbooking_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.booking_status[] | ListEnumbooking_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumbooking_statusFilter<$PrismaModel> | $Enums.booking_status
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type CustomerScalarRelationFilter = {
    is?: customerWhereInput
    isNot?: customerWhereInput
  }

  export type ServiceScalarRelationFilter = {
    is?: serviceWhereInput
    isNot?: serviceWhereInput
  }

  export type StaffScalarRelationFilter = {
    is?: staffWhereInput
    isNot?: staffWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type bookingStaff_idStart_atCompoundUniqueInput = {
    staff_id: string
    start_at: Date | string
  }

  export type bookingCountOrderByAggregateInput = {
    id?: SortOrder
    service_id?: SortOrder
    staff_id?: SortOrder
    customer_id?: SortOrder
    start_at?: SortOrder
    end_at?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    created_at?: SortOrder
  }

  export type bookingMaxOrderByAggregateInput = {
    id?: SortOrder
    service_id?: SortOrder
    staff_id?: SortOrder
    customer_id?: SortOrder
    start_at?: SortOrder
    end_at?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    created_at?: SortOrder
  }

  export type bookingMinOrderByAggregateInput = {
    id?: SortOrder
    service_id?: SortOrder
    staff_id?: SortOrder
    customer_id?: SortOrder
    start_at?: SortOrder
    end_at?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    created_at?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type Enumbooking_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.booking_status | Enumbooking_statusFieldRefInput<$PrismaModel>
    in?: $Enums.booking_status[] | ListEnumbooking_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.booking_status[] | ListEnumbooking_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumbooking_statusWithAggregatesFilter<$PrismaModel> | $Enums.booking_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumbooking_statusFilter<$PrismaModel>
    _max?: NestedEnumbooking_statusFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BookingListRelationFilter = {
    every?: bookingWhereInput
    some?: bookingWhereInput
    none?: bookingWhereInput
  }

  export type Booking2ListRelationFilter = {
    every?: booking2WhereInput
    some?: booking2WhereInput
    none?: booking2WhereInput
  }

  export type bookingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type booking2OrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type customerCountOrderByAggregateInput = {
    id?: SortOrder
    full_name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
  }

  export type customerMaxOrderByAggregateInput = {
    id?: SortOrder
    full_name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
  }

  export type customerMinOrderByAggregateInput = {
    id?: SortOrder
    full_name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type serviceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    duration_min?: SortOrder
    price?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    description?: SortOrder
  }

  export type serviceAvgOrderByAggregateInput = {
    duration_min?: SortOrder
    price?: SortOrder
  }

  export type serviceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    duration_min?: SortOrder
    price?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    description?: SortOrder
  }

  export type serviceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    duration_min?: SortOrder
    price?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    description?: SortOrder
  }

  export type serviceSumOrderByAggregateInput = {
    duration_min?: SortOrder
    price?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type Time_offListRelationFilter = {
    every?: time_offWhereInput
    some?: time_offWhereInput
    none?: time_offWhereInput
  }

  export type Working_hoursListRelationFilter = {
    every?: working_hoursWhereInput
    some?: working_hoursWhereInput
    none?: working_hoursWhereInput
  }

  export type time_offOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type working_hoursOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type staffCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    is_active?: SortOrder
  }

  export type staffMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    is_active?: SortOrder
  }

  export type staffMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    is_active?: SortOrder
  }

  export type time_offCountOrderByAggregateInput = {
    id?: SortOrder
    staff_id?: SortOrder
    start_at?: SortOrder
    end_at?: SortOrder
    reason?: SortOrder
  }

  export type time_offMaxOrderByAggregateInput = {
    id?: SortOrder
    staff_id?: SortOrder
    start_at?: SortOrder
    end_at?: SortOrder
    reason?: SortOrder
  }

  export type time_offMinOrderByAggregateInput = {
    id?: SortOrder
    staff_id?: SortOrder
    start_at?: SortOrder
    end_at?: SortOrder
    reason?: SortOrder
  }

  export type working_hoursStaff_idDay_of_weekStart_timeEnd_timeCompoundUniqueInput = {
    staff_id: string
    day_of_week: number
    start_time: Date | string
    end_time: Date | string
  }

  export type working_hoursCountOrderByAggregateInput = {
    id?: SortOrder
    staff_id?: SortOrder
    day_of_week?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
  }

  export type working_hoursAvgOrderByAggregateInput = {
    day_of_week?: SortOrder
  }

  export type working_hoursMaxOrderByAggregateInput = {
    id?: SortOrder
    staff_id?: SortOrder
    day_of_week?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
  }

  export type working_hoursMinOrderByAggregateInput = {
    id?: SortOrder
    staff_id?: SortOrder
    day_of_week?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
  }

  export type working_hoursSumOrderByAggregateInput = {
    day_of_week?: SortOrder
  }

  export type booking2CountOrderByAggregateInput = {
    id?: SortOrder
    service_id?: SortOrder
    staff_id?: SortOrder
    customer_id?: SortOrder
    booking_date?: SortOrder
    start_min?: SortOrder
    duration_min?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    created_at?: SortOrder
  }

  export type booking2AvgOrderByAggregateInput = {
    start_min?: SortOrder
    duration_min?: SortOrder
  }

  export type booking2MaxOrderByAggregateInput = {
    id?: SortOrder
    service_id?: SortOrder
    staff_id?: SortOrder
    customer_id?: SortOrder
    booking_date?: SortOrder
    start_min?: SortOrder
    duration_min?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    created_at?: SortOrder
  }

  export type booking2MinOrderByAggregateInput = {
    id?: SortOrder
    service_id?: SortOrder
    staff_id?: SortOrder
    customer_id?: SortOrder
    booking_date?: SortOrder
    start_min?: SortOrder
    duration_min?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    created_at?: SortOrder
  }

  export type booking2SumOrderByAggregateInput = {
    start_min?: SortOrder
    duration_min?: SortOrder
  }

  export type customerCreateNestedOneWithoutBookingInput = {
    create?: XOR<customerCreateWithoutBookingInput, customerUncheckedCreateWithoutBookingInput>
    connectOrCreate?: customerCreateOrConnectWithoutBookingInput
    connect?: customerWhereUniqueInput
  }

  export type serviceCreateNestedOneWithoutBookingInput = {
    create?: XOR<serviceCreateWithoutBookingInput, serviceUncheckedCreateWithoutBookingInput>
    connectOrCreate?: serviceCreateOrConnectWithoutBookingInput
    connect?: serviceWhereUniqueInput
  }

  export type staffCreateNestedOneWithoutBookingInput = {
    create?: XOR<staffCreateWithoutBookingInput, staffUncheckedCreateWithoutBookingInput>
    connectOrCreate?: staffCreateOrConnectWithoutBookingInput
    connect?: staffWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type Enumbooking_statusFieldUpdateOperationsInput = {
    set?: $Enums.booking_status
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type customerUpdateOneRequiredWithoutBookingNestedInput = {
    create?: XOR<customerCreateWithoutBookingInput, customerUncheckedCreateWithoutBookingInput>
    connectOrCreate?: customerCreateOrConnectWithoutBookingInput
    upsert?: customerUpsertWithoutBookingInput
    connect?: customerWhereUniqueInput
    update?: XOR<XOR<customerUpdateToOneWithWhereWithoutBookingInput, customerUpdateWithoutBookingInput>, customerUncheckedUpdateWithoutBookingInput>
  }

  export type serviceUpdateOneRequiredWithoutBookingNestedInput = {
    create?: XOR<serviceCreateWithoutBookingInput, serviceUncheckedCreateWithoutBookingInput>
    connectOrCreate?: serviceCreateOrConnectWithoutBookingInput
    upsert?: serviceUpsertWithoutBookingInput
    connect?: serviceWhereUniqueInput
    update?: XOR<XOR<serviceUpdateToOneWithWhereWithoutBookingInput, serviceUpdateWithoutBookingInput>, serviceUncheckedUpdateWithoutBookingInput>
  }

  export type staffUpdateOneRequiredWithoutBookingNestedInput = {
    create?: XOR<staffCreateWithoutBookingInput, staffUncheckedCreateWithoutBookingInput>
    connectOrCreate?: staffCreateOrConnectWithoutBookingInput
    upsert?: staffUpsertWithoutBookingInput
    connect?: staffWhereUniqueInput
    update?: XOR<XOR<staffUpdateToOneWithWhereWithoutBookingInput, staffUpdateWithoutBookingInput>, staffUncheckedUpdateWithoutBookingInput>
  }

  export type bookingCreateNestedManyWithoutCustomerInput = {
    create?: XOR<bookingCreateWithoutCustomerInput, bookingUncheckedCreateWithoutCustomerInput> | bookingCreateWithoutCustomerInput[] | bookingUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: bookingCreateOrConnectWithoutCustomerInput | bookingCreateOrConnectWithoutCustomerInput[]
    createMany?: bookingCreateManyCustomerInputEnvelope
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
  }

  export type booking2CreateNestedManyWithoutCustomerInput = {
    create?: XOR<booking2CreateWithoutCustomerInput, booking2UncheckedCreateWithoutCustomerInput> | booking2CreateWithoutCustomerInput[] | booking2UncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: booking2CreateOrConnectWithoutCustomerInput | booking2CreateOrConnectWithoutCustomerInput[]
    createMany?: booking2CreateManyCustomerInputEnvelope
    connect?: booking2WhereUniqueInput | booking2WhereUniqueInput[]
  }

  export type bookingUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<bookingCreateWithoutCustomerInput, bookingUncheckedCreateWithoutCustomerInput> | bookingCreateWithoutCustomerInput[] | bookingUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: bookingCreateOrConnectWithoutCustomerInput | bookingCreateOrConnectWithoutCustomerInput[]
    createMany?: bookingCreateManyCustomerInputEnvelope
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
  }

  export type booking2UncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<booking2CreateWithoutCustomerInput, booking2UncheckedCreateWithoutCustomerInput> | booking2CreateWithoutCustomerInput[] | booking2UncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: booking2CreateOrConnectWithoutCustomerInput | booking2CreateOrConnectWithoutCustomerInput[]
    createMany?: booking2CreateManyCustomerInputEnvelope
    connect?: booking2WhereUniqueInput | booking2WhereUniqueInput[]
  }

  export type bookingUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<bookingCreateWithoutCustomerInput, bookingUncheckedCreateWithoutCustomerInput> | bookingCreateWithoutCustomerInput[] | bookingUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: bookingCreateOrConnectWithoutCustomerInput | bookingCreateOrConnectWithoutCustomerInput[]
    upsert?: bookingUpsertWithWhereUniqueWithoutCustomerInput | bookingUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: bookingCreateManyCustomerInputEnvelope
    set?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    disconnect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    delete?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    update?: bookingUpdateWithWhereUniqueWithoutCustomerInput | bookingUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: bookingUpdateManyWithWhereWithoutCustomerInput | bookingUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: bookingScalarWhereInput | bookingScalarWhereInput[]
  }

  export type booking2UpdateManyWithoutCustomerNestedInput = {
    create?: XOR<booking2CreateWithoutCustomerInput, booking2UncheckedCreateWithoutCustomerInput> | booking2CreateWithoutCustomerInput[] | booking2UncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: booking2CreateOrConnectWithoutCustomerInput | booking2CreateOrConnectWithoutCustomerInput[]
    upsert?: booking2UpsertWithWhereUniqueWithoutCustomerInput | booking2UpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: booking2CreateManyCustomerInputEnvelope
    set?: booking2WhereUniqueInput | booking2WhereUniqueInput[]
    disconnect?: booking2WhereUniqueInput | booking2WhereUniqueInput[]
    delete?: booking2WhereUniqueInput | booking2WhereUniqueInput[]
    connect?: booking2WhereUniqueInput | booking2WhereUniqueInput[]
    update?: booking2UpdateWithWhereUniqueWithoutCustomerInput | booking2UpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: booking2UpdateManyWithWhereWithoutCustomerInput | booking2UpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: booking2ScalarWhereInput | booking2ScalarWhereInput[]
  }

  export type bookingUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<bookingCreateWithoutCustomerInput, bookingUncheckedCreateWithoutCustomerInput> | bookingCreateWithoutCustomerInput[] | bookingUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: bookingCreateOrConnectWithoutCustomerInput | bookingCreateOrConnectWithoutCustomerInput[]
    upsert?: bookingUpsertWithWhereUniqueWithoutCustomerInput | bookingUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: bookingCreateManyCustomerInputEnvelope
    set?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    disconnect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    delete?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    update?: bookingUpdateWithWhereUniqueWithoutCustomerInput | bookingUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: bookingUpdateManyWithWhereWithoutCustomerInput | bookingUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: bookingScalarWhereInput | bookingScalarWhereInput[]
  }

  export type booking2UncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<booking2CreateWithoutCustomerInput, booking2UncheckedCreateWithoutCustomerInput> | booking2CreateWithoutCustomerInput[] | booking2UncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: booking2CreateOrConnectWithoutCustomerInput | booking2CreateOrConnectWithoutCustomerInput[]
    upsert?: booking2UpsertWithWhereUniqueWithoutCustomerInput | booking2UpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: booking2CreateManyCustomerInputEnvelope
    set?: booking2WhereUniqueInput | booking2WhereUniqueInput[]
    disconnect?: booking2WhereUniqueInput | booking2WhereUniqueInput[]
    delete?: booking2WhereUniqueInput | booking2WhereUniqueInput[]
    connect?: booking2WhereUniqueInput | booking2WhereUniqueInput[]
    update?: booking2UpdateWithWhereUniqueWithoutCustomerInput | booking2UpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: booking2UpdateManyWithWhereWithoutCustomerInput | booking2UpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: booking2ScalarWhereInput | booking2ScalarWhereInput[]
  }

  export type bookingCreateNestedManyWithoutServiceInput = {
    create?: XOR<bookingCreateWithoutServiceInput, bookingUncheckedCreateWithoutServiceInput> | bookingCreateWithoutServiceInput[] | bookingUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: bookingCreateOrConnectWithoutServiceInput | bookingCreateOrConnectWithoutServiceInput[]
    createMany?: bookingCreateManyServiceInputEnvelope
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
  }

  export type booking2CreateNestedManyWithoutServiceInput = {
    create?: XOR<booking2CreateWithoutServiceInput, booking2UncheckedCreateWithoutServiceInput> | booking2CreateWithoutServiceInput[] | booking2UncheckedCreateWithoutServiceInput[]
    connectOrCreate?: booking2CreateOrConnectWithoutServiceInput | booking2CreateOrConnectWithoutServiceInput[]
    createMany?: booking2CreateManyServiceInputEnvelope
    connect?: booking2WhereUniqueInput | booking2WhereUniqueInput[]
  }

  export type bookingUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<bookingCreateWithoutServiceInput, bookingUncheckedCreateWithoutServiceInput> | bookingCreateWithoutServiceInput[] | bookingUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: bookingCreateOrConnectWithoutServiceInput | bookingCreateOrConnectWithoutServiceInput[]
    createMany?: bookingCreateManyServiceInputEnvelope
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
  }

  export type booking2UncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<booking2CreateWithoutServiceInput, booking2UncheckedCreateWithoutServiceInput> | booking2CreateWithoutServiceInput[] | booking2UncheckedCreateWithoutServiceInput[]
    connectOrCreate?: booking2CreateOrConnectWithoutServiceInput | booking2CreateOrConnectWithoutServiceInput[]
    createMany?: booking2CreateManyServiceInputEnvelope
    connect?: booking2WhereUniqueInput | booking2WhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type bookingUpdateManyWithoutServiceNestedInput = {
    create?: XOR<bookingCreateWithoutServiceInput, bookingUncheckedCreateWithoutServiceInput> | bookingCreateWithoutServiceInput[] | bookingUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: bookingCreateOrConnectWithoutServiceInput | bookingCreateOrConnectWithoutServiceInput[]
    upsert?: bookingUpsertWithWhereUniqueWithoutServiceInput | bookingUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: bookingCreateManyServiceInputEnvelope
    set?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    disconnect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    delete?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    update?: bookingUpdateWithWhereUniqueWithoutServiceInput | bookingUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: bookingUpdateManyWithWhereWithoutServiceInput | bookingUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: bookingScalarWhereInput | bookingScalarWhereInput[]
  }

  export type booking2UpdateManyWithoutServiceNestedInput = {
    create?: XOR<booking2CreateWithoutServiceInput, booking2UncheckedCreateWithoutServiceInput> | booking2CreateWithoutServiceInput[] | booking2UncheckedCreateWithoutServiceInput[]
    connectOrCreate?: booking2CreateOrConnectWithoutServiceInput | booking2CreateOrConnectWithoutServiceInput[]
    upsert?: booking2UpsertWithWhereUniqueWithoutServiceInput | booking2UpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: booking2CreateManyServiceInputEnvelope
    set?: booking2WhereUniqueInput | booking2WhereUniqueInput[]
    disconnect?: booking2WhereUniqueInput | booking2WhereUniqueInput[]
    delete?: booking2WhereUniqueInput | booking2WhereUniqueInput[]
    connect?: booking2WhereUniqueInput | booking2WhereUniqueInput[]
    update?: booking2UpdateWithWhereUniqueWithoutServiceInput | booking2UpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: booking2UpdateManyWithWhereWithoutServiceInput | booking2UpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: booking2ScalarWhereInput | booking2ScalarWhereInput[]
  }

  export type bookingUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<bookingCreateWithoutServiceInput, bookingUncheckedCreateWithoutServiceInput> | bookingCreateWithoutServiceInput[] | bookingUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: bookingCreateOrConnectWithoutServiceInput | bookingCreateOrConnectWithoutServiceInput[]
    upsert?: bookingUpsertWithWhereUniqueWithoutServiceInput | bookingUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: bookingCreateManyServiceInputEnvelope
    set?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    disconnect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    delete?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    update?: bookingUpdateWithWhereUniqueWithoutServiceInput | bookingUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: bookingUpdateManyWithWhereWithoutServiceInput | bookingUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: bookingScalarWhereInput | bookingScalarWhereInput[]
  }

  export type booking2UncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<booking2CreateWithoutServiceInput, booking2UncheckedCreateWithoutServiceInput> | booking2CreateWithoutServiceInput[] | booking2UncheckedCreateWithoutServiceInput[]
    connectOrCreate?: booking2CreateOrConnectWithoutServiceInput | booking2CreateOrConnectWithoutServiceInput[]
    upsert?: booking2UpsertWithWhereUniqueWithoutServiceInput | booking2UpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: booking2CreateManyServiceInputEnvelope
    set?: booking2WhereUniqueInput | booking2WhereUniqueInput[]
    disconnect?: booking2WhereUniqueInput | booking2WhereUniqueInput[]
    delete?: booking2WhereUniqueInput | booking2WhereUniqueInput[]
    connect?: booking2WhereUniqueInput | booking2WhereUniqueInput[]
    update?: booking2UpdateWithWhereUniqueWithoutServiceInput | booking2UpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: booking2UpdateManyWithWhereWithoutServiceInput | booking2UpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: booking2ScalarWhereInput | booking2ScalarWhereInput[]
  }

  export type bookingCreateNestedManyWithoutStaffInput = {
    create?: XOR<bookingCreateWithoutStaffInput, bookingUncheckedCreateWithoutStaffInput> | bookingCreateWithoutStaffInput[] | bookingUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: bookingCreateOrConnectWithoutStaffInput | bookingCreateOrConnectWithoutStaffInput[]
    createMany?: bookingCreateManyStaffInputEnvelope
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
  }

  export type booking2CreateNestedManyWithoutStaffInput = {
    create?: XOR<booking2CreateWithoutStaffInput, booking2UncheckedCreateWithoutStaffInput> | booking2CreateWithoutStaffInput[] | booking2UncheckedCreateWithoutStaffInput[]
    connectOrCreate?: booking2CreateOrConnectWithoutStaffInput | booking2CreateOrConnectWithoutStaffInput[]
    createMany?: booking2CreateManyStaffInputEnvelope
    connect?: booking2WhereUniqueInput | booking2WhereUniqueInput[]
  }

  export type time_offCreateNestedManyWithoutStaffInput = {
    create?: XOR<time_offCreateWithoutStaffInput, time_offUncheckedCreateWithoutStaffInput> | time_offCreateWithoutStaffInput[] | time_offUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: time_offCreateOrConnectWithoutStaffInput | time_offCreateOrConnectWithoutStaffInput[]
    createMany?: time_offCreateManyStaffInputEnvelope
    connect?: time_offWhereUniqueInput | time_offWhereUniqueInput[]
  }

  export type working_hoursCreateNestedManyWithoutStaffInput = {
    create?: XOR<working_hoursCreateWithoutStaffInput, working_hoursUncheckedCreateWithoutStaffInput> | working_hoursCreateWithoutStaffInput[] | working_hoursUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: working_hoursCreateOrConnectWithoutStaffInput | working_hoursCreateOrConnectWithoutStaffInput[]
    createMany?: working_hoursCreateManyStaffInputEnvelope
    connect?: working_hoursWhereUniqueInput | working_hoursWhereUniqueInput[]
  }

  export type bookingUncheckedCreateNestedManyWithoutStaffInput = {
    create?: XOR<bookingCreateWithoutStaffInput, bookingUncheckedCreateWithoutStaffInput> | bookingCreateWithoutStaffInput[] | bookingUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: bookingCreateOrConnectWithoutStaffInput | bookingCreateOrConnectWithoutStaffInput[]
    createMany?: bookingCreateManyStaffInputEnvelope
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
  }

  export type booking2UncheckedCreateNestedManyWithoutStaffInput = {
    create?: XOR<booking2CreateWithoutStaffInput, booking2UncheckedCreateWithoutStaffInput> | booking2CreateWithoutStaffInput[] | booking2UncheckedCreateWithoutStaffInput[]
    connectOrCreate?: booking2CreateOrConnectWithoutStaffInput | booking2CreateOrConnectWithoutStaffInput[]
    createMany?: booking2CreateManyStaffInputEnvelope
    connect?: booking2WhereUniqueInput | booking2WhereUniqueInput[]
  }

  export type time_offUncheckedCreateNestedManyWithoutStaffInput = {
    create?: XOR<time_offCreateWithoutStaffInput, time_offUncheckedCreateWithoutStaffInput> | time_offCreateWithoutStaffInput[] | time_offUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: time_offCreateOrConnectWithoutStaffInput | time_offCreateOrConnectWithoutStaffInput[]
    createMany?: time_offCreateManyStaffInputEnvelope
    connect?: time_offWhereUniqueInput | time_offWhereUniqueInput[]
  }

  export type working_hoursUncheckedCreateNestedManyWithoutStaffInput = {
    create?: XOR<working_hoursCreateWithoutStaffInput, working_hoursUncheckedCreateWithoutStaffInput> | working_hoursCreateWithoutStaffInput[] | working_hoursUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: working_hoursCreateOrConnectWithoutStaffInput | working_hoursCreateOrConnectWithoutStaffInput[]
    createMany?: working_hoursCreateManyStaffInputEnvelope
    connect?: working_hoursWhereUniqueInput | working_hoursWhereUniqueInput[]
  }

  export type bookingUpdateManyWithoutStaffNestedInput = {
    create?: XOR<bookingCreateWithoutStaffInput, bookingUncheckedCreateWithoutStaffInput> | bookingCreateWithoutStaffInput[] | bookingUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: bookingCreateOrConnectWithoutStaffInput | bookingCreateOrConnectWithoutStaffInput[]
    upsert?: bookingUpsertWithWhereUniqueWithoutStaffInput | bookingUpsertWithWhereUniqueWithoutStaffInput[]
    createMany?: bookingCreateManyStaffInputEnvelope
    set?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    disconnect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    delete?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    update?: bookingUpdateWithWhereUniqueWithoutStaffInput | bookingUpdateWithWhereUniqueWithoutStaffInput[]
    updateMany?: bookingUpdateManyWithWhereWithoutStaffInput | bookingUpdateManyWithWhereWithoutStaffInput[]
    deleteMany?: bookingScalarWhereInput | bookingScalarWhereInput[]
  }

  export type booking2UpdateManyWithoutStaffNestedInput = {
    create?: XOR<booking2CreateWithoutStaffInput, booking2UncheckedCreateWithoutStaffInput> | booking2CreateWithoutStaffInput[] | booking2UncheckedCreateWithoutStaffInput[]
    connectOrCreate?: booking2CreateOrConnectWithoutStaffInput | booking2CreateOrConnectWithoutStaffInput[]
    upsert?: booking2UpsertWithWhereUniqueWithoutStaffInput | booking2UpsertWithWhereUniqueWithoutStaffInput[]
    createMany?: booking2CreateManyStaffInputEnvelope
    set?: booking2WhereUniqueInput | booking2WhereUniqueInput[]
    disconnect?: booking2WhereUniqueInput | booking2WhereUniqueInput[]
    delete?: booking2WhereUniqueInput | booking2WhereUniqueInput[]
    connect?: booking2WhereUniqueInput | booking2WhereUniqueInput[]
    update?: booking2UpdateWithWhereUniqueWithoutStaffInput | booking2UpdateWithWhereUniqueWithoutStaffInput[]
    updateMany?: booking2UpdateManyWithWhereWithoutStaffInput | booking2UpdateManyWithWhereWithoutStaffInput[]
    deleteMany?: booking2ScalarWhereInput | booking2ScalarWhereInput[]
  }

  export type time_offUpdateManyWithoutStaffNestedInput = {
    create?: XOR<time_offCreateWithoutStaffInput, time_offUncheckedCreateWithoutStaffInput> | time_offCreateWithoutStaffInput[] | time_offUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: time_offCreateOrConnectWithoutStaffInput | time_offCreateOrConnectWithoutStaffInput[]
    upsert?: time_offUpsertWithWhereUniqueWithoutStaffInput | time_offUpsertWithWhereUniqueWithoutStaffInput[]
    createMany?: time_offCreateManyStaffInputEnvelope
    set?: time_offWhereUniqueInput | time_offWhereUniqueInput[]
    disconnect?: time_offWhereUniqueInput | time_offWhereUniqueInput[]
    delete?: time_offWhereUniqueInput | time_offWhereUniqueInput[]
    connect?: time_offWhereUniqueInput | time_offWhereUniqueInput[]
    update?: time_offUpdateWithWhereUniqueWithoutStaffInput | time_offUpdateWithWhereUniqueWithoutStaffInput[]
    updateMany?: time_offUpdateManyWithWhereWithoutStaffInput | time_offUpdateManyWithWhereWithoutStaffInput[]
    deleteMany?: time_offScalarWhereInput | time_offScalarWhereInput[]
  }

  export type working_hoursUpdateManyWithoutStaffNestedInput = {
    create?: XOR<working_hoursCreateWithoutStaffInput, working_hoursUncheckedCreateWithoutStaffInput> | working_hoursCreateWithoutStaffInput[] | working_hoursUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: working_hoursCreateOrConnectWithoutStaffInput | working_hoursCreateOrConnectWithoutStaffInput[]
    upsert?: working_hoursUpsertWithWhereUniqueWithoutStaffInput | working_hoursUpsertWithWhereUniqueWithoutStaffInput[]
    createMany?: working_hoursCreateManyStaffInputEnvelope
    set?: working_hoursWhereUniqueInput | working_hoursWhereUniqueInput[]
    disconnect?: working_hoursWhereUniqueInput | working_hoursWhereUniqueInput[]
    delete?: working_hoursWhereUniqueInput | working_hoursWhereUniqueInput[]
    connect?: working_hoursWhereUniqueInput | working_hoursWhereUniqueInput[]
    update?: working_hoursUpdateWithWhereUniqueWithoutStaffInput | working_hoursUpdateWithWhereUniqueWithoutStaffInput[]
    updateMany?: working_hoursUpdateManyWithWhereWithoutStaffInput | working_hoursUpdateManyWithWhereWithoutStaffInput[]
    deleteMany?: working_hoursScalarWhereInput | working_hoursScalarWhereInput[]
  }

  export type bookingUncheckedUpdateManyWithoutStaffNestedInput = {
    create?: XOR<bookingCreateWithoutStaffInput, bookingUncheckedCreateWithoutStaffInput> | bookingCreateWithoutStaffInput[] | bookingUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: bookingCreateOrConnectWithoutStaffInput | bookingCreateOrConnectWithoutStaffInput[]
    upsert?: bookingUpsertWithWhereUniqueWithoutStaffInput | bookingUpsertWithWhereUniqueWithoutStaffInput[]
    createMany?: bookingCreateManyStaffInputEnvelope
    set?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    disconnect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    delete?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    update?: bookingUpdateWithWhereUniqueWithoutStaffInput | bookingUpdateWithWhereUniqueWithoutStaffInput[]
    updateMany?: bookingUpdateManyWithWhereWithoutStaffInput | bookingUpdateManyWithWhereWithoutStaffInput[]
    deleteMany?: bookingScalarWhereInput | bookingScalarWhereInput[]
  }

  export type booking2UncheckedUpdateManyWithoutStaffNestedInput = {
    create?: XOR<booking2CreateWithoutStaffInput, booking2UncheckedCreateWithoutStaffInput> | booking2CreateWithoutStaffInput[] | booking2UncheckedCreateWithoutStaffInput[]
    connectOrCreate?: booking2CreateOrConnectWithoutStaffInput | booking2CreateOrConnectWithoutStaffInput[]
    upsert?: booking2UpsertWithWhereUniqueWithoutStaffInput | booking2UpsertWithWhereUniqueWithoutStaffInput[]
    createMany?: booking2CreateManyStaffInputEnvelope
    set?: booking2WhereUniqueInput | booking2WhereUniqueInput[]
    disconnect?: booking2WhereUniqueInput | booking2WhereUniqueInput[]
    delete?: booking2WhereUniqueInput | booking2WhereUniqueInput[]
    connect?: booking2WhereUniqueInput | booking2WhereUniqueInput[]
    update?: booking2UpdateWithWhereUniqueWithoutStaffInput | booking2UpdateWithWhereUniqueWithoutStaffInput[]
    updateMany?: booking2UpdateManyWithWhereWithoutStaffInput | booking2UpdateManyWithWhereWithoutStaffInput[]
    deleteMany?: booking2ScalarWhereInput | booking2ScalarWhereInput[]
  }

  export type time_offUncheckedUpdateManyWithoutStaffNestedInput = {
    create?: XOR<time_offCreateWithoutStaffInput, time_offUncheckedCreateWithoutStaffInput> | time_offCreateWithoutStaffInput[] | time_offUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: time_offCreateOrConnectWithoutStaffInput | time_offCreateOrConnectWithoutStaffInput[]
    upsert?: time_offUpsertWithWhereUniqueWithoutStaffInput | time_offUpsertWithWhereUniqueWithoutStaffInput[]
    createMany?: time_offCreateManyStaffInputEnvelope
    set?: time_offWhereUniqueInput | time_offWhereUniqueInput[]
    disconnect?: time_offWhereUniqueInput | time_offWhereUniqueInput[]
    delete?: time_offWhereUniqueInput | time_offWhereUniqueInput[]
    connect?: time_offWhereUniqueInput | time_offWhereUniqueInput[]
    update?: time_offUpdateWithWhereUniqueWithoutStaffInput | time_offUpdateWithWhereUniqueWithoutStaffInput[]
    updateMany?: time_offUpdateManyWithWhereWithoutStaffInput | time_offUpdateManyWithWhereWithoutStaffInput[]
    deleteMany?: time_offScalarWhereInput | time_offScalarWhereInput[]
  }

  export type working_hoursUncheckedUpdateManyWithoutStaffNestedInput = {
    create?: XOR<working_hoursCreateWithoutStaffInput, working_hoursUncheckedCreateWithoutStaffInput> | working_hoursCreateWithoutStaffInput[] | working_hoursUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: working_hoursCreateOrConnectWithoutStaffInput | working_hoursCreateOrConnectWithoutStaffInput[]
    upsert?: working_hoursUpsertWithWhereUniqueWithoutStaffInput | working_hoursUpsertWithWhereUniqueWithoutStaffInput[]
    createMany?: working_hoursCreateManyStaffInputEnvelope
    set?: working_hoursWhereUniqueInput | working_hoursWhereUniqueInput[]
    disconnect?: working_hoursWhereUniqueInput | working_hoursWhereUniqueInput[]
    delete?: working_hoursWhereUniqueInput | working_hoursWhereUniqueInput[]
    connect?: working_hoursWhereUniqueInput | working_hoursWhereUniqueInput[]
    update?: working_hoursUpdateWithWhereUniqueWithoutStaffInput | working_hoursUpdateWithWhereUniqueWithoutStaffInput[]
    updateMany?: working_hoursUpdateManyWithWhereWithoutStaffInput | working_hoursUpdateManyWithWhereWithoutStaffInput[]
    deleteMany?: working_hoursScalarWhereInput | working_hoursScalarWhereInput[]
  }

  export type staffCreateNestedOneWithoutTime_offInput = {
    create?: XOR<staffCreateWithoutTime_offInput, staffUncheckedCreateWithoutTime_offInput>
    connectOrCreate?: staffCreateOrConnectWithoutTime_offInput
    connect?: staffWhereUniqueInput
  }

  export type staffUpdateOneRequiredWithoutTime_offNestedInput = {
    create?: XOR<staffCreateWithoutTime_offInput, staffUncheckedCreateWithoutTime_offInput>
    connectOrCreate?: staffCreateOrConnectWithoutTime_offInput
    upsert?: staffUpsertWithoutTime_offInput
    connect?: staffWhereUniqueInput
    update?: XOR<XOR<staffUpdateToOneWithWhereWithoutTime_offInput, staffUpdateWithoutTime_offInput>, staffUncheckedUpdateWithoutTime_offInput>
  }

  export type staffCreateNestedOneWithoutWorking_hoursInput = {
    create?: XOR<staffCreateWithoutWorking_hoursInput, staffUncheckedCreateWithoutWorking_hoursInput>
    connectOrCreate?: staffCreateOrConnectWithoutWorking_hoursInput
    connect?: staffWhereUniqueInput
  }

  export type staffUpdateOneRequiredWithoutWorking_hoursNestedInput = {
    create?: XOR<staffCreateWithoutWorking_hoursInput, staffUncheckedCreateWithoutWorking_hoursInput>
    connectOrCreate?: staffCreateOrConnectWithoutWorking_hoursInput
    upsert?: staffUpsertWithoutWorking_hoursInput
    connect?: staffWhereUniqueInput
    update?: XOR<XOR<staffUpdateToOneWithWhereWithoutWorking_hoursInput, staffUpdateWithoutWorking_hoursInput>, staffUncheckedUpdateWithoutWorking_hoursInput>
  }

  export type customerCreateNestedOneWithoutBooking2Input = {
    create?: XOR<customerCreateWithoutBooking2Input, customerUncheckedCreateWithoutBooking2Input>
    connectOrCreate?: customerCreateOrConnectWithoutBooking2Input
    connect?: customerWhereUniqueInput
  }

  export type serviceCreateNestedOneWithoutBooking2Input = {
    create?: XOR<serviceCreateWithoutBooking2Input, serviceUncheckedCreateWithoutBooking2Input>
    connectOrCreate?: serviceCreateOrConnectWithoutBooking2Input
    connect?: serviceWhereUniqueInput
  }

  export type staffCreateNestedOneWithoutBooking2Input = {
    create?: XOR<staffCreateWithoutBooking2Input, staffUncheckedCreateWithoutBooking2Input>
    connectOrCreate?: staffCreateOrConnectWithoutBooking2Input
    connect?: staffWhereUniqueInput
  }

  export type customerUpdateOneRequiredWithoutBooking2NestedInput = {
    create?: XOR<customerCreateWithoutBooking2Input, customerUncheckedCreateWithoutBooking2Input>
    connectOrCreate?: customerCreateOrConnectWithoutBooking2Input
    upsert?: customerUpsertWithoutBooking2Input
    connect?: customerWhereUniqueInput
    update?: XOR<XOR<customerUpdateToOneWithWhereWithoutBooking2Input, customerUpdateWithoutBooking2Input>, customerUncheckedUpdateWithoutBooking2Input>
  }

  export type serviceUpdateOneRequiredWithoutBooking2NestedInput = {
    create?: XOR<serviceCreateWithoutBooking2Input, serviceUncheckedCreateWithoutBooking2Input>
    connectOrCreate?: serviceCreateOrConnectWithoutBooking2Input
    upsert?: serviceUpsertWithoutBooking2Input
    connect?: serviceWhereUniqueInput
    update?: XOR<XOR<serviceUpdateToOneWithWhereWithoutBooking2Input, serviceUpdateWithoutBooking2Input>, serviceUncheckedUpdateWithoutBooking2Input>
  }

  export type staffUpdateOneRequiredWithoutBooking2NestedInput = {
    create?: XOR<staffCreateWithoutBooking2Input, staffUncheckedCreateWithoutBooking2Input>
    connectOrCreate?: staffCreateOrConnectWithoutBooking2Input
    upsert?: staffUpsertWithoutBooking2Input
    connect?: staffWhereUniqueInput
    update?: XOR<XOR<staffUpdateToOneWithWhereWithoutBooking2Input, staffUpdateWithoutBooking2Input>, staffUncheckedUpdateWithoutBooking2Input>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumbooking_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.booking_status | Enumbooking_statusFieldRefInput<$PrismaModel>
    in?: $Enums.booking_status[] | ListEnumbooking_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.booking_status[] | ListEnumbooking_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumbooking_statusFilter<$PrismaModel> | $Enums.booking_status
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumbooking_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.booking_status | Enumbooking_statusFieldRefInput<$PrismaModel>
    in?: $Enums.booking_status[] | ListEnumbooking_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.booking_status[] | ListEnumbooking_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumbooking_statusWithAggregatesFilter<$PrismaModel> | $Enums.booking_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumbooking_statusFilter<$PrismaModel>
    _max?: NestedEnumbooking_statusFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type customerCreateWithoutBookingInput = {
    id?: string
    full_name: string
    phone?: string | null
    email?: string | null
    created_at?: Date | string
    booking2?: booking2CreateNestedManyWithoutCustomerInput
  }

  export type customerUncheckedCreateWithoutBookingInput = {
    id?: string
    full_name: string
    phone?: string | null
    email?: string | null
    created_at?: Date | string
    booking2?: booking2UncheckedCreateNestedManyWithoutCustomerInput
  }

  export type customerCreateOrConnectWithoutBookingInput = {
    where: customerWhereUniqueInput
    create: XOR<customerCreateWithoutBookingInput, customerUncheckedCreateWithoutBookingInput>
  }

  export type serviceCreateWithoutBookingInput = {
    id?: string
    name: string
    duration_min: number
    price?: Decimal | DecimalJsLike | number | string | null
    is_active?: boolean
    created_at?: Date | string
    description?: string | null
    booking2?: booking2CreateNestedManyWithoutServiceInput
  }

  export type serviceUncheckedCreateWithoutBookingInput = {
    id?: string
    name: string
    duration_min: number
    price?: Decimal | DecimalJsLike | number | string | null
    is_active?: boolean
    created_at?: Date | string
    description?: string | null
    booking2?: booking2UncheckedCreateNestedManyWithoutServiceInput
  }

  export type serviceCreateOrConnectWithoutBookingInput = {
    where: serviceWhereUniqueInput
    create: XOR<serviceCreateWithoutBookingInput, serviceUncheckedCreateWithoutBookingInput>
  }

  export type staffCreateWithoutBookingInput = {
    id?: string
    name: string
    is_active?: boolean
    booking2?: booking2CreateNestedManyWithoutStaffInput
    time_off?: time_offCreateNestedManyWithoutStaffInput
    working_hours?: working_hoursCreateNestedManyWithoutStaffInput
  }

  export type staffUncheckedCreateWithoutBookingInput = {
    id?: string
    name: string
    is_active?: boolean
    booking2?: booking2UncheckedCreateNestedManyWithoutStaffInput
    time_off?: time_offUncheckedCreateNestedManyWithoutStaffInput
    working_hours?: working_hoursUncheckedCreateNestedManyWithoutStaffInput
  }

  export type staffCreateOrConnectWithoutBookingInput = {
    where: staffWhereUniqueInput
    create: XOR<staffCreateWithoutBookingInput, staffUncheckedCreateWithoutBookingInput>
  }

  export type customerUpsertWithoutBookingInput = {
    update: XOR<customerUpdateWithoutBookingInput, customerUncheckedUpdateWithoutBookingInput>
    create: XOR<customerCreateWithoutBookingInput, customerUncheckedCreateWithoutBookingInput>
    where?: customerWhereInput
  }

  export type customerUpdateToOneWithWhereWithoutBookingInput = {
    where?: customerWhereInput
    data: XOR<customerUpdateWithoutBookingInput, customerUncheckedUpdateWithoutBookingInput>
  }

  export type customerUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    booking2?: booking2UpdateManyWithoutCustomerNestedInput
  }

  export type customerUncheckedUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    booking2?: booking2UncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type serviceUpsertWithoutBookingInput = {
    update: XOR<serviceUpdateWithoutBookingInput, serviceUncheckedUpdateWithoutBookingInput>
    create: XOR<serviceCreateWithoutBookingInput, serviceUncheckedCreateWithoutBookingInput>
    where?: serviceWhereInput
  }

  export type serviceUpdateToOneWithWhereWithoutBookingInput = {
    where?: serviceWhereInput
    data: XOR<serviceUpdateWithoutBookingInput, serviceUncheckedUpdateWithoutBookingInput>
  }

  export type serviceUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    duration_min?: IntFieldUpdateOperationsInput | number
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    booking2?: booking2UpdateManyWithoutServiceNestedInput
  }

  export type serviceUncheckedUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    duration_min?: IntFieldUpdateOperationsInput | number
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    booking2?: booking2UncheckedUpdateManyWithoutServiceNestedInput
  }

  export type staffUpsertWithoutBookingInput = {
    update: XOR<staffUpdateWithoutBookingInput, staffUncheckedUpdateWithoutBookingInput>
    create: XOR<staffCreateWithoutBookingInput, staffUncheckedCreateWithoutBookingInput>
    where?: staffWhereInput
  }

  export type staffUpdateToOneWithWhereWithoutBookingInput = {
    where?: staffWhereInput
    data: XOR<staffUpdateWithoutBookingInput, staffUncheckedUpdateWithoutBookingInput>
  }

  export type staffUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    booking2?: booking2UpdateManyWithoutStaffNestedInput
    time_off?: time_offUpdateManyWithoutStaffNestedInput
    working_hours?: working_hoursUpdateManyWithoutStaffNestedInput
  }

  export type staffUncheckedUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    booking2?: booking2UncheckedUpdateManyWithoutStaffNestedInput
    time_off?: time_offUncheckedUpdateManyWithoutStaffNestedInput
    working_hours?: working_hoursUncheckedUpdateManyWithoutStaffNestedInput
  }

  export type bookingCreateWithoutCustomerInput = {
    id?: string
    start_at: Date | string
    end_at: Date | string
    status?: $Enums.booking_status
    notes?: string | null
    created_at?: Date | string
    service: serviceCreateNestedOneWithoutBookingInput
    staff: staffCreateNestedOneWithoutBookingInput
  }

  export type bookingUncheckedCreateWithoutCustomerInput = {
    id?: string
    service_id: string
    staff_id: string
    start_at: Date | string
    end_at: Date | string
    status?: $Enums.booking_status
    notes?: string | null
    created_at?: Date | string
  }

  export type bookingCreateOrConnectWithoutCustomerInput = {
    where: bookingWhereUniqueInput
    create: XOR<bookingCreateWithoutCustomerInput, bookingUncheckedCreateWithoutCustomerInput>
  }

  export type bookingCreateManyCustomerInputEnvelope = {
    data: bookingCreateManyCustomerInput | bookingCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type booking2CreateWithoutCustomerInput = {
    id?: string
    booking_date: Date | string
    start_min: number
    duration_min: number
    status?: $Enums.booking_status
    notes?: string | null
    created_at?: Date | string
    service: serviceCreateNestedOneWithoutBooking2Input
    staff: staffCreateNestedOneWithoutBooking2Input
  }

  export type booking2UncheckedCreateWithoutCustomerInput = {
    id?: string
    service_id: string
    staff_id: string
    booking_date: Date | string
    start_min: number
    duration_min: number
    status?: $Enums.booking_status
    notes?: string | null
    created_at?: Date | string
  }

  export type booking2CreateOrConnectWithoutCustomerInput = {
    where: booking2WhereUniqueInput
    create: XOR<booking2CreateWithoutCustomerInput, booking2UncheckedCreateWithoutCustomerInput>
  }

  export type booking2CreateManyCustomerInputEnvelope = {
    data: booking2CreateManyCustomerInput | booking2CreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type bookingUpsertWithWhereUniqueWithoutCustomerInput = {
    where: bookingWhereUniqueInput
    update: XOR<bookingUpdateWithoutCustomerInput, bookingUncheckedUpdateWithoutCustomerInput>
    create: XOR<bookingCreateWithoutCustomerInput, bookingUncheckedCreateWithoutCustomerInput>
  }

  export type bookingUpdateWithWhereUniqueWithoutCustomerInput = {
    where: bookingWhereUniqueInput
    data: XOR<bookingUpdateWithoutCustomerInput, bookingUncheckedUpdateWithoutCustomerInput>
  }

  export type bookingUpdateManyWithWhereWithoutCustomerInput = {
    where: bookingScalarWhereInput
    data: XOR<bookingUpdateManyMutationInput, bookingUncheckedUpdateManyWithoutCustomerInput>
  }

  export type bookingScalarWhereInput = {
    AND?: bookingScalarWhereInput | bookingScalarWhereInput[]
    OR?: bookingScalarWhereInput[]
    NOT?: bookingScalarWhereInput | bookingScalarWhereInput[]
    id?: UuidFilter<"booking"> | string
    service_id?: UuidFilter<"booking"> | string
    staff_id?: UuidFilter<"booking"> | string
    customer_id?: UuidFilter<"booking"> | string
    start_at?: DateTimeFilter<"booking"> | Date | string
    end_at?: DateTimeFilter<"booking"> | Date | string
    status?: Enumbooking_statusFilter<"booking"> | $Enums.booking_status
    notes?: StringNullableFilter<"booking"> | string | null
    created_at?: DateTimeFilter<"booking"> | Date | string
  }

  export type booking2UpsertWithWhereUniqueWithoutCustomerInput = {
    where: booking2WhereUniqueInput
    update: XOR<booking2UpdateWithoutCustomerInput, booking2UncheckedUpdateWithoutCustomerInput>
    create: XOR<booking2CreateWithoutCustomerInput, booking2UncheckedCreateWithoutCustomerInput>
  }

  export type booking2UpdateWithWhereUniqueWithoutCustomerInput = {
    where: booking2WhereUniqueInput
    data: XOR<booking2UpdateWithoutCustomerInput, booking2UncheckedUpdateWithoutCustomerInput>
  }

  export type booking2UpdateManyWithWhereWithoutCustomerInput = {
    where: booking2ScalarWhereInput
    data: XOR<booking2UpdateManyMutationInput, booking2UncheckedUpdateManyWithoutCustomerInput>
  }

  export type booking2ScalarWhereInput = {
    AND?: booking2ScalarWhereInput | booking2ScalarWhereInput[]
    OR?: booking2ScalarWhereInput[]
    NOT?: booking2ScalarWhereInput | booking2ScalarWhereInput[]
    id?: UuidFilter<"booking2"> | string
    service_id?: UuidFilter<"booking2"> | string
    staff_id?: UuidFilter<"booking2"> | string
    customer_id?: UuidFilter<"booking2"> | string
    booking_date?: DateTimeFilter<"booking2"> | Date | string
    start_min?: IntFilter<"booking2"> | number
    duration_min?: IntFilter<"booking2"> | number
    status?: Enumbooking_statusFilter<"booking2"> | $Enums.booking_status
    notes?: StringNullableFilter<"booking2"> | string | null
    created_at?: DateTimeFilter<"booking2"> | Date | string
  }

  export type bookingCreateWithoutServiceInput = {
    id?: string
    start_at: Date | string
    end_at: Date | string
    status?: $Enums.booking_status
    notes?: string | null
    created_at?: Date | string
    customer: customerCreateNestedOneWithoutBookingInput
    staff: staffCreateNestedOneWithoutBookingInput
  }

  export type bookingUncheckedCreateWithoutServiceInput = {
    id?: string
    staff_id: string
    customer_id: string
    start_at: Date | string
    end_at: Date | string
    status?: $Enums.booking_status
    notes?: string | null
    created_at?: Date | string
  }

  export type bookingCreateOrConnectWithoutServiceInput = {
    where: bookingWhereUniqueInput
    create: XOR<bookingCreateWithoutServiceInput, bookingUncheckedCreateWithoutServiceInput>
  }

  export type bookingCreateManyServiceInputEnvelope = {
    data: bookingCreateManyServiceInput | bookingCreateManyServiceInput[]
    skipDuplicates?: boolean
  }

  export type booking2CreateWithoutServiceInput = {
    id?: string
    booking_date: Date | string
    start_min: number
    duration_min: number
    status?: $Enums.booking_status
    notes?: string | null
    created_at?: Date | string
    customer: customerCreateNestedOneWithoutBooking2Input
    staff: staffCreateNestedOneWithoutBooking2Input
  }

  export type booking2UncheckedCreateWithoutServiceInput = {
    id?: string
    staff_id: string
    customer_id: string
    booking_date: Date | string
    start_min: number
    duration_min: number
    status?: $Enums.booking_status
    notes?: string | null
    created_at?: Date | string
  }

  export type booking2CreateOrConnectWithoutServiceInput = {
    where: booking2WhereUniqueInput
    create: XOR<booking2CreateWithoutServiceInput, booking2UncheckedCreateWithoutServiceInput>
  }

  export type booking2CreateManyServiceInputEnvelope = {
    data: booking2CreateManyServiceInput | booking2CreateManyServiceInput[]
    skipDuplicates?: boolean
  }

  export type bookingUpsertWithWhereUniqueWithoutServiceInput = {
    where: bookingWhereUniqueInput
    update: XOR<bookingUpdateWithoutServiceInput, bookingUncheckedUpdateWithoutServiceInput>
    create: XOR<bookingCreateWithoutServiceInput, bookingUncheckedCreateWithoutServiceInput>
  }

  export type bookingUpdateWithWhereUniqueWithoutServiceInput = {
    where: bookingWhereUniqueInput
    data: XOR<bookingUpdateWithoutServiceInput, bookingUncheckedUpdateWithoutServiceInput>
  }

  export type bookingUpdateManyWithWhereWithoutServiceInput = {
    where: bookingScalarWhereInput
    data: XOR<bookingUpdateManyMutationInput, bookingUncheckedUpdateManyWithoutServiceInput>
  }

  export type booking2UpsertWithWhereUniqueWithoutServiceInput = {
    where: booking2WhereUniqueInput
    update: XOR<booking2UpdateWithoutServiceInput, booking2UncheckedUpdateWithoutServiceInput>
    create: XOR<booking2CreateWithoutServiceInput, booking2UncheckedCreateWithoutServiceInput>
  }

  export type booking2UpdateWithWhereUniqueWithoutServiceInput = {
    where: booking2WhereUniqueInput
    data: XOR<booking2UpdateWithoutServiceInput, booking2UncheckedUpdateWithoutServiceInput>
  }

  export type booking2UpdateManyWithWhereWithoutServiceInput = {
    where: booking2ScalarWhereInput
    data: XOR<booking2UpdateManyMutationInput, booking2UncheckedUpdateManyWithoutServiceInput>
  }

  export type bookingCreateWithoutStaffInput = {
    id?: string
    start_at: Date | string
    end_at: Date | string
    status?: $Enums.booking_status
    notes?: string | null
    created_at?: Date | string
    customer: customerCreateNestedOneWithoutBookingInput
    service: serviceCreateNestedOneWithoutBookingInput
  }

  export type bookingUncheckedCreateWithoutStaffInput = {
    id?: string
    service_id: string
    customer_id: string
    start_at: Date | string
    end_at: Date | string
    status?: $Enums.booking_status
    notes?: string | null
    created_at?: Date | string
  }

  export type bookingCreateOrConnectWithoutStaffInput = {
    where: bookingWhereUniqueInput
    create: XOR<bookingCreateWithoutStaffInput, bookingUncheckedCreateWithoutStaffInput>
  }

  export type bookingCreateManyStaffInputEnvelope = {
    data: bookingCreateManyStaffInput | bookingCreateManyStaffInput[]
    skipDuplicates?: boolean
  }

  export type booking2CreateWithoutStaffInput = {
    id?: string
    booking_date: Date | string
    start_min: number
    duration_min: number
    status?: $Enums.booking_status
    notes?: string | null
    created_at?: Date | string
    customer: customerCreateNestedOneWithoutBooking2Input
    service: serviceCreateNestedOneWithoutBooking2Input
  }

  export type booking2UncheckedCreateWithoutStaffInput = {
    id?: string
    service_id: string
    customer_id: string
    booking_date: Date | string
    start_min: number
    duration_min: number
    status?: $Enums.booking_status
    notes?: string | null
    created_at?: Date | string
  }

  export type booking2CreateOrConnectWithoutStaffInput = {
    where: booking2WhereUniqueInput
    create: XOR<booking2CreateWithoutStaffInput, booking2UncheckedCreateWithoutStaffInput>
  }

  export type booking2CreateManyStaffInputEnvelope = {
    data: booking2CreateManyStaffInput | booking2CreateManyStaffInput[]
    skipDuplicates?: boolean
  }

  export type time_offCreateWithoutStaffInput = {
    id?: string
    start_at: Date | string
    end_at: Date | string
    reason?: string | null
  }

  export type time_offUncheckedCreateWithoutStaffInput = {
    id?: string
    start_at: Date | string
    end_at: Date | string
    reason?: string | null
  }

  export type time_offCreateOrConnectWithoutStaffInput = {
    where: time_offWhereUniqueInput
    create: XOR<time_offCreateWithoutStaffInput, time_offUncheckedCreateWithoutStaffInput>
  }

  export type time_offCreateManyStaffInputEnvelope = {
    data: time_offCreateManyStaffInput | time_offCreateManyStaffInput[]
    skipDuplicates?: boolean
  }

  export type working_hoursCreateWithoutStaffInput = {
    id?: string
    day_of_week: number
    start_time: Date | string
    end_time: Date | string
  }

  export type working_hoursUncheckedCreateWithoutStaffInput = {
    id?: string
    day_of_week: number
    start_time: Date | string
    end_time: Date | string
  }

  export type working_hoursCreateOrConnectWithoutStaffInput = {
    where: working_hoursWhereUniqueInput
    create: XOR<working_hoursCreateWithoutStaffInput, working_hoursUncheckedCreateWithoutStaffInput>
  }

  export type working_hoursCreateManyStaffInputEnvelope = {
    data: working_hoursCreateManyStaffInput | working_hoursCreateManyStaffInput[]
    skipDuplicates?: boolean
  }

  export type bookingUpsertWithWhereUniqueWithoutStaffInput = {
    where: bookingWhereUniqueInput
    update: XOR<bookingUpdateWithoutStaffInput, bookingUncheckedUpdateWithoutStaffInput>
    create: XOR<bookingCreateWithoutStaffInput, bookingUncheckedCreateWithoutStaffInput>
  }

  export type bookingUpdateWithWhereUniqueWithoutStaffInput = {
    where: bookingWhereUniqueInput
    data: XOR<bookingUpdateWithoutStaffInput, bookingUncheckedUpdateWithoutStaffInput>
  }

  export type bookingUpdateManyWithWhereWithoutStaffInput = {
    where: bookingScalarWhereInput
    data: XOR<bookingUpdateManyMutationInput, bookingUncheckedUpdateManyWithoutStaffInput>
  }

  export type booking2UpsertWithWhereUniqueWithoutStaffInput = {
    where: booking2WhereUniqueInput
    update: XOR<booking2UpdateWithoutStaffInput, booking2UncheckedUpdateWithoutStaffInput>
    create: XOR<booking2CreateWithoutStaffInput, booking2UncheckedCreateWithoutStaffInput>
  }

  export type booking2UpdateWithWhereUniqueWithoutStaffInput = {
    where: booking2WhereUniqueInput
    data: XOR<booking2UpdateWithoutStaffInput, booking2UncheckedUpdateWithoutStaffInput>
  }

  export type booking2UpdateManyWithWhereWithoutStaffInput = {
    where: booking2ScalarWhereInput
    data: XOR<booking2UpdateManyMutationInput, booking2UncheckedUpdateManyWithoutStaffInput>
  }

  export type time_offUpsertWithWhereUniqueWithoutStaffInput = {
    where: time_offWhereUniqueInput
    update: XOR<time_offUpdateWithoutStaffInput, time_offUncheckedUpdateWithoutStaffInput>
    create: XOR<time_offCreateWithoutStaffInput, time_offUncheckedCreateWithoutStaffInput>
  }

  export type time_offUpdateWithWhereUniqueWithoutStaffInput = {
    where: time_offWhereUniqueInput
    data: XOR<time_offUpdateWithoutStaffInput, time_offUncheckedUpdateWithoutStaffInput>
  }

  export type time_offUpdateManyWithWhereWithoutStaffInput = {
    where: time_offScalarWhereInput
    data: XOR<time_offUpdateManyMutationInput, time_offUncheckedUpdateManyWithoutStaffInput>
  }

  export type time_offScalarWhereInput = {
    AND?: time_offScalarWhereInput | time_offScalarWhereInput[]
    OR?: time_offScalarWhereInput[]
    NOT?: time_offScalarWhereInput | time_offScalarWhereInput[]
    id?: UuidFilter<"time_off"> | string
    staff_id?: UuidFilter<"time_off"> | string
    start_at?: DateTimeFilter<"time_off"> | Date | string
    end_at?: DateTimeFilter<"time_off"> | Date | string
    reason?: StringNullableFilter<"time_off"> | string | null
  }

  export type working_hoursUpsertWithWhereUniqueWithoutStaffInput = {
    where: working_hoursWhereUniqueInput
    update: XOR<working_hoursUpdateWithoutStaffInput, working_hoursUncheckedUpdateWithoutStaffInput>
    create: XOR<working_hoursCreateWithoutStaffInput, working_hoursUncheckedCreateWithoutStaffInput>
  }

  export type working_hoursUpdateWithWhereUniqueWithoutStaffInput = {
    where: working_hoursWhereUniqueInput
    data: XOR<working_hoursUpdateWithoutStaffInput, working_hoursUncheckedUpdateWithoutStaffInput>
  }

  export type working_hoursUpdateManyWithWhereWithoutStaffInput = {
    where: working_hoursScalarWhereInput
    data: XOR<working_hoursUpdateManyMutationInput, working_hoursUncheckedUpdateManyWithoutStaffInput>
  }

  export type working_hoursScalarWhereInput = {
    AND?: working_hoursScalarWhereInput | working_hoursScalarWhereInput[]
    OR?: working_hoursScalarWhereInput[]
    NOT?: working_hoursScalarWhereInput | working_hoursScalarWhereInput[]
    id?: UuidFilter<"working_hours"> | string
    staff_id?: UuidFilter<"working_hours"> | string
    day_of_week?: IntFilter<"working_hours"> | number
    start_time?: DateTimeFilter<"working_hours"> | Date | string
    end_time?: DateTimeFilter<"working_hours"> | Date | string
  }

  export type staffCreateWithoutTime_offInput = {
    id?: string
    name: string
    is_active?: boolean
    booking?: bookingCreateNestedManyWithoutStaffInput
    booking2?: booking2CreateNestedManyWithoutStaffInput
    working_hours?: working_hoursCreateNestedManyWithoutStaffInput
  }

  export type staffUncheckedCreateWithoutTime_offInput = {
    id?: string
    name: string
    is_active?: boolean
    booking?: bookingUncheckedCreateNestedManyWithoutStaffInput
    booking2?: booking2UncheckedCreateNestedManyWithoutStaffInput
    working_hours?: working_hoursUncheckedCreateNestedManyWithoutStaffInput
  }

  export type staffCreateOrConnectWithoutTime_offInput = {
    where: staffWhereUniqueInput
    create: XOR<staffCreateWithoutTime_offInput, staffUncheckedCreateWithoutTime_offInput>
  }

  export type staffUpsertWithoutTime_offInput = {
    update: XOR<staffUpdateWithoutTime_offInput, staffUncheckedUpdateWithoutTime_offInput>
    create: XOR<staffCreateWithoutTime_offInput, staffUncheckedCreateWithoutTime_offInput>
    where?: staffWhereInput
  }

  export type staffUpdateToOneWithWhereWithoutTime_offInput = {
    where?: staffWhereInput
    data: XOR<staffUpdateWithoutTime_offInput, staffUncheckedUpdateWithoutTime_offInput>
  }

  export type staffUpdateWithoutTime_offInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    booking?: bookingUpdateManyWithoutStaffNestedInput
    booking2?: booking2UpdateManyWithoutStaffNestedInput
    working_hours?: working_hoursUpdateManyWithoutStaffNestedInput
  }

  export type staffUncheckedUpdateWithoutTime_offInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    booking?: bookingUncheckedUpdateManyWithoutStaffNestedInput
    booking2?: booking2UncheckedUpdateManyWithoutStaffNestedInput
    working_hours?: working_hoursUncheckedUpdateManyWithoutStaffNestedInput
  }

  export type staffCreateWithoutWorking_hoursInput = {
    id?: string
    name: string
    is_active?: boolean
    booking?: bookingCreateNestedManyWithoutStaffInput
    booking2?: booking2CreateNestedManyWithoutStaffInput
    time_off?: time_offCreateNestedManyWithoutStaffInput
  }

  export type staffUncheckedCreateWithoutWorking_hoursInput = {
    id?: string
    name: string
    is_active?: boolean
    booking?: bookingUncheckedCreateNestedManyWithoutStaffInput
    booking2?: booking2UncheckedCreateNestedManyWithoutStaffInput
    time_off?: time_offUncheckedCreateNestedManyWithoutStaffInput
  }

  export type staffCreateOrConnectWithoutWorking_hoursInput = {
    where: staffWhereUniqueInput
    create: XOR<staffCreateWithoutWorking_hoursInput, staffUncheckedCreateWithoutWorking_hoursInput>
  }

  export type staffUpsertWithoutWorking_hoursInput = {
    update: XOR<staffUpdateWithoutWorking_hoursInput, staffUncheckedUpdateWithoutWorking_hoursInput>
    create: XOR<staffCreateWithoutWorking_hoursInput, staffUncheckedCreateWithoutWorking_hoursInput>
    where?: staffWhereInput
  }

  export type staffUpdateToOneWithWhereWithoutWorking_hoursInput = {
    where?: staffWhereInput
    data: XOR<staffUpdateWithoutWorking_hoursInput, staffUncheckedUpdateWithoutWorking_hoursInput>
  }

  export type staffUpdateWithoutWorking_hoursInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    booking?: bookingUpdateManyWithoutStaffNestedInput
    booking2?: booking2UpdateManyWithoutStaffNestedInput
    time_off?: time_offUpdateManyWithoutStaffNestedInput
  }

  export type staffUncheckedUpdateWithoutWorking_hoursInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    booking?: bookingUncheckedUpdateManyWithoutStaffNestedInput
    booking2?: booking2UncheckedUpdateManyWithoutStaffNestedInput
    time_off?: time_offUncheckedUpdateManyWithoutStaffNestedInput
  }

  export type customerCreateWithoutBooking2Input = {
    id?: string
    full_name: string
    phone?: string | null
    email?: string | null
    created_at?: Date | string
    booking?: bookingCreateNestedManyWithoutCustomerInput
  }

  export type customerUncheckedCreateWithoutBooking2Input = {
    id?: string
    full_name: string
    phone?: string | null
    email?: string | null
    created_at?: Date | string
    booking?: bookingUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type customerCreateOrConnectWithoutBooking2Input = {
    where: customerWhereUniqueInput
    create: XOR<customerCreateWithoutBooking2Input, customerUncheckedCreateWithoutBooking2Input>
  }

  export type serviceCreateWithoutBooking2Input = {
    id?: string
    name: string
    duration_min: number
    price?: Decimal | DecimalJsLike | number | string | null
    is_active?: boolean
    created_at?: Date | string
    description?: string | null
    booking?: bookingCreateNestedManyWithoutServiceInput
  }

  export type serviceUncheckedCreateWithoutBooking2Input = {
    id?: string
    name: string
    duration_min: number
    price?: Decimal | DecimalJsLike | number | string | null
    is_active?: boolean
    created_at?: Date | string
    description?: string | null
    booking?: bookingUncheckedCreateNestedManyWithoutServiceInput
  }

  export type serviceCreateOrConnectWithoutBooking2Input = {
    where: serviceWhereUniqueInput
    create: XOR<serviceCreateWithoutBooking2Input, serviceUncheckedCreateWithoutBooking2Input>
  }

  export type staffCreateWithoutBooking2Input = {
    id?: string
    name: string
    is_active?: boolean
    booking?: bookingCreateNestedManyWithoutStaffInput
    time_off?: time_offCreateNestedManyWithoutStaffInput
    working_hours?: working_hoursCreateNestedManyWithoutStaffInput
  }

  export type staffUncheckedCreateWithoutBooking2Input = {
    id?: string
    name: string
    is_active?: boolean
    booking?: bookingUncheckedCreateNestedManyWithoutStaffInput
    time_off?: time_offUncheckedCreateNestedManyWithoutStaffInput
    working_hours?: working_hoursUncheckedCreateNestedManyWithoutStaffInput
  }

  export type staffCreateOrConnectWithoutBooking2Input = {
    where: staffWhereUniqueInput
    create: XOR<staffCreateWithoutBooking2Input, staffUncheckedCreateWithoutBooking2Input>
  }

  export type customerUpsertWithoutBooking2Input = {
    update: XOR<customerUpdateWithoutBooking2Input, customerUncheckedUpdateWithoutBooking2Input>
    create: XOR<customerCreateWithoutBooking2Input, customerUncheckedCreateWithoutBooking2Input>
    where?: customerWhereInput
  }

  export type customerUpdateToOneWithWhereWithoutBooking2Input = {
    where?: customerWhereInput
    data: XOR<customerUpdateWithoutBooking2Input, customerUncheckedUpdateWithoutBooking2Input>
  }

  export type customerUpdateWithoutBooking2Input = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: bookingUpdateManyWithoutCustomerNestedInput
  }

  export type customerUncheckedUpdateWithoutBooking2Input = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: bookingUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type serviceUpsertWithoutBooking2Input = {
    update: XOR<serviceUpdateWithoutBooking2Input, serviceUncheckedUpdateWithoutBooking2Input>
    create: XOR<serviceCreateWithoutBooking2Input, serviceUncheckedCreateWithoutBooking2Input>
    where?: serviceWhereInput
  }

  export type serviceUpdateToOneWithWhereWithoutBooking2Input = {
    where?: serviceWhereInput
    data: XOR<serviceUpdateWithoutBooking2Input, serviceUncheckedUpdateWithoutBooking2Input>
  }

  export type serviceUpdateWithoutBooking2Input = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    duration_min?: IntFieldUpdateOperationsInput | number
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    booking?: bookingUpdateManyWithoutServiceNestedInput
  }

  export type serviceUncheckedUpdateWithoutBooking2Input = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    duration_min?: IntFieldUpdateOperationsInput | number
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    booking?: bookingUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type staffUpsertWithoutBooking2Input = {
    update: XOR<staffUpdateWithoutBooking2Input, staffUncheckedUpdateWithoutBooking2Input>
    create: XOR<staffCreateWithoutBooking2Input, staffUncheckedCreateWithoutBooking2Input>
    where?: staffWhereInput
  }

  export type staffUpdateToOneWithWhereWithoutBooking2Input = {
    where?: staffWhereInput
    data: XOR<staffUpdateWithoutBooking2Input, staffUncheckedUpdateWithoutBooking2Input>
  }

  export type staffUpdateWithoutBooking2Input = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    booking?: bookingUpdateManyWithoutStaffNestedInput
    time_off?: time_offUpdateManyWithoutStaffNestedInput
    working_hours?: working_hoursUpdateManyWithoutStaffNestedInput
  }

  export type staffUncheckedUpdateWithoutBooking2Input = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    booking?: bookingUncheckedUpdateManyWithoutStaffNestedInput
    time_off?: time_offUncheckedUpdateManyWithoutStaffNestedInput
    working_hours?: working_hoursUncheckedUpdateManyWithoutStaffNestedInput
  }

  export type bookingCreateManyCustomerInput = {
    id?: string
    service_id: string
    staff_id: string
    start_at: Date | string
    end_at: Date | string
    status?: $Enums.booking_status
    notes?: string | null
    created_at?: Date | string
  }

  export type booking2CreateManyCustomerInput = {
    id?: string
    service_id: string
    staff_id: string
    booking_date: Date | string
    start_min: number
    duration_min: number
    status?: $Enums.booking_status
    notes?: string | null
    created_at?: Date | string
  }

  export type bookingUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    start_at?: DateTimeFieldUpdateOperationsInput | Date | string
    end_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumbooking_statusFieldUpdateOperationsInput | $Enums.booking_status
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    service?: serviceUpdateOneRequiredWithoutBookingNestedInput
    staff?: staffUpdateOneRequiredWithoutBookingNestedInput
  }

  export type bookingUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    service_id?: StringFieldUpdateOperationsInput | string
    staff_id?: StringFieldUpdateOperationsInput | string
    start_at?: DateTimeFieldUpdateOperationsInput | Date | string
    end_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumbooking_statusFieldUpdateOperationsInput | $Enums.booking_status
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bookingUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    service_id?: StringFieldUpdateOperationsInput | string
    staff_id?: StringFieldUpdateOperationsInput | string
    start_at?: DateTimeFieldUpdateOperationsInput | Date | string
    end_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumbooking_statusFieldUpdateOperationsInput | $Enums.booking_status
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type booking2UpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    booking_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_min?: IntFieldUpdateOperationsInput | number
    duration_min?: IntFieldUpdateOperationsInput | number
    status?: Enumbooking_statusFieldUpdateOperationsInput | $Enums.booking_status
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    service?: serviceUpdateOneRequiredWithoutBooking2NestedInput
    staff?: staffUpdateOneRequiredWithoutBooking2NestedInput
  }

  export type booking2UncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    service_id?: StringFieldUpdateOperationsInput | string
    staff_id?: StringFieldUpdateOperationsInput | string
    booking_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_min?: IntFieldUpdateOperationsInput | number
    duration_min?: IntFieldUpdateOperationsInput | number
    status?: Enumbooking_statusFieldUpdateOperationsInput | $Enums.booking_status
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type booking2UncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    service_id?: StringFieldUpdateOperationsInput | string
    staff_id?: StringFieldUpdateOperationsInput | string
    booking_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_min?: IntFieldUpdateOperationsInput | number
    duration_min?: IntFieldUpdateOperationsInput | number
    status?: Enumbooking_statusFieldUpdateOperationsInput | $Enums.booking_status
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bookingCreateManyServiceInput = {
    id?: string
    staff_id: string
    customer_id: string
    start_at: Date | string
    end_at: Date | string
    status?: $Enums.booking_status
    notes?: string | null
    created_at?: Date | string
  }

  export type booking2CreateManyServiceInput = {
    id?: string
    staff_id: string
    customer_id: string
    booking_date: Date | string
    start_min: number
    duration_min: number
    status?: $Enums.booking_status
    notes?: string | null
    created_at?: Date | string
  }

  export type bookingUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    start_at?: DateTimeFieldUpdateOperationsInput | Date | string
    end_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumbooking_statusFieldUpdateOperationsInput | $Enums.booking_status
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: customerUpdateOneRequiredWithoutBookingNestedInput
    staff?: staffUpdateOneRequiredWithoutBookingNestedInput
  }

  export type bookingUncheckedUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    staff_id?: StringFieldUpdateOperationsInput | string
    customer_id?: StringFieldUpdateOperationsInput | string
    start_at?: DateTimeFieldUpdateOperationsInput | Date | string
    end_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumbooking_statusFieldUpdateOperationsInput | $Enums.booking_status
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bookingUncheckedUpdateManyWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    staff_id?: StringFieldUpdateOperationsInput | string
    customer_id?: StringFieldUpdateOperationsInput | string
    start_at?: DateTimeFieldUpdateOperationsInput | Date | string
    end_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumbooking_statusFieldUpdateOperationsInput | $Enums.booking_status
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type booking2UpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    booking_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_min?: IntFieldUpdateOperationsInput | number
    duration_min?: IntFieldUpdateOperationsInput | number
    status?: Enumbooking_statusFieldUpdateOperationsInput | $Enums.booking_status
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: customerUpdateOneRequiredWithoutBooking2NestedInput
    staff?: staffUpdateOneRequiredWithoutBooking2NestedInput
  }

  export type booking2UncheckedUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    staff_id?: StringFieldUpdateOperationsInput | string
    customer_id?: StringFieldUpdateOperationsInput | string
    booking_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_min?: IntFieldUpdateOperationsInput | number
    duration_min?: IntFieldUpdateOperationsInput | number
    status?: Enumbooking_statusFieldUpdateOperationsInput | $Enums.booking_status
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type booking2UncheckedUpdateManyWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    staff_id?: StringFieldUpdateOperationsInput | string
    customer_id?: StringFieldUpdateOperationsInput | string
    booking_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_min?: IntFieldUpdateOperationsInput | number
    duration_min?: IntFieldUpdateOperationsInput | number
    status?: Enumbooking_statusFieldUpdateOperationsInput | $Enums.booking_status
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bookingCreateManyStaffInput = {
    id?: string
    service_id: string
    customer_id: string
    start_at: Date | string
    end_at: Date | string
    status?: $Enums.booking_status
    notes?: string | null
    created_at?: Date | string
  }

  export type booking2CreateManyStaffInput = {
    id?: string
    service_id: string
    customer_id: string
    booking_date: Date | string
    start_min: number
    duration_min: number
    status?: $Enums.booking_status
    notes?: string | null
    created_at?: Date | string
  }

  export type time_offCreateManyStaffInput = {
    id?: string
    start_at: Date | string
    end_at: Date | string
    reason?: string | null
  }

  export type working_hoursCreateManyStaffInput = {
    id?: string
    day_of_week: number
    start_time: Date | string
    end_time: Date | string
  }

  export type bookingUpdateWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    start_at?: DateTimeFieldUpdateOperationsInput | Date | string
    end_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumbooking_statusFieldUpdateOperationsInput | $Enums.booking_status
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: customerUpdateOneRequiredWithoutBookingNestedInput
    service?: serviceUpdateOneRequiredWithoutBookingNestedInput
  }

  export type bookingUncheckedUpdateWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    service_id?: StringFieldUpdateOperationsInput | string
    customer_id?: StringFieldUpdateOperationsInput | string
    start_at?: DateTimeFieldUpdateOperationsInput | Date | string
    end_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumbooking_statusFieldUpdateOperationsInput | $Enums.booking_status
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bookingUncheckedUpdateManyWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    service_id?: StringFieldUpdateOperationsInput | string
    customer_id?: StringFieldUpdateOperationsInput | string
    start_at?: DateTimeFieldUpdateOperationsInput | Date | string
    end_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumbooking_statusFieldUpdateOperationsInput | $Enums.booking_status
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type booking2UpdateWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    booking_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_min?: IntFieldUpdateOperationsInput | number
    duration_min?: IntFieldUpdateOperationsInput | number
    status?: Enumbooking_statusFieldUpdateOperationsInput | $Enums.booking_status
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: customerUpdateOneRequiredWithoutBooking2NestedInput
    service?: serviceUpdateOneRequiredWithoutBooking2NestedInput
  }

  export type booking2UncheckedUpdateWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    service_id?: StringFieldUpdateOperationsInput | string
    customer_id?: StringFieldUpdateOperationsInput | string
    booking_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_min?: IntFieldUpdateOperationsInput | number
    duration_min?: IntFieldUpdateOperationsInput | number
    status?: Enumbooking_statusFieldUpdateOperationsInput | $Enums.booking_status
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type booking2UncheckedUpdateManyWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    service_id?: StringFieldUpdateOperationsInput | string
    customer_id?: StringFieldUpdateOperationsInput | string
    booking_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_min?: IntFieldUpdateOperationsInput | number
    duration_min?: IntFieldUpdateOperationsInput | number
    status?: Enumbooking_statusFieldUpdateOperationsInput | $Enums.booking_status
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type time_offUpdateWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    start_at?: DateTimeFieldUpdateOperationsInput | Date | string
    end_at?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type time_offUncheckedUpdateWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    start_at?: DateTimeFieldUpdateOperationsInput | Date | string
    end_at?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type time_offUncheckedUpdateManyWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    start_at?: DateTimeFieldUpdateOperationsInput | Date | string
    end_at?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type working_hoursUpdateWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    day_of_week?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type working_hoursUncheckedUpdateWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    day_of_week?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type working_hoursUncheckedUpdateManyWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    day_of_week?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}