const blockUrlMap = {
  eth: 'https://etherscan.io/block/%v',
  etc: 'https://blockscout.com/etc/mainnet/block/%v',
  xch: 'https://www.chiaexplorer.com/blockchain/block/%v',
  btc: 'https://www.blockchain.com/btc/block/%v',
};

const uncleUrlMap = {
  eth: 'https://etherscan.io/uncle/%v',
  etc: 'https://blockscout.com/etc/mainnet/block/%v',
};

const transactionUrlMap = {
  eth: 'https://etherscan.io/tx/%v',
  etc: 'https://blockscout.com/etc/mainnet/tx/%v',
  polygon: 'https://polygonscan.com/tx/%v',
  xch: 'https://www.chiaexplorer.com/blockchain/coin/%v',
  btc: 'https://www.blockchain.com/btc/tx/%v',
};

const walletAddressUrlMap = {
  eth: 'https://etherscan.io/address/%v',
  etc: 'https://blockscout.com/etc/mainnet/address/%v',
  polygon: 'https://polygonscan.com/address/%v',
  xch: 'https://www.chiaexplorer.com/blockchain/address/%v',
  btc: 'https://www.blockchain.com/btc/address/%v',
};

const urlMaps = {
  wallet: walletAddressUrlMap,
  transaction: transactionUrlMap,
  block: blockUrlMap,
  uncle: uncleUrlMap,
};

export type CoinLinkType = keyof typeof urlMaps;
export const getCoinLink = (
  type: CoinLinkType,
  hash: string,
  coin?: string
) => {
  const urlMap = urlMaps[type];

  if (typeof coin === 'string' && coin in urlMap) {
    const key = coin as keyof typeof urlMap;
    const url = urlMap[key];
    try {
      return url.replaceAll('%v', hash);
    } catch {
      return undefined;
    }
  }

  return undefined;
};
