
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Cron
 * 
 */
export type Cron = {
  id: number
  name: string
  cronExpression: string | null
  requestMethod: RequestMethod
  requestUrl: string
  requestPayload: string | null
  isActive: boolean | null
  createdAt: Date | null
  updatedAt: Date | null
  deletedAt: Date | null
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const RequestMethod: {
  POST: 'POST',
  GET: 'GET'
};

export type RequestMethod = (typeof RequestMethod)[keyof typeof RequestMethod]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Crons
 * const crons = await prisma.cron.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Crons
   * const crons = await prisma.cron.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

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
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;

      /**
   * `prisma.cron`: Exposes CRUD operations for the **Cron** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Crons
    * const crons = await prisma.cron.findMany()
    * ```
    */
  get cron(): Prisma.CronDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

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
   * Metrics 
   */
  export import Metrics = runtime.Metrics
  export import Metric = runtime.Metric
  export import MetricHistogram = runtime.MetricHistogram
  export import MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
   * Prisma Client JS version: 4.2.1
   * Query Engine version: 2920a97877e12e055c1333079b8d19cee7f33826
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

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
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

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
  : T extends Buffer
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

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    Cron: 'Cron'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed in to the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Cron
   */


  export type AggregateCron = {
    _count: CronCountAggregateOutputType | null
    _avg: CronAvgAggregateOutputType | null
    _sum: CronSumAggregateOutputType | null
    _min: CronMinAggregateOutputType | null
    _max: CronMaxAggregateOutputType | null
  }

  export type CronAvgAggregateOutputType = {
    id: number | null
  }

  export type CronSumAggregateOutputType = {
    id: number | null
  }

  export type CronMinAggregateOutputType = {
    id: number | null
    name: string | null
    cronExpression: string | null
    requestMethod: RequestMethod | null
    requestUrl: string | null
    requestPayload: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type CronMaxAggregateOutputType = {
    id: number | null
    name: string | null
    cronExpression: string | null
    requestMethod: RequestMethod | null
    requestUrl: string | null
    requestPayload: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type CronCountAggregateOutputType = {
    id: number
    name: number
    cronExpression: number
    requestMethod: number
    requestUrl: number
    requestPayload: number
    isActive: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type CronAvgAggregateInputType = {
    id?: true
  }

  export type CronSumAggregateInputType = {
    id?: true
  }

  export type CronMinAggregateInputType = {
    id?: true
    name?: true
    cronExpression?: true
    requestMethod?: true
    requestUrl?: true
    requestPayload?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type CronMaxAggregateInputType = {
    id?: true
    name?: true
    cronExpression?: true
    requestMethod?: true
    requestUrl?: true
    requestPayload?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type CronCountAggregateInputType = {
    id?: true
    name?: true
    cronExpression?: true
    requestMethod?: true
    requestUrl?: true
    requestPayload?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type CronAggregateArgs = {
    /**
     * Filter which Cron to aggregate.
     * 
    **/
    where?: CronWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Crons to fetch.
     * 
    **/
    orderBy?: Enumerable<CronOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: CronWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Crons from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Crons.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Crons
    **/
    _count?: true | CronCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CronAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CronSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CronMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CronMaxAggregateInputType
  }

  export type GetCronAggregateType<T extends CronAggregateArgs> = {
        [P in keyof T & keyof AggregateCron]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCron[P]>
      : GetScalarType<T[P], AggregateCron[P]>
  }




  export type CronGroupByArgs = {
    where?: CronWhereInput
    orderBy?: Enumerable<CronOrderByWithAggregationInput>
    by: Array<CronScalarFieldEnum>
    having?: CronScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CronCountAggregateInputType | true
    _avg?: CronAvgAggregateInputType
    _sum?: CronSumAggregateInputType
    _min?: CronMinAggregateInputType
    _max?: CronMaxAggregateInputType
  }


  export type CronGroupByOutputType = {
    id: number
    name: string
    cronExpression: string | null
    requestMethod: RequestMethod
    requestUrl: string
    requestPayload: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    _count: CronCountAggregateOutputType | null
    _avg: CronAvgAggregateOutputType | null
    _sum: CronSumAggregateOutputType | null
    _min: CronMinAggregateOutputType | null
    _max: CronMaxAggregateOutputType | null
  }

  type GetCronGroupByPayload<T extends CronGroupByArgs> = PrismaPromise<
    Array<
      PickArray<CronGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CronGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CronGroupByOutputType[P]>
            : GetScalarType<T[P], CronGroupByOutputType[P]>
        }
      >
    >


  export type CronSelect = {
    id?: boolean
    name?: boolean
    cronExpression?: boolean
    requestMethod?: boolean
    requestUrl?: boolean
    requestPayload?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type CronGetPayload<
    S extends boolean | null | undefined | CronArgs,
    U = keyof S
      > = S extends true
        ? Cron
    : S extends undefined
    ? never
    : S extends CronArgs | CronFindManyArgs
    ?'include' extends U
    ? Cron 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof Cron ? Cron[P] : never
  } 
    : Cron
  : Cron


  type CronCountArgs = Merge<
    Omit<CronFindManyArgs, 'select' | 'include'> & {
      select?: CronCountAggregateInputType | true
    }
  >

  export interface CronDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Cron that matches the filter.
     * @param {CronFindUniqueArgs} args - Arguments to find a Cron
     * @example
     * // Get one Cron
     * const cron = await prisma.cron.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CronFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CronFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Cron'> extends True ? CheckSelect<T, Prisma__CronClient<Cron>, Prisma__CronClient<CronGetPayload<T>>> : CheckSelect<T, Prisma__CronClient<Cron | null >, Prisma__CronClient<CronGetPayload<T> | null >>

    /**
     * Find the first Cron that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CronFindFirstArgs} args - Arguments to find a Cron
     * @example
     * // Get one Cron
     * const cron = await prisma.cron.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CronFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CronFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Cron'> extends True ? CheckSelect<T, Prisma__CronClient<Cron>, Prisma__CronClient<CronGetPayload<T>>> : CheckSelect<T, Prisma__CronClient<Cron | null >, Prisma__CronClient<CronGetPayload<T> | null >>

    /**
     * Find zero or more Crons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CronFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Crons
     * const crons = await prisma.cron.findMany()
     * 
     * // Get first 10 Crons
     * const crons = await prisma.cron.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cronWithIdOnly = await prisma.cron.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CronFindManyArgs>(
      args?: SelectSubset<T, CronFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Cron>>, PrismaPromise<Array<CronGetPayload<T>>>>

    /**
     * Create a Cron.
     * @param {CronCreateArgs} args - Arguments to create a Cron.
     * @example
     * // Create one Cron
     * const Cron = await prisma.cron.create({
     *   data: {
     *     // ... data to create a Cron
     *   }
     * })
     * 
    **/
    create<T extends CronCreateArgs>(
      args: SelectSubset<T, CronCreateArgs>
    ): CheckSelect<T, Prisma__CronClient<Cron>, Prisma__CronClient<CronGetPayload<T>>>

    /**
     * Create many Crons.
     *     @param {CronCreateManyArgs} args - Arguments to create many Crons.
     *     @example
     *     // Create many Crons
     *     const cron = await prisma.cron.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CronCreateManyArgs>(
      args?: SelectSubset<T, CronCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Cron.
     * @param {CronDeleteArgs} args - Arguments to delete one Cron.
     * @example
     * // Delete one Cron
     * const Cron = await prisma.cron.delete({
     *   where: {
     *     // ... filter to delete one Cron
     *   }
     * })
     * 
    **/
    delete<T extends CronDeleteArgs>(
      args: SelectSubset<T, CronDeleteArgs>
    ): CheckSelect<T, Prisma__CronClient<Cron>, Prisma__CronClient<CronGetPayload<T>>>

    /**
     * Update one Cron.
     * @param {CronUpdateArgs} args - Arguments to update one Cron.
     * @example
     * // Update one Cron
     * const cron = await prisma.cron.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CronUpdateArgs>(
      args: SelectSubset<T, CronUpdateArgs>
    ): CheckSelect<T, Prisma__CronClient<Cron>, Prisma__CronClient<CronGetPayload<T>>>

    /**
     * Delete zero or more Crons.
     * @param {CronDeleteManyArgs} args - Arguments to filter Crons to delete.
     * @example
     * // Delete a few Crons
     * const { count } = await prisma.cron.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CronDeleteManyArgs>(
      args?: SelectSubset<T, CronDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Crons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CronUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Crons
     * const cron = await prisma.cron.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CronUpdateManyArgs>(
      args: SelectSubset<T, CronUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Cron.
     * @param {CronUpsertArgs} args - Arguments to update or create a Cron.
     * @example
     * // Update or create a Cron
     * const cron = await prisma.cron.upsert({
     *   create: {
     *     // ... data to create a Cron
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cron we want to update
     *   }
     * })
    **/
    upsert<T extends CronUpsertArgs>(
      args: SelectSubset<T, CronUpsertArgs>
    ): CheckSelect<T, Prisma__CronClient<Cron>, Prisma__CronClient<CronGetPayload<T>>>

    /**
     * Find one Cron that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {CronFindUniqueOrThrowArgs} args - Arguments to find a Cron
     * @example
     * // Get one Cron
     * const cron = await prisma.cron.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CronFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CronFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__CronClient<Cron>, Prisma__CronClient<CronGetPayload<T>>>

    /**
     * Find the first Cron that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CronFindFirstOrThrowArgs} args - Arguments to find a Cron
     * @example
     * // Get one Cron
     * const cron = await prisma.cron.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CronFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CronFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__CronClient<Cron>, Prisma__CronClient<CronGetPayload<T>>>

    /**
     * Count the number of Crons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CronCountArgs} args - Arguments to filter Crons to count.
     * @example
     * // Count the number of Crons
     * const count = await prisma.cron.count({
     *   where: {
     *     // ... the filter for the Crons we want to count
     *   }
     * })
    **/
    count<T extends CronCountArgs>(
      args?: Subset<T, CronCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CronCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cron.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CronAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CronAggregateArgs>(args: Subset<T, CronAggregateArgs>): PrismaPromise<GetCronAggregateType<T>>

    /**
     * Group by Cron.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CronGroupByArgs} args - Group by arguments.
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
      T extends CronGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CronGroupByArgs['orderBy'] }
        : { orderBy?: CronGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, CronGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCronGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cron.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CronClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Cron base type for findUnique actions
   */
  export type CronFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Cron
     * 
    **/
    select?: CronSelect | null
    /**
     * Filter, which Cron to fetch.
     * 
    **/
    where: CronWhereUniqueInput
  }

  /**
   * Cron: findUnique
   */
  export interface CronFindUniqueArgs extends CronFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Cron base type for findFirst actions
   */
  export type CronFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Cron
     * 
    **/
    select?: CronSelect | null
    /**
     * Filter, which Cron to fetch.
     * 
    **/
    where?: CronWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Crons to fetch.
     * 
    **/
    orderBy?: Enumerable<CronOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Crons.
     * 
    **/
    cursor?: CronWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Crons from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Crons.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Crons.
     * 
    **/
    distinct?: Enumerable<CronScalarFieldEnum>
  }

  /**
   * Cron: findFirst
   */
  export interface CronFindFirstArgs extends CronFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Cron findMany
   */
  export type CronFindManyArgs = {
    /**
     * Select specific fields to fetch from the Cron
     * 
    **/
    select?: CronSelect | null
    /**
     * Filter, which Crons to fetch.
     * 
    **/
    where?: CronWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Crons to fetch.
     * 
    **/
    orderBy?: Enumerable<CronOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Crons.
     * 
    **/
    cursor?: CronWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Crons from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Crons.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CronScalarFieldEnum>
  }


  /**
   * Cron create
   */
  export type CronCreateArgs = {
    /**
     * Select specific fields to fetch from the Cron
     * 
    **/
    select?: CronSelect | null
    /**
     * The data needed to create a Cron.
     * 
    **/
    data: XOR<CronCreateInput, CronUncheckedCreateInput>
  }


  /**
   * Cron createMany
   */
  export type CronCreateManyArgs = {
    /**
     * The data used to create many Crons.
     * 
    **/
    data: Enumerable<CronCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Cron update
   */
  export type CronUpdateArgs = {
    /**
     * Select specific fields to fetch from the Cron
     * 
    **/
    select?: CronSelect | null
    /**
     * The data needed to update a Cron.
     * 
    **/
    data: XOR<CronUpdateInput, CronUncheckedUpdateInput>
    /**
     * Choose, which Cron to update.
     * 
    **/
    where: CronWhereUniqueInput
  }


  /**
   * Cron updateMany
   */
  export type CronUpdateManyArgs = {
    /**
     * The data used to update Crons.
     * 
    **/
    data: XOR<CronUpdateManyMutationInput, CronUncheckedUpdateManyInput>
    /**
     * Filter which Crons to update
     * 
    **/
    where?: CronWhereInput
  }


  /**
   * Cron upsert
   */
  export type CronUpsertArgs = {
    /**
     * Select specific fields to fetch from the Cron
     * 
    **/
    select?: CronSelect | null
    /**
     * The filter to search for the Cron to update in case it exists.
     * 
    **/
    where: CronWhereUniqueInput
    /**
     * In case the Cron found by the `where` argument doesn't exist, create a new Cron with this data.
     * 
    **/
    create: XOR<CronCreateInput, CronUncheckedCreateInput>
    /**
     * In case the Cron was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<CronUpdateInput, CronUncheckedUpdateInput>
  }


  /**
   * Cron delete
   */
  export type CronDeleteArgs = {
    /**
     * Select specific fields to fetch from the Cron
     * 
    **/
    select?: CronSelect | null
    /**
     * Filter which Cron to delete.
     * 
    **/
    where: CronWhereUniqueInput
  }


  /**
   * Cron deleteMany
   */
  export type CronDeleteManyArgs = {
    /**
     * Filter which Crons to delete
     * 
    **/
    where?: CronWhereInput
  }


  /**
   * Cron: findUniqueOrThrow
   */
  export type CronFindUniqueOrThrowArgs = CronFindUniqueArgsBase
      

  /**
   * Cron: findFirstOrThrow
   */
  export type CronFindFirstOrThrowArgs = CronFindFirstArgsBase
      

  /**
   * Cron without action
   */
  export type CronArgs = {
    /**
     * Select specific fields to fetch from the Cron
     * 
    **/
    select?: CronSelect | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const CronScalarFieldEnum: {
    id: 'id',
    name: 'name',
    cronExpression: 'cronExpression',
    requestMethod: 'requestMethod',
    requestUrl: 'requestUrl',
    requestPayload: 'requestPayload',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type CronScalarFieldEnum = (typeof CronScalarFieldEnum)[keyof typeof CronScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  /**
   * Deep Input Types
   */


  export type CronWhereInput = {
    AND?: Enumerable<CronWhereInput>
    OR?: Enumerable<CronWhereInput>
    NOT?: Enumerable<CronWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    cronExpression?: StringNullableFilter | string | null
    requestMethod?: EnumRequestMethodFilter | RequestMethod
    requestUrl?: StringFilter | string
    requestPayload?: StringNullableFilter | string | null
    isActive?: BoolNullableFilter | boolean | null
    createdAt?: DateTimeNullableFilter | Date | string | null
    updatedAt?: DateTimeNullableFilter | Date | string | null
    deletedAt?: DateTimeNullableFilter | Date | string | null
  }

  export type CronOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    cronExpression?: SortOrder
    requestMethod?: SortOrder
    requestUrl?: SortOrder
    requestPayload?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type CronWhereUniqueInput = {
    id?: number
  }

  export type CronOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    cronExpression?: SortOrder
    requestMethod?: SortOrder
    requestUrl?: SortOrder
    requestPayload?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    _count?: CronCountOrderByAggregateInput
    _avg?: CronAvgOrderByAggregateInput
    _max?: CronMaxOrderByAggregateInput
    _min?: CronMinOrderByAggregateInput
    _sum?: CronSumOrderByAggregateInput
  }

  export type CronScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CronScalarWhereWithAggregatesInput>
    OR?: Enumerable<CronScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CronScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    cronExpression?: StringNullableWithAggregatesFilter | string | null
    requestMethod?: EnumRequestMethodWithAggregatesFilter | RequestMethod
    requestUrl?: StringWithAggregatesFilter | string
    requestPayload?: StringNullableWithAggregatesFilter | string | null
    isActive?: BoolNullableWithAggregatesFilter | boolean | null
    createdAt?: DateTimeNullableWithAggregatesFilter | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter | Date | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type CronCreateInput = {
    name: string
    cronExpression?: string | null
    requestMethod?: RequestMethod
    requestUrl: string
    requestPayload?: string | null
    isActive?: boolean | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type CronUncheckedCreateInput = {
    id?: number
    name: string
    cronExpression?: string | null
    requestMethod?: RequestMethod
    requestUrl: string
    requestPayload?: string | null
    isActive?: boolean | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type CronUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    cronExpression?: NullableStringFieldUpdateOperationsInput | string | null
    requestMethod?: EnumRequestMethodFieldUpdateOperationsInput | RequestMethod
    requestUrl?: StringFieldUpdateOperationsInput | string
    requestPayload?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CronUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cronExpression?: NullableStringFieldUpdateOperationsInput | string | null
    requestMethod?: EnumRequestMethodFieldUpdateOperationsInput | RequestMethod
    requestUrl?: StringFieldUpdateOperationsInput | string
    requestPayload?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CronCreateManyInput = {
    id?: number
    name: string
    cronExpression?: string | null
    requestMethod?: RequestMethod
    requestUrl: string
    requestPayload?: string | null
    isActive?: boolean | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type CronUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    cronExpression?: NullableStringFieldUpdateOperationsInput | string | null
    requestMethod?: EnumRequestMethodFieldUpdateOperationsInput | RequestMethod
    requestUrl?: StringFieldUpdateOperationsInput | string
    requestPayload?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CronUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cronExpression?: NullableStringFieldUpdateOperationsInput | string | null
    requestMethod?: EnumRequestMethodFieldUpdateOperationsInput | RequestMethod
    requestUrl?: StringFieldUpdateOperationsInput | string
    requestPayload?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type EnumRequestMethodFilter = {
    equals?: RequestMethod
    in?: Enumerable<RequestMethod>
    notIn?: Enumerable<RequestMethod>
    not?: NestedEnumRequestMethodFilter | RequestMethod
  }

  export type BoolNullableFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableFilter | boolean | null
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type CronCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cronExpression?: SortOrder
    requestMethod?: SortOrder
    requestUrl?: SortOrder
    requestPayload?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type CronAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CronMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cronExpression?: SortOrder
    requestMethod?: SortOrder
    requestUrl?: SortOrder
    requestPayload?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type CronMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cronExpression?: SortOrder
    requestMethod?: SortOrder
    requestUrl?: SortOrder
    requestPayload?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type CronSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type EnumRequestMethodWithAggregatesFilter = {
    equals?: RequestMethod
    in?: Enumerable<RequestMethod>
    notIn?: Enumerable<RequestMethod>
    not?: NestedEnumRequestMethodWithAggregatesFilter | RequestMethod
    _count?: NestedIntFilter
    _min?: NestedEnumRequestMethodFilter
    _max?: NestedEnumRequestMethodFilter
  }

  export type BoolNullableWithAggregatesFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableWithAggregatesFilter | boolean | null
    _count?: NestedIntNullableFilter
    _min?: NestedBoolNullableFilter
    _max?: NestedBoolNullableFilter
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRequestMethodFieldUpdateOperationsInput = {
    set?: RequestMethod
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedEnumRequestMethodFilter = {
    equals?: RequestMethod
    in?: Enumerable<RequestMethod>
    notIn?: Enumerable<RequestMethod>
    not?: NestedEnumRequestMethodFilter | RequestMethod
  }

  export type NestedBoolNullableFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableFilter | boolean | null
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedEnumRequestMethodWithAggregatesFilter = {
    equals?: RequestMethod
    in?: Enumerable<RequestMethod>
    notIn?: Enumerable<RequestMethod>
    not?: NestedEnumRequestMethodWithAggregatesFilter | RequestMethod
    _count?: NestedIntFilter
    _min?: NestedEnumRequestMethodFilter
    _max?: NestedEnumRequestMethodFilter
  }

  export type NestedBoolNullableWithAggregatesFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableWithAggregatesFilter | boolean | null
    _count?: NestedIntNullableFilter
    _min?: NestedBoolNullableFilter
    _max?: NestedBoolNullableFilter
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
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