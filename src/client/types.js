/**
 * @typedef {{
 *   name: string
 *   version: string
 * }} MemoApiInfo
 */
/**
 * @typedef {{
 *   name: string
 *   pic: string
 *   address: string
 *   has_id: boolean
 *   revoked: boolean
 *   parent: string
 *   alias: string
 * }} MemoApiId
 */
/**
 * @typedef {{
 *   address: string
 *   balance: number
 *   api_token: string
 *   api_address: string
 *   api_balance: number
 * }} MemoApiBalance
 */
/**
 * @typedef {{
 *   tx_hash: string
 *   name: MemoApiName
 *   message: string
 *   topic: string
 *   date: Date
 *   likes: number
 *   tip: number
 *   replies: number
 * }} MemoApiPost
 */
/**
 * @typedef {{
 *   name: string
 *   address: string
 *   alias: string
 *   id_address: string
 *   pic: string
 * }} MemoApiName
 */
/**
 * @typedef {{
 *   token: string
 *   secret: string
 * }} MemoApiSecret
 */
/**
 * @typedef {{
 *   hash: string
 *   raw: string
 *   ins: [MemoApiTxIn]
 * }} MemoApiTx
 */
/**
 * @typedef {{
 *   value: number
 *   script: string
 * }} MemoApiTxIn
 */
/**
 * @typedef {{
 *   tx_hash: string
 *   raw: string
 * }} MemoApiRawTx
 */
/**
 * @typedef {{
 *   tx_hash: string
 *   message: string
 *   child_address: string
 *   parent_address: string
 * }} MemoApiRequestCheck
 */
/**
 * @typedef {{
 *   tx_hash: string
 *   amount: number
 *   date: string
 * }} MemoApiHistoryFund
 */
/**
 * @typedef {{
 *   tx_hash: string
 *   amount: number
 *   date: string
 * }} MemoApiHistorySpend
 */
/**
 * @typedef {{
 *   token: string
 *   address: string
 * }} MemoApiFundAddress
 */
