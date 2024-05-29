// Uppercase<literalType>
type TipoTransacao = "credito" | "debito";

type TipoTransacaoUpper = Uppercase<TipoTransacao>

const t1: TipoTransacaoUpper = "CREDITO"

// Lowercase<literalType>

type TipoTransacaoLower = Lowercase<TipoTransacao>

const t2: TipoTransacaoLower = "credito"