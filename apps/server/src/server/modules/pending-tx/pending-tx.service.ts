import { PendingTx, PendingTxRepository } from '@app/server/modules/pending-tx'
import { CacheRepository } from '@app/server/repositories'

export interface PendingTxService {
  getTxs(limit: number, page: number): Promise<PendingTx[]>
}

export class PendingTxServiceImpl implements PendingTxService {
  constructor(private readonly pendingTxRepository: PendingTxRepository, private readonly cacheRepository: CacheRepository) {}
  public getTxs(limit: number, page: number): Promise<PendingTx[]> {
    return this.pendingTxRepository.getPendingTxs(limit, page)
  }
}